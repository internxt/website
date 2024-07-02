import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET')
    return res.status(405).send({
      message: 'Method not allowed',
    });

  try {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_COUNTRY_API_URL}`);
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send({
      message: 'Server internal error',
    });
  }
}
