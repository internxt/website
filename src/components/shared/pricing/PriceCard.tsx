import {
  ArrowsClockwise,
  Broom,
  CirclesThreePlus,
  Code,
  CodeBlock,
  CreditCard,
  Database,
  Detective,
  Envelope,
  Fingerprint,
  Gauge,
  Key,
  LockSimple,
  Password,
  ShieldPlus,
  Sparkle,
  VideoConference,
} from '@phosphor-icons/react';
import { TransformedProduct } from '@/services/stripe.service';
import { LifetimeMode } from '@/components/lifetime/PaymentSection';
import React from 'react';

export interface PriceCardProps {
  product: TransformedProduct;
  popular: boolean;
  lang: string;
  label: string;
  isCheckoutForLifetime: boolean;
  productCardPlan?: 'individuals' | 'business';
  colorCard?: string;
  labelBackground?: string;
  decimalDiscountValue?: number;
  redeemCodeCta?: LifetimeMode;
  monthlyProductPrice?: number;
  darkMode?: boolean;
  onCheckoutButtonClicked: (planId: string, isCheckoutForLifetime: boolean) => void;
  isFamilyPage?: boolean;
  showPromo?: boolean;
  isAffiliate?: boolean;
  cardIndex?: number;
}

export const PriceCard = ({
  product,
  decimalDiscountValue,
  isCheckoutForLifetime,
  productCardPlan = 'individuals',
  popular,
  lang,
  redeemCodeCta,
  isFamilyPage,
  showPromo,
  onCheckoutButtonClicked,
  cardIndex = 0,
}: PriceCardProps): JSX.Element => {
  const contentText = require(`@/assets/lang/${lang}/priceCard.json`);
  const { currency, interval, price, storage, priceId } = product;

  const isLifetime = interval === 'lifetime';
  const isAnnual = interval === 'year';

  const priceNow = decimalDiscountValue
    ? ((price * decimalDiscountValue) / 100).toFixed(0).replace('.00', '')
    : Number(price).toFixed(0).replace('.00', '');
  const priceBefore = decimalDiscountValue ? Number(price).toFixed(0).replace('.00', '') : undefined;

  const monthlyPriceNow = Number(priceNow).toFixed(0).replace('.88', '');
  const monthlyPriceBefore = decimalDiscountValue
    ? Number(price / 12)
        .toFixed(0)
        .replace('.00', '')
    : undefined;
  const percentOff = decimalDiscountValue ? 100 - decimalDiscountValue : 0;

  const ctaText = redeemCodeCta === 'redeem' ? contentText.cta.redeem : contentText.cta.selectPlan;
  const isBusiness = productCardPlan === 'business';

  const planTypes = {
    '1TB': isBusiness
      ? isFamilyPage
        ? contentText.businessLabels.family['1TB']
        : contentText.productFeatures.planTypes.standard
      : contentText.productFeatures.planTypes.essentials,
    '2TB': isFamilyPage ? contentText.businessLabels.family['2TB'] : contentText.productFeatures.planTypes.pro,
    '3TB': contentText.productFeatures.planTypes.premium,
    '5TB': contentText.productFeatures.planTypes.ultimate,
  };
  const cardLabel = planTypes[product.storage] || null;

  const iconsFeatures = [
    Database,
    Key,
    LockSimple,
    Fingerprint,
    ArrowsClockwise,
    Password,
    Gauge,
    ShieldPlus,
    CirclesThreePlus,
    Sparkle,
    Detective,
  ];

  const iconsFeaturesForUltimate = [
    Database,
    Key,
    LockSimple,
    Fingerprint,
    ArrowsClockwise,
    Password,
    Gauge,
    ShieldPlus,
    CirclesThreePlus,
    CodeBlock,
    Code,
    Sparkle,
    VideoConference,
    Detective,
    Envelope,
  ];

  const iconsFeaturesForBusiness = [
    Database,
    Key,
    Gauge,
    ShieldPlus,
    ArrowsClockwise,
    Password,
    CirclesThreePlus,
    LockSimple,
    Fingerprint,
    CodeBlock,
    Code,
    Sparkle,
    Detective,
    VideoConference,
    Envelope,
  ];

  const newFeaturesNumber = isBusiness ? 10 : cardIndex === 1 ? 9 : 12;

  const renderFeatureIcon = (index: number) => {
    const Icon = isBusiness
      ? iconsFeaturesForBusiness[index]
      : cardIndex === 1
      ? iconsFeatures[index]
      : iconsFeaturesForUltimate[index];
    return Icon ? <Icon className="h-6 w-6 flex-shrink-0 pt-1 text-primary" /> : null;
  };

  const renderFeatureText = (text: string, index: number) => {
    if (index === 0) {
      const parts = text.split(/(\*\*.*?\*\*)/g);
      return parts.map((part, partIndex) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          const boldText = part.slice(2, -2);
          return <strong key={partIndex}>{boldText} &nbsp;</strong>;
        }
        return part;
      });
    }
    return text;
  };

  return (
    <div
      className={`flex h-full w-[352px] flex-col items-center justify-start rounded-16 ${
        popular ? 'z-0 bg-neutral-250 shadow-xl' : ''
      }`}
    >
      <div className="flex h-[61px] items-center justify-center">
        <p className={`${popular ? 'flex' : 'hidden'} text-base font-semibold text-white lg:text-2xl`}>
          {contentText.mostPopular}
        </p>
      </div>

      <div
        className={`z-10 w-full overflow-hidden rounded-16 border bg-white ${
          popular ? ' border-blue-10' : 'border-gray-10'
        } flex h-full flex-col`}
      >
        <div className="flex flex-col items-center justify-center gap-8 border-b-red bg-white py-4 lg:px-8 lg:py-6">
          <p className="px-4 text-center text-30 font-semibold lg:text-3xl">{cardLabel}</p>
          <div className="flex w-auto min-w-[180px] max-w-[300px] flex-col items-center justify-between px-4">
            <div className="flex w-full flex-row flex-wrap items-end justify-center gap-2">
              <span className="flex flex-row items-end gap-1">
                <p className="text-base font-semibold text-gray-100 lg:mb-[18px]">{currency}</p>
                <p className="text-2xl font-bold text-gray-100 lg:text-4xl">
                  {isBusiness ? priceNow : isAnnual ? priceNow : priceNow}
                </p>
                {isBusiness ? (
                  <span className="flex items-end whitespace-nowrap text-base font-semibold">
                    {contentText.perUserSlash}
                  </span>
                ) : null}
                {isAnnual ? (
                  <span className="flex items-end whitespace-nowrap text-base font-semibold">
                    {contentText.perYear}
                  </span>
                ) : null}
              </span>

              <span className="flex flex-row items-end">
                <p className="h-[26px] items-center self-start pr-1 text-sm font-semibold text-gray-50 lg:pt-2">
                  {currency}
                </p>
                <p className="pb-[1px] pr-[2px] text-lg font-normal text-gray-50 line-through lg:pt-0 lg:text-xl">
                  {isBusiness ? priceBefore : isAnnual ? priceBefore : isLifetime ? priceBefore : priceNow}
                </p>
                {isBusiness ? (
                  <span className="whitespace-nowrap text-sm font-normal text-gray-50">{contentText.perUserSlash}</span>
                ) : null}
                {isAnnual ? (
                  <span className="whitespace-nowrap pb-[2px] text-sm font-normal text-gray-50">
                    {contentText.perYear}
                  </span>
                ) : null}
              </span>
            </div>
          </div>

          <button
            id={`planButton${storage}`}
            onClick={() => onCheckoutButtonClicked(priceId, isCheckoutForLifetime)}
            className={`${
              popular
                ? 'bg-primary text-white hover:bg-primary-dark'
                : 'border-primary bg-white text-primary hover:bg-gray-1'
            } mx-4 flex h-[48px] w-full min-w-[230px] max-w-[288px] items-center justify-center rounded-md border-[1.5px]`}
          >
            <p className="px-4 text-center text-base font-medium leading-tight">{ctaText}</p>
          </button>
        </div>

        <div className="flex flex-grow flex-col gap-4 bg-white px-8 pb-6">
          {contentText.productFeatures[productCardPlan][storage].map((feature, index) => (
            <div key={feature}>
              <div className="flex flex-row items-center">
                <div className="flex min-h-[24px] flex-row items-start justify-center gap-3">
                  {renderFeatureIcon(index)}
                  <div className=" flex flex-grow flex-row items-center gap-2 text-base font-normal leading-relaxed text-gray-80 lg:text-lg">
                    <span className="flex-grow">{renderFeatureText(feature, index)}</span>
                    {index > newFeaturesNumber && (
                      <p className="inline-flex h-min w-fit flex-shrink-0 rounded-2 bg-purple-1 px-2 py-0.5 text-center text-xs font-semibold text-purple-10">
                        {contentText.commingSoon}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {index === 0 && <div className="mt-4 h-[1px] w-full bg-neutral-35"></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
