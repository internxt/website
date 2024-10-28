import React from 'react';

const ButtonDeal = ({ lang }) => {
  return (
    <>
      <button
        className="relative flex flex-row items-center justify-center rounded-lg bg-primary py-3 px-6 text-base text-white transition duration-100 focus:outline-none focus-visible:bg-primary-dark active:bg-primary-dark sm:text-lg"
        onClick={() => {
          window.location.href = '/pricing';
        }}
      >
        {lang === 'fr' ? "Voir plans d'abonnement" : 'Choose a plan'}
      </button>
    </>
  );
};

export default ButtonDeal;
