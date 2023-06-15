import { Transition } from '@headlessui/react';
import React, { useEffect, useState } from 'react';
import CardSkeleton from '../components/CardSkeleton';
import { stripeService } from '../services/getPrices';
import PriceCard from './PriceCard';

const PaymentsSection = ({ textContent, country }) => {
  const [products, setProducts] = useState(null);
  const [loadingCards, setLoadingCards] = useState(true);

  useEffect(() => {
    stripeService
      .getAllPrices()
      .then((res) => {
        if (res) {
          setProducts(res);
          setLoadingCards(false);
        }
      })
      .catch((err) => {
        console.error(err);
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
              {products?.individuals['year'] &&
                Object.values(products.individuals['year']).map((product: any) => {
                  return (
                    <PriceCard
                      plan={textContent.card1.plan}
                      price={textContent.card1.price}
                      country={country}
                      cta={['checkout', 'GB2012']}
                      month={textContent.month}
                      annualPrice={textContent.card1.annualPrice}
                      billedAnnually={textContent.billedAnnually}
                      info={textContent.infoPlan}
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
