import React from 'react';

const ButtonDeal = ({ lang }) => {
  const TB2 = {
    stripeID: '2TB',
    storage: '2TB',
  };

  return (
    <>
      <div className="pt-14">
        <button
          className="relative flex h-14 w-48 flex-row items-center justify-center space-x-4 rounded-4xl bg-primary px-8 text-lg text-white transition duration-100 focus:outline-none focus-visible:bg-primary-dark active:bg-primary-dark sm:mt-0 sm:text-base"
          onClick={() => console.log('signup')}
        >
          {lang === 'es' ? 'Obtén la oferta' : 'Get the deal'}
        </button>
      </div>
    </>
  );
};

export default ButtonDeal;
