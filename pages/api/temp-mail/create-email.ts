import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const BANANACRUMBS_ID = process.env.BANANACRUMBS_ID as string;
const BANANACRUMBS_MFA = process.env.BANANACRUMBS_MFA as string;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const email = await axios.get(`${process.env.NEXT_PUBLIC_TEMP_MAIL_URL}/generate`, {
      headers: {
        'X-BananaCrumbs-ID': BANANACRUMBS_ID,
        'X-BananaCrumbs-MFA': BANANACRUMBS_MFA,
      },
    });

    return res.status(200).json(email.data);
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
