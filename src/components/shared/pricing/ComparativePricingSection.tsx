import { Interval, ProductsDataProps } from '@/services/stripe.service';
import CardSkeleton from '@/components/components/CardSkeleton';
import { PriceCard } from '@/components/shared/pricing/PriceCard';
import { HandCoins, Headset, Keyhole, CheckCircle, ArrowDown } from '@phosphor-icons/react';
import React from 'react';

const FULL_PERCENTAGE = 100;
const MINIMUM_DISCOUNT = 0;

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

const HotLabel = ({
  textContent,
  discountValue,
  darkMode,
  isValentinesMode,
}: {
  textContent: any;
  discountValue?: number;
  darkMode?: boolean;
  isValentinesMode?: boolean;
}) => {
  if (!discountValue || discountValue <= MINIMUM_DISCOUNT || !textContent?.hotLabel) {
    return null;
  }

  const labelColorClass = isValentinesMode
    ? 'flex gap-0.5 bg-pink-10 text-pink-80'
    : 'bg-neutral-37 text-primary';

  const darkModeLabelClass = darkMode
    ? 'bg-purple-100 text-purple-8'
    : labelColorClass;

  return (
    <span
      className={`flex items-center justify-center rounded-sm ${
        isValentinesMode ? labelColorClass : darkModeLabelClass
      } px-2 py-0.5 text-lg font-semibold lg:text-xl`}
    >
      {isValentinesMode ? textContent.valentinesTitle : ''}
      {formatDiscountLabel(textContent.hotLabel, discountValue)}
      {isValentinesMode ? '💘' : '🔥'}
    </span>
  );
};

const PricingHeader = ({
  textContent,
  discountValue,
  className = '',
  couponCodeName,
  darkMode,
  SectionTag,
  isValentinesMode,
  alternativeHeader,
}: {
  textContent: any;
  discountValue?: number;
  className?: string;
  couponCodeName?: string;
  darkMode?: boolean;
  SectionTag: React.ElementType;
  isValentinesMode?: boolean;
  alternativeHeader?: boolean;
}) => (
  <div
    className={`flex flex-col items-center justify-center gap-3 text-center sm:gap-4 ${
      isValentinesMode ? 'lg:flex-col' : 'lg:flex-row'
    } ${className}`}
    id="priceTable"
  >
    <SectionTag className={`text-2xl font-semibold sm:text-30 ${darkMode ? 'text-white-95' : 'text-gray-100'} lg:text-3xl`}>
      {alternativeHeader ? textContent?.planTitles?.lifetimeHeader : textContent?.planTitles?.header}
    </SectionTag>
    <div className={couponCodeName ? 'hidden lg:block' : ''}>
      <HotLabel
        textContent={textContent}
        discountValue={discountValue}
        darkMode={darkMode}
        isValentinesMode={isValentinesMode}
      />
    </div>
  </div>
);

const CouponCodeHeader = ({ textContent, couponCode }: { textContent: any; couponCode: string }) => (
  <div
    className={`flex w-auto max-w-full flex-row items-center justify-center gap-1.5 whitespace-nowrap rounded-lg bg-green-110 px-4 py-2.5 text-center shadow-lg sm:p-3`}
  >
    <CheckCircle className="h-4 w-4 shrink-0 text-green-1 sm:h-5 sm:w-5" weight="fill" />
    <p className="text-xs font-medium text-gray-95 sm:text-sm lg:text-base">
      {couponNameLabel(textContent.discountLabel, couponCode)}
    </p>
  </div>
);

interface ComparativePricingSectionProps {
  textContent: Record<string, any>;
  products: ProductsDataProps | undefined;
  loadingCards: boolean;
  lang: string;
  targetStorage?: string;
  darkMode?: boolean;
  decimalDiscount?: {
    individuals?: number;
    lifetime?: number;
  };
  couponCodeName?: string;
  isValentinesMode?: boolean;
  alternativeHeader?: boolean;
  onCheckoutButtonClicked: (
    planId: string,
    isCheckoutForLifetime: boolean,
    interval: string,
    storage: string,
  ) => void;
  hideFeatures?: boolean;
  sectionDetails?: string;
  backgroundGradientColor?: string;
  SectionTag?: React.ElementType;
}

export const ComparativePricingSection = ({
  textContent,
  products,
  loadingCards,
  lang,
  targetStorage = '5TB',
  darkMode = false,
  decimalDiscount,
  couponCodeName,
  isValentinesMode = false,
  alternativeHeader = false,
  onCheckoutButtonClicked,
  hideFeatures = false,
  sectionDetails = 'bg-white py-8 sm:py-10 lg:py-20',
  backgroundGradientColor,
  SectionTag = 'h2',
}: ComparativePricingSectionProps): JSX.Element => {
  const annualPlan = products?.individuals?.[Interval.Year]?.find(
    (product) => product.storage === targetStorage,
  );
  const lifetimePlan = products?.individuals?.[Interval.Lifetime]?.find(
    (product) => product.storage === targetStorage,
  );

  const actualDiscountValue = calculateDiscountPercentage(
    decimalDiscount?.lifetime || decimalDiscount?.individuals,
  );

  const features = [
    {
      icon: Headset,
      text: textContent?.features?.premiumSupport || '24/7 Support',
    },
    {
      icon: HandCoins,
      text: textContent?.features?.guarantee || '30-day money back guarantee',
    },
    {
      icon: Keyhole,
      text: textContent?.features?.openSource || '100% Encrypted & Open Source',
    },
  ];

  return (
    <section
      className={`overflow-hidden px-4 sm:px-6 lg:px-8 ${sectionDetails}`}
      id="billingButtons"
      style={{ background: backgroundGradientColor }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 sm:gap-12 lg:gap-16">
        <div className="flex h-min flex-col items-center justify-center gap-4 text-center sm:gap-6">
          <PricingHeader
            textContent={textContent}
            discountValue={actualDiscountValue}
            couponCodeName={couponCodeName}
            darkMode={darkMode}
            SectionTag={SectionTag}
            isValentinesMode={isValentinesMode}
            alternativeHeader={alternativeHeader}
          />
          {couponCodeName && <CouponCodeHeader textContent={textContent} couponCode={couponCodeName} />}
        </div>

        {loadingCards && (
          <div className="flex w-full flex-col items-center justify-center gap-6 py-8 sm:flex-row sm:flex-wrap sm:py-14">
            <CardSkeleton />
            <CardSkeleton />
          </div>
        )}

        {!loadingCards && (
          <div className="content flex w-full flex-col items-center justify-center gap-6 sm:gap-8 md:flex-row md:items-stretch md:justify-center">
            {annualPlan && (
              <div className="w-full max-w-sm md:w-auto md:max-w-none">
                <PriceCard
                  isCheckoutForLifetime={false}
                  product={annualPlan}
                  onCheckoutButtonClicked={onCheckoutButtonClicked}
                  label={annualPlan.storage}
                  key={`${targetStorage}-annual`}
                  popular={false}
                  productCardPlan="individuals"
                  decimalDiscountValue={decimalDiscount?.individuals}
                  lang={lang}
                  darkMode={darkMode}
                />
              </div>
            )}

            {lifetimePlan && (
              <div className="w-full max-w-sm md:w-auto md:max-w-none">
                <PriceCard
                  isCheckoutForLifetime={true}
                  product={lifetimePlan}
                  onCheckoutButtonClicked={onCheckoutButtonClicked}
                  label={lifetimePlan.storage}
                  key={`${targetStorage}-lifetime`}
                  popular={true}
                  productCardPlan="individuals"
                  decimalDiscountValue={decimalDiscount?.lifetime}
                  lang={lang}
                  darkMode={darkMode}
                />
              </div>
            )}
          </div>
        )}

        {textContent?.ctaCompare && (
          <a
            href="#comparisonTable"
            className="flex flex-row items-center gap-2 rounded-md border border-primary px-4 py-3 text-sm font-medium text-primary transition-colors hover:border-primary-dark hover:bg-neutral-20 hover:text-primary-dark sm:px-5 sm:py-4 sm:text-base"
          >
            {textContent.ctaCompare}
            <ArrowDown className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
          </a>
        )}
      </div>
      {!hideFeatures && (
          <div className="w-full pl-6 pr-4 pt-10 lg:pt-20 sm:pl-10 sm:pr-6 md:px-0 lg:px-10 xl:px-32 3xl:px-80">
            <div className="flex flex-col items-start justify-center gap-3 text-left sm:gap-4 md:flex-row md:items-start md:justify-between md:space-x-16 md:space-y-0 md:gap-0 md:text-center">
              {features.map((feature) => (
                <div key={feature.text} className="flex flex-row items-start justify-start gap-2.5 text-left md:max-w-[33%] md:flex-row md:items-start md:gap-3">
                  <feature.icon size={36} className="!h-7 !w-7 shrink-0 text-primary md:!h-[36px] md:!w-[36px] md:pb-0" />
                  <p className={`pt-[1px] text-base font-medium md:pt-[6px] md:text-xl ${darkMode ? 'text-white' : 'text-gray-80'}`}>
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
    </section>
  );
};

export default ComparativePricingSection;
