import React from 'react';
import PriceTable from './PriceTable';
import { Coin, CreditCard, Detective } from 'phosphor-react';

const PaymentSection = ({ lang, textContent, country }) => {
  return (
    <section id="payment" className="overflow-hidden pb-20">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center rounded-lg bg-gray-5 px-4 py-2 ">
          <p className="text-xl font-medium text-gray-80">{textContent.limitedOffer}</p>
        </div>
        <div className="flex flex-col justify-center px-6 pt-4 text-center">
          <p className="text-4xl font-semibold">{textContent.title}</p>
          <p className="pt-4 text-xl font-normal">{textContent.description}</p>
        </div>
        <div className="my-8 sm:mb-12" id="priceTable">
          <PriceTable lang={lang} textContent={textContent} country={country} />
        </div>

        <div className="flex flex-col items-center justify-center space-y-8 text-center md:flex-row md:space-y-0 md:space-x-32 md:pt-4">
          <div className="flex max-w-[183px] flex-col items-center space-y-3">
            <Coin size={40} className="text-primary" />
            <p className="text-xl font-medium text-gray-80">{textContent.firstFeed}</p>
          </div>
          <div className="flex max-w-[114px] flex-col items-center space-y-3">
            <CreditCard size={40} className="text-primary" />
            <p className="text-xl font-medium text-gray-80">{textContent.secondFeed}</p>
          </div>
          <div className="flex max-w-[153px] flex-col items-center space-y-3">
            <Detective size={40} className="text-primary" />
            <p className="text-xl font-medium text-gray-80">{textContent.thirdFeed}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
