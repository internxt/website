import usePricing from '@/hooks/usePricing';
import PriceCard from '../PriceCard';
import { useEffect, useState } from 'react';
import Countdown from '@/components/components/Countdown';

interface PriceTableForAlternativePricingProps {
  textContent: Record<string, any>;
  selectedPlanStorage: string;
  lang: string;
}

const CARD_LABEL = {
  lifetime: 'Lifetime',
  year: 'Yearly',
  month: 'Monthly',
};

export const PriceTableForAlternativePricing = ({
  textContent,
  selectedPlanStorage,
  lang,
}: PriceTableForAlternativePricingProps) => {
  const [filteredProducts, setFilteredProducts] = useState<any[]>();

  const { products, currency, currencyValue } = usePricing();

  const joinProducts = products?.individuals && Object.values(products?.individuals).flat();

  useEffect(() => {
    const productsFilteredByStorage =
      joinProducts &&
      joinProducts.filter((product: { storage: string }) => product.storage === selectedPlanStorage)?.reverse();

    setFilteredProducts(productsFilteredByStorage);
  }, [selectedPlanStorage, products]);

  return (
    <section className="overflow-hidden bg-gray-1 py-20 px-5">
      <div id={'priceTable'} className="flex flex-col items-center gap-10">
        <p className="max-w-[820px] text-center text-4xl font-semibold text-gray-100 lg:text-6xl">
          {textContent.title.normal} <span className="text-primary">{textContent.title.blue}</span>
        </p>

        <div className="flex flex-row items-center gap-2.5 rounded-full bg-primary/7 px-3 py-1.5">
          <p className="text-xl font-medium text-gray-100">{textContent.offerEnds}</p>
          <Countdown />
        </div>

        <div className="content flex flex-row flex-wrap items-end justify-center justify-items-center p-4">
          {filteredProducts?.map((product: any) => (
            <PriceCard
              planType="individual"
              key={product.interval}
              storage={product.storage}
              price={product.price}
              label={CARD_LABEL[product.interval]}
              billingFrequency={product.interval}
              popular={product.interval === 'lifetime'}
              cta={['checkout', product.priceId]}
              priceBefore={undefined}
              lang={lang}
              currency={currency}
              coupon={undefined}
              currencyValue={currencyValue}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
