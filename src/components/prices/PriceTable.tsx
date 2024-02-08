/* eslint-disable max-len */
import { useState } from 'react';
import { Transition } from '@headlessui/react';
import PriceCard from './PriceCard';
import { Coin, CreditCard, Detective } from '@phosphor-icons/react';
import BusinessBanner from '@/components/banners/BusinessBanner';
import { Interval } from '@/components/services/stripe.service';
import CardSkeleton from '@/components/components/CardSkeleton';
import FreePlanCard from './FreePlanCard';
import Header from '@/components/shared/Header';
import useStripeProductsAndCurrency from '@/hooks/useStripeProductsAndCurrency';

interface PriceTableProps {
  setSegmentPageName: (pageName: string) => void;
  lang: string;
  textContent: any;
  setIsLifetime?: (isLifetime: boolean) => void;
}

const CurrencyValue = {
  '€': 'EUR',
  $: 'USD',
};

export default function PriceTable({ setSegmentPageName, lang, textContent }: PriceTableProps) {
  const banner = require('@/assets/lang/en/banners.json');
  const contentText = require(`@/assets/lang/${lang}/priceCard.json`);

  const [individual, setIndividual] = useState(true);
  const [billingFrequency, setBillingFrequency] = useState<Interval>(Interval.Year);
  const { products, currency, loadingCards } = useStripeProductsAndCurrency();

  const currencyValue = CurrencyValue[currency.symbol] || 'eur';

  return (
    <section id="priceTable" className="overflow-hidden bg-gray-1">
      <div className="flex flex-col items-center py-20">
        <div className="flex flex-col items-center space-y-10 pt-12">
          {/* <div className="flex flex-col px-5">
            <CampaignCtaSection textContent={CampaignContent.tableSection.ctaBanner} />
          </div> */}
          <div className="flex flex-col items-center px-5">
            <Header>{individual ? contentText.planTitles.individuals : `${contentText.planTitles.business}`}</Header>
            <p className="mt-4 w-full max-w-3xl text-center text-xl text-gray-80">
              {!individual && lang === 'en' ? `${contentText.businessDescription}` : `${contentText.planDescription}`}
            </p>
          </div>
          <div className="items center flex flex-col">
            <button
              type="button"
              className="mt-4 mb-6 cursor-pointer text-center font-medium text-primary active:text-blue-50"
              onClick={() => {
                setIndividual(!individual);
              }}
            >
              {individual ? `${contentText.changePlan.toBusiness}` : `${contentText.changePlan.toIndividuals}`}
            </button>
          </div>
        </div>
        {individual && (
          <div id="billingButtons" className="flex flex-row rounded-lg bg-cool-gray-10 p-0.5 text-sm">
            <button
              type="button"
              onClick={() => {
                setBillingFrequency(Interval.Month);
                setSegmentPageName(`Pricing ${individual ? 'Individuals' : 'Business'} Monthly`);
              }}
              className={`rounded-lg py-1.5 px-6 font-medium ${
                billingFrequency === Interval.Month ? 'bg-white text-cool-gray-80 shadow-sm' : 'text-cool-gray-50'
              }`}
            >
              {contentText.billingFrequency.monthly}
            </button>
            <button
              type="button"
              onClick={() => {
                setBillingFrequency(Interval.Year);
                setSegmentPageName(`Pricing ${individual ? 'Individuals' : 'Business'} Annually`);
              }}
              className={`rounded-lg py-1.5 px-6 font-medium ${
                billingFrequency === Interval.Year ? 'bg-white text-cool-gray-80 shadow-sm' : 'text-cool-gray-50'
              }`}
            >
              {contentText.billingFrequency.annually}
            </button>
            <button
              type="button"
              onClick={() => {
                setBillingFrequency(Interval.Lifetime);
              }}
              className={`rounded-lg py-1.5 px-6 font-medium ${
                billingFrequency === Interval.Lifetime ? 'bg-white text-cool-gray-80 shadow-sm' : 'text-cool-gray-50'
              } ${!individual && 'hidden'}`}
            >
              {contentText.billingFrequency.lifetime}
            </button>
          </div>
        )}
        {/* Loading cards */}
        <Transition
          show={individual && loadingCards}
          enter="transition duration-500 ease-out"
          enterFrom="scale-95 translate-y-20 opacity-0"
          enterTo="scale-100 translate-y-0 opacity-100"
        >
          <div className="flex flex-row flex-wrap items-end justify-center justify-items-center p-6 py-14 pb-20">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </div>
        </Transition>

        {/* Render cards */}

        <Transition
          show={individual && !loadingCards}
          enterFrom="scale-95 translate-y-20 opacity-0"
          className={'flex flex-col'}
          enterTo="scale-100 translate-y-0 opacity-100"
        >
          <div className="content flex flex-row flex-wrap items-end justify-center justify-items-center p-4 py-14">
            {products?.individuals?.[billingFrequency] &&
              Object.values(products.individuals[billingFrequency]).map((product: any) => {
                return (
                  <>
                    {billingFrequency === Interval.Lifetime ? (
                      <PriceCard
                        planType="individual"
                        key={product.storage}
                        storage={product.storage}
                        price={product.price.split('.')[0]}
                        billingFrequency={billingFrequency}
                        popular={product.storage === '5TB'}
                        cta={['checkout', product.priceId]}
                        lang={lang}
                        country={currency.symbol}
                        currency={currencyValue}
                      />
                    ) : (
                      <PriceCard
                        planType="individual"
                        key={product.storage}
                        storage={product.storage}
                        price={product.price}
                        billingFrequency={billingFrequency}
                        popular={product.storage === '5TB'}
                        cta={['checkout', product.priceId]}
                        lang={lang}
                        country={currency.symbol}
                        currency={currencyValue}
                      />
                    )}
                  </>
                );
              })}
          </div>
        </Transition>
        <div id="freeAccountCard" className="content flex w-full px-5 pb-20 md:pb-0">
          <FreePlanCard textContent={contentText.freePlanCard} />
        </div>

        <Transition
          show={!individual}
          enter="transition duration-500 ease-out"
          enterFrom="scale-95 translate-y-20 opacity-0"
          enterTo="scale-100 translate-y-0 opacity-100"
        >
          <div className="content flex flex-row flex-wrap items-end justify-center justify-items-center p-6 py-14 pb-20">
            <BusinessBanner textContent={banner.BusinessBanner} />
          </div>
        </Transition>
        <div className="flex flex-col items-center justify-center space-y-8 text-center md:flex-row md:space-y-0 md:space-x-32 md:pt-20">
          <div className="flex max-w-[183px] flex-col items-center space-y-3">
            <Coin size={40} className="text-primary" />
            <p className="text-xl font-medium text-gray-80">{textContent.featureSection.firstFeature}</p>
          </div>
          <div className="flex max-w-[183px] flex-col items-center space-y-3">
            <CreditCard size={40} className="text-primary" />
            <p className="text-xl font-medium text-gray-80">{textContent.featureSection.secondFeature}</p>
          </div>
          <div className="flex max-w-[183px] flex-col items-center space-y-3">
            <Detective size={40} className="text-primary" />
            <p className="text-xl font-medium text-gray-80">{textContent.featureSection.thirdFeature}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
