import Script from 'next/script';

import HeroSection from '@/components/privacy/HeroSection';
import FileParallaxSection from '@/components/home/FileParallaxSection';
import ManifestoSection from '@/components/privacy/ManifestoSection';
import Footer from '@/components/layout/footers/Footer';
import Navbar from '@/components/layout/navbars/Navbar';
import Layout from '@/components/layout/Layout';
import cookies from '@/lib/cookies';

import { sm_faq, sm_breadcrumb } from '@/components/utils/schema-markup-generator';
import SecuritumSection from '@/components/privacy/SecuritumSection';
import InxtAppsSection from '@/components/privacy/InxtAppsSection';
import CtaSection from '@/components/shared/CtaSection';
import BetterTomorrowSection from '@/components/privacy/BetterTomorrowSection';
import FeatureSection from '@/components/privacy/FeatureSection';
import HeroSection2 from '@/components/privacy/HeroSection2';
import ManifestoSection2 from '@/components/privacy/ManifestoSection2';

const newDesignLang = ['en', 'es', 'zh-tw'];

const Privacy = ({ metatagsDescriptions, langJson, navbarLang, footerLang, lang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'privacy');
  const langForLink = lang === 'en' ? '' : lang;
  const CTA_URL = `https://internxt.com/${langForLink}/pricing`;

  return (
    <>
      {newDesignLang.includes(lang) ? (
        <>
          <Script type="application/ld+json" strategy="beforeInteractive">
            {sm_faq(langJson.FaqSection.faq)}
          </Script>

          <Script type="application/ld+json" strategy="beforeInteractive">
            {sm_breadcrumb('Privacy', 'privacy')}
          </Script>
        </>
      ) : (
        <>
          <Script type="application/ld+json" strategy="beforeInteractive">
            {sm_faq(langJson.ManifestoSection.FaqSection.faq)}
          </Script>

          <Script type="application/ld+json" strategy="beforeInteractive">
            {sm_breadcrumb('Privacy', 'privacy')}
          </Script>
        </>
      )}

      <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Privacy" lang={lang}>
        {newDesignLang.includes(lang) ? (
          <>
            <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />
            <HeroSection textContent={langJson.HeroSection} />

            <FileParallaxSection />

            <ManifestoSection textContent={langJson.ManifestoSection} />

            <FeatureSection textContent={langJson.FeatureSection} />

            <InxtAppsSection textContent={langJson.InxtAppsSection} lang={lang} />

            <SecuritumSection textContent={langJson.SecuritumSection} />

            <BetterTomorrowSection textContent={langJson.BetterTomorrowSection} lang={lang} />

            <CtaSection textContent={langJson.CtaSection} url={CTA_URL} />
          </>
        ) : (
          <div className="overflow-hidden">
            <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed={false} darkMode />
            <HeroSection2 textContent={langJson.HeroSection} />

            <ManifestoSection2 textContent={langJson.ManifestoSection} lang={lang} />
          </div>
        )}

        <Footer textContent={footerLang} lang={lang} />
      </Layout>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/privacy.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      metatagsDescriptions,
      langJson,
      navbarLang,
      footerLang,
    },
  };
}

export default Privacy;
