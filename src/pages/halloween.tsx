import { useState } from 'react';
import { GetServerSidePropsContext } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';

import HalloweenBanner from '@/components/banners/HalloweenBanner';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import cookies from '@/lib/cookies';
import usePricing from '@/hooks/usePricing';
import { PromoCodeName } from '@/lib/types';
import { Interval, stripeService } from '@/components/services/stripe.service';

const HalloweenCampaign = ({ metatagsDescriptions, lang, navbarLang, textContent }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'halloween-campaign');
  const locale = lang as string;
  const router = useRouter();

  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
    lifetimeCoupons,
  } = usePricing({
    couponCode: PromoCodeName.Halloween,
  });

  const onCheckoutButtonClicked = (priceId: string, isCheckoutForLifetime: boolean) => {
    const lifetimeSpacePlan = products?.individuals[Interval.Lifetime].find((product) => product.priceId === priceId);

    const couponCodeForB2CPlans =
      lifetimeSpacePlan && lifetimeCoupons
        ? (lifetimeCoupons?.[lifetimeSpacePlan.storage] as any).promoCodeName
        : individualCoupon?.name;

    stripeService.redirectToCheckout(priceId, currencyValue, 'individual', isCheckoutForLifetime, couponCodeForB2CPlans);
  };

  return (
    <Layout
      title={metatags[0].title}
      description={metatags[0].description}
      segmentName="Lifetime"
      lang={lang}
      specialOffer={`https://internxt.com/images/previewLink/LifetimePreviewLink.png`}
    >
      <Navbar textContent={navbarLang} lang={locale} cta={['default']} fixed />
      <div className="flex justify-center pt-24">
        <HalloweenBanner textContent={textContent.featuresBanner} />
      </div>
      
      <PricingSectionWrapper
        textContent={textContent.tableSection}
        decimalDiscount={{
          individuals: individualCoupon?.percentOff && 100 - individualCoupon?.percentOff,
          lifetime: individualCoupon?.percentOff && 100 - individualCoupon.percentOff,
        }}
        lifetimeCoupons={lifetimeCoupons}
        lang={locale}
        products={products}
        loadingCards={loadingCards}
        onCheckoutButtonClicked={onCheckoutButtonClicked}
        hideFreeCard
        hideSwitchSelector
        
      />
    </Layout>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = 'en';

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);
  const textContent = require(`@/assets/lang/${lang}/halloween.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      metatagsDescriptions,
      navbarLang,
      footerLang,
      textContent,
    },
  };
}

export default HalloweenCampaign;