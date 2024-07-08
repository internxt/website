import { Interval, ProductsDataProps } from '@/components/services/stripe.service';
import Header from '../Header';
import { PlanSwitch } from './components/PlanSwitch';
import { SwitchComponent } from './components/Switch';
import { Transition } from '@headlessui/react';
import CardSkeleton from '@/components/components/CardSkeleton';
import PriceCard from '@/components/prices/PriceCard';
import FreePlanCard from '@/components/prices/FreePlanCard';
import BusinessBanner from '@/components/banners/BusinessBanner';

interface PriceTableProps {
  textContent: Record<string, any>;
  products: ProductsDataProps;
  loadingCards: boolean;
  isIndividual: boolean;
  isSubscription: boolean;
  isLifetime: boolean;
  billingFrequency: Interval;
  currencyValue: string;
  hideFreeCard: boolean;
  coupons: Record<'lifetime' | 'subscription', any>;
  lang: string;
  onPlanTypeChange: () => void;
  discountForPrice?: number;
  backgroundColorComponent?: string;
}

export const PricingSection = ({
  textContent,
  products,
  loadingCards,
  isIndividual,
  isSubscription,
  isLifetime,
  billingFrequency,
  onPlanTypeChange,
  discountForPrice,
  currencyValue,
  hideFreeCard,
  coupons,
  lang,
  backgroundColorComponent = 'bg-white',
}: PriceTableProps): JSX.Element => {
  const banner = require('@/assets/lang/en/banners.json');
  return (
    <section className={`overflow-hidden py-20 px-5 ${backgroundColorComponent}`}>
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-10 text-center" id="priceTable">
          <Header maxWidth="max-w-4xl">{textContent.title}</Header>
          <p className="mt-4 w-full max-w-3xl text-center text-xl text-gray-80">
            {!isIndividual && lang === 'en' ? `${textContent.businessDescription}` : `${textContent.planDescription}`}
          </p>
        </div>
        <div className="flex flex-col items-center space-y-9">
          {/* Switch buttons (Individual plans | Lifetime plans | Business) */}
          <PlanSwitch textContent={textContent.PlanSwitch} activeSwitchPlan="Individuals" onPlanTypeChange={() => {}} />

          {/* Switch buttons for Individual plans (Monthly | Annually) */}
          <SwitchComponent
            textContent={textContent.SwitchComponent}
            billedFrequency={Interval.Year}
            handleOnSwitchIsEnabled={() => {}}
            isIndividualSwitchEnabled
            labelDiscount=""
            showLabelDiscount
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
              .map((n, i) => (
                <CardSkeleton />
              ))}
          </div>
        </Transition>

        <Transition
          show={isSubscription && !loadingCards}
          enter="transition duration-500 ease-out"
          enterFrom="scale-95 translate-y-20 opacity-0"
          enterTo="scale-100 translate-y-0 opacity-100"
        >
          <div className="content flex flex-row flex-wrap items-end justify-center justify-items-center p-4">
            {products?.individuals?.[billingFrequency] &&
              products.individuals[billingFrequency].map((product) => (
                <PriceCard
                  storage={product.storage}
                  planType="individual"
                  key={product.storage}
                  cta={['default', product.priceId]}
                  price={product.price}
                  billingFrequency={billingFrequency}
                  popular={product.storage === '10TB'}
                  priceBefore={discountForPrice ? Number((product.price * discountForPrice).toFixed(2)) : undefined}
                  lang={lang}
                  coupon={coupons.subscription}
                  currencyValue={currencyValue}
                />
              ))}
          </div>

          {!hideFreeCard ? (
            <div id="freeAccountCard" className="content co-coupons.subscription flex w-full pb-10 md:pb-0">
              <FreePlanCard textContent={textContent.freePlanCard} />
            </div>
          ) : undefined}
        </Transition>

        {/* Lifetime cards */}
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
