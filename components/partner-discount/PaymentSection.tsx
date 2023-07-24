import React from 'react';

import { Coin, CreditCard, Detective } from '@phosphor-icons/react';
import PriceTable from './PriceTable';

const PaymentSection = ({ lang, textContent }) => {
  return (
    <section id="payment" className="overflow-hidden bg-gray-1 py-20">
      <div className="flex flex-col space-y-8 pt-10 lg:pt-0">
        <div className="flex flex-col items-center justify-center">
          <div className="flex w-full max-w-3xl flex-col justify-center px-6 pt-4 text-center">
            <p className="text-5xl font-semibold text-gray-100">{textContent.title}</p>
            <p className="pt-4 text-xl font-normal text-gray-80">{textContent.description}</p>
          </div>
        </div>

        <PriceTable lang="en" />

        <div className="flex flex-col items-center justify-center space-y-8 text-center md:flex-row md:items-start md:space-x-32 md:space-y-0">
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
