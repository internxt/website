import React, { useEffect } from 'react';

import { checkout } from '../../../../lib/auth';
import { Interval, stripeService } from '../../../services/getPrices';

const CLOUDWARDS_COUPON_ID = '0eu0T11z';

//!TODO: Get the priceID for 2TB plan (monthly) and add it to the checkout function
const ButtonDeal = ({ textContent, large }) => {
  const [priceId, setPriceId] = React.useState('');
  useEffect(() => {
    stripeService.getSelectedPrice(Interval.Month, '2TB').then((price) => {
      setPriceId(price.priceId);
    });
  }, []);
  return (
    <div
      onClick={() => {
        checkout({
          planId: priceId,
          couponCode: CLOUDWARDS_COUPON_ID,
        });
      }}
      className={`${large ? 'w-full' : 'w-48'}  cursor-pointer rounded-lg bg-primary px-9 py-3 text-center`}
    >
      <p className="text-lg font-medium text-white">{textContent.cta}</p>
    </div>
  );
};

export default ButtonDeal;
