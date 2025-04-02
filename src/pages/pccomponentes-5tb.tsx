import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import CardSkeleton from '@/components/components/CardSkeleton';
import PriceCard from '@/components/prices/PriceCard';
import usePricing from '@/hooks/usePricing';
import { PromoCodeName } from '@/lib/types';
import { Transition } from '@headlessui/react';
import { Interval } from '@/services/stripe.service';

const ALLOWED_LANGUAGES = ['es', 'fr', 'pt-br'];
const trialToken = 'pc-cloud-25';

const PCComponentes5tb = ({ metatagsDescriptions, textContent, lang }): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'pricing');
  const [pageName, setPageName] = useState('Pricing Individuals Annually');

  const { products, currency, currencyValue, loadingCards, coupon } = usePricing({
    couponCode: PromoCodeName.PcComponentes5TB,
  });

  const product = {
    title: '5TB',
    price: '199.99',
    priceId: 'price_1OQ3H5FAOdcgaBMQwMJ734rd',
    storage: '5TB',
    features: [
      '5TB encrypted storage',
      'Zero-knowledge encryption',
      'Password-protected file sharing',
      'Post-quantum cryptography',
      'Access your files from any device',
      'Guaranteed GDPR compliance',
      'Two-factor authentication (2FA)',
      'Premium customer support',
      '30-day money-back guarantee',
    ],
  };
  return (
    <Layout segmentName={pageName} title={metatags[0].title} description={metatags[0].description} lang={lang}>
      <div className="flex flex-col items-center justify-center space-y-9">
        <Transition
          show={loadingCards}
          enter="transition duration-500 ease-out"
          enterFrom="scale-95 translate-y-20 opacity-0"
          enterTo="scale-100 translate-y-0 opacity-100"
        >
          <div className="flex flex-row flex-wrap items-end justify-center justify-items-center p-6 py-14">
            <CardSkeleton />
          </div>
        </Transition>

        <Transition
          show={!loadingCards}
          enter="transition duration-500 ease-out"
          enterFrom="scale-95 translate-y-20 opacity-0"
          enterTo="scale-100 translate-y-0 opacity-100"
        >
          <PriceCard
            planType="individual"
            key={product.storage}
            storage={product.storage}
            price={coupon ? Number(product) : parseFloat(product.price)}
            billingFrequency={Interval.Year}
            cta={['checkout', product.priceId]}
            priceBefore={parseFloat(product.price)}
            lang={lang}
            currency={currency}
            coupon={coupon ?? undefined}
            currencyValue={currencyValue}
            isIframe={true}
            isPcComponentes
            index={2}
            trialToken={trialToken}
          />
        </Transition>
      </div>
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

export default PCComponentes5tb;
