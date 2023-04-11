import React from 'react';
import PriceCard from './PriceCard';
import NormalPaymentSection from './NormalPaymentSection';
import NormalPriceCard from './NormalPriceCard';

const PriceTable = ({ lang, country }) => {
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
      actualPrice: '149',
    },
    TB5: {
      stripeID: 'lifetime5TB',
      storage: '5TB',
      price: {
        '-1': '499',
      },
      popular: false,
      actualPrice: '249',
    },
    TB10: {
      stripeID: 'lifetime10TB',
      storage: '10TB',
      price: {
        '-1': '999',
      },
      popular: false,
      actualPrice: '499',
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
          storage={pricings.TB5.storage}
          price={billingPrice(pricings.TB5.price)}
          billingFrequency={billingFrequency}
          cta={['checkout', 'lifetime5TB']}
          popular={pricings.TB5.popular}
          lang={lang}
          country={country}
          actualPrice={pricings.TB5.actualPrice}
          isCampaign
        />
        <PriceCard
          planType="individual"
          storage={pricings.TB2.storage}
          price={billingPrice(pricings.TB2.price)}
          billingFrequency={billingFrequency}
          cta={['checkout', 'lifetime2TB']}
          popular={pricings.TB2.popular}
          lang={lang}
          country={country}
          actualPrice={pricings.TB2.actualPrice}
          isCampaign
        />

        <PriceCard
          planType="individual"
          storage={pricings.TB10.storage}
          price={billingPrice(pricings.TB10.price)}
          billingFrequency={billingFrequency}
          cta={['checkout', 'lifetime10TB']}
          popular={pricings.TB10.popular}
          lang={lang}
          country={country}
          actualPrice={pricings.TB10.actualPrice}
          isCampaign
        />
      </div>
    </section>
  );
};

export default PriceTable;
