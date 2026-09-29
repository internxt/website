import { NextApiRequest, NextApiResponse } from 'next';
import { AxiosError } from 'axios';

import rateLimitMiddleware from '../../../utils/rate-limiter';
import { getClientIp } from '@/utils/get-client-ip';
import { createAccount } from '@/lib/mail-tm';
import { csrf } from '@/lib/csrf';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ message: 'Method not allowed' });

  try {
    const account = await createAccount(getClientIp(req));

    return res.status(200).json(account);
  } catch (err) {
    const error = err as AxiosError;
    console.error('[temp-mail] create-email failed', {
      url: error.config?.url,
      status: error.response?.status,
      data: error.response?.data,
    });

    if (error.response?.status === 429) {
      return res.status(429).json({ message: 'Too many requests, try again in a moment' });
    }

    return res.status(500).json({ message: 'Internal Server Error' });
  }
}

export default csrf(rateLimitMiddleware(handler, 'create-email', 4));
