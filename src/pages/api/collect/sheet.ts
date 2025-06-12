import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

import rateLimitMiddleware from '../temp-mail/rate-limiter';
import { verifyRecaptcha } from '@/utils/verifyRecaptcha';

interface SheetPayload {
  gclid: string;
  name: string;
  value: string;
  currency?: string;
  timestamp: string;
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'OPTIONS') {
    res.status(200).json({});
  }

  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });
  const recaptchaToken = req.headers['recaptcha'] as string;

  const { gclid, name, value, currency = 'EUR', timestamp }: SheetPayload = req.body;

  if (!gclid || !name || !value || !timestamp) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Validate reCAPTCHA
  try {
    const recaptchaVerification = await verifyRecaptcha(recaptchaToken);
    const isRecaptchaValid = recaptchaVerification.data.success && recaptchaVerification.data.action === 'conversion';

    if (!isRecaptchaValid) {
      return res.status(400).json({ message: 'Invalid reCAPTCHA' });
    }
  } catch (error) {
    console.error('ReCAPTCHA verification failed:', error);
    return res.status(400).json({ message: 'ReCAPTCHA verification failed' });
  }

  // Send data to Sheets API
  try {
    await axios.post(`${process.env.SHEETS_API_URL}/api/collect`, {
      gclid,
      name,
      value,
      currency,
      timestamp,
    });

    return res.status(200).json({ message: 'Data sent successfully' });
  } catch (error) {
    console.error('Error sending data to Sheets API:', error);
    return res.status(500).json({ message: 'Failed to send data to Sheets API' });
  }
}

export default rateLimitMiddleware(handler, 'sheet-event', 10);
