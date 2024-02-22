import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const TEMP_MAIL_API_KEY = process.env.TEMP_MAIL_API_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { token } = req.query;
    try {
      const inbox = await axios.get(`${process.env.NEXT_PUBLIC_TEMP_MAIL_URL}/inbox?token=${token}`, {
        headers: {
          Authorization: `Bearer ${TEMP_MAIL_API_KEY}`,
        },
      });

      return res.status(200).json(inbox.data);
    } catch (err) {
      const error = err as Error;
      return res.status(500).json({
        message: error.message,
      });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
