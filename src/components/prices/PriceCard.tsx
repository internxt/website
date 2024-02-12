import { checkout, goToSignUpURL } from '@/lib/auth';
import { CouponType } from '@/lib/types/types';

export interface PriceCardProps {
  planType: string;
  storage: string;
  price: number;
  priceBefore?: number;
  billingFrequency?: string;
  cta: any[];
  popular?: boolean;
  lang: string;
  priceId?: string;
  country?: string;
  coupon?: CouponType;
  currency?: string;
}

const currencyValue = {
  '€': 'eur',
  $: 'usd',
};

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
  coupon,
  currency,
}: PriceCardProps) {
  const billingFrequencyList = {
    lifetime: 'lifetime',
    month: 'monthly',
    year: 'annually',
  };

  const contentText = require(`@/assets/lang/${lang}/priceCard.json`);

  return (
    <div
      className={`priceCard card ${
        popular ? 'border-2 border-primary bg-primary shadow-subtle ring-2 ring-primary' : ''
      } m-2 flex max-w-xs flex-shrink-0 flex-grow-0 flex-col overflow-hidden rounded-2xl xs:w-72`}
    >
      <div
        className={`mostPopular ${
          popular ? '' : 'hidden'
        } flex flex-col items-center justify-center py-2 text-xs font-medium text-white`}
      >
        {contentText.mostPopularPlan}
      </div>

      <div
        className={`info flex flex-col items-center justify-center rounded-t-2xl  bg-white p-6 pt-6 
        `}
      >
        <div
          className={`storage flex max-w-min flex-row whitespace-nowrap bg-neutral-20 py-1 px-4 pb-0.5 text-base font-semibold ${
            popular ? 'text-gray-100' : ' text-gray-50'
          } rounded-full font-medium`}
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
            <p className={` flex flex-row items-start space-x-1 whitespace-nowrap font-medium text-gray-100`}>
              <span className={`currency ${price <= 0 ? 'hidden' : ''}`}>{country}</span>
              <span className="price text-4xl font-bold">
                {price <= 0 ? `${contentText.freePlan}` : planType === 'business' ? price : price}
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
            className={`priceBefore ${
              priceBefore ? 'flex' : 'hidden'
            } text-base font-medium text-neutral-100 line-through`}
          >
            {country}
            {priceBefore}
          </span>
          <div
            className={`totalBilling ${
              planType.toLowerCase() === 'individual' ? 'flex' : 'hidden'
            } flex-row text-sm font-medium text-gray-50
            `}
          >
            <p className={`${price <= 0 ? 'hidden' : ''}`}>
              <span className="billingFrequency">
                {contentText.billingFrequencyLabel[billingFrequencyList[billingFrequency as string]]}
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
                mode: billingFrequency === 'lifetime' ? 'payment' : 'subscription',
                currency: currencyValue[country as string] ?? 'eur',
                couponCode: coupon ?? undefined,
              });
            }
          }}
          className="flex w-full flex-row"
        >
          <div className="subscribePlan flex w-full origin-center transform cursor-pointer select-none items-center justify-center rounded-lg border border-transparent bg-blue-60 px-6 py-2 text-lg font-medium text-white transition-all duration-75 hover:bg-primary-dark focus:bg-blue-70 focus:outline-none focus:ring-2 focus:ring-blue-20 focus:ring-offset-2 active:translate-y-0.5 active:bg-blue-70 sm:text-base">
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
      <div className="featureList flex flex-col border-t border-neutral-20 bg-neutral-10 p-6 text-gray-80">
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
