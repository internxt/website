/* eslint-disable max-len */
/* eslint-disable prefer-const */
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import PriceCard from './PriceCard';

const HeroSection = ({ textContent, lang }) => {
  const pricings = {
    TB2: {
      storage: '2TB',
      price: '9.99',
      stripeID: 'TB2_Free_30_Days_Cloudwards_Monthly',
    },
  };
  const [showCoupon, setShowCoupon] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowCoupon(true);
    }, 350);
  }, []);

  return (
    <section
      id="buy"
      className="relative flex w-full flex-col bg-gradient-to-b from-white via-neutral-10 to-white pt-16"
    >
      <div className="flex flex-col items-center justify-center space-y-20 px-8 py-20 lg:px-32 xl:flex-row xl:space-y-0 xl:space-x-40 xl:py-24">
        {/* Main title */}
        <div className="flex flex-shrink-0 flex-col text-left">
          <div className="mb-4 flex h-10 flex-row items-center justify-center self-start rounded-lg bg-cool-gray-10 px-5">
            <p className="mr-2 text-base font-medium text-cool-gray-80">{textContent.partnershipWith}</p>
            <Image
              src="/images/partnerships/start-page/startpage-logo.svg"
              alt="Logo image"
              quality={100}
              width={102}
              height={24}
              className="pointer-events-none"
              layout="intrinsic"
            />
          </div>

          <h1 className="mb-4 text-5xl font-medium leading-tight sm:mb-8 md:text-6xl">
            {textContent.title.line1}
            <br className="hidden sm:inline-flex" /> {textContent.title.line2}
            <br className="hidden sm:inline-flex" /> {textContent.title.line3}
          </h1>

          <h2 className="text-lg text-cool-gray-80 sm:text-xl">
            {textContent.description.line1}
            <br className="hidden sm:inline-flex" /> {textContent.description.line2}
            <br className="hidden sm:inline-flex" /> {textContent.description.line3}
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
