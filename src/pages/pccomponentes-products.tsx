import { useState } from 'react';
import { Switch, Transition } from '@headlessui/react';

import Layout from '@/components/layout/Layout';
import { Interval } from '@/components/services/stripe.service';
import CardSkeleton from '@/components/components/CardSkeleton';
import PriceCard from '@/components/prices/PriceCard';
import usePricing from '@/hooks/usePricing';
import { PromoCodeName } from '@/lib/types';
import { SwitchButtonOptions } from '@/components/shared/pricing/components/PlanSelector';
import { GetServerSidePropsContext } from 'next';

const ALLOWED_LANGUAGES = ['es', 'fr', 'pt-br'];

const PCComponentesProducts = ({ metatagsDescriptions, textContent, lang }): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'pricing');
  const [pageName, setPageName] = useState('Pricing Individuals Annually');
  const [activeSwitchPlan, setActiveSwitchPlan] = useState<SwitchButtonOptions>('Individuals');
  const [billingFrequency, setBillingFrequency] = useState<Interval>(Interval.Year);
  const { products, currency, currencyValue, loadingCards, coupon } = usePricing({
    couponCode: PromoCodeName.PcComponentesCoupon,
  });

  const contentText = textContent;

  const isIndividual = activeSwitchPlan !== 'Business';
  const isIndividualSwitchEnabled = billingFrequency === Interval.Year;
  const isSubscription = activeSwitchPlan === 'Individuals';
  const isLifetime = activeSwitchPlan === 'Lifetime';

  const priceForSubscriptions = (product) => {
    const priceWithDiscount = (product.price * 0.25).toString();
    if (billingFrequency !== Interval.Lifetime) {
      const firstPartOfPrice = priceWithDiscount.split('.')[0];

      const secondPartOfPrice = priceWithDiscount.split('.')[1].slice(0, 2);

      return firstPartOfPrice + '.' + secondPartOfPrice;
    } else {
      return priceWithDiscount;
    }
  };

  return (
    <Layout segmentName={pageName} title={metatags[0].title} description={metatags[0].description} lang={lang}>
      <div className="flex flex-col space-y-10">
        <div className="flex flex-col items-center space-y-9">
          {/* Switch buttons (Individual plans | Lifetime plans | Business) */}
          <div id="billingButtons" className="flex flex-row rounded-lg bg-cool-gray-10 p-0.5">
            <button
              type="button"
              onClick={() => {
                setActiveSwitchPlan('Individuals');
                setBillingFrequency(Interval.Year);
                setPageName(`Pricing Individuals ${billingFrequency}`);
              }}
              className={`rounded-lg px-6 py-0.5 font-semibold ${
                activeSwitchPlan === 'Individuals' ? 'bg-white text-cool-gray-80 shadow-sm' : 'text-cool-gray-50'
              }`}
            >
              {contentText.billingFrequency.individual}
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveSwitchPlan('Lifetime');
                setBillingFrequency(Interval.Lifetime);
                setPageName(`Pricing Individuals Lifetime`);
              }}
              className={`rounded-lg px-6 py-0.5 font-semibold ${
                activeSwitchPlan === 'Lifetime' ? 'bg-white text-cool-gray-80 shadow-sm' : 'text-cool-gray-50'
              }`}
            >
              {contentText.billingFrequency.lifetime}
            </button>
          </div>
        </div>
        {/* Skeleton cards while fetching products data */}
        <Transition
          show={isIndividual && loadingCards}
          enter="transition duration-500 ease-out"
          enterFrom="scale-95 translate-y-20 opacity-0"
          enterTo="scale-100 translate-y-0 opacity-100"
        >
          <div className="flex flex-row flex-wrap items-end justify-center justify-items-center p-6 py-14">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </div>
        </Transition>
        {/* Subscriptions cards */}
        <Transition
          show={isSubscription && !loadingCards}
          enter="transition duration-500 ease-out"
          enterFrom="scale-95 translate-y-20 opacity-0"
          enterTo="scale-100 translate-y-0 opacity-100"
        >
          <div className="content flex flex-row flex-wrap items-end justify-center justify-items-center gap-5 p-4">
            {products?.individuals?.[billingFrequency] &&
              products.individuals[billingFrequency].map((product: any) => (
                <PriceCard
                  planType="individual"
                  key={product.storage}
                  storage={product.storage}
                  price={coupon ? Number(priceForSubscriptions(product)) : product.price}
                  billingFrequency={billingFrequency}
                  popular={product.storage === '5TB'}
                  cta={['checkout', product.priceId]}
                  priceBefore={product.price}
                  lang={lang}
                  currency={currency}
                  coupon={coupon ?? undefined}
                  currencyValue={currencyValue}
                  isIframe={true}
                />
              ))}
          </div>
        </Transition>
        {/* Lifetime cards */}
        <Transition
          show={isLifetime && !loadingCards}
          enter="transition duration-500 ease-out"
          enterFrom="scale-95 translate-y-20 opacity-0"
          enterTo="scale-100 translate-y-0 opacity-100"
        >
          <div className="content flex flex-row flex-wrap items-end justify-center justify-items-center gap-4">
            {products?.individuals?.[Interval.Lifetime] &&
              products.individuals[Interval.Lifetime].map((product: any) => {
                return (
                  <PriceCard
                    planType="individual"
                    key={product.storage}
                    storage={product.storage}
                    price={product.price.split('.')[0] * 0.25}
                    priceBefore={coupon ? product.price.split('.')[0] : undefined}
                    billingFrequency={Interval.Lifetime}
                    popular={product.storage === '5TB'}
                    cta={['checkout', product.priceId]}
                    lang={lang}
                    currency={currency}
                    currencyValue={currencyValue}
                    isIframe={true}
                    coupon={coupon ?? undefined}
                  />
                );
              })}
          </div>
        </Transition>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const acceptLanguage = ctx.req.headers['accept-language'];

  const browserLang = acceptLanguage.split(',')[0].split('-')[0];

  const lang = ALLOWED_LANGUAGES.includes(browserLang) ? browserLang : 'es';

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/priceCard.json`);

  return {
    props: {
      metatagsDescriptions,
      lang,
      textContent,
    },
  };
}

export default PCComponentesProducts;
