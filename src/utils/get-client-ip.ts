import { NextApiRequest } from 'next';

/**
 * Resolves the client IP behind Cloudflare.
 *
 * `CF-Connecting-IP` is set by Cloudflare on every request reaching the Worker
 * and cannot be spoofed by the client, so it is preferred over
 * `x-forwarded-for`. `req.socket.remoteAddress` does not exist on Workers.
 */
export function getClientIp(req: NextApiRequest): string {
  const cfConnectingIp = req.headers['cf-connecting-ip'];

  if (typeof cfConnectingIp === 'string' && cfConnectingIp.length > 0) {
    return cfConnectingIp;
  }

  const forwarded = req.headers['x-forwarded-for'];

  if (typeof forwarded === 'string') {
    return forwarded.split(',')[0].trim() || 'unknown';
  }

  return forwarded?.[0] || 'unknown';
}
