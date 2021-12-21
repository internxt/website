/* eslint-disable max-len */
/* eslint-disable prefer-const */
import React, { useState } from 'react';
import { redirectToCheckoutAction } from '../CheckoutForm';

const HeroSection = ({
  textContent,
  lang
}) => {
  const plans = [
    {
      id: 0,
      price: '4.49',
      priceBefore: '8.99',
      bill: '53.88',
      stripeID: 'TB2_50_OFF_Annual'
    },
    {
      id: 1,
      price: '4.99',
      priceBefore: '9.99',
      bill: '4.99',
      stripeID: 'TB2_50_OFF_Monthly'
    }
  ];

  return (

    <section id="buy" className="relative flex flex-col w-full pt-32 sm:pt-16  overflow-hidden">

      <div className="flex flex-row h-16 justify-center items-center bg-blue-60 text-blue-20 font-medium">
        <span>GET $10 OFF USING</span>
        <span className="text-white font-bold underline px-1.5 tracking-wide">CLOUDWARDS</span>
        <span>COUPON DURING CHECKOUT</span>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center px-8 lg:px-0 py-16 pb-20 lg:py-40 space-y-20 lg:space-y-0 lg:space-x-20 xl:space-x-40">

        {/* Main title */}
        <div className="flex flex-col text-left">

          <h1 className="text-5xl sm:text-6xl font-semibold mb-6 sm:mb-10">
            <p className="leading-tight">{textContent.title.line1}</p>
            <p className="leading-tight">{textContent.title.line2}</p>
            <p className="leading-tight">{textContent.title.line3}</p>
          </h1>

          <h2 className="text-lg sm:text-xl text-cool-gray-80">
            <p>{textContent.description.line1}</p>
            <p>{textContent.description.line2}</p>
            <p>{textContent.description.line3}</p>
          </h2>

        </div>

        {/* Features grid */}
        <div>
          <div
            className="hidden md:flex lg:hidden xl:flex bg-blue-20"
            style={{
              width: 560,
              height: 416
            }}
          />

          <div
            className="hidden xs:flex md:hidden lg:flex xl:hidden bg-blue-20"
            style={{
              width: 417,
              height: 560
            }}
          />

          <div
            className="flex flex-col flex-grow xs:hidden w-screen px-6"
          >
            <div className="flex flex-col w-full h-96 bg-blue-20" />
          </div>
        </div>

      </div>

    </section>

  );
};

export default HeroSection;
