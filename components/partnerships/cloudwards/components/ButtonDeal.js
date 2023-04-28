import React from 'react';
import { isMobile } from 'react-device-detect';
import { checkout } from '../../../../lib/auth';
import { getPlanId } from '../../../../pages/api/stripe/stripeProducts';

const CLOUDWARDS_COUPON_ID = '0eu0T11z';

const ButtonDeal = ({ textContent, large }) => {
  const stripeObject = { product: 'TB21' };

  return (
    <div
      onClick={() => {
        checkout({
          planId: getPlanId(stripeObject),
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
