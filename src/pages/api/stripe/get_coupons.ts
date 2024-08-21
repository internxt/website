import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

interface PromotionCode {
  promoCodeName: string;
  codeId: string;
  amountOff: string;
  percentOff: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<PromotionCode | void> {
  if (req.method === 'OPTIONS') {
    res.status(200).json({});
  }

  if (req.method === 'GET') {
    const couponName = req.query.couponName;
    if (!couponName) return res.status(404).end();

    const { data: promoCodeData } = await axios.get(`${process.env.NEXT_PUBLIC_PAYMENTS_API}/promo-code-info`, {
      params: {
        promotionCode: couponName,
      },
    });

    //Return the coupon with its data
    res.status(200).send(promoCodeData);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
