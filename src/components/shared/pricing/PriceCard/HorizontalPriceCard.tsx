import React from 'react';
import {
  ArrowsClockwise,
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
  VideoConference,
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
}: HorizontalPriceCardProps): JSX.Element => {
  const contentText = require(`@/assets/lang/en/priceCard.json`);

  const priceNow = decimalDiscountValue
    ? ((price * decimalDiscountValue) / 100).toFixed(2).replace('.00', '')
    : Number(price).toFixed(2).replace('.00', '');

  const percentOff = decimalDiscountValue ? 100 - decimalDiscountValue : 0;

  const cardLabel =
    {
      '5TB': contentText.productFeatures.planTypes.ultimate,
    }[storage] || null;

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

  function onCheckoutButtonClicked() {
    checkout({
      planId: planId,
      mode: 'payment',
      planType: 'individual',
      currency: currencyValue ?? 'eur',
      promoCodeId: coupon?.name ?? undefined,
    });
  }
  return (
    <div className="flex w-[320px] flex-col overflow-hidden rounded-2xl ring-1 ring-gray-10 lg:h-[328px] lg:w-[1100px] lg:flex-row lg-xl:w-[1100px] xl:w-[1200px]">
      <div className="flex w-full flex-col items-center justify-center space-y-4 bg-white p-6 pb-10 pt-10 lg:w-[455px] lg:border-r lg:border-neutral-20">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex rounded-full px-3 py-0.5">
            <p className="text-3xl font-semibold text-gray-100 lg:text-5xl">{cardLabel}</p>
          </div>
        </div>
        <p className="flex rounded-2 bg-green-100 px-1 py-0.5 text-base font-semibold text-green-0">
          {percentOff}
          {contentText.discount}
        </p>
        <div className={`flex flex-col items-center justify-center ${priceBefore ? 'space-y-1' : 'space-y-4'}`}>
          <div className="flex flex-row items-end space-x-px text-neutral-700">
            <p className="flex flex-row items-end whitespace-nowrap font-medium text-gray-100">
              <span className="text-4xl font-bold">{priceNow}</span>
              <span>{currency}</span>
            </p>
            <p className="flex flex-row items-end whitespace-nowrap pl-2 font-semibold text-gray-50 line-through">
              <span className="text-2xl font-medium">{priceBefore}</span>
              <span className="text-sm">{currency}</span>
            </p>
          </div>
        </div>
        <button
          id={`planButton${storage}`}
          onClick={() => onCheckoutButtonClicked()}
          className="mt-4 w-full rounded-lg bg-primary px-20 py-2.5 font-medium text-white hover:bg-primary-dark"
        >
          {contentText.cta.selectPlan}
        </button>
      </div>

      <div className="flex flex-col border-t border-neutral-20 bg-neutral-10 pb-6 pt-6 text-sm lg:h-[590px] lg:border-t-0">
        <div className="grid w-full grid-cols-1 gap-y-2 px-6 text-start sm:grid-cols-1 lg:h-[264px] lg:w-[830px] lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col space-y-2">
            {contentText.productFeatures.individuals[storage].slice(0, 7).map((feature: string, index: number) => {
              const Icon = iconsFeatures[index % iconsFeatures.length];
              return (
                <div className="flex flex-row items-start space-x-2" key={feature}>
                  <Icon size={24} className="text-primary" />
                  <span className={`text-lg+ text-gray-80 ${index === 0 ? 'font-semibold' : 'font-regular'}`}>
                    {feature}
                    {index > 9 && (
                      <span className="ml-2 rounded-md bg-orange-100 px-1 text-orange-1">
                        {contentText.commingSoon}
                      </span>
                    )}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col space-y-2 lg:pl-8">
            {contentText.productFeatures.individuals[storage].slice(7, 14).map((feature: string, index: number) => {
              const adjustedIndex = index + 7;
              const Icon = iconsFeatures[adjustedIndex % iconsFeatures.length];
              return (
                <div className="flex flex-row items-start space-x-2" key={feature}>
                  <Icon size={24} className="text-primary" />
                  <span className="font-regular text-lg+ text-gray-80">
                    {feature}
                    {adjustedIndex > 9 && (
                      <span className="ml-2 rounded-md bg-orange-100 px-1 text-orange-1">
                        {contentText.commingSoon}
                      </span>
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
