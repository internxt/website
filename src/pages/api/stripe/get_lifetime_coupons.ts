import { PromoCodeName } from '@/lib/types';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method === 'GET') {
    const coupons = {
      '2TB': process.env[PromoCodeName.euro2024twoTB],
      '5TB': process.env[PromoCodeName.euro2024fiveTB],
      '10TB': process.env[PromoCodeName.euro2024TenTB],
    };

    //Return the correct coupon
    res.status(200).send(coupons);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
