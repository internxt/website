/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-destructuring */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-nested-ternary */

import { useEffect, useMemo, useState } from 'react';

import { checkout, goToSignUpURL } from '@/lib/auth';
import { stripeService } from '@/components/services/stripeService';
import { CouponType } from '@/pages/api/stripe/get_coupons';

export interface PriceCardProps {
  readonly planType: string;
  readonly storage: string;
  readonly price: number;
  readonly priceBefore?: number;
  readonly billingFrequency: string;
  readonly cta: any[];
  readonly popular?: boolean;
  readonly lang: string;
  readonly country?: string;
}

export default function PriceCard({
  planType,
  storage,
  price,
  priceBefore,
  billingFrequency,
  cta,
  popular,
  country,
  lang,
}: PriceCardProps) {
  const [couponCode, setCouponCode] = useState('');

  const billingFrequencyList = {
    lifetime: 'lifetime',
    month: 'monthly',
    year: 'annually',
  };

  const convertedPrice = useMemo(() => {
    if (country !== '€') {
      const splitPrice = price.toString().split('.');
      const checkDecimalPrice = splitPrice[1] >= '50' ? 0.99 : 0.49;
      return parseInt(splitPrice[0]) + checkDecimalPrice;
    }
    // En caso de que no se cumplan las condiciones, devuelve price sin cambios
    return price;
  }, [country, price]);

  useEffect(() => {
    stripeService
      .getCoupon(CouponType.BlackFridayCoupon)
      .then((coupon) => {
        setCouponCode(coupon);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const contentText = require(`../../../assets/lang/${lang}/priceCard.json`);

  return (
    <div
      className={`priceCard drop-shadow ${
        popular ? ' bg-primary-dark' : ''
      } m-2 flex max-w-xs flex-shrink-0 flex-grow-0 flex-col overflow-hidden rounded-2xl xs:w-72`}
    >
      <div
        className={`mostPopular ${
          popular ? '' : 'hidden'
        } flex flex-col items-center justify-center py-2 text-xs font-bold text-white`}
      >
        {contentText.cta.discount}
      </div>

      <div className={`info flex flex-col items-center justify-center bg-gradient-to-b from-primary to-black p-6 pt-6`}>
        <div
          className={`storage flex max-w-min flex-row whitespace-nowrap rounded-full bg-primary py-1 px-4 pb-0.5 text-base font-semibold text-white`}
        >
          <p>
            {price <= 0 ? (
              <span className="">
                {contentText.price.free}
                {storage}
              </span>
            ) : (
              storage
            )}
          </p>
        </div>
        <div
          className={`planPrice flex flex-col items-center justify-center py-8 ${
            priceBefore ? 'space-y-1' : 'space-y-4'
          }`}
        >
          <div
            className={`priceBreakdown flex flex-row
              items-end space-x-px text-neutral-700
            `}
          >
            <p className={` flex flex-row items-start space-x-1 whitespace-nowrap font-medium text-white`}>
              <span className={`currency ${price <= 0 ? 'hidden' : ''}`}>{country}</span>
              <span className="text-4xl font-bold">
                {price <= 0 ? `${contentText.freePlan}` : planType === 'business' ? convertedPrice : convertedPrice}
              </span>
            </p>

            {/* eslint-disable-next-line no-nested-ternary */}
          </div>
          <span
            className={`perUser ${
              planType.toLowerCase() === 'individual' ? 'hidden' : ''
            } text-sm font-medium text-gray-50`}
          >
            {contentText.perUser}
          </span>
          <span
            className={`priceBefore ${priceBefore ? 'flex' : 'hidden'} text-2xl font-semibold text-white line-through`}
          >
            {country}
            {priceBefore}
          </span>
          <div
            className={`totalBilling ${
              planType.toLowerCase() === 'individual' ? 'flex' : 'hidden'
            } flex-row text-sm font-medium text-gray-40
            `}
          >
            <p className={`${price <= 0 ? 'hidden' : ''}`}>
              <span className="billingFrequency">
                {contentText.billingFrequencyLabel[billingFrequencyList[billingFrequency]]}
              </span>
            </p>
            <p className={`${price <= 0 ? '' : 'hidden'}`}>{contentText.price.freeForever}</p>
          </div>
        </div>
        <button
          id={`planButton${storage}`}
          onClick={() => {
            if (cta[1] === 'Free plan') {
              goToSignUpURL();
            } else {
              checkout({
                planId: cta[1],
                couponCode: couponCode,
                mode: billingFrequency === 'lifetime' ? 'payment' : 'subscription',
              });
            }
          }}
          className="flex w-full flex-row"
        >
          <div className="subscribePlan flex w-full origin-center transform cursor-pointer select-none items-center justify-center rounded-lg border border-transparent bg-blue-60 px-6 py-2  text-lg font-medium text-white transition-all duration-75 hover:bg-primary-dark focus:bg-blue-70 focus:outline-none focus:ring-2 focus:ring-blue-20 focus:ring-offset-2 active:translate-y-0.5 active:bg-blue-70 sm:text-base">
            <p className={`${price <= 0 ? 'hidden' : ''} ${planType.toLowerCase() === 'individual' ? '' : 'hidden'}`}>
              {contentText.cta.get} {storage}
            </p>

            <p className={`${price <= 0 ? '' : 'hidden'} ${planType.toLowerCase() === 'individual' ? '' : 'hidden'}`}>
              {contentText.cta.signUpNow}
            </p>

            <p className={`${planType.toLowerCase() === 'individual' ? 'hidden' : ''}`}>{contentText.cta.getStarted}</p>
          </div>
        </button>
      </div>
      <div className="featureList flex flex-col bg-gray-100 p-6 text-gray-5">
        <div className="flex flex-col space-y-2 text-sm">
          {billingFrequency === 'lifetime' && (
            <div className={`flex flex-row items-start space-x-2 font-semibold`}>
              <img
                loading="lazy"
                className="mt-0.5 translate-y-px select-none"
                src="/icons/checkPrimary.svg"
                draggable="false"
                alt="check icon"
              />
              <span className="flex">
                {`${contentText.features.enjoyForever.enjoy} ${storage} ${contentText.features.enjoyForever.forever}`}
              </span>
            </div>
          )}
          <div className="flex flex-row items-start space-x-2">
            <img
              loading="lazy"
              className="mt-0.5 translate-y-px select-none"
              src="/icons/checkPrimary.svg"
              draggable="false"
              alt="check icon"
            />
            <span>{contentText.features.encryptedFiles}</span>
          </div>
          <div className="flex flex-row items-start space-x-2">
            <img
              loading="lazy"
              className="mt-0.5 translate-y-px select-none"
              src="/icons/checkPrimary.svg"
              draggable="false"
              alt="check icon"
            />
            <span>{contentText.features.accessFromAnywhere}</span>
          </div>
          <div className="flex flex-row items-start space-x-2">
            <img
              loading="lazy"
              className="mt-0.5 translate-y-px select-none"
              src="/icons/checkPrimary.svg"
              draggable="false"
              alt="check icon"
            />
            <span>{contentText.features.allServices}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
