import {
  ArrowsClockwise,
  CellTower,
  CirclesThreePlus,
  Code,
  CodeBlock,
  Database,
  Envelope,
  Files,
  Fingerprint,
  Image,
  Key,
  LockSimple,
  Password,
  Shield,
  Sparkle,
  VideoCamera,
} from '@phosphor-icons/react';
import { checkout } from '@/lib/auth';
import { PromoCodeProps } from '@/lib/types';

export interface HorizontalPriceCardProps {
  decimalDiscountValue?: number;
  storage: string;
  popular: boolean;
  currency: string;
  priceBefore: string;
  price: number;
  planId: string;
  currencyValue: string;
  coupon: PromoCodeProps | undefined;
}

export const HorizontalPriceCard = ({
  decimalDiscountValue,
  storage,
  currency,
  priceBefore,
  price,
  planId,
  currencyValue,
  coupon,
}: HorizontalPriceCardProps): JSX.Element | null => {
  if (!storage) {
    return null;
  }

  const contentText = require(`@/assets/lang/en/priceCard.json`);

  const MIN_DISCOUNT_PERCENT_TO_SHOW = 1;
  const hasDiscount = decimalDiscountValue && decimalDiscountValue > 0;
  const discountedPrice = hasDiscount ? (Number(price) * decimalDiscountValue) / 100 : Number(price);
  const currentPrice = (Math.trunc(discountedPrice * 100) / 100).toFixed(2);
  const showDiscount = Boolean(hasDiscount) && 100 - decimalDiscountValue! >= MIN_DISCOUNT_PERCENT_TO_SHOW;
  const cardLabel =
    {
      '5TB': contentText.productFeatures.planTypes.ultimate,
    }[storage] || null;

  const iconsFeatures = [
    Database,
    Key,
    LockSimple,
    Fingerprint,
    ArrowsClockwise,
    Password,
    CirclesThreePlus,
    Files,
    Image,
    CodeBlock,
    Code,
    CellTower,
    Shield,
    Sparkle,
    VideoCamera,
    Envelope,
  ];

  function onCheckoutButtonClicked() {
    checkout({
      planId: planId,
      mode: 'payment',
      planType: 'individual',
      currency: currencyValue ?? 'eur',
      promoCodeId: coupon?.name,
    });
  }
  return (
    <div
      id="billingButtons"
      className="flex w-[320px] flex-col overflow-hidden rounded-2xl ring-1 ring-gray-10 lg:h-[328px] lg:w-[1100px] lg:flex-row lg-xl:w-[1100px] xl:w-[1200px]"
    >
      <div className="flex w-full flex-col items-center justify-center space-y-4 bg-white p-6 pb-10 pt-10 lg:w-1/4 lg:border-r lg:border-neutral-20">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex rounded-full px-3 py-0.5">
            <p className="text-3xl font-semibold text-gray-100 lg:text-5xl">{cardLabel}</p>
          </div>
        </div>

        <div className={`flex flex-col items-center justify-center ${priceBefore ? 'space-y-1' : 'space-y-4'}`}>
          <div className="flex flex-row items-end space-x-2 text-neutral-700">
            <p className="flex flex-row items-end whitespace-nowrap font-medium text-gray-100">
              <span className="text-4xl font-bold">{currentPrice}</span>
              <span>{currency}</span>
              <span className="text-sm">{contentText.perMonth}</span>
            </p>
            {showDiscount && (
              <p className="flex flex-row items-end whitespace-nowrap font-normal text-gray-50">
                <span className="text-xl line-through">{price}</span>
                <span className="text-sm">{currency}</span>
                <span className="text-sm">{contentText.perMonth}</span>
              </p>
            )}
          </div>
        </div>
        <button
          id={`planButton${storage}`}
          onClick={() => onCheckoutButtonClicked()}
          className="mt-4 w-full whitespace-nowrap rounded-lg bg-primary px-20 py-2.5 font-medium text-white hover:bg-primary-dark"
        >
          {contentText.cta}
        </button>
      </div>
      <div className="flex w-full flex-col border-t border-neutral-20 bg-neutral-10 pb-6 pt-6 text-sm lg:h-[590px] lg:border-t-0">
        <div className="grid w-full grid-cols-1 gap-x-4 gap-y-4 px-6 text-start sm:grid-cols-2 lg:h-[264px] lg:w-fit lg:grid-cols-3 lg:items-center lg:justify-center lg:gap-x-12">
          {contentText.productFeatures.individualPlans[storage].map(
            (feature: { name: string; status: string }, index: number) => {
              const Icon = iconsFeatures[index] || iconsFeatures[iconsFeatures.length - 1];
              const isComingSoon = feature.status === 'Coming soon';
              const formattedName = feature.name.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

              return (
                <div key={index} className="flex items-center gap-2">
                  {Icon && <Icon size={24} className="shrink-0 text-primary" />}
                  <div className="flex flex-row items-center gap-2">
                    <p
                      className="font-regular text-lg+ text-gray-80"
                      dangerouslySetInnerHTML={{ __html: formattedName }}
                    />
                    {isComingSoon && (
                      <span className="rounded-2 bg-purple-1 px-1 py-0.5 text-base font-semibold text-purple-10">
                        {contentText.productFeatures.comingSoonLabel || contentText.commingSoon}
                      </span>
                    )}
                  </div>
                </div>
              );
            },
          )}
        </div>
      </div>
    </div>
  );
};
