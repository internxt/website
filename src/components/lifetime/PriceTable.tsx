import { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import CardSkeleton from '@/components/components/CardSkeleton';
import usePricing from '@/hooks/usePricing';
import PriceCard from '@/components/prices/PriceCard';
import { PromoCodeName } from '@/lib/types';
import { Interval, stripeService } from '@/services/stripe.service';
import { LifetimeMode } from './PaymentSection';

interface PriceTableProps {
  lang: string;
  discount?: number;
  couponCode?: PromoCodeName;
  lifetimeMode?: LifetimeMode;
  showPriceBefore?: boolean;
  currencySpecified?: string;
  isStackCommerce?: boolean;
  showOffer?: boolean;
  onButtonClicked?: () => void;
}

const DISC_LIFETIME_PRICES = {
  eur: {
    '2TB': 249,
    '5TB': 449,
    '10TB': 749,
  },
  usd: {
    '2TB': 349,
    '5TB': 599,
    '10TB': 899,
  },
};
const LIFETIME_MODES_WITH_POPULAR_10TB = ['celebration', 'normal'];

const PriceTable = ({
  lang,
  couponCode,
  discount,
  showPriceBefore,
  lifetimeMode,
  currencySpecified,
  isStackCommerce,
  showOffer,
  onButtonClicked,
}: PriceTableProps): JSX.Element => {
  const popularStoragePlan = LIFETIME_MODES_WITH_POPULAR_10TB.includes(lifetimeMode ?? '') ? '5TB' : '3TB';
  const [specialCoupons, setSpecialCoupons] = useState();

  const { products, currency, currencyValue, coupon, loadingCards } = usePricing({
    couponCode: couponCode,
    currencySpecified: currencySpecified,
  });

  useEffect(() => {
    if (lifetimeMode === 'normal' || lifetimeMode === 'celebration') return;

    stripeService
      .getLifetimeCoupons()
      .then((coupon) => {
        setSpecialCoupons(coupon);
      })
      .catch(() => {
        // NO OP
      });
  }, []);

  const productsArray = products?.individuals?.['lifetime'];

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
  const finalDiscount = discount ? discount : 1;
  const lifetimePrices = (price, discount, storage) => {
    switch (lifetimeMode) {
      case 'normal':
        return price.split('.')[0];
      case 'celebration':
        return Number(price * finalDiscount)
          .toFixed(2)
          .replace(/\.00$/, '');

      case 'custom-disc':
        return DISC_LIFETIME_PRICES[currencyValue][storage];
      case 'redeem':
        return discount
          ? Number(price * discount)
              .toFixed(2)
              .replace(/\.00$/, '')
          : price.split('.')[0];
      default:
        return price.split('.')[0];
    }
  };

  const couponCodeFiltered = (storage) => {
    switch (lifetimeMode) {
      case 'custom-disc':
        return specialCoupons?.[storage];

      case 'celebration':
        return coupon;

      case 'normal':
        return undefined;

      default:
        return undefined;
    }
  };

  const percentOff = discount ? 100 - discount * 100 : 0;
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
          <div className="flex flex-row flex-wrap items-end justify-center justify-items-center p-6 pb-10">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </div>
        </Transition>

        {/* Render cards */}

        {isStackCommerce ? (
          <Transition
            show={!loadingCards}
            enterFrom="scale-95 translate-y-20 opacity-0"
            enterTo="scale-100 translate-y-0 opacity-100"
          >
            <div className="content flex flex-row flex-wrap items-end justify-center justify-items-center gap-5 p-6 pb-10">
              <PriceCard
                planType="individual"
                key={'2TB'}
                storage={'2TB'}
                price={lifetimePrices('900.0', discount, '2TB')}
                cta={['checkout', 'price_1PNxYtFAOdcgaBMQzkimr6OU']}
                lang={lang}
                billingFrequency={Interval.Lifetime}
                popular={false}
                currency={currency}
                currencyValue={currencyValue}
                coupon={couponCodeFiltered('2TB')}
                isLifetimePage={true}
                lifetimeMode={lifetimeMode}
                onButtonClicked={onButtonClicked}
                percentOff={percentOff}
                isStackCommerce={isStackCommerce}
                index={0}
                showOffer={false}
              />
              <PriceCard
                planType="individual"
                key={'5TB'}
                storage={'5TB'}
                price={lifetimePrices('1900.0', discount, '5TB')}
                cta={['checkout', 'price_1PNxZkFAOdcgaBMQi0UCtXBj']}
                lang={lang}
                billingFrequency={Interval.Lifetime}
                popular={false}
                currency={currency}
                currencyValue={currencyValue}
                coupon={couponCodeFiltered('5TB')}
                isLifetimePage={true}
                lifetimeMode={lifetimeMode}
                onButtonClicked={onButtonClicked}
                percentOff={percentOff}
                isStackCommerce={isStackCommerce}
                index={1}
                showOffer={false}
              />
              <PriceCard
                planType="individual"
                key={'10TB'}
                storage={'10TB'}
                price={lifetimePrices('2900.0', discount, '10TB')}
                cta={['checkout', 'price_1PLMTpFAOdcgaBMQ0Jag685H']}
                lang={lang}
                billingFrequency={Interval.Lifetime}
                popular={true}
                currency={currency}
                currencyValue={currencyValue}
                coupon={couponCodeFiltered('10TB')}
                isLifetimePage={true}
                lifetimeMode={lifetimeMode}
                onButtonClicked={onButtonClicked}
                percentOff={percentOff}
                isStackCommerce={isStackCommerce}
                index={2}
                showOffer={false}
              />
              <PriceCard
                planType="individual"
                key={'20TB'}
                storage={'20TB'}
                price={lifetimePrices('4900.0', discount, '20TB')}
                cta={['checkout', 'price_1RByJuFAOdcgaBMQBbzipdbU']}
                lang={lang}
                billingFrequency={Interval.Lifetime}
                popular={false}
                currency={currency}
                currencyValue={currencyValue}
                coupon={couponCodeFiltered('20TB')}
                isLifetimePage={true}
                lifetimeMode={lifetimeMode}
                onButtonClicked={onButtonClicked}
                percentOff={percentOff}
                isStackCommerce={isStackCommerce}
                index={3}
                showOffer={false}
              />
            </div>
          </Transition>
        ) : (
          <Transition
            show={!loadingCards}
            enterFrom="scale-95 translate-y-20 opacity-0"
            enterTo="scale-100 translate-y-0 opacity-100"
          >
            <div className="content flex flex-row flex-wrap items-end justify-center justify-items-center gap-5 p-6 pb-10">
              {lifetimeProducts
                ? lifetimeProducts.map((product: any, index) => {
                    return (
                      <PriceCard
                        planType="individual"
                        key={product.storage}
                        storage={product.storage}
                        price={lifetimePrices(product.price, discount, product.storage)}
                        cta={['checkout', product.priceId]}
                        lang={lang}
                        billingFrequency={Interval.Lifetime}
                        popular={product.storage === popularStoragePlan}
                        priceBefore={showPriceBefore ? product.price.split('.')[0] : undefined}
                        currency={currency}
                        currencyValue={currencyValue}
                        coupon={couponCodeFiltered(product.storage)}
                        isLifetimePage={true}
                        lifetimeMode={lifetimeMode}
                        onButtonClicked={onButtonClicked}
                        percentOff={percentOff}
                        isStackCommerce={isStackCommerce}
                        index={index}
                        showOffer={false}
                      />
                    );
                  })
                : null}
            </div>
          </Transition>
        )}
      </div>
    </section>
  );
};

export default PriceTable;
