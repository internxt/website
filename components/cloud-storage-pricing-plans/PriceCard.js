import React from 'react';
import { Check } from 'phosphor-react';
import { getPlanId } from '../../pages/api/stripe/stripeProducts';
import { openAuthDialog, checkout } from '../../lib/auth';

const PriceCard = ({ textContent, storage, price, billing, popular, cta }) => {
  const stripeObject = { product: cta[1] };
  return (
    <div
      className={`m-3 flex w-80 flex-col space-y-4 rounded-xl bg-white p-6 sm:space-y-6 sm:p-8 ${
        popular && 'border border-primary ring-6 ring-primary ring-opacity-10'
      }`}
    >
      <div className="flex flex-row items-start justify-start space-x-2">
        {/* Storage / Plan */}
        <h2 className="text-4xl font-medium text-primary">{storage}</h2>
        {popular && (
          <h3 className="flex h-8 flex-row items-center rounded-full bg-primary bg-opacity-10 px-4 text-base font-medium text-primary sm:h-6 sm:px-3 sm:text-xs">
            {textContent.mostPopular}
          </h3>
        )}
      </div>

      {/* Separator */}
      <div className="h-px w-full bg-gray-10" />

      {/* Prices and billing */}
      <div className="flex flex-col">
        <span className="text-2xl font-medium">{`${price} ${textContent.monthlyCost}`}</span>
        <span className="text-gray-50">
          {`${price * billing}${textContent.billed} ${billing === 12 ? textContent.annually : textContent.monthly}`}
        </span>
      </div>

      {/* Checkout button */}
      <button
        type="button"
        onClick={() => {
          cta[0] === 'checkout' ? checkout(getPlanId(stripeObject)) : openAuthDialog('signup');
        }}
        className="button-primary"
      >
        {`${textContent.buy} ${storage}`}
      </button>

      {/* Plan features */}
      <div className="hidden flex-col items-start justify-start space-y-1.5 text-sm sm:flex">
        <div className="flex flex-row items-start justify-start space-x-2">
          <Check weight="bold" size={18} className="my-px" />
          <span className="font-medium">{textContent.features[0]}</span>
        </div>

        <div className="flex flex-row items-start justify-start space-x-2">
          <Check weight="bold" size={18} className="my-px" />
          <span>{textContent.features[1]}</span>
        </div>

        <div className="flex flex-row items-start justify-start space-x-2">
          <Check weight="bold" size={18} className="my-px" />
          <span>{textContent.features[2]}</span>
        </div>

        <div className="flex flex-row items-start justify-start space-x-2">
          <Check weight="bold" size={18} className="my-px" />
          <span>{textContent.features[3]}</span>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
