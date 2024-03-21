import React from 'react';
import { Transition } from '@headlessui/react';
import CardSkeleton from '@/components/components/CardSkeleton';
import usePricing from '@/hooks/usePricing';
import PriceCard from '../prices/PriceCard';
import { CouponType } from '@/lib/types/types';

interface PriceTableProps {
  lang: string;
  normalPrice?: boolean;
  couponCode?: CouponType;
}

const PriceTable: React.FC<PriceTableProps> = ({ lang, normalPrice, couponCode }) => {
  const { products, currency, coupon, loadingCards } = usePricing({
    couponCode: couponCode,
  });

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
                    price={
                      coupon && !normalPrice ? Number((product.price * 0.25).toString()) : product.price.split('.')[0]
                    }
                    cta={['checkout', product.priceId]}
                    lang={lang}
                    billingFrequency="lifetime"
                    popular={product.storage === '5TB'}
                    priceBefore={coupon && !normalPrice ? product.price.split('.')[0] : undefined}
                    currency={currency}
                    coupon={coupon ?? undefined}
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
