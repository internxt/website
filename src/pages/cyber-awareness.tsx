import Script from 'next/script';

import cookies from '@/lib/cookies';
import Navbar from '@/components/layout/navbars/Navbar';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/cyber-awareness/HeroSection';
import InfoSection from '@/components/cyber-awareness/InfoSection';
import CtaSection from '@/components/cyber-awareness/CtaSection';
import CtaSection2 from '@/components/shared/CtaSection';
import FAQSection from '@/components/shared/sections/FaqSection';
import SuiteSection from '@/components/cyber-awareness/SuiteSection';
import SuiteSection2 from '@/components/cyber-awareness/SuiteSection2';
import VideoSection from '@/components/cyber-awareness/VideoSection';
import Footer from '@/components/layout/footers/Footer';

import { sm_faq, sm_breadcrumb } from '@/components/utils/schema-markup-generator';
import FileParallaxSection from '@/components/home/FileParallaxSection';
import FeatureSection from '@/components/cyber-awareness/FeatureSection';
import QuizSection from '@/components/cyber-awareness/QuizSection';

const CyberAwareness = ({ metatagsDescriptions, textContent, footerLang, navbarLang, lang, bannerText }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'cyber-awareness');

  return (
    <>
      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_faq(textContent.FaqSection.faq)}
      </Script>

      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_breadcrumb('Cyber Awareness', 'cyber-awareness')}
      </Script>

      <Layout
        title={metatags[0].title}
        description={metatags[0].description}
        isBannerFixed
        segmentName={'Cyber Awareness'}
      >
        <Navbar textContent={navbarLang} cta={['default']} lang={lang} />
        {lang !== 'es' ? (
          <>
            <HeroSection textContent={textContent.HeroSection} bannerText={bannerText.tableSection.ctaBanner} />

            <CtaSection textContent={textContent.CtaSection} />

            <InfoSection textContent={textContent.InfoSection} />

            <FileParallaxSection />

            <QuizSection textContent={textContent.QuizSection} />

            <SuiteSection textContent={textContent.SuiteSection} />

            <FeatureSection textContent={textContent.FeatureSection} />

            <VideoSection textContent={textContent.VideoSection} />

            <FAQSection textContent={textContent.FaqSection} />

            <CtaSection2 textContent={textContent.CtaSection2} url="https://drive.internxt.com/new" />
          </>
        ) : (
          <>
            <HeroSection textContent={textContent.HeroSection} bannerText={bannerText.SignUpCyberAwareness} />

            <InfoSection textContent={textContent.InfoSection} />

            <SuiteSection2 textContent={textContent.SuiteSection} />

            <VideoSection textContent={textContent.VideoSection} />

            <FAQSection textContent={textContent.FaqSection} />
          </>
        )}

        <Footer textContent={footerLang} lang={lang} />
      </Layout>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/cyber-awareness.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  // const bannerText = require(`@/assets/lang/${lang}/banners.json`);
  const bannerText = require(`@/assets/lang/${lang}/pricing.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      metatagsDescriptions,
      textContent,
      footerLang,
      navbarLang,
      lang,
      bannerText,
    },
  };
}

export default CyberAwareness;
