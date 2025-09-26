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
  File,
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

const NEW_FEATURE_THRESHOLDS = {
  BUSINESS: 12,
  INDIVIDUAL_FIRST_CARD: 9,
  INDIVIDUAL_OTHER_CARDS: 12,
};

const ICON_MAPS = {
  individuals: [
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
  ],
  ultimate: [
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
    Envelope,
    File,
  ],
  business: [
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
    CreditCard,
    Broom,
    VideoConference,
    File,
    Envelope,
  ],
};

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
  onCheckoutButtonClicked,
  cardIndex = 0,
}: PriceCardProps): JSX.Element => {
  const contentText = require(`@/assets/lang/${lang}/priceCard.json`);
  const { currency, interval, price, storage, priceId } = product;
  const isBusiness = productCardPlan === 'business';
  const isAnnual = interval === 'year';

  const hasDiscount = decimalDiscountValue && decimalDiscountValue > 0;
  const currentPrice = hasDiscount
    ? ((Number(price) * decimalDiscountValue) / 100).toFixed(0)
    : Number(price).toFixed(0);
  const originalPrice = hasDiscount ? Number(price).toFixed(0) : undefined;

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
  const planLabel = planTypes[storage] || null;

  const newFeatureThreshold = isBusiness
    ? NEW_FEATURE_THRESHOLDS.BUSINESS
    : cardIndex === 1
    ? NEW_FEATURE_THRESHOLDS.INDIVIDUAL_FIRST_CARD
    : NEW_FEATURE_THRESHOLDS.INDIVIDUAL_OTHER_CARDS;

  const ctaText = redeemCodeCta === 'redeem' ? contentText.cta.redeem : contentText.cta.selectPlan;
  const features = contentText.productFeatures[productCardPlan][storage];
  const getIconMap = () => {
    if (storage === '5TB') return ICON_MAPS.ultimate;
    return ICON_MAPS[productCardPlan] || ICON_MAPS.individuals;
  };
  const icons = getIconMap();

  return (
    <div
      className={`flex h-full flex-col items-center justify-start rounded-16 ${
        popular ? 'bg-neutral-250 shadow-xl' : ''
      }`}
    >
      <div className={`flex ${popular ? 'h-[61px]' : 'lg:h-[61px]'} items-center justify-center`}>
        <p className={`${popular ? 'flex' : 'hidden'} text-2xl font-semibold text-white`}>{contentText.mostPopular}</p>
      </div>

      <div
        className={`z-10 h-full w-full rounded-16 bg-white ring-[1px]  ${
          popular ? '   ring-blue-10' : ' ring-gray-10 lg:px-0'
        }`}
      >
        <div className="flex h-full flex-col rounded-16 py-4 lg:px-6 lg:py-8">
          <div className="flex h-full w-full flex-col items-center justify-start gap-8 lg:gap-4">
            <p className="text-30 font-semibold text-gray-100 lg:text-3xl">{planLabel}</p>

            {hasDiscount ? (
              <div className="flex h-min w-[180px] flex-col items-center justify-start lg:h-min lg:w-[190px]">
                <div className="flex h-[35px] w-full flex-row items-end justify-center gap-2 lg:h-[43px]">
                  <span className="flex h-full flex-row items-end ">
                    <p className="self-start pb-4 pr-1 text-base font-semibold text-gray-100 lg:mb-[18px]">
                      {currency}
                    </p>
                    <p className=" text-2xl font-bold text-gray-100 lg:text-4xl">{currentPrice}</p>
                    {isBusiness && (
                      <span className="flex h-full items-end pl-1 text-base font-semibold">
                        {contentText.perUserSlash}
                      </span>
                    )}
                    {isAnnual && (
                      <span className="flex h-full items-end text-base font-semibold">{contentText.perYear}</span>
                    )}
                  </span>

                  <span className="flex h-full flex-row items-end">
                    <p className="items-center self-start pr-1 pt-[6px] text-sm font-semibold text-gray-50 lg:pt-3">
                      {currency}
                    </p>
                    <p className=" text-lg font-normal text-gray-50 line-through lg:pt-0 lg:text-xl">{originalPrice}</p>
                    {isBusiness && <span className="text-sm font-normal text-gray-50">{contentText.perUserSlash}</span>}
                    {isAnnual && <span className=" text-sm font-normal text-gray-50">{contentText.perYear}</span>}
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex h-[87px] w-[180px] flex-col items-center justify-start gap-2 lg:h-[71px] lg:w-[190px]">
                <div className="flex h-[50px] w-full flex-row items-start justify-center gap-2 lg:h-[60px]">
                  <span className="flex h-full flex-row items-center gap-1 pr-2">
                    <p className="text-base font-semibold text-gray-100 lg:mb-[18px]">{currency}</p>
                    <p className="text-2xl font-bold text-gray-100 lg:text-4xl">{currentPrice}</p>
                    {isBusiness && (
                      <span className="flex h-full items-center pt-4 text-base font-semibold">
                        {contentText.perUserSlash}
                      </span>
                    )}
                    {isAnnual && !isBusiness && (
                      <span className="flex h-full items-center pt-4 text-base font-semibold">
                        {contentText.perYear}
                      </span>
                    )}
                  </span>
                </div>
              </div>
            )}

            <button
              id={`planButton${storage}`}
              onClick={() => onCheckoutButtonClicked(priceId, isCheckoutForLifetime)}
              className={`${
                popular
                  ? 'bg-primary text-white hover:bg-primary-dark'
                  : 'border-primary bg-transparent text-primary hover:bg-gray-1'
              } flex h-[48px] w-[270px] items-center justify-center rounded-md border-[1.5px] text-base lg:w-[340px]`}
            >
              <p className="text-base font-medium">{ctaText}</p>
            </button>

            <div className="flex w-full flex-col justify-start gap-4 px-6 pt-4">
              {features.map((feature, index) => {
                const getAdjustedIndex = () => {
                  if (cardIndex === 0 && isBusiness && index >= 9) {
                    return index + 1;
                  }
                  return index;
                };

                const adjustedIndex = getAdjustedIndex();

                const renderText = () => {
                  if (index === 0 && feature.includes('**')) {
                    return feature
                      .split(/(\*\*.*?\*\*)/)
                      .map((part, i) =>
                        part.startsWith('**') && part.endsWith('**') ? (
                          <strong key={i}>{part.slice(2, -2)}&nbsp;</strong>
                        ) : (
                          part
                        ),
                      );
                  }
                  return feature;
                };

                const Icon = icons[adjustedIndex];

                return (
                  <div className="flex flex-col items-start" key={feature}>
                    <div
                      className={`flex min-h-[24px] flex-row items-start gap-2 lg:items-center ${
                        index === 0 ? '' : ''
                      }`}
                    >
                      {Icon && <Icon className="h-6 w-6 text-primary" />}
                      <span className="flex flex-row pt-[2px] text-base font-normal text-gray-80">
                        {renderText()}
                        {index > newFeatureThreshold && (
                          <p className="ml-2 flex h-min items-center rounded-2 bg-purple-1 px-2 py-0.5 text-center font-semibold text-purple-10 lg:px-1">
                            {contentText.commingSoon}
                          </p>
                        )}
                      </span>
                    </div>
                    {index === 0 && <div className=" mt-4 h-[1px] w-full bg-neutral-25" />}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
