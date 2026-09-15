import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { getCloudflareContext } from '@opennextjs/cloudflare';

import { getClientIp } from './get-client-ip';

const LIMITER_BY_PATH: Record<string, keyof CloudflareEnv> = {
  'sheet-event': 'SHEET_LIMITER',
  'create-email': 'TEMP_MAIL_CREATE_LIMITER',
  'get-inbox': 'TEMP_MAIL_INBOX_LIMITER',
  'get-message': 'TEMP_MAIL_MESSAGE_LIMITER',
};

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
      console.warn('[rate-limiter] no rate limiting binding configured for path: %s', path);
      return handler(req, res);
    }

    let limiter: RateLimit | undefined;

    try {
      const { env } = await getCloudflareContext({ async: true });
      limiter = env[bindingName] as unknown as RateLimit | undefined;
    } catch (error) {
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
