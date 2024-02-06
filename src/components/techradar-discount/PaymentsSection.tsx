import React, { useEffect, useState } from 'react';
import CardSkeleton from '@/components/components/CardSkeleton';
import { currencyService } from '@/components/services/currencyService';
import { ProductsProps, stripeService } from '@/components/services/stripeService';
import PriceCard from './PriceCard';

const PaymentsSection = ({ textContent }) => {
  const [products, setProducts] = useState<ProductsProps>();
  const [currency, setCurrency] = useState(null);
  const [loadingCards, setLoadingCards] = useState(true);

  useEffect(() => {
    Promise.all([stripeService.getAllPrices(), currencyService.filterCurrencyByCountry()]).then((res) => {
      if (res) {
        setProducts(res[0]);
        setCurrency(res[1].symbol);
        setLoadingCards(false);
      }
    });
  }, []);

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
                      plan={product.storage}
                      price={product.price}
                      country={currency}
                      cta={['checkout', product.priceId]}
                      month={textContent.month}
                      annualPrice={product.price}
                      info={textContent.infoPlan}
                      billedAnnually={textContent.billedAnnually}
                      isPopular={false}
                      mostPopular={''}
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
