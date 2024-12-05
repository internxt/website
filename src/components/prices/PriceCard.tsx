import { PromoCodeProps } from '@/lib/types';
import { Coins, Fire } from '@phosphor-icons/react';
import { Interval } from '../services/stripe.service';
import { LifetimeMode } from '../lifetime/PaymentSection';
import { checkout, checkoutForPcComponentes, goToSignUpURL } from '@/lib/auth';

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
}

const STORAGE_LEVELS = {
  '2TB': 'Lite ',
  '5TB': 'Pro ',
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
  onButtonClicked,
}: Readonly<PriceCardProps>): JSX.Element {
  const billingFrequencyList = {
    lifetime: 'lifetime',
    month: 'monthly',
    year: 'annually',
  };

  const contentText = require(`@/assets/lang/${lang}/priceCard.json`);

  function onCheckoutButtonClicked() {
    if (lifetimeMode === 'redeem') return onButtonClicked?.();

    if (cta[1] === 'Free plan') {
      goToSignUpURL();
    } else {
      if (isIframe) {
        checkoutForPcComponentes({
          planId: cta[1],
          mode: billingFrequency === 'lifetime' ? 'payment' : 'subscription',
          planType: 'individual',
          currency: currencyValue ?? 'eur',
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
      return STORAGE_LEVELS[storage] + storage;
    }

    return storage;
  };

  const isFreePlan = price <= 0;
  const isIndividualPlan = planType.toLowerCase() === 'individual';

  return (
    <div
      className={`${'border-primary ring-[1px]'} flex max-w-xs flex-shrink-0 flex-grow-0 flex-col overflow-hidden rounded-2xl xs:w-72`}
    >
      <div className={`info flex flex-col items-center justify-center space-y-6 rounded-t-2xl bg-white p-6 pt-6`}>
        <div className="flex flex-col items-center justify-center space-y-4">
          {popular ? (
            <div className="flex flex-row items-center justify-center space-x-2 rounded-full bg-primary px-3 py-1">
              <Fire size={28} className="text-white" />
              <p className="font-semibold text-white">{contentText.mostPopular}</p>
            </div>
          ) : null}
          <div className="flex rounded-full bg-primary/10 px-3 py-0.5">
            <p className="text-lg font-medium text-primary">{label ?? getPlanStorage(storage)}</p>
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
                {isFreePlan ? `${contentText.freePlan}` : formattedPrice}
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
            <span className="price text-2xl font-medium">{formattedPriceBefore}</span>
          </p>

          <p className={`${isIndividualPlan ? 'flex' : 'hidden'} text-sm text-gray-50`}>
            {contentText.billingFrequencyLabel[billingFrequencyList[billingFrequency as string]]}
          </p>
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
          <p className="">{lifetimeMode === 'redeem' ? contentText.cta.redeem : contentText.cta.selectPlan}</p>
        </button>
        {isOffer ? (
          <div className="flex flex-row gap-2 text-green">
            <Coins size={24} />
            <p className="font-bold">
              {contentText.save + ' '} {priceBefore && priceForSubscriptions(Number(priceBefore - price).toFixed(2))} €
            </p>
          </div>
        ) : undefined}
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
        <div className="flex flex-col space-y-2 pt-6">
          {contentText.productFeatures.individuals[storage].map((feature) => (
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
          ))}
        </div>
      </div>
    </div>
  );
}
