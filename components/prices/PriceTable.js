/* eslint-disable max-len */
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
// import Link from 'next/link';
import PriceCard from './PriceCard';

const PriceTable = ({
  setSegmentPageName,
  lang
}) => {
  const [individual, setIndividual] = useState(true);
  const [billingFrequency, setBillingFrequency] = useState(12);
  const [userCount, setUserCount] = useState(2);
  const contentText = require(`../../assets/lang/${lang}/priceCard.json`);

  function parentSetUserCount(count) {
    setUserCount(count);
  }

  function checkoutPlan(plan) {
    return `${plan}${billingFrequency}`;
  }

  const billingPrice = (price) => price[billingFrequency];

  const pricings = {
    individuals: {
      free: {
        stripeID: '2GB',
        storage: '10GB',
        price: {
          1: '0',
          6: '0',
          12: '0'
        },
        popular: false
      },
      GB20: {
        stripeID: '20GB',
        storage: '20GB',
        price: {
          1: '0.99',
          6: '0.95',
          12: '0.89'
        },
        popular: false
      },
      GB200: {
        stripeID: '200GB',
        storage: '200GB',
        price: {
          1: '4.49',
          6: '3.99',
          12: '3.49'
        },
        popular: true
      },
      TB2: {
        stripeID: '2TB',
        storage: '2TB',
        price: {
          1: '9.99',
          6: '9.49',
          12: '8.99'
        },
        popular: false
      }
    },
    lifetime: {
      TB1: {
        stripeID: 'lifetime1TB',
        storage: '1TB',
        price: {
          '-1': '99'
        },
        priceBefore: '299',
        popular: false
      },
      TB5: {
        stripeID: 'lifetime5TB',
        storage: '5TB',
        price: {
          '-1': '299'
        },
        priceBefore: '499',
        popular: true
      },
      TB10: {
        stripeID: 'lifetime10TB',
        storage: '10TB',
        price: {
          '-1': '499'
        },
        priceBefore: '999',
        popular: false
      }
    },
    business: {
      GB200: {
        stripeID: '200GB',
        storage: '200GB',
        price: {
          1: '4.49',
          6: '3.99',
          12: '3.49'
        },
        popular: false
      },
      TB2: {
        stripeID: '2TB',
        storage: '2TB',
        price: {
          1: '9.99',
          6: '9.49',
          12: '8.99'
        },
        popular: true
      },
      twentyTB: {
        stripeID: '20TB',
        storage: '20TB',
        price: {
          1: '95.00',
          6: '94.49',
          12: '93.99'
        },
        popular: false
      }
    }
  };

  return (
    <section className="bg-gradient-to-b from-white to-cool-gray-5">

      <div className="flex flex-col items-center">
        <h1 className="pt-36 px-4 text-center text-5xl">
          {individual ? `${contentText.planTitles.individuals}` : `${contentText.planTitles.business}`}
        </h1>
        <button type="button" className="mt-4 mb-10 text-center text-blue-60 active:text-blue-50 font-semibold cursor-pointer" onClick={() => { setIndividual(!individual); setSegmentPageName(`Pricing ${!individual ? 'Individuals' : 'Business'} ${billingFrequency === 1 ? 'Monthly' : 'Annually'}`); if (billingFrequency === -1) { setTimeout(() => { setBillingFrequency(12); }, 50); } }}>
          {individual ? `${contentText.changePlan.toBusiness}` : `${contentText.changePlan.toIndividuals}`}
        </button>

        <div className="flex flex-row p-0.5 text-sm bg-cool-gray-10 rounded-lg">
          <button type="button" onClick={() => { setBillingFrequency(1); setSegmentPageName(`Pricing ${individual ? 'Individuals' : 'Business'} Monthly`); }} className={`py-1.5 px-6 rounded-lg font-medium ${billingFrequency === 1 ? 'text-cool-gray-80 shadow-sm bg-white' : 'text-cool-gray-50'}`}>{contentText.billingFrequency.monthly}</button>
          <button type="button" onClick={() => { setBillingFrequency(12); setSegmentPageName(`Pricing ${individual ? 'Individuals' : 'Business'} Annually`); }} className={`py-1.5 px-6 rounded-lg font-medium ${billingFrequency === 12 ? 'text-cool-gray-80 shadow-sm bg-white' : 'text-cool-gray-50'}`}>{contentText.billingFrequency.annually}</button>
          <button type="button" onClick={() => { setBillingFrequency(-1); setSegmentPageName(`Pricing ${individual ? 'Individuals' : 'Business'} Lifetime`); }} className={`py-1.5 px-6 rounded-lg font-medium ${billingFrequency === -1 ? 'text-cool-gray-80 shadow-sm bg-white' : 'text-cool-gray-50'} ${individual ? '' : 'hidden'}`}>{contentText.billingFrequency.lifetime}</button>
        </div>

        <Transition
          show={individual}
          enter="transition duration-500 ease-out"
          enterFrom="transform scale-95 translate-y-20 opacity-0"
          enterTo="transform scale-100 translate-y-0 opacity-100"
        >
          <div className={`${billingFrequency !== -1 ? 'flex' : 'hidden'} content flex-row flex-wrap justify-center justify-items-center items-end p-6 py-14 pb-20`}>
            <PriceCard planType="individual" storage={pricings.individuals.free.storage} price={billingPrice(pricings.individuals.free.price)} billingFrequency={billingFrequency} cta={['link', 'https://drive.internxt.com/new?']} popular={pricings.individuals.free.popular} lang={lang} />
            <PriceCard planType="individual" storage={pricings.individuals.GB20.storage} price={billingPrice(pricings.individuals.GB20.price)} billingFrequency={billingFrequency} cta={['checkout', checkoutPlan('GB20')]} popular={pricings.individuals.GB20.popular} lang={lang} />
            <PriceCard planType="individual" storage={pricings.individuals.GB200.storage} price={billingPrice(pricings.individuals.GB200.price)} billingFrequency={billingFrequency} cta={['checkout', checkoutPlan('GB200')]} popular={pricings.individuals.GB200.popular} lang={lang} />
            <PriceCard planType="individual" storage={pricings.individuals.TB2.storage} price={billingPrice(pricings.individuals.TB2.price)} billingFrequency={billingFrequency} cta={['checkout', checkoutPlan('TB2')]} popular={pricings.individuals.TB2.popular} lang={lang} />
          </div>
          <div className={`${billingFrequency === -1 ? 'flex' : 'hidden'} content flex-row flex-wrap justify-center justify-items-center items-end p-6 py-14 pb-20`}>
            <PriceCard planType="individual" storage={pricings.lifetime.TB1.storage} price={billingPrice(pricings.lifetime.TB1.price)} priceBefore={pricings.lifetime.TB1.priceBefore} billingFrequency={billingFrequency} cta={['checkout', `${pricings.lifetime.TB1.stripeID}`]} popular={pricings.lifetime.TB1.popular} lang={lang} />
            <PriceCard planType="individual" storage={pricings.lifetime.TB5.storage} price={billingPrice(pricings.lifetime.TB5.price)} priceBefore={pricings.lifetime.TB5.priceBefore} billingFrequency={billingFrequency} cta={['checkout', `${pricings.lifetime.TB5.stripeID}`]} popular={pricings.lifetime.TB5.popular} lang={lang} />
            <PriceCard planType="individual" storage={pricings.lifetime.TB10.storage} price={billingPrice(pricings.lifetime.TB10.price)} priceBefore={pricings.lifetime.TB10.priceBefore} billingFrequency={billingFrequency} cta={['checkout', `${pricings.lifetime.TB10.stripeID}`]} popular={pricings.lifetime.TB10.popular} lang={lang} />
          </div>
        </Transition>

        <Transition
          show={!individual}
          enter="transition duration-500 ease-out"
          enterFrom="transform scale-95 translate-y-20 opacity-0"
          enterTo="transform scale-100 translate-y-0 opacity-100"
        >
          <div className="flex content flex-row flex-wrap justify-center justify-items-center items-end p-6 py-14 pb-20">
            <PriceCard planType="business" storage={pricings.business.GB200.storage} price={billingPrice(pricings.business.GB200.price)} billingFrequency={billingFrequency} cta={['link', 'https://drive.internxt.com/new?']} popular={pricings.business.GB200.popular} setUsers={parentSetUserCount} getUsers={userCount} lang={lang} />
            <PriceCard planType="business" storage={pricings.business.TB2.storage} price={billingPrice(pricings.business.TB2.price)} billingFrequency={billingFrequency} cta={['link', 'https://drive.internxt.com/new?']} popular={pricings.business.TB2.popular} setUsers={parentSetUserCount} getUsers={userCount} lang={lang} />
            <PriceCard planType="business" storage={pricings.business.twentyTB.storage} price={billingPrice(pricings.business.twentyTB.price)} billingFrequency={billingFrequency} cta={['link', 'https://drive.internxt.com/new?']} popular={pricings.business.twentyTB.popular} setUsers={parentSetUserCount} getUsers={userCount} lang={lang} />
          </div>
        </Transition>

        {/* <Link href="/cloud-storage-comparison" lang={lang}>
          <a className="flex flex-col justify-center items-center px-6 py-2 border border-transparent rounded-xl text-lg sm:text-base font-semibold text-blue-60 bg-blue-10 focus:outline-none">
            Compare with our competitors
          </a>
        </Link> */}
      </div>

    </section>
  );
};

export default PriceTable;
