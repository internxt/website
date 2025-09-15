import { PricingText } from '@/assets/types/pricing';
import { CheckCircle, XCircle } from '@phosphor-icons/react';
import { Interval, ProductsDataProps } from '@/services/stripe.service';
import { useState } from 'react';
import CustomPlanSelector from './CustomPlanSelector';

interface ComparisonTableProps {
  textContent: PricingText['ComparisonTable'];
  products: ProductsDataProps | undefined;
  onCheckoutButtonClicked: (planId: string, isCheckoutForLifetime: boolean) => void;
  billingFrequency: any;
  decimalDiscount: any;
  currencyValue: any;
}

export default function ComparisonTableSection({
  textContent,
  onCheckoutButtonClicked,
  products,
  billingFrequency,
  decimalDiscount,
  currencyValue,
}: Readonly<ComparisonTableProps>): JSX.Element {
  const [selectedPlanA, setSelectedPlanA] = useState(textContent.plans[0].id);
  const [selectedPlanB, setSelectedPlanB] = useState(textContent.plans[textContent.plans.length - 1].id);

  const currency = currencyValue === 'eur' ? '€' : '$';
  const billingText = billingFrequency === Interval.Year ? textContent.billedAnnualy : textContent.billedOnce;
  const isLifetime = billingFrequency === Interval.Lifetime;

  const getPlanPrice = (planOrder: number) => {
    const price = products?.individuals[billingFrequency][planOrder].price * (decimalDiscount / 100);
    return price?.toFixed(0);
  };

  const getPlanPriceId = (planOrder: number) => {
    return products?.individuals[billingFrequency][planOrder].priceId ?? '';
  };

  const getPlanByIdAndGetPrice = (planId: string) => {
    const plan = textContent.plans.find((p) => p.id === planId);
    return plan ? getPlanPrice(plan.order) : '0.00';
  };

  const getPlanByIdAndGetPriceId = (planId: string) => {
    const plan = textContent.plans.find((p) => p.id === planId);
    return plan ? getPlanPriceId(plan.order) : '';
  };

  const isLastColumn = (index: number) => index === textContent.plans.length - 1;
  const isSecondToLastColumn = (index: number) => index === textContent.plans.length - 2;
  const isLastCategory = (index: number) => index === textContent.categories.length - 1;
  const isLastFeature = (categoryFeatures: any[], featureIndex: number) => featureIndex === categoryFeatures.length - 1;

  const getHeaderStyles = (planIndex: number) => {
    return `items-start p-6 text-start sticky top-[60px] z-10 ${
      isLastColumn(planIndex)
        ? 'rounded-2xl border-x-[1px] border-t-[1px] border-neutral-25 bg-neutral-17 shadow-lg'
        : 'bg-neutral-16'
    }`;
  };

  const getButtonStyles = (planIndex: number) => {
    return `${
      isLastColumn(planIndex)
        ? 'bg-primary text-white hover:bg-primary-dark'
        : 'border-primary bg-transparent text-primary hover:bg-gray-1'
    } flex h-[48px] w-[270px] items-center justify-center rounded-md border-[1.5px] lg:w-[340px]`;
  };

  const getCategoryRowStyles = (planIndex: number, categoryIndex: number) => {
    return `h-[72px] ${
      isLastColumn(planIndex)
        ? `border-[1px] border-neutral-25 bg-neutral-17 shadow-lg`
        : 'border-y-[1px] border-neutral-25 p-6 text-xl font-medium text-gray-95'
    }`;
  };

  const getSpecialFeatureStyles = (planIndex: number, categoryIndex: number) => {
    let baseStyles = 'px-6 py-4';

    if (isLastColumn(planIndex)) {
      baseStyles += ' border-x-[1px] border-neutral-25 bg-neutral-17 shadow-lg';
      if (isLastCategory(categoryIndex)) {
        baseStyles += ' rounded-br-16';
      }
    } else if (isSecondToLastColumn(planIndex)) {
      baseStyles += ' border-x-[1px] border-neutral-25';
    }

    return baseStyles;
  };

  const getRegularFeatureStyles = (planIndex: number, categoryIndex: number, category: any, featureIndex: number) => {
    let baseStyles = 'px-6 py-4';

    if (isLastColumn(planIndex)) {
      baseStyles += ' border-neutral-25 bg-neutral-17 shadow-lg';
      if (isLastCategory(categoryIndex) && isLastFeature(category.features, featureIndex)) {
        baseStyles += ' rounded-b-16 border-[1px] border-neutral-25';
      }
    } else if (isSecondToLastColumn(planIndex)) {
      baseStyles += ' border-[1px] border-neutral-25';
    }

    return baseStyles;
  };

  const renderFeatureContent = (feature: any, categoryName: string, isAvailable: boolean) => {
    const showIcon = categoryName !== 'Storage';
    const Icon = isAvailable ? CheckCircle : XCircle;
    const iconColor = isAvailable ? 'text-primary' : 'text-gray-95/50';
    const textColor = isAvailable ? 'text-gray-95' : 'text-gray-95/50';
    const fillColor = isAvailable ? 'fill' : 'regular';

    return (
      <div className="flex flex-row gap-2">
        {showIcon && (
          <>
            <Icon height={24} width={24} className={`${iconColor} hidden lg:flex`} weight={fillColor} />
            <Icon height={20} width={20} className={`${iconColor} flex shrink-0 lg:hidden`} weight={fillColor} />
          </>
        )}
        <p
          className={`${
            categoryName === 'Storage' ? 'whitespace-nowrap' : ''
          } text-sm font-normal lg:text-base ${textColor}`}
        >
          {feature.name}
        </p>
      </div>
    );
  };

  const renderMobileFeatureContent = (planId: string, category: any) => {
    if (category.name === 'Storage' || category.name === 'VPN') {
      const availableFeature = category.features.find((feature: any) => feature.avalability[planId]);
      if (availableFeature) {
        return renderFeatureContent(availableFeature, category.name, true);
      }
    } else {
      return category.features.map((feature: any, index: number) => (
        <div key={`${feature.id}-${index}`} className="mb-2 last:mb-0">
          {renderFeatureContent(feature, category.name, feature.avalability[planId])}
        </div>
      ));
    }
    return null;
  };

  return (
    <section
      className="flex h-min w-full flex-col items-center py-10 lg:h-min lg:gap-16 lg:py-20"
      style={{ background: 'linear-gradient(180deg, #F4F8FF 0%, #FFFFFF 100%)' }}
    >
      <p className="text-30 font-bold text-gray-95 lg:text-3xl">{textContent.title}</p>

      <div className="hidden h-min w-full justify-center lg:flex lg:px-10 lg:py-9 xl:px-32 3xl:px-80">
        <table>
          <thead>
            <tr>
              {textContent.plans.map((plan, planIndex) => (
                <th key={plan.id} className={getHeaderStyles(planIndex)}>
                  <div className="flex flex-col gap-6">
                    <p className="text-4xl font-semibold text-gray-95">{plan.name}</p>
                    <span className="flex flex-row gap-2">
                      <p className="flex text-xl font-bold text-gray-95">
                        {currency}
                        {getPlanPrice(plan.order)}
                      </p>
                      <p className="text-lg font-normal text-gray-55">{billingText}</p>
                    </span>
                    <button
                      onClick={() => onCheckoutButtonClicked(getPlanPriceId(plan.order), isLifetime)}
                      className={getButtonStyles(planIndex)}
                    >
                      <p className="text-base font-medium">{textContent.cta}</p>
                    </button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {textContent.categories.map((category, categoryIndex) => (
              <>
                <tr key={`category-${categoryIndex}`}>
                  {textContent.plans.map((plan, planIndex) => (
                    <td key={`category-${plan.id}`} className={getCategoryRowStyles(planIndex, categoryIndex)}>
                      {planIndex === 0 ? category.name : undefined}
                    </td>
                  ))}
                </tr>

                {category.name === 'Storage' || category.name === 'VPN' ? (
                  <tr key={`special-${categoryIndex}`}>
                    {textContent.plans.map((plan, planIndex) => (
                      <td key={`special-${plan.id}`} className={getSpecialFeatureStyles(planIndex, categoryIndex)}>
                        {category.features
                          .filter((feature) => feature.avalability[plan.id])
                          .map((feature) => (
                            <div key={feature.id}>{renderFeatureContent(feature, category.name, true)}</div>
                          ))}
                      </td>
                    ))}
                  </tr>
                ) : (
                  category.features.map((feature, featureIndex) => (
                    <tr
                      key={`${category.name}-${feature.id}-${featureIndex}`}
                      className={`border-y-[1px] border-neutral-25 ${featureIndex === 0 ? 'border-t-[1px]' : ''}`}
                    >
                      {textContent.plans.map((plan, planIndex) => (
                        <td
                          key={`${feature.id}-${plan.id}`}
                          className={getRegularFeatureStyles(planIndex, categoryIndex, category, featureIndex)}
                        >
                          {renderFeatureContent(feature, category.name, feature.avalability[plan.id])}
                        </td>
                      ))}
                    </tr>
                  ))
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>

      <div className="w-full px-4 lg:hidden">
        <div className="sticky top-0 z-10 grid grid-cols-2 gap-0">
          <CustomPlanSelector
            plans={textContent.plans}
            selectedPlan={selectedPlanA}
            onPlanChange={setSelectedPlanA}
            currency={currency}
            getPlanPrice={getPlanByIdAndGetPrice}
            billingText={billingText}
            ctaText={textContent.cta}
            onCheckoutClick={() => onCheckoutButtonClicked(getPlanByIdAndGetPriceId(selectedPlanA), isLifetime)}
            isLeftColumn={true}
          />

          <CustomPlanSelector
            plans={textContent.plans}
            selectedPlan={selectedPlanB}
            onPlanChange={setSelectedPlanB}
            currency={currency}
            getPlanPrice={getPlanByIdAndGetPrice}
            billingText={billingText}
            ctaText={textContent.cta}
            onCheckoutClick={() => onCheckoutButtonClicked(getPlanByIdAndGetPriceId(selectedPlanB), isLifetime)}
            isLeftColumn={false}
          />
        </div>

        <div>
          {textContent.categories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="grid grid-cols-2">
                <div className="border border-y-[1px] border-neutral-25 p-3">
                  <h3 className="font-medium text-gray-95">{category.name}</h3>
                </div>
                <div className="border border-y-[1px] border-neutral-25 p-3"></div>
              </div>
              <div className="grid grid-cols-2">
                <div className="min-h-[40px] items-center border border-neutral-25 p-3">
                  {renderMobileFeatureContent(selectedPlanA, category)}
                </div>
                <div className="min-h-[40px] items-center justify-center border border-neutral-25 p-3">
                  {renderMobileFeatureContent(selectedPlanB, category)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
