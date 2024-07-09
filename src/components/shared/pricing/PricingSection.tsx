import { Interval, ProductsDataProps } from '@/components/services/stripe.service';
import Header from '../Header';
import { PlanSelector } from './components/PlanSwitch';
import { SwitchComponent } from './components/Switch';
import { Transition } from '@headlessui/react';
import CardSkeleton from '@/components/components/CardSkeleton';
import FreePlanCard from '@/components/prices/FreePlanCard';
import BusinessBanner from '@/components/banners/BusinessBanner';
import { PriceCard } from './PriceCard';
import { SwitchButtonOptions } from '@/components/prices/PriceTable';

interface PriceTableProps {
  textContent: Record<string, any>;
  products: ProductsDataProps | undefined;
  loadingCards: boolean;
  billingFrequency: Interval;
  activeSwitchPlan: SwitchButtonOptions;
  hideFreeCard: boolean;
  lang: string;
  decimalDiscountForPrice?: number;
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
  decimalDiscountForPrice,
  hideFreeCard,
  lang,
  backgroundColorComponent = 'bg-white',
  onPlanTypeChange,
  onIndividualSwitchToggled,
  onCheckoutButtonClicked,
}: PriceTableProps): JSX.Element => {
  const banner = require('@/assets/lang/en/banners.json');

  const individualPlansTitle =
    billingFrequency === Interval.Lifetime ? textContent.planTitles.lifetime : textContent.planTitles.individuals;
  const businessTitle = textContent.planTitles.business;

  const isIndividual = activeSwitchPlan !== 'Business';
  const showSwitchComponent = activeSwitchPlan === 'Individuals';

  const title = () => {
    if (isIndividual) {
      return individualPlansTitle;
    } else {
      return businessTitle;
    }
  };

  return (
    <section className={`overflow-hidden py-20 px-5 ${backgroundColorComponent}`}>
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4 text-center" id="priceTable">
          <Header maxWidth="max-w-4xl">{title()}</Header>
          <p className="w-full max-w-3xl text-center text-xl text-gray-80">
            {!isIndividual ? `${textContent.businessDescription}` : `${textContent.planDescription}`}
          </p>
        </div>
        <div className="flex flex-col items-center space-y-9">
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
          <div className="borders flex flex-row flex-wrap items-end justify-center justify-items-center">
            {products?.individuals &&
              products.individuals[billingFrequency].map((product) => (
                <PriceCard
                  product={product}
                  onCheckoutButtonClicked={onCheckoutButtonClicked}
                  label={product.storage}
                  key={product.storage}
                  popular={product.storage === '10TB'}
                  decimalDiscountValue={decimalDiscountForPrice}
                  lang={lang}
                />
              ))}
          </div>

          {!hideFreeCard ? (
            <div id="freeAccountCard" className="flex w-full pb-10 md:pb-0">
              <FreePlanCard textContent={textContent.freePlanCard} />
            </div>
          ) : undefined}
        </Transition>

        {/* Business banner */}
        <Transition
          show={!isIndividual}
          enter="transition duration-500 ease-out"
          enterFrom="scale-95 translate-y-20 opacity-0"
          enterTo="scale-100 translate-y-0 opacity-100"
        >
          <div className="content flex flex-row flex-wrap items-end justify-center justify-items-center p-6 py-14">
            <BusinessBanner textContent={banner.BusinessBanner} />
          </div>
        </Transition>
      </div>
    </section>
  );
};
