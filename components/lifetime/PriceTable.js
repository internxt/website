import React from 'react';
import PriceCard from './PriceCard';

const PriceTable = ({ lang }) => {
  const billingFrequency = -1;

  const billingPrice = (price) => price[billingFrequency];

  const pricings = {
    TB2: {
      stripeID: 'lifetime5TB',
      storage: '2TB',
      price: {
        '-1': '499',
      },
      priceBefore: '999',
      popular: true,
    },
    TB10: {
      stripeID: 'lifetime10TB',
      storage: '10TB',
      price: {
        '-1': '999',
      },
      priceBefore: '1999',
      popular: false,
    },
  };

  return (
    <section>
      <div className="flex flex-col items-center">
        <div className="content flex flex-row flex-wrap items-end justify-center justify-items-center px-6">
          <PriceCard
            planType="individual"
            storage={pricings.TB2.storage}
            price={billingPrice(pricings.TB2.price)}
            priceBefore={pricings.TB2.priceBefore}
            billingFrequency={billingFrequency}
            cta={['checkout', `${pricings.TB2.stripeID}`]}
            popular={pricings.TB2.popular}
            lang={lang}
          />

          <PriceCard
            planType="individual"
            storage={pricings.TB10.storage}
            price={billingPrice(pricings.TB10.price)}
            priceBefore={pricings.TB10.priceBefore}
            billingFrequency={billingFrequency}
            cta={['checkout', `${pricings.TB10.stripeID}`]}
            popular={pricings.TB10.popular}
            lang={lang}
          />
        </div>
      </div>
    </section>
  );
};

export default PriceTable;
