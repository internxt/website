import React from 'react';
import { checkout } from '../../../lib/auth';
import { getPlanId } from '../../../pages/api/stripe/stripeProducts';

const ButtonDeal = ({ textContent }) => {
  const stripeObject = { product: 'TB21' };

  return (
    <div
      onClick={() => {
        checkout(getPlanId(stripeObject));
      }}
      className="w-48 cursor-pointer rounded-full bg-primary px-9 py-4 text-center"
    >
      <p className="text-lg font-medium text-white">{textContent.cta}</p>
    </div>
  );
};

export default ButtonDeal;
