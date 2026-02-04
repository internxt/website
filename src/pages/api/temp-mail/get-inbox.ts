import { NextApiRequest, NextApiResponse } from 'next';
import axios, { AxiosError } from 'axios';
import rateLimitMiddleware from '@/utils/rate-limiter';
import { csrf } from '@/lib/csrf';

const CONVERTER_URL =
  process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_FILE_CONVERTER_API : 'http://localhost:3000';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ message: 'Method not allowed' });

  const { email, token } = req.query;

  if (!email || typeof email !== 'string' || !token || typeof token !== 'string') {
    return res.status(400).json({ message: 'Invalid parameters' });
  }

  try {
    const safeEmail = encodeURIComponent(email);
    const safeToken = encodeURIComponent(token);

    const response = await axios.get(`${CONVERTER_URL}/api/temp-mail/messages/${safeEmail}/${safeToken}`);
    return res.status(200).json(response.data.mails);
  } catch (err) {
    const error = err as AxiosError;

    if (error.response?.status === 404) {
      return res.status(404).json({ message: 'Inbox not found' });
    }

    return res.status(500).json({ message: 'Internal Server Error' });
  }
}

export default csrf(rateLimitMiddleware(handler, 'get-inbox', 15));
