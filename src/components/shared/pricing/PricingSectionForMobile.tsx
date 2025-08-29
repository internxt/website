import { useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { Interval, ProductsDataProps } from '@/services/stripe.service';
import { SwitchButtonOptions, SwitchStorageOptions } from './components/PlanSelector';
import CardSkeleton from '@/components/components/CardSkeleton';
import { PriceCard } from './PriceCard';
import { HandCoins, Headset, Keyhole } from '@phosphor-icons/react';
import BusinessBanner from '@/components/banners/BusinessBanner';
import { PlanSelectorForMobile } from './components/PlanSelectorForMobile';
import FreePlanCard from '@/components/prices/FreePlanCard';
import { SwitchComponent, SwitchStorageBusinessOptions } from './components/Switch';

interface PriceTableProps {
  textContent: Record<string, any>;
  products: ProductsDataProps | undefined;
  loadingCards: boolean;
  billingFrequency: Interval;
  activeSwitchPlan: SwitchButtonOptions;
  storageSelected: SwitchStorageOptions;
  businessStorageSelected: SwitchStorageBusinessOptions;
  lang: string;
  hideFreeCard?: boolean;
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
  onBusinessStorageChange: (businessStorageSelected: string) => void;
  onIndividualSwitchToggled: (interval: Interval) => void;
  onCheckoutButtonClicked: (planId: string, isCheckoutForLifetime: boolean) => void;
  onBusinessSwitchToggled?: (interval: Interval) => void;
  onBusinessPlansSelected?: (isBusiness: boolean) => void;
}

export const PricingSectionForMobile = ({
  textContent,
  products,
  loadingCards,
  activeSwitchPlan,
  storageSelected,
  businessStorageSelected,
  billingFrequency,
  businessBillingFrequency,
  decimalDiscount,
  hideFreeCard,
  hideBusinessCards,
  hideBusinessSelector,
  lang,
  popularPlanBySize = '3TB',
  isFamilyPage,
  onPlanTypeChange,
  onStorageChange,
  onBusinessStorageChange,
  onIndividualSwitchToggled,
  onBusinessSwitchToggled,
  onCheckoutButtonClicked,
  onBusinessPlansSelected,
  darkMode,
  hideFeatures,
  showPromo,
  isAffiliate,
  hideBillingController,
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

  const planStorage = storageSelected === 'Essential' ? '1TB' : storageSelected === 'Premium' ? '3TB' : '5TB';
  const businessPlanStorage = businessStorageSelected === 'Standard' ? '1TB' : '2TB';

  return (
    <>
      {activeSwitchPlan !== 'Business' && (
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
      {activeSwitchPlan !== 'Lifetime' && (
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

      <Transition
        show={showLoadingCards}
        enter="transition duration-500 ease-out"
        enterFrom="scale-95 translate-y-20 opacity-0"
        enterTo="scale-100 translate-y-0 opacity-100"
      >
        <div className="flex flex-row flex-wrap items-end justify-center justify-items-center">
          {Array(1)
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
                .map((product, cardIndex) => (
                  <PriceCard
                    isCheckoutForLifetime={billingFrequency === Interval.Lifetime}
                    product={product}
                    onCheckoutButtonClicked={onCheckoutButtonClicked}
                    label={product.storage}
                    key={product.storage}
                    popular={product.storage === popularPlanBySize}
                    productCardPlan="individuals"
                    decimalDiscountValue={
                      product.interval === Interval.Lifetime
                        ? decimalDiscount?.lifetime
                        : decimalDiscount?.subscriptions
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
        <div className="content flex w-[329px] flex-col justify-start px-2 lg:justify-end">
          {hideBusinessCards ? (
            <BusinessBanner textContent={banner.BusinessBanner} />
          ) : (
            <>
              {businessBillingFrequency && products?.business
                ? products.business[businessBillingFrequency]
                    .filter((product) => product.storage === businessPlanStorage)
                    .map((product, cardIndex) => (
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
        <div className="flex h-min w-screen flex-col items-center justify-center gap-2 text-start">
          {features.map((feature) => (
            <div key={feature.text} className="flex h-min w-[267px] flex-row items-start justify-start gap-2 ">
              <div>
                <feature.icon size={24} className="shrink-0  text-primary " />
              </div>
              <p className={`justify-end text-base font-medium ${darkMode ? 'text-white' : 'text-gray-80'}`}>
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      )}

      {!hideFreeCard && <FreePlanCard textContent={textContent.freePlanCard} />}
    </>
  );
};
