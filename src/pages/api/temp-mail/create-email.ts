import { NextApiRequest, NextApiResponse } from 'next';
import { AxiosError } from 'axios';

import rateLimitMiddleware from '../../../utils/rate-limiter';
import { createAccount } from '@/lib/mail-tm';
import { csrf } from '@/lib/csrf';

const RETRY_AFTER_SECONDS = 5;

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ message: 'Method not allowed' });

  try {
    const account = await createAccount();

    return res.status(200).json(account);
  } catch (err) {
    const error = err as AxiosError;
    const status = error.response?.status;

    console.error('[temp-mail] create-email failed', {
      status,
      data: error.response?.data,
      message: error.message,
    });

    if (status === 429) {
      res.setHeader('Retry-After', RETRY_AFTER_SECONDS);

      return res.status(429).json({ message: 'Too Many Requests', retryAfter: RETRY_AFTER_SECONDS });
    }

    return res.status(500).json({ message: 'Internal Server Error' });
  }
}

export default csrf(rateLimitMiddleware(handler, 'create-email', 4));
