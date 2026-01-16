import {
  ArrowsClockwise,
  Broom,
  CellTower,
  CirclesThreePlus,
  Code,
  CodeBlock,
  CreditCard,
  Database,
  Envelope,
  Files,
  Fingerprint,
  Gauge,
  Key,
  LockSimple,
  Password,
  Shield,
  Sparkle,
  VideoCamera,
} from '@phosphor-icons/react';
import { TransformedProduct } from '@/services/stripe.service';
import { LifetimeMode } from '@/components/lifetime/PaymentSection';
import React, { useEffect, useState } from 'react';
import { currencyService } from '@/services/currency.service';

const ICON_MAPS = {
  individuals: [Database, Key, LockSimple, Fingerprint, ArrowsClockwise, Password, Files, CellTower, Shield],
  premium: [
    Database,
    Key,
    LockSimple,
    Fingerprint,
    ArrowsClockwise,
    Password,
    CirclesThreePlus,
    Files,
    CellTower,
    Shield,
    Sparkle,
  ],
  ultimate: [
    Database,
    Key,
    LockSimple,
    Fingerprint,
    ArrowsClockwise,
    Password,
    CirclesThreePlus,
    Files,
    CodeBlock,
    Code,
    CellTower,
    Shield,
    Sparkle,
    VideoCamera,
    Envelope,
  ],
  business: [
    Database,
    Key,
    LockSimple,
    Fingerprint,
    ArrowsClockwise,
    Password,
    CirclesThreePlus,
    Gauge,
    CodeBlock,
    CreditCard,
    CellTower,
    Shield,
    Broom,
    VideoCamera,
    Files,
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
  onCheckoutButtonClicked: (planId: string, isCheckoutForLifetime: boolean, interval: string, storage: string) => void;
  isFamilyPage?: boolean;
  isAffiliate?: boolean;
  cardIndex?: number;
  showGift?: boolean;
}

export const PriceCard = ({
  product,
  decimalDiscountValue,
  isCheckoutForLifetime,
  productCardPlan = 'individuals',
  popular,
  lang,
  onCheckoutButtonClicked,
  darkMode,
}: PriceCardProps): JSX.Element => {
  const contentText = require(`@/assets/lang/${lang}/priceCard.json`);
  const { interval, price, storage, priceId } = product;
  const isBusiness = productCardPlan === 'business';
  const isAnnual = interval === 'year';
  const [currency, setCurrency] = useState<string>('€');

  useEffect(() => {
    currencyService
      .filterCurrencyByCountry()
      .then((currency) => {
        setCurrency(currency.currency);
      })
      .catch(() => {
        //
      });
  }, []);

  const hasDiscount = decimalDiscountValue && decimalDiscountValue > 0;
  const priceNumber = hasDiscount ? (Number(price) * decimalDiscountValue) / 100 : Number(price);
  const showCents = priceNumber < 1;

  const currentPrice = showCents ? priceNumber.toFixed(2) : priceNumber.toFixed(0);
  const getOriginalPrice = () => {
    if (hasDiscount === false) {
      return undefined;
    }

    if (showCents) {
      return Number(price).toFixed(2);
    }

    return Number(price).toFixed(0);
  };

  const originalPrice = getOriginalPrice();

  const planTypes = {
    '1TB': isBusiness
      ? contentText.productFeatures.planTypes.standard
      : contentText.productFeatures.planTypes.essentials,
    '2TB': contentText.productFeatures.planTypes.pro,
    '3TB': contentText.productFeatures.planTypes.premium,
    '5TB': contentText.productFeatures.planTypes.ultimate,
  };
  const planLabel = planTypes[storage] || null;

  const planGifts = {
    '1TB': isBusiness ? contentText.gifts.prices.essential : contentText.gifts.prices.essentials,
    '2TB': contentText.gifts.prices.pro,
    '3TB': contentText.gifts.prices.premium,
    '5TB': contentText.gifts.prices.ultimate,
  };
  const planGift = planGifts[storage] || null;

  const ctaText = contentText.cta;

  const features = isBusiness
    ? contentText.productFeatures.business[storage]
    : contentText.productFeatures.individualPlans[storage];

  const getIconMap = () => {
    if (isBusiness) {
      return ICON_MAPS.business;
    }
    if (storage === '3TB') {
      return ICON_MAPS.premium;
    }
    if (storage === '5TB') {
      return ICON_MAPS.ultimate;
    }
    return ICON_MAPS.individuals;
  };

  const iconMap = getIconMap();

  return (
    <div className="flex flex-col gap-5">
      <div
        className={`flex h-full flex-col items-center justify-start rounded-16 ${
          popular ? (darkMode ? 'bg-blue-55' : 'bg-neutral-250 shadow-xl') : ''
        }`}
      >
        <div className={`flex ${popular ? 'h-[61px]' : 'lg:h-[61px]'} items-center justify-center`}>
          <p className={`${popular ? 'flex' : 'hidden'} text-2xl font-semibold text-white`}>
            {contentText.mostPopular}
          </p>
        </div>

        <div
          className={`z-10 h-full w-full rounded-16 ${darkMode ? 'bg-[#1C1C1C]' : 'bg-white'} ring-[1px] ${
            popular
              ? darkMode
                ? 'ring-blue-55'
                : 'ring-gray-10 lg:px-0'
              : darkMode
              ? 'ring-gray-71'
              : 'ring-gray-10 lg:px-0'
          }`}
        >
          <div className="flex h-full flex-col rounded-16 py-4 lg:px-6 lg:py-8">
            <div className="flex h-full w-full flex-col items-center justify-start gap-8 lg:gap-4">
              <p className={`text-30 font-semibold lg:text-3xl ${darkMode ? 'text-white' : 'text-gray-100'}`}>
                {planLabel}
              </p>

              {hasDiscount ? (
                <div className="flex h-min w-[180px] flex-col items-center justify-start lg:h-min lg:w-[190px]">
                  <div className="flex h-[35px] w-full flex-row items-end justify-center gap-2 lg:h-[43px]">
                    <span className="flex h-full flex-row items-end ">
                      <p
                        className={`self-start pb-4 pr-1 text-base font-semibold lg:mb-[18px] ${
                          darkMode ? 'text-white' : 'text-gray-100'
                        }`}
                      >
                        {currency}
                      </p>
                      <p className={`text-2xl font-bold lg:text-4xl ${darkMode ? 'text-white' : 'text-gray-100'}`}>
                        {currentPrice}
                      </p>
                      {isBusiness && (
                        <span
                          className={`flex h-full items-end pl-1 text-base font-semibold ${
                            darkMode ? 'text-white' : 'text-gray-100'
                          }`}
                        >
                          {contentText.perUserSlash}
                        </span>
                      )}
                      {isAnnual && (
                        <span
                          className={`flex h-full items-end text-base font-semibold ${
                            darkMode ? 'text-white' : 'text-gray-100'
                          }`}
                        >
                          {contentText.perYear}
                        </span>
                      )}
                    </span>

                    <span className="flex h-full flex-row items-end">
                      <p
                        className={`items-center self-start pr-1 pt-[6px] text-sm font-semibold lg:pt-3 ${
                          darkMode ? 'text-gray-50' : 'text-gray-50'
                        }`}
                      >
                        {currency}
                      </p>
                      <p
                        className={`text-lg font-normal line-through lg:pt-0 lg:text-xl ${
                          darkMode ? 'text-gray-50' : 'text-gray-50'
                        }`}
                      >
                        {originalPrice}
                      </p>
                      {isBusiness && (
                        <span className={`text-sm font-normal ${darkMode ? 'text-gray-50' : 'text-gray-50'}`}>
                          {contentText.perUserSlash}
                        </span>
                      )}
                      {isAnnual && (
                        <span className={`text-sm font-normal ${darkMode ? 'text-gray-50' : 'text-gray-50'}`}>
                          {contentText.perYear}
                        </span>
                      )}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="flex h-[87px] w-[180px] flex-col items-center justify-start gap-2 lg:h-[71px] lg:w-[190px]">
                  <div className="flex h-[50px] w-full flex-row items-start justify-center gap-2 lg:h-[60px]">
                    <span className="flex h-full flex-row items-center gap-1 pr-2">
                      <p
                        className={`text-base font-semibold lg:mb-[18px] ${darkMode ? 'text-white' : 'text-gray-100'}`}
                      >
                        {currency}
                      </p>
                      <p className={`text-2xl font-bold lg:text-4xl ${darkMode ? 'text-white' : 'text-gray-100'}`}>
                        {currentPrice}
                      </p>
                      {isBusiness && (
                        <span
                          className={`flex h-full items-center pt-4 text-base font-semibold ${
                            darkMode ? 'text-white' : 'text-gray-100'
                          }`}
                        >
                          {contentText.perUserSlash}
                        </span>
                      )}
                      {isAnnual && !isBusiness && (
                        <span
                          className={`flex h-full items-center pt-4 text-base font-semibold ${
                            darkMode ? 'text-white' : 'text-gray-100'
                          }`}
                        >
                          {contentText.perYear}
                        </span>
                      )}
                    </span>
                  </div>
                </div>
              )}

              <button
                id={`planButton${storage}`}
                onClick={() => onCheckoutButtonClicked(priceId, isCheckoutForLifetime, interval, storage)}
                className={`${
                  popular
                    ? darkMode
                      ? 'border-blue-55  bg-blue-55 text-white hover:bg-primary-dark'
                      : 'bg-primary text-white hover:bg-primary-dark'
                    : darkMode
                    ? 'border-blue-55  bg-transparent text-primary hover:bg-gray-90'
                    : darkMode
                    ? 'border-blue-55  bg-transparent text-white hover:bg-gray-90'
                    : 'border-primary bg-transparent text-primary hover:bg-gray-1'
                } flex h-[48px] w-[270px] items-center justify-center rounded-md border-[1.5px] text-base lg:w-[290px]`}
              >
                <p className={`text-base font-medium`}>{ctaText}</p>
              </button>

              <div className="flex w-full flex-col justify-start gap-4 pt-4">
                {features?.map((feature, index) => {
                  const Icon = iconMap[index];
                  const isComingSoon = feature.status === 'Coming soon';

                  const formattedName = feature.name.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

                  return (
                    <>
                      <div key={index} className="flex items-start gap-3 px-4 lg:px-0">
                        {Icon && (
                          <Icon size={24} className={`shrink-0 ${darkMode ? 'text-primary' : 'text-primary'}`} />
                        )}
                        <div className="flex flex-row items-center gap-2">
                          <p
                            className={`text-base ${darkMode ? 'text-white' : 'text-gray-80'}`}
                            dangerouslySetInnerHTML={{ __html: formattedName }}
                          />
                          {isComingSoon && (
                            <span
                              className={`rounded-2 bg-purple-1 px-1 py-0.5 text-base font-semibold text-purple-10`}
                            >
                              {contentText.productFeatures.comingSoonLabel}
                            </span>
                          )}
                        </div>
                      </div>
                      {index === 0 && <div className={`h-[1px] w-full ${darkMode ? 'bg-gray-71' : 'bg-neutral-25'}`} />}
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isAnnual && (
        <p className="text-xs font-normal italic text-gray-35">
          {contentText.renewsInfo.replace('{{price}}', currency + originalPrice)}
        </p>
      )}
    </div>
  );
};
