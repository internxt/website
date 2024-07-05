import PriceCard from '../PriceCard';
import Countdown from '@/components/components/Countdown';
import { formatText } from '@/components/utils/format-text';

interface PriceTableForAlternativePricingProps {
  textContent: Record<string, any>;
  selectedPlanStorage: string;
  discount: number;
  lang: string;
  filteredProducts: any;
  currency: string;
  coupons: Record<string, any>;
  currencyValue: string;
}

const CARD_LABEL = {
  lifetime: 'Lifetime',
  year: 'Yearly',
  month: 'Monthly',
};

const DISC_LIFETIME_PRICES = {
  eur: {
    '2TB': '249.00',
    '5TB': '449.00',
    '10TB': '749.00',
  },
  usd: {
    '2TB': '299.00',
    '5TB': '499.00',
    '10TB': '799.00',
  },
};

export const PriceTableForAlternativePricing = ({
  textContent,
  selectedPlanStorage,
  lang,
  discount,
  filteredProducts,
  currency,
  coupons,
  currencyValue,
}: PriceTableForAlternativePricingProps) => (
  <section id={'priceTable'} className="overflow-hidden bg-gray-1 py-20 px-5">
    <div className="flex flex-col items-center gap-10">
      <p className="max-w-[850px] text-center text-4xl font-semibold text-gray-100 lg:text-6xl">
        {formatText(textContent.title.normal, {
          storage: selectedPlanStorage,
        })}{' '}
        <span className="text-primary">{textContent.title.blue}</span>
      </p>

      <div className="flex w-full max-w-[270px] flex-col items-center justify-center gap-2 rounded-lg bg-primary/7 px-7 py-1.5 md:px-10 lg:max-w-[400px] lg:flex-row lg:gap-4 lg:rounded-full">
        <p className="whitespace-nowrap font-medium text-gray-100 lg:text-xl">{textContent.offerEnds}</p>
        <div className="flex w-full max-w-[180px]">
          <Countdown />
        </div>
      </div>

      <div className="content flex flex-row flex-wrap items-end justify-center justify-items-center p-4">
        {filteredProducts?.map((product: any) => (
          <PriceCard
            planType="individual"
            key={product.interval}
            storage={product.storage}
            price={
              product.interval === 'lifetime'
                ? DISC_LIFETIME_PRICES[currencyValue][product.storage]
                : ((product.price * discount).toFixed(2) as unknown as number)
            }
            label={CARD_LABEL[product.interval]}
            billingFrequency={product.interval}
            popular={product.interval === 'lifetime'}
            cta={['checkout', product.priceId]}
            priceBefore={product.price}
            lang={lang}
            currency={currency}
            coupon={product.interval === 'lifetime' ? coupons.lifetime[product.storage] : coupons.subscription}
            currencyValue={currencyValue}
          />
        ))}
      </div>
    </div>
  </section>
);
