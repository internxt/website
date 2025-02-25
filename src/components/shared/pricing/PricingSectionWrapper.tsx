import { Interval, ProductsDataProps } from '@/components/services/stripe.service';
import { usePlanSelection } from '@/hooks/usePlanSelection';
import { PricingSection } from './PricingSection';
import { SwitchButtonOptions } from './components/PlanSelector';
import { PromoCodeProps } from '@/lib/types';
import Header from '../Header';
import { ReactNode } from 'react';

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
  hideFeatures?: boolean;
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
}: PricingSectionWrapperProps): JSX.Element => {
  const {
    activeSwitchPlan,
    billingFrequency,
    businessBillingFrequency,
    onPlanTypeChange,
    onIndividualSwitchToggled,
    onBusinessSwitchToggled,
  } = usePlanSelection(
    startFromPlan,
    startIndividualPlansFromInterval,
    startBusinessPlansFromInterval,
    handlePageNameUpdate,
  );

  const isLifetime = billingFrequency === Interval.Lifetime;
  const individualPlansTitle =
    billingFrequency === Interval.Lifetime ? textContent.planTitles.lifetime : textContent.planTitles.individuals;

  return (
    <section className={`overflow-hidden px-5 py-20 ${backgroundColorComponent}`}>
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4 text-center" id="priceTable">
          {isBrave ? <p className="text-4xl font-semibold text-primary">{textContent.header}</p> : null}
          {!hideTitle && <Header maxWidth="max-w-4xl">{individualPlansTitle}</Header>}
          {isLifetime ? <p className="font-regular text-xl text-gray-80">{textContent.lifetimeDescription}</p> : null}
          <span className="text-regular max-w-[800px] text-xl text-gray-80">{textContent.description}</span>
        </div>

        <PricingSection
          textContent={textContent}
          lang={lang}
          billingFrequency={billingFrequency}
          lifetimeCoupons={lifetimeCoupons}
          isFamilyPage={isFamilyPage}
          decimalDiscount={{
            subscriptions: decimalDiscount?.individuals,
            lifetime: decimalDiscount?.lifetime,
          }}
          products={products}
          popularPlanBySize={popularPlanBySize}
          hideFreeCard={hideFreeCard}
          hidePlanSelectorComponent={hidePlanSelectorComponent}
          hidePlanSelectorAndSwitch={hidePlanSelectorAndSwitch}
          loadingCards={loadingCards}
          activeSwitchPlan={activeSwitchPlan}
          onCheckoutButtonClicked={onCheckoutButtonClicked}
          onPlanTypeChange={onPlanTypeChange}
          onIndividualSwitchToggled={onIndividualSwitchToggled}
          hideSwitchSelector={hideSwitchSelector}
          isMonthly
          darkMode={darkMode}
          isBrave={isBrave}
          hideFeatures={hideFeatures}
        />
      </div>
    </section>
  );
};
