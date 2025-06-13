import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

import rateLimitMiddleware from '../temp-mail/rate-limiter';
import { encode } from 'querystring';

interface SheetPayload {
  gclid: string;
  name: string;
  value: string;
  currency?: string;
  timestamp: string;
  captcha: string;
}

const GOOGLE_RECAPTCHA_V3_ENDPOINT = process.env.RECAPTCHA_V3_ENDPOINT as string;

async function verifyRecaptcha(captcha: string) {
  const body = {
    secret: process.env.RECAPTCHA_V3,
    response: captcha,
  };

  return axios
    .post(GOOGLE_RECAPTCHA_V3_ENDPOINT, encode(body), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    .then((res: any) => {
      if (!res.data.success) {
        throw Error(res.data['error-codes']);
      }

      const scoreThreshold = process.env.RECAPTCHA_V3_SCORE_THRESHOLD ?? 0.5;
      const { score } = res.data;

      if (score < scoreThreshold) {
        throw Error(`Score ${score} under ${scoreThreshold}`);
      }

      const data = res.data;

      return {
        data: {
          success: data.success,
          action: data.action,
        },
      };
    });
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'OPTIONS') {
    res.status(200).json({});
  }

  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

  const { gclid, name, value, currency = 'EUR', timestamp, captcha }: SheetPayload = JSON.parse(req.body);

  if (!gclid || !name || !value || !timestamp || !captcha) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  if (!captcha) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Validate reCAPTCHA
  console.log('Verifying reCAPTCHA token...');

  try {
    const recaptchaVerification = await verifyRecaptcha(captcha);
    const isRecaptchaValid = recaptchaVerification.data.success && recaptchaVerification.data.action === 'conversion';

    if (!isRecaptchaValid) {
      return res.status(400).json({ message: 'Invalid token' });
    }
  } catch {
    return res.status(400).json({ message: 'Token verification failed' });
  }

  console.log('ReCAPTCHA verification successful');

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
  } catch {
    return res.status(500).json({ message: 'Failed to send data to Sheets API' });
  }
}

export default rateLimitMiddleware(handler, 'sheet-event', 10);
