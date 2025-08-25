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
  onCheckoutButtonClicked: (planId: string, isCheckoutForLifetime: boolean) => void;
  onBusinessSwitchToggled?: (interval: Interval) => void;
  onBusinessPlansSelected?: (isBusiness: boolean) => void;
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

  hideFeatures,
  showPromo,
  isAffiliate,
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
      <div className={`${hidePlanSelectorAndSwitch ? 'hidden' : 'flex'} flex-col items-center space-y-9`}>
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
        <div className="content flex flex-row justify-end gap-4 ">
          {products?.individuals
            ? products.individuals[billingFrequency].map((product, cardIndex) => (
                <PriceCard
                  isCheckoutForLifetime={billingFrequency === Interval.Lifetime}
                  product={product}
                  onCheckoutButtonClicked={onCheckoutButtonClicked}
                  label={product.storage}
                  key={product.storage}
                  popular={product.storage === popularPlanBySize}
                  productCardPlan="individuals"
                  decimalDiscountValue={
                    product.interval === Interval.Lifetime ? decimalDiscount?.lifetime : decimalDiscount?.subscriptions
                  }
                  lang={lang}
                  darkMode={darkMode}
                  showPromo={showPromo}
                  isAffiliate={isAffiliate}
                  cardIndex={cardIndex}
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
        <div className="content flex w-full flex-row flex-wrap items-start justify-center justify-items-center gap-6">
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
                      showPromo={showPromo}
                      cardIndex={cardIndex}
                    />
                  ))
                : undefined}
            </>
          )}
        </div>
      </Transition>
      {!hideFeatures && (
        <div className="justify-centerh flex flex-col items-center text-center md:flex-row md:items-start md:space-x-32 md:space-y-0">
          {features.map((feature) => (
            <div key={feature.text} className="flex flex-col items-start gap-4 md:max-w-[33%] md:flex-row">
              <feature.icon size={36} className="!h-[36px] !w-[36px] shrink-0 text-primary md:pb-0" />
              <p className={`pt-[6px] text-xl font-medium ${darkMode ? 'text-white' : 'text-gray-80'}`}>
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      )}

      {!hideFreeCard && <FreePlanCard textContent={textContent.freePlanCard} />}
      <div className="h-[1px] w-full bg-neutral-25 lg:mx-40" />
    </>
  );
};
