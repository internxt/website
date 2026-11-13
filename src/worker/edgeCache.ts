export interface WorkerExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
}

export interface EdgeCache {
  match(request: Request): Promise<Response | undefined>;
  put(request: Request, response: Response): Promise<void>;
}

export type WorkerHandler<Env> = (request: Request, env: Env, ctx: WorkerExecutionContext) => Promise<Response>;

type CacheKind = 'data' | 'html';

const NEXT_DATA_PREFIX = '/_next/data/';
const TTL_SECONDS: Record<CacheKind, number> = { data: 86400, html: 600 };
const ORIGINAL_CACHE_CONTROL_HEADER = 'x-origin-cache-control';
export const EDGE_CACHE_HEADER = 'x-edge-cache';

function getCacheKind(request: Request): CacheKind | null {
  if (request.method !== 'GET') return null;
  if (request.headers.has('range') || request.headers.has('authorization')) return null;

  const { pathname } = new URL(request.url);
  if (pathname.startsWith(NEXT_DATA_PREFIX)) return 'data';

  // Next redirects "/" to the visitor's locale based on Accept-Language, so one cached copy would be wrong for others
  if (pathname === '/') return null;
  if (pathname.startsWith('/_next/') || pathname.startsWith('/api/')) return null;

  return request.headers.get('accept')?.includes('text/html') ? 'html' : null;
}

function isSharedCacheable(response: Response): boolean {
  if (response.status !== 200) return false;
  if (response.headers.has('set-cookie')) return false;
  if (response.headers.get('vary')?.includes('*')) return false;

  const cacheControl = response.headers.get('cache-control') ?? '';
  return /s-maxage=\d+/.test(cacheControl) && !/(private|no-store|no-cache)/.test(cacheControl);
}

function toStoredCopy(response: Response, kind: CacheKind): Response {
  const headers = new Headers(response.headers);
  headers.set(ORIGINAL_CACHE_CONTROL_HEADER, response.headers.get('cache-control') ?? '');
  headers.set('cache-control', `public, max-age=${TTL_SECONDS[kind]}`);
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}

function fromStoredCopy(stored: Response): Response {
  const headers = new Headers(stored.headers);
  headers.set('cache-control', stored.headers.get(ORIGINAL_CACHE_CONTROL_HEADER) ?? '');
  headers.delete(ORIGINAL_CACHE_CONTROL_HEADER);
  headers.set(EDGE_CACHE_HEADER, 'HIT');
  return new Response(stored.body, { status: stored.status, statusText: stored.statusText, headers });
}

function withStatusHeader(response: Response, status: 'MISS' | 'BYPASS'): Response {
  const headers = new Headers(response.headers);
  headers.set(EDGE_CACHE_HEADER, status);
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}

export function withEdgeCache<Env>(handler: WorkerHandler<Env>, cache: EdgeCache): WorkerHandler<Env> {
  return async (request, env, ctx) => {
    const kind = getCacheKind(request);
    if (!kind) return handler(request, env, ctx);

    const stored = await cache.match(request);
    if (stored) return fromStoredCopy(stored);

    const response = await handler(request, env, ctx);
    if (!isSharedCacheable(response)) return withStatusHeader(response, 'BYPASS');

    ctx.waitUntil(cache.put(request, toStoredCopy(response.clone(), kind)));
    return withStatusHeader(response, 'MISS');
  };
}
