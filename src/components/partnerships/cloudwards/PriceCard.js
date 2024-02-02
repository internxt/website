/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';

const PriceCard = () => {
  return (
    <div className="flex flex-col items-center space-y-8 rounded-2xl border-8 border-primary border-opacity-20 px-12 py-6 shadow-xl">
      <div
        className={`storage flex max-w-min flex-row whitespace-nowrap rounded-full bg-neutral-20 py-1 px-4 pb-0.5
          text-xl font-medium text-black`}
      >
        <p>Free for the first 30 days</p>
      </div>
      <div className={`priceBreakdown flex flex-row items-center justify-center space-x-px`}>
        <p className="flex flex-row space-x-0.5 text-primary">
          <span className={`mt-2 text-3xl font-semibold`}>€</span>
          <span className="price text-8xl font-bold">0.00</span>
        </p>
      </div>
      <div className="flex items-center justify-center rounded-full bg-neutral-20">
        <p className="px-6 py-1 text-xl font-medium">2TB Plan</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-base text-gray-60">8.99 €/month after 30 days</p>
      </div>
    </div>
  );
};

export default PriceCard;
