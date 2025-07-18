import { CurrencyCircleDollar, Lifebuoy } from '@phosphor-icons/react';
import { OpenSource } from '../icons/OpenSource';
import { HorizontalPriceCard } from './PriceCard/HorizontalPriceCard';
import { Interval, TransformedProduct } from '@/services/stripe.service';
import { useEffect, useState } from 'react';
import { PromoCodeName } from '@/lib/types';
import usePricing from '@/hooks/usePricing';
import CardSkeleton from '@/components/components/CardSkeleton';

interface PriceTableProps {
  textContent: Record<string, any>;
  couponName: PromoCodeName;
  bgColor?: string;
}

export const HorizontalPricingSection = ({ textContent, couponName, bgColor }: PriceTableProps): JSX.Element => {
  const features = [
    {
      icon: Lifebuoy,
      text: textContent.features.premiumSupport,
    },
    {
      icon: CurrencyCircleDollar,
      text: textContent.features.guarantee,
    },
    {
      icon: OpenSource,
      text: textContent.features.openSource,
    },
  ];

  const [activeProduct, setActiveProduct] = useState<TransformedProduct>();

  const { products, coupon, loadingCards, currency, currencyValue } = usePricing({
    couponCode: couponName,
  });

  const lifetimePlans = products?.individuals[Interval.Lifetime];

  useEffect(() => {
    if (!loadingCards && lifetimePlans && lifetimePlans.length > 0) {
      const initialProduct = lifetimePlans.find((plan) => plan.storage === '5TB');
      if (initialProduct) {
        setActiveProduct(initialProduct);
      }
    }
  }, [loadingCards, lifetimePlans]);

  const decimalDiscount = coupon?.percentOff && 100 - coupon.percentOff;

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center bg-transparent text-center">
        <div className="space-y-6 pb-12 pt-12 lg:w-[774px] lg:pb-8 lg:pt-24">
          <p className="text-2xl font-semibold text-primary lg:text-4xl">{textContent.mostPopular}</p>
          <p className="text-3xl font-semibold text-gray-100 lg:text-5xl">{textContent.title}</p>
          <p className="font-regular w-[290px] text-lg text-gray-100 lg:w-full lg:text-xl">{textContent.description}</p>
        </div>
        {activeProduct ? (
          <HorizontalPriceCard
            decimalDiscountValue={decimalDiscount}
            storage={activeProduct?.storage}
            popular={false}
            currency={currency}
            priceBefore={activeProduct?.price.toString().split('.')[0]}
            price={Number(activeProduct?.price)}
            planId={activeProduct?.priceId}
            currencyValue={currencyValue}
            coupon={coupon}
          />
        ) : (
          <CardSkeleton maxWidth="max-w-[480px]" cardWidthForDesk="xs:max-w-[480px] xs:w-screen" />
        )}
        <div className="flex flex-col items-center justify-center space-y-8 pb-24 pt-8 text-center md:flex-row md:items-start md:space-x-32 md:space-y-0">
          {features.map((feature) => (
            <div key={feature.text} className="flex flex-col items-center space-x-3 md:max-w-[33%] md:flex-row">
              <feature.icon size={40} className="!h-[40px] !w-[40px] shrink-0 text-primary md:pb-0" />
              <p className={`text-xl font-medium text-gray-80`}>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
