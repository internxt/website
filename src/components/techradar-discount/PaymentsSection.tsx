import React from 'react';
import CardSkeleton from '@/components/components/CardSkeleton';
import usePricing from '@/hooks/usePricing';
import PriceCard from '../prices/PriceCard';
import { Interval } from '../services/stripe.service';

const PaymentsSection = ({ textContent }) => {
  const { products, currency, loadingCards, currencyValue } = usePricing();

  return (
    <section id="priceTable" className="">
      <div className="flex flex-col items-center bg-gray-5 p-20">
        <div className="flex max-w-[641px] flex-col space-y-4 text-center">
          <p className="text-4xl font-semibold">{textContent.title}</p>
          <p className="text-xl font-normal">{textContent.subtitle}</p>
        </div>
        <div className="flex flex-row flex-wrap justify-center pt-16">
          {loadingCards ? (
            <>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </>
          ) : (
            <>
              {products?.individuals?.['year'] &&
                Object.values(products.individuals['year']).map((product: any) => {
                  return (
                    <PriceCard
                      planType="individual"
                      key={product.storage}
                      storage={product.storage}
                      price={product.price}
                      billingFrequency={Interval.Year}
                      popular={product.storage === '5TB'}
                      cta={['checkout', product.priceId]}
                      priceBefore={products?.individuals?.[Interval.Month][product.storage].price * 12}
                      lang={'en'}
                      currency={currency}
                      coupon={undefined}
                      currencyValue={currencyValue}
                    />
                  );
                })}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default PaymentsSection;
