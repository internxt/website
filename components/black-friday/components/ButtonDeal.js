import React from 'react';
import { checkout } from '../../../lib/auth';

const ButtonDeal = ({ lang }) => {
  const stripeObject = { product: 'TB212' };
  return (
    <>
      <button
        className="relative flex flex-row items-center justify-center space-x-4 rounded-lg bg-primary py-3 px-6 text-base text-white transition duration-100 focus:outline-none focus-visible:bg-primary-dark active:bg-primary-dark sm:text-lg"
        onClick={() => {
          window.location.href = '/pricing';
        }}
      >
        {lang === 'fr' ? "Voir plans d'abonnement" : 'Get our subscription plans'}
      </button>
    </>
  );
};

export default ButtonDeal;
