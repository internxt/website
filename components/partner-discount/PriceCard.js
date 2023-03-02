import React from 'react';
import { Check } from 'phosphor-react';
import { checkout, goToSignUpURL } from '../../lib/auth';
import { getPlanId } from '../../pages/api/stripe/stripeProducts';

const PriceCard = ({ plan, price, country, annualPrice, billedAnnually, cta, info, month, isPopular, mostPopular }) => {
  const stripeObject = { product: cta[1] };
  const features = [
    {
      feat: info.info1,
    },
    {
      feat: info.info2,
    },
    {
      feat: info.info3,
    },
    {
      feat: info.info4,
    },
  ];

  const getCurrency = () => {
    switch (country) {
      case 'US':
        return '$';
      case 'GB':
        return '£';
      default:
        return '€';
    }
  };

  const getFeatures = () => {
    return features.map((feature, index) => {
      return (
        <div className={'flex flex-row items-start justify-start space-x-2'} key={index}>
          <Check weight="bold" size={18} className="my-px" />
          <span className={`${index === 0 ? 'font-semibold' : ''}`}>{feature.feat}</span>
        </div>
      );
    });
  };

  // border border-primary if it's needed add it to the className (it's a border for the popular plan)

  return (
    <div
      className={`${
        isPopular && 'ring-6 ring-primary ring-opacity-10'
      } m-3 flex w-80 flex-col space-y-4 rounded-xl bg-white p-6 sm:space-y-6 sm:p-8 `}
    >
      <div className="flex flex-row items-center justify-start space-x-2">
        {/* Storage / Plan */}
        <h2 className="text-4xl font-medium text-primary">{plan}</h2>
        {isPopular && (
          <h3 className="flex h-8 flex-row items-center rounded-full bg-primary bg-opacity-10 px-4 text-base font-medium text-primary sm:h-6 sm:px-3 sm:text-xs">
            {mostPopular}
          </h3>
        )}
      </div>

      {/* Separator */}
      <div className="h-px w-full bg-gray-10" />

      {/* Prices and billing */}
      <div className="flex flex-col">
        <span className="text-2xl font-medium">
          {price} {getCurrency()}
          {month}
        </span>
        <span className="text-gray-50">
          {annualPrice}
          {getCurrency()} {billedAnnually}
        </span>
      </div>

      {/* Checkout button */}
      <button
        type="button"
        onClick={() => {
          checkout({ planId: getPlanId(stripeObject) });
        }}
        className="button-primary"
      >
        Buy {plan}
      </button>

      {/* Plan features */}
      <div className="hidden flex-col items-start justify-start space-y-1.5 text-sm sm:flex">{getFeatures()}</div>
    </div>
  );
};

export default PriceCard;
