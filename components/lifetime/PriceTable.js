import React from 'react';
import PriceCard from './PriceCard';

const PriceTable = ({
  lang
}) => {
  const billingFrequency = -1;

  const billingPrice = (price) => price[billingFrequency];

  const pricings = {
    TB2: {
      stripeID: 'lifetime2TB',
      storage: '2TB',
      price: {
        '-1': '299'
      },
      priceBefore: '499',
      popular: false
    },
    TB10: {
      stripeID: 'lifetime10TB',
      storage: '10TB',
      price: {
        '-1': '499'
      },
      priceBefore: '2500',
      popular: true
    },
    Infinite: {
      stripeID: 'infiniteLifetime',
      storage: 'Infinite Storage',
      price: {
        '-1': '999'
      },
      priceBefore: '9999',
      popular: false
    }
  };

  return (

    <section>

      <div className="flex flex-col items-center">

        <div className="flex content flex-row flex-wrap justify-center justify-items-center items-end px-6">

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

          <PriceCard
            planType="individual"
            storage={pricings.Infinite.storage}
            price={billingPrice(pricings.Infinite.price)}
            priceBefore={pricings.Infinite.priceBefore}
            billingFrequency={billingFrequency}
            cta={['checkout', `${pricings.Infinite.stripeID}`]}
            popular={pricings.Infinite.popular}
            lang={lang}
          />

        </div>

      </div>

    </section>

  );
};

export default PriceTable;
