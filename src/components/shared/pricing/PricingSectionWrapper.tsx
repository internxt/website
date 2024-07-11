import { Interval, ProductsDataProps } from '@/components/services/stripe.service';
import { usePlanSelection } from '@/hooks/usePlanSelection';
import { PricingSection } from './PricingSection';

interface PricingSectionWrapperProps {
  textContent: Record<string, any>;
  products: ProductsDataProps | undefined;
  lang: string;
  loadingCards: boolean;
  hidePlanSelectorAndSwitch?: boolean;
  hideBusinessSelector?: boolean;
  hideFreeCard?: boolean;
  decimalDiscount?: {
    individuals?: number;
    business?: number;
  };
  onCheckoutButtonClicked: (planId: string, isCheckoutForLifetime: boolean) => void;
  handlePageNameUpdate?: (pageName: string) => void;
}

export const PricingSectionWrapper = ({
  textContent,
  products,
  lang,
  loadingCards,
  hidePlanSelectorAndSwitch,
  hideBusinessSelector,
  hideFreeCard,
  decimalDiscount,
  onCheckoutButtonClicked,
  handlePageNameUpdate,
}: PricingSectionWrapperProps): JSX.Element => {
  const {
    activeSwitchPlan,
    billingFrequency,
    businessBillingFrequency,
    onPlanTypeChange,
    onIndividualSwitchToggled,
    onBusinessSwitchToggled,
  } = usePlanSelection('Individuals', Interval.Year, handlePageNameUpdate);

  return (
    <PricingSection
      textContent={textContent}
      lang={lang}
      billingFrequency={billingFrequency}
      businessBillingFrequency={businessBillingFrequency}
      decimalDiscountForIndividualPlans={decimalDiscount?.individuals}
      decimalDiscountForBusinessPlans={decimalDiscount?.business}
      products={products}
      hideFreeCard={hideFreeCard}
      hideBusinessSelector={hideBusinessSelector}
      hidePlanSelectorAndSwitch={hidePlanSelectorAndSwitch}
      loadingCards={loadingCards}
      activeSwitchPlan={activeSwitchPlan}
      onCheckoutButtonClicked={onCheckoutButtonClicked}
      onPlanTypeChange={onPlanTypeChange}
      onIndividualSwitchToggled={onIndividualSwitchToggled}
      onBusinessSwitchToggled={onBusinessSwitchToggled}
    />
  );
};
