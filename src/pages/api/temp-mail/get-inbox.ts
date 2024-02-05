import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const BANANACRUMBS_ID = process.env.BANANACRUMBS_ID as string;
const BANANACRUMBS_MFA = process.env.BANANACRUMBS_MFA as string;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { token } = req.query;

    const inbox = await axios.get(`${process.env.NEXT_PUBLIC_TEMP_MAIL_URL}/auth/${token}`, {
      headers: {
        'X-BananaCrumbs-ID': BANANACRUMBS_ID,
        'X-BananaCrumbs-MFA': BANANACRUMBS_MFA,
      },
    });

    return res.status(200).json(inbox.data);
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
