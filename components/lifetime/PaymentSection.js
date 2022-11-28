import React from 'react';
import PriceTable from './PriceTable';

const PaymentSection = ({ lang, textContent }) => {
  return (
    <section className="overflow-hidden pt-10">
      <div className="flex flex-col justify-center pt-10 text-center">
        <p className="text-4xl font-semibold">{textContent.title}</p>
        <p className="pt-4 text-xl font-normal">{textContent.description}</p>
      </div>
      <div className="my-8 sm:my-12" id="priceTable">
        <PriceTable lang={lang} textContent={textContent} />
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

export default PaymentSection;
