import React, { useEffect } from 'react';
import PriceCard from './PriceCard';

const PriceTable = ({ lang, country, products }) => {
  const billingFrequency = -1;

  return (
    <section className="overflow-hidden">
      <div
        id="priceTable"
        className="content mb-10 flex flex-row flex-wrap items-end justify-center justify-items-center px-6"
      >
        <PriceCard
          planType="individual"
          storage={products.lifetime5TB.storage}
          price={products.lifetime5TB.price}
          billingFrequency={billingFrequency}
          cta={['checkout', 'lifetime5TB']}
          popular={products.lifetime5TB.popular}
          lang={lang}
          country={country}
          actualPrice={products.lifetime5TB.actualPrice}
        />
        <PriceCard
          planType="individual"
          storage={products.lifetime2TB.storage}
          price={products.lifetime2TB.price}
          billingFrequency={billingFrequency}
          cta={['checkout', 'lifetime2TB']}
          popular={products.lifetime2TB.popular}
          lang={lang}
          country={country}
          actualPrice={products.lifetime2TB.actualPrice}
        />
        <PriceCard
          planType="individual"
          storage={products.lifetime10TB.storage}
          price={products.lifetime10TB.price}
          billingFrequency={billingFrequency}
          cta={['checkout', 'lifetime10TB']}
          popular={products.lifetime10TB.popular}
          lang={lang}
          country={country}
          actualPrice={products.lifetime10TB.actualPrice}
        />
      </div>
    </section>
  );
};

export default PriceTable;
