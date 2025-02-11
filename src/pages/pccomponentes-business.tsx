import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Interval, stripeService } from '@/components/services/stripe.service';
import usePricing from '@/hooks/usePricing';
import { PromoCodeName } from '@/lib/types';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';

const ALLOWED_LANGUAGES = ['es', 'fr', 'pt-br'];

const PCComponentesBusiness = ({ metatagsDescriptions, textContent, lang }): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'pricing');
  const [pageName, setPageName] = useState('Pricing Individuals Annually');
  const { products, currency, currencyValue, loadingCards, businessCoupon } = usePricing({
    couponCodeForBusiness: PromoCodeName.PcComponentesCoupon,
  });

  const onCheckoutButtonClicked = (priceId: string, isCheckoutForLifetime: boolean) => {
    stripeService.redirectToCheckout(
      priceId,
      currencyValue,
      'business',
      isCheckoutForLifetime,
      PromoCodeName.PcComponentesCoupon,
    );
  };

  return (
    <Layout segmentName={pageName} title={metatags[0].title} description={metatags[0].description} lang={lang}>
      <PricingSectionWrapper
        loadingCards={loadingCards}
        decimalDiscount={{
          business: businessCoupon?.percentOff && 100 - businessCoupon.percentOff,
        }}
        lang={lang}
        products={products}
        hideFreeCard
        startFromPlan="Business"
        hidePlanSelectorComponent={true}
        textContent={textContent}
        onCheckoutButtonClicked={onCheckoutButtonClicked}
        hideDescription
        hideFeatures
      />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const acceptLanguage = ctx.req.headers['accept-language'];

  const browserLang = acceptLanguage.split(',')[0].split('-')[0];

  const lang = ALLOWED_LANGUAGES.includes(browserLang) ? browserLang : 'es';

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/priceCard.json`);

  return {
    props: {
      metatagsDescriptions,
      lang,
      textContent,
    },
  };
}

export default PCComponentesBusiness;
