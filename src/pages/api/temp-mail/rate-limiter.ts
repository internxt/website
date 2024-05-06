import { NextApiHandler } from 'next';

const rateLimitMap = new Map();

export default function rateLimitMiddleware(handler: NextApiHandler, path: string, limit: number, windowMs = 60 * 60 * 1000) {
  return (req, res) => {
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;;
    const mapIdentifier = `${ip}-${path}`;

    console.log('REQUEST RECEIVED FROM IP', ip);

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
      return res.status(429).send("Too Many Requests");
    }

    ipData.count += 1;

    return handler(req, res);
  };
}
