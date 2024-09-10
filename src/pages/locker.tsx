import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import HeroSection from '@/components/annual-plans-for-affiliates/HeroSection';
import FeatureSection from '@/components/annual/FeatureSection';
import Footer from '@/components/layout/footers/Footer';

import { PromoCodeName } from '@/lib/types';
import usePricing from '@/hooks/usePricing';
import { Eye, Fingerprint, LockKey, ShieldCheck } from '@phosphor-icons/react';
import InfoSection from '@/components/shared/sections/InfoSection';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import { Interval, stripeService } from '@/components/services/stripe.service';
import { GetServerSidePropsContext } from 'next';
import CtaSection from '@/components/shared/CtaSection';

export default function Locker({ metatagsDescriptions, navbarLang, footerLang, lang, textContent }): JSX.Element {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'pricing');
  const offerDiscount = 0.25;
  const { products, loadingCards, currencyValue, coupon } = usePricing({
    couponCode: PromoCodeName.LockerCoupon,
  });

  const cardsData = [
    {
      icon: ShieldCheck,
      title: textContent.SecureCloudSection.cards[0].title,
      description: textContent.SecureCloudSection.cards[0].description,
    },
    {
      icon: LockKey,
      title: textContent.SecureCloudSection.cards[1].title,
      description: textContent.SecureCloudSection.cards[1].description,
    },
    {
      icon: Eye,
      title: textContent.SecureCloudSection.cards[2].title,
      description: textContent.SecureCloudSection.cards[2].description,
    },
    {
      icon: Fingerprint,
      title: textContent.SecureCloudSection.cards[3].title,
      description: textContent.SecureCloudSection.cards[3].description,
    },
  ];

  const onCheckoutButtonClicked = (planId: string, isCheckoutForLifetime: boolean) => {
    stripeService.redirectToCheckout(planId, currencyValue, 'individual', isCheckoutForLifetime, coupon?.codeId);
  };

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />
      <HeroSection textContent={textContent.HeroSection} />

      <PricingSectionWrapper
        textContent={textContent.PriceTable}
        decimalDiscount={{
          individuals: offerDiscount,
        }}
        lang={lang}
        products={products}
        loadingCards={loadingCards}
        onCheckoutButtonClicked={onCheckoutButtonClicked}
        startFromInterval={Interval.Year}
        hideFreeCard
        hidePlanSelectorAndSwitch
      />

      <FeatureSection textContent={textContent.FeatureSection} />

      <InfoSection
        textContent={textContent.SecureCloudSection}
        lang="en"
        withoutCta
        backgroundColor="bg-gray-1"
        cards={cardsData}
      />

      <CtaSection textContent={textContent.CtaSection} url="#priceTable" />
      <Footer textContent={footerLang} lang={lang} hideNewsletter={false} />
    </Layout>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`@/assets/lang/en/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/en/locker.json`);
  const footerLang = require(`@/assets/lang/en/footer.json`);
  const navbarLang = require(`@/assets/lang/en/navbar.json`);

  return {
    props: {
      metatagsDescriptions,
      footerLang,
      navbarLang,
      lang,
      textContent,
    },
  };
}
