import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const CLEANUP_INTERVAL_MS = 5 * 60 * 1000;
let lastCleanup = Date.now();

const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

function cleanUpOldKeys(windowMs: number) {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL_MS) return;

  rateLimitMap.forEach((value, key) => {
    if (now - value.lastReset > windowMs) {
      rateLimitMap.delete(key);
    }
  });

  lastCleanup = now;
}

export default function rateLimitMiddleware(
  handler: NextApiHandler,
  path: string,
  limit: number,
  windowMs: number = 60 * 1000,
) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    cleanUpOldKeys(windowMs);

    const forwarded = req.headers['x-forwarded-for'];
    const ip = typeof forwarded === 'string' ? forwarded.split(',')[0] : forwarded?.[0] || 'unknown';
    const mapIdentifier = `${ip}-${path}`;

    if (!rateLimitMap.has(mapIdentifier)) {
      rateLimitMap.set(mapIdentifier, {
        count: 0,
        lastReset: Date.now(),
      });
    }

    const ipData = rateLimitMap.get(mapIdentifier)!;

    if (Date.now() - ipData.lastReset > windowMs) {
      ipData.count = 0;
      ipData.lastReset = Date.now();
    }

    if (ipData.count >= limit) {
      return res.status(429).send('Too Many Requests');
    }

    ipData.count += 1;

    return handler(req, res);
  };
}
