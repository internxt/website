import { Interval, ProductsDataProps } from '@/components/services/stripe.service';
import Header from '../Header';
import { PlanSelector, SwitchButtonOptions } from './components/PlanSwitch';
import { SwitchComponent } from './components/Switch';
import { Transition } from '@headlessui/react';
import CardSkeleton from '@/components/components/CardSkeleton';
import FreePlanCard from '@/components/prices/FreePlanCard';
import { PriceCard } from './PriceCard';
import { Detective, FolderLock } from '@phosphor-icons/react';
import OpenSource from '/public/icons/open-source.svg';

interface PriceTableProps {
  textContent: Record<string, any>;
  products: ProductsDataProps | undefined;
  loadingCards: boolean;
  billingFrequency: Interval;
  activeSwitchPlan: SwitchButtonOptions;
  lang: string;
  hideFreeCard?: boolean;
  hidePlanSelectorAndSwitch?: boolean;
  decimalDiscountForIndividualPlans?: number;
  decimalDiscountForBusinessPlans?: number;
  backgroundColorComponent?: string;
  onPlanTypeChange: (activeSwitchPlan: SwitchButtonOptions, interval: Interval) => void;
  onIndividualSwitchToggled: (interval: Interval) => void;
  onCheckoutButtonClicked: (planId: string) => void;
}

export const PricingSection = ({
  textContent,
  products,
  loadingCards,
  activeSwitchPlan,
  billingFrequency,
  decimalDiscountForIndividualPlans,
  decimalDiscountForBusinessPlans,
  hideFreeCard,
  hidePlanSelectorAndSwitch,
  lang,
  backgroundColorComponent = 'bg-white',
  onPlanTypeChange,
  onIndividualSwitchToggled,
  onCheckoutButtonClicked,
}: PriceTableProps): JSX.Element => {
  const individualPlansTitle =
    textContent.planTitles.homePage ??
    (billingFrequency === Interval.Lifetime ? textContent.planTitles.lifetime : textContent.planTitles.individuals);
  const businessTitle = textContent.planTitles.business;

  const isIndividual = activeSwitchPlan === 'Individuals' || activeSwitchPlan === 'Lifetime';
  const isBusiness = activeSwitchPlan === 'Business';
  const showSwitchComponent = activeSwitchPlan === 'Individuals' || activeSwitchPlan === 'Business';

  const title = () => {
    if (isIndividual) {
      return individualPlansTitle;
    } else {
      return businessTitle;
    }
  };

  const features = [
    {
      icon: FolderLock,
      text: textContent.features.endToEnd,
    },
    {
      icon: OpenSource,
      text: textContent.features.openSource,
    },
    {
      icon: Detective,
      text: textContent.features.anonymousAccount,
    },
  ];

  return (
    <section className={`overflow-hidden py-20 px-5 ${backgroundColorComponent}`}>
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4 text-center" id="priceTable">
          <Header maxWidth="max-w-4xl">{title()}</Header>
          <p className="w-full max-w-3xl text-center text-xl text-gray-80">
            {!isIndividual ? `${textContent.businessDescription}` : `${textContent.planDescription}`}
          </p>
        </div>
        <div className={`${hidePlanSelectorAndSwitch ? 'hidden' : 'flex'} flex-col items-center space-y-9`}>
          {/* Switch buttons (Individual plans | Lifetime plans | Business) */}
          <PlanSelector
            textContent={textContent}
            activeSwitchPlan={activeSwitchPlan}
            onPlanTypeChange={onPlanTypeChange}
          />

          {/* Switch buttons for Individual plans (Monthly | Annually) */}
          <SwitchComponent
            textContent={textContent}
            show={showSwitchComponent}
            billedFrequency={billingFrequency}
            handleOnSwitchIsToggled={onIndividualSwitchToggled}
            labelDiscount=""
            showLabelDiscount={false}
          />
        </div>

        <Transition
          show={isIndividual && loadingCards}
          enter="transition duration-500 ease-out"
          enterFrom="scale-95 translate-y-20 opacity-0"
          enterTo="scale-100 translate-y-0 opacity-100"
        >
          <div className="flex flex-row flex-wrap items-end justify-center justify-items-center p-6 py-14">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <CardSkeleton key={i} />
              ))}
          </div>
        </Transition>

        <Transition
          show={isIndividual && !loadingCards}
          enter="transition duration-500 ease-out"
          enterFrom="scale-95 translate-y-20 opacity-0"
          enterTo="scale-100 translate-y-0 opacity-100"
          className="flex w-max flex-col gap-4"
        >
          <div className="content flex flex-row flex-wrap items-end justify-center justify-items-center">
            {products?.individuals &&
              products.individuals[billingFrequency].map((product) => (
                <PriceCard
                  product={product}
                  onCheckoutButtonClicked={onCheckoutButtonClicked}
                  label={product.storage}
                  key={product.storage}
                  popular={product.storage === '10TB'}
                  decimalDiscountValue={decimalDiscountForIndividualPlans}
                  lang={lang}
                />
              ))}
          </div>

          {!hideFreeCard ? (
            <div id="freeAccountCard" className="content flex w-full pb-10 md:pb-0">
              <FreePlanCard textContent={textContent.freePlanCard} />
            </div>
          ) : undefined}
        </Transition>

        {/* Business plans */}
        <Transition
          show={isBusiness}
          enter="transition duration-500 ease-out"
          enterFrom="scale-95 translate-y-20 opacity-0"
          enterTo="scale-100 translate-y-0 opacity-100"
        >
          <div className="content flex flex-row flex-wrap items-end justify-center justify-items-center">
            {products?.business &&
              products.business[Interval.Year].map((product) => (
                <PriceCard
                  product={product}
                  onCheckoutButtonClicked={onCheckoutButtonClicked}
                  productCardPlan="business"
                  label={product.storage}
                  key={product.storage}
                  popular={product.storage === '10TB'}
                  decimalDiscountValue={decimalDiscountForBusinessPlans}
                  lang={lang}
                />
              ))}
          </div>
        </Transition>
        <div className="flex flex-col justify-center space-y-8 md:flex-row md:space-y-0 md:space-x-32 md:pt-10">
          {features.map((feature) => (
            <div key={feature.text} className="flex flex-row items-center space-x-3">
              <feature.icon size={40} className="text-primary md:pb-0" />
              <p className="text-xl font-medium text-gray-80">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
