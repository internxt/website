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
  const isIndividual = activeSwitchPlan === 'Individuals' || activeSwitchPlan === 'Lifetime';
  const isLifetime = activeSwitchPlan === 'Lifetime';
  const individualPlansTitle =
    billingFrequency === Interval.Lifetime ? textContent.planTitles.lifetime : textContent.planTitles.individuals;
  const businessTitle = textContent.planTitles.business;

  const individualPLansDescription = Interval.Lifetime ? textContent.lifetimeDescription : textContent.planDescription;

  const title = () => {
    if (isIndividual) {
      return individualPlansTitle;
    } else {
      return businessTitle;
    }
  };

  const highlightKeywords = (text) => {
    const keywords = ['Drive', 'Send', 'VPN', 'Antivirus', 'Meet', 'Mail'];
    const regex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi');

    return text.replace(regex, '<strong>$1</strong>');
  };

  return (
    <section className={`overflow-hidden px-5 py-20 ${backgroundColorComponent}`}>
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4 text-center" id="priceTable">
          {isBrave ? <p className="text-4xl font-semibold text-primary">{textContent.header}</p> : null}
          {!hideTitle && <Header maxWidth="max-w-4xl">{title()}</Header>}
          {isLifetime && (
            <span className="text-regular max-w-[800px] text-xl text-gray-80">{individualPLansDescription}</span>
          )}
          <span
            className="text-regular max-w-[800px] text-xl text-gray-80"
            dangerouslySetInnerHTML={{ __html: highlightKeywords(textContent.planDescription) }}
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
          isBrave={isBrave}
          hideFeatures={hideFeatures}
        />
      </div>
    </section>
  );
};
