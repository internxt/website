import React from 'react';
import PriceCard from './PriceCard';
import { Coin, CreditCard, Detective } from '@phosphor-icons/react';
import { DARK_MODE_ENABLED } from '@/theme.config';

const PriceTable = ({ darkMode = DARK_MODE_ENABLED, lang, country, textContent }) => {
  let prices;
  const billingFrequency = -1;
  const billingPrice = (price) => price[billingFrequency];

  const pricings = {
    TB2: {
      storage: '2TB',
      price: {
        '-1': '499',
      },
      popular: false,
      actualPrice: Math.abs((499 * 75) / 100)
        .toString()
        .split('.')[0],
    },
    TB5: {
      storage: '5TB',
      price: {
        '-1': '999',
      },
      popular: true,
      actualPrice: Math.abs((999 * 75) / 100)
        .toString()
        .split('.')[0],
    },
    TB10: {
      storage: '10TB',
      price: {
        '-1': '1499',
      },
      popular: false,
      actualPrice: Math.abs((1499 * 75) / 100)
        .toString()
        .split('.')[0],
    },
  };

  const dollarPricings = {
    TB2: {
      storage: '2TB',
      price: {
        '-1': '599',
      },
      popular: false,
      actualPrice: Math.abs((599 * 75) / 100)
        .toString()
        .split('.')[0],
    },
    TB5: {
      storage: '5TB',
      price: {
        '-1': '1099',
      },
      popular: true,
      actualPrice: Math.abs((1099 * 75) / 100)
        .toString()
        .split('.')[0],
    },
    TB10: {
      storage: '10TB',
      price: {
        '-1': '1599',
      },
      popular: false,
      actualPrice: Math.abs((1599 * 75) / 100)
        .toString()
        .split('.')[0],
    },
  };

  if (country === 'US') {
    prices = dollarPricings;
  } else {
    prices = pricings;
  }

  return (
    <section className="overflow-hidden">
      <div
        id="priceTable"
        className="content flex flex-row flex-wrap items-end justify-center justify-items-center px-6"
      >
        <PriceCard
          planType="individual"
          storage={prices.TB2.storage}
          price={billingPrice(prices.TB2.price)}
          cta={['checkout', 'lifetime2TB']}
          popular={prices.TB2.popular}
          country={country}
        />
        <PriceCard
          planType="individual"
          storage={prices.TB5.storage}
          price={billingPrice(prices.TB5.price)}
          cta={['checkout', 'lifetime5TB']}
          popular={prices.TB5.popular}
          country={country}
        />
        <PriceCard
          planType="individual"
          storage={prices.TB10.storage}
          price={billingPrice(prices.TB10.price)}
          cta={['checkout', 'lifetime10TB']}
          popular={prices.TB10.popular}
          country={country}
        />
      </div>
      <div className="flex flex-col items-center justify-center space-y-8 pt-10 text-center md:flex-row md:space-x-32 md:space-y-0">
        <div className="flex max-w-[183px] flex-col items-center space-y-3">
          <Coin size={40} className="text-primary" />
          <p className={`text-xl font-medium ${darkMode ? 'text-cool-gray-30' : 'text-gray-80'}`}>
            {textContent.firstFeed}
          </p>
        </div>
        <div className="flex max-w-[183px] flex-col items-center space-y-3">
          <CreditCard size={40} className="text-primary" />
          <p className={`text-xl font-medium ${darkMode ? 'text-cool-gray-30' : 'text-gray-80'}`}>
            {textContent.secondFeed}
          </p>
        </div>
        <div className="flex max-w-[183px] flex-col items-center space-y-3">
          <Detective size={40} className="text-primary" />
          <p className={`text-xl font-medium ${darkMode ? 'text-cool-gray-30' : 'text-gray-80'}`}>
            {textContent.thirdFeed}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PriceTable;
