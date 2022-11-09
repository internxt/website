import React from 'react';
import { checkout } from '../../../lib/auth';
import { getPlanId } from '../../../pages/api/stripe/stripeProducts';

const ButtonDeal = ({ lang }) => {
  const stripeObject = { product: 'TB212' };
  return (
    <>
      <button
        className="relative flex h-14 w-48 flex-row items-center justify-center space-x-4 rounded-4xl bg-primary px-8 text-base text-white transition duration-100 focus:outline-none focus-visible:bg-primary-dark active:bg-primary-dark sm:text-lg"
        onClick={() => {
          checkout(getPlanId(stripeObject));
        }}
      >
        {lang === 'fr' ? "Obtenez l'offre" : 'Get the deal'}
      </button>
    </>
  );
};

export default ButtonDeal;
