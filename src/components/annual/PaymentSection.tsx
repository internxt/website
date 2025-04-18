import React from 'react';

import { Coin, CreditCard, CurrencyCircleDollar, Detective, Lifebuoy } from '@phosphor-icons/react';
import PriceTable from '@/components/annual/PriceTable';

const PaymentSection = ({ lang, textContent }) => {
  const wordsToBold = ['Drive', 'Send', 'VPN', 'Antivirus', 'Meet', 'Mail'];
  const formattedDescription = textContent.description
    .split(/(Drive|Send|VPN|Antivirus|Meet|Mail)/g)
    .map((word, index) => (wordsToBold.includes(word) ? <b key={index}>{word}</b> : word));
  return (
    <section id="payment" className="overflow-hidden bg-gray-1 py-10">
      <div className="flex flex-col space-y-8 pt-10 lg:pt-0">
        <div className="flex flex-col items-center justify-center">
          <div className="flex w-full max-w-3xl flex-col justify-center space-y-3 px-6 pt-4 text-center">
            <p className="pt-4 text-4xl">
              <span className="text-4xl font-semibold text-primary">{textContent.blueTitle}</span>
            </p>
            <p className="text-4xl font-semibold text-gray-100 md:text-5xl">{textContent.title}</p>
            <p className="pt-4 text-xl font-normal text-gray-80">{formattedDescription}</p>
          </div>
        </div>

        <PriceTable lang={lang} />

        <div className="flex flex-col items-center justify-center space-y-8 text-center md:flex-row md:items-start md:space-x-32 md:space-y-0">
          <div className="p flex flex-col items-center space-x-3 md:max-w-[33%] md:flex-row">
            <Lifebuoy size={40} className="text-primary" />
            <p className="text-xl font-medium text-gray-80">{textContent.firstFeed}</p>
          </div>
          <div className="flex flex-col items-center space-x-3 md:max-w-[33%] md:flex-row ">
            <CurrencyCircleDollar size={40} className="text-primary" />
            <p className="text-xl font-medium text-gray-80">{textContent.secondFeed}</p>
          </div>
          <div className="flex flex-col items-center space-x-3 md:max-w-[33%]  md:flex-row">
            <Detective size={40} className="text-primary" />
            <p className="text-xl font-medium text-gray-80">{textContent.thirdFeed}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
