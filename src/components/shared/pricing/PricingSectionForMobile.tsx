import { useEffect } from 'react';
import { Transition } from '@headlessui/react';

import { Interval, ProductsDataProps } from '@/services/stripe.service';
import { SwitchButtonOptions, SwitchStorageOptions } from './components/PlanSelector';
import CardSkeleton from '@/components/components/CardSkeleton';
import { PriceCard } from './PriceCard';
import { CurrencyCircleDollar, Lifebuoy } from '@phosphor-icons/react';
import BusinessBanner from '@/components/banners/BusinessBanner';
import { OpenSource } from '../icons/OpenSource';
import { PlanSelectorForMobile } from './components/PlanSelectorForMobile';

interface PriceTableProps {
  textContent: Record<string, any>;
  products: ProductsDataProps | undefined;
  loadingCards: boolean;
  billingFrequency: Interval;
  activeSwitchPlan: SwitchButtonOptions;
  storageSelected: SwitchStorageOptions;
  lang: string;
  popularPlanBySize?: string;
  hideBusinessSelector?: boolean;
  hidePlanSelectorComponent?: boolean;
  hideBusinessCards?: boolean;
  businessBillingFrequency?: Interval;
  isFamilyPage?: boolean;
  hidePlanSelectorAndSwitch?: boolean;
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
  hideBillingController?: boolean;
  onPlanTypeChange: (activeSwitchPlan: SwitchButtonOptions, interval: Interval) => void;
  onStorageChange: (storageSelected: string) => void;
  onCheckoutButtonClicked: (planId: string, isCheckoutForLifetime: boolean) => void;
  onBusinessPlansSelected?: (isBusiness: boolean) => void;
}

export const PricingSectionForMobile = ({
  textContent,
  products,
  loadingCards,
  activeSwitchPlan,
  storageSelected,
  billingFrequency,
  businessBillingFrequency,
  decimalDiscount,
  hidePlanSelectorAndSwitch,
  hideBusinessCards,
  hidePlanSelectorComponent,
  hideBusinessSelector,
  lang,
  popularPlanBySize = '3TB',
  isFamilyPage,
  onPlanTypeChange,
  onStorageChange,
  onCheckoutButtonClicked,
  onBusinessPlansSelected,
  darkMode,
  isAnnual,
  hideFeatures,
  showPromo,
  isAffiliate,
  hideBillingController,
}: PriceTableProps): JSX.Element => {
  const banner = require('@/assets/lang/en/banners.json');

  const isBusiness = activeSwitchPlan === 'Business';
  const showLoadingCards = loadingCards;
  const showBusinessCards = isBusiness && !loadingCards && !!businessBillingFrequency;
  const isIndividual = activeSwitchPlan === 'Individuals' || activeSwitchPlan === 'Lifetime';
  const showIndividualCards = isIndividual && !loadingCards;

  useEffect(() => {
    if (isBusiness) {
      onBusinessPlansSelected?.(true);
    } else {
      onBusinessPlansSelected?.(false);
    }
  }, [activeSwitchPlan, isBusiness, onBusinessPlansSelected]);

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

  const planStorage = storageSelected === 'Essential' ? '1TB' : storageSelected === 'Premium' ? '3TB' : '5TB';

  return (
    <>
      <div
        className={`${hidePlanSelectorAndSwitch ? 'hidden' : 'flex'} flex-col items-center space-y-9`}
        id="priceTable"
      >
        {!hidePlanSelectorComponent && (
          <PlanSelectorForMobile
            textContent={textContent}
            activeSwitchPlan={activeSwitchPlan}
            hideBusinessSelector={hideBusinessSelector}
            onPlanTypeChange={onPlanTypeChange}
            onStorageChange={onStorageChange}
            isMonthly
            darkMode={darkMode}
            activeStoragePlan={storageSelected}
            hideBillingController={hideBillingController}
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
        <div className="content flex w-[329px] flex-col justify-start px-2 lg:justify-end">
          {products?.individuals
            ? products.individuals[billingFrequency]
                .filter((product) => product.storage === planStorage)

                .map((product) => (
                  <PriceCard
                    isCheckoutForLifetime={billingFrequency === Interval.Lifetime}
                    product={product}
                    onCheckoutButtonClicked={onCheckoutButtonClicked}
                    label={product.storage}
                    key={product.storage}
                    popular={product.storage === popularPlanBySize}
                    decimalDiscountValue={
                      product.interval === Interval.Lifetime
                        ? decimalDiscount?.lifetime
                        : decimalDiscount?.subscriptions
                    }
                    lang={lang}
                    darkMode={darkMode}
                    showPromo={showPromo}
                    isAffiliate={isAffiliate}
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
        <div className="content flex w-full flex-row flex-wrap items-start justify-center  justify-items-center gap-8">
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
                      showPromo={showPromo}
                    />
                  ))
                : undefined}
            </>
          )}
        </div>
      </Transition>
      {!hideFeatures && (
        <div className="flex h-[88px] w-[300px] flex-col items-start justify-between text-center md:flex-row md:space-x-32 md:space-y-0 lg:w-full">
          {features.map((feature) => (
            <div key={feature.text} className="flex h-[40px] w-full flex-row items-center justify-start gap-2 ">
              <div>
                <feature.icon size={40} className="shrink-0  text-primary " />
              </div>
              <p className={`justify-end  text-base font-medium ${darkMode ? 'text-white' : 'text-gray-80'}`}>
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
