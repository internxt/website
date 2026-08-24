import { NextApiRequest, NextApiResponse } from 'next';

import rateLimitMiddleware from '../../../utils/rate-limiter';
import { createAccount } from '@/lib/mail-tm';
import { csrf } from '@/lib/csrf';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ message: 'Method not allowed' });

  try {
    const account = await createAccount();

    return res.status(200).json(account);
  } catch (err) {
    const error = err as Error;
    return res.status(500).json({ message: error.message });
  }
}

export default csrf(rateLimitMiddleware(handler, 'create-email', 2));
