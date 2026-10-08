/* eslint-disable @typescript-eslint/no-explicit-any */
import { Transition } from '@headlessui/react';

import { Interval, ProductsDataProps } from '@/services/stripe.service';
import { PlanSelector, SwitchButtonOptions } from './components/PlanSelector';
import CardSkeleton from '@/components/components/CardSkeleton';
import FreePlanCard from '@/components/prices/FreePlanCard';
import { PriceCard } from './PriceCard';
import { HandCoins, Headset, Keyhole } from '@phosphor-icons/react';
import { PromoCodeProps } from '@/lib/types';

interface PriceTableProps {
  textContent: Record<string, any>;
  products: ProductsDataProps | undefined;
  loadingCards: boolean;
  billingFrequency: Interval;
  activeSwitchPlan: SwitchButtonOptions;
  lang: string;
  popularPlanBySize?: string;
  hidePlanSelectorComponent?: boolean;
  hideFreeCard?: boolean;
  isFamilyPage?: boolean;
  hidePlanSelectorAndSwitch?: boolean;
  lifetimeCoupons?: Record<string, PromoCodeProps>;
  isMonthly?: boolean;
  darkMode?: boolean;
  hideFeatures?: boolean;
  showPromo?: boolean;
  decimalDiscount?: {
    subscriptions?: number;
    lifetime?: number;
  };
  isAnnual?: boolean;
  isAffiliate?: boolean;
  onPlanTypeChange: (activeSwitchPlan: SwitchButtonOptions, interval: Interval) => void;
  onCheckoutButtonClicked: (planId: string, isCheckoutForLifetime: boolean, interval: string, storage: string) => void;
  differentRecommended?: boolean;
  isValentinesMode?: boolean;
  onlyUltimatePlan?: boolean;
  premiumAndUltimatePlan?: boolean;
  freePlanNeedsH2?: boolean;
}

export const PricingSection = ({
  textContent,
  products,
  loadingCards,
  activeSwitchPlan,
  billingFrequency,
  decimalDiscount,
  hideFreeCard,
  hidePlanSelectorAndSwitch,
  hidePlanSelectorComponent,
  lang,
  popularPlanBySize = '2TB',
  isFamilyPage,
  onPlanTypeChange,
  onCheckoutButtonClicked,
  darkMode,
  differentRecommended = true,
  hideFeatures,
  showPromo,
  isAffiliate,
  isValentinesMode = false,
  onlyUltimatePlan = false,
  premiumAndUltimatePlan = false,
  freePlanNeedsH2 = false,
}: PriceTableProps): JSX.Element => {
  const showLoadingCards = loadingCards;
  const showIndividualCards = !loadingCards;

  const popularPlan = differentRecommended
    ? popularPlanBySize
    : billingFrequency === Interval.Lifetime
    ? popularPlanBySize
    : '2TB';

  const features = [
    {
      icon: Headset,
      text: textContent.features.premiumSupport,
    },
    {
      icon: HandCoins,
      text: textContent.features.guarantee,
    },
    {
      icon: Keyhole,
      text: textContent.features.openSource,
    },
  ];

  return (
    <>
      <div className={`${hidePlanSelectorAndSwitch ? 'hidden' : 'flex'} flex-col items-center space-y-9 `}>
        {!hidePlanSelectorComponent && (
          <PlanSelector
            textContent={textContent}
            activeSwitchPlan={activeSwitchPlan}
            onPlanTypeChange={onPlanTypeChange}
            isMonthly
            darkMode={darkMode}
          />
        )}
      </div>
      <Transition
        show={showLoadingCards}
        enter="transition duration-500 ease-out"
        enterFrom="scale-95 translate-y-20 opacity-0"
        enterTo="scale-100 translate-y-0 opacity-100"
      >
        <div className="flex flex-row flex-wrap items-end justify-center justify-items-center p-6 py-14">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <CardSkeleton key={i} />
            ))}
        </div>
      </Transition>

      <Transition
        as="div"
        show={showIndividualCards}
        enter="transition duration-500 ease-out"
        enterFrom="scale-95 translate-y-20 opacity-0"
        enterTo="scale-100 translate-y-0 opacity-100"
        className="flex flex-col gap-4"
      >
        <div className="content flex w-full flex-nowrap items-stretch justify-start gap-6 overflow-x-auto px-2 pb-8 md:justify-center">
          {products?.individuals
            ? products.individuals[billingFrequency]
                .filter((product) => {
                  if (premiumAndUltimatePlan) {
                    return product.storage === '5TB' || product.storage === '2TB';
                  }
                  if (onlyUltimatePlan) {
                    return product.storage === '5TB';
                  }
                  return true;
                })
                .map((product, cardIndex) => (
                  <PriceCard
                    isCheckoutForLifetime={billingFrequency === Interval.Lifetime}
                    product={product}
                    onCheckoutButtonClicked={onCheckoutButtonClicked}
                    label={product.storage}
                    key={product.storage}
                    popular={product.storage === popularPlan}
                    decimalDiscountValue={
                      product.interval === Interval.Lifetime
                        ? decimalDiscount?.lifetime
                        : decimalDiscount?.subscriptions
                    }
                    lang={lang}
                    darkMode={darkMode}
                    isAffiliate={isAffiliate}
                    cardIndex={cardIndex}
                    showGift={showPromo}
                    isValentinesMode={isValentinesMode}
                  />
                ))
            : undefined}
        </div>
      </Transition>

      {!hideFeatures && (
        <div className="w-full lg:px-10 xl:px-32 3xl:px-80">
          <div className="flex flex-col items-center justify-between text-center md:flex-row md:items-start md:space-x-16 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.text} className="flex flex-col items-start gap-3 md:max-w-[33%] md:flex-row">
                <feature.icon size={36} className="!h-[36px] !w-[36px] shrink-0 text-primary md:pb-0" />
                <p className={`pt-[6px] text-xl font-medium ${darkMode ? 'text-white' : 'text-gray-80'}`}>
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {!hideFreeCard && <FreePlanCard textContent={textContent.freePlanCard} freePlanNeedsH2={freePlanNeedsH2} />}
    </>
  );
};
