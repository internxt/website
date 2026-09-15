import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { getCloudflareContext } from '@opennextjs/cloudflare';

import { getClientIp } from './get-client-ip';

/**
 * Maps the `path` passed by each consumer to its Workers Rate Limiting binding.
 * The bindings are declared in wrangler.jsonc; the platform only supports a
 * `period` of 10 or 60 seconds, so the per-call `windowMs` argument is kept in
 * the signature for compatibility but the effective window is the one
 * configured on the binding.
 */
const LIMITER_BY_PATH: Record<string, keyof CloudflareEnv> = {
  'sheet-event': 'SHEET_LIMITER',
  'create-email': 'TEMP_MAIL_CREATE_LIMITER',
  'get-inbox': 'TEMP_MAIL_INBOX_LIMITER',
  'get-message': 'TEMP_MAIL_MESSAGE_LIMITER',
};

/**
 * Rate limiting middleware backed by the Cloudflare Rate Limiting binding.
 *
 * The signature is unchanged from the previous in-memory implementation so the
 * consuming endpoints do not need to be touched. `limit` and `windowMs` are now
 * configured on the binding in wrangler.jsonc instead of being applied here —
 * an in-memory Map does not persist across Workers isolates.
 */
export default function rateLimitMiddleware(
  handler: NextApiHandler,
  path: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  limit: number,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  windowMs: number = 60 * 1000,
) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const bindingName = LIMITER_BY_PATH[path];

    if (!bindingName) {
      // No binding configured for this path: fail open rather than block
      // traffic, but make it visible.
      console.warn('[rate-limiter] no rate limiting binding configured for path: %s', path);
      return handler(req, res);
    }

    let limiter: RateLimit | undefined;

    try {
      const { env } = await getCloudflareContext({ async: true });
      limiter = env[bindingName] as unknown as RateLimit | undefined;
    } catch (error) {
      // Outside the Workers runtime (e.g. `next dev` without the platform
      // proxy) there is no context. Fail open so local development works.
      console.warn('[rate-limiter] Cloudflare context unavailable, skipping rate limit');
      return handler(req, res);
    }

    if (!limiter) {
      console.warn('[rate-limiter] binding %s is not available at runtime', bindingName);
      return handler(req, res);
    }

    const ip = getClientIp(req);
    const { success } = await limiter.limit({ key: `${ip}-${path}` });

    if (!success) {
      return res.status(429).send('Too Many Requests');
    }

    return handler(req, res);
  };
}
