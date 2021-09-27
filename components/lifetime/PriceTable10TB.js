import React, { Fragment, useState } from 'react';
import PriceCard from './PriceCard';

const PriceTable = (props) => {
  const billingFrequency = -1;

  const pricings = {
    "TB10": {
      "stripeID": "lifetime10TB",
      "storage": "10TB",
      "price": "499",
      "priceBefore": "2500"
    }
  }

  return (
    <section>
      <div className="flex flex-col items-center">

        <div className={`flex content flex-row flex-wrap justify-center justify-items-center items-end px-6`}>
          <PriceCard planType="individual" storage={pricings.TB10.storage} price={pricings.TB10.price} priceBefore={pricings.TB10.priceBefore} billingFrequency={billingFrequency} cta={['checkout',`${pricings.TB10.stripeID}`]} popular={false} lang={props.lang} />
        </div>
        
      </div>
    </section>
  );
};

export default PriceTable;
