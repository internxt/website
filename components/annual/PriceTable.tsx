/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import PriceCard from '../prices/PriceCard';
import { stripeService } from '../services/stripeService';
import CardSkeleton from '../components/CardSkeleton';
import { currencyService } from '../services/currencyService';

export default function PriceTable({ lang, country }: { lang: string; country?: string }) {
  const [products, setProducts] = useState(null);
  const [loadingCards, setLoadingCards] = useState(true);
  const [currency, setCurrency] = useState({
    symbol: '€',
    value: 1,
  });

  useEffect(() => {
    Promise.all([stripeService.getAllPrices(), currencyService.filterCurrencyByCountry()])
      .then((res) => {
        setProducts(res[0]);
        setCurrency({
          symbol: res[1].symbol,
          value: res[1].value,
        });
        setLoadingCards(false);
      })
      .catch((err) => console.error(err));
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
          <div className="flex w-full flex-row flex-wrap items-end justify-center justify-items-center p-6 py-14 pb-20">
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
                    price={product.price * currency.value}
                    billingFrequency={'year'}
                    popular={product.storage === '200GB'}
                    cta={['checkout', product.priceId]}
                    lang={lang}
                    country={currency.symbol}
                  />
                );
              })}
          </div>
        </Transition>
      </div>
    </section>
  );
}
