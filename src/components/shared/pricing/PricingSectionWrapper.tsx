import { Interval, ProductsDataProps } from '@/services/stripe.service';
import { usePlanSelection } from '@/hooks/usePlanSelection';
import { PricingSection } from './PricingSection';
import { SwitchButtonOptions, SwitchStorageOptions } from './components/PlanSelector';
import { PromoCodeProps } from '@/lib/types';
import { ReactNode } from 'react';
import { highlightKeywords } from '@/utils/highlightKeywords';
import { PricingSectionForMobile } from './PricingSectionForMobile';
import { SwitchStorageBusinessOptions } from './components/Switch';

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
  startFromBusinessStorage?: SwitchStorageBusinessOptions;
  lifetimeCoupons?: Record<string, PromoCodeProps>;
  sectionDetails?: string;
  backgroundGradientColor?: string;
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
  hideBillingController?: boolean;
}

export const PricingSectionWrapper = ({
  textContent,
  products,
  lang,
  loadingCards,
  hidePlanSelectorAndSwitch,
  startIndividualPlansFromInterval = Interval.Lifetime,
  startBusinessPlansFromInterval = Interval.Year,
  startFromPlan = 'Lifetime',
  startFromStorage = 'Premium',
  startFromBusinessStorage = 'Pro',
  hideBusinessSelector,
  hideBusinessCards,
  hidePlanSelectorComponent,
  sectionDetails = 'bg-white',
  backgroundGradientColor,
  lifetimeCoupons,
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
  showPromo = false,
  isAffiliate,
  hideBillingController = false,
  hideFreeCard,
}: PricingSectionWrapperProps): JSX.Element => {
  const {
    activeSwitchPlan,
    activeStoragePlan,
    activeBusinessStoragePlan,
    billingFrequency,
    businessBillingFrequency,
    onPlanTypeChange,
    onStorageChange,
    onBusinessStorageChange,
    onIndividualSwitchToggled,
    onBusinessSwitchToggled,
  } = usePlanSelection(
    startFromPlan,
    startFromStorage,
    startFromBusinessStorage,
    startIndividualPlansFromInterval,
    startBusinessPlansFromInterval,
    handlePageNameUpdate,
  );
  const isIndividual = activeSwitchPlan === 'Individuals' || activeSwitchPlan === 'Lifetime';
  const isLifetime = billingFrequency === Interval.Lifetime;
  const individualPlansTitle =
    billingFrequency === Interval.Lifetime ? textContent.planTitles.lifetime : textContent.planTitles.individuals;

  const businessTitle = textContent.planTitles.business;

  const individualPLansDescription = textContent.planDescription;

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
  const totalDiscount = 100 - (decimalDiscount?.individuals ?? 0);
  return (
    <section
      className={`overflow-hidden lg:px-5 ${sectionDetails}`}
      id="billingButtons"
      style={{ background: backgroundGradientColor }}
    >
      <div className="hidden flex-col items-center gap-16 lg:flex">
        <div className="flex flex-col items-center gap-4 text-center" id="priceTable">
          <div className="flex h-min w-min flex-row items-center justify-center gap-4 whitespace-nowrap">
            {!hideTitle && <h1 className="text-30 font-semibold text-gray-100 lg:text-3xl">{title()}</h1>}
            <p className="mt-2 flex  flex-row bg-neutral-37 text-primary">
              {textContent.tileLabel.replace('{{discount}}', totalDiscount)}
              🔥
            </p>
          </div>
          {isBrave ? <p className="text-4xl font-semibold text-primary">{textContent.header}</p> : null}
          {isLifetime && (
            <span className="text-regular max-w-[831px] text-xl text-gray-55">{textContent.lifetimeDescription}</span>
          )}
          <span
            className="text-regular max-w-[932px] text-xl text-gray-55"
            dangerouslySetInnerHTML={{ __html: highlightKeywords(description()) }}
          />
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
          businessStorageSelected={activeBusinessStoragePlan}
          onBusinessStorageChange={onBusinessStorageChange}
          hideFreeCard={hideFreeCard}
        />
      </div>
      <div className=" flex flex-col items-center gap-6  py-10 lg:hidden">
        <p className="text-30 font-bold text-gray-100">{title()} </p>
        <PricingSectionForMobile
          textContent={textContent}
          lang={lang}
          billingFrequency={billingFrequency}
          businessBillingFrequency={businessBillingFrequency}
          isFamilyPage={isFamilyPage}
          decimalDiscount={{
            subscriptions: decimalDiscount?.individuals,
            lifetime: decimalDiscount?.lifetime,
            business: decimalDiscount?.business,
          }}
          products={products}
          popularPlanBySize={popularPlanBySize}
          hideBusinessSelector={hideBusinessSelector}
          hidePlanSelectorComponent={hidePlanSelectorComponent}
          hideBusinessCards={hideBusinessCards}
          hidePlanSelectorAndSwitch={hidePlanSelectorAndSwitch}
          loadingCards={loadingCards}
          activeSwitchPlan={activeSwitchPlan}
          onCheckoutButtonClicked={onCheckoutButtonClicked}
          onStorageChange={onStorageChange}
          onBusinessStorageChange={onBusinessStorageChange}
          onPlanTypeChange={onPlanTypeChange}
          onBusinessPlansSelected={onBusinessPlansSelected}
          darkMode={darkMode}
          isAnnual={isAnnual}
          hideFeatures={hideFeatures}
          showPromo={showPromo}
          isAffiliate={isAffiliate}
          storageSelected={activeStoragePlan}
          hideBillingController={hideBillingController}
          onIndividualSwitchToggled={onIndividualSwitchToggled}
          onBusinessSwitchToggled={onBusinessSwitchToggled}
          businessStorageSelected={activeBusinessStoragePlan}
          hideFreeCard={hideFreeCard}
        />
      </div>
    </section>
  );
};
