import React from 'react';
import { checkout } from '../../../lib/auth';

const ButtonDeal = ({ lang }) => {
  return (
    <>
      <button
        className="relative flex h-14 w-48 flex-row items-center justify-center space-x-4 rounded-4xl bg-primary px-8 text-lg text-white transition duration-100 focus:outline-none focus-visible:bg-primary-dark active:bg-primary-dark sm:mt-0 sm:text-base"
        onClick={() => {
          checkout('plan_FkTXxEg3GZW0pg');
        }}
      >
        {lang === 'es' ? 'Obtén la oferta' : 'Get the deal'}
      </button>
    </>
  );
};

export default ButtonDeal;
