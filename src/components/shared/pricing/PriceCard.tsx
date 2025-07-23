import {
  ArrowsClockwise,
  Backpack,
  Broom,
  CirclesThreePlus,
  CodeBlock,
  CreditCard,
  Database,
  Detective,
  Envelope,
  Fingerprint,
  Fire,
  Gauge,
  Key,
  LockSimple,
  Password,
  ShieldPlus,
  SunHorizon,
  VideoConference,
} from '@phosphor-icons/react';
import { TransformedProduct } from '@/services/stripe.service';
import { LifetimeMode } from '@/components/lifetime/PaymentSection';
import styles from '@/components/black-friday/BF-HeroSection.module.scss';
import React from 'react';
import { getImage } from '@/lib/getImage';
import Image from 'next/image';

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
}

const BILLING_FREQUENCY_LIST = {
  lifetime: 'lifetime',
  month: 'monthly',
  year: 'annually',
};

export const PriceCard = ({
  product,
  decimalDiscountValue,
  isCheckoutForLifetime,
  productCardPlan = 'individuals',
  colorCard = 'primary',
  labelBackground = 'bg-primary/10',
  popular,
  lang,
  redeemCodeCta,
  isFamilyPage,
  darkMode,
  showPromo,
  onCheckoutButtonClicked,
  isAffiliate,
}: PriceCardProps): JSX.Element => {
  const contentText = require(`@/assets/lang/${lang}/priceCard.json`);
  const { currency, interval, price, storage, priceId } = product;

  const isLifetime = interval === 'lifetime';
  const isAnnual = interval === 'year';

  const showMonthlyLabel =
    (productCardPlan === 'business' && interval === 'month') ||
    (interval === 'year' && productCardPlan === 'individuals');
  const showTotalDiscountPrice = interval === 'year';

  const priceNow = decimalDiscountValue
    ? ((price * decimalDiscountValue) / 100).toFixed(2).replace('.00', '')
    : Number(price).toFixed(2).replace('.00', '');
  const monthlyPriceNow = (Number(priceNow) / 12).toFixed(2).replace('.00', '');
  const priceBefore = decimalDiscountValue ? Number(price).toFixed(2).replace('.00', '') : undefined;
  const monthlyPriceBefore = decimalDiscountValue
    ? Number(price / 12)
        .toFixed(2)
        .replace('.00', '')
    : undefined;
  const annualSave = (Number(price) - Number(priceNow)).toFixed(0);
  const percentOff = decimalDiscountValue ? 100 - decimalDiscountValue : 0;
  const ctaText = redeemCodeCta === 'redeem' ? contentText.cta.redeem : contentText.cta.selectPlan;
  const cardMaxWidth = productCardPlan === 'individuals' ? 'max-w-xs xs:w-72' : 'max-w-[362px] w-full';
  const isBusiness = productCardPlan === 'business';
  const backgroundClass = darkMode ? 'bg-primary' : labelBackground;
  const textColorClass = darkMode ? 'text-white' : `text-${colorCard}`;
  const bgImage = getImage('/images/campaigns/summer/SummerCampaign.png');
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
    Gauge,
    ShieldPlus,
    ArrowsClockwise,
    Password,
    CirclesThreePlus,
    LockSimple,
    Fingerprint,
    CodeBlock,
    Broom,
    Detective,
    VideoConference,
    Envelope,
    CreditCard,
  ];

  return (
    <div
      className={`${
        !darkMode && popular ? `border-${colorCard}/50 ring-[3px]` : darkMode ? '' : 'ring-1 ring-gray-10'
      } m-2 flex ${cardMaxWidth} ${
        isBusiness ? 'lg:min-h-[840px]' : showPromo ? 'lg:h-[975px]' : 'lg:h-[850px]'
      } w-[420px] flex-shrink-0 flex-grow-0 flex-col overflow-hidden rounded-2xl lg:min-w-[410px]`}
    >
      <div
        className={`flex h-[360px] flex-col items-center justify-center space-y-4 rounded-t-2xl ${
          darkMode ? styles.linearGradient : 'bg-white'
        } p-6 pb-10 pt-10`}
      >
        <div className="flex flex-col items-center justify-center space-y-4">
          <div
            className={`flex flex-row items-center justify-center space-x-2 rounded-full bg-${colorCard} px-3 py-1 ${
              !popular ? 'invisible' : ''
            }`}
          >
            <Fire size={28} className="text-white" />
            <p className="font-semibold text-white">{contentText.mostPopular}</p>
          </div>

          <div className={`${backgroundClass} flex rounded-full px-3 py-0.5`}>
            <p className={`${textColorClass} text-lg font-medium`}>{cardLabel}</p>
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
            <p
              className={`${
                darkMode ? 'text-white' : 'text-gray-100'
              } flex flex-row items-start space-x-1 whitespace-nowrap font-medium`}
            >
              <span className={`currency`}>{currency}</span>
              <span className="price text-4xl font-bold">{isAnnual && !isBusiness ? monthlyPriceNow : priceNow}</span>
              {showMonthlyLabel ? <span className="self-end font-semibold">{contentText.perMonth}</span> : null}
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
            <span className="price text-2xl font-medium">
              {isBusiness ? priceBefore : isAnnual ? monthlyPriceBefore : isLifetime ? priceBefore : priceNow}
            </span>
          </p>

          <p className={`flex text-sm text-gray-50`}>
            {productCardPlan === 'business' ? contentText.perUserSlash : ''}{' '}
            {contentText.billingFrequencyLabel[BILLING_FREQUENCY_LIST[interval]]}
          </p>
          {decimalDiscountValue && (
            <p className="flex bg-green-1/10 px-1 py-0.5 text-sm text-green-dark">
              {percentOff}
              {contentText.discount}
              {' | '}
              {contentText.save} {annualSave}
              {currency}
            </p>
          )}
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
      {showPromo ? (
        <div
          style={{
            backgroundImage: `url('${bgImage}')`,
            backgroundPosition: '0% 80%',
          }}
          className={'flex flex-col items-start space-y-2 px-5 py-5'}
        >
          <span className="text-[13.5px] font-bold text-gray-100">
            {contentText.productFeatures.WorldEnvironmentDay.title}
          </span>
          <div className="flex flex-col items-start space-y-2">
            <div className="flex items-center space-x-2">
              <SunHorizon size={24} className="text-primary" weight="fill" />
              <span className="text-[13.5px] text-gray-100">
                {contentText.productFeatures.WorldEnvironmentDay.gift1}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Backpack size={24} className="text-primary" weight="fill" />
              <span className="text-[13.5px] text-gray-100">
                {contentText.productFeatures.WorldEnvironmentDay.gift2}
              </span>
            </div>
          </div>
        </div>
      ) : null}
      <div
        className={`featureList flex flex-col  ${
          darkMode ? 'bg-gray-100' : 'border-t border-neutral-20 bg-neutral-10'
        } ${isBusiness ? `lg:h-[530px] ` : `lg:h-[590px]`} pb-6 text-sm`}
      >
        <div className="flex flex-col space-y-2 pt-6">
          {contentText.productFeatures[productCardPlan][storage].map((feature, index) => (
            <div className="flex flex-row items-start space-x-2 px-6 first:font-semibold" key={feature}>
              {isBusiness ? (
                <>
                  {React.createElement(
                    index === 10
                      ? iconsFeatures[(index + 4) % iconsFeatures.length]
                      : index > 10
                      ? iconsFeatures[(index - 1) % iconsFeatures.length]
                      : iconsFeatures[index % iconsFeatures.length],
                    {
                      size: 24,
                      className: 'text-primary',
                    },
                  )}
                  <span className="text-gray-80">
                    {feature}
                    {index > 10 ? (
                      <span className="ml-2 rounded-md bg-orange-100 px-1 text-center text-orange-1">
                        {contentText.commingSoon}
                      </span>
                    ) : null}
                  </span>
                </>
              ) : (
                <>
                  {React.createElement(
                    index > 10 && storage === '3TB'
                      ? iconsFeatures[index % iconsFeatures.length]
                      : index >= 6 && storage === '1TB'
                      ? iconsFeatures[(index + 1) % iconsFeatures.length]
                      : iconsFeatures[index % iconsFeatures.length],
                    {
                      size: 24,
                      className: 'text-primary',
                    },
                  )}
                  <span className="text-gray-80">
                    {feature}
                    {index > 9 ? (
                      <span className="ml-2 rounded-md bg-orange-100 px-1 text-center text-orange-1">
                        {contentText.commingSoon}
                      </span>
                    ) : null}
                  </span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
