import {
  ArrowsClockwise,
  CodeBlock,
  Database,
  Envelope,
  Fingerprint,
  Fire,
  Gauge,
  Key,
  LockSimple,
  Password,
  ShieldPlus,
  VideoConference,
} from '@phosphor-icons/react';
import { getImage } from '@/lib/getImage';
import { TransformedProduct } from '@/components/services/stripe.service';
import { LifetimeMode } from '@/components/lifetime/PaymentSection';
import Image from 'next/image';
import styles from '@/components/black-friday/BF-HeroSection.module.scss';
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
  checkIconName?: string;
  decimalDiscountValue?: number;
  fixedDiscount?: number;
  redeemCodeCta?: LifetimeMode;
  darkMode?: boolean;
  onCheckoutButtonClicked: (planId: string, isCheckoutForLifetime: boolean) => void;
  isFamilyPage?: boolean;
  isBrave?: boolean;
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
  popular,
  lang,
  redeemCodeCta,
  label,
  isFamilyPage,
  darkMode,
  isBrave,
  onCheckoutButtonClicked,
}: PriceCardProps): JSX.Element => {
  const contentText = require(`@/assets/lang/${lang}/priceCard.json`);
  const { currency, interval, price, storage, priceId } = product;

  const isLifetimePlan = interval === 'lifetime';

  const fixedDiscountWithDecimals = fixedDiscount && Math.abs(fixedDiscount / 100).toFixed(2);
  const fixedDiscountPriceNow = fixedDiscount ? price - Number(fixedDiscountWithDecimals) : undefined;
  const priceNow = decimalDiscountValue
    ? ((price * decimalDiscountValue) / 100).toFixed(2).replace('.00', '')
    : Number(price).toFixed(2).replace('.00', '');

  const priceNowAnnual = decimalDiscountValue
    ? ((price * decimalDiscountValue) / 100).toFixed(2).replace('.00', '')
    : Number(price / 12)
        .toFixed(2)
        .replace('.00', '');

  const priceBefore = decimalDiscountValue ? Number(price).toFixed(2).replace('.00', '') : undefined;
  const ctaText = redeemCodeCta === 'redeem' ? contentText.cta.redeem : contentText.cta.selectPlan;
  const cardMaxWidth = productCardPlan === 'individuals' ? 'max-w-xs xs:w-72' : 'max-w-[362px] w-full';
  const businessLabel = isFamilyPage ? contentText.businessLabels.family[storage] : contentText.businessLabels[storage];
  const cardLabel = productCardPlan === 'business' ? businessLabel : label;
  const backgroundClass = darkMode ? 'bg-primary' : labelBackground;
  const textColorClass = darkMode ? 'text-white' : `text-${colorCard}`;

  const iconsFeatures = [
    Database,
    Key,
    Gauge,
    ShieldPlus,
    ArrowsClockwise,
    Password,
    LockSimple,
    Fingerprint,
    CodeBlock,
    VideoConference,
    Envelope,
  ];

  return (
    <div
      className={`${
        !darkMode && popular ? `border-${colorCard}/50 ring-[3px]` : darkMode ? '' : 'ring-1 ring-gray-10'
      } m-2 flex ${cardMaxWidth} max-h-[680px] min-w-[380px] flex-shrink-0 flex-grow-0 flex-col  overflow-hidden rounded-2xl`}
    >
      <div
        className={`info flex min-h-[280px] flex-col items-center justify-center space-y-4 rounded-t-2xl ${
          darkMode ? styles.linearGradient : 'bg-white'
        } p-6 pt-6`}
      >
        <div className="flex flex-col items-center justify-center">
          <div
            className={`flex flex-row items-center justify-center space-x-2 rounded-full px-3 py-1 transition-all ${
              popular ? `bg-${colorCard}` : 'invisible opacity-0'
            }`}
          >
            <Fire size={28} className="text-white" />
            <p className="font-semibold text-white">{contentText.mostPopular}</p>
          </div>
        </div>

        <div className={`${backgroundClass} flex rounded-full px-3 py-0.5`}>
          <p className={`${textColorClass} text-lg font-medium`}>{cardLabel}</p>
        </div>
        <div
          className={`planPrice flex flex-col items-center justify-center ${priceBefore ? 'space-y-1' : 'space-y-4'}`}
        >
          <div
            className={`priceBreakdown flex flex-row
              items-end space-x-px text-neutral-700
            `}
          >
            <p
              className={`${
                darkMode ? 'text-white' : 'text-gray-100'
              } flex flex-row items-start space-x-1 whitespace-nowrap font-medium`}
            >
              <span className={`currency`}>{currency}</span>
              <span className="price text-4xl font-bold">
                {fixedDiscountPriceNow ?? isLifetimePlan ? priceNow : priceNowAnnual}
              </span>
              <span className="self-end font-semibold">{contentText.perMonth}</span>
            </p>
          </div>
          <p
            className={`${
              priceBefore ? 'flex' : 'hidden'
            } flex-row items-start space-x-1 whitespace-nowrap font-semibold ${
              darkMode ? 'text-white' : 'text-gray-50'
            } line-through`}
          >
            <span className={`text-sm`}>{currency}</span>
            <span className="price text-2xl font-medium">{priceBefore}</span>
          </p>

          <p className={`flex text-sm text-gray-50`}>
            {productCardPlan === 'business' ? contentText.perUserSlash : ''}{' '}
          </p>
        </div>
        <button
          id={`planButton${storage}`}
          onClick={() => onCheckoutButtonClicked(priceId, isCheckoutForLifetime)}
          className={`flex w-full flex-col items-center rounded-lg border 
            ${
              popular
                ? `border-${colorCard} bg-${colorCard} text-white hover:bg-${colorCard}-dark`
                : darkMode
                ? `border-${colorCard} bg-primary text-white hover:bg-${colorCard}-dark active:bg-gray-5`
                : `border-${colorCard} text-${colorCard} hover:bg-gray-1 active:bg-gray-5`
            } whitespace-nowrap px-20 py-2.5 font-medium`}
        >
          <p>{ctaText}</p>
        </button>
      </div>

      <div
        className={`featureList flex flex-col  ${
          darkMode ? 'bg-gray-100' : 'border-t border-neutral-20 bg-neutral-10'
        } min-h-[470px] pb-6 text-sm`}
      >
        <div className="flex flex-col space-y-2 pt-6">
          {contentText.productFeatures[productCardPlan][storage].map((feature, index) => (
            <div className="flex flex-row items-start space-x-2 px-6 first:font-semibold" key={feature}>
              {React.createElement(iconsFeatures[index % iconsFeatures.length], {
                size: 24,
                className: 'text-primary',
              })}
              <span className={`${darkMode ? 'text-white' : 'text-gray-80'}`}>{feature}</span>
              {index > 8 ? <span className="rounded-lg bg-orange/10 px-1 text-orange">Coming Soon</span> : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
