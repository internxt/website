import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import CardSkeleton from '@/components/components/CardSkeleton';
import usePricing from '@/hooks/usePricing';
import PriceCard from '@/components/prices/PriceCard';
import { CouponType } from '@/lib/types';
import { Interval, stripeService } from '../services/stripe.service';

interface PriceTableProps {
  lang: string;
  discount?: number;
  normalPrice?: boolean;
  couponCode?: CouponType;
  isLifetimeSpecial?: boolean;
  isCelebrationPage?: boolean;
}

const PriceTable: React.FC<PriceTableProps> = ({
  lang,
  normalPrice,
  couponCode,
  discount,
  isLifetimeSpecial,
  isCelebrationPage,
}) => {
  const [coupon, setCoupon] = useState();
  const { products, currency, currencyValue, loadingCards } = usePricing({});

  useEffect(() => {
    stripeService.getLifetimeCoupons().then((coupon) => {
      setCoupon(coupon);
    });
  }, []);

  const productsArray = products?.individuals?.['lifetime'] && Object.values(products?.individuals?.['lifetime']);

  const updatedProductsArray = productsArray
    ? productsArray.map((product: any, index: number) => {
        if (index === 1) {
          return productsArray[2];
        } else if (index === 2) {
          return productsArray[1];
        } else {
          return product;
        }
      })
    : null;

  const lifetimeProducts = isLifetimeSpecial ? updatedProductsArray : productsArray;

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
          <div className="flex flex-row flex-wrap items-end justify-center justify-items-center p-6 pb-20">
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
          <div className="content flex flex-row flex-wrap items-end justify-center justify-items-center p-6 pb-16">
            {lifetimeProducts
              ? lifetimeProducts.map((product: any) => {
                  return (
                    <PriceCard
                      planType="individual"
                      key={product.storage}
                      storage={product.storage}
                      price={
                        coupon && discount && !normalPrice
                          ? Number(product.price * 0.2).toFixed(2)
                          : product.price.split('.')[0]
                      }
                      cta={['checkout', product.priceId]}
                      lang={lang}
                      billingFrequency={Interval.Lifetime}
                      popular={isLifetimeSpecial ? product.storage === '10TB' : product.storage === '5TB'}
                      priceBefore={coupon && !normalPrice ? product.price.split('.')[0] : undefined}
                      currency={currency}
                      currencyValue={currencyValue}
                      coupon={!normalPrice ? coupon?.[product.storage] ?? undefined : undefined}
                      isCelebrationPage={isCelebrationPage}
                    />
                  );
                })
              : null}
          </div>
        </Transition>
      </div>
    </section>
  );
};

export default PriceTable;
