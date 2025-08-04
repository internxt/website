import { Interval, ProductsDataProps } from '@/services/stripe.service';
import { usePlanSelection } from '@/hooks/usePlanSelection';
import { PricingSection } from './PricingSection';
import { SwitchButtonOptions, SwitchStorageOptions } from './components/PlanSelector';
import { PromoCodeProps } from '@/lib/types';
import { ReactNode } from 'react';
import { highlightKeywords } from '@/utils/highlightKeywords';
import { PricingSectionForMobile } from './PricingSectionForMobile';

interface PricingSectionWrapperProps {
  textContent: Record<string, any>;
  products: ProductsDataProps | undefined;
  lang: string;
  loadingCards: boolean;
  hidePlanSelectorAndSwitch?: boolean;
  hideBusinessSelector?: boolean;
  hideBusinessCards?: boolean;
  hidePlanSelectorComponent?: boolean;
  hideSwitchSelector?: boolean;
  hideFreeCard?: boolean;
  startIndividualPlansFromInterval?: Interval;
  startBusinessPlansFromInterval?: Interval;
  popularPlanBySize?: string;
  startFromPlan?: SwitchButtonOptions;
  startFromStorage?: SwitchStorageOptions;
  lifetimeCoupons?: Record<string, PromoCodeProps>;
  backgroundColorComponent?: string;
  isFamilyPage?: boolean;
  darkMode?: boolean;
  hideTitle?: boolean;
  decimalDiscount?: {
    individuals?: number;
    lifetime?: number;
    business?: number;
  };
  hideDescription?: boolean;
  onCheckoutButtonClicked: (planId: string, isCheckoutForLifetime: boolean) => void;
  handlePageNameUpdate?: (pageName: string) => void;
  onBusinessPlansSelected?: (isBusiness: boolean) => void;
  CustomDescription?: ReactNode;
  isBrave?: boolean;
  isAnnual?: boolean;
  hideFeatures?: boolean;
  showPromo?: boolean;
  isAffiliate?: boolean;
}

export const PricingSectionWrapper = ({
  textContent,
  products,
  lang,
  loadingCards,
  hidePlanSelectorAndSwitch,
  startIndividualPlansFromInterval = Interval.Lifetime,
  startBusinessPlansFromInterval = Interval.Month,
  startFromPlan = 'Lifetime',
  startFromStorage = 'Ultimate',
  hideBusinessSelector,
  hideBusinessCards,
  hidePlanSelectorComponent,
  backgroundColorComponent = 'bg-white',
  lifetimeCoupons,
  hideFreeCard,
  hideSwitchSelector,
  popularPlanBySize,
  decimalDiscount,
  isFamilyPage,
  hideTitle,
  hideDescription,
  hideFeatures,
  onCheckoutButtonClicked,
  handlePageNameUpdate,
  onBusinessPlansSelected,
  CustomDescription,
  darkMode,
  isBrave,
  isAnnual,
  showPromo = true,
  isAffiliate,
}: PricingSectionWrapperProps): JSX.Element => {
  const {
    activeSwitchPlan,
    activeStoragePlan,
    billingFrequency,
    businessBillingFrequency,
    onPlanTypeChange,
    onStorageChange,
    onIndividualSwitchToggled,
    onBusinessSwitchToggled,
  } = usePlanSelection(
    startFromPlan,
    startFromStorage,
    startIndividualPlansFromInterval,
    startBusinessPlansFromInterval,
    handlePageNameUpdate,
  );
  const isIndividual = activeSwitchPlan === 'Individuals' || activeSwitchPlan === 'Lifetime';

  const individualPlansTitle =
    billingFrequency === Interval.Lifetime ? textContent.planTitles.lifetime : textContent.planTitles.individuals;

  const businessTitle = textContent.planTitles.business;

  const lifetimeSubtitles = billingFrequency === Interval.Lifetime ? textContent.lifetimeDescription : '';
  const individualPLansDescription = billingFrequency === Interval.Year ? textContent.planDescription : '';

  const businessPlanDescription = textContent.businessDescription2;

  const title = () => {
    if (isIndividual) {
      return individualPlansTitle;
    } else {
      return businessTitle;
    }
  };

  const description = () => {
    if (isIndividual) {
      return individualPLansDescription;
    } else {
      return businessPlanDescription;
    }
  };

  return (
    <section className={` overflow-hidden px-5 py-20  ${backgroundColorComponent}`} id="payment">
      <div className="hidden flex-col items-center gap-10 lg:flex">
        <div className="flex flex-col items-center gap-4 text-center" id="priceTable">
          {isBrave ? <p className="text-4xl font-semibold text-primary">{textContent.header}</p> : null}

          {!hideTitle && <h1 className="text-3xl font-semibold text-gray-100 lg:text-5xl">{title()}</h1>}

          <span className="text-regular max-w-[800px] text-xl text-gray-80">{lifetimeSubtitles}</span>

          {CustomDescription ? (
            CustomDescription
          ) : !hideDescription ? (
            <span
              className="text-regular max-w-[1000px] text-xl text-gray-80"
              dangerouslySetInnerHTML={{ __html: highlightKeywords(description()) }}
            />
          ) : null}
        </div>

        <PricingSection
          textContent={textContent}
          lang={lang}
          billingFrequency={billingFrequency}
          businessBillingFrequency={businessBillingFrequency}
          lifetimeCoupons={lifetimeCoupons}
          isFamilyPage={isFamilyPage}
          decimalDiscount={{
            subscriptions: decimalDiscount?.individuals,
            lifetime: decimalDiscount?.lifetime,
            business: decimalDiscount?.business,
          }}
          products={products}
          popularPlanBySize={popularPlanBySize}
          hideFreeCard={hideFreeCard}
          hideBusinessSelector={hideBusinessSelector}
          hidePlanSelectorComponent={hidePlanSelectorComponent}
          hideBusinessCards={hideBusinessCards}
          hidePlanSelectorAndSwitch={hidePlanSelectorAndSwitch}
          loadingCards={loadingCards}
          activeSwitchPlan={activeSwitchPlan}
          onCheckoutButtonClicked={onCheckoutButtonClicked}
          onPlanTypeChange={onPlanTypeChange}
          onIndividualSwitchToggled={onIndividualSwitchToggled}
          onBusinessSwitchToggled={onBusinessSwitchToggled}
          onBusinessPlansSelected={onBusinessPlansSelected}
          hideSwitchSelector={hideSwitchSelector}
          isMonthly
          darkMode={darkMode}
          isAnnual={isAnnual}
          hideFeatures={hideFeatures}
          showPromo={showPromo}
          isAffiliate={isAffiliate}
        />
      </div>
      <div className="flex flex-col items-center gap-10 lg:hidden ">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-30 font-bold text-gray-100">{textContent.title} </p>
        </div>

        <PricingSectionForMobile
          textContent={textContent}
          lang={lang}
          billingFrequency={billingFrequency}
          businessBillingFrequency={businessBillingFrequency}
          lifetimeCoupons={lifetimeCoupons}
          isFamilyPage={isFamilyPage}
          decimalDiscount={{
            subscriptions: decimalDiscount?.individuals,
            lifetime: decimalDiscount?.lifetime,
            business: decimalDiscount?.business,
          }}
          products={products}
          popularPlanBySize={popularPlanBySize}
          hideFreeCard={hideFreeCard}
          hideBusinessSelector={hideBusinessSelector}
          hidePlanSelectorComponent={hidePlanSelectorComponent}
          hideBusinessCards={hideBusinessCards}
          hidePlanSelectorAndSwitch={hidePlanSelectorAndSwitch}
          loadingCards={loadingCards}
          activeSwitchPlan={activeSwitchPlan}
          onCheckoutButtonClicked={onCheckoutButtonClicked}
          onStorageChange={onStorageChange}
          onPlanTypeChange={onPlanTypeChange}
          onIndividualSwitchToggled={onIndividualSwitchToggled}
          onBusinessSwitchToggled={onBusinessSwitchToggled}
          onBusinessPlansSelected={onBusinessPlansSelected}
          hideSwitchSelector={hideSwitchSelector}
          isMonthly
          darkMode={darkMode}
          isAnnual={isAnnual}
          hideFeatures={hideFeatures}
          showPromo={showPromo}
          isAffiliate={isAffiliate}
          storageSelected={activeStoragePlan}
        />
      </div>
    </section>
  );
};
