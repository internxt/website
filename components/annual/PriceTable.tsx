/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import PriceCard from '../prices/PriceCard';
import { stripeService } from '../services/getPrices';
import CardSkeleton from '../components/CardSkeleton';

export default function PriceTable({ lang, country }) {
  const [products, setProducts] = useState(null);
  const [loadingCards, setLoadingCards] = useState(true);
  const [userCount, setUserCount] = useState(2);

  function parentSetUserCount(count) {
    setUserCount(count);
  }

  const billingFrequencySegment = { 1: 'Monthly', 6: 'Semiannually', 12: 'Annually', '-1': 'Lifetime' };

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
      <div className="flex flex-col items-center">
        <Transition
          show={loadingCards}
          enter="transition duration-500 ease-out"
          enterFrom="scale-95 translate-y-20 opacity-0"
          enterTo="scale-100 translate-y-0 opacity-100"
        >
          <div className="flex flex-row flex-wrap items-end justify-center justify-items-center p-6 py-14 pb-20">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </div>
        </Transition>

        {/* Render cards */}

        <Transition
          show={!loadingCards}
          enterFrom="scale-95 translate-y-20 opacity-0"
          enterTo="scale-100 translate-y-0 opacity-100"
        >
          <div className="content flex flex-row flex-wrap items-end justify-center justify-items-center p-6 py-14 pb-20">
            {products?.individuals['year'] &&
              Object.values(products.individuals['year']).map((product: any) => {
                return (
                  <PriceCard
                    planType="individual"
                    key={product.storage}
                    storage={product.storage}
                    price={product.price}
                    billingFrequency={'year'}
                    popular={product.storage === '200GB'}
                    cta={['checkout', product.priceId]}
                    lang={lang}
                    country={country}
                  />
                );
              })}
          </div>
        </Transition>
      </div>
    </section>
  );
}
