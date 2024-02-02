import { NextApiRequest, NextApiResponse } from 'next';

export enum CouponType {
  TwoTBCoupon = 'COUPON_SUBSCRIPTION_90_OFF',
  TwoTBCoupon75 = 'COUPON_SUBSCRIPTION_75_OFF',
  LifetimeGeneral = 'COUPON_LIFETIME_GENERAL',
  LifetimeSpecial = 'COUPON_LIFETIME_SPECIAL',
  CloudwardsCoupon = 'COUPON_CLOUDWARDS',
  Special15Coupon = 'COUPON_SPECIAL15',
  AnnualDiscount = 'ANNUAL_PLAN_80_DISCOUNT',
  BlackFridayCoupon = 'COUPON_BLACK_FRIDAY_2023',
  ChristmasCoupon = 'COUPON_CHRISTMAS',
  LifetimeExclusive = 'COUPON_LIFETIME_FIFTY',
  SoftSale = 'COUPON_SOFTSALE50',
  DataPrivacy = 'COUPON_DATA_PRIVACY',
}

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method === 'GET') {
    const coupon = req.query.coupon;
    const couponType = coupon as CouponType;

    if (!coupon) return res.status(404).end(); //Something went wrong while fetching the products/Coupon not found

    //Return the correct coupon
    res.status(200).send(process.env[couponType]);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
