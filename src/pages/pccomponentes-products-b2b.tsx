import { Transition } from '@headlessui/react';

import Layout from '@/components/layout/Layout';
import { Interval, stripeService } from '@/components/services/stripe.service';
import CardSkeleton from '@/components/components/CardSkeleton';

import usePricing from '@/hooks/usePricing';
import { PromoCodeName } from '@/lib/types';
import { PriceCard } from '@/components/shared/pricing/PriceCard';

const PCComponentesProductsB2B = ({ metatagsDescriptions, lang }): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'pricing');
  const { products, currencyValue, loadingCards, coupon } = usePricing({
    couponCode: PromoCodeName.PcComponentesCouponForB2B,
  });

  const pageName = 'Pricing Business Annually';

  const onCheckoutButtonClicked = (priceId: string, isCheckoutForLifetime: boolean) => {
    const couponCodeForCheckout = coupon?.codeId;
    const planType = 'business';

    stripeService.redirectToCheckout(priceId, currencyValue, planType, isCheckoutForLifetime, couponCodeForCheckout);
  };

  return (
    <Layout segmentName={pageName} title={metatags[0].title} description={metatags[0].description} lang={lang}>
      <div className="flex flex-col space-y-10">
        {/* Skeleton cards while fetching products data */}
        <Transition
          show={loadingCards}
          enter="transition duration-500 ease-out"
          enterFrom="scale-95 translate-y-20 opacity-0"
          enterTo="scale-100 translate-y-0 opacity-100"
        >
          <div className="flex flex-row flex-wrap items-end justify-center justify-items-center p-6 py-14">
            <CardSkeleton />
            <CardSkeleton />
          </div>
        </Transition>

        {/* Subscriptions cards */}
        <Transition
          show={!!products?.business}
          enter="transition duration-500 ease-out"
          enterFrom="scale-95 translate-y-20 opacity-0"
          enterTo="scale-100 translate-y-0 opacity-100"
          className="flex w-full flex-col gap-4"
        >
          <div className="content flex w-full flex-row flex-wrap items-end justify-center justify-items-center">
            {products?.business
              ? products.business[Interval.Year].map((product) => (
                  <PriceCard
                    isCheckoutForLifetime={false}
                    product={product}
                    onCheckoutButtonClicked={onCheckoutButtonClicked}
                    productCardPlan="business"
                    colorCard="orange"
                    label={product.storage}
                    monthlyProductPrice={
                      products.business[Interval.Month].filter(
                        (monthlyPRoduct) => monthlyPRoduct.storage === product.storage,
                      )[0].price
                    }
                    key={product.storage}
                    popular={product.storage === '10TB'}
                    decimalDiscountValue={100 - coupon?.percentOff!}
                    lang={lang}
                  />
                ))
              : undefined}
          </div>
        </Transition>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const lang = 'es';
  const metatagsDescriptions = require(`@/assets/lang/es/metatags-descriptions.json`);

  return {
    props: {
      metatagsDescriptions,
      lang,
    },
  };
}

export default PCComponentesProductsB2B;
