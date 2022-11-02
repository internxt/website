/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { redirectToCheckoutAction } from '../CheckoutForm';

const PriceCard = ({
  planType,
  storage,
  price,
  priceBefore,
  billingFrequency,
  cta,
  setUsers,
  getUsers,
  popular,
  lang,
}) => {
  const [stripeObject, setStripeObject] = useState({});

  const billingFrequencyList = {
    '-1': 'lifetime',
    1: 'monthly',
    6: 'semiannually',
    12: 'annually',
  };

  const totalBilled = Math.abs(price * billingFrequency).toFixed(2);
  const teamsBilled = (totalBilled * getUsers).toFixed(2);
  const MAX_USERS = 200;
  const contentText = require(`../../assets/lang/${lang}/priceCard.json`);

  useEffect(() => {
    if (cta[0] === 'checkout') {
      const stripeObj = { product: cta[1] };
      setStripeObject(stripeObj);
    }
  }, [cta]);

  return (
    <div
      className={`priceCard card ${
        popular ? 'bg-blue-60 shadow-lg ring-2 ring-blue-60' : ''
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
          className={`storage flex max-w-min flex-row whitespace-nowrap py-1 px-4 pb-0.5 ${
            popular ? 'bg-blue-10 text-blue-60' : 'bg-neutral-20 text-neutral-80'
          } rounded-full font-semibold`}
        >
          <p>
            {storage}
            <span className={`${planType.toLowerCase() === 'individual' ? 'hidden' : ''} text-sm`}>
              {contentText.perUserSlash}
            </span>
          </p>
        </div>

        <div
          className={`planPrice flex flex-col items-center justify-center p-10 ${
            priceBefore ? 'space-y-1' : 'space-y-4'
          }`}
        >
          <div
            className={`priceBreakdown flex ${
              planType.toLowerCase() === 'individual' ? 'flex-row items-end space-x-px' : 'flex-col items-center'
            }`}
          >
            <span
              className={`perUser ${planType.toLowerCase() === 'individual' ? 'hidden' : ''} text-xs font-semibold`}
            >
              {contentText.perUser}
            </span>

            <p className="flex flex-row items-start space-x-0.5 font-semibold text-neutral-700">
              <span className={`currency ${price <= 0 ? 'hidden' : ''}`}>€</span>
              <span className="price text-4xl font-bold">{price <= 0 ? `${contentText.freePlan}` : price}</span>
            </p>

            <span className={`perMonth ${price <= 0 || billingFrequency < 0 ? 'hidden' : ''}`}>
              {contentText.perMonth}
            </span>
          </div>

          <span
            className={`priceBefore ${
              priceBefore ? 'flex' : 'hidden'
            } text-base font-medium text-neutral-80 line-through`}
          >
            €{priceBefore}
          </span>

          <div
            className={`totalBilling ${
              planType.toLowerCase() === 'individual' ? 'flex' : 'hidden'
            } flex-row text-xs text-neutral-80`}
          >
            <p className={`${price <= 0 ? 'hidden' : ''}`}>
              <span className={`totalBilled ${billingFrequency < 0 ? 'hidden' : ''}`}>
                <span className="currency text-supporting-2">€</span>
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
                  ? 'bg-blue-60 text-white active:bg-blue-70'
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
                  ? 'bg-blue-60 text-white active:bg-blue-70'
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

                {/* eslint-disable-next-line no-unused-expressions */}
                <input
                  id={`users_${storage}`}
                  type="number"
                  inputMode="numeric"
                  min="2"
                  max={MAX_USERS}
                  step="1"
                  value={getUsers}
                  onChange={(e) => {
                    e.target.value.toString().startsWith('0')
                      ? (e.target.value = e.target.value.toString().slice(1, e.target.value.toString().length))
                      : setUsers(e.target.value > MAX_USERS ? MAX_USERS : e.target.value);
                  }}
                  onBlur={(e) => {
                    setUsers(e.target.value > MAX_USERS ? MAX_USERS : e.target.value < 2 ? 2 : e.target.value);
                  }}
                  className="absolute left-0 w-14 min-w-full appearance-none bg-transparent font-medium outline-none"
                />
              </div>

              <span className="ml-1 select-none">{contentText.users}</span>
            </label>
          </div>

          <div className="mt-4 flex w-full flex-row justify-between text-neutral-700">
            <span className="font-semibold">Total:</span>

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
          // eslint-disable-next-line no-unused-expressions
          onClick={() => {
            cta[0] === 'checkout' ? redirectToCheckoutAction(stripeObject) : (location.href = cta[1]);
          }}
          className="flex w-full flex-row"
        >
          <div className="subscribePlan flex w-full origin-center transform cursor-pointer select-none items-center justify-center rounded-lg border border-transparent bg-blue-60 px-6 py-2  text-lg font-medium text-white transition-all duration-75 focus:bg-blue-70 focus:outline-none focus:ring-2 focus:ring-blue-20 focus:ring-offset-2 active:translate-y-0.5 active:bg-blue-70 sm:text-base">
            <p className={`${price <= 0 ? 'hidden' : ''} ${planType.toLowerCase() === 'individual' ? '' : 'hidden'}`}>
              {contentText.cta.buy} {storage}
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

            <span className={`${price <= 0 ? 'hidden' : 'flex'}`}>
              {billingFrequency < 0
                ? `${contentText.features.enjoyForever.enjoy} ${storage} ${contentText.features.enjoyForever.forever}`
                : `${contentText.features.moneyBack}`}
            </span>

            <span className={`${price <= 0 ? 'flex' : 'hidden'}`}>
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
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
