import { ClockCounterClockwise, HandCoins, ShieldCheck } from '@phosphor-icons/react';
import PriceCard from '../PriceCard';
import CardSkeleton from '@/components/components/CardSkeleton';
import { TransformedProduct } from '@/components/services/stripe.service';

interface PriceTableForAlternativePricingProps {
  textContent: Record<string, any>;
  selectedPlanStorage: string;
  discount: number;
  lang: string;
  filteredProducts: any;
  currency: string;
  coupons: Record<string, any>;
  currencyValue: string;
  handleOnPlanButtonClicked: (plan: string) => void;
  availableStorage?: TransformedProduct[];
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
  discount,
  filteredProducts,
  availableStorage,
  currency,
  coupons,
  currencyValue,
  handleOnPlanButtonClicked,
}: PriceTableForAlternativePricingProps): JSX.Element => {
  const iconsFeatures = [ShieldCheck, HandCoins, ClockCounterClockwise];

  return (
    <section id={'priceTable'} className="overflow-hidden py-20 px-5">
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center justify-center gap-10 pb-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="max-w-[900px] text-center text-4xl font-semibold text-gray-100 lg:text-6xl">
              {textContent.title.normal1} <span className="text-primary">{textContent.title.blue2}</span>
              {textContent.title.normal2}
            </p>
            <p className="max-w-[550px] text-xl text-gray-80">{textContent.description}</p>
          </div>
          <div className="flex flex-row flex-wrap items-center gap-10 sm:justify-center md:gap-20 lg:gap-32">
            {iconsFeatures.map((Icon, index) => (
              <div key={textContent.features[index]} className="flex flex-row gap-6 md:items-center">
                <Icon size={40} className="text-primary" />
                <p className="pt-1 text-xl font-medium text-gray-100 md:pt-0">{textContent.features[index]}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-screen border border-gray-10" />

        <div className="flex flex-col items-center gap-4 pt-10">
          <p className="text-center text-4xl font-semibold text-gray-100">{textContent.howMuchStorage}</p>
          <div id="billingButtons" className="flex w-max flex-row rounded-lg bg-cool-gray-10 p-0.5">
            {availableStorage?.map((plan) => (
              <button
                key={plan.priceId}
                type="button"
                onClick={() => {
                  handleOnPlanButtonClicked(plan.storage);
                }}
                className={`rounded-lg py-0.5 px-6 font-semibold ${
                  plan.storage === selectedPlanStorage ? 'bg-white text-cool-gray-80 shadow-sm' : 'text-cool-gray-50'
                }`}
              >
                {plan.storage}
              </button>
            ))}
          </div>
          <div className="content flex flex-row flex-wrap items-end justify-center justify-items-center p-4">
            {filteredProducts
              ? filteredProducts?.map((product: TransformedProduct) => (
                  <PriceCard
                    planType="individual"
                    key={product.interval}
                    storage={product.storage}
                    price={(product.price * discount).toFixed(2) as unknown as number}
                    label={CARD_LABEL[product.interval]}
                    billingFrequency={product.interval}
                    popular={
                      product.storage !== '200GB' ? product.interval === 'lifetime' : product.interval === 'year'
                    }
                    cta={['checkout', product.priceId]}
                    priceBefore={product.price}
                    lang={lang}
                    currency={currency}
                    isOffer
                    coupon={coupons.subscription}
                    currencyValue={currencyValue}
                  />
                ))
              : Array(3)
                  .fill(0)
                  .map(() => <CardSkeleton />)}
          </div>
        </div>
      </div>
    </section>
  );
};
