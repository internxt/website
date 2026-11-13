import assert from 'node:assert/strict';
import { beforeEach, describe, it } from 'node:test';
// @ts-ignore node's type stripping needs the explicit extension
import { EDGE_CACHE_HEADER, withEdgeCache } from './edgeCache.ts';
// @ts-ignore node's type stripping needs the explicit extension
import type { EdgeCache } from './edgeCache.ts';

const DATA_URL = 'https://internxt.com/_next/data/build123/en/about.json';
const HTML_URL = 'https://internxt.com/about';
const SHARED_CACHE_CONTROL = 's-maxage=31536000';

function buildCache(): EdgeCache & { entries: Map<string, Response> } {
  const entries = new Map<string, Response>();
  return {
    entries,
    match: async (request) => entries.get(request.url)?.clone(),
    put: async (request, response) => {
      entries.set(request.url, response);
    },
  };
}

function buildContext() {
  const pending: Promise<unknown>[] = [];
  return {
    waitUntil: (promise: Promise<unknown>) => pending.push(promise),
    flush: () => Promise.all(pending),
  };
}

function htmlRequest(url: string, headers: Record<string, string> = {}) {
  return new Request(url, { headers: { accept: 'text/html', ...headers } });
}

describe('withEdgeCache', () => {
  let cache: ReturnType<typeof buildCache>;
  let calls: number;
  let responseInit: { status: number; headers: Record<string, string> };
  const handler = async () => {
    calls++;
    return new Response('body', responseInit);
  };

  beforeEach(() => {
    cache = buildCache();
    calls = 0;
    responseInit = { status: 200, headers: { 'cache-control': SHARED_CACHE_CONTROL } };
  });

  it('serves the second /_next/data request from cache without calling the handler', async () => {
    const ctx = buildContext();
    const cached = withEdgeCache(handler, cache);

    const first = await cached(new Request(DATA_URL), {}, ctx);
    await ctx.flush();
    const second = await cached(new Request(DATA_URL), {}, ctx);

    assert.equal(first.headers.get(EDGE_CACHE_HEADER), 'MISS');
    assert.equal(second.headers.get(EDGE_CACHE_HEADER), 'HIT');
    assert.equal(await second.text(), 'body');
    assert.equal(calls, 1);
  });

  it('restores the origin cache-control on a hit and stores a short ttl for html', async () => {
    const ctx = buildContext();
    const cached = withEdgeCache(handler, cache);

    await cached(htmlRequest(HTML_URL), {}, ctx);
    await ctx.flush();
    const stored = cache.entries.get(HTML_URL);
    const hit = await cached(htmlRequest(HTML_URL), {}, ctx);

    assert.equal(stored?.headers.get('cache-control'), 'public, max-age=600');
    assert.equal(hit.headers.get('cache-control'), SHARED_CACHE_CONTROL);
    assert.equal(hit.headers.has('x-origin-cache-control'), false);
  });

  it('never caches the root path because its locale redirect depends on Accept-Language', async () => {
    const ctx = buildContext();
    const cached = withEdgeCache(handler, cache);

    await cached(htmlRequest('https://internxt.com/'), {}, ctx);
    await cached(htmlRequest('https://internxt.com/'), {}, ctx);

    assert.equal(calls, 2);
    assert.equal(cache.entries.size, 0);
  });

  for (const [name, request] of [
    ['POST requests', new Request(DATA_URL, { method: 'POST' })],
    ['range requests', new Request(DATA_URL, { headers: { range: 'bytes=0-10' } })],
    ['authorized requests', new Request(DATA_URL, { headers: { authorization: 'Bearer x' } })],
    ['api routes', htmlRequest('https://internxt.com/api/stripe/get_coupons')],
    ['static chunks', new Request('https://internxt.com/_next/static/chunks/a.js')],
    ['non-html pages', new Request(HTML_URL, { headers: { accept: 'image/png' } })],
  ] as const) {
    it(`skips the cache for ${name}`, async () => {
      const ctx = buildContext();
      const cached = withEdgeCache(handler, cache);

      const response = await cached(request, {}, ctx);
      await ctx.flush();

      assert.equal(response.headers.has(EDGE_CACHE_HEADER), false);
      assert.equal(cache.entries.size, 0);
    });
  }

  for (const [name, init] of [
    ['server-rendered private responses', { status: 200, headers: { 'cache-control': 'private, no-cache, no-store' } }],
    ['responses without s-maxage', { status: 200, headers: { 'cache-control': 'max-age=60' } }],
    ['responses that set cookies', { status: 200, headers: { 'cache-control': SHARED_CACHE_CONTROL, 'set-cookie': 'a=b' } }],
    ['redirects', { status: 307, headers: { 'cache-control': SHARED_CACHE_CONTROL, location: '/es' } }],
    ['errors', { status: 404, headers: { 'cache-control': SHARED_CACHE_CONTROL } }],
  ] as const) {
    it(`does not store ${name}`, async () => {
      responseInit = { status: init.status, headers: { ...init.headers } };
      const ctx = buildContext();
      const cached = withEdgeCache(handler, cache);

      const response = await cached(new Request(DATA_URL), {}, ctx);
      await ctx.flush();

      assert.equal(response.headers.get(EDGE_CACHE_HEADER), 'BYPASS');
      assert.equal(cache.entries.size, 0);
    });
  }
});
