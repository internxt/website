/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { Transition } from '@headlessui/react';

import { Interval, ProductsDataProps } from '@/services/stripe.service';
import { PlanSelector, SwitchButtonOptions } from './components/PlanSelector';
import { SwitchComponent, SwitchStorageBusinessOptions } from './components/Switch';
import CardSkeleton from '@/components/components/CardSkeleton';
import FreePlanCard from '@/components/prices/FreePlanCard';
import { PriceCard } from './PriceCard';
import { HandCoins, Headset, Keyhole } from '@phosphor-icons/react';
import BusinessBanner from '@/components/banners/BusinessBanner';
import { PromoCodeProps } from '@/lib/types';

interface PriceTableProps {
  textContent: Record<string, any>;
  products: ProductsDataProps | undefined;
  loadingCards: boolean;
  billingFrequency: Interval;
  activeSwitchPlan: SwitchButtonOptions;
  lang: string;
  popularPlanBySize?: string;
  businessStorageSelected: SwitchStorageBusinessOptions;
  hideBusinessSelector?: boolean;
  hidePlanSelectorComponent?: boolean;
  hideBusinessCards?: boolean;
  businessSaveUpPrice?: boolean;
  businessBillingFrequency?: Interval;
  hideFreeCard?: boolean;
  isFamilyPage?: boolean;
  hidePlanSelectorAndSwitch?: boolean;
  hideSwitchSelector?: boolean;
  lifetimeCoupons?: Record<string, PromoCodeProps>;
  isMonthly?: boolean;
  darkMode?: boolean;
  hideFeatures?: boolean;
  showPromo?: boolean;
  decimalDiscount?: {
    subscriptions?: number;
    lifetime?: number;
    business?: number;
  };
  isAnnual?: boolean;
  isAffiliate?: boolean;
  onPlanTypeChange: (activeSwitchPlan: SwitchButtonOptions, interval: Interval) => void;
  onIndividualSwitchToggled: (interval: Interval) => void;
  onBusinessStorageChange: (businessStorageSelected: string) => void;
  onCheckoutButtonClicked: (planId: string, isCheckoutForLifetime: boolean, interval: string, storage: string) => void;
  onBusinessSwitchToggled?: (interval: Interval) => void;
  onBusinessPlansSelected?: (isBusiness: boolean) => void;
  differentRecommended?: boolean;
  isValentinesMode?: boolean;
  onlyUltimatePlan?: boolean;
  premiumAndUltimatePlan?: boolean;
}

export const PricingSection = ({
  textContent,
  products,
  loadingCards,
  activeSwitchPlan,
  billingFrequency,
  businessBillingFrequency,
  decimalDiscount,
  hideFreeCard,
  hidePlanSelectorAndSwitch,
  hideBusinessCards,
  hidePlanSelectorComponent,
  hideBusinessSelector,
  hideSwitchSelector,
  businessStorageSelected,
  lang,
  popularPlanBySize = '3TB',
  isFamilyPage,
  onPlanTypeChange,
  onBusinessStorageChange,
  onIndividualSwitchToggled,
  onBusinessSwitchToggled,
  onCheckoutButtonClicked,
  onBusinessPlansSelected,
  darkMode,
  differentRecommended = true,
  hideFeatures,
  showPromo,
  isAffiliate,
  isValentinesMode = false,
  onlyUltimatePlan = false,
  premiumAndUltimatePlan = false,
}: PriceTableProps): JSX.Element => {
  const banner = require('@/assets/lang/en/banners.json');

  const isBusiness = activeSwitchPlan === 'Business';
  const labelDiscount = '15';
  const showLoadingCards = loadingCards;
  const showBusinessCards = isBusiness && !loadingCards && !!businessBillingFrequency;
  const isIndividual = activeSwitchPlan === 'Individuals' || activeSwitchPlan === 'Lifetime';
  const showIndividualCards = isIndividual && !loadingCards;
  const showSwitchComponent =
    (activeSwitchPlan === 'Business' || activeSwitchPlan === 'Individuals') && !hideBusinessCards;

  useEffect(() => {
    if (isBusiness) {
      onBusinessPlansSelected?.(true);
    } else {
      onBusinessPlansSelected?.(false);
    }
  }, [activeSwitchPlan, isBusiness, onBusinessPlansSelected]);

  const billingFrequencyForSwitch = isIndividual ? billingFrequency : businessBillingFrequency;

  const popularPlan = differentRecommended
    ? popularPlanBySize
    : billingFrequency === Interval.Lifetime
    ? popularPlanBySize
    : '3TB';

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

  const switchHandler = (interval: Interval) => {
    if (isIndividual) {
      onIndividualSwitchToggled(interval);
    } else {
      onBusinessSwitchToggled?.(interval);
    }
  };

  return (
    <>
      <div className={`${hidePlanSelectorAndSwitch ? 'hidden' : 'flex'} flex-col items-center space-y-9 `}>
        {!hidePlanSelectorComponent && (
          <PlanSelector
            textContent={textContent}
            activeSwitchPlan={activeSwitchPlan}
            hideBusinessSelector={hideBusinessSelector}
            onPlanTypeChange={onPlanTypeChange}
            isMonthly
            darkMode={darkMode}
          />
        )}

        {!hideSwitchSelector && activeSwitchPlan !== 'Lifetime' && (
          <SwitchComponent
            textContent={textContent}
            show={showSwitchComponent}
            lang={lang}
            billedFrequency={billingFrequencyForSwitch}
            handleOnSwitchIsToggled={switchHandler}
            labelDiscount={labelDiscount}
            showLabelDiscount={activeSwitchPlan === 'Business' || activeSwitchPlan === 'Individuals'}
            darkMode={darkMode}
            activeStoragePlan={businessStorageSelected}
            onBusinessStorageChange={onBusinessStorageChange}
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
        show={showIndividualCards}
        enter="transition duration-500 ease-out"
        enterFrom="scale-95 translate-y-20 opacity-0"
        enterTo="scale-100 translate-y-0 opacity-100"
        className="flex flex-col gap-4"
      >
        <div className="content flex w-full flex-nowrap items-stretch justify-start gap-6 overflow-x-auto pb-8 md:justify-center">
          {products?.individuals
            ? products.individuals[billingFrequency]
                .filter((product) => {
                  if (premiumAndUltimatePlan) {
                    return product.storage === '5TB' || product.storage === '3TB';
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
                    productCardPlan="individuals"
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

      {/* Business plans */}
      <Transition
        show={showBusinessCards}
        enter="transition duration-500 ease-out"
        enterFrom="scale-95 translate-y-20 opacity-0"
        enterTo="scale-100 translate-y-0 opacity-100"
        className="flex w-full flex-col gap-4"
      >
        <div className="content grid w-3/4 grid-cols-2 items-stretch gap-8 ">
          {hideBusinessCards ? (
            <BusinessBanner textContent={banner.BusinessBanner} />
          ) : (
            <>
              {businessBillingFrequency && products?.business
                ? products.business[businessBillingFrequency].map((product, cardIndex) => (
                    <PriceCard
                      isCheckoutForLifetime={businessBillingFrequency === Interval.Lifetime}
                      product={product}
                      monthlyProductPrice={
                        products.business[Interval.Month].filter(
                          (monthlyPRoduct) => monthlyPRoduct.storage === product.storage,
                        )[0].price
                      }
                      onCheckoutButtonClicked={onCheckoutButtonClicked}
                      productCardPlan="business"
                      label={product.storage}
                      key={product.storage}
                      popular={product.storage === '2TB'}
                      decimalDiscountValue={decimalDiscount?.business}
                      isFamilyPage={isFamilyPage}
                      lang={lang}
                      darkMode={darkMode}
                      cardIndex={cardIndex}
                      showGift={showPromo}
                      isValentinesMode={isValentinesMode}
                    />
                  ))
                : undefined}
            </>
          )}
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

      {!hideFreeCard && <FreePlanCard textContent={textContent.freePlanCard} />}
    </>
  );
};
