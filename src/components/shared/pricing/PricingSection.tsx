import { useEffect } from 'react';
import { Transition } from '@headlessui/react';

import { Interval, ProductsDataProps } from '@/components/services/stripe.service';
import { PlanSelector, SwitchButtonOptions } from './components/PlanSelector';
import { SwitchComponent } from './components/Switch';
import CardSkeleton from '@/components/components/CardSkeleton';
import FreePlanCard from '@/components/prices/FreePlanCard';
import { PriceCard } from './PriceCard';
import { CurrencyCircleDollar, Detective, FolderLock, Lifebuoy } from '@phosphor-icons/react';
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
const PLANS_LEVELS = {
  '1TB': 'Essential ',
  '3TB': 'Premium ',
  '5TB': 'Ultimate ',
};
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
}: PriceTableProps): JSX.Element => {
  const banner = require('@/assets/lang/en/banners.json');

  const isBusiness = activeSwitchPlan === 'Business';
  const labelDiscount = '15';
  const showLoadingCards = loadingCards;
  const isIndividual = activeSwitchPlan === 'Individuals' || activeSwitchPlan === 'Lifetime';
  const showIndividualCards = isIndividual && !loadingCards;

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
      text: textContent.features.premiumCustomerSupport,
    },
    {
      icon: CurrencyCircleDollar,
      text: textContent.features.moneyBack,
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

  const getPlanLevel = (storage) => {
    return PLANS_LEVELS[storage];
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
        <div className="content flex flex-row flex-wrap items-start justify-center justify-items-center">
          {products?.individuals
            ? products.individuals[billingFrequency].map((product) => (
                <PriceCard
                  isCheckoutForLifetime={billingFrequency === Interval.Lifetime}
                  product={product}
                  onCheckoutButtonClicked={onCheckoutButtonClicked}
                  label={getPlanLevel(product.storage)}
                  key={product.storage}
                  popular={product.storage === popularPlanBySize}
                  decimalDiscountValue={
                    product.interval === Interval.Lifetime ? decimalDiscount?.lifetime : decimalDiscount?.subscriptions
                  }
                  lang={lang}
                  darkMode={darkMode}
                  isBrave={isBrave}
                />
              ))
            : undefined}
        </div>
        {!hideFreeCard && (
          <div id="freeAccountCard" className="content flex w-full pb-10 md:pb-0">
            <FreePlanCard textContent={textContent.freePlanCard} />
          </div>
        )}
      </Transition>

      {!hideFeatures && (
        <div className="flex flex-col justify-center space-y-8 md:flex-row md:space-x-32 md:space-y-0 md:pt-10">
          {features.map((feature) => (
            <div key={feature.text} className="flex flex-row items-center space-x-3">
              <feature.icon size={40} className="text-primary md:pb-0" />
              <p className={`text-xl font-medium ${darkMode ? 'text-white' : 'text-gray-80'}`}>{feature.text}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
