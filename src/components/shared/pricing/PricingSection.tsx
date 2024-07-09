import { Interval, ProductsDataProps } from '@/components/services/stripe.service';
import Header from '../Header';
import { PlanSwitch } from './components/PlanSwitch';
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
}

// function onCheckoutButtonClicked() {
//   if (lifetimeMode === 'redeem') return onButtonClicked?.();

//   if (cta[1] === 'Free plan') {
//     goToSignUpURL();
//   } else {
//     if (isIframe) {
//       checkoutForPcComponentes({
//         planId: cta[1],
//         mode: billingFrequency === 'lifetime' ? 'payment' : 'subscription',
//         currency: currencyValue ?? 'eur',
//         couponCode: coupon ?? undefined,
//       });
//     } else {
//       checkout({
//         planId: cta[1],
//         mode: billingFrequency === 'lifetime' ? 'payment' : 'subscription',
//         currency: currencyValue ?? 'eur',
//         couponCode: coupon ?? undefined,
//       });
//     }
//   }
// }

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
}: PriceTableProps): JSX.Element => {
  const banner = require('@/assets/lang/en/banners.json');

  const individualPlansTitle =
    billingFrequency === Interval.Lifetime ? textContent.planTitles.lifetime : textContent.planTitles.individuals;
  const businessTitle = textContent.planTitles.business;

  const isIndividual = activeSwitchPlan !== 'Business';

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
            {!isIndividual && lang === 'en' ? `${textContent.businessDescription}` : `${textContent.planDescription}`}
          </p>
        </div>
        <div className="flex flex-col items-center space-y-9">
          {/* Switch buttons (Individual plans | Lifetime plans | Business) */}
          <PlanSwitch
            textContent={textContent}
            activeSwitchPlan={activeSwitchPlan}
            onPlanTypeChange={onPlanTypeChange}
          />

          {/* Switch buttons for Individual plans (Monthly | Annually) */}
          {activeSwitchPlan === 'Individuals' ? (
            <SwitchComponent
              textContent={textContent}
              billedFrequency={Interval.Year}
              handleOnSwitchIsEnabled={() => {}}
              isIndividualSwitchEnabled
              labelDiscount=""
              showLabelDiscount={false}
            />
          ) : undefined}
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
          show={!loadingCards}
          enter="transition duration-500 ease-out"
          enterFrom="scale-95 translate-y-20 opacity-0"
          enterTo="scale-100 translate-y-0 opacity-100"
        >
          <div className="content flex flex-row flex-wrap items-end justify-center justify-items-center p-4">
            {products?.individuals?.[billingFrequency] &&
              products.individuals[billingFrequency].map((product) => (
                <PriceCard
                  product={product}
                  onCheckoutButtonClicked={() => {}}
                  label={product.storage}
                  key={product.storage}
                  popular={product.storage === '10TB'}
                  decimalDiscountValue={decimalDiscountForPrice}
                  lang={lang}
                />
              ))}
          </div>

          {!hideFreeCard ? (
            <div id="freeAccountCard" className="content co-coupons.subscription flex w-full pb-10 md:pb-0">
              <FreePlanCard textContent={textContent.freePlanCard} />
            </div>
          ) : undefined}
        </Transition>

        {/* Lifetime cards
        <Transition
          show={isLifetime && !loadingCards}
          enter="transition duration-500 ease-out"
          enterFrom="scale-95 translate-y-20 opacity-0"
          enterTo="scale-100 translate-y-0 opacity-100"
        >
          <div className="content flex flex-row flex-wrap items-end justify-center justify-items-center">
            {products?.individuals?.[Interval.Lifetime] &&
              products.individuals[Interval.Lifetime].map((product) => {
                return (
                  <PriceCard
                    planType="individual"
                    key={product.storage}
                    storage={product.storage}
                    cta={['default', product.priceId]}
                    price={product.price}
                    priceBefore={discountForPrice ? Number((product.price * discountForPrice).toFixed(2)) : undefined}
                    billingFrequency={Interval.Lifetime}
                    popular={product.storage === '5TB'}
                    lang={lang}
                    currencyValue={currencyValue}
                    coupon={coupons.lifetime[product.storage]}
                  />
                );
              })}
          </div>
        </Transition> */}

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
