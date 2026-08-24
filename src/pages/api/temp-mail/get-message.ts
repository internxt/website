import { NextApiRequest, NextApiResponse } from 'next';
import { AxiosError } from 'axios';

import rateLimitMiddleware from '../../../utils/rate-limiter';
import { getMessage } from '@/lib/mail-tm';
import { csrf } from '@/lib/csrf';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ message: 'Method not allowed' });

  const { email, token, messageId } = req.query;

  if (typeof email !== 'string' || typeof token !== 'string' || typeof messageId !== 'string') {
    return res.status(400).json({ message: 'Invalid parameters' });
  }

  try {
    const messageObj = await getMessage(email, token, messageId);

    return res.status(200).json(messageObj);
  } catch (err) {
    const error = err as AxiosError;

    if (error.response?.status === 404) {
      return res.status(404).json({ message: 'Message not found' });
    }

    return res.status(500).json({ message: 'Internal Server Error' });
  }
}

export default csrf(rateLimitMiddleware(handler, 'get-message', 20));
