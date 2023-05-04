import React from 'react';
import PriceTable from './PriceTable';
import { Coin, CreditCard, Detective } from 'phosphor-react';
import NormalPriceTable from './NormalPriceTable';

const NormalPaymentSection = ({ lang, textContent, country }) => {
  return (
    <section id="payment" className="overflow-hidden pb-20">
      <div className="flex flex-col justify-center px-6 text-center">
        <p className="text-4xl font-semibold">{textContent.normalSection.title}</p>
        <p className="pt-4 text-xl font-normal">{textContent.normalSection.description}</p>
      </div>

      <div className="my-8 sm:my-12">
        <NormalPriceTable lang={lang} country={country} />
      </div>

      <div className="mb-20 flex flex-row items-center justify-center space-x-1">
        <img
          className="h-5"
          loading="lazy"
          src="../../images/lifetime/icons/lock-green-icon.png"
          alt="Lock"
          draggable="false"
        />

        <span className="text-normal font-medium text-neutral-100 md:text-sm">{textContent.securePayment}</span>
      </div>
    </section>
  );
};

export default NormalPaymentSection;
