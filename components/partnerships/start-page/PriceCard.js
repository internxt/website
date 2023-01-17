/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { checkout, openAuthDialog } from '../../../lib/auth';
import { getPlanId } from '../../../pages/api/stripe/stripeProducts';

const PriceCard = ({ planType, price, priceBefore }) => {
  return (
    <div
      className={`priceCard card 
        m-2 flex max-w-xs flex-shrink-0
      flex-grow-0 flex-col overflow-hidden rounded-2xl border-8 border-primary border-opacity-20 shadow-lg sm:m-4`}
    >
      <div className={`info flex flex-col items-center justify-center bg-white px-12 py-7`}>
        <div
          className={`storage flex max-w-min flex-row whitespace-nowrap rounded-full bg-neutral-20 py-1 px-4 pb-0.5
          text-xl font-medium text-black`}
        >
          <p>Free for the first 30 days</p>
        </div>

        <div
          className={`planPrice flex flex-col items-center justify-center py-8 ${
            priceBefore ? 'space-y-1' : 'space-y-2'
          }`}
        >
          <div className="flex flex-col items-center space-y-6">
            <div className={`priceBreakdown flex flex-row items-end space-x-px`}>
              <p className="flex flex-row items-start space-x-0.5 font-medium text-primary">
                <span className={`currency ${price <= 0 ? 'hidden' : ''} text-3xl font-semibold`}>€</span>
                <span className="price text-8xl font-bold">0.00</span>
              </p>
            </div>
            <div className="flex items-center justify-center rounded-full bg-neutral-20">
              <p className="px-6 py-1 text-xl font-medium">2TB Plan</p>
            </div>
          </div>
        </div>

        <p className="text-base text-gray-60">8.99 €/month after 30 days</p>
      </div>
    </div>
  );
};

export default PriceCard;
