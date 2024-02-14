import rateLimit from '@/components/utils/rate-limit';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const TEMP_MAIL_API_KEY = process.env.TEMP_MAIL_API_KEY;

const limiter = rateLimit({
  interval: 60 * 1000,
  uniqueTokenPerInterval: 1000,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      await limiter.check(res, 5, 'create-email');

      const email = await axios.get(`${process.env.NEXT_PUBLIC_TEMP_MAIL_URL}/inbox/create`, {
        headers: {
          Authorization: `Bearer ${TEMP_MAIL_API_KEY}`,
        },
      });

      return res.status(200).json(email.data);
    } catch (err) {
      const error = err as Error;
      return res.status(500).json({ message: error.message });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
