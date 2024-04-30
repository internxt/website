import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const CONVERTER_URL =
  process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_FILE_CONVERTER_API : 'http://localhost:3000';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const auth = req.headers['authorization']?.split('Bearer ')[1];

    const decodedAuth = atob(auth as string);

    if (decodedAuth !== process.env.NEXT_PUBLIC_IOS_APP_ID) return res.status(401).send('Unauthenticated');

    try {
      const email = await axios.get(`${CONVERTER_URL}/api/temp-mail/address`);

      return res.status(200).json(email.data);
    } catch (err) {
      const error = err as Error;
      console.log('ERROR:', error.message);
      return res.status(500).json({ message: error.message });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
