import React from 'react';
import { Coin, CreditCard, Detective } from '@phosphor-icons/react';
import PriceCard from '../prices/PriceCard';
import usePricing from '@/hooks/usePricing';
import { Interval } from '../services/stripe.service';
import { Transition } from '@headlessui/react';
import CardSkeleton from '../components/CardSkeleton';

const priceForSubscriptions = (product) => {
  const priceWithDiscount = Number((product.price * 0.75).toString());
  const firstPartOfPrice = priceWithDiscount.toString().split('.')[0];
  const secondPartOfPrice = priceWithDiscount.toString().split('.')[1].trim().slice(0, 2);
  return firstPartOfPrice + '.' + secondPartOfPrice;
};

const PriceTable = ({ lang, textContent }) => {
  const { products, currency, currencyValue, loadingCards, coupon } = usePricing({});

  return (
    <section className="overflow-hidden">
      <Transition
        show={loadingCards}
        enter="transition duration-500 ease-out"
        enterFrom="scale-95 translate-y-20 opacity-0"
        enterTo="scale-100 translate-y-0 opacity-100"
      >
        <div className="flex flex-row flex-wrap items-end justify-center justify-items-center p-6 py-14">
          {Array(4).map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      </Transition>
      <Transition
        show={!loadingCards}
        enter="transition duration-500 ease-out"
        enterFrom="scale-95 translate-y-20 opacity-0"
        enterTo="scale-100 translate-y-0 opacity-100"
      >
        <div className="content flex flex-row flex-wrap items-end justify-center justify-items-center">
          {products?.individuals?.[Interval.Lifetime] &&
            Object.values(products.individuals[Interval.Lifetime]).map((product: any) => {
              return (
                <PriceCard
                  planType="individual"
                  key={product.storage}
                  storage={product.storage}
                  price={Number(priceForSubscriptions(product))}
                  priceBefore={product.price.split('.')[0]}
                  billingFrequency={Interval.Lifetime}
                  popular={product.storage === '5TB'}
                  cta={['checkout', product.priceId]}
                  lang={lang}
                  currency={currency}
                  currencyValue={currencyValue}
                  coupon={coupon ?? undefined}
                  isRedeemCodePage
                />
              );
            })}
        </div>
      </Transition>
      <div className="flex flex-col items-center justify-center space-y-8 pt-10 text-center md:flex-row md:space-y-0 md:space-x-32">
        <div className="flex max-w-[183px] flex-col items-center space-y-3">
          <Coin size={40} className="text-primary" />
          <p className="text-xl font-medium text-gray-80">{textContent.firstFeed}</p>
        </div>
        <div className="flex max-w-[183px] flex-col items-center space-y-3">
          <CreditCard size={40} className="text-primary" />
          <p className="text-xl font-medium text-gray-80">{textContent.secondFeed}</p>
        </div>
        <div className="flex max-w-[183px] flex-col items-center space-y-3">
          <Detective size={40} className="text-primary" />
          <p className="text-xl font-medium text-gray-80">{textContent.thirdFeed}</p>
        </div>
      </div>
    </section>
  );
};

export default PriceTable;
