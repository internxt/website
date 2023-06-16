import React, { useEffect } from 'react';

import { checkout } from '../../../../lib/auth';
import { CouponType } from '../../../../pages/api/stripe/get_coupons';
import { Interval, stripeService } from '../../../services/stripeService';

//!TODO: Get the priceID for 2TB plan (monthly) and add it to the checkout function
const ButtonDeal = ({ textContent, large }) => {
  const [priceId, setPriceId] = React.useState('');
  const [coupon, setCoupon] = React.useState(null);

  useEffect(() => {
    stripeService.getSelectedPrice(Interval.Month, '2TB').then((price) => {
      setPriceId(price.priceId);
    });

    stripeService
      .getCoupon(CouponType.CloudwardsCoupon)
      .then((coupon) => {
        setCoupon(coupon);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div
      onClick={() => {
        checkout({
          planId: priceId,
          couponCode: coupon,
        });
      }}
      className={`${large ? 'w-full' : 'w-48'}  cursor-pointer rounded-lg bg-primary px-9 py-3 text-center`}
    >
      <p className="text-lg font-medium text-white">{textContent.cta}</p>
    </div>
  );
};

export default ButtonDeal;
