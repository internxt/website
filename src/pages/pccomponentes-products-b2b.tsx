import Layout from '@/components/layout/Layout';
import { stripeService } from '@/components/services/stripe.service';

import usePricing from '@/hooks/usePricing';
import { PromoCodeName } from '@/lib/types';
import router from 'next/router';
import { getImage } from '@/lib/getImage';
import { SlidersComparsion } from '@/components/comparison/SlidersComparsion';

const PCComponentesProductsB2B = ({ metatagsDescriptions, lang, textContent }): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'pricing');
  const { products, currencyValue, loadingCards, businessCoupon } = usePricing({
    couponCodeForBusiness: PromoCodeName.PcComponentesCouponForB2B,
  });

  const pageName = 'Pricing Business Annually';

  const onCheckoutButtonClicked = (priceId: string, isCheckoutForLifetime: boolean) => {
    const couponCodeForCheckout = businessCoupon?.name;
    const planType = 'business';

    stripeService.redirectToCheckoutForPcComponentes(
      priceId,
      currencyValue,
      planType,
      isCheckoutForLifetime,
      couponCodeForCheckout,
    );
  };

  return (
    <Layout segmentName={pageName} title={metatags[0].title} description={metatags[0].description} lang={lang}>
      <div className="flex flex-row space-x-5 space-y-10">
        {/* Subscriptions cards */}
        <div className="ml-5 mt-10 flex h-full w-full max-w-[400px] flex-col rounded-2xl border border-gray-10 md:w-screen md:max-w-[320px]">
          {/* First part */}
          <div className="flex h-full flex-col items-center justify-between gap-8 px-6 py-6 text-center">
            <div className="flex flex-col items-center rounded-full bg-orange/10 px-3 py-0.5">
              <p className="text-2xl font-medium text-orange">{textContent.cardText.label}</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <p className={` flex flex-row items-start space-x-1 whitespace-nowrap font-medium text-gray-100`}>
                <span className={`currency`}>€</span>
                <span className="price text-4xl font-bold">{textContent.cardText.price}</span>
              </p>
              <p className="text-gray-50">{textContent.cardText.perTB}</p>
            </div>

            <button
              className="!w-full rounded-lg border-2 border-orange bg-white py-3 font-medium text-orange"
              onClick={() => router.push('/cloud-object-storage/checkout')}
            >
              {textContent.cardText.cta}
            </button>
          </div>
          {/* What's included */}
          <div className="flex h-full flex-col gap-6 rounded-b-2xl bg-gray-1 px-6 py-6">
            <p className="text-lg font-medium text-gray-100">{textContent.cardText.whatsIncluded.title}</p>
            <div className="flex flex-col gap-4">
              {textContent.cardText.whatsIncluded.features.map((feature) => (
                <div className="flex flex-row items-center gap-2" key={feature}>
                  <img
                    loading="lazy"
                    className="translate-y-px select-none"
                    src={getImage('/icons/checkOrange.svg')}
                    draggable="false"
                    alt="check icon"
                  />
                  <p className="text-gray-80">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <SlidersComparsion textContent={textContent.HowMuchYouNeedSection} />
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const lang = 'es';
  const metatagsDescriptions = require(`@/assets/lang/es/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/es/pccomponentes-products-b2b.json`);
  return {
    props: {
      metatagsDescriptions,
      lang,
      textContent,
    },
  };
}

export default PCComponentesProductsB2B;
