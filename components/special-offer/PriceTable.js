import React from 'react';
import PriceCard from './PriceCard';

const PriceTable = ({
  lang
}) => {
  const billingFrequency = -1;

  const billingPrice = (price) => price[billingFrequency];

  const pricings = {
    TB2: {
      stripeID: 'lifetime2TBHalloween',
      storage: '1TB',
      x2storage: '2TB',
      price: {
        '-1': '99'
      },
      priceBefore: '299',
      popular: false
    },
    TB10: {
      stripeID: 'lifetime10TBHalloween',
      storage: '5TB',
      x2storage: '10TB',
      price: {
        '-1': '299'
      },
      priceBefore: '499',
      popular: true
    },
    TB20: {
      stripeID: 'lifetime20TBHalloween',
      storage: '10TB',
      x2storage: '20TB',
      price: {
        '-1': '499'
      },
      priceBefore: '999',
      popular: false
    },
  };

  return (

    <section>

      <div className="flex flex-col items-center">

        <div className="flex content flex-row flex-wrap justify-center justify-items-center items-end px-6">
          <PriceCard
            planType="individual"
            storage={pricings.TB2.storage}
            x2storage={pricings.TB2.x2storage}
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
            x2storage={pricings.TB10.x2storage}
            price={billingPrice(pricings.TB10.price)}
            priceBefore={pricings.TB10.priceBefore}
            billingFrequency={billingFrequency}
            cta={['checkout', `${pricings.TB10.stripeID}`]}
            popular={pricings.TB10.popular}
            lang={lang}
          />

          <PriceCard
            planType="individual"
            storage={pricings.TB20.storage}
            x2storage={pricings.TB20.x2storage}
            price={billingPrice(pricings.TB20.price)}
            priceBefore={pricings.TB20.priceBefore}
            billingFrequency={billingFrequency}
            cta={['checkout', `${pricings.TB20.stripeID}`]}
            popular={pricings.TB20.popular}
            lang={lang}
          />
        </div>

      </div>

    </section>

  );
};

export default PriceTable;
