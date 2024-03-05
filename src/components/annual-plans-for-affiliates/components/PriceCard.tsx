import { CouponType } from '@/lib/types';

export interface PriceCardProps {
  contentText: any;
  planType: string;
  storage: string;
  price: number;
  currency: string;
  cta: any[];
  onButtonClicked: (planId, currency, coupon) => void;
  priceBefore?: number;
  billingFrequency?: string;
  popular?: boolean;
  priceId?: string;
  coupon?: CouponType;
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
      <div className={`info flex flex-col items-center justify-center space-y-6 rounded-t-2xl bg-white p-6 pt-6`}>
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="flex rounded-full bg-[#F3F3F8] px-3 py-0.5">
            <p className={`${popular ? 'text-gray-100' : 'text-[#8E8E94]'} font-medium`}>{storage}</p>
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
            <span className="price text-2xl">{priceBefore}</span>
          </p>

          <p className={`${planType.toLowerCase() === 'individual' ? 'flex' : 'hidden'} text-sm text-gray-50`}>
            {contentText.billedAnnually}
          </p>
        </div>
        <button
          id={`planButton${storage}`}
          onClick={() => onButtonClicked(cta[1], currencyValue[currency], coupon)}
          className={`flex w-full flex-col items-center rounded-lg border ${
            popular
              ? 'bg-primary text-white hover:bg-primary-dark'
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
