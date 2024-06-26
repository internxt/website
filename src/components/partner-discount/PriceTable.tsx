/* eslint-disable max-len */
import { Transition } from '@headlessui/react';
import CardSkeleton from '@/components/components/CardSkeleton';
import usePricing from '@/hooks/usePricing';
import { CouponType } from '@/lib/types';
import PriceCard from '../prices/PriceCard';
import { Interval } from '../services/stripe.service';

export default function PriceTable({ lang }: { lang: string }) {
  const { products, currency, currencyValue, loadingCards, coupon } = usePricing({
    couponCode: CouponType.Special15Coupon,
  });

  const priceForSubscriptions = (product) => {
    const priceWithDiscount = Number((product.price * 0.85).toString());
    const firstPartOfPrice = priceWithDiscount.toString().split('.')[0];
    const secondPartOfPrice = priceWithDiscount.toString().split('.')[1].trim().slice(0, 2);
    return firstPartOfPrice + '.' + secondPartOfPrice;
  };

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
              products.individuals['year'].map((product: any) => {
                return (
                  <PriceCard
                    planType="individual"
                    key={product.storage}
                    storage={product.storage}
                    price={coupon ? Number(priceForSubscriptions(product)) : product.price.split('.')[0]}
                    billingFrequency={Interval.Year}
                    popular={product.storage === '5TB'}
                    cta={['checkout', product.priceId]}
                    priceBefore={product.price}
                    lang={lang}
                    currency={currency}
                    coupon={coupon ?? undefined}
                    currencyValue={currencyValue}
                  />
                );
              })}
          </div>
        </Transition>
      </div>
    </section>
  );
}
