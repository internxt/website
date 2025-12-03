import { Interval, ProductsDataProps } from '@/services/stripe.service';
import { PricingSection } from './PricingSection';
import { SwitchButtonOptions, SwitchStorageOptions } from './components/PlanSelector';
import { PromoCodeProps } from '@/lib/types';
import { ReactNode } from 'react';
import { PricingSectionForMobile } from './PricingSectionForMobile';
import { SwitchStorageBusinessOptions } from './components/Switch';
import { usePlanSelection } from '@/hooks/usePlanSelection';
import { CheckCircle } from '@phosphor-icons/react';

const FULL_PERCENTAGE = 100;
const MINIMUM_DISCOUNT = 0;

const DEFAULTS = {
  sectionDetails: 'bg-white',
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
  couponCodeName?: string;
  onCheckoutButtonClicked: (planId: string, isCheckoutForLifetime: boolean, interval: string, storage: string) => void;
  handlePageNameUpdate?: (pageName: string) => void;
  onBusinessPlansSelected?: (isBusiness: boolean) => void;
  CustomDescription?: ReactNode;
  isBrave?: boolean;
  isAnnual?: boolean;
  hideFeatures?: boolean;
  showPromo?: boolean;
  isAffiliate?: boolean;
  hideBillingController?: boolean;
  overrideBillingFrequency?: Interval;
  overrideBusinessBillingFrequency?: Interval;
  overrideActiveSwitchPlan?: SwitchButtonOptions;
  overrideActiveStoragePlan?: SwitchStorageOptions;
  overrideActiveBusinessStoragePlan?: SwitchStorageBusinessOptions;
  overrideOnPlanTypeChange?: (plan: SwitchButtonOptions) => void;
  overrideOnStorageChange?: (storage: SwitchStorageOptions) => void;
  overrideOnBusinessStorageChange?: (storage: SwitchStorageBusinessOptions) => void;
  overrideOnIndividualSwitchToggled?: (interval: Interval) => void;
  overrideOnBusinessSwitchToggled?: (interval: Interval) => void;
  differentRecommended?: boolean;
}

const calculateDiscountPercentage = (decimalValue?: number) => {
  if (!decimalValue || decimalValue <= 0) return undefined;
  const discountPercentage = FULL_PERCENTAGE - decimalValue;
  return discountPercentage > MINIMUM_DISCOUNT ? discountPercentage : undefined;
};

const formatDiscountLabel = (label: string, discountValue: number) => {
  return label.replace('{{discount}}', discountValue.toString());
};

const couponNameLabel = (label: string, couponName: string) => {
  return label.replace('{{coupon}}', `'${couponName}'`);
};

const HotLabel = ({ textContent, discountValue, darkMode }) => {
  if (!discountValue || discountValue <= MINIMUM_DISCOUNT || !textContent?.hotLabel) {
    return null;
  }

  return (
    <span
      className={`flex rounded-sm ${
        darkMode ? 'bg-purple-100 text-purple-8' : 'bg-neutral-37 text-primary'
      } px-1 py-0.5 text-xl font-semibold `}
    >
      {formatDiscountLabel(textContent.hotLabel, discountValue)} ❄️
    </span>
  );
};
const PricingHeader = ({ textContent, discountValue, className = '', couponCodeName, darkMode }) => (
  <div className={`flex flex-col items-center gap-4 text-center lg:flex-row ${className}`} id="priceTable">
    <p className={`text-30 font-semibold ${darkMode ? 'text-white-95' : 'text-gray-100'} lg:text-3xl`}>
      {textContent.planTitles.header}
    </p>
    <div className={couponCodeName ? 'hidden lg:block' : ''}>
      <HotLabel textContent={textContent} discountValue={discountValue} darkMode={darkMode} />
    </div>
  </div>
);

const CouponCodeHeader = ({ textContent, couponCode }) => (
  <div
    className={`flex w-min flex-row items-center justify-center gap-1.5 whitespace-nowrap rounded-lg bg-green-110 p-3 text-center shadow-lg`}
  >
    <CheckCircle className="text-green-1" weight="fill" />
    <p className="text-sm font-medium text-gray-95 lg:text-base">
      {couponNameLabel(textContent.discountLabel, couponCode)}
    </p>
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
  showPromo,
  isAffiliate,
  hideBillingController = DEFAULTS.hideBillingController,
  hideFreeCard,
  startIndividualPlansFromInterval = Interval.Lifetime,
  startBusinessPlansFromInterval = Interval.Year,
  startFromPlan = 'Lifetime',
  startFromStorage = 'Premium',
  startFromBusinessStorage = 'Pro',
  handlePageNameUpdate,
  couponCodeName,
  overrideBillingFrequency,
  overrideBusinessBillingFrequency,
  overrideActiveSwitchPlan,
  overrideActiveStoragePlan,
  overrideActiveBusinessStoragePlan,
  overrideOnPlanTypeChange,
  overrideOnStorageChange,
  overrideOnBusinessStorageChange,
  overrideOnIndividualSwitchToggled,
  overrideOnBusinessSwitchToggled,
  differentRecommended,
}: PricingSectionWrapperProps): JSX.Element => {
  const localPlanSelection = usePlanSelection(
    startFromPlan,
    startFromStorage,
    startFromBusinessStorage,
    startIndividualPlansFromInterval,
    startBusinessPlansFromInterval,
    handlePageNameUpdate,
  );
  const activeSwitchPlan = overrideActiveSwitchPlan ?? localPlanSelection.activeSwitchPlan;
  const activeStoragePlan = overrideActiveStoragePlan ?? localPlanSelection.activeStoragePlan;
  const activeBusinessStoragePlan = overrideActiveBusinessStoragePlan ?? localPlanSelection.activeBusinessStoragePlan;
  const billingFrequency = overrideBillingFrequency ?? localPlanSelection.billingFrequency;
  const businessBillingFrequency = overrideBusinessBillingFrequency ?? localPlanSelection.businessBillingFrequency;
  const onPlanTypeChange = overrideOnPlanTypeChange ?? localPlanSelection.onPlanTypeChange;
  const onStorageChange = overrideOnStorageChange ?? localPlanSelection.onStorageChange;
  const onBusinessStorageChange = overrideOnBusinessStorageChange ?? localPlanSelection.onBusinessStorageChange;
  const onIndividualSwitchToggled = overrideOnIndividualSwitchToggled ?? localPlanSelection.onIndividualSwitchToggled;
  const onBusinessSwitchToggled = overrideOnBusinessSwitchToggled ?? localPlanSelection.onBusinessSwitchToggled;

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
    differentRecommended,
  };

  return (
    <section
      className={`overflow-hidden lg:px-5 ${sectionDetails}`}
      id="billingButtons"
      style={{ background: backgroundGradientColor }}
    >
      <div className="hidden flex-col items-center gap-16 lg:flex">
        <div className=" flex h-min flex-col items-center justify-center gap-6">
          <PricingHeader
            textContent={textContent}
            discountValue={actualDiscountValue}
            couponCodeName={couponCodeName}
            darkMode={darkMode}
          />
          {couponCodeName && <CouponCodeHeader textContent={textContent} couponCode={couponCodeName} />}
        </div>

        <PricingSection
          {...commonPricingProps}
          hideSwitchSelector={hideSwitchSelector}
          onIndividualSwitchToggled={onIndividualSwitchToggled}
          onBusinessSwitchToggled={onBusinessSwitchToggled}
          isMonthly
          darkMode={darkMode}
          differentRecommended={differentRecommended}
          showPromo={showPromo}
        />
      </div>

      <div className="flex flex-col items-center gap-6 py-10 lg:hidden">
        <div className=" flex h-min flex-col items-center justify-center gap-6">
          <PricingHeader
            textContent={textContent}
            discountValue={actualDiscountValue}
            couponCodeName={couponCodeName}
            darkMode={darkMode}
          />
          {couponCodeName && <CouponCodeHeader textContent={textContent} couponCode={couponCodeName} />}
        </div>

        <PricingSectionForMobile
          {...commonPricingProps}
          onStorageChange={onStorageChange}
          storageSelected={activeStoragePlan}
          hideBillingController={hideBillingController}
          onIndividualSwitchToggled={onIndividualSwitchToggled}
          onBusinessSwitchToggled={onBusinessSwitchToggled}
          darkMode={darkMode}
          showPromo={showPromo}
        />
      </div>
    </section>
  );
};
