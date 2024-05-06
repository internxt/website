import { NextApiHandler } from 'next';

const rateLimitMap = new Map();

export default function rateLimitMiddleware(handler: NextApiHandler) {
  return (req, res) => {
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    const limit = 5;
    const windowMs = 60 * 60 * 1000;

    console.log('REQUEST RECEIVED FROM IP', ip);

    if (!rateLimitMap.has(ip)) {
      rateLimitMap.set(ip, {
        count: 0,
        lastReset: Date.now(),
      });
    }

    const ipData = rateLimitMap.get(ip);

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
