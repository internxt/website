import { Eye, Fingerprint, LockKey, ShieldCheck } from '@phosphor-icons/react';

import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import HeroSection from '@/components/annual-plans-for-affiliates/HeroSection';
import FeatureSection from '@/components/annual/FeatureSection';
import Footer from '@/components/layout/footers/Footer';

import CtaSection from '@/components/annual-plans-for-affiliates/CtaSection';
import PriceTable from '@/components/annual-plans-for-affiliates/components/PriceTable';
import { checkout } from '@/lib/auth';

import { CouponType } from '@/lib/types';
import usePricing from '@/hooks/usePricing';
import InfoSection from '@/components/shared/sections/InfoSection';

export default function Startpage({ metatagsDescriptions, navbarLang, footerLang, lang, textContent }) {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'pricing');
  const { currencyValue } = usePricing({});
  const offerDiscount = 25;

  function handlePriceCardButton(planId, coupon) {
    checkout({
      planId: planId,
      mode: 'payment',
      currency: currencyValue,
      couponCode: coupon ?? undefined,
    });
  }

  // Split the info from the textContent object in STARTPAGE
  const heroSectionText = textContent.HeroSection;

  const InfoTextComponent = (
    <p className="text-xl text-gray-80">
      {heroSectionText.info.split('75% OFF')[0]}
      <span className="font-bold">75% OFF</span>
      {heroSectionText.info.split('75% OFF')[1]}
    </p>
  );

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

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />
      <HeroSection textContent={textContent.HeroSection} InfoTextComponent={InfoTextComponent} isStartPage />

      <PriceTable
        textContent={textContent.PriceTable}
        handlePriceCardButton={handlePriceCardButton}
        couponType={CouponType.SpringCoupon}
        discount={offerDiscount}
        billingFrequency="lifetime"
        isStartPage
      />

      <FeatureSection textContent={textContent.FeatureSection} />

      <InfoSection
        textContent={textContent.SecureCloudSection}
        lang="en"
        withoutCta
        backgroundColor="bg-gray-1"
        cards={cardsData}
      />

      <CtaSection textContent={textContent.CtaSection} />
      <Footer textContent={footerLang} lang={lang} hideNewsletter={false} />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`@/assets/lang/en/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/en/startpage.json`);
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
