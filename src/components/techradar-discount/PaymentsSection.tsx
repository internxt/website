import CardSkeleton from '@/components/components/CardSkeleton';
import PriceCard from './PriceCard';
import usePricing from '@/hooks/usePricing';

const PaymentsSection = ({ textContent }) => {
  const { products, currency, loadingCards } = usePricing();

  return (
    <section id="priceTable" className="">
      <div className="flex flex-col items-center bg-gray-5 p-20">
        <div className="flex max-w-[641px] flex-col space-y-4 text-center">
          <p className="text-4xl font-semibold">{textContent.title}</p>
          <p className="text-xl font-normal">{textContent.subtitle}</p>
        </div>
        <div className="flex flex-row flex-wrap justify-center pt-16">
          {loadingCards ? (
            <>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </>
          ) : (
            <>
              {products?.individuals?.['year'] &&
                products.individuals['year'].map((product: any) => {
                  return (
                    <PriceCard
                      key={product.storage}
                      plan={product.storage}
                      price={product.price}
                      currency={currency}
                      cta={['checkout', product.priceId]}
                      month={textContent.month}
                      annualPrice={product.price}
                      info={textContent.infoPlan}
                      billedAnnually={textContent.billedAnnually}
                      isPopular={false}
                      mostPopular={''}
                    />
                  );
                })}
            </>
          )}
        </div>
      </div>
    </section>
  );
};
export default PaymentsSection;
