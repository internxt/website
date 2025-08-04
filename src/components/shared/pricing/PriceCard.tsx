import {
  ArrowsClockwise,
  Broom,
  Cake,
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
  TShirt,
  VideoConference,
} from '@phosphor-icons/react';
import { TransformedProduct } from '@/services/stripe.service';
import { LifetimeMode } from '@/components/lifetime/PaymentSection';
import styles from '@/components/privacy/HeroSection.module.scss';
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
}: PriceCardProps): JSX.Element => {
  const contentText = require(`@/assets/lang/${lang}/priceCard.json`);
  const { currency, interval, price, storage, priceId } = product;

  const isLifetime = interval === 'lifetime';
  const isAnnual = interval === 'year';

  const showMonthlyLabel =
    (productCardPlan === 'business' && interval === 'month') ||
    (interval === 'year' && productCardPlan === 'individuals');

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
  const isBusiness = productCardPlan === 'business';
  const backgroundClass = darkMode ? 'bg-primary' : labelBackground;
  const textColorClass = darkMode ? 'text-white' : `text-${colorCard}`;
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

  const renderFeatureIcon = (index: number, fill: boolean) => {
    const Icon = iconsFeatures[index];
    return Icon ? <Icon className="h-6 w-6 text-primary" {...(fill ? { weight: 'fill' } : {})} /> : null;
  };

  return (
    <div
      className={`flex ${showPromo ? 'h-[983px]' : 'h-[841px]'} flex-col items-end ${
        popular ? 'bg-blue-10 shadow-lg' : ''
      } items-center justify-between rounded-16`}
    >
      <div className={'flex h-[61px] items-center justify-center'}>
        <p className={`${popular ? 'flex' : 'hidden'}  text-2xl font-semibold`}>{contentText.mostPopular}</p>
      </div>

      <div className={`z-10 ${showPromo ? 'h-[922px]' : 'h-[780px]'} w-[380px] rounded-16 border border-gray-10`}>
        <div className="flex h-[293px] flex-col rounded-t-16 bg-white px-6 py-8">
          <div className="flex h-full w-full flex-col items-center justify-between">
            <div className="flex h-[48px] items-center justify-center">
              <p className="text-3xl font-semibold">
                {cardLabel} {product.storage}
              </p>
            </div>
            <div className="flex h-[101px] w-[145px] flex-col items-center justify-between">
              <div className="flex h-[23px] w-[64px] items-center justify-center rounded-2 bg-green-100 px-1 py-0.5">
                <p className="text-base font-semibold text-green-0">
                  {percentOff}
                  {contentText.discount}
                </p>
              </div>
              <div className="flex h-[43px] w-[145px] flex-row items-baseline justify-evenly">
                <span className="flex flex-row items-baseline gap-1">
                  <p className="text-4xl font-bold text-gray-100">{priceNow}</p>
                  <p className="text-base font-semibold text-gray-100">{currency}</p>
                </span>
                <span className="flex flex-row items-baseline gap-1">
                  <p className="text-xl font-bold text-gray-50 line-through">{priceBefore}</p>
                  <p className="text-sm font-semibold text-gray-50">{currency}</p>
                </span>
              </div>
              <div className="flex h-[19px] w-full items-center justify-center">
                <p className="text-base text-gray-50">
                  {contentText.billingFrequencyLabel[BILLING_FREQUENCY_LIST[interval]]}
                </p>
              </div>
            </div>
            <div
              id={`planButton${storage}`}
              onClick={() => onCheckoutButtonClicked(priceId, isCheckoutForLifetime)}
              className={`${
                popular
                  ? 'bg-primary text-white hover:bg-primary-dark'
                  : 'border-primary bg-white text-primary hover:bg-gray-1'
              } flex h-[48px] w-[340px] items-center justify-center rounded-md border-[1.5px] `}
            >
              <p className="text-base font-medium">{ctaText}</p>
            </div>
          </div>
        </div>
        {showPromo ? (
          <div className={`flex h-[142px] flex-col items-center justify-center  ${styles.horizontalLinearGardient}`}>
            <div className="flex h-[94px] w-[355px] flex-col gap-4 ">
              <span className="text-[13.5px] font-bold text-white">
                {contentText.productFeatures.promoFeatures.title}
              </span>
              <div className="flex flex-col items-start gap-2">
                <div className="flex items-center space-x-2">
                  <TShirt size={24} className="text-primary" />
                  <span className="text-[13.5px] text-white">
                    {contentText.productFeatures.promoFeatures.features[0]}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Cake size={24} className="text-primary" />
                  <span className="text-[13.5px] text-white">
                    {contentText.productFeatures.promoFeatures.features[1]}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <div className="flex h-[485px] flex-col gap-2 rounded-b-16 bg-neutral-20 px-6 py-6">
          {contentText.productFeatures[productCardPlan][storage].map((feature, index) => (
            <div className="flex flex-row items-start" key={feature}>
              <div className="flex h-[24px] flex-row items-center gap-2">
                {renderFeatureIcon(index, index > 9)}
                <span className="text-sm font-normal text-gray-80">
                  {feature}
                  {index > 9 && (
                    <span className="ml-2 rounded-md bg-orange-100 px-1 text-center text-orange-1">
                      {contentText.commingSoon}
                    </span>
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
