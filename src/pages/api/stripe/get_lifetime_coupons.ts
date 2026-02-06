import { PromoCodeName } from '@/lib/types';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const getCoupon = async (promoCodeName: string) => {
  const { data: promoCodeData } = await axios.get(`${process.env.NEXT_PUBLIC_PAYMENTS_API}/promo-code-info`, {
    params: {
      promotionCode: promoCodeName,
    },
  });

  return promoCodeData;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method === 'GET') {
    const twoTBCoupon = getCoupon(PromoCodeName.euro2024twoTB);
    const fiveTBCoupon = getCoupon(PromoCodeName.euro2024fiveTB);
    const tenTBCoupon = getCoupon(PromoCodeName.euro2024TenTB);

    try {
      const coupons = await Promise.all([twoTBCoupon, fiveTBCoupon, tenTBCoupon]);
      const [twoTB, fiveTB, tenTB] = coupons;

      const couponCodes = {
        '2TB': twoTB,
        '5TB': fiveTB,
        '10TB': tenTB,
      };

      res.status(200).send(couponCodes);
    } catch (err) {
      console.error('Failed to fetch coupons from Stripe:', err);
      res.status(500).send({
        message: 'Internal Server Error',
      });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
