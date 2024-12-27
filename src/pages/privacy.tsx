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
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { PrivacyText } from '@/assets/types/privacy';
import { GetServerSidePropsContext } from 'next';
import AhrefsAnalytics from '@/components/shared/components/AhrefAnalytics';
interface PrivacyProps {
  metatagsDescriptions: MetatagsDescription[];
  textContent: PrivacyText;
  navbarLang: NavigationBarText;
  footerLang: FooterText;
  lang: string;
}

const Privacy = ({ metatagsDescriptions, textContent, navbarLang, footerLang, lang }: PrivacyProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'privacy');
  const langForLink = lang === 'en' ? '' : lang;
  const CTA_URL = `https://internxt.com/${langForLink}/pricing`;

  return (
    <>
      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_faq(textContent.FaqSection.faq)}
      </Script>

      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_breadcrumb('Privacy', 'privacy')}
      </Script>

      <AhrefsAnalytics lang={lang} />

      <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Privacy" lang={lang}>
        <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />
        <HeroSection textContent={textContent.HeroSection} />

        <FileParallaxSection />

        <ManifestoSection textContent={textContent.ManifestoSection} />

        <FeatureSection textContent={textContent.FeatureSection} />

        <InxtAppsSection textContent={textContent.InxtAppsSection} lang={lang} />

        <SecuritumSection textContent={textContent.SecuritumSection} />

        <BetterTomorrowSection textContent={textContent.BetterTomorrowSection} lang={lang} />

        <CtaSection textContent={textContent.CtaSection} url={CTA_URL} />

        <Footer textContent={footerLang} lang={lang} />
      </Layout>
    </>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/privacy.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      metatagsDescriptions,
      textContent,
      navbarLang,
      footerLang,
    },
  };
}

export default Privacy;
