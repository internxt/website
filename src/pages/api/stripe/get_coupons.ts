import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method === 'OPTIONS') {
    res.status(200).json({});
    return;
  }

  if (req.method === 'GET') {
    const couponName = req.query.couponName;

    if (!couponName) {
      res.status(404).end();
      return;
    }

    const { data: promoCodeData } = await axios.get(`${process.env.NEXT_PUBLIC_PAYMENTS_API}/promo-code-info`, {
      params: {
        promotionCode: couponName,
      },
    });

    res.status(200).json(promoCodeData);
    return;
  }

  res.status(405).end();
}
