import React, { Fragment, useState } from 'react';
import PriceCard from './PriceCard';

const PriceTable = (props) => {
  const billingFrequency = -1;

  const pricings = {
    TB2: {
      stripeID: 'lifetime2TBLanding',
      storage: '2TB',
      price: '99',
      priceBefore: '499'
    }
  };

  return (
    <section>
      <div className="flex flex-col items-center">

        <div className="flex content flex-row flex-wrap justify-center justify-items-center items-end px-6">
          <PriceCard planType="individual" storage={pricings.TB2.storage} price={pricings.TB2.price} priceBefore={pricings.TB2.priceBefore} billingFrequency={billingFrequency} cta={['checkout', `${pricings.TB2.stripeID}`]} popular={false} lang={props.lang} />
        </div>

      </div>
    </section>
  );
};

export default PriceTable;
