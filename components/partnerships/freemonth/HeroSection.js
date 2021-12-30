/* eslint-disable max-len */
/* eslint-disable prefer-const */
import React from 'react';
import PriceCard from './PriceCard';

const HeroSection = ({
  textContent,
  lang
}) => {
  const pricings = {
    TB2: {
      storage: '2TB',
      price: '9.99',
      stripeID: 'TB2_Free_30_Days_Freemonth_Monthly'
    }
  };

  return (

    <section id="buy" className="relative flex flex-col w-full pt-16 bg-gradient-to-b from-white via-neutral-10 to-white">

      <div className="flex flex-col xl:flex-row items-center justify-center px-8 lg:px-32 py-20 xl:py-24 space-y-20 xl:space-y-0 xl:space-x-40">

        {/* Main title */}
        <div className="flex flex-col flex-shrink-0 text-left">

          <h1 className="text-5xl md:text-6xl font-semibold mb-4 sm:mb-8">
            <span className="leading-tight">{textContent.title.line1}</span>
            <br className="hidden sm:inline-flex" />
            {' '}
            <span className="leading-tight">{textContent.title.line2}</span>
            <br className="hidden sm:inline-flex" />
            {' '}
            <span className="leading-tight">{textContent.title.line3}</span>
          </h1>

          <h2 className="text-lg sm:text-xl text-cool-gray-80">
            <span>{textContent.description.line1}</span>
            <br className="hidden sm:inline-flex" />
            {' '}
            <span>{textContent.description.line2}</span>
            <br className="hidden sm:inline-flex" />
            {' '}
            <span>{textContent.description.line3}</span>
          </h2>

        </div>

        {/* Features grid */}
        <PriceCard
          planType="individual"
          storage={pricings.TB2.storage}
          price={pricings.TB2.price}
          billingFrequency={1}
          cta={['checkout', `${pricings.TB2.stripeID}`]}
          lang={lang}
        />

      </div>

    </section>

  );
};

export default HeroSection;
