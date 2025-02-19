import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const API_KEY = process.env.MAILERLITE_API_KEY_CONTACT_SALES;

const requestTimestamps = new Map<string, number>();
const THROTTLE_TIME = 60 * 1000;

export default async function handleSubscribe(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'Error' });
  }

  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const now = Date.now();

  if (requestTimestamps.has(ip as string)) {
    const lastRequest = requestTimestamps.get(ip as string) || 0;
    if (now - lastRequest < THROTTLE_TIME) {
      return res.status(429).json({ status: 'Error' });
    }
  }

  requestTimestamps.set(ip as string, now);

  const { email, name, company, phone, storage, help, origin_contact } = req.body;

  try {
    const response = await contactSales(email, name, company, phone, storage, help, origin_contact);
    res.status(200).json({ status: 'Success', data: response });
  } catch (error: any) {
    res.status(500).json({
      status: 'Error',
      message: error.response?.data?.message,
    });
  }
}

async function contactSales(
  email: string,
  name: string,
  company: string,
  phone: string,
  storage: string,
  help: string,
  origin_contact: string,
) {
  const groupId = '145043133822928056';
  const payload = {
    email,
    groups: [groupId],
    fields: {
      name,
      company,
      phone,
      storage,
      help,
      origin_contact,
    },
  };

  console.log('payload', payload);
  try {
    const response = await axios.post(`${process.env.MAILERLITE_API}/api/subscribers`, payload, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    console.log('Respuesta de MailerLite:', response.data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message);
  }
}
