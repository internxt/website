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
  startFromInterval?: Interval;
  popularPlanBySize?: string;
  startFromPlan?: SwitchButtonOptions;
  lifetimeCoupons?: Record<string, PromoCodeProps>;
  backgroundColorComponent?: string;
  descriptionColor?: string;
  isFamilyPage?: boolean;
  planSelectorBgColor?: string;
  planSelectorBgActiveColor?: string;
  colorLblEnabledSwitch?: string;
  colorSwitchNoEnabled?: string;
  colorUpCard?: string;
  isBlackFriday?: boolean;
  colorDownCard?: string;
  decimalDiscount?: {
    individuals?: number;
    lifetime?: number;
    business?: number;
  };
  onCheckoutButtonClicked: (planId: string, isCheckoutForLifetime: boolean) => void;
  handlePageNameUpdate?: (pageName: string) => void;
  onBusinessPlansSelected?: (isBusiness: boolean) => void;
  CustomDescription?: ReactNode;
}

export const PricingSectionWrapper = ({
  textContent,
  products,
  lang,
  loadingCards,
  hidePlanSelectorAndSwitch,
  startFromInterval = Interval.Year,
  startFromPlan = 'Individuals',
  hideBusinessSelector,
  hideBusinessCards,
  hidePlanSelectorComponent,
  backgroundColorComponent = 'bg-white',
  descriptionColor='text-gray-80',
  lifetimeCoupons,
  hideFreeCard,
  hideSwitchSelector,
  popularPlanBySize,
  decimalDiscount,
  isFamilyPage,
  planSelectorBgActiveColor,
  planSelectorBgColor,
  colorLblEnabledSwitch,
  colorSwitchNoEnabled,
  colorUpCard,
  onCheckoutButtonClicked,
  handlePageNameUpdate,
  onBusinessPlansSelected,
  isBlackFriday,
  colorDownCard,
  CustomDescription,
}: PricingSectionWrapperProps): JSX.Element => {
  const {
    activeSwitchPlan,
    billingFrequency,
    businessBillingFrequency,
    onPlanTypeChange,
    onIndividualSwitchToggled,
    onBusinessSwitchToggled,
  } = usePlanSelection(startFromPlan, startFromInterval, handlePageNameUpdate);
  const isIndividual = activeSwitchPlan === 'Individuals' || activeSwitchPlan === 'Lifetime';

  const individualPlansTitle =
    textContent.planTitles.homePage ??
    (billingFrequency === Interval.Lifetime ? textContent.planTitles.lifetime : textContent.planTitles.individuals);
  const businessTitle = textContent.planTitles.business;

  const title = () => {
    if (isIndividual) {
      return individualPlansTitle;
    } else {
      return businessTitle;
    }
  };

  return (
    <section className={`overflow-hidden px-5 py-20 ${backgroundColorComponent}`}>
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4 text-center" id="priceTable">
          <Header maxWidth="max-w-4xl">{title()}</Header>
          <p className={`w-full max-w-3xl text-center ${descriptionColor} text-xl`}>
            {!isIndividual
              ? `${hideBusinessCards ? textContent.businessDescription : textContent.businessDescription2}`
              : `${textContent.planDescription}`}
          </p>
          <p className="w-full max-w-3xl text-center text-2xl !leading-tight text-regular text-gray-100">
            {CustomDescription}
          </p>
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
          planSelectorBgColor={planSelectorBgColor}
          planSelectorBgActiveColor={planSelectorBgActiveColor}
          colorLblEnabledSwitch={colorLblEnabledSwitch}
          colorSwitchNoEnabled={colorSwitchNoEnabled}
          colorUpCard={colorUpCard}
          isBlackFriday={isBlackFriday}
          colorDownCard={colorDownCard}
          hideSwitchSelector={hideSwitchSelector}
          isMonthly
        />
      </div>
    </section>
  );
};
