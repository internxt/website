import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const API_KEY = process.env.MAILERLITE_API_KEY_CONTACT_SALES;

export default async function handleSuscribe(req: NextApiRequest, res: NextApiResponse) {
  const { email, name, company, phone, storage, help, isBusiness } = req.body;

  try {
    await contactSales(email, name, company, phone, storage, help, isBusiness);
  } catch (error) {
    res.status(500).json({ status: 'Error', message: error.message });
  }
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
    email: email,
    fields: {
      name: name,
      company: company,
      phone: phone,
      storage: storage,
      help: help,
      origin_contact: isBusiness ? 'B2B' : 'S3',
    },

    groups: [groupId],
  };

  const contactSales = await axios.post(`${process.env.MAILERLITE_API}/api/subscribers`, payload, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  return contactSales.data;
}
