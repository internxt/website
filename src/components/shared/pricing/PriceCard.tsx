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
  Gauge,
  Key,
  LockSimple,
  Password,
  ShieldPlus,
  Sparkle,
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
  cardIndex?: number;
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
  const showMonthlyLabel =
    (productCardPlan === 'business' && interval === 'month') ||
    (interval === 'year' && productCardPlan === 'individuals');
  const priceNow = decimalDiscountValue
    ? ((price * decimalDiscountValue) / 100).toFixed(2).replace('.00', '')
    : Number(price).toFixed(2).replace('.00', '');
  const priceBefore = decimalDiscountValue ? Number(price).toFixed(2).replace('.00', '') : undefined;

  const monthlyPriceNow = (Number(priceNow) / 12).toFixed(2).replace('.00', '');
  const monthlyPriceBefore = decimalDiscountValue
    ? Number(price / 12)
        .toFixed(2)
        .replace('.00', '')
    : undefined;
  const percentOff = decimalDiscountValue ? 100 - decimalDiscountValue : 0;
  const ctaText = redeemCodeCta === 'redeem' ? contentText.cta.redeem : contentText.cta.selectPlan;
  const isBusiness = productCardPlan === 'business';
  const annualSave = (Number(price) - Number(priceNow)).toFixed(0);

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
    Sparkle,
    Detective,
    VideoConference,
    Envelope,
    CreditCard,
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
    CreditCard,
    Broom,
    Detective,
    VideoConference,
    Envelope,
    CreditCard,
  ];

  const newFeaturesNumber = isBusiness ? 10 : 9;

  const renderFeatureIcon = (index: number) => {
    const adjustedIndex = !isBusiness && cardIndex === 0 && index >= 6 ? index + 1 : index;
    const Icon = isBusiness ? iconsFeaturesForBusiness[adjustedIndex] : iconsFeatures[adjustedIndex];
    return Icon ? <Icon className="h-6 w-6 text-primary" /> : null;
  };

  return (
    <div
      className={`flex flex-col items-center justify-between rounded-16 ${
        showPromo ? (isBusiness ? 'lg:h-[1000px]' : 'lg:h-[983px]') : 'h-[730px]'
      } ${popular ? 'bg-blue-10 shadow-lg' : ''}`}
    >
      <div className={`flex ${popular ? 'h-[61px]' : 'lg:h-[61px]'}   items-center justify-center`}>
        <p className={`${popular ? 'flex' : 'hidden'}  text-2xl font-semibold`}>{contentText.mostPopular}</p>
      </div>

      <div
        className={`z-10 ${
          showPromo ? (isBusiness ? 'lg:h-[939px] ' : 'lg:h-[922px]') : 'lg:h-[671px]'
        } rounded-16 border ${popular ? 'border-[1.5px] border-blue-10' : 'border-gray-10'} `}
      >
        <div className="flex h-[243px] flex-col rounded-t-16  bg-white py-4 lg:h-[293px] lg:px-6 lg:py-8">
          <div className="flex h-full w-full flex-col items-center justify-between gap-2 ">
            <div className="flex h-[36px] items-center justify-center  lg:h-[48px]">
              <p className="text-30 font-semibold lg:text-3xl">{cardLabel}</p>
            </div>
            <div className="flex h-[87px] w-[180px] flex-col items-center justify-between  lg:h-[101px] lg:w-[190px]">
              <div className="flex h-[23px] items-center justify-center rounded-2 bg-green-100 px-1 py-0.5">
                <p className="text-base font-semibold text-green-0">
                  {percentOff}
                  {contentText.discount}
                  {' | '}
                  {contentText.save} {annualSave}
                  {currency}
                </p>
              </div>
              <div className="flex h-[29px] flex-row items-center justify-between gap-2 lg:h-[43px] ">
                <span className="flex h-full flex-row items-start gap-1 ">
                  <p className="text-base font-semibold text-gray-100">{currency}</p>
                  <p className="text-2xl font-bold text-gray-100 lg:text-4xl">
                    {isBusiness ? priceBefore : isAnnual ? monthlyPriceNow : priceNow}
                  </p>
                  {showMonthlyLabel ? <span className="self-end font-semibold">{contentText.perMonth}</span> : null}
                </span>
                <span className="flex h-full flex-row items-end gap-1 pb-[5px]">
                  <p className="text-md pb-[1px] font-semibold text-gray-50  lg:text-sm">{currency}</p>
                  <p className=" text-lg font-bold text-gray-50 line-through lg:text-xl">
                    {isBusiness ? priceBefore : isAnnual ? monthlyPriceBefore : isLifetime ? priceBefore : priceNow}
                  </p>
                </span>
              </div>
              <div className="flex h-[19px] items-center justify-center">
                <p className="text-base text-gray-50">
                  {contentText.billingFrequencyLabel[BILLING_FREQUENCY_LIST[interval]]}
                </p>
              </div>
            </div>
            <button
              id={`planButton${storage}`}
              onClick={() => onCheckoutButtonClicked(priceId, isCheckoutForLifetime)}
              className={`${
                popular
                  ? 'bg-primary text-white hover:bg-primary-dark'
                  : 'border-primary bg-white text-primary hover:bg-gray-1'
              } flex h-[48px] w-[270px] items-center justify-center rounded-md border-[1.5px] lg:w-[340px]`}
            >
              <p className="text-base font-medium">{ctaText}</p>
            </button>
          </div>
        </div>
        {showPromo ? (
          <div className={`flex h-[142px] flex-col items-center justify-center  ${styles.horizontalLinearGardient}`}>
            <div className="flex h-[120px] w-full flex-col justify-center gap-2 px-6 lg:w-[380px]">
              <span className="text-base font-bold text-white">{contentText.productFeatures.promoFeatures.title}</span>
              <div className="flex flex-col items-start gap-2">
                <div className="flex items-start space-x-2">
                  <TShirt size={24} className="text-primary" />
                  <span className="text-[13.5px] text-white">
                    {contentText.productFeatures.promoFeatures.features[0]}
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <Cake size={24} className="text-primary" />
                  <span className="text-[13.5px] text-white">
                    {contentText.productFeatures.promoFeatures.features[1]}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <div
          className={`flex h-min flex-col gap-2 rounded-b-16 bg-neutral-20 px-6 py-4 ${
            isBusiness ? 'lg:h-[520px]' : 'lg:h-[485px]'
          } lg:py-6`}
        >
          {contentText.productFeatures[productCardPlan][storage].map((feature, index) => (
            <div className="flex flex-row items-start" key={feature}>
              <div className="flex min-h-[24px] flex-row items-start gap-2">
                {renderFeatureIcon(index)}
                <span className="text-sm font-normal text-gray-80">
                  {feature}
                  {index > newFeaturesNumber && (
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
