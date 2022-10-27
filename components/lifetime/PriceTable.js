import React from 'react';
import PriceCard from './PriceCard';

const PriceTable = ({ lang }) => {
  const billingFrequency = -1;

  const billingPrice = (price) => price[billingFrequency];

  const pricings = {
    TB1: {
      stripeID: 'lifetime1TB',
      storage: '1TB',
      price: {
        '-1': '99',
      },
      priceBefore: '299',
      popular: false,
    },
    TB5: {
      stripeID: 'lifetime5TB',
      storage: '5TB',
      price: {
        '-1': '299',
      },
      priceBefore: '499',
      popular: true,
    },
    TB10: {
      stripeID: 'lifetime10TB',
      storage: '10TB',
      price: {
        '-1': '499',
      },
      priceBefore: '999',
      popular: false,
    },
  };

  return (
    <section>
      <div className="flex flex-col items-center">
        <div className="content flex flex-row flex-wrap items-end justify-center justify-items-center px-6">
          <PriceCard
            planType="individual"
            storage={pricings.TB1.storage}
            price={billingPrice(pricings.TB1.price)}
            priceBefore={pricings.TB1.priceBefore}
            billingFrequency={billingFrequency}
            cta={['checkout', `${pricings.TB1.stripeID}`]}
            popular={pricings.TB1.popular}
            lang={lang}
          />

          <PriceCard
            planType="individual"
            storage={pricings.TB5.storage}
            price={billingPrice(pricings.TB5.price)}
            priceBefore={pricings.TB5.priceBefore}
            billingFrequency={billingFrequency}
            cta={['checkout', `${pricings.TB5.stripeID}`]}
            popular={pricings.TB5.popular}
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
