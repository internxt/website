/* eslint-disable max-len */
/* eslint-disable prefer-const */
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import PriceCard from './PriceCard';
import { checkout } from '../../../lib/auth';
import { getPlanId } from '../../../pages/api/stripe/stripeProducts';

const HeroSection = ({ textContent, lang }) => {
  const freeSegment1 = textContent.title.split('free')[0];
  const freeSegment2 = textContent.title.split('free')[1];
  const free = textContent.title.substr(textContent.title.indexOf('free'), 4);
  const stripeObject = { product: 'TB21' };

  const pricings = {
    TB2: {
      storage: '2TB',
      price: '9.99',
      stripeID: 'TB2_Free_30_Days_Cloudwards_Monthly',
    },
  };

  return (
    <section id="buy" className="pt-16">
      <div className="mb-4 flex flex-col items-center justify-center space-y-20 px-8 py-20 lg:mx-32 xl:flex-row xl:space-y-0 xl:space-x-80 xl:py-24">
        {/* Main title */}
        <div className="flex flex-col text-center lg:-ml-10 lg:text-left">
          <div className="m-auto flex h-10 flex-row items-center justify-center self-start rounded-lg bg-cool-gray-10 px-5 lg:m-0 lg:mb-4">
            <p className="mr-2 text-base font-medium text-cool-gray-80">{textContent.header}</p>
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
          <div className="flex max-w-[550px]">
            <h1 className="mb-4 text-5xl font-medium sm:mb-8 md:text-6xl">
              {freeSegment1}
              {<span className="text-primary">{free}</span>}
              {freeSegment2}
            </h1>
          </div>
          <div
            onClick={() => {
              checkout(getPlanId(stripeObject));
            }}
            className="w-48 cursor-pointer rounded-full bg-primary px-9 py-4 text-center"
          >
            <p className="text-lg font-medium text-white">{textContent.cta}</p>
          </div>
        </div>

        {/* Features grid */}
        <PriceCard lang={lang} />
      </div>
    </section>
  );
};

export default HeroSection;
