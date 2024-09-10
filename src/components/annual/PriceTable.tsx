/* eslint-disable max-len */
import { Transition } from '@headlessui/react';
import PriceCard from '@/components/prices/PriceCard';
import CardSkeleton from '@/components/components/CardSkeleton';
import usePricing from '@/hooks/usePricing';
import { Interval, TransformedProduct } from '../services/stripe.service';

export default function PriceTable({ lang }: Readonly<{ lang: string }>) {
  const { products, currency, loadingCards } = usePricing();

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
            <CardSkeleton />
          </div>
        </Transition>

        {/* Render cards */}

        <Transition
          show={!loadingCards}
          enterFrom="scale-95 translate-y-20 opacity-0"
          enterTo="scale-100 translate-y-0 opacity-100"
        >
          <div className="content flex flex-row flex-wrap items-end justify-center justify-items-center gap-5 p-6 py-14 pb-20">
            {products?.individuals?.['year']
              ? products.individuals['year'].map((product: TransformedProduct) => {
                  return (
                    <PriceCard
                      planType="individual"
                      key={product.storage}
                      storage={product.storage}
                      price={product.price}
                      billingFrequency={Interval.Year}
                      popular={product.storage === '5TB'}
                      cta={['checkout', product.priceId]}
                      lang={lang}
                      currency={currency}
                    />
                  );
                })
              : undefined}
          </div>
        </Transition>
      </div>
    </section>
  );
}
