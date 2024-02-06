import React from 'react';
import PriceCard from './PriceCard';
import { Transition } from '@headlessui/react';
import CardSkeleton from '@/components/components/CardSkeleton';
import useStripeAndCurrency from '@/hooks/useProducts';
import { CouponType } from '@/pages/api/stripe/get_coupons';

const PriceTable = ({ lang }) => {
  const { products, currency, loadingCards } = useStripeAndCurrency(CouponType.LifetimeExclusive);

  return (
    <section className="overflow-hidden">
      <div
        id="priceTable"
        className="content flex flex-row flex-wrap items-end justify-center justify-items-center px-6"
      >
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
          <div className="content flex flex-row flex-wrap items-end justify-center justify-items-center p-6 py-14 pb-16">
            {products?.individuals?.['lifetime'] &&
              Object.values(products.individuals['lifetime']).map((product: any) => {
                return (
                  <PriceCard
                    planType="individual"
                    key={product.storage}
                    storage={product.storage}
                    price={product.price.split('.')[0]}
                    cta={['checkout', product.priceId]}
                    lang={lang}
                    popular={product.storage === '5TB'}
                    actualPrice={
                      Math.abs((product.price * 50) / 100)
                        .toFixed(2)
                        .split('.')[0]
                    }
                    currency={currency.symbol}
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
