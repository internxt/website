import React, { useState } from 'react';
import { Check } from 'phosphor-react';
import PriceCard from './PriceCard';

const HeroSection = ({ textContent }) => {
  const [billing, setBilling] = useState(12);

  const checkoutPlan = (plan) => `${plan}${billing}`;

  const priceCardData = {
    GB20: {
      storage: '20GB',
      price: {
        1: '0.99',
        12: '0.89',
      },
    },
    GB200: {
      storage: '200GB',
      price: {
        1: '4.49',
        12: '3.49',
      },
    },
    TB2: {
      storage: '2TB',
      price: {
        1: '9.99',
        12: '8.99',
      },
    },
  };

  return (
    <section className="relative bg-gray-5" id="pricing">
      <div className="flex flex-col items-center p-6 pt-10 sm:p-10 sm:pt-12 lg:py-16 lg:px-8 space-y-10">
        {/* Title */}
        <div className="flex flex-col items-center space-y-3 text-center">
          <h1 className="text-3xl lg:text-4xl font-medium">{textContent.title}</h1>
          <h2 className="text-lg sm:text-xl">{textContent.subtitle}</h2>
        </div>

        <div className="flex flex-col items-center space-y-3 sm:space-y-8">
          {/* Switch */}
          <div className="relative flex flex-row p-0.5 bg-gray-10 text-gray-50 font-medium text-lg md:text-base rounded-xl md:rounded-lg">
            <div className="absolute inset-0.5 flex flex-row pointer-events-none">
              <div className={`${billing === 1 ? 'w-0' : 'w-28'} transition-all duration-200 ease-in-out`} />
              <div className="flex flex-row items-center justify-center h-9 md:h-8 w-28 rounded-xl md:rounded-lg bg-white shadow-switch-button" />
            </div>

            <div className="flex flex-row items-center justify-center z-10">
              <button
                type="button"
                onClick={() => {
                  setBilling(1);
                }}
                className={`flex flex-row items-center justify-center h-9 md:h-8 w-28 ${
                  billing === 1 && 'text-gray-100'
                } transition-colors duration-200 ease-in-out`}
              >
                {textContent.switch.monthly}
              </button>

              <button
                type="button"
                onClick={() => {
                  setBilling(12);
                }}
                className={`flex flex-row items-center justify-center h-9 md:h-8 w-28 ${
                  billing === 12 && 'text-gray-100'
                } transition-colors duration-200 ease-in-out`}
              >
                {textContent.switch.annually}
              </button>
            </div>
          </div>

          {/* Price table */}
          <div className="flex flex-row items-start justify-center flex-wrap">
            <PriceCard
              textContent={textContent.priceCards}
              storage={priceCardData.GB20.storage}
              price={priceCardData.GB20.price[billing]}
              billing={billing}
              plan={checkoutPlan('GB20')}
            />
            <PriceCard
              textContent={textContent.priceCards}
              storage={priceCardData.GB200.storage}
              price={priceCardData.GB200.price[billing]}
              billing={billing}
              plan={checkoutPlan('GB200')}
              popular
            />
            <PriceCard
              textContent={textContent.priceCards}
              storage={priceCardData.TB2.storage}
              price={priceCardData.TB2.price[billing]}
              billing={billing}
              plan={checkoutPlan('TB2')}
            />
          </div>

          {/* (SMALL SCREENS) Plan features */}
          <div className="flex sm:hidden flex-col items-center justify-start space-y-2 py-6">
            <div className="flex flex-row items-center justify-center space-x-2">
              <Check weight="bold" size={20} className="my-0.5" />
              <span className="font-medium">{textContent.priceCards.features[0]}</span>
            </div>

            <div className="flex flex-row items-center justify-center space-x-2">
              <Check weight="bold" size={20} className="my-0.5" />
              <span>{textContent.priceCards.features[1]}</span>
            </div>

            <div className="flex flex-row items-center justify-center space-x-2">
              <Check weight="bold" size={20} className="my-0.5" />
              <span>{textContent.priceCards.features[2]}</span>
            </div>

            <div className="flex flex-row items-center justify-center space-x-2">
              <Check weight="bold" size={20} className="my-0.5" />
              <span>{textContent.priceCards.features[3]}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
