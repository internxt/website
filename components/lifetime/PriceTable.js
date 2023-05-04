import React, { useEffect } from 'react';
import PriceCard from './PriceCard';
import NormalPaymentSection from './NormalPaymentSection';
import NormalPriceCard from './NormalPriceCard';

const PriceTable = ({ lang, country, products }) => {
  const billingFrequency = -1;

  const billingPrice = (price) => price[billingFrequency];

  const pricings = {
    TB2: {
      stripeID: 'lifetime2TB',
      storage: '2TB',
      price: {
        '-1': '299',
      },
      popular: true,
      actualPrice: Math.abs((299 * 75) / 100)
        .toString()
        .split('.')[0],
    },
    TB5: {
      stripeID: 'lifetime5TB',
      storage: '5TB',
      price: {
        '-1': '499',
      },
      popular: false,
      actualPrice: Math.abs((499 * 75) / 100)
        .toString()
        .split('.')[0],
    },
    TB10: {
      stripeID: 'lifetime10TB',
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
          storage={products.lifetime5TB.storage}
          price={products.lifetime5TB.price}
          billingFrequency={billingFrequency}
          cta={['checkout', products.lifetime5TB.planId]}
          popular={products.lifetime5TB.popular}
          lang={lang}
          country={country}
          actualPrice={products.lifetime5TB.actualPrice}
        />
        <PriceCard
          planType="individual"
          storage={products.lifetime2TB.storage}
          price={products.lifetime2TB.price}
          billingFrequency={billingFrequency}
          cta={['checkout', products.lifetime2TB.planId]}
          popular={products.lifetime2TB.popular}
          lang={lang}
          country={country}
          actualPrice={products.lifetime2TB.actualPrice}
        />

        <PriceCard
          planType="individual"
          storage={products.lifetime10TB.storage}
          price={products.lifetime10TB.price}
          billingFrequency={billingFrequency}
          cta={['checkout', products.lifetime10TB.planId]}
          popular={products.lifetime10TB.popular}
          lang={lang}
          country={country}
          actualPrice={products.lifetime10TB.actualPrice}
        />
      </div>
    </section>
  );
};

export default PriceTable;
