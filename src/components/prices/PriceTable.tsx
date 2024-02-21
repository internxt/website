/* eslint-disable max-len */
import { useState } from 'react';
import { Switch, Transition } from '@headlessui/react';
import PriceCard from './PriceCard';
import { Detective, FolderSimpleLock, ShieldCheck } from '@phosphor-icons/react';
import BusinessBanner from '@/components/banners/BusinessBanner';
import { Interval } from '@/components/services/stripe.service';
import CardSkeleton from '@/components/components/CardSkeleton';
import FreePlanCard from './FreePlanCard';
import Header from '@/components/shared/Header';
import usePricing from '@/hooks/usePricing';
import CampaignCtaSection from '../lifetime/CampaignCtaSection';
import { CouponType } from '@/lib/types/types';

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

type SwitchButtonOptions = 'Individuals' | 'Lifetime' | 'Business';

export default function PriceTable({ setSegmentPageName, lang, textContent }: PriceTableProps) {
  const banner = require('@/assets/lang/en/banners.json');
  const contentText = require(`@/assets/lang/${lang}/priceCard.json`);

  const { products, currency, loadingCards, coupon } = usePricing({
    couponCode: CouponType.ValentinesCoupon,
  });
  const CampaignContent = require(`@/assets/lang/${lang}/pricing.json`);

  return (
    <section className="overflow-hidden bg-white">
      <div className="flex flex-col items-center space-y-10 py-20">
        <div className="flex flex-col items-center space-y-10 pt-12">
          <CampaignCtaSection textContent={CampaignContent.tableSection.ctaBanner} />
          <div id="priceTable" className="flex flex-col items-center px-5 text-center">
            <Header>{isIndividual ? contentText.planTitles.individuals : `${contentText.planTitles.business}`}</Header>
            <p className="mt-4 w-full max-w-3xl text-center text-xl text-gray-80">
              {!isIndividual && lang === 'en' ? `${contentText.businessDescription}` : `${contentText.planDescription}`}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-9">
          {/* Switch buttons (Individual plans | Lifetime plans | Business) */}
          <div id="billingButtons" className="flex flex-row rounded-lg bg-cool-gray-10 p-0.5 text-sm">
            <button
              type="button"
              onClick={() => {
                setActiveSwitchPlan('Individuals');
                setBillingFrequency(Interval.Year);
                setSegmentPageName(`Pricing Individuals ${billingFrequency}`);
              }}
              className={`rounded-lg py-0.5 px-6 font-medium ${
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
                setSegmentPageName(`Pricing Individuals Lifetime`);
              }}
              className={`rounded-lg py-0.5 px-6 font-medium ${
                activeSwitchPlan === 'Lifetime' ? 'bg-white text-cool-gray-80 shadow-sm' : 'text-cool-gray-50'
              }`}
            >
              {contentText.billingFrequency.lifetime}
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveSwitchPlan('Business');
                setSegmentPageName(`Pricing Business`);
              }}
              className={`rounded-lg py-0.5 px-6 font-medium ${
                activeSwitchPlan === 'Business' ? 'bg-white text-cool-gray-80 shadow-sm' : 'text-cool-gray-50'
              }`}
            >
              {contentText.billingFrequency.business}
            </button>
          </div>
          {/* Switch buttons for Individual plans (Monthly | Annually) */}
          <div className={`flex-row items-center space-x-5 ${isSubscription ? 'flex' : 'hidden'}`}>
            <div className="relative flex flex-row items-center">
              <p className="absolute right-full whitespace-nowrap pr-1.5 font-semibold text-green-dark">
                {contentText.save} 69%
              </p>
              <p
                className={`text-base font-medium ${
                  billingFrequency === Interval.Month ? 'text-gray-100' : 'text-gray-50'
                }`}
              >
                {contentText.billingFrequency.monthly}
              </p>
            </div>
            <Switch
              checked={isIndividualSwitchEnabled}
              onChange={() => {
                setBillingFrequency(isIndividualSwitchEnabled ? Interval.Month : Interval.Year);
              }}
              className={`${
                isIndividualSwitchEnabled ? 'bg-green' : 'bg-gray-10'
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span
                className={`${
                  isIndividualSwitchEnabled ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
            <div className="relative flex flex-row items-center">
              <p
                className={`text-base font-medium ${
                  billingFrequency === Interval.Year ? 'text-gray-100' : 'text-gray-50'
                }`}
              >
                {contentText.billingFrequency.annually}
              </p>
              <p className="absolute left-full whitespace-nowrap pl-1.5 font-medium text-green-dark">
                {contentText.save} 69%
              </p>
            </div>
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

        {/* Subscriptions and Lifetime cards */}
        <Transition
          show={isIndividual && !loadingCards}
          enterFrom="scale-95 translate-y-20 opacity-0"
          className={'flex flex-col'}
          enterTo="scale-100 translate-y-0 opacity-100"
        >
          <div className="content flex flex-row flex-wrap items-end justify-center justify-items-center p-4">
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
                        currency={currency}
                      />
                    ) : (
                      <PriceCard
                        planType="individual"
                        key={product.storage}
                        storage={product.storage}
                        price={parseFloat((Math.floor(parseFloat(product.price) * 31) / 100).toFixed(2))}
                        billingFrequency={billingFrequency}
                        popular={product.storage === '5TB'}
                        cta={['checkout', product.priceId]}
                        priceBefore={product.price}
                        lang={lang}
                        currency={currency}
                        coupon={coupon}
                        savePercentage={69}
                      />
                    )}
                  </>
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
        <div id="freeAccountCard" className="content flex w-full px-5">
          <FreePlanCard textContent={contentText.freePlanCard} />
        </div>

        <div className="flex flex-col justify-center space-y-8 text-center md:flex-row md:items-center md:space-y-0 md:space-x-32">
          {features.map((feature) => (
            <div key={feature.text} className="flex flex-row items-center space-x-3">
              <feature.icon size={40} className="text-primary" />
              <p className="text-xl font-medium text-gray-80">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
