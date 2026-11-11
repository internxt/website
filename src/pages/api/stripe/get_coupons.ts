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
    return;
  }

  if (req.method !== 'GET') {
    res.status(405).end();
    return;
  }

  const couponName = req.query.couponName;
  if (!couponName) {
    res.status(404).end();
    return;
  }

  try {
    const { data: promoCodeData } = await axios.get(`${process.env.NEXT_PUBLIC_PAYMENTS_API}/promo-code-info`, {
      params: {
        promotionCode: couponName,
      },
    });

    //Return the coupon with its data
    res.status(200).send(promoCodeData);
  } catch (err) {
    const status = axios.isAxiosError(err) && err.response ? err.response.status : 502;
    res.status(status).json({ message: 'Coupon not available' });
  }
}
