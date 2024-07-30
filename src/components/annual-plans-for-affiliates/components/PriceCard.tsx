import { PromoCodeName } from '@/lib/types';
import { Fire } from '@phosphor-icons/react';

export interface PriceCardProps {
  contentText: any;
  planType: string;
  storage: string;
  price: number;
  currency: string;
  cta: any[];
  onButtonClicked: (planId, coupon) => void;
  priceBefore?: number;
  billingFrequency?: string;
  popular?: boolean;
  priceId?: string;
  coupon?: PromoCodeName;
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
  cta,
  popular,
  currency,
  coupon,
  contentText,
  onButtonClicked,
}: Readonly<PriceCardProps>) {
  return (
    <div
      className={`${
        popular ? 'border-primary/50 ring-[3px]' : 'ring-1 ring-gray-10'
      } m-2 flex max-w-xs flex-shrink-0 flex-grow-0 flex-col overflow-hidden rounded-2xl xs:w-72`}
    >
      <div className={`info flex flex-col items-center justify-center space-y-6 rounded-t-2xl bg-white p-6 pt-6`}>
        <div className="flex flex-col items-center justify-center space-y-4">
          {popular ? (
            <div className="flex flex-row items-center justify-center space-x-2 rounded-full bg-primary px-3 py-1">
              <Fire size={28} className="text-white" />
              <p className="font-semibold text-white">{contentText.mostPopular}</p>
            </div>
          ) : null}
          <div className="flex rounded-full bg-primary/10 px-3 py-0.5">
            <p className="text-lg font-medium text-primary">{storage}</p>
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
              <span>{currency}</span>
              <span className="price text-4xl font-bold">{price}</span>
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
            } flex-row items-start space-x-1 whitespace-nowrap font-semibold text-gray-50 line-through`}
          >
            <span className={`text-sm`}>{currency}</span>
            <span className="price text-2xl font-medium">{priceBefore}</span>
          </p>

          <p className={`${planType.toLowerCase() === 'individual' ? 'flex' : 'hidden'} text-sm text-gray-50`}>
            {contentText.billedAnnually}
          </p>
        </div>
        <button
          id={`planButton${storage}`}
          onClick={() => onButtonClicked(cta[1], coupon)}
          className={`flex w-full flex-col items-center rounded-lg border ${
            popular
              ? 'border-primary bg-primary text-white hover:bg-primary-dark'
              : 'border-primary text-primary hover:bg-gray-1 active:bg-gray-5'
          } whitespace-nowrap px-20 py-2.5 font-medium`}
        >
          <p className="">{contentText.cta}</p>
        </button>
      </div>
      <div className="featureList flex flex-col border-t border-neutral-20 bg-neutral-10 p-6 text-gray-80">
        <div className="flex flex-col space-y-2 text-sm">
          {contentText.features[storage].map((feature) => (
            <div
              className="flex flex-row items-start space-x-2 first:whitespace-nowrap last:font-semibold"
              key={feature}
            >
              <img
                loading="lazy"
                className="translate-y-px select-none"
                src="/icons/checkPrimary.svg"
                draggable="false"
                alt="check icon"
              />
              <span className="text-gray-80">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
