import {
  ArrowsClockwise,
  Broom,
  Cake,
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
  const isAnnual = interval === 'year';
  const showMonthlyLabel =
    (productCardPlan === 'business' && interval === 'month') ||
    (interval === 'year' && productCardPlan === 'individuals');

  const priceNow = decimalDiscountValue
    ? ((price * decimalDiscountValue) / 100).toFixed(2).replace('.00', '')
    : Number(price).toFixed(2).replace('.00', '');
  const priceBefore = decimalDiscountValue ? Number(price).toFixed(2).replace('.00', '') : undefined;

  const monthlyPriceNow = Number(priceNow).toFixed(2).replace('.88', '');
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
    CodeBlock,
    Code,
    Sparkle,
    Detective,
    VideoConference,
    CreditCard,
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
    CreditCard,
    Broom,
    Detective,
    VideoConference,
    Envelope,
  ];

  const newFeaturesNumber = isBusiness ? 10 : cardIndex === 1 ? 9 : 11;

  const renderFeatureIcon = (index: number) => {
    const adjustedIndex =
      !isBusiness && cardIndex === 2 && index >= 12 ? index + 1 : cardIndex === 1 && index >= 9 ? index + 2 : index;
    const Icon = isBusiness ? iconsFeaturesForBusiness[adjustedIndex] : iconsFeatures[adjustedIndex];
    return Icon ? <Icon className="h-6 w-6 text-primary" /> : null;
  };

  const formatTextWithBold = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/);

    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const boldText = part.slice(2, -2);
        return (
          <span key={index}>
            <strong>{boldText}</strong>&nbsp;
          </span>
        );
      }
      return part;
    });
  };
  return (
    <div
      className={`flex flex-col items-center justify-start rounded-16 ${
        showPromo ? (isBusiness ? 'lg:h-[1000px]' : 'lg:h-[1023px]') : isBusiness ? 'lg:h-[876px]' : 'lg:h-[825px]'
      } ${popular ? ' bg-neutral-250 shadow-xl' : ''}`}
    >
      <div className={`flex ${popular ? 'h-[61px]' : 'lg:h-[61px]'}   items-center justify-center`}>
        <p className={`${popular ? 'flex' : 'hidden'}  text-2xl font-semibold text-white`}>{contentText.mostPopular}</p>
      </div>

      <div
        className={`z-10 ${
          showPromo ? (isBusiness ? 'lg:h-[1000px] ' : 'lg:h-[922px]') : 'lg:h-[781px]'
        } rounded-16 border ${popular ? 'w-full border-[1.5px] border-blue-10' : 'border-gray-10'} `}
      >
        <div className="flex h-[243px] flex-col rounded-t-16  bg-white py-4 lg:h-[243px] lg:px-6 lg:py-8">
          <div className="flex h-full w-full flex-col items-center justify-between gap-2 ">
            <div className="flex h-[36px] items-center justify-center lg:h-[48px]">
              <p className="text-30 font-semibold lg:text-3xl">{cardLabel}</p>
            </div>
            {(percentOff ?? 0) > 0 ? (
              <div className="flex h-[57px] w-[180px] flex-col items-center justify-between lg:h-[60px] lg:w-[190px]">
                <div className="flex h-[63px] w-full flex-row items-center justify-center gap-2 lg:h-[43px] ">
                  <span className="flex h-full flex-row items-center gap-1 ">
                    <p className="self-center pb-3 text-base font-semibold text-gray-100 lg:mb-[18px]">{currency}</p>
                    <p className="ih-full text-2xl font-bold text-gray-100 lg:text-4xl">{priceNow}</p>
                    {isBusiness ? (
                      <span className="i flex h-full items-end text-base font-semibold">
                        {contentText.perUserSlash}
                      </span>
                    ) : null}
                  </span>

                  <span className="flex h-full flex-row items-center">
                    <p className=" h-[26px] items-center self-center pb-6 pr-1 text-sm font-semibold text-gray-50 lg:pt-2">
                      {currency}
                    </p>
                    <p className="pb-[1px] pr-[2px] text-lg font-normal text-gray-50 line-through lg:pt-2 lg:text-xl">
                      {priceBefore}
                    </p>
                    {isBusiness ? (
                      <span className="text-sm font-normal text-gray-50">{contentText.perUserSlash}</span>
                    ) : null}
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex h-[87px] w-[180px] flex-col items-center justify-start gap-2 lg:h-[71px] lg:w-[190px]">
                <div className="flex h-[50px] w-full flex-row items-start justify-center gap-2 lg:h-[60px] ">
                  <span className="flex h-full flex-row items-center gap-1 pr-2">
                    <p className="text-base font-semibold text-gray-100 lg:mb-[18px]">{currency}</p>
                    <p className="ih-full text-2xl font-bold text-gray-100 lg:text-4xl">
                      {isBusiness ? priceNow : isAnnual ? monthlyPriceNow : priceNow}
                    </p>
                    {isBusiness ? (
                      <span className="i flex h-full items-center pt-4 text-base font-semibold">
                        {contentText.perUserSlash}
                      </span>
                    ) : null}
                    {showMonthlyLabel && !isBusiness ? (
                      <span className="i flex h-full items-center pt-4 text-base font-semibold">
                        {contentText.perYear}
                      </span>
                    ) : null}
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
          className={`flex h-min flex-col gap-2 rounded-b-16 bg-white px-6 py-4 ${
            isBusiness ? 'h-min lg:h-[520px]' : 'h-min lg:h-[520px]'
          } lg:py-6`}
        >
          {contentText.productFeatures[productCardPlan][storage].map((feature, index) => (
            <div className="flex flex-row items-start" key={feature}>
              <div className="flex min-h-[24px] flex-row items-start gap-2 lg:items-center">
                {renderFeatureIcon(index)}
                <span className="flex flex-row pt-[2px] text-sm font-normal text-gray-80">
                  {formatTextWithBold(feature)}
                  {index > newFeaturesNumber && (
                    <p className="ml-2 flex h-min items-center rounded-2 bg-purple-1 px-2 py-0.5 text-center font-semibold text-purple-10 lg:px-1">
                      {contentText.commingSoon}
                    </p>
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
