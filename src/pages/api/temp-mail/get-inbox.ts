import { NextApiRequest, NextApiResponse } from 'next';
import { AxiosError } from 'axios';

import rateLimitMiddleware from '@/utils/rate-limiter';
import { getInbox } from '@/lib/mail-tm';
import { csrf } from '@/lib/csrf';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ message: 'Method not allowed' });

  const { email, token } = req.query;

  if (!email || typeof email !== 'string' || !token || typeof token !== 'string') {
    return res.status(400).json({ message: 'Invalid parameters' });
  }

  try {
    const mails = await getInbox(email, token);

    return res.status(200).json(mails);
  } catch (err) {
    const error = err as AxiosError;

    if (error.response?.status === 401) {
      return res.status(401).json({ message: 'Email has expired' });
    }

    if (error.response?.status === 404) {
      return res.status(404).json({ message: 'Inbox not found' });
    }

    return res.status(500).json({ message: 'Internal Server Error' });
  }
}

export default csrf(rateLimitMiddleware(handler, 'get-inbox', 15));
