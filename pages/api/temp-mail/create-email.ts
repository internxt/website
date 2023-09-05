import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const email = await axios.get(`${process.env.NEXT_PUBLIC_TEMP_MAIL_URL}?action=genRandomMailbox&count=1`);

    if (email.status === 500) {
      const email = await axios.get(
        `${process.env.TEMP_MAIL_SERVER}/${process.env.NEXT_PUBLIC_TEMP_MAIL_URL}?action=genRandomMailbox&count=1`,
      );

      return res.status(200).json(email.data);
    }

    return res.status(200).json(email.data);
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
