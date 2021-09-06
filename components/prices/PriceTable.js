import React, { Fragment, useState } from 'react';
import PriceCard from './PriceCard';
import { Transition } from '@headlessui/react'

const PriceTable = (props) => {
  const [individual, setIndividual] = useState(true);
  const [billingFrequency, setBillingFrequency] = useState(12);

  const billingPrice = (price) => {
    return price[billingFrequency]
  }

  const pricings = {
    "individuals": {
      "free": {
        "stripeID": "2GB",
        "storage": "2GB",
        "pricePerMonth": {
          "1": "0",
          "6": "0",
          "12": "0"
        },
        "popular": false
      },
      "GB20": {
        "stripeID": "20GB",
        "storage": "20GB",
        "pricePerMonth": {
          "1": "0.99",
          "6": "0.95",
          "12": "0.89"
        },
        "popular": false
      },
      "GB200": {
        "stripeID": "200GB",
        "storage": "200GB",
        "pricePerMonth": {
          "1": "4.49",
          "6": "3.99",
          "12": "3.49"
        },
        "popular": true
      },
      "TB2": {
        "stripeID": "2TB",
        "storage": "2TB",
        "pricePerMonth": {
          "1": "9.99",
          "6": "9.49",
          "12": "8.99"
        },
        "popular": false
      }
    },
    "business": {
      "GB200": {
        "stripeID": "200GB",
        "storage": "200GB",
        "pricePerMonth": {
          "1": "4.49",
          "6": "3.99",
          "12": "3.49"
        },
        "popular": false
      },
      "TB2": {
        "stripeID": "2TB",
        "storage": "2TB",
        "pricePerMonth": {
          "1": "9.99",
          "6": "9.49",
          "12": "8.99"
        },
        "popular": true
      },
      "twentyTB": {
        "stripeID": "20TB",
        "storage": "20TB",
        "pricePerMonth": {
          "1": "95.00",
          "6": "94.49",
          "12": "93.99"
        },
        "popular": false
      }
    }
  }

  return (
    <section className="bg-neutral-10">

      <div className="flex flex-col items-center">
        <h1 className="pt-40 text-center text-5xl">
          {individual ? 'Plans for Individuals' : 'Plans for Businesses'}
        </h1>
        <button className="pt-2 pb-10 text-center text-blue-60 active:text-blue-50 font-semibold cursor-pointer" onClick={() => {setIndividual(!individual)}}>
          {individual ? 'Change to Plans for Businesses' : 'Change to Plans for Individual'}
        </button>

        <div className="flex flex-row p-0.5 text-sm bg-neutral-20 rounded-lg">
          <button onClick={() => {setBillingFrequency(1)}} className={`py-1 px-6 rounded-lg font-medium ${billingFrequency === 1 ? 'text-neutral-700 shadow-sm bg-white' : 'text-neutral-80'}`}>Monthly</button>
          <button onClick={() => {setBillingFrequency(6)}} className={`py-1 px-6 rounded-lg font-medium ${billingFrequency === 6 ? 'text-neutral-700 shadow-sm bg-white' : 'text-neutral-80'}`}>Semiannually</button>
          <button onClick={() => {setBillingFrequency(12)}} className={`py-1 px-6 rounded-lg font-medium ${billingFrequency === 12 ? 'text-neutral-700 shadow-sm bg-white' : 'text-neutral-80'}`}>Annually</button>
        </div>
        
          <Transition
            show={individual}
            enter="transition duration-500 ease-out"
            enterFrom="transform scale-95 translate-y-20 opacity-0"
            enterTo="transform scale-100 translate-y-0 opacity-100"
          >
            <div className={`flex content flex-row flex-wrap justify-center justify-items-center items-end p-6 py-14 pb-20`}>
              <PriceCard planType="individual" storage={pricings.individuals.free.storage} pricePerMonth={billingPrice(pricings.individuals.free.pricePerMonth)} billingFrequency={billingFrequency} popular={pricings.individuals.free.popular} />
              <PriceCard planType="individual" storage={pricings.individuals.GB20.storage} pricePerMonth={billingPrice(pricings.individuals.GB20.pricePerMonth)} billingFrequency={billingFrequency} popular={pricings.individuals.GB20.popular} />
              <PriceCard planType="individual" storage={pricings.individuals.GB200.storage} pricePerMonth={billingPrice(pricings.individuals.GB200.pricePerMonth)} billingFrequency={billingFrequency} popular={pricings.individuals.GB200.popular} />
              <PriceCard planType="individual" storage={pricings.individuals.TB2.storage} pricePerMonth={billingPrice(pricings.individuals.TB2.pricePerMonth)} billingFrequency={billingFrequency} popular={pricings.individuals.TB2.popular}/>
            </div>
          </Transition>
          
          <Transition
            show={!individual}
            enter="transition duration-500 ease-out"
            enterFrom="transform scale-95 translate-y-20 opacity-0"
            enterTo="transform scale-100 translate-y-0 opacity-100"
          >
            <div className={`flex content flex-row flex-wrap justify-center justify-items-center items-end p-6 py-14 pb-20`}>
              <PriceCard planType="business" storage={pricings.business.GB200.storage} pricePerMonth={billingPrice(pricings.business.GB200.pricePerMonth)} billingFrequency={billingFrequency} popular={pricings.business.GB200.popular} />
              <PriceCard planType="business" storage={pricings.business.TB2.storage} pricePerMonth={billingPrice(pricings.business.TB2.pricePerMonth)} billingFrequency={billingFrequency} popular={pricings.business.TB2.popular} />
              <PriceCard planType="business" storage={pricings.business.twentyTB.storage} pricePerMonth={billingPrice(pricings.business.twentyTB.pricePerMonth)} billingFrequency={billingFrequency} popular={pricings.business.twentyTB.popular} />
            </div>
          </Transition>
        
      </div>
      
      

    </section>
  );
};

export default PriceTable;
