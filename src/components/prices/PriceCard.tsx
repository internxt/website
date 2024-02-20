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
  savePercentage?: number;
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
  savePercentage,
}: PriceCardProps) {
  const billingFrequencyList = {
    lifetime: 'lifetime',
    month: 'monthly',
    year: 'annually',
  };

  const contentText = require(`@/assets/lang/${lang}/priceCard.json`);

  return (
    <div
      className={`${
        popular ? 'border-primary/50 ring-[3px]' : 'ring-1 ring-gray-10'
      } m-2 flex max-w-xs flex-shrink-0 flex-grow-0 flex-col overflow-hidden rounded-2xl xs:w-72`}
    >
      <div className={`info flex flex-col items-center justify-center space-y-6 rounded-t-2xl bg-white p-6 pt-6`}>
        <div className="flex flex-col items-center justify-center space-y-2">
          {savePercentage ? (
            <div className="flex rounded-full bg-primary/10 px-3 py-0.5">
              <p className="text-lg font-medium text-primary">
                {contentText.save} {savePercentage}%
              </p>
            </div>
          ) : null}
          <div
            className={`storage flex max-w-min flex-row whitespace-nowrap rounded-full px-4 text-4xl font-medium text-gray-100`}
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
        </div>
        <div
          className={`planPrice flex flex-col items-center justify-center ${priceBefore ? 'space-y-1' : 'space-y-4'}`}
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
          </div>
          <span
            className={`perUser ${
              planType.toLowerCase() === 'individual' ? 'hidden' : ''
            } text-sm font-medium text-gray-50`}
          >
            {contentText.perUser}
          </span>
          <p
            className={`${
              priceBefore ? 'flex' : 'hidden'
            } flex-row items-start space-x-1 whitespace-nowrap font-medium text-gray-50 line-through`}
          >
            <span className={`currency`}>{country}</span>
            <span className="price text-xl">{priceBefore}</span>
          </p>
          <div
            className={`totalBilling ${
              planType.toLowerCase() === 'individual' ? 'flex' : 'hidden'
            } flex-row text-gray-50
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
          className={`flex w-full flex-col rounded-lg border ${
            popular
              ? 'bg-primary text-white hover:bg-primary-dark'
              : 'border-primary text-primary hover:bg-gray-1 active:bg-gray-5'
          } px-20 py-2.5 font-medium`}
        >
          <p className="whitespace-nowrap">{contentText.cta.selectPlan}</p>
        </button>
      </div>
      <div className="featureList flex flex-col border-t border-neutral-20 bg-neutral-10 p-6 text-gray-80">
        <div className="flex flex-col space-y-2 whitespace-nowrap text-sm">
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
          {contentText.productFeatures[storage].map((feature) => (
            <div className="flex flex-row items-start space-x-2">
              <img
                loading="lazy"
                className="mt-0.5 translate-y-px select-none"
                src="/icons/checkPrimary.svg"
                draggable="false"
                alt="check icon"
              />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
