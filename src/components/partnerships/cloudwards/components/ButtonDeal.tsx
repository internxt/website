import React, { useEffect } from 'react';

import { checkout } from '../../../../lib/auth';
import { Interval, stripeService } from '../../../services/stripe.service';
import { currencyService } from '../../../services/currency.service';
import { CouponType } from '@/lib/types/types';

const ButtonDeal = ({ textContent, large }) => {
  const [priceId, setPriceId] = React.useState('');
  const [coupon, setCoupon] = React.useState<string>();
  const [currency, setCurrency] = React.useState();

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

    currencyService.getCurrencyPrice().then((currency) => {
      setCurrency(currency);
    });
  }, []);
  return (
    <div
      onClick={() => {
        checkout({
          planId: priceId,
          couponCode: coupon,
          currency: currency,
        });
      }}
      className={`${large ? 'w-full' : 'w-48'}  cursor-pointer rounded-lg bg-primary px-9 py-3 text-center`}
    >
      <p className="text-lg font-medium text-white">{textContent.cta}</p>
    </div>
  );
};

export default ButtonDeal;
