import { CouponType } from '@/lib/types/types';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method === 'GET') {
    const coupons = {
      '2TB': process.env[CouponType.Lifetime2TBDiscount],
      '5TB': process.env[CouponType.Lifetime5TBDiscount],
      '10TB': process.env[CouponType.Lifetime10TBDiscount],
    };

    //Return the correct coupon
    res.status(200).send(coupons);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
