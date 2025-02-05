import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const API_KEY = process.env.MAILERLITE_API_KEY_CONTACT_SALES;

const emailLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: { status: 'Error' },
});

export default async function handleSubscribe(req: NextApiRequest, res: NextApiResponse) {
  await emailLimiter(req as any, res as any, async () => {
    if (req.method !== 'POST') {
      return res.status(405).json({ status: 'Error',);
    }

    const { email, name, company, phone, storage, help, isBusiness } = req.body;

    try {
      const response = await contactSales(email, name, company, phone, storage, help, isBusiness);
      res.status(200).json({ status: 'Success', data: response });
    } catch (error: any) {
      res.status(500).json({
        status: 'Error',
        message: error.response?.data?.message ,
      });
    }
  });
}

async function contactSales(
  email: string,
  name: string,
  company: string,
  phone: string,
  storage: string,
  help: string,
  isBusiness: boolean,
) {
  const groupId = '145043133822928056';
  const payload = {
    email,
    fields: {
      name,
      company,
      phone,
      storage,
      help,
      origin_contact: isBusiness ? 'B2B' : 'S3',
    },
    groups: [groupId],
  };

  try {
    const response = await axios.post(`${process.env.MAILERLITE_API}/api/subscribers`, payload, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message);
  }
}
