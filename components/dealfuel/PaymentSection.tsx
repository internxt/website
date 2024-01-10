import React from 'react';
import PriceTable from './PriceTable';
import { Coin, CreditCard, Detective } from '@phosphor-icons/react';

const PaymentSection = ({ lang, textContent, country }) => {
  return (
    <section id="payment" className="overflow-hidden pb-20">
      <div className="flex flex-col pt-10  lg:pt-0">
        <div className="flex flex-col items-center justify-center pb-8">
          {/* <div className="flex items-center justify-center rounded-lg bg-gray-5 px-4 py-2 ">
            <p className="text-xl font-medium text-gray-80">{textContent.limitedOffer}</p>
          </div> */}
          <div className="flex flex-col justify-center px-6 pt-4 text-center">
            <p className="text-4xl font-semibold">
              <span className="text-primary">{textContent.title.blueText}</span>
              <span>{textContent.title.normalText}</span>
            </p>
            <p className="pt-4 text-xl font-normal">{textContent.description}</p>
          </div>
        </div>

        <PriceTable lang={lang} country={country} textContent={textContent} />
      </div>
    </section>
  );
};

export default PaymentSection;
