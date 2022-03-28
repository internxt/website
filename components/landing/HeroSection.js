import React, { useState } from 'react';
import { Check } from 'phosphor-react';
import PriceCard from './PriceCard';

const HeroSection = ({
  textContent
}) => {
  const [billing, setBilling] = useState(12);

  const checkoutPlan = (plan) => `${plan}${billing}`;

  const priceCardData = {
    GB20: {
      storage: '20GB',
      price: {
        1: '0.99',
        12: '0.89'
      }
    },
    GB200: {
      storage: '200GB',
      price: {
        1: '4.49',
        12: '3.49'
      }
    },
    TB2: {
      storage: '2TB',
      price: {
        1: '9.99',
        12: '8.99'
      }
    }
  };

  return (
    <section className="relative bg-gray-5">
      <div className="flex flex-col items-center p-6 sm:p-10 lg:p-16 space-y-10 sm:space-y-20">
        <div className="flex flex-col items-center space-y text-center">
          <h2 className="text-lg sm:text-2xl font-semibold text">{textContent.eyebrow}</h2>
          <h1 className="text-3xl lg:text-5xl font-semibold">{textContent.title}</h1>
        </div>

        <div className="flex flex-col items-center space-y-3 sm:space-y-8">
          <div className="flex flex-row p-1 lg:p-0.5 bg-gray-10 text-gray-50 font-medium text-lg lg:text-base rounded-lg">
            <button
              type="button"
              onClick={() => { setBilling(1); }}
              className={`flex flex-row items-center h-10 lg:h-8 px-6 rounded-lg ${billing === 1 && 'bg-white text-gray-100 shadow-switch-button'}`}
            >
              {textContent.switch.monthly}
            </button>
            <button
              type="button"
              onClick={() => { setBilling(12); }}
              className={`flex flex-row items-center h-10 lg:h-8 px-6 rounded-lg ${billing === 12 && 'bg-white text-gray-100 shadow-switch-button'}`}
            >
              {textContent.switch.annually}
            </button>
          </div>

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

          <div className="flex sm:hidden flex-col items-center justify-start space-y-2 py-6">
            <div className="flex flex-row items-center justify-center space-x-2">
              <Check weight="bold" size={20} className="my-0.5" />
              <span className="font-semibold">{textContent.priceCards.features[0]}</span>
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
