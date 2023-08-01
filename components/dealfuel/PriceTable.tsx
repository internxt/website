import React from 'react';
import PriceCard from './PriceCard';

const PriceTable = ({ lang, country }) => {
  const billingFrequency = -1;

  const billingPrice = (price) => price[billingFrequency];

  const pricings = {
    TB2: {
      storage: '2TB',
      price: {
        '-1': '299',
      },
      popular: false,
      actualPrice: Math.abs((299 * 75) / 100)
        .toString()
        .split('.')[0],
    },
    TB5: {
      storage: '5TB',
      price: {
        '-1': '499',
      },
      popular: true,
      actualPrice: Math.abs((499 * 75) / 100)
        .toString()
        .split('.')[0],
    },
    TB10: {
      storage: '10TB',
      price: {
        '-1': '999',
      },
      popular: false,
      actualPrice: Math.abs((999 * 75) / 100)
        .toString()
        .split('.')[0],
    },
  };

  return (
    <section className="overflow-hidden">
      <div
        id="priceTable"
        className="content mb-10 flex flex-row flex-wrap items-end justify-center justify-items-center px-6"
      >
        <PriceCard
          planType="individual"
          storage={pricings.TB2.storage}
          price={billingPrice(pricings.TB2.price)}
          cta={['checkout', 'lifetime2TB']}
          popular={pricings.TB2.popular}
          country={country}
        />
        <PriceCard
          planType="individual"
          storage={pricings.TB5.storage}
          price={billingPrice(pricings.TB5.price)}
          cta={['checkout', 'lifetime5TB']}
          popular={pricings.TB5.popular}
          country={country}
        />
        <PriceCard
          planType="individual"
          storage={pricings.TB10.storage}
          price={billingPrice(pricings.TB10.price)}
          cta={['checkout', 'lifetime10TB']}
          popular={pricings.TB10.popular}
          country={country}
        />
      </div>
    </section>
  );
};

export default PriceTable;
