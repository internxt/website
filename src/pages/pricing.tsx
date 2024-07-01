import { useState } from 'react';
import Script from 'next/script';

import Footer from '@/components/layout/footers/Footer';
import Navbar from '@/components/layout/navbars/Navbar';
import PriceTable from '@/components/prices/PriceTable';
import Layout from '@/components/layout/Layout';
import cookies from '@/lib/cookies';
import FAQSection from '@/components/shared/FaqSection';
import CtaSection from '@/components/pricing/CtaSection';

import { sm_faq, sm_breadcrumb } from '@/components/utils/schema-markup-generator';
import FirstWhatWeDoSection from '@/components/home/FirstWhatWeDoSection';
import BestStorageSection from '@/components/pricing/BestStorageSection';
import FileParallaxSection from '@/components/home/FileParallaxSection';
import InfoSection from '@/components/home/InfoSection';

interface PricingProps {
  metatagsDescriptions: Record<string, any>[];
  navbarLang: Record<string, any>;
  footerLang: Record<string, any>;
  lang: string;
  textContent: Record<string, any>;
  homeComponentsLang: Record<string, any>;
}

const Pricing = ({
  metatagsDescriptions,
  navbarLang,
  footerLang,
  lang,
  textContent,
  homeComponentsLang,
}: PricingProps) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'pricing');
  const [pageName, setPageName] = useState('Pricing Individuals Annually');

  return (
    <>
      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_faq(textContent.SchemaMarkupQuestions.faq)}
      </Script>

      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_breadcrumb('Pricing', 'pricing')}
      </Script>

      <Layout segmentName={pageName} title={metatags[0].title} description={metatags[0].description} lang={lang}>
        <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

        {/* <HeroSection textContent={textContent.HeroSection} /> */}

        <PriceTable setSegmentPageName={setPageName} lang={lang} textContent={textContent.tableSection} />

        <CtaSection textContent={textContent.CtaSection} freePlan />

        <InfoSection textContent={homeComponentsLang.InfoSection} lang={lang} />

        <FirstWhatWeDoSection
          textContent={textContent.FirstWhatWeDoSection}
          lang={lang}
          backgroundColor={'bg-gray-1'}
        />

        <BestStorageSection textContent={textContent.BestStorageSection} />

        <FileParallaxSection />

        <FAQSection textContent={textContent.FaqSection} />

        <CtaSection textContent={textContent.lastCtaSection} />

        <Footer textContent={footerLang} lang={lang} hideNewsletter={false} />
      </Layout>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/pricing.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const homeComponentsLang = require(`@/assets/lang/${lang}/home.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      metatagsDescriptions,
      footerLang,
      navbarLang,
      lang,
      textContent,
      homeComponentsLang,
    },
  };
}

export default Pricing;
