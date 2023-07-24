/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import PriceCard from '../partner-discount/PriceCard';
import { stripeService } from '../services/stripeService';
import CardSkeleton from '../components/CardSkeleton';
import { CouponType } from '../../pages/api/stripe/get_coupons';

export default function PriceTable({ lang, country }: { lang: string; country?: string }) {
  const [products, setProducts] = useState(null);
  const [loadingCards, setLoadingCards] = useState(true);
  const [coupon, setCoupon] = useState(null);

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

    stripeService
      .getCoupon(CouponType.Special15Coupon)
      .then((coupon) => {
        setCoupon(coupon);
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
                    price={product.price}
                    billingFrequency={'year'}
                    popular={product.storage === '200GB'}
                    cta={['checkout', product.priceId]}
                    lang={lang}
                    coupon={coupon}
                  />
                );
              })}
          </div>
        </Transition>
      </div>
    </section>
  );
}
