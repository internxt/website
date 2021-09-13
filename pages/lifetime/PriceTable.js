import React, { Fragment, useState } from 'react';
import PriceCard from './PriceCard';
import { Transition } from '@headlessui/react'

const PriceTable = (props) => {
  const [billingFrequency, setBillingFrequency] = useState(-1);
  const contentText = require(`../../assets/lang/${props.lang}/priceCard.json`);

  function parentSetUserCount(count) {
    setUserCount(count)
  }
  function parentGetUserCount() {
    return userCount
  }

  const billingPrice = (price) => {
    return price[billingFrequency]
  }

  const pricings = {
    "TB2": {
      "stripeID": "lifetime2TB",
      "storage": "2TB",
      "price": {
        "-1": "299"
      },
      "popular": false
    },
    "TB10": {
      "stripeID": "lifetime10TB",
      "storage": "10TB",
      "price": {
        "-1": "499"
      },
      "popular": true
    },
    "Infinite": {
      "stripeID": "infiniteLifetime",
      "storage": "Infinite Storage",
      "price": {
        "-1": "999"
      },
      "popular": false
    }
  }

  return (
    <section>
      <div className="flex flex-col items-center">

        <div className={`flex content flex-row flex-wrap justify-center justify-items-center items-end px-6`}>
          <PriceCard planType="individual" storage={pricings.TB2.storage} price={billingPrice(pricings.TB2.price)} billingFrequency={billingFrequency} cta={['checkout',`${pricings.TB2.stripeID}`]} popular={pricings.TB2.popular} lang={props.lang} />
          <PriceCard planType="individual" storage={pricings.TB10.storage} price={billingPrice(pricings.TB10.price)} billingFrequency={billingFrequency} cta={['checkout',`${pricings.TB10.stripeID}`]} popular={pricings.TB10.popular} lang={props.lang} />
          <PriceCard planType="individual" storage={pricings.Infinite.storage} price={billingPrice(pricings.Infinite.price)} billingFrequency={billingFrequency} cta={['checkout',`${pricings.Infinite.stripeID}`]} popular={pricings.Infinite.popular} lang={props.lang} />
        </div>
        
      </div>
    </section>
  );
};

export default PriceTable;
