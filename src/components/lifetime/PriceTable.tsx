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
  lifetimeMode?: 'celebration' | 'custom-disc' | 'normal';
}

const DISC_LIFETIME_PRICES = {
  eur: {
    '2TB': 199,
    '5TB': 299,
    '10TB': 599,
  },
  usd: {
    '2TB': 249,
    '5TB': 349,
    '10TB': 649,
  },
};

const PriceTable: React.FC<PriceTableProps> = ({ lang, normalPrice, couponCode, discount, lifetimeMode }) => {
  const [specialCoupons, setSpecialCoupons] = useState();
  const { products, currency, currencyValue, coupon, loadingCards } = usePricing({
    couponCode: couponCode,
  });

  useEffect(() => {
    if (lifetimeMode === 'normal' || lifetimeMode === 'celebration') return;

    stripeService.getLifetimeCoupons().then((coupon) => {
      setSpecialCoupons(coupon);
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

  const lifetimeProducts = lifetimeMode === 'normal' ? updatedProductsArray : productsArray;

  const lifetimePrices = (price, discount, storage) => {
    switch (lifetimeMode) {
      case 'normal':
        return price.split('.')[0];
      case 'celebration':
        return Number(price * discount).toFixed(2);

      case 'custom-disc':
        return DISC_LIFETIME_PRICES[currencyValue][storage];
      default:
        return price.split('.')[0];
    }
  };

  const couponCodeFiltered = (storage) => {
    switch (lifetimeMode) {
      case 'custom-disc':
        return specialCoupons?.[storage];

      case 'celebration':
        console.log('COUPON CODE', coupon);
        return coupon;

      case 'normal':
        return undefined;

      default:
        return undefined;
    }
  };

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
                      price={lifetimePrices(product.price, discount, product.storage)}
                      cta={['checkout', product.priceId]}
                      lang={lang}
                      billingFrequency={Interval.Lifetime}
                      popular={lifetimeMode === 'normal' ? product.storage === '10TB' : product.storage === '5TB'}
                      priceBefore={lifetimeMode !== 'normal' ? product.price.split('.')[0] : undefined}
                      currency={currency}
                      currencyValue={currencyValue}
                      coupon={couponCodeFiltered(product.storage)}
                      isCelebrationPage={lifetimeMode === 'celebration'}
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
