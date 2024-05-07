import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const windowMsValue = process.env.NODE_ENV !== 'production' ? 1000 : 60 * 60 * 1000;

const rateLimitMap = new Map();

export default function rateLimitMiddleware(
  handler: NextApiHandler,
  path: string,
  limit: number,
  windowMs = windowMsValue,
) {
  return (req: NextApiRequest, res: NextApiResponse) => {
    const ip = req.headers['x-forwarded-for'];
    const mapIdentifier = `${ip}-${path}`;

    if (!rateLimitMap.has(mapIdentifier)) {
      rateLimitMap.set(mapIdentifier, {
        count: 0,
        lastReset: Date.now(),
      });
    }

    const ipData = rateLimitMap.get(mapIdentifier);

    if (Date.now() - ipData.lastReset > windowMs) {
      ipData.count = 0;
      ipData.lastReset = Date.now();
    }

    if (ipData.count >= limit) {
      console.log(`Identifier ${mapIdentifier} is banned`);

      return res.status(429).send('Too Many Requests');
    }

    ipData.count += 1;

    return handler(req, res);
  };
}
