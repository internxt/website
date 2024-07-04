import PriceCard from '../PriceCard';
import Countdown from '@/components/components/Countdown';
import { formatText } from '@/components/utils/format-text';

interface PriceTableForAlternativePricingProps {
  textContent: Record<string, any>;
  selectedPlanStorage: string;
  lang: string;
  filteredProducts: any;
  currency: string;
  currencyValue: string;
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
  filteredProducts,
  currency,
  currencyValue,
}: PriceTableForAlternativePricingProps) => {
  return (
    <section className="overflow-hidden bg-gray-1 py-20 px-5">
      <div id={'priceTable'} className="flex flex-col items-center gap-10">
        <p className="max-w-[850px] text-center text-4xl font-semibold text-gray-100 lg:text-6xl">
          {formatText(textContent.title.normal, {
            storage: selectedPlanStorage,
          })}{' '}
          <span className="text-primary">{textContent.title.blue}</span>
        </p>

        <div className="flex flex-row items-center gap-2.5 rounded-full bg-primary/7 px-3 py-1.5">
          <p className="font-medium text-gray-100 lg:text-xl">{textContent.offerEnds}</p>
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
