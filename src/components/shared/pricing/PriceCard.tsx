import { Fire } from '@phosphor-icons/react';
import { getImage } from '@/lib/getImage';
import { Interval, TransformedProduct } from '@/components/services/stripe.service';
import { LifetimeMode } from '@/components/lifetime/PaymentSection';
import Image from 'next/image';

export interface PriceCardProps {
  product: TransformedProduct;
  popular: boolean;
  lang: string;
  label: string;
  isCheckoutForLifetime: boolean;
  monthlyProductPrice: number;
  productCardPlan?: 'individuals' | 'business';
  colorCard?: string;
  labelBackground?: string;
  checkIconName?: string;
  decimalDiscountValue?: number;
  fixedDiscount?: number;
  redeemCodeCta?: LifetimeMode;
  onCheckoutButtonClicked: (planId: string, isCheckoutForLifetime: boolean) => void;
}

const BILLING_FREQUENCY_LIST = {
  lifetime: 'lifetime',
  month: 'monthly',
  year: 'annually',
};

export const PriceCard = ({
  product,
  decimalDiscountValue,
  fixedDiscount,
  isCheckoutForLifetime,
  productCardPlan = 'individuals',
  colorCard = 'primary',
  labelBackground = 'bg-primary/10',
  checkIconName = 'checkPrimary',
  monthlyProductPrice,
  popular,
  lang,
  redeemCodeCta,
  label,
  onCheckoutButtonClicked,
}: PriceCardProps): JSX.Element => {
  const contentText = require(`@/assets/lang/${lang}/priceCard.json`);

  const { currency, interval, price, storage, priceId } = product;

  const fixedDiscountWithDecimals = fixedDiscount && Math.abs(fixedDiscount / 100).toFixed(2);

  const fixedDiscountPriceNow = fixedDiscount ? price - Number(fixedDiscountWithDecimals) : undefined;
  const priceNow = decimalDiscountValue ? ((price * decimalDiscountValue) / 100).toFixed(2).replace('.00', '') : price;
  const priceBefore =
    decimalDiscountValue || fixedDiscount
      ? Number(price).toFixed(2).replace('.00', '')
      : interval === Interval.Year
      ? (monthlyProductPrice * 12).toFixed(2)
      : undefined;

  const ctaText = redeemCodeCta === 'redeem' ? contentText.cta.redeem : contentText.cta.selectPlan;
  const cardMaxWidth = productCardPlan === 'individuals' ? 'max-w-xs xs:w-72' : 'max-w-[362px] w-full';

  const cardLabel = productCardPlan === 'business' ? `${contentText.businessLabels[storage]}` : `${label}`;

  return (
    <div
      className={`${
        popular ? `border-${colorCard}/50 ring-[3px]` : 'ring-1 ring-gray-10'
      } m-2 flex ${cardMaxWidth} flex-shrink-0 flex-grow-0 flex-col overflow-hidden rounded-2xl`}
    >
      <div className={`info flex flex-col items-center justify-center space-y-6 rounded-t-2xl bg-white p-6 pt-6`}>
        <div className="flex flex-col items-center justify-center space-y-4">
          {popular ? (
            <div
              className={`flex flex-row items-center justify-center space-x-2 rounded-full bg-${colorCard} px-3 py-1`}
            >
              <Fire size={28} className="text-white" />
              <p className="font-semibold text-white">{contentText.mostPopular}</p>
            </div>
          ) : null}
          <div className={`${labelBackground} flex rounded-full px-3 py-0.5`}>
            <p className={`text-${colorCard} text-lg font-medium`}>{cardLabel}</p>
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
              <span className="price text-4xl font-bold">{fixedDiscountPriceNow ?? priceNow}</span>
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
            {productCardPlan === 'business' ? contentText.perUserSlash : ''}{' '}
            {contentText.billingFrequencyLabel[BILLING_FREQUENCY_LIST[interval]]}
          </p>
        </div>
        <button
          id={`planButton${storage}`}
          onClick={() => onCheckoutButtonClicked(priceId, isCheckoutForLifetime)}
          className={`flex w-full flex-col items-center rounded-lg border ${
            popular
              ? `border-${colorCard} bg-${colorCard} text-white hover:bg-${colorCard}-dark`
              : `border-${colorCard} text-${colorCard} hover:bg-gray-1 active:bg-gray-5`
          } whitespace-nowrap px-20 py-2.5 font-medium`}
        >
          <p>{ctaText}</p>
        </button>
      </div>
      <div className="featureList flex flex-col border-t border-neutral-20 bg-neutral-10 pb-6 text-sm text-gray-80">
        <div className="flex flex-col space-y-2 pt-6">
          {contentText.productFeatures[productCardPlan][storage].map((feature) => (
            <div
              className={`flex flex-row items-start space-x-2 px-6 ${
                productCardPlan === 'business' ? '' : 'last:font-semibold'
              }`}
              key={feature}
            >
              <Image
                width={16}
                height={17}
                loading="lazy"
                className="translate-y-px select-none"
                src={getImage(`/icons/${checkIconName}.svg`)}
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
