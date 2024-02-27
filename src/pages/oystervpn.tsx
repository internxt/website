import { useState } from 'react';

import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/annual-plans-for-affiliates/HeroSection';
import FeatureSection from '@/components/annual/FeatureSection';
import Footer from '@/components/layout/Footer';

import InfoSection from '@/components/home/InfoSection';
import CtaSection from '@/components/annual-plans-for-affiliates/CtaSection';
import PriceTable from '@/components/annual-plans-for-affiliates/components/PriceTable';
import { X } from '@phosphor-icons/react';
import SignUp from '@/components/auth/SignUp';

export default function Oystervpn({ metatagsDescriptions, navbarLang, footerLang, lang, textContent }) {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'pricing');
  const [isSignupBannerOpen, setIsSignupBannerOpen] = useState(false);

  function handlePriceCardButton() {
    setIsSignupBannerOpen(true);
  }

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

      {isSignupBannerOpen ? (
        <div className={`fixed top-0 left-0 right-0 bottom-0 z-40 h-screen bg-black bg-opacity-50 px-5 lg:px-0`}>
          <div
            className={`absolute top-1/2 left-1/2
        z-20 flex w-max -translate-y-1/2 -translate-x-1/2 transform flex-col rounded-2xl bg-white p-7 text-neutral-900`}
          >
            <X
              className={`absolute top-5 right-5 cursor-pointer`}
              size={24}
              onClick={() => setIsSignupBannerOpen(false)}
            />
            <SignUp textContent={textContent.Auth} provider="STACKCOMMERCE" />
          </div>
        </div>
      ) : null}

      <HeroSection textContent={textContent.HeroSection} />

      <PriceTable textContent={textContent.PriceTable} handlePriceCardButton={handlePriceCardButton} />

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
  const textContent = require(`@/assets/lang/en/oystervpn.json`);
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
