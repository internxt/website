import { Transition } from '@headlessui/react';
import CardSkeleton from '@/components/components/CardSkeleton';

import PriceCard from './PriceCard';
import { Detective, FolderLock, ShieldCheck } from '@phosphor-icons/react';

import OpenSource from '../../../../public/icons/open-source.svg';
import usePricing from '@/hooks/usePricing';
import { CouponType } from '@/lib/types/types';

interface PriceTableProps {
  textContent: any;
  handlePriceCardButton: (planId: string, currency: string, coupon: string) => void;
  billingFrequency: string;
  couponType?: CouponType;
  discount?: number;
  isStartPage?: boolean;
}

const PriceTable: React.FC<PriceTableProps> = ({
  textContent,
  handlePriceCardButton,
  couponType,
  discount,
  billingFrequency,
  isStartPage,
}) => {
  const { products, currency, loadingCards, coupon } = usePricing({
    couponCode: couponType,
  });

  const features = [
    {
      icon: FolderLock,
      text: textContent.features.endToEnd,
    },
    {
      icon: OpenSource,
      text: textContent.features.openSource,
    },
    {
      icon: Detective,
      text: textContent.features.anonymousAccount,
    },
  ];

  return (
    <section className="overflow-hidden bg-gray-1">
      <div className="flex flex-col items-center py-20">
        <div className="flex max-w-[774px] flex-col space-y-4 text-center">
          {isStartPage ? <p className="text-4xl font-semibold text-primary">{textContent.header}</p> : null}
          <p className="text-5xl font-semibold text-gray-100">{textContent.title}</p>
          <p className="text-xl text-gray-80">{textContent.subtitle}</p>
        </div>
        <div id="pricing-table"></div>
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
            <CardSkeleton />
          </div>
        </Transition>

        {/* Render cards */}
        <Transition
          id="pricing-table"
          show={!loadingCards}
          enterFrom="scale-95 translate-y-20 opacity-0"
          className={'flex flex-col'}
          enterTo="scale-100 translate-y-0 opacity-100"
        >
          <div className="content flex flex-row flex-wrap items-end justify-center justify-items-center p-4 py-14">
            {products?.individuals?.[billingFrequency] &&
              Object.values(products.individuals[billingFrequency]).map((product: any) => {
                return (
                  <PriceCard
                    planType="individual"
                    key={product.storage}
                    storage={product.storage}
                    price={
                      discount
                        ? parseFloat((Math.floor(parseFloat(product.price) * discount) / 100).toFixed(2))
                        : product.price
                    }
                    billingFrequency={billingFrequency}
                    popular={product.storage === '5TB'}
                    cta={['checkout', product.priceId]}
                    currency={currency}
                    contentText={textContent.priceCard}
                    onButtonClicked={handlePriceCardButton}
                    coupon={coupon ?? undefined}
                    priceBefore={discount ? product.price : undefined}
                  />
                );
              })}
          </div>
        </Transition>

        <div className="flex flex-col justify-center space-y-8 text-center md:flex-row md:items-center md:space-y-0 md:space-x-32">
          {features.map((feature) => (
            <div key={feature.text} className="flex flex-row items-center space-x-3">
              <feature.icon size={40} className="text-primary" />
              <p className="text-xl font-medium text-gray-80">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceTable;
