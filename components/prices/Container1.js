import React, { Fragment, useState } from 'react';
import Image from 'next/image';

import styles from './Container1.module.css';
import PriceCardOld from '../cards/PriceCard';
import PriceCard from './PriceCard';
import { Transition } from '@headlessui/react'

const Container1 = ({ id, descriptions }) => {
  const description = descriptions.filter((desc) => desc.id === id);
  const [individual, setIndividual] = useState(true);
  const [billingFrequency, setBillingFrequency] = useState(12);
  const [teams, setTeams] = useState(false);

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
      "twentyGB": {
        "stripeID": "20GB",
        "storage": "20GB",
        "pricePerMonth": {
          "1": "0.99",
          "6": "0.95",
          "12": "0.89"
        },
        "popular": false
      },
      "twoHundredGB": {
        "stripeID": "200GB",
        "storage": "200GB",
        "pricePerMonth": {
          "1": "4.49",
          "6": "3.99",
          "12": "3.49"
        },
        "popular": true
      },
      "twoTB": {
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
      "twoHundredGB": {
        "stripeID": "200GB",
        "storage": "200GB",
        "pricePerMonth": {
          "1": "4.49",
          "6": "3.99",
          "12": "3.49"
        },
        "popular": false
      },
      "twoTB": {
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
        "stripeID": "2TB",
        "storage": "2TB",
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
          <p className={`${individual ? 'flex' : 'hidden'}`}>Individual Plans</p>
          <p className={`${individual ? 'hidden' : 'flex'}`}>Business Plans</p>
        </h1>
        <button className="pt-2 pb-10 text-center text-blue-60 active:text-blue-50 font-semibold cursor-pointer" onClick={() => {setIndividual(!individual)}}>
          <p className={`${individual ? 'flex' : 'hidden'}`}>Change to Business Plans</p>
          <p className={`${individual ? 'hidden' : 'flex'}`}>Change to Individual Plans</p>
        </button>

        <div className="flex flex-row p-1.5 text-sm bg-neutral-20 ring-1 ring-neutral-30 rounded-lg">
          <button onClick={() => {setBillingFrequency(1)}} className={`py-2 px-4 rounded-lg ${billingFrequency === 1 ? 'text-neutral-500 shadow-sm ring-1 ring-neutral-30 bg-white font-semibold' : 'text-neutral-100'}`}>Monthly</button>
          <button onClick={() => {setBillingFrequency(6)}} className={`py-2 px-4 rounded-lg ${billingFrequency === 6 ? 'text-neutral-500 shadow-sm ring-1 ring-neutral-30 bg-white font-semibold' : 'text-neutral-100'}`}>Semianually</button>
          <button onClick={() => {setBillingFrequency(12)}} className={`py-2 px-4 rounded-lg ${billingFrequency === 12 ? 'text-neutral-500 shadow-sm ring-1 ring-neutral-30 bg-white font-semibold' : 'text-neutral-100'}`}>Anually</button>
        </div>
        
          <Transition
            show={individual}
            enter="transition duration-500 ease-out"
            enterFrom="transform scale-95 translate-y-20 opacity-0"
            enterTo="transform scale-100 translate-y-0 opacity-100"
          >
            <div className={`flex content flex-row flex-wrap justify-center justify-items-center items-end p-6 py-14 pb-20`}>
              <PriceCard planType="individual" storage={pricings.individuals.free.storage} pricePerMonth={billingPrice(pricings.individuals.free.pricePerMonth)} billingFrequency={billingFrequency} popular={pricings.individuals.free.popular} />
              <PriceCard planType="individual" storage={pricings.individuals.twentyGB.storage} pricePerMonth={billingPrice(pricings.individuals.twentyGB.pricePerMonth)} billingFrequency={billingFrequency} popular={pricings.individuals.twentyGB.popular} />
              <PriceCard planType="individual" storage={pricings.individuals.twoHundredGB.storage} pricePerMonth={billingPrice(pricings.individuals.twoHundredGB.pricePerMonth)} billingFrequency={billingFrequency} popular={pricings.individuals.twoHundredGB.popular} />
              <PriceCard planType="individual" storage={pricings.individuals.twoTB.storage} pricePerMonth={billingPrice(pricings.individuals.twoTB.pricePerMonth)} billingFrequency={billingFrequency} popular={pricings.individuals.twoTB.popular}/>
            </div>
          </Transition>
          
          <Transition
            show={!individual}
            enter="transition duration-500 ease-out"
            enterFrom="transform scale-95 translate-y-20 opacity-0"
            enterTo="transform scale-100 translate-y-0 opacity-100"
          >
            <div className={`flex content flex-row flex-wrap justify-center justify-items-center items-end p-6 py-14 pb-20`}>
              <PriceCard planType="business" storage={pricings.business.twoHundredGB.storage} pricePerMonth={billingPrice(pricings.business.twoHundredGB.pricePerMonth)} billingFrequency={billingFrequency} popular={pricings.business.twoHundredGB.popular} />
              <PriceCard planType="business" storage={pricings.business.twoTB.storage} pricePerMonth={billingPrice(pricings.business.twoTB.pricePerMonth)} billingFrequency={billingFrequency} popular={pricings.business.twoTB.popular} />
              <PriceCard planType="business" storage={pricings.business.twentyTB.storage} pricePerMonth={billingPrice(pricings.business.twentyTB.pricePerMonth)} billingFrequency={billingFrequency} popular={pricings.business.twentyTB.popular} />
            </div>
          </Transition>
        
      </div>
      
      

    </section>
  );
};

export default Container1;
