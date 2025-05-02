import { checkout } from '@/lib/auth';
import { PromoCodeProps } from '@/lib/types';
import styles from '@/components/black-friday/BF-HeroSection.module.scss';
import {
  ArrowsClockwise,
  CodeBlock,
  Database,
  Envelope,
  Fingerprint,
  Fire,
  Gauge,
  Gift,
  Key,
  LockSimple,
  Password,
  ShieldPlus,
  VideoConference,
} from '@phosphor-icons/react';
import React from 'react';

interface PriceCardsForAffiliatesPartnersProps {
  storage: string;
  popular: boolean;
  currency: string;
  priceBefore: string;
  price: number;
  planId: string;
  currencyValue: string;
  coupon: PromoCodeProps | undefined;
}

export const PriceCardsForAffiliatesPartners = ({
  storage,
  popular,
  currency,
  priceBefore,
  price,
  planId,
  currencyValue,
  coupon,
}: PriceCardsForAffiliatesPartnersProps) => {
  const contentText = require(`@/assets/lang/en/priceCard.json`);

  function onCheckoutButtonClicked() {
    checkout({
      planId: planId,
      mode: 'payment',
      planType: 'individual',
      currency: currencyValue ?? 'eur',
      promoCodeId: coupon?.name ?? undefined,
    });
  }

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

  const planTypes = {
    '1TB': contentText.productFeatures.planTypes.essentials,
    '2TB': contentText.productFeatures.planTypes.pro,
    '3TB': contentText.productFeatures.planTypes.premium,
    '5TB': contentText.productFeatures.planTypes.ultimate,
  };
  const cardLabel = planTypes[storage] || null;

  return (
    <div
      className={`${
        popular ? 'border-primary/50 ring-[3px]' : 'ring-1 ring-gray-10'
      } m-2 flex w-full max-w-[480px] flex-shrink-0 flex-col overflow-hidden rounded-2xl lg:w-screen`}
    >
      <div className={`flex w-full flex-col items-center justify-center space-y-6 rounded-t-2xl bg-white p-6 pt-6`}>
        <div className="flex flex-col items-center justify-center space-y-4">
          {popular ? (
            <div className="flex flex-row items-center justify-center space-x-2 rounded-full bg-primary px-3 py-1">
              <Fire size={28} className="text-white" />
              <p className="font-semibold text-white">{contentText.mostPopular}</p>
            </div>
          ) : null}
          <div className="flex rounded-full bg-primary/10 px-3 py-0.5">
            <p className="text-lg font-medium text-primary">{cardLabel}</p>
          </div>
        </div>
        <div
          className={`planPrice flex flex-col items-center justify-center ${priceBefore ? 'space-y-1' : 'space-y-4'}`}
        >
          <div
            className={`flex
              flex-row items-end gap-2 text-neutral-700
            `}
          >
            <p className={` flex flex-row items-start space-x-1 whitespace-nowrap font-medium text-gray-100`}>
              <span className={`currency`}>{currency}</span>
              <span className="price text-4xl font-bold">{price}</span>
            </p>
            <p className="price text-4xl text-gray-30">/</p>
            <p
              className={`${
                priceBefore ? 'flex' : 'hidden'
              } flex-row items-start space-x-1 whitespace-nowrap font-semibold text-gray-50`}
            >
              <span className={`text-sm`}>{currency}</span>
              <span className="price text-4xl font-bold line-through">{priceBefore}</span>
            </p>
          </div>

          <p className={`flex text-sm text-gray-50`}>{contentText.billingFrequencyLabel['lifetime']}</p>
        </div>
        <button
          id={`planButton${storage}`}
          onClick={onCheckoutButtonClicked}
          className={`flex w-full flex-col items-center rounded-lg border ${
            popular
              ? 'border-primary bg-primary text-white hover:bg-primary-dark'
              : 'border-primary text-primary hover:bg-gray-1 active:bg-gray-5'
          } whitespace-nowrap px-20 py-2.5 font-medium`}
        >
          <p className="">{contentText.cta.selectPlan}</p>
        </button>
      </div>
      <div className={`flex flex-col items-start space-y-2 bg-gray-100  px-5 py-5`}>
        <span className="text-[13.5px] font-bold text-white">{contentText.productFeatures.starWarsDay.title}</span>
        <div className="flex flex-col items-start space-y-2">
          <div className="flex items-center space-x-2">
            <Gift className="h-6 w-6 text-green-1" weight="fill" />
            <span className="text-[13.5px] text-white">{contentText.productFeatures.starWarsDay.gift1}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Gift className="h-6 w-6 text-green-1" weight="fill" />
            <span className="text-[13.5px] text-white">{contentText.productFeatures.starWarsDay.gift2}</span>
          </div>
        </div>
      </div>
      <div className="featureList flex flex-col border-t border-neutral-20 bg-neutral-10 pb-6 text-sm text-gray-80">
        <div className="flex flex-col space-y-2 pt-6">
          {contentText.productFeatures.individuals[storage].map((feature, index) => (
            <div className="flex flex-row items-start space-x-2 px-6 first:font-semibold" key={feature}>
              {React.createElement(iconsFeatures[index % iconsFeatures.length], {
                size: 24,
                className: 'text-primary',
              })}
              <span className="text-gray-80">{feature}</span>
              {index > 8 ? (
                <span className="rounded-lg bg-orange/10 px-1 text-orange">{contentText.commingSoon}</span>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
