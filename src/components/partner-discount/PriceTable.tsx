/* eslint-disable max-len */
import React from 'react';
import { Transition } from '@headlessui/react';
import PriceCard from '@/components/partner-discount/PriceCard';
import CardSkeleton from '@/components/components/CardSkeleton';
import { CouponType } from '@/pages/api/stripe/get_coupons';
import useStripeProductsAndCurrency from '@/hooks/useStripeProductsAndCurrency';

export default function PriceTable({ lang }: { lang: string }) {
  const { products, currency, loadingCards, coupon } = useStripeProductsAndCurrency(CouponType.Special15Coupon);

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
            {products?.individuals?.['year'] &&
              Object.values(products.individuals['year']).map((product: any) => {
                return (
                  <PriceCard
                    planType="individual"
                    key={product.storage}
                    storage={product.storage}
                    price={product.price}
                    billingFrequency={'year'}
                    popular={product.storage === '5TB'}
                    cta={['checkout', product.priceId]}
                    lang={lang}
                    country={currency.symbol}
                    coupon={coupon ?? undefined}
                  />
                );
              })}
          </div>
        </Transition>
      </div>
    </section>
  );
}
