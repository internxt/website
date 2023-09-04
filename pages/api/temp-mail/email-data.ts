import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const query = req.query;

    const email = query.email as string;
    const item = query.item as string;

    const username = email.split('@')[0];
    const domain = email.split('@')[1];

    if (!username || !domain || !item) return res.status(400).json({ message: 'Bad request' });

    const emailData = await axios.get(
      `${process.env.TEMP_MAIL_SERVER}/${process.env.NEXT_PUBLIC_TEMP_MAIL_URL}?action=readMessage&login=${username}&domain=${domain}&id=${item}`,
    );

    return res.status(200).json(emailData.data);
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
