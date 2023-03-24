/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-destructuring */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-nested-ternary */
import React from 'react';
import { getPlanId, stripeProducts } from '../../pages/api/stripe/stripeProducts';
import { checkout } from '../../lib/auth';

const TWOTB_OFF_COUPON = 'P8PSpVs6';

export default function SpecialPriceCard({
  planType,
  storage,
  price,
  billingFrequency,
  cta,
  setUsers,
  getUsers,
  popular,
  lang,
  country,
  products,
}) {
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

  const onOfferClick = () => {
    const interval = billingFrequency === 1 ? 'month' : 'year';
    stripeProducts()
      .getPlanId(interval, storage)
      .then((planId) => {
        checkout({
          planId: planId,
          couponCode: TWOTB_OFF_COUPON,
          mode: billingFrequency === -1 ? 'payment' : 'subscription',
        });
      });
  };

  const teamsBilled = (price * getUsers).toFixed(2);
  const MAX_USERS = 200;
  const contentText = require(`../../assets/lang/${lang}/priceCard.json`);

  return (
    <div
      className={`priceCard card ${
        popular ? 'border-2 border-primary bg-primary shadow-lg ring-2 ring-primary' : ''
      } m-2 flex w-full flex-shrink-0 flex-grow-0 flex-col overflow-hidden rounded-2xl xs:w-72`}
    >
      <div
        className={`mostPopular ${
          popular ? '' : 'hidden'
        } flex flex-col items-center justify-center py-2 text-xs font-medium text-white`}
      >
        {popular && billingFrequency === 12 ? contentText.cta.discount + ' ' + storage : contentText.mostPopular}
      </div>

      <div
        className={`info flex flex-col items-center justify-center  p-4 pt-6 ${
          popular && billingFrequency === 12
            ? 'rounded-t-2xl bg-[url(/images/privacy/neonBlur.png)] bg-cover'
            : 'bg-white'
        }`}
      >
        <div
          className={`storage flex max-w-min flex-row whitespace-nowrap py-1 px-4 pb-0.5 ${
            popular ? 'bg-blue-10 text-primary' : 'bg-neutral-20 text-neutral-80'
          } rounded-full font-medium`}
        >
          <p>
            {storage}
            <span className={`${planType.toLowerCase() === 'individual' ? 'hidden' : ''} text-sm`}>
              {contentText.perUserSlash}
            </span>
          </p>
        </div>

        <div
          className={`planPrice flex flex-col items-center justify-center space-y-2
            py-8`}
        >
          <p className={` flex flex-row items-start space-x-0.5 font-bold text-white`}>
            <span className={`currency ${price <= 0 ? 'hidden' : ''}`}>{currency()}</span>
            <span className="price text-4xl font-semibold">{Math.abs((price * 10) / 100).toFixed(2)}</span>
          </p>
          <div
            className={`priceBreakdown flex text-neutral-50 ${
              planType.toLowerCase() === 'individual' ? 'flex-row items-end space-x-px' : 'flex-col items-center'
            }`}
          >
            {/* <span className={`perUser ${planType.toLowerCase() === 'individual' ? 'hidden' : ''} text-xs font-medium`}>
              {contentText.perUser}
            </span> */}
            <p className={` flex flex-row items-start space-x-0.5 font-medium `}>
              <span className={`currency ${price <= 0 ? 'hidden' : ''}`}>{currency()}</span>
              <span className="price text-2xl font-semibold line-through">
                {price <= 0 ? `${contentText.freePlan}` : price}
              </span>
            </p>
            {/* eslint-disable-next-line no-nested-ternary */}
            <span className={`perMonth ${price <= 0 ? 'hidden' : billingFrequency < 0 ? 'hidden' : ''}`}></span>
          </div>

          {/* <span
            className={`priceBefore ${
              priceBefore ? 'flex' : 'hidden'
            } text-base font-medium text-neutral-50 line-through`}
          >
            {currency()}
            {priceBefore}
          </span> */}

          <div
            className={`totalBilling ${
              planType.toLowerCase() === 'individual' ? 'flex' : 'hidden'
            } flex-row text-xs text-neutral-50
            `}
          >
            <p className={`${price <= 0 ? 'hidden' : ''}`}>
              <span className="billingFrequency">
                {contentText.billingFrequencyLabel[billingFrequencyList[billingFrequency]]}
              </span>
            </p>
            <p className={`${price <= 0 ? '' : 'hidden'}`}>{contentText.price.free}</p>
          </div>
        </div>

        <div
          className={`businessUserCount ${
            planType.toLowerCase() === 'individual' ? 'hidden' : 'flex'
          } mb-4 w-full flex-col rounded-lg bg-neutral-10 p-4 ring-1 ring-neutral-20`}
        >
          <div className="input relative flex flex-row justify-between rounded-lg bg-white ring-1 ring-neutral-30">
            <button
              type="button"
              onClick={() => {
                if (getUsers >= 3) {
                  setUsers(parseInt(getUsers, 10) - 1);
                } else setUsers(2);
              }}
              className={`flex h-10 w-10 flex-row items-center justify-center sm:h-8 sm:w-8 ${
                getUsers > 2
                  ? 'bg-primary text-white active:bg-primary-dark'
                  : 'cursor-not-allowed bg-neutral-30 text-neutral-80 active:bg-neutral-40'
              } sm:duration-50 z-10 select-none rounded-l-lg text-2xl font-light transition-all`}
            >
              <span className="mb-1">-</span>
            </button>
            <button
              type="button"
              onClick={() => {
                if (getUsers <= MAX_USERS - 1) {
                  setUsers(parseInt(getUsers, 10) + 1);
                } else setUsers(MAX_USERS);
              }}
              className={`flex h-10 w-10 flex-row items-center justify-center sm:h-8 sm:w-8 ${
                getUsers < MAX_USERS
                  ? 'bg-primary text-white active:bg-primary-dark'
                  : 'cursor-not-allowed bg-neutral-30 text-neutral-80 active:bg-neutral-40'
              } sm:duration-50 z-10 select-none rounded-r-lg text-2xl font-light transition-all`}
            >
              <span className="mb-1">+</span>
            </button>
            <label
              htmlFor={`users_${storage}`}
              className="absolute top-0 left-0 flex h-full w-full cursor-text flex-row items-center justify-center text-xl font-medium sm:text-base"
            >
              <div className="relative flex h-full flex-row items-center">
                <span
                  className={`pointer-events-none ${
                    Number.isNaN(getUsers) || getUsers === '' || getUsers < 1 ? '' : 'opacity-0'
                  }`}
                >
                  {Number.isNaN(getUsers) || getUsers === '' || getUsers < 1 ? 0 : getUsers}
                </span>
                <input
                  id={`users_${storage}`}
                  type="number"
                  inputMode="numeric"
                  min="2"
                  max={MAX_USERS}
                  step="1"
                  value={getUsers}
                  // eslint-disable-next-line no-unused-expressions
                  onChange={(e) => {
                    e.target.value.toString().startsWith('0')
                      ? (e.target.value = e.target.value.toString().slice(1, e.target.value.toString().length))
                      : setUsers(e.target.value > MAX_USERS ? MAX_USERS : e.target.value);
                  }}
                  // eslint-disable-next-line max-len
                  onBlur={(e) => {
                    setUsers(e.target.value > MAX_USERS ? MAX_USERS : e.target.value < 2 ? 2 : e.target.value);
                  }}
                  // eslint-disable-next-line no-unused-expressions
                  onKeyDown={(e) => {
                    e.key === 'Enter' || e.key === 'Escape' ? e.target.blur() : null;
                  }}
                  className="absolute left-0 w-14 min-w-full appearance-none bg-transparent font-medium outline-none"
                />
              </div>
              <span className="ml-1 select-none">{contentText.users}</span>
            </label>
          </div>

          <div className="mt-4 flex w-full flex-row justify-between text-neutral-700">
            <span className="font-medium">Total:</span>
            <div className="flex flex-row items-end">
              <div className="flex flex-row items-start">
                <span className="mt-0.5 mr-0.5 text-xs">€</span>
                <span>{teamsBilled}</span>
              </div>
              <span className="mb-1 ml-0.5 text-xs text-neutral-100">
                {contentText.billingFrequencyLabelSmall[billingFrequencyList[billingFrequency]]}
              </span>
            </div>
          </div>
        </div>

        <div
          tabIndex={0}
          onClick={() => {
            onOfferClick();
          }}
          className="flex w-full flex-row"
        >
          <div className="subscribePlan flex w-full origin-center cursor-pointer select-none items-center justify-center rounded-lg border border-transparent bg-primary px-6 py-2 text-lg  font-medium text-white transition-all duration-75 focus:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-blue-20 focus:ring-offset-2 active:translate-y-0.5 active:bg-primary-dark sm:text-base">
            <p className={`${price <= 0 ? 'hidden' : ''} ${planType.toLowerCase() === 'individual' ? '' : 'hidden'}`}>
              {popular && billingFrequency === 12 ? contentText.cta.discount : contentText.cta.get}{' '}
              {lang === 'en' && storage}
            </p>

            <p className={`${price <= 0 ? '' : 'hidden'} ${planType.toLowerCase() === 'individual' ? '' : 'hidden'}`}>
              {contentText.cta.signUpNow}
            </p>

            <p className={`${planType.toLowerCase() === 'individual' ? 'hidden' : ''}`}>{contentText.cta.getStarted}</p>
          </div>
        </div>
      </div>

      <div className="featureList flex flex-col border-t border-neutral-20 bg-neutral-10 p-6 text-neutral-500">
        <div className="flex flex-col space-y-2 text-sm">
          {billingFrequency === -1 && (
            <div className={`flex flex-row items-start space-x-2 font-semibold`}>
              <img
                loading="lazy"
                className="mt-0.5 translate-y-px select-none"
                src="/icons/checkNeutral500.svg"
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
              src="/icons/checkNeutral500.svg"
              draggable="false"
              alt="check icon"
            />
            <span>{contentText.features.encryptedFiles}</span>
          </div>
          <div className="flex flex-row items-start space-x-2">
            <img
              loading="lazy"
              className="mt-0.5 translate-y-px select-none"
              src="/icons/checkNeutral500.svg"
              draggable="false"
              alt="check icon"
            />
            <span>{contentText.features.accessFromAnywhere}</span>
          </div>
          <div className="flex flex-row items-start space-x-2">
            <img
              loading="lazy"
              className="mt-0.5 translate-y-px select-none"
              src="/icons/checkNeutral500.svg"
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
