import { PromoCodeProps } from '@/lib/types';
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
import { Interval } from '@/services/stripe.service';
import { LifetimeMode } from '../lifetime/PaymentSection';
import { checkout, checkoutForPcComponentes, goToSignUpURL } from '@/lib/auth';
import React from 'react';
import styles from '@/components/black-friday/BF-HeroSection.module.scss';

export interface PriceCardProps {
  planType: string;
  storage: string;
  price: number;
  priceBefore?: number;
  billingFrequency?: Interval;
  cta: any[];
  popular?: boolean;
  lang: string;
  coupon?: PromoCodeProps;
  currency?: string;
  currencyValue?: string;
  isIframe?: boolean;
  isOffer?: boolean;
  isLifetimePage?: boolean;
  lifetimeMode?: LifetimeMode;
  onButtonClicked?: () => void;
  label?: string;
  percentOff?: number;
  isStackCommerce?: boolean;
  index?: number;
  isPcComponentes?: boolean;
  isPcComponentesLifetime?: boolean;
  isPcComponentes5tb?: boolean;
  trialToken?: string;
  showOffer?: boolean;
}

const STORAGE_LEVELS = {
  '1TB': 'Essential ',
  '3TB': 'Premium ',
  '2TB': 'Lite ',
  '5TB': 'Ultimate ',
  '10TB': 'Ultra ',
};

export default function PriceCard({
  planType,
  storage,
  price,
  priceBefore,
  billingFrequency,
  cta,
  popular,
  lang,
  coupon,
  currency,
  currencyValue,
  isIframe,
  isOffer,
  isLifetimePage,
  lifetimeMode,
  label,
  percentOff = 0,
  onButtonClicked,
  isStackCommerce = false,
  index,
  isPcComponentes = false,
  isPcComponentes5tb = false,
  isPcComponentesLifetime = false,
  trialToken,
  showOffer = true,
}: Readonly<PriceCardProps>): JSX.Element {
  const billingFrequencyList = {
    lifetime: 'lifetime',
    month: 'monthly',
    year: 'annually',
  };

  const contentText = require(`@/assets/lang/${lang}/priceCard.json`);

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

  function onCheckoutButtonClicked(priceId) {
    if (lifetimeMode === 'redeem') return onButtonClicked?.();

    if (cta[1] === 'Free plan') {
      goToSignUpURL();
    } else {
      if (isIframe) {
        checkoutForPcComponentes({
          planId: priceId,
          mode: billingFrequency === 'lifetime' ? 'payment' : 'subscription',
          planType: 'individual',
          currency: currencyValue ?? 'eur',
          trialToken: trialToken,
          promoCodeId: (coupon as any)?.promoCodeName ?? undefined,
        });
      } else {
        checkout({
          planId: cta[1],
          mode: billingFrequency === 'lifetime' ? 'payment' : 'subscription',
          planType: 'individual',
          currency: currencyValue ?? 'eur',
          promoCodeId: (coupon as any)?.promoCodeName ?? undefined,
        });
      }
    }
  }

  const priceForSubscriptions = (price: string) => {
    if (price.split('.')[1].includes('00')) {
      return price.split('.')[0];
    }

    return price;
  };

  const formattedPrice = isOffer ? priceForSubscriptions(price.toString()) : price;
  const formattedPriceBefore = priceBefore;

  const getPlanStorage = (storage) => {
    if (isLifetimePage) {
      return STORAGE_LEVELS[storage];
    }

    return storage;
  };

  const isFreePlan = price <= 0;
  const isIndividualPlan = planType.toLowerCase() === 'individual';

  const STACKCOMMERCE_STORAGE_PLANS = {
    '2TB': {
      title: '2TB',
      price: '€900',
      features: [
        '2TB encrypted storage',
        'Zero-knowledge encryption',
        'Password-protected file sharing',
        'Post-quantum cryptography',
        'Access your files from any device',
        'Guaranteed GDPR compliance',
        'Two-factor authentication (2FA)',
        'Premium customer support',
        '30-day money-back guarantee',
      ],
    },
    '5TB': {
      title: '5TB',
      price: '€1900',
      features: [
        '5TB encrypted storage',
        'Zero-knowledge encryption',
        'Password-protected file sharing',
        'Post-quantum cryptography',
        'Access your files from any device',
        'Guaranteed GDPR compliance',
        'Two-factor authentication (2FA)',
        'Premium customer support',
        '30-day money-back guarantee',
      ],
    },
    '10TB': {
      title: '10TB',
      price: '€2900',
      features: [
        '10TB encrypted storage',
        'Zero-knowledge encryption',
        'Password-protected file sharing',
        'Post-quantum cryptography',
        'Access your files from any device',
        'Guaranteed GDPR compliance',
        'Two-factor authentication (2FA)',
        'Premium customer support',
        '30-day money-back guarantee',
      ],
    },
    '20TB': {
      title: '20TB',
      price: '€4900',
      features: [
        '20TB encrypted storage',
        'Zero-knowledge encryption',
        'Password-protected file sharing',
        'Post-quantum cryptography',
        'Access your files from any device',
        'Guaranteed GDPR compliance',
        'Two-factor authentication (2FA)',
        'Premium customer support',
        '30-day money-back guarantee',
      ],
    },
  };

  const PCCOMPONENTES_STORAGE_PLANS = {
    Lifetime: {
      '2TB': {
        title: '2TB',
        price: '900',
        priceId: 'price_1PNxYtFAOdcgaBMQzkimr6OU',
        features: [
          '2TB encrypted storage',
          'Zero-knowledge encryption',
          'Password-protected file sharing',
          'Post-quantum cryptography',
          'Access your files from any device',
          'Guaranteed GDPR compliance',
          'Two-factor authentication (2FA)',
          'Premium customer support',
          '30-day money-back guarantee',
        ],
      },
      '5TB': {
        title: '5TB',
        price: '1900',
        priceId: 'price_1PNxZkFAOdcgaBMQi0UCtXBj',
        features: [
          '5TB encrypted storage',
          'Zero-knowledge encryption',
          'Password-protected file sharing',
          'Post-quantum cryptography',
          'Access your files from any device',
          'Guaranteed GDPR compliance',
          'Two-factor authentication (2FA)',
          'Premium customer support',
          '30-day money-back guarantee',
        ],
      },
      '10TB': {
        title: '10TB',
        price: '2900',
        priceId: 'price_1PNxaDFAOdcgaBMQnKXWQRs0',
        features: [
          '0TB encrypted storage',
          'Zero-knowledge encryption',
          'Password-protected file sharing',
          'Post-quantum cryptography',
          'Access your files from any device',
          'Guaranteed GDPR compliance',
          'Two-factor authentication (2FA)',
          'Premium customer support',
          '30-day money-back guarantee',
        ],
      },
    },
    Subscription: {
      '200GB': {
        title: '200GB',
        price: '45.99',
        priceId: 'price_1OQ3LKFAOdcgaBMQMK2UHHRM',
        features: [
          '200GB encrypted storage',
          'Zero-knowledge encryption',
          'Password-protected file sharing',
          'Post-quantum cryptography',
          'Access your files from any device',
          'Guaranteed GDPR compliance',
          'Two-factor authentication (2FA)',
          'Premium customer support',
          '30-day money-back guarantee',
        ],
      },
      '2TB': {
        title: '2TB',
        price: '109.99',
        priceId: 'price_1OQ3JbFAOdcgaBMQsawuy1PI',
        features: [
          '2TB encrypted storage',
          'Zero-knowledge encryption',
          'Password-protected file sharing',
          'Post-quantum cryptography',
          'Access your files from any device',
          'Guaranteed GDPR compliance',
          'Two-factor authentication (2FA)',
          'Premium customer support',
          '30-day money-back guarantee',
        ],
      },
      '5TB': {
        title: '5TB',
        price: isPcComponentes5tb ? '50' : '199.99',
        priceId: 'price_1OQ3H5FAOdcgaBMQwMJ734rd',
        features: [
          '5TB encrypted storage',
          'Zero-knowledge encryption',
          'Password-protected file sharing',
          'Post-quantum cryptography',
          'Access your files from any device',
          'Guaranteed GDPR compliance',
          'Two-factor authentication (2FA)',
          'Premium customer support',
          '30-day money-back guarantee',
        ],
      },
      '10TB': {
        title: '10TB',
        price: '299.99',
        priceId: 'price_1OQ3CtFAOdcgaBMQFq2xX79Q',
        features: [
          '10TB encrypted storage',
          'Zero-knowledge encryption',
          'Password-protected file sharing',
          'Post-quantum cryptography',
          'Access your files from any device',
          'Guaranteed GDPR compliance',
          'Two-factor authentication (2FA)',
          'Premium customer support',
          '30-day money-back guarantee',
        ],
      },
    },
  };

  const storageSelected = index === 0 ? '2TB' : index === 1 ? '5TB' : '10TB';
  const storageSelectedStackCommerce = index === 0 ? '2TB' : index === 1 ? '5TB' : index === 2 ? '10TB' : '20TB';
  const planTypePcComponentes = isLifetimePage ? 'Lifetime' : 'Subscription';
  const storageSelectedPcComponentes = index === 0 ? '200GB' : index === 1 ? '2TB' : index === 2 ? '5TB' : '10TB';
  const selectStorage = !isLifetimePage ? storageSelectedPcComponentes : storageSelected;

  const discountPCComponentes = (
    parseFloat(PCCOMPONENTES_STORAGE_PLANS[planTypePcComponentes][selectStorage].price) * 0.25
  )
    .toFixed(2)
    .replace(/\.00$/, '');

  return (
    <div
      className={`${popular ? 'border-primary ring-[3px]' : 'ring-1 ring-gray-10'} flex ${
        isStackCommerce ? 'w-[280px]' : 'w-[340px]'
      } flex-shrink-0 flex-grow-0 flex-col overflow-hidden rounded-2xl`}
    >
      <div
        className={`info flex max-h-[340px] flex-col items-center justify-center space-y-6 rounded-t-2xl bg-white p-6 pt-6`}
      >
        <div className="flex flex-col items-center justify-center space-y-4">
          <div
            className={`flex flex-row items-center justify-center space-x-2 rounded-full bg-primary px-3 py-1 ${
              !popular ? 'invisible' : ''
            }`}
          >
            <Fire size={28} className="text-white" />
            <p className="font-semibold text-white">{contentText.mostPopular}</p>
          </div>
          <div className="flex rounded-full bg-primary/10 px-3 py-0.5">
            <p className="text-lg font-medium text-primary">
              {isStackCommerce
                ? STACKCOMMERCE_STORAGE_PLANS[storageSelectedStackCommerce].title
                : isPcComponentes
                ? PCCOMPONENTES_STORAGE_PLANS[planTypePcComponentes][selectStorage].title
                : getPlanStorage(storage)}
            </p>
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
            <p className={` flex flex-row items-start space-x-1 whitespace-nowrap font-medium text-gray-100`}>
              <span className={`currency ${isFreePlan ? 'hidden' : ''}`}>{currency}</span>
              <span className="price text-4xl font-bold">
                {isFreePlan ? `${contentText.freePlan}` : isPcComponentes ? discountPCComponentes : formattedPrice}
              </span>
            </p>
          </div>
          <span className={`perUser ${isIndividualPlan ? 'hidden' : ''} text-sm font-medium text-gray-50`}>
            {contentText.perUser}
          </span>
          <p
            className={`${
              priceBefore ? 'flex' : 'hidden'
            } flex-row items-start space-x-1 whitespace-nowrap font-semibold text-gray-50 line-through`}
          >
            <span className={`text-sm`}>{currency}</span>
            <span className="price text-2xl font-medium">
              {isPcComponentes
                ? PCCOMPONENTES_STORAGE_PLANS[planTypePcComponentes][selectStorage].price
                : formattedPriceBefore}
            </span>
          </p>

          <p className={`${isIndividualPlan ? 'flex' : 'hidden'} text-sm text-gray-50`}>
            {contentText.billingFrequencyLabel[billingFrequencyList[billingFrequency as string]]}
          </p>

          {percentOff > 0 && (
            <p className="flex bg-green-1/10 px-1 py-0.5 text-sm text-green-dark">
              {percentOff}
              {contentText.discount}
            </p>
          )}
        </div>
        <button
          id={`planButton${storage}`}
          onClick={() =>
            onCheckoutButtonClicked(PCCOMPONENTES_STORAGE_PLANS[planTypePcComponentes][selectStorage].priceId)
          }
          className={`flex w-full flex-col items-center rounded-lg border ${
            popular
              ? 'border-primary bg-primary text-white hover:bg-primary-dark'
              : 'border-primary text-primary hover:bg-gray-1 active:bg-gray-5'
          } whitespace-nowrap px-20 py-2.5 font-medium`}
        >
          <p className="">{lifetimeMode === 'redeem' ? contentText.cta.redeem : contentText.cta.selectPlan}</p>
        </button>
      </div>

      <div className="featureList flex flex-col border-t border-neutral-20 bg-neutral-10 pb-6 text-sm text-gray-80">
        {isOffer ? (
          <>
            <div className="flex w-full flex-col space-y-4 bg-green-dark p-6">
              <p className={`text-center text-white`}>
                {contentText.productFeatures.cheaperThan[billingFrequency as string].normal}{' '}
                <span className="font-bold">
                  {contentText.productFeatures.cheaperThan[billingFrequency as string].bold}
                </span>
                {contentText.productFeatures.cheaperThan[billingFrequency as string].normal2}
              </p>
              {/* {contentText.productFeatures.starWarsFeatures[storage].map((feature) => (
              <div
                className={`${
                  popular && billingFrequency !== 'lifetime' ? 'last:hidden' : ''
                } flex flex-row items-start space-x-2 first:whitespace-nowrap`}
                key={feature}
              >
                <Star size={16} weight="fill" className="text-yellow" />
                <span className="text-white">{feature}</span>
              </div>
            ))} */}
            </div>
          </>
        ) : null}

        <div className="flex max-h-[410px] min-h-[200px] flex-col space-y-2 pt-6">
          {isStackCommerce ? (
            STACKCOMMERCE_STORAGE_PLANS[storageSelectedStackCommerce].features.map((feature) => (
              <div className="flex flex-row items-start space-x-2 px-6 last:font-semibold" key={feature}>
                <img
                  loading="lazy"
                  className="translate-y-px select-none"
                  src="/icons/checkPrimary.svg"
                  draggable="false"
                  alt="check icon"
                />
                <span className="text-gray-80">{feature}</span>
              </div>
            ))
          ) : isPcComponentes ? (
            PCCOMPONENTES_STORAGE_PLANS[planTypePcComponentes][selectStorage]?.features.map((feature) => (
              <div className="flex flex-row items-start space-x-2 px-6 last:font-semibold" key={feature}>
                <img
                  loading="lazy"
                  className="translate-y-px select-none"
                  src="/icons/checkPrimary.svg"
                  draggable="false"
                  alt="check icon"
                />
                <span className="text-gray-80">{feature}</span>
              </div>
            ))
          ) : (
            <div className="flex max-h-[500px] min-h-[500px] flex-col space-y-2 pt-6">
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
          )}
        </div>
      </div>
    </div>
  );
}
