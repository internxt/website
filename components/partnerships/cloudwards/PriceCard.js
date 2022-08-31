/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { redirectToCheckoutAction } from '../../CheckoutForm';

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
    1: 'monthly',
    6: 'semiannually',
    12: 'annually',
  };

  const totalBilled = Math.abs(price * billingFrequency).toFixed(2);
  const teamsBilled = (totalBilled * getUsers).toFixed(2);
  const MAX_USERS = 200;
  const contentText = require(`../../../assets/lang/${lang}/priceCard.json`);

  useEffect(() => {
    if (cta[0] === 'checkout') {
      const stripeObj = { product: cta[1] };
      setStripeObject(stripeObj);
    }
  }, [cta]);

  return (
    <div
      className={`priceCard card ${
        popular ? 'bg-primary ring-2 ring-primary shadow-lg' : ''
      } flex flex-col flex-shrink-0 flex-grow-0 max-w-xs rounded-2xl overflow-hidden m-2 sm:m-4`}
    >
      <div
        className={`mostPopular ${
          popular ? '' : 'hidden'
        } flex flex-col py-2 items-center justify-center text-xs font-medium text-white`}
      >
        {contentText.mostPopular}
      </div>

      <div className={`info flex flex-col p-6 items-center justify-center bg-white ${popular ? 'rounded-t-2xl' : ''}`}>
        <div
          className={`storage flex flex-row whitespace-nowrap py-1 pb-0.5 px-4 max-w-min ${
            popular ? 'bg-blue-10 text-primary' : 'bg-neutral-20 text-neutral-80'
          } font-medium rounded-full`}
        >
          <p>
            {storage}
            <span className={`${planType.toLowerCase() === 'individual' ? 'hidden' : ''} text-sm`}>
              {contentText.perUserSlash}
            </span>
          </p>
        </div>

        <div
          className={`planPrice flex flex-col py-8 justify-center items-center ${
            priceBefore ? 'space-y-1' : 'space-y-2'
          }`}
        >
          <div className="flex flex-col items-center">
            <div
              className={`priceBreakdown flex ${
                planType.toLowerCase() === 'individual' ? 'flex-row space-x-px items-end' : 'flex-col items-center'
              }`}
            >
              <span
                className={`perUser ${planType.toLowerCase() === 'individual' ? 'hidden' : ''} text-xs font-medium`}
              >
                {contentText.perUser}
              </span>

              <p className="flex flex-row items-start text-green-old-50 font-medium space-x-0.5">
                <span className={`currency ${price <= 0 ? 'hidden' : ''} text-2xl`}>€</span>
                <span className="price text-5xl font-bold">0.00</span>
                <span className={`currency ${price <= 0 ? 'hidden' : ''} text-2xl opacity-0 pointer-events-none`}>
                  €
                </span>
              </p>
            </div>

            <p className="text-cool-gray-100 text-lg font-medium">{contentText.firstMonth}</p>
          </div>

          <span
            className={`priceBefore ${
              priceBefore ? 'flex' : 'hidden'
            } text-base text-neutral-80 font-medium line-through`}
          >
            €{priceBefore}
          </span>

          <div
            className={`totalBilling ${
              planType.toLowerCase() === 'individual' ? 'flex' : 'hidden'
            } flex-row text-neutral-80 text-xs`}
          >
            <p className={`${price <= 0 ? 'hidden' : ''}`}>
              <span className={`totalBilled ${billingFrequency < 0 ? 'hidden' : ''}`}>
                <span className="currency text-supporting-2">€</span>
                {totalBilled}{' '}
              </span>

              <span className="billingFrequency">
                {contentText.billingFrequencyLabel[billingFrequencyList[billingFrequency]]}{' '}
                {contentText.billingFrequencyLabel.afterMonth}
              </span>
            </p>

            <p className={`${price <= 0 ? '' : 'hidden'}`}>{contentText.price.free}</p>
          </div>
        </div>

        <div
          className={`businessUserCount ${
            planType.toLowerCase() === 'individual' ? 'hidden' : 'flex'
          } flex-col w-full bg-neutral-10 ring-1 ring-neutral-20 rounded-lg p-4 mb-4`}
        >
          <div className="input relative flex flex-row justify-between bg-white rounded-lg ring-1 ring-neutral-30">
            <button
              type="button"
              onClick={() => {
                if (getUsers >= 3) {
                  setUsers(parseInt(getUsers, 10) - 1);
                } else setUsers(2);
              }}
              className={`flex flex-row items-center justify-center h-10 w-10 sm:h-8 sm:w-8 ${
                getUsers > 2
                  ? 'bg-primary text-white active:bg-primary-dark'
                  : 'bg-neutral-30 text-neutral-80 active:bg-neutral-40 cursor-not-allowed'
              } text-2xl font-light z-10 rounded-l-lg transition-all sm:duration-50 select-none`}
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
              className={`flex flex-row items-center justify-center h-10 w-10 sm:h-8 sm:w-8 ${
                getUsers < MAX_USERS
                  ? 'bg-primary text-white active:bg-primary-dark'
                  : 'bg-neutral-30 text-neutral-80 active:bg-neutral-40 cursor-not-allowed'
              } text-2xl font-light z-10 rounded-r-lg transition-all sm:duration-50 select-none`}
            >
              <span className="mb-1">+</span>
            </button>

            <label
              htmlFor={`users_${storage}`}
              className="absolute top-0 left-0 h-full w-full flex flex-row items-center justify-center text-xl sm:text-base font-medium cursor-text"
            >
              <div className="relative flex flex-row h-full items-center">
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
                  className="absolute left-0 bg-transparent font-medium appearance-none outline-none w-14 min-w-full"
                />
              </div>

              <span className="ml-1 select-none">{contentText.users}</span>
            </label>
          </div>

          <div className="flex flex-row w-full justify-between text-neutral-700 mt-4">
            <span className="font-medium">Total:</span>

            <div className="flex flex-row items-end">
              <div className="flex flex-row items-start">
                <span className="text-xs mt-0.5 mr-0.5">€</span>

                <span>{teamsBilled}</span>
              </div>

              <span className="text-xs text-neutral-100 mb-1 ml-0.5">
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
          className="flex flex-col items-center text-center w-full"
        >
          <div className="subscribePlan flex justify-center w-full items-center px-6 py-2 border border-transparent rounded-lg text-lg sm:text-base font-medium text-white bg-primary  active:bg-primary-dark origin-center active:translate-y-0.5 focus:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-20 transition-all duration-75 cursor-pointer select-none">
            <p className={`${price <= 0 ? 'hidden' : ''} ${planType.toLowerCase() === 'individual' ? '' : 'hidden'}`}>
              {contentText.cta.claimTheDeal}
            </p>

            <p className={`${price <= 0 ? '' : 'hidden'} ${planType.toLowerCase() === 'individual' ? '' : 'hidden'}`}>
              {contentText.cta.signUpNow}
            </p>

            <p className={`${planType.toLowerCase() === 'individual' ? 'hidden' : ''}`}>{contentText.cta.getStarted}</p>
          </div>

          <p className="text-xs text-cool-gray-40 mt-2">{contentText.onlyForNewClients}</p>
        </div>
      </div>

      <div className="featureList flex flex-col p-6 text-neutral-500 bg-neutral-10 border-t border-neutral-20">
        <div className="flex flex-col space-y-2">
          <div className="flex flex-row items-start space-x-2 font-medium">
            <img
              loading="lazy"
              className="mt-0.5 translate-y-px select-none"
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
};

export default PriceCard;
