import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { email } = req.query as { email: string };
    const userEmail = email.split('@')[0];
    const domain = email.split('@')[1];
    const inbox = await axios.get(
      `${process.env.TEMP_MAIL_SERVER}/${process.env.NEXT_PUBLIC_TEMP_MAIL_URL}?action=getMessages&login=${userEmail}&domain=${domain}`,
    );
    return res.status(200).json(inbox.data);
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
