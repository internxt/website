import { Interval, ProductsDataProps } from '@/services/stripe.service';
import { PricingSection } from './PricingSection';
import { SwitchButtonOptions, SwitchStorageOptions } from './components/PlanSelector';
import { PromoCodeProps } from '@/lib/types';
import { ReactNode } from 'react';
import { PricingSectionForMobile } from './PricingSectionForMobile';
import { SwitchStorageBusinessOptions } from './components/Switch';
import { useBilling } from '@/hooks/useBillingContext';
import { usePlanSelection } from '@/hooks/usePlanSelection';

const FULL_PERCENTAGE = 100;
const MINIMUM_DISCOUNT = 0;

const DEFAULTS = {
  sectionDetails: 'bg-white',
  showPromo: false,
  hideBillingController: false,
};

interface PricingSectionWrapperProps {
  textContent: any;
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

const calculateDiscountPercentage = (decimalValue?: number) => {
  if (!decimalValue || decimalValue <= 0) return undefined;
  const discountPercentage = FULL_PERCENTAGE - decimalValue;
  return discountPercentage > MINIMUM_DISCOUNT ? discountPercentage : undefined;
};

const formatDiscountLabel = (label: string, discountValue: number) => {
  return label.replace('{{discount}}', discountValue.toString());
};

const HotLabel = ({ textContent, discountValue }) => {
  if (!discountValue || discountValue <= MINIMUM_DISCOUNT) {
    return null;
  }

  return (
    <span className="flex rounded-sm bg-neutral-37 px-1 py-0.5 text-xl font-semibold text-primary">
      {formatDiscountLabel(textContent.hotLabel, discountValue)} 🔥
    </span>
  );
};

const PricingHeader = ({ textContent, discountValue, className = '' }) => (
  <div
    className={`flex flex-col items-center justify-center gap-4 text-center lg:flex-row ${className}`}
    id="priceTable"
  >
    <p className="text-30 font-semibold text-gray-100 lg:text-3xl">{textContent.planTitles.header}</p>
    <HotLabel textContent={textContent} discountValue={discountValue} />
  </div>
);

export const PricingSectionWrapper = ({
  textContent,
  products,
  lang,
  loadingCards,
  hidePlanSelectorAndSwitch,
  hideBusinessSelector,
  hideBusinessCards,
  hidePlanSelectorComponent,
  sectionDetails = DEFAULTS.sectionDetails,
  backgroundGradientColor,
  lifetimeCoupons,
  hideSwitchSelector,
  popularPlanBySize,
  decimalDiscount,
  isFamilyPage,
  hideFeatures,
  onCheckoutButtonClicked,
  onBusinessPlansSelected,
  darkMode,
  isAnnual,
  showPromo = DEFAULTS.showPromo,
  isAffiliate,
  hideBillingController = DEFAULTS.hideBillingController,
  hideFreeCard,
  startIndividualPlansFromInterval = Interval.Lifetime,
  startBusinessPlansFromInterval = Interval.Year,
  startFromPlan = 'Lifetime',
  startFromStorage = 'Premium',
  startFromBusinessStorage = 'Pro',
  handlePageNameUpdate,
}: PricingSectionWrapperProps): JSX.Element => {
  // Intentar usar el contexto, si no existe usar estado local
  const billingContext = useBilling();

  // Siempre ejecutar el hook local (reglas de hooks)
  const localPlanSelection = usePlanSelection(
    startFromPlan,
    startFromStorage,
    startFromBusinessStorage,
    startIndividualPlansFromInterval,
    startBusinessPlansFromInterval,
    handlePageNameUpdate,
  );

  // Usar contexto si existe, sino usar estado local
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
  } = billingContext || localPlanSelection;

  const actualDiscountValue = calculateDiscountPercentage(decimalDiscount?.individuals || decimalDiscount?.business);

  const commonPricingProps = {
    textContent,
    lang,
    billingFrequency,
    businessBillingFrequency,
    lifetimeCoupons,
    isFamilyPage,
    decimalDiscount: {
      subscriptions: decimalDiscount?.individuals,
      lifetime: decimalDiscount?.lifetime,
      business: decimalDiscount?.business,
    },
    products,
    popularPlanBySize,
    hideBusinessSelector,
    hidePlanSelectorComponent,
    hideBusinessCards,
    hidePlanSelectorAndSwitch,
    loadingCards,
    activeSwitchPlan,
    onCheckoutButtonClicked,
    onPlanTypeChange,
    onBusinessPlansSelected,
    darkMode,
    isAnnual,
    hideFeatures,
    showPromo,
    isAffiliate,
    businessStorageSelected: activeBusinessStoragePlan,
    onBusinessStorageChange,
    hideFreeCard,
  };

  return (
    <section
      className={`overflow-hidden lg:px-5 ${sectionDetails}`}
      id="billingButtons"
      style={{ background: backgroundGradientColor }}
    >
      <div className="hidden flex-col items-center gap-16 lg:flex">
        <PricingHeader textContent={textContent} discountValue={actualDiscountValue} />

        <PricingSection
          {...commonPricingProps}
          hideSwitchSelector={hideSwitchSelector}
          onIndividualSwitchToggled={onIndividualSwitchToggled}
          onBusinessSwitchToggled={onBusinessSwitchToggled}
          isMonthly
        />
      </div>

      <div className="flex flex-col items-center gap-6 py-10 lg:hidden">
        <PricingHeader textContent={textContent} discountValue={actualDiscountValue} className="flex-col" />

        <PricingSectionForMobile
          {...commonPricingProps}
          onStorageChange={onStorageChange}
          storageSelected={activeStoragePlan}
          hideBillingController={hideBillingController}
          onIndividualSwitchToggled={onIndividualSwitchToggled}
          onBusinessSwitchToggled={onBusinessSwitchToggled}
        />
      </div>
    </section>
  );
};
