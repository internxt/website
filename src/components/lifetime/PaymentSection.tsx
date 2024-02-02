import React from 'react';
import PriceTable from './PriceTable';
import { CreditCard, CurrencyCircleDollar, Detective } from '@phosphor-icons/react';

const PaymentSection = ({ lang, textContent, country }) => {
  return (
    <section id="payment" className="overflow-hidden py-20">
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center rounded-lg bg-gray-5 px-4 py-2 ">
            <p className="text-xl font-medium text-gray-80">{textContent.limitedOffer}</p>
          </div>
          <div className="flex flex-col items-center justify-center px-6 pt-4 text-center">
            <p className="w-full text-5xl font-semibold leading-tight">
              <span className="text-primary">{textContent.title.blueText}</span> <br />
              <span>{textContent.title.normalText}</span>
            </p>
            <p className="pt-4 text-xl font-normal">{textContent.description}</p>
          </div>
        </div>

        <PriceTable lang={lang} country={country} />

        <div className="flex flex-col items-center justify-center space-y-8 bg-transparent text-center md:flex-row md:items-start md:space-x-32 md:space-y-0">
          <div className="flex max-w-[183px] flex-col items-center space-y-3">
            <CurrencyCircleDollar size={40} className="text-primary" />
            <p className="text-xl font-medium text-gray-80">{textContent.firstFeed}</p>
          </div>
          <div className="flex max-w-[183px] flex-col items-center space-y-3">
            <CreditCard size={40} className="text-primary" />
            <p className="text-xl font-medium text-gray-80">{textContent.secondFeed}</p>
          </div>
          <div className="flex max-w-[183px] flex-col items-center space-y-3">
            <Detective size={40} className="text-primary" />
            <p className="text-xl font-medium text-gray-80">{textContent.thirdFeed}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
