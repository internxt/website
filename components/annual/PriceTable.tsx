/* eslint-disable max-len */
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import PriceCard from '../prices/PriceCard';

export default function PriceTable({ lang, country }) {
  const [individual, setIndividual] = useState(true);
  const [billingFrequency, setBillingFrequency] = useState(12);
  const [userCount, setUserCount] = useState(2);

  function parentSetUserCount(count) {
    setUserCount(count);
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
        popular: true,
      },
      TB2: {
        stripeID: '2TB',
        storage: '2TB',
        price: {
          1: '9.99',
          6: '9.49',
          12: '8.99',
        },
        popular: false,
      },
    },
  };

  return (
    <section id="priceTable" className="">
      <div className="flex flex-col items-center">
        <Transition
          show={individual}
          enter="transition duration-500 ease-out"
          enterFrom="scale-95 translate-y-20 opacity-0"
          enterTo="scale-100 translate-y-0 opacity-100"
        >
          <div className="content flex flex-row flex-wrap items-end justify-center justify-items-center p-6 pb-20">
            <>
              <PriceCard
                planType="individual"
                storage={pricings.individuals.GB20.storage}
                price={billingPrice(pricings.individuals.GB20.price)}
                billingFrequency={12}
                cta={['checkout', checkoutPlan('GB20')]}
                popular={pricings.individuals.GB20.popular}
                lang={lang}
                country={country}
                priceBefore={''}
                getUsers={parentSetUserCount}
                setUsers={userCount}
              />
              <PriceCard
                planType="individual"
                storage={pricings.individuals.GB200.storage}
                price={billingPrice(pricings.individuals.GB200.price)}
                billingFrequency={12}
                cta={['checkout', checkoutPlan('GB200')]}
                popular={pricings.individuals.GB200.popular}
                lang={lang}
                country={country}
                priceBefore={''}
                getUsers={parentSetUserCount}
                setUsers={userCount}
              />

              <PriceCard
                planType="individual"
                storage={pricings.individuals.TB2.storage}
                price={billingPrice(pricings.individuals.TB2.price)}
                billingFrequency={12}
                cta={['checkout', checkoutPlan('TB2')]}
                popular={pricings.individuals.TB2.popular}
                lang={lang}
                country={country}
                priceBefore={''}
                getUsers={parentSetUserCount}
                setUsers={userCount}
              />
            </>
          </div>
        </Transition>
      </div>
    </section>
  );
}
