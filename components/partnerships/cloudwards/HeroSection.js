/* eslint-disable max-len */
/* eslint-disable prefer-const */
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import PriceCard from './PriceCard';

const HeroSection = ({
  textContent,
  lang
}) => {
  const pricings = {
    TB2: {
      storage: '2TB',
      price: '9.99',
      stripeID: 'TB2_Free_30_Days_Monthly'
    }
  };
  const [showCoupon, setShowCoupon] = useState(false);

  useEffect(() => {
    setTimeout(() => { setShowCoupon(true); }, 350);
  }, []);

  return (

    <section id="buy" className="relative flex flex-col w-full pt-16 bg-gradient-to-b from-white via-neutral-10 to-white">

      <div className={`flex flex-row p-6 sm:p-0 sm:h-16 justify-center items-center text-center ${showCoupon ? 'bg-blue-60 text-blue-20' : 'bg-white text-blue-40'} transition-colors duration-1000 ease-in-out select-all`}>
        <div>
          <span className="select-none">{textContent.coupon.before}</span>
          <span className={`${showCoupon ? 'text-white' : 'text-blue-50'} font-bold underline px-1.5 tracking-wide transition-colors duration-650 ease-in-out select-all`}>CLOUDWARDS</span>
          <span className="select-none">{textContent.coupon.after}</span>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row items-center justify-center px-8 lg:px-32 py-20 xl:py-24 space-y-20 xl:space-y-0 xl:space-x-40">

        {/* Main title */}
        <div className="flex flex-col flex-shrink-0 text-left">

          <div className="flex flex-row items-center justify-center self-start h-10 px-5 bg-cool-gray-10 rounded-lg mb-4">
            <p className="mr-2 text-base font-medium text-cool-gray-80">{textContent.partnershipWith}</p>
            <Image
              src="/images/partnerships/cloudwards/logo.webp"
              width={102}
              height={24}
              className="pointer-events-none"
            />
          </div>

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
