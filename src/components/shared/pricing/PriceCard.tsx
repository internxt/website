import { Fire } from '@phosphor-icons/react';
import { getImage } from '@/lib/getImage';
import { TransformedProduct } from '@/components/services/stripe.service';
import { LifetimeMode } from '@/components/lifetime/PaymentSection';

export interface PriceCardProps {
  product: TransformedProduct;
  popular: boolean;
  lang: string;
  label: string;
  productCardPlan?: 'individuals' | 'business';
  decimalDiscountValue?: number;
  redeemCodeCta?: LifetimeMode;
  onCheckoutButtonClicked: (planId: string) => void;
}

const BILLING_FREQUENCY_LIST = {
  lifetime: 'lifetime',
  month: 'monthly',
  year: 'annually',
};

export const PriceCard = ({
  product,
  decimalDiscountValue,
  productCardPlan = 'individuals',
  popular,
  lang,
  redeemCodeCta,
  label,
  onCheckoutButtonClicked,
}: PriceCardProps): JSX.Element => {
  const contentText = require(`@/assets/lang/${lang}/priceCard.json`);

  const { currency, interval, price, storage, priceId } = product;

  const priceNow = decimalDiscountValue ? (price * decimalDiscountValue).toFixed(2) : price;
  const priceBefore = decimalDiscountValue ? price : undefined;

  const ctaText = redeemCodeCta === 'redeem' ? contentText.cta.redeem : contentText.cta.selectPlan;

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
            <p className="text-lg font-medium text-primary">{label}</p>
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
              <span className={`currency`}>{currency}</span>
              <span className="price text-4xl font-bold">{priceNow}</span>
            </p>
          </div>
          <p
            className={`${
              priceBefore ? 'flex' : 'hidden'
            } flex-row items-start space-x-1 whitespace-nowrap font-semibold text-gray-50 line-through`}
          >
            <span className={`text-sm`}>{currency}</span>
            <span className="price text-2xl font-medium">{priceBefore}</span>
          </p>

          <p className={`flex text-sm text-gray-50`}>
            {contentText.billingFrequencyLabel[BILLING_FREQUENCY_LIST[interval]]}
          </p>
        </div>
        <button
          id={`planButton${storage}`}
          onClick={() => onCheckoutButtonClicked(priceId)}
          className={`flex w-full flex-col items-center rounded-lg border ${
            popular
              ? 'border-primary bg-primary text-white hover:bg-primary-dark'
              : 'border-primary text-primary hover:bg-gray-1 active:bg-gray-5'
          } whitespace-nowrap px-20 py-2.5 font-medium`}
        >
          <p>{ctaText}</p>
        </button>
      </div>
      <div className="featureList flex flex-col border-t border-neutral-20 bg-neutral-10 pb-6 text-sm text-gray-80">
        <div className="flex flex-col space-y-2 pt-6">
          {contentText.productFeatures[productCardPlan][storage].map((feature) => (
            <div className="flex flex-row items-start space-x-2 px-6 last:font-semibold" key={feature}>
              <img
                loading="lazy"
                className="translate-y-px select-none"
                src={getImage('/icons/checkPrimary.svg')}
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
};
