import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, firstName, groups } = req.body;

  try {
    await createUser(email, groups, firstName);

    res.status(200).json({ status: 'OK', email: email });
  } catch (error) {
    res.status(500).json({ status: 'Error', message: error.message });
  }
}

async function createUser(email: string, groups: string[], firstName?: string) {
  const object = {
    email: email,
    fields: {
      name: firstName,
    },
    status: 'active',
    groups: groups,
  };

  const createUser = await axios.post(`${process.env.MAILERLITE_API}/api/subscribers`, object, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
    },
  });

  return createUser.data;
}
