/* eslint-disable prefer-destructuring */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { redirectToCheckoutAction } from '../CheckoutForm';
import styles from './Font.module.scss';

const PriceCard = ({
  planType,
  storage,
  x2storage,
  price,
  priceBefore,
  billingFrequency,
  cta,
  popular,
  lang
}) => {
  const [stripeObject, setStripeObject] = useState({});

  const billingFrequencyList = {
    '-1': 'lifetime',
    1: 'monthly',
    6: 'semiannually',
    12: 'annually'
  };

  const totalBilled = Math.abs(price * billingFrequency).toFixed(2);
  const contentText = require(`../../assets/lang/${lang}/priceCard.json`);

  useEffect(() => {
    if (cta[0] === 'checkout') {
      const stripeObj = { product: cta[1], cancelUrl: window.location.href };
      setStripeObject(stripeObj);
    }
  }, [cta]);

  return (

    <div className={`priceCard card ${popular ? 'bg-gray-80 ring-2 ring-gray-80 shadow-lg' : ''} flex flex-col flex-shrink-0 flex-grow-0 max-w-xs rounded-2xl overflow-hidden m-2 sm:m-4`}>

      <div className={`mostPopular ${popular ? '' : 'hidden'} flex flex-col py-2 items-center justify-center text-xs font-semibold text-gray-40`}>{contentText.mostPopular}</div>

      <div className={`info flex flex-col p-6 items-center justify-center bg-gray-90 ${popular ? 'rounded-t-2xl' : ''}`}>

        <div className="storage relative flex flex-row whitespace-nowrap mt-10 -mb-2 py-1 pb-0.5 px-4 max-w-min font-semibold bg-gray-80 bg-opacity-50 text-red-30 rounded-full">
          <span className="line-through z-10">{storage}</span>
          <div>
            <span className={`${styles.marker} absolute -top-10 left-1.5 transform -skew-x-6 z-10 text-4xl font-bold text-red-10`}>{x2storage}</span>
            <img loading="lazy" className="absolute -top-8 left-0 min-w-40 transform scale-150 select-none pointer-events-none" src={`/images/lifetime/graffiti/${Math.floor(Math.random() * 5) + 7}.png`} draggable="false" alt="check icon" />
          </div>

        </div>

        <div className={`planPrice z-10 flex flex-col p-10 justify-center items-center ${priceBefore ? 'space-y-1' : 'space-y-4'}`}>

          <div className={`priceBreakdown flex ${planType.toLowerCase() === 'individual' ? 'flex-row space-x-px items-end' : 'flex-col items-center'}`}>

            <span className={`perUser ${planType.toLowerCase() === 'individual' ? 'hidden' : ''} text-xs font-semibold`}>{contentText.perUser}</span>

            <p className="flex flex-row items-start font-semibold space-x-0.5">
              <span className={`currency ${price <= 0 ? 'hidden' : ''} text-white`}>€</span>
              <span className="price text-4xl font-bold text-white">{price <= 0 ? `${contentText.freePlan}` : price}</span>
            </p>

            <span className={`perMonth ${(price <= 0 || billingFrequency < 0) ? 'hidden' : ''}`}>{contentText.perMonth}</span>

          </div>

          <span className={`priceBefore ${priceBefore ? 'flex' : 'hidden'} text-base text-gray-60 font-medium line-through`}>
            €
            {priceBefore}
          </span>

          <div className={`totalBilling ${planType.toLowerCase() === 'individual' ? 'flex' : 'hidden'} flex-row text-gray-60 text-xs`}>

            <p className={`${price <= 0 ? 'hidden' : ''}`}>

              <span className={`totalBilled ${billingFrequency < 0 ? 'hidden' : ''}`}>
                <span className="currency text-supporting-2">€</span>
                {totalBilled}
                {' '}
              </span>

              <span className="billingFrequency">{contentText.billingFrequencyLabel[billingFrequencyList[billingFrequency]]}</span>

            </p>

            <p className={`${price <= 0 ? '' : 'hidden'}`}>{contentText.price.free}</p>

          </div>

        </div>

        <button
          type="button"
          // eslint-disable-next-line no-unused-expressions
          onClick={() => { cta[0] === 'checkout' ? redirectToCheckoutAction(stripeObject) : location.href = cta[1]; }}
          className="flex flex-row w-full"
        >

          <button type="button" className="subscribePlan flex justify-center w-full items-center px-6 py-2 border border-transparent rounded-lg text-lg sm:text-base font-medium text-gray-90 bg-gray-10  active:bg-red-10 focus:bg-red-10 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-red-40 transition-all duration-75 cursor-pointer select-none">

            <p className={`${price <= 0 ? 'hidden' : ''} ${planType.toLowerCase() === 'individual' ? '' : 'hidden'}`}>
              {contentText.cta.buy}
              {' '}
              {x2storage}
            </p>

            <p className={`${price <= 0 ? '' : 'hidden'} ${planType.toLowerCase() === 'individual' ? '' : 'hidden'}`}>{contentText.cta.signUpNow}</p>

            <p className={`${planType.toLowerCase() === 'individual' ? 'hidden' : ''}`}>{contentText.cta.getStarted}</p>

          </button>

        </button>

      </div>

      <div className="featureList flex flex-col p-6 text-gray-40 bg-gray-90 border-t border-gray-80">

        <div className="flex flex-col space-y-2">

          <div className="flex flex-row items-start space-x-2 font-semibold">

            <img loading="lazy" className="mt-0.5 transform translate-y-px select-none" src="/icons/checkGray40.svg" draggable="false" alt="check icon" />

            <span className={`${price <= 0 ? 'hidden' : 'flex'}`}>{billingFrequency < 0 ? `${contentText.features.enjoyForever.enjoy} ${x2storage} ${contentText.features.enjoyForever.forever}` : `${contentText.features.moneyBack}`}</span>

          </div>

          <div className="flex flex-row items-start space-x-2">

            <img loading="lazy" className="mt-0.5 transform translate-y-px select-none" src="/icons/checkGray40.svg" draggable="false" alt="check icon" />

            <span>{contentText.features.encryptedFiles}</span>

          </div>

          <div className="flex flex-row items-start space-x-2">

            <img loading="lazy" className="mt-0.5 transform translate-y-px select-none" src="/icons/checkGray40.svg" draggable="false" alt="check icon" />

            <span>{contentText.features.accessFromAnywhere}</span>

          </div>

          <div className="flex flex-row items-start space-x-2">

            <img loading="lazy" className="mt-0.5 transform translate-y-px select-none" src="/icons/checkGray40.svg" draggable="false" alt="check icon" />

            <span>{contentText.features.allServices}</span>

          </div>

        </div>

      </div>

    </div>

  );
};

export default PriceCard;
