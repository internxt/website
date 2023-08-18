import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { email, itemId, itemName } = req.query as unknown as { email: string; itemId: number; itemName: string };
    const userEmail = email.split('@')[0];
    const domain = email.split('@')[1];
    const downloadFile = await axios.get(
      `${process.env.NEXT_PUBLIC_TEMP_MAIL_URL}?action=download&login=${userEmail}&domain=${domain}&id=${itemId}&file=${itemName}`,
      {
        responseType: 'blob',
      },
    );

    return res.status(200).json(downloadFile.data);
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
