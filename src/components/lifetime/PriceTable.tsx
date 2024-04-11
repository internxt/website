import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import CardSkeleton from '@/components/components/CardSkeleton';
import usePricing from '@/hooks/usePricing';
import PriceCard from '../prices/PriceCard';
import { CouponType } from '@/lib/types/types';
import { stripeService } from '../services/stripe.service';

interface PriceTableProps {
  lang: string;
  discount?: number;
  normalPrice?: boolean;
  couponCode?: CouponType;
  isLifetimeSpecial?: boolean;
}

const PriceTable: React.FC<PriceTableProps> = ({ lang, normalPrice, couponCode, discount, isLifetimeSpecial }) => {
  const [coupon, setCoupon] = useState();
  const { products, currency, currencyValue, loadingCards } = usePricing({});

  useEffect(() => {
    stripeService.getLifetimeCoupons().then((coupon) => {
      setCoupon(coupon);
    });
  }, []);

  const lifetimePrices = {
    eur: {
      '2TB': 199,
      '5TB': 299,
      '10TB': 499,
    },
    usd: {
      '2TB': 249,
      '5TB': 349,
      '10TB': 549,
    },
  };

  const productsArray = products?.individuals?.['lifetime'] && Object.values(products?.individuals?.['lifetime']);

  // Intercambiar la posición del segundo y tercer elementos
  const updatedProductsArray =
    productsArray &&
    productsArray.map((product: any, index: number) => {
      if (index === 1) {
        // Si es el segundo elemento, devolver el tercer elemento
        return productsArray[2];
      } else if (index === 2) {
        // Si es el tercer elemento, devolver el segundo elemento
        return productsArray[1];
      } else {
        // Devolver los elementos restantes sin cambios
        return product;
      }
    });

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
            {lifetimeProducts &&
              lifetimeProducts.map((product: any) => {
                return (
                  <PriceCard
                    planType="individual"
                    key={product.storage}
                    storage={product.storage}
                    price={
                      coupon && discount && !normalPrice
                        ? lifetimePrices[currencyValue][product.storage]
                        : product.price.split('.')[0]
                    }
                    cta={['checkout', product.priceId]}
                    lang={lang}
                    billingFrequency="lifetime"
                    popular={isLifetimeSpecial ? product.storage === '10TB' : product.storage === '5TB'}
                    priceBefore={coupon && !normalPrice ? product.price.split('.')[0] : undefined}
                    currency={currency}
                    currencyValue={currencyValue}
                    coupon={!normalPrice ? coupon?.[product.storage] ?? undefined : undefined}
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
