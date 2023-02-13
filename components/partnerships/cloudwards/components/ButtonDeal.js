import React from 'react';
import { isMobile } from 'react-device-detect';
import { checkout } from '../../../../lib/auth';
import { getPlanId } from '../../../../pages/api/stripe/stripeProducts';

const ButtonDeal = ({ textContent, large }) => {
  const stripeObject = { product: 'TB21' };

  return (
    <div
      onClick={() => {
        if (isMobile) {
          window.location.replace(
            `https://drive.internxt.com/new?planId=${getPlanId(stripeObject)}&couponCode=0eu0T11z&mode=subscription`,
          );
        } else {
          checkout(getPlanId(stripeObject));
        }
      }}
      className={`${large ? 'w-full' : 'w-48'}  cursor-pointer rounded-full bg-primary px-9 py-3 text-center`}
    >
      <p className="text-lg font-medium text-white">{textContent.cta}</p>
    </div>
  );
};

export default ButtonDeal;
