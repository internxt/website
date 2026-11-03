import { Transition } from '@headlessui/react';
import { Interval, ProductsDataProps } from '@/services/stripe.service';
import { SwitchButtonOptions, SwitchStorageOptions } from './components/PlanSelector';
import CardSkeleton from '@/components/components/CardSkeleton';
import { PriceCard } from './PriceCard';
import { HandCoins, Headset, Keyhole } from '@phosphor-icons/react';
import { PlanSelectorForMobile } from './components/PlanSelectorForMobile';
import FreePlanCard from '@/components/prices/FreePlanCard';

interface PriceTableProps {
  textContent: Record<string, any>;
  products: ProductsDataProps | undefined;
  loadingCards: boolean;
  billingFrequency: Interval;
  activeSwitchPlan: SwitchButtonOptions;
  storageSelected: SwitchStorageOptions;
  lang: string;
  hideFreeCard?: boolean;
  popularPlanBySize?: string;
  hidePlanSelectorComponent?: boolean;
  hidePlanSelectorAndSwitch?: boolean;
  onlyUltimatePlan?: boolean;
  darkMode?: boolean;
  hideFeatures?: boolean;
  showPromo?: boolean;
  decimalDiscount?: {
    subscriptions?: number;
    lifetime?: number;
  };
  isAnnual?: boolean;
  isAffiliate?: boolean;
  hideBillingController?: boolean;
  onPlanTypeChange: (activeSwitchPlan: SwitchButtonOptions, interval: Interval) => void;
  onStorageChange: (storageSelected: string) => void;
  onCheckoutButtonClicked: (planId: string, isCheckoutForLifetime: boolean, interval: string, storage: string) => void;
  isValentinesMode?: boolean;
}

const STORAGE_BY_PLAN: Record<SwitchStorageOptions, string> = {
  Essential: '1TB',
  Premium: '2TB',
  Ultimate: '5TB',
};

export const PricingSectionForMobile = ({
  textContent,
  products,
  loadingCards,
  activeSwitchPlan,
  storageSelected,
  billingFrequency,
  decimalDiscount,
  hideFreeCard,
  lang,
  popularPlanBySize = '2TB',
  onPlanTypeChange,
  onStorageChange,
  onCheckoutButtonClicked,
  darkMode,
  hideFeatures,
  showPromo,
  isAffiliate,
  hideBillingController,
  isValentinesMode = false,
  onlyUltimatePlan,
}: PriceTableProps): JSX.Element => {
  const showLoadingCards = loadingCards;
  const showIndividualCards = !loadingCards;

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

  const planStorage = onlyUltimatePlan ? STORAGE_BY_PLAN.Ultimate : STORAGE_BY_PLAN[storageSelected];

  const hideStorageSelector = onlyUltimatePlan ? onlyUltimatePlan : false;

  return (
    <>
      <PlanSelectorForMobile
        textContent={textContent}
        activeSwitchPlan={activeSwitchPlan}
        onPlanTypeChange={onPlanTypeChange}
        onStorageChange={onStorageChange}
        isMonthly
        darkMode={darkMode}
        activeStoragePlan={storageSelected}
        hideBillingController={hideBillingController}
        hideStorageSelector={hideStorageSelector}
      />

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
        as="div"
        show={showIndividualCards}
        enter="transition duration-500 ease-out"
        enterFrom="scale-95 translate-y-20 opacity-0"
        enterTo="scale-100 translate-y-0 opacity-100"
        className="flex flex-col gap-4"
      >
        <div className="content flex w-[345px] flex-col justify-start lg:justify-end">
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
        <div className="flex h-min w-screen flex-col items-center justify-center gap-2 text-start">
          {features.map((feature) => (
            <div key={feature.text} className="flex h-min w-[347px] flex-row items-start justify-start gap-2 px-6 ">
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

      {!hideFreeCard && <FreePlanCard textContent={textContent.freePlanCard} darkMode={darkMode} />}
    </>
  );
};
