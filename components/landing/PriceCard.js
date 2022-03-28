import React from 'react';
import { Check } from 'phosphor-react';
import { redirectToCheckoutAction } from '../CheckoutForm';

const PriceCard = ({
  textContent,
  storage,
  price,
  billing,
  plan,
  popular
}) => {
  const checkout = () => {
    const stripeObject = { product: plan };
    redirectToCheckoutAction(stripeObject);
  };

  return (
    <div className={`flex flex-col w-80 p-6 sm:p-8 space-y-4 sm:space-y-6 bg-white rounded-xl m-3 ${popular && 'border border-primary ring-6 ring-primary ring-opacity-10'}`}>
      <div className="flex flex-row space-x-2 items-start justify-start">
        <h2 className="text-4xl font-medium text-primary">
          {storage}
        </h2>
        {popular && (
          <h3 className="flex flex-row items-center h-6 px-3 text-xs font-semibold text-primary bg-primary bg-opacity-10 rounded-full">
            {textContent.mostPopular}
          </h3>
        )}
      </div>

      <div className="w-full h-px bg-gray-10" />

      <div className="flex flex-col">
        <span className="text-2xl font-medium">
          {`${price} ${textContent.monthlyCost}`}
        </span>
        <span className="text-gray-50">
          {`${price * billing}${textContent.billed} ${billing === 12 ? textContent.annually : textContent.monthly}`}
        </span>
      </div>

      <button
        type="button"
        onClick={() => { checkout(); }}
        className="btn-primary"
      >
        {`${textContent.buy} ${storage}`}
      </button>

      <div className="hidden sm:flex flex-col items-start justify-start space-y-1.5 text-sm">
        <div className="flex flex-row items-start justify-start space-x-2">
          <Check weight="bold" size={18} className="my-px" />
          <span className="font-semibold">{textContent.features[0]}</span>
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
