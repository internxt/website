/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { Switch, Transition } from '@headlessui/react';
import PriceCard from './PriceCard';
import { Detective, FolderLock } from '@phosphor-icons/react';
import BusinessBanner from '@/components/banners/BusinessBanner';
import { Interval, stripeService } from '@/components/services/stripe.service';
import CardSkeleton from '@/components/components/CardSkeleton';
import Header from '@/components/shared/Header';
import usePricing from '@/hooks/usePricing';
import OpenSource from '../../../public/icons/open-source.svg';
import FreePlanCard from './FreePlanCard';
import { PriceBannerForCampaigns } from '../lifetime/PriceBannerForCampaigns';
import { CouponType } from '@/lib/types';

interface PriceTableProps {
  setSegmentPageName: (pageName: string) => void;
  lang: string;
  textContent: any;
  couponCode?: CouponType;
  isTableInHomePage?: boolean;
  useSameCouponForAllPlans?: boolean;
  hideFreeCard?: boolean;
  discount?: number;
  switchDiscount?: number;
}

export type SwitchButtonOptions = 'Individuals' | 'Lifetime' | 'Business';

const LIFETIME_PRICES = {
  usd: {
    '2TB': 299,
    '5TB': 499,
    '10TB': 799,
  },
  eur: {
    '2TB': 249,
    '5TB': 449,
    '10TB': 749,
  },
};

export default function PriceTable({
  setSegmentPageName,
  lang,
  textContent,
  discount,
  isTableInHomePage,
  useSameCouponForAllPlans,
  hideFreeCard,
  couponCode,
  switchDiscount,
}: Readonly<PriceTableProps>) {
  const contentText = require(`@/assets/lang/${lang}/priceCard.json`);
  const CampaignContent = require(`@/assets/lang/${lang}/pricing.json`);
  const banner = require('@/assets/lang/en/banners.json');

  const { products, currency, currencyValue, coupon, loadingCards } = usePricing({
    couponCode: couponCode,
  });

  const [lifetimeCoupons, setLifetimeCoupons] = useState();
  const [billingFrequency, setBillingFrequency] = useState<Interval>(Interval.Year);
  const [activeSwitchPlan, setActiveSwitchPlan] = useState<SwitchButtonOptions>('Individuals');

  const isIndividual = activeSwitchPlan !== 'Business';
  const isBusiness = activeSwitchPlan === 'Business';
  const isIndividualSwitchEnabled = billingFrequency === Interval.Year;
  const isSubscription = activeSwitchPlan === 'Individuals';
  const isLifetime = activeSwitchPlan === 'Lifetime';
  const individualPlansTitle = isLifetime ? contentText.planTitles.lifetime : contentText.planTitles.individuals;
  const businessTitle = contentText.planTitles.business;
  const homePageTitle = contentText.planTitles.homePage;

  const title = () => {
    if (isTableInHomePage) {
      return homePageTitle;
    } else if (isIndividual) {
      return individualPlansTitle;
    } else if (isBusiness) {
      return businessTitle;
    }
  };

  useEffect(() => {
    stripeService.getLifetimeCoupons().then(setLifetimeCoupons);
  }, []);

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
    <section className="overflow-hidden bg-white">
      <div className="flex flex-col items-center space-y-10 py-24 px-5">
        {!isTableInHomePage && <PriceBannerForCampaigns textContent={CampaignContent.tableSection.ctaBanner} />}
        <div className="flex flex-col items-center space-y-10">
          <div id="priceTable" className="flex flex-col items-center text-center">
            <Header maxWidth="max-w-4xl">{title()}</Header>
            <p className="mt-4 w-full max-w-3xl text-center text-xl text-gray-80">
              {!isIndividual && lang === 'en' ? `${contentText.businessDescription}` : `${contentText.planDescription}`}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-9">
          {/* Switch buttons (Individual plans | Lifetime plans | Business) */}
          <div id="billingButtons" className="flex flex-row rounded-lg bg-cool-gray-10 p-0.5">
            <button
              type="button"
              onClick={() => {
                setActiveSwitchPlan('Individuals');
                setBillingFrequency(Interval.Year);
                setSegmentPageName(`Pricing Individuals ${billingFrequency}`);
              }}
              className={`rounded-lg py-0.5 px-6 font-semibold ${
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
              className={`rounded-lg py-0.5 px-6 font-semibold ${
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
              className={`rounded-lg py-0.5 px-6 font-semibold ${
                activeSwitchPlan === 'Business' ? 'bg-white text-cool-gray-80 shadow-sm' : 'text-cool-gray-50'
              }`}
            >
              {contentText.billingFrequency.business}
            </button>
          </div>
          {/* Switch buttons for Individual plans (Monthly | Annually) */}
          <div className={`flex-row items-start gap-5 lg:items-center ${isSubscription ? 'flex' : 'hidden'}`}>
            <p
              className={`text-base font-semibold ${
                billingFrequency === Interval.Month ? 'text-gray-100' : 'text-gray-50'
              }`}
            >
              {contentText.billingFrequency.monthly}
            </p>

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
                id="switchButton"
                className={`${
                  isIndividualSwitchEnabled ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>

            <div className="relative flex flex-col lg:flex-row lg:items-center">
              <p
                className={`text-base font-semibold ${
                  billingFrequency === Interval.Year ? 'text-gray-100' : 'text-gray-50'
                }`}
              >
                {contentText.billingFrequency.annually}
              </p>
              {switchDiscount ? (
                <p className="absolute top-full whitespace-nowrap font-semibold text-green-dark lg:top-0 lg:left-full lg:pl-1.5">
                  {contentText.save} {switchDiscount}%
                </p>
              ) : null}
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

        {/* Subscriptions cards */}
        <Transition
          show={isSubscription && !loadingCards}
          enter="transition duration-500 ease-out"
          enterFrom="scale-95 translate-y-20 opacity-0"
          enterTo="scale-100 translate-y-0 opacity-100"
        >
          <div className="content flex flex-row flex-wrap items-end justify-center justify-items-center p-4">
            {products?.individuals?.[billingFrequency] &&
              products.individuals[billingFrequency].map((product: any, index) => (
                <PriceCard
                  planType="individual"
                  key={product.storage}
                  storage={product.storage}
                  price={
                    discount && coupon
                      ? (Number(product.price * discount).toFixed(2) as unknown as number)
                      : product.price
                  }
                  billingFrequency={billingFrequency}
                  popular={product.storage === '10TB'}
                  cta={['checkout', product.priceId]}
                  priceBefore={
                    billingFrequency === Interval.Year && !coupon
                      ? products.individuals?.[Interval.Month][index].price * 12
                      : coupon
                      ? product.price
                      : undefined
                  }
                  lang={lang}
                  currency={currency}
                  coupon={coupon}
                  currencyValue={currencyValue}
                />
              ))}
          </div>

          {!hideFreeCard ? (
            <div id="freeAccountCard" className="content flex w-full p-4 pb-10 md:pb-0">
              <FreePlanCard textContent={contentText.freePlanCard} />
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
              products.individuals[Interval.Lifetime].map((product: any) => {
                return (
                  <PriceCard
                    planType="individual"
                    key={product.storage}
                    storage={product.storage}
                    price={
                      useSameCouponForAllPlans || coupon
                        ? (Number(product.price * 0.25).toFixed(0) as unknown as number)
                        : product.price.split('.')[0]
                    }
                    priceBefore={coupon ? product.price.split('.')[0] : undefined}
                    billingFrequency={Interval.Lifetime}
                    popular={product.storage === '5TB'}
                    cta={['checkout', product.priceId]}
                    lang={lang}
                    currency={currency}
                    currencyValue={currencyValue}
                    coupon={useSameCouponForAllPlans ? coupon : lifetimeCoupons?.[product.storage] ?? undefined}
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

        <div id="freeAccountCard" className={`content ${!isSubscription ? 'flex' : 'hidden'} w-full p-4 pb-10 md:pb-0`}>
          <FreePlanCard textContent={contentText.freePlanCard} />
        </div>

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
}
