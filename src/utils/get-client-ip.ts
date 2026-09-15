import { NextApiRequest } from 'next';

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
