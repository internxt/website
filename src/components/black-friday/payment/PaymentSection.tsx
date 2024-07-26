import { Interval } from '@/components/services/stripe.service';
import { Transition } from '@headlessui/react';
import CardSkeleton from '@/components/components/CardSkeleton';
import { CreditCard, CurrencyCircleDollar, Detective } from '@phosphor-icons/react';
import usePricing from '@/hooks/usePricing';
import PriceCard from '@/components/prices/PriceCard';

const PaymentSection = ({ textContent }) => {
  const { products, currency, loadingCards } = usePricing();

  return (
    <section id="priceTable" className="overflow-hidden bg-[#111111]">
      <div className="flex flex-col items-center space-y-16 px-5 py-20">
        <div className="flex max-w-[974px] flex-col items-center space-y-6">
          <h2 className="text-center text-4xl font-semibold text-white md:text-5xl">{textContent.title}</h2>
          <p className="text-center text-xl text-gray-5">{textContent.subtitle}</p>
        </div>
        {
          <Transition
            show={loadingCards}
            enter="transition duration-500 ease-out"
            enterFrom="scale-95 translate-y-20 opacity-0"
            enterTo="scale-100 translate-y-0 opacity-100"
          >
            <div className="flex flex-row flex-wrap items-end justify-center justify-items-center p-6 py-14 ">
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </div>
          </Transition>
        }
        <Transition
          show={!loadingCards}
          enterFrom="scale-95 translate-y-20 opacity-0"
          enterTo="scale-100 translate-y-0 opacity-100"
        >
          <div className="content flex flex-row flex-wrap items-end justify-center justify-items-center gap-5 p-6">
            {!loadingCards &&
              products?.individuals?.[Interval.Year].map((product: any) => (
                <PriceCard
                  planType="individual"
                  key={product.storage}
                  storage={product.storage}
                  price={Number(Math.abs((product.price * 9) / 100).toFixed(2))}
                  billingFrequency={Interval.Year}
                  popular={product.storage === '2TB'}
                  cta={['checkout', product.priceId]}
                  lang={'en'}
                  currency={currency}
                  priceBefore={product.price}
                />
              ))}
          </div>
        </Transition>
        <div className="flex flex-col items-center justify-center space-y-8 text-center md:flex-row md:space-y-0 md:space-x-32">
          <div className="flex max-w-[183px] flex-col items-center space-y-3">
            <CurrencyCircleDollar size={40} className="text-primary" />
            <p className="text-lg font-medium text-gray-20">{textContent.feeds.firstFeature}</p>
          </div>
          <div className="flex max-w-[183px] flex-col items-center space-y-3">
            <CreditCard size={40} className="text-primary" />
            <p className="text-lg font-medium text-gray-20">{textContent.feeds.secondFeature}</p>
          </div>
          <div className="flex max-w-[183px] flex-col items-center space-y-3">
            <Detective size={40} className="text-primary" />
            <p className="text-lg font-medium text-gray-20">{textContent.feeds.thirdFeature}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
