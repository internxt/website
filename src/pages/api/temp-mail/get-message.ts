import { NextApiRequest, NextApiResponse } from 'next';
import rateLimitMiddleware from './rate-limiter';
import axios from 'axios';
import { csrf } from '@/lib/csrf';

const CONVERTER_URL =
  process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_FILE_CONVERTER_API : 'http://localhost:3000';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, token, messageId } = req.query;

  if (!email || !token || !messageId) {
    return res.status(400).json({ message: 'Email, token and messageId are required' });
  }

  if (typeof email !== 'string' || typeof token !== 'string' || typeof messageId !== 'string') {
    return res.status(400).json({ message: 'Invalid parameter types' });
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  const tokenRegex = /^[a-zA-Z0-9\-_]{1,200}$/;
  if (!tokenRegex.test(token)) {
    return res.status(400).json({ message: 'Invalid token format' });
  }

  const messageIdRegex = /^[a-zA-Z0-9\-_]{1,200}$/;
  if (!messageIdRegex.test(messageId)) {
    return res.status(400).json({ message: 'Invalid messageId format' });
  }

  if (
    email.includes('..') ||
    token.includes('..') ||
    messageId.includes('..') ||
    email.includes('/') ||
    token.includes('/') ||
    messageId.includes('/') ||
    email.includes('\\') ||
    token.includes('\\') ||
    messageId.includes('\\')
  ) {
    return res.status(400).json({ message: 'Invalid characters in parameters' });
  }

  try {
    const encodedEmail = encodeURIComponent(email);
    const encodedToken = encodeURIComponent(token);
    const encodedMessageId = encodeURIComponent(messageId);

    const inbox = await axios.get(
      `${CONVERTER_URL}/api/temp-mail/messages/selectedMessage/${encodedEmail}/${encodedToken}/${encodedMessageId}`,
    );

    return res.status(200).json(inbox.data.messageObj);
  } catch (err) {
    const error = err as Error;

    if (error.message.includes('404')) {
      return res.status(404).json({
        message: error.message,
      });
    }

    return res.status(500).json({
      message: error.message,
    });
  }
}

export default csrf(rateLimitMiddleware(handler, 'get-message', 20));
