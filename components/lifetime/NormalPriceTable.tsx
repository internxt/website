import { Transition } from '@headlessui/react';
import { useEffect, useState } from 'react';
import CardSkeleton from '../components/CardSkeleton';
import { stripeService } from '../services/stripeService';
import NormalPriceCard from './NormalPriceCard';

const NormalPriceTable = ({ lang, country }) => {
  const billingFrequency = -1;
  const [products, setProducts] = useState(null);
  const [loadingCards, setLoadingCards] = useState(true);

  const billingPrice = (price) => price[billingFrequency];

  useEffect(() => {
    setLoadingCards(true);
    stripeService
      .getLifetimePrices()
      .then((prices) => {
        setProducts(prices);
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
        id="normalPriceTable"
        className="content mb-10 flex flex-row flex-wrap items-end justify-center justify-items-center px-6"
      >
        <Transition
          show={loadingCards}
          enter="transition duration-500 ease-out"
          enterFrom="scale-95 translate-y-20 opacity-0"
          enterTo="scale-100 translate-y-0 opacity-100"
        >
          <div className="flex flex-row flex-wrap items-end justify-center justify-items-center p-6 py-14 pb-20">
            {Array.from({ length: 3 }).map((_, i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        </Transition>

        {/* Render cards */}

        <Transition
          show={!loadingCards}
          enterFrom="scale-95 translate-y-20 opacity-0"
          enterTo="scale-100 translate-y-0 opacity-100"
        >
          <div className="content flex flex-row flex-wrap items-end justify-center justify-items-center p-6 py-14 pb-20">
            {products &&
              Object.values(products).map((product: any) => {
                return (
                  <NormalPriceCard
                    planType="individual"
                    key={product.storage}
                    storage={product.storage}
                    price={product.price}
                    cta={['checkout', product.priceId]}
                    lang={lang}
                    popular={product.storage === '2TB'}
                    billingFrequency={billingFrequency}
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

export default NormalPriceTable;
