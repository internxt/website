/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { redirectToCheckoutAction } from '../CheckoutForm';

const PriceCard = ({ planType, storage, price, billingFrequency, cta, country, popular, lang }) => {
  const [stripeObject, setStripeObject] = useState({});

  const billingFrequencyList = {
    '-1': 'lifetime',
    1: 'monthly',
    6: 'semiannually',
    12: 'annually',
  };

  const currency = () => {
    switch (country) {
      case 'US':
        return '$';
      case 'GB':
        return '£';
      default:
        return '€';
    }
  };

  const totalBilled = Math.abs(price * billingFrequency).toFixed(2);
  const contentText = require(`../../assets/lang/en/priceCard.json`);

  useEffect(() => {
    if (cta[0] === 'checkout') {
      const stripeObj = { product: cta[1] };
      setStripeObject(stripeObj);
    }
  }, [cta]);

  return (
    <div
      className={`priceCard card ${
        popular ? 'border-2 border-primary  bg-blue-60 shadow-lg ring-2 ring-blue-60' : ''
      } m-2 flex max-w-xs flex-shrink-0 flex-grow-0 flex-col overflow-hidden rounded-2xl sm:m-4`}
    >
      <div
        className={`mostPopular ${
          popular ? '' : 'hidden'
        } flex flex-col items-center justify-center py-2 text-xs font-semibold text-white`}
      >
        {contentText.mostPopular}
      </div>

      <div className={`info flex flex-col items-center justify-center bg-white p-6 ${popular ? 'rounded-t-2xl' : ''}`}>
        <div
          className={`storage flex max-w-min flex-row whitespace-nowrap rounded-full bg-blue-10 py-1 px-4 pb-0.5 font-semibold text-blue-60`}
        >
          <p>
            {storage}
            <span className={`${planType.toLowerCase() === 'individual' ? 'hidden' : ''} text-sm`}>
              {contentText.perUserSlash}
            </span>
          </p>
        </div>

        <div className={`planPrice flex flex-col items-center justify-center p-10`}>
          <div
            className={`priceBreakdown flex flex-col items-center
            `}
          >
            <p className="flex flex-row items-start space-x-0.5 font-semibold text-neutral-700">
              <span className={`currency ${price <= 0 ? 'hidden' : ''}`}>{currency()}</span>
              <span className="price text-4xl font-bold">{price}</span>
            </p>
            <p className="pt-2 text-xs font-normal text-gray-50">{contentText.oneTime}</p>
          </div>

          <div
            className={`totalBilling ${
              planType.toLowerCase() === 'individual' ? 'flex' : 'hidden'
            } flex-row text-xs text-neutral-80`}
          >
            <p className={`${price <= 0 ? 'hidden' : ''}`}>
              <span className={`totalBilled ${billingFrequency < 0 ? 'hidden' : ''}`}>
                <span className="currency text-supporting-2">{currency()}</span>
                {totalBilled}{' '}
              </span>

              <span className="billingFrequency">
                {contentText.billingFrequencyLabel[billingFrequencyList[billingFrequency]]}
              </span>
            </p>

            <p className={`${price <= 0 ? '' : 'hidden'}`}>{contentText.price.free}</p>
          </div>
        </div>

        <div
          tabIndex={0}
          // eslint-disable-next-line no-unused-expressions
          onClick={() => {
            cta[0] === 'checkout' ? redirectToCheckoutAction(stripeObject) : (location.href = cta[1]);
          }}
          className="flex w-full flex-row"
        >
          <div className="subscribePlan flex w-full origin-center transform cursor-pointer select-none items-center justify-center rounded-lg border border-transparent bg-blue-60 px-6 py-2  text-lg font-medium text-white transition-all duration-75 focus:bg-blue-70 focus:outline-none focus:ring-2 focus:ring-blue-20 focus:ring-offset-2 active:translate-y-0.5 active:bg-blue-70 sm:text-base">
            <p className={`${price <= 0 ? 'hidden' : ''} ${planType.toLowerCase() === 'individual' ? '' : 'hidden'}`}>
              {contentText.cta.get} {storage}
            </p>

            <p className={`${price <= 0 ? '' : 'hidden'} ${planType.toLowerCase() === 'individual' ? '' : 'hidden'}`}>
              {contentText.cta.signUpNow}
            </p>

            <p className={`${planType.toLowerCase() === 'individual' ? 'hidden' : ''}`}>{contentText.cta.getStarted}</p>
          </div>
        </div>
      </div>

      <div className="featureList flex flex-col border-t border-neutral-20 bg-neutral-10 p-6 text-neutral-500">
        <div className="flex flex-col space-y-2">
          <div className="flex flex-row items-start space-x-2 font-semibold">
            <img
              loading="lazy"
              className="mt-0.5 translate-y-px transform select-none"
              src="/icons/checkNeutral500.svg"
              draggable="false"
              alt="check icon"
            />

            <span>{contentText.features.moneyBack}</span>
          </div>
          <div className="flex flex-row items-start space-x-2">
            <img
              loading="lazy"
              className="mt-0.5 translate-y-px transform select-none"
              src="/icons/checkNeutral500.svg"
              draggable="false"
              alt="check icon"
            />
            <span className={'flex'}>
              {contentText.features.enjoyForever.enjoy} {storage} {contentText.features.enjoyForever.forever}
            </span>
          </div>

          <div className="flex flex-row items-start space-x-2">
            <img
              loading="lazy"
              className="mt-0.5 translate-y-px transform select-none"
              src="/icons/checkNeutral500.svg"
              draggable="false"
              alt="check icon"
            />

            <span>{contentText.features.encryptedFiles}</span>
          </div>

          <div className="flex flex-row items-start space-x-2">
            <img
              loading="lazy"
              className="mt-0.5 translate-y-px transform select-none"
              src="/icons/checkNeutral500.svg"
              draggable="false"
              alt="check icon"
            />

            <span>{contentText.features.accessFromAnywhere}</span>
          </div>

          <div className="flex flex-row items-start space-x-2">
            <img
              loading="lazy"
              className="mt-0.5 translate-y-px transform select-none"
              src="/icons/checkNeutral500.svg"
              draggable="false"
              alt="check icon"
            />

            <span>{contentText.features.allServices}</span>
          </div>
          <div className="flex flex-row items-start space-x-2">
            <img
              loading="lazy"
              className="mt-0.5 translate-y-px transform select-none"
              src="/icons/checkNeutral500.svg"
              draggable="false"
              alt="check icon"
            />

            <span>{contentText.features.dataAccess}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
