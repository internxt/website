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
          <div className="relative">
            <img
              loading="lazy"
              className="absolute -top-6 -right-5 w-full -translate-y-3 transform select-none sm:-top-4 sm:-right-4"
              src="../../images/lifetime/special-landings/snow/snow1.webp"
              draggable="false"
              alt="snow"
            />
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
          </div>

          <div className="relative mt-10 md:mt-0">
            <img
              loading="lazy"
              className="absolute -top-5 -right-1 w-full -translate-y-3 scale-105 transform select-none sm:-top-4 sm:-right-1 sm:scale-100"
              src="../../images/lifetime/special-landings/snow/snow2.webp"
              draggable="false"
              alt="snow"
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
          </div>

          <div className="relative mt-10 xl:mt-0">
            <img
              loading="lazy"
              className="absolute -top-4 right-1 w-full -translate-y-3 transform select-none sm:-top-3 sm:right-1"
              src="../../images/lifetime/special-landings/snow/snow3.webp"
              draggable="false"
              alt="snow"
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
      </div>
    </section>
  );
};

export default PriceTable;
