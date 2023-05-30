/* eslint-disable max-len */
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import PriceCard from './PriceCard';
import { Coin, CreditCard, Detective } from '@phosphor-icons/react';
import BusinessBanner from '../banners/BusinessBanner';
import SpecialPriceCard from './SpecialPriceCard';

export default function PriceTable({ setSegmentPageName, lang, country, setIsLifetime, textContent, setShowSnackbar }) {
  const [individual, setIndividual] = useState(true);
  const [billingFrequency, setBillingFrequency] = useState(12);
  const [userCount, setUserCount] = useState(2);
  const contentText = require(`../../assets/lang/${lang}/priceCard.json`);
  const banner = require('../../assets/lang/en/banners.json');

  function parentSetUserCount(count) {
    setUserCount(count);
  }

  if (billingFrequency === -1) {
    setIsLifetime(true);
  } else {
    setIsLifetime(false);
  }

  function checkoutPlan(plan) {
    if (billingFrequency === -1) {
      return plan;
    } else {
      return `${plan}${billingFrequency}`;
    }
  }

  const billingPrice = (price) => price[billingFrequency];

  const billingFrequencySegment = { 1: 'Monthly', 6: 'Semiannually', 12: 'Annually', '-1': 'Lifetime' };

  const pricings = {
    individuals: {
      free: {
        stripeID: '2GB',
        storage: '10GB',
        price: {
          1: '0',
          6: '0',
          12: '0',
        },
        popular: false,
      },
      GB20: {
        stripeID: '20GB',
        storage: '20GB',
        price: {
          1: '0.99',
          6: '0.95',
          12: '0.89',
        },
        popular: false,
      },
      GB200: {
        stripeID: '200GB',
        storage: '200GB',
        price: {
          1: '4.49',
          6: '3.99',
          12: '3.49',
        },
        popular: false,
      },
      TB2: {
        stripeID: '2TB',
        storage: '2TB',
        price: {
          1: '9.99',
          6: '9.49',
          12: '8.99',
        },
        popular: true,
      },
      lifetime2TB: {
        stripeID: 'lifetime2TB',
        storage: '2TB',
        price: {
          '-1': '299',
        },
        popular: false,
      },
      lifetime5TB: {
        stripeID: 'lifetime5TB',
        storage: '5TB',
        price: {
          '-1': '499',
        },
        popular: true,
      },
      lifetime10TB: {
        stripeID: 'lifetime10TB',
        storage: '10TB',
        price: {
          '-1': '999',
        },
        popular: false,
      },
    },
    business: {
      GB200: {
        stripeID: '200GB',
        storage: '200GB',
        price: {
          1: '4.49',
          6: '3.99',
          12: '3.49',
        },
        popular: false,
      },
      TB2: {
        stripeID: '2TB',
        storage: '2TB',
        price: {
          1: '9.99',
          6: '9.49',
          12: '8.99',
        },
        popular: true,
      },
      twentyTB: {
        stripeID: '20TB',
        storage: '20TB',
        price: {
          1: '95.00',
          6: '94.49',
          12: '93.99',
        },
        popular: false,
      },
    },
  };

  return (
    <section id="priceTable" className="bg-gray-1">
      <div className="flex flex-col items-center py-20">
        <div className="flex flex-col items-center space-y-10 pt-12">
          <div className="flex flex-col items-center px-5">
            <h1 className="text-center text-6xl font-semibold">
              {individual ? `${contentText.planTitles.individuals}` : `${contentText.planTitles.business}`}
            </h1>
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
                setSegmentPageName(
                  `Pricing ${!individual ? 'Individuals' : 'Business'} ${billingFrequencySegment.billingFrequency}`,
                );
                if (billingFrequency === -1) {
                  setTimeout(() => {
                    setBillingFrequency(12);
                  }, 50);
                }
              }}
            >
              {individual ? `${contentText.changePlan.toBusiness}` : `${contentText.changePlan.toIndividuals}`}
            </button>
          </div>
        </div>
        {individual && (
          <div className="flex flex-row rounded-lg bg-cool-gray-10 p-0.5 text-sm">
            <button
              type="button"
              onClick={() => {
                setBillingFrequency(1);
                setSegmentPageName(`Pricing ${individual ? 'Individuals' : 'Business'} Monthly`);
              }}
              className={`rounded-lg py-1.5 px-6 font-medium ${
                billingFrequency === 1 ? 'bg-white text-cool-gray-80 shadow-sm' : 'text-cool-gray-50'
              }`}
            >
              {contentText.billingFrequency.monthly}
            </button>
            <button
              type="button"
              onClick={() => {
                setBillingFrequency(12);
                setSegmentPageName(`Pricing ${individual ? 'Individuals' : 'Business'} Annually`);
              }}
              className={`rounded-lg py-1.5 px-6 font-medium ${
                billingFrequency === 12 ? 'bg-white text-cool-gray-80 shadow-sm' : 'text-cool-gray-50'
              }`}
            >
              {contentText.billingFrequency.annually}
            </button>
            <button
              type="button"
              onClick={() => {
                setBillingFrequency(-1);
              }}
              className={`rounded-lg py-1.5 px-6 font-medium ${
                billingFrequency === -1 ? 'bg-white text-cool-gray-80 shadow-sm' : 'text-cool-gray-50'
              } ${!individual && 'hidden'}`}
            >
              {contentText.billingFrequency.lifetime}
            </button>
          </div>
        )}

        <Transition
          show={individual}
          enter="transition duration-500 ease-out"
          enterFrom="scale-95 translate-y-20 opacity-0"
          enterTo="scale-100 translate-y-0 opacity-100"
        >
          <div className="content flex flex-row flex-wrap items-end justify-center justify-items-center p-6 py-14 pb-20">
            {billingFrequency === -1 ? (
              <>
                <PriceCard
                  planType="individual"
                  storage={pricings.individuals.lifetime2TB.storage}
                  price={billingPrice(pricings.individuals.lifetime2TB.price)}
                  billingFrequency={billingFrequency}
                  cta={['checkout', checkoutPlan('lifetime2TB')]}
                  popular={pricings.individuals.lifetime2TB.popular}
                  lang={lang}
                  country={country}
                />
                <PriceCard
                  planType="individual"
                  storage={pricings.individuals.lifetime5TB.storage}
                  price={billingPrice(pricings.individuals.lifetime5TB.price)}
                  billingFrequency={billingFrequency}
                  cta={['checkout', checkoutPlan('lifetime5TB')]}
                  popular={pricings.individuals.lifetime5TB.popular}
                  lang={lang}
                  country={country}
                />
                <PriceCard
                  planType="individual"
                  storage={pricings.individuals.lifetime10TB.storage}
                  price={billingPrice(pricings.individuals.lifetime10TB.price)}
                  billingFrequency={billingFrequency}
                  cta={['checkout', checkoutPlan('lifetime10TB')]}
                  popular={pricings.individuals.lifetime10TB.popular}
                  lang={lang}
                  country={country}
                />
              </>
            ) : (
              <>
                <PriceCard
                  planType="individual"
                  storage={pricings.individuals.free.storage}
                  price={billingPrice(pricings.individuals.free.price)}
                  billingFrequency={billingFrequency}
                  cta={['link', 'Free']}
                  popular={pricings.individuals.free.popular}
                  lang={lang}
                  country={country}
                />
                <PriceCard
                  planType="individual"
                  storage={pricings.individuals.GB20.storage}
                  price={billingPrice(pricings.individuals.GB20.price)}
                  billingFrequency={billingFrequency}
                  cta={['checkout', checkoutPlan('GB20')]}
                  popular={pricings.individuals.GB20.popular}
                  lang={lang}
                  country={country}
                />
                <PriceCard
                  planType="individual"
                  storage={pricings.individuals.GB200.storage}
                  price={billingPrice(pricings.individuals.GB200.price)}
                  billingFrequency={billingFrequency}
                  cta={['checkout', checkoutPlan('GB200')]}
                  popular={pricings.individuals.GB200.popular}
                  lang={lang}
                  country={country}
                />

                {pricings.individuals.TB2.popular && billingFrequency === 12 ? (
                  <SpecialPriceCard
                    planType="individual"
                    storage={pricings.individuals.TB2.storage}
                    price={billingPrice(pricings.individuals.TB2.price)}
                    billingFrequency={billingFrequency}
                    cta={['checkout', checkoutPlan('TB2')]}
                    popular={pricings.individuals.TB2.popular}
                    lang={lang}
                    country={country}
                  />
                ) : (
                  <PriceCard
                    planType="individual"
                    storage={pricings.individuals.TB2.storage}
                    price={billingPrice(pricings.individuals.TB2.price)}
                    billingFrequency={billingFrequency}
                    cta={['checkout', checkoutPlan('TB2')]}
                    popular={pricings.individuals.TB2.popular}
                    lang={lang}
                    country={country}
                  />
                )}
              </>
            )}
          </div>
        </Transition>

        <Transition
          show={!individual}
          enter="transition duration-500 ease-out"
          enterFrom="scale-95 translate-y-20 opacity-0"
          enterTo="scale-100 translate-y-0 opacity-100"
        >
          <div className="content flex flex-row flex-wrap items-end justify-center justify-items-center p-6 py-14 pb-20">
            <BusinessBanner textContent={banner.BusinessBanner} setShowSnackbar={setShowSnackbar} />
          </div>
        </Transition>
        <div className="flex flex-col items-center justify-center space-y-8 text-center md:flex-row md:space-y-0 md:space-x-32 md:pt-4">
          <div className="flex max-w-[183px] flex-col items-center space-y-3">
            <Coin size={40} className="text-primary" />
            <p className="text-xl font-medium text-gray-80">{textContent.featureSection.firstFeature}</p>
          </div>
          <div className="flex max-w-[114px] flex-col items-center space-y-3">
            <CreditCard size={40} className="text-primary" />
            <p className="text-xl font-medium text-gray-80">{textContent.featureSection.secondFeature}</p>
          </div>
          <div className="flex max-w-[153px] flex-col items-center space-y-3">
            <Detective size={40} className="text-primary" />
            <p className="text-xl font-medium text-gray-80">{textContent.featureSection.thirdFeature}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
