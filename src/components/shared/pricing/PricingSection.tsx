import { useEffect } from 'react';
import { Transition } from '@headlessui/react';

import { Interval, ProductsDataProps } from '@/services/stripe.service';
import { PlanSelector, SwitchButtonOptions } from './components/PlanSelector';
import { SwitchComponent } from './components/Switch';
import CardSkeleton from '@/components/components/CardSkeleton';
import FreePlanCard from '@/components/prices/FreePlanCard';
import { PriceCard } from './PriceCard';
import { CurrencyCircleDollar, Lifebuoy } from '@phosphor-icons/react';
import BusinessBanner from '@/components/banners/BusinessBanner';
import { PromoCodeProps } from '@/lib/types';
import { OpenSource } from '../icons/OpenSource';

const SKELETON_CARDS = {
  Individuals: 4,
  Business: 2,
};

interface PriceTableProps {
  textContent: Record<string, any>;
  products: ProductsDataProps | undefined;
  loadingCards: boolean;
  billingFrequency: Interval;
  activeSwitchPlan: SwitchButtonOptions;
  lang: string;
  popularPlanBySize?: string;
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
  isBrave?: boolean;
  onPlanTypeChange: (activeSwitchPlan: SwitchButtonOptions, interval: Interval) => void;
  onIndividualSwitchToggled: (interval: Interval) => void;
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
  lang,
  popularPlanBySize = '3TB',
  lifetimeCoupons,
  isFamilyPage,
  isMonthly,
  onPlanTypeChange,
  onIndividualSwitchToggled,
  onBusinessSwitchToggled,
  onCheckoutButtonClicked,
  onBusinessPlansSelected,
  darkMode,
  isBrave,
  hideFeatures,
  showPromo = true,
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
      icon: Lifebuoy,
      text: textContent.features.premiumSupport,
    },
    {
      icon: CurrencyCircleDollar,
      text: textContent.features.guarantee,
    },
    {
      icon: OpenSource,
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
        {/* Switch buttons (Individual plans | Lifetime plans | Business) */}
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

        {/* Switch buttons for Individual plans (Monthly | Annually) */}
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
        <div className="content flex flex-row flex-wrap items-end justify-center justify-items-center">
          {products?.individuals
            ? products.individuals[billingFrequency].map((product) => (
                <PriceCard
                  isCheckoutForLifetime={billingFrequency === Interval.Lifetime}
                  product={product}
                  onCheckoutButtonClicked={onCheckoutButtonClicked}
                  label={product.storage}
                  key={product.storage}
                  popular={product.storage === popularPlanBySize}
                  decimalDiscountValue={
                    product.interval === Interval.Lifetime ? decimalDiscount?.lifetime : decimalDiscount?.subscriptions
                  }
                  lang={lang}
                  darkMode={darkMode}
                  isBrave={isBrave}
                  showPromo={showPromo}
                />
              ))
            : undefined}
        </div>
        {!hideFreeCard && (
          <div id="freeAccountCard" className="content flex w-full px-6 pb-10 md:px-0 md:pb-0">
            <FreePlanCard textContent={textContent.freePlanCard} />
          </div>
        )}
      </Transition>

      {/* Business plans */}
      <Transition
        show={showBusinessCards}
        enter="transition duration-500 ease-out"
        enterFrom="scale-95 translate-y-20 opacity-0"
        enterTo="scale-100 translate-y-0 opacity-100"
        className="flex w-full flex-col gap-4"
      >
        <div className="content flex w-full flex-row flex-wrap items-end justify-center justify-items-center">
          {hideBusinessCards ? (
            <BusinessBanner textContent={banner.BusinessBanner} />
          ) : (
            <>
              {businessBillingFrequency && products?.business
                ? products.business[businessBillingFrequency].map((product) => (
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
                    />
                  ))
                : undefined}
            </>
          )}
        </div>
      </Transition>
      {!hideFeatures && (
        <div className="flex flex-col items-center justify-center space-y-8 text-center md:flex-row md:items-start md:space-x-32 md:space-y-0">
          {features.map((feature) => (
            <div key={feature.text} className="flex flex-col items-center space-x-3 md:max-w-[33%] md:flex-row ">
              <feature.icon size={40} className="!h-[40px] !w-[40px] shrink-0 text-primary md:pb-0" />
              <p className={`text-xl font-medium ${darkMode ? 'text-white' : 'text-gray-80'}`}>{feature.text}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
