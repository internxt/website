import { useEffect } from 'react';
import { Transition } from '@headlessui/react';

import { Interval, ProductsDataProps } from '@/components/services/stripe.service';
import { PlanSelector, SwitchButtonOptions } from './components/PlanSelector';
import { SwitchComponent } from './components/Switch';
import CardSkeleton from '@/components/components/CardSkeleton';
import FreePlanCard from '@/components/prices/FreePlanCard';
import { PriceCard } from './PriceCard';
import { Detective, FolderLock } from '@phosphor-icons/react';
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
  lifetimeCoupons?: Record<string, PromoCodeProps>;
  decimalDiscount?: {
    subscriptions?: number;
    lifetime?: number;
    business?: number;
  };
  backgroundColorComponent?: string;
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
  lang,
  backgroundColorComponent = 'bg-white',
  popularPlanBySize = '10TB',
  lifetimeCoupons,
  isFamilyPage,
  onPlanTypeChange,
  onIndividualSwitchToggled,
  onBusinessSwitchToggled,
  onCheckoutButtonClicked,
  onBusinessPlansSelected,
}: PriceTableProps): JSX.Element => {
  const banner = require('@/assets/lang/en/banners.json');

  const isIndividual = activeSwitchPlan === 'Individuals' || activeSwitchPlan === 'Lifetime';
  const isBusiness = activeSwitchPlan === 'Business';
  const labelDiscount = isBusiness ? '10' : '23';
  const showLoadingCards = isIndividual && loadingCards;
  const showIndividualCards = isIndividual && !loadingCards;
  const showBusinessCards = isBusiness && !loadingCards && !!businessBillingFrequency;

  const showSwitchComponent =
    (activeSwitchPlan === 'Business' && !hideBusinessCards) || activeSwitchPlan === 'Individuals';

  useEffect(() => {
    if (isBusiness) {
      onBusinessPlansSelected?.(true);
    } else {
      onBusinessPlansSelected?.(false);
    }
  }, [activeSwitchPlan]);

  const billingFrequencyForSwitch = isIndividual ? billingFrequency : businessBillingFrequency;

  const features = [
    {
      icon: FolderLock,
      text: textContent.features.endToEnd,
    },
    {
      icon: OpenSource,
      text: textContent.features.openSource,
    },
    {
      icon: Detective,
      text: textContent.features.anonymousAccount,
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
      <div className="flex w-full flex-col items-center gap-10">
        <div className={`${hidePlanSelectorAndSwitch ? 'hidden' : 'flex'} flex-col items-center space-y-9`}>
          {/* Switch buttons (Individual plans | Lifetime plans | Business) */}
          {!hidePlanSelectorComponent && (
            <PlanSelector
              textContent={textContent}
              activeSwitchPlan={activeSwitchPlan}
              hideBusinessSelector={hideBusinessSelector}
              onPlanTypeChange={onPlanTypeChange}
            />
          )}

          {/* Switch buttons for Individual plans (Monthly | Annually) */}
          <SwitchComponent
            textContent={textContent}
            show={showSwitchComponent}
            lang={lang}
            billedFrequency={billingFrequencyForSwitch}
            handleOnSwitchIsToggled={switchHandler}
            labelDiscount={labelDiscount}
            showLabelDiscount={activeSwitchPlan === 'Business' || activeSwitchPlan === 'Individuals'}
          />
        <Transition
          show={showLoadingCards}
          enter="transition duration-500 ease-out"
          enterFrom="scale-95 translate-y-20 opacity-0"
          enterTo="scale-100 translate-y-0 opacity-100"
        >
          <div className="flex flex-row flex-wrap items-end justify-center justify-items-center p-6 py-14">
            {Array(4)
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
                    monthlyProductPrice={
                      products.individuals[Interval.Month].filter(
                        (monthlyPRoduct) => monthlyPRoduct.storage === product.storage,
                      )[0].price
                    }
                    key={product.storage}
                    popular={product.storage === popularPlanBySize}
                    decimalDiscountValue={
                      product.interval !== Interval.Lifetime
                        ? decimalDiscount?.subscriptions
                        : lifetimeCoupons
                        ? undefined
                        : decimalDiscount?.subscriptions
                    }
                    fixedDiscount={
                      product.interval === Interval.Lifetime && lifetimeCoupons
                        ? lifetimeCoupons?.[product.storage].amountOff
                        : undefined
                    }
                    lang={lang}
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
                        onCheckoutButtonClicked={onCheckoutButtonClicked}
                        productCardPlan="business"
                        label={product.storage}
                        monthlyProductPrice={
                          products.business[Interval.Month].filter(
                            (monthlyPRoduct) => monthlyPRoduct.storage === product.storage,
                          )[0].price
                        }
                        key={product.storage}
                        popular={product.storage === '10TB'}
                        decimalDiscountValue={decimalDiscount?.business}
                        isFamilyPage={isFamilyPage}
                        lang={lang}
                      />
                    ))
                  : undefined}
              </>
            )}
          </div>
        </Transition>
        <div className="flex flex-col justify-center space-y-8 md:flex-row md:space-x-32 md:space-y-0 md:pt-10">
          {features.map((feature) => (
            <div key={feature.text} className="flex flex-row items-center space-x-3">
              <feature.icon size={40} className="text-primary md:pb-0" />
              <p className="text-xl font-medium text-gray-80">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>

      <Transition
        show={loadingCards}
        enter="transition duration-500 ease-out"
        enterFrom="scale-95 translate-y-20 opacity-0"
        enterTo="scale-100 translate-y-0 opacity-100"
      >
        <div className="flex flex-row flex-wrap items-end justify-center justify-items-center p-6 py-14">
          {Array(SKELETON_CARDS[activeSwitchPlan])
            .fill(0)
            .map((_, i) => (
              <CardSkeleton key={i} />
            ))}
        </div>
      </Transition>

      <Transition
        show={isIndividual && !loadingCards}
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
                  monthlyProductPrice={
                    products.individuals[Interval.Month].filter(
                      (monthlyPRoduct) => monthlyPRoduct.storage === product.storage,
                    )[0].price
                  }
                  key={product.storage}
                  popular={product.storage === popularPlanBySize}
                  decimalDiscountValue={
                    product.interval !== Interval.Lifetime
                      ? decimalDiscount?.subscriptions
                      : lifetimeCoupons
                      ? undefined
                      : decimalDiscount?.subscriptions
                  }
                  fixedDiscount={
                    product.interval === Interval.Lifetime && lifetimeCoupons
                      ? lifetimeCoupons?.[product.storage].amountOff
                      : undefined
                  }
                  lang={lang}
                />
              ))
            : undefined}
        </div>
        {!hideFreeCard ? (
          <div id="freeAccountCard" className="content flex w-full pb-10 md:pb-0">
            <FreePlanCard textContent={textContent.freePlanCard} />
          </div>
        ) : undefined}
      </Transition>

      {/* Business plans */}
      <Transition
        show={isBusiness && !!businessBillingFrequency}
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
                      onCheckoutButtonClicked={onCheckoutButtonClicked}
                      productCardPlan="business"
                      label={product.storage}
                      monthlyProductPrice={
                        products.business[Interval.Month].filter(
                          (monthlyPRoduct) => monthlyPRoduct.storage === product.storage,
                        )[0].price
                      }
                      key={product.storage}
                      popular={product.storage === '10TB'}
                      decimalDiscountValue={decimalDiscount?.business}
                      isFamilyPage={isFamilyPage}
                      lang={lang}
                    />
                  ))
                : undefined}
            </>
          )}
        </div>
      </Transition>
      <div className="flex flex-col justify-center space-y-8 md:flex-row md:space-x-32 md:space-y-0 md:pt-10">
        {features.map((feature) => (
          <div key={feature.text} className="flex flex-row items-center space-x-3">
            <feature.icon size={40} className="text-primary md:pb-0" />
            <p className="text-xl font-medium text-gray-80">{feature.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};
