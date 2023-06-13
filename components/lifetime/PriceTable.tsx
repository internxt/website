import React, { useEffect, useState } from 'react';
import PriceCard from './PriceCard';
import { Interval, stripeService } from '../services/getPrices';
import { Transition } from '@headlessui/react';

const PriceTable = ({ lang, country }) => {
  const billingFrequency = -1;
  const [products, setProducts] = useState(null);
  const [loadingCards, setLoadingCards] = useState(true);

  useEffect(() => {
    stripeService
      .getLifetimePrices()
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoadingCards(false);
      });
  }, []);

  return (
    <section className="overflow-hidden">
      <div
        id="priceTable"
        className="content mb-10 flex flex-row flex-wrap items-end justify-center justify-items-center px-6"
      >
        <Transition
          show={loadingCards}
          enter="transition duration-500 ease-out"
          enterFrom="scale-95 translate-y-20 opacity-0"
          enterTo="scale-100 translate-y-0 opacity-100"
        >
          <div className="flex flex-row flex-wrap items-end justify-center justify-items-center p-6 py-14 pb-20">
            <p>Cargando...</p>
          </div>
        </Transition>

        {/* Render cards */}

        <Transition
          show={!loadingCards}
          enter="transition duration-500 ease-out"
          enterFrom="scale-95 translate-y-20 opacity-0"
          enterTo="scale-100 translate-y-0 opacity-100"
        >
          <div className="content flex flex-row flex-wrap items-end justify-center justify-items-center p-6 py-14 pb-20">
            {products?.individuals &&
              Object.values(products.individuals[Interval.lifetime]).map((product: any) => {
                return (
                  <PriceCard
                    planType="individual"
                    key={product.storage}
                    storage={product.storage}
                    price={product.price}
                    cta={['checkout', product.priceId]}
                    lang={lang}
                    popular={product.storage === '2TB'}
                    actualPrice={
                      Math.abs((product.price * 75) / 100)
                        .toFixed(2)
                        .split('.')[0]
                    }
                    country={country}
                  />
                );
              })}
          </div>
        </Transition>
      </div>
    </section>
  );
};

export default PriceTable;
