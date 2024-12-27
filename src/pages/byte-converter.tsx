import Script from 'next/script';

import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import HeroSection from '@/components/converter-tool/HeroSection';
import ExplanationSection from '@/components/converter-tool/ExplanationSection';
import CtaSection from '@/components/converter-tool/CtaSection';
import InfoSection from '@/components/converter-tool/InfoSection';
import ConversionTableSection from '@/components/converter-tool/ConversionTableSection';
import FaqSection from '@/components/shared/sections/FaqSection';
import Footer from '@/components/layout/footers/Footer';
import TryInternxtBanner from '@/components/banners/TryInternxtBanner';

import { sm_faq, sm_breadcrumb } from '@/components/utils/schema-markup-generator';
import { ToolsSection } from '@/components/shared/sections/ToolsSection';
import AhrefsAnalytics from '@/components/shared/components/AhrefAnalytics';

const CONVERTER_TOOL_METATAG_ID = 'converter-tool';

const ConverterTool = ({ lang, metatagsDescriptions, navbarLang, langJson, toolsContent, footerLang, bannerLang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === CONVERTER_TOOL_METATAG_ID);

  return (
    <>
      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_faq(langJson.SchemaMarkupQuestions.faq)}
      </Script>

      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_breadcrumb('Byte Converter', 'byte-converter')}
      </Script>

      <AhrefsAnalytics lang={lang} />

      <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Converter Tool">
        <Navbar lang={'en'} textContent={navbarLang} cta={['default']} fixed />

        <HeroSection textContent={langJson.HeroSection} />

        <TryInternxtBanner
          textContent={bannerLang.tryOutInternxtGeneralBanner}
          url={'https://drive.internxt.com/new?utm_source=website&utm_medium=banner&utm_campaign=internxtbyte'}
        />

        <ExplanationSection
          textContent={langJson.ExplanationSection}
          bannerText={bannerLang.SignUpByteConverterBanner}
          lang={lang}
        />

        <CtaSection textContent={langJson.ctaSection1} />

        <InfoSection textContent={langJson.infoSection} />

        <CtaSection textContent={langJson.ctaSection2} />

        <ConversionTableSection textContent={langJson.ConversionTableSection} lang={lang} />

        <ToolsSection textContent={toolsContent} lang={lang} />

        <CtaSection textContent={langJson.ctaSection3} />

        <FaqSection textContent={langJson.FaqSection} />

        <Footer textContent={footerLang} lang={lang} />
      </Layout>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/converter-tool.json`);
  const toolsContent = require(`@/assets/lang/${lang}/components/tools/ToolSection.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);
  const bannerLang = require(`@/assets/lang/${lang}/banners.json`);

  return {
    props: {
      lang,
      metatagsDescriptions,
      navbarLang,
      langJson,
      toolsContent,
      footerLang,
      bannerLang,
    },
  };
}

export default ConverterTool;
