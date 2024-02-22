import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/annual-plans-for-affiliates/HeroSection';
import FeatureSection from '@/components/annual/FeatureSection';
import Footer from '@/components/layout/Footer';

import copyToClipboard from '@/components/utils/copy-to-clipboard';
import { notificationService } from '@/components/Snackbar';
import InfoSection from '@/components/home/InfoSection';
import CtaSection from '@/components/annual-plans-for-affiliates/CtaSection';
import PriceTable from '@/components/annual-plans-for-affiliates/components/PriceTable';
import { checkout } from '@/lib/auth';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { CouponType } from '@/lib/types/types';

const LOCKER = 'LOCKER';

const currencyValue = {
  '€': 'eur',
  $: 'usd',
};

const LOCKER_PROVIDER_NAME = 'locker';

export default function Locker({ metatagsDescriptions, navbarLang, footerLang, lang, textContent }) {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'pricing');
  const router = useRouter();
  const offerDiscount = 25;

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const provider = queryParams.get('provider');
    if (!provider || provider !== LOCKER_PROVIDER_NAME) {
      router.push('/pricing');
    }
  }, []);

  function onStartPageClicked() {
    copyToClipboard(LOCKER);
    notificationService.openSuccessToast('Copied to clipboard');
  }

  function handlePriceCardButton(planId, currency, coupon) {
    checkout({
      planId: planId,
      mode: 'subscription',
      currency: currencyValue[currency] ?? 'eur',
      couponCode: coupon ?? undefined,
    });
  }

  // Split the info from the textContent object in STARTPAGE
  const heroSectionText = textContent.HeroSection;
  const infoSection = {
    part1: heroSectionText.info.split(LOCKER)[0],
    startPage: heroSectionText.info.substring(
      heroSectionText.info.indexOf(LOCKER),
      heroSectionText.info.indexOf(LOCKER) + 6,
    ),
    part2: heroSectionText.info.split(LOCKER)[1],
  };

  const InfoTextComponent = (
    <p className="text-xl text-gray-80">
      {infoSection.part1}
      <button onClick={onStartPageClicked} className="font-bold text-primary hover:underline">
        {infoSection.startPage}
      </button>
      {infoSection.part2}
    </p>
  );

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />
      <HeroSection textContent={textContent.HeroSection} InfoTextComponent={InfoTextComponent} />

      <PriceTable
        textContent={textContent.PriceTable}
        handlePriceCardButton={handlePriceCardButton}
        couponType={CouponType.LockerCoupon}
        discount={offerDiscount}
      />

      <FeatureSection textContent={textContent.FeatureSection} />

      <InfoSection textContent={textContent.SecureCloudSection} lang="en" withoutCta backgroundColor="bg-gray-1" />

      <CtaSection textContent={textContent.CtaSection} />
      <Footer textContent={footerLang} lang={lang} hideNewsletter={false} />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
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
