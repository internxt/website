import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const email = await axios.get(`https://api.tempmail.lol/generate`);

    return res.status(200).json(email.data);
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
