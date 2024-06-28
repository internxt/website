'use client';

import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import Footer from '@/components/layout/footers/Footer';
import { ToolsSection } from '@/components/shared/ToolsSection';
import { ConverterSection } from '@/components/file-converter/ConverterSection';
import { FeaturesSection } from '@/components/file-converter/FeaturesSection';
import CtaSection from '@/components/shared/CtaSection';

const FileConverter = ({
  metatagsDescriptions,
  navbarLang,
  textContent,
  converterText,
  errorContent,
  footerLang,
  lang,
  toolsContent,
  pathname,
}) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === pathname);

  return (
    <Layout segmentName="File Converter" title={metatags[0].title} description={metatags[0].description} lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

      <ConverterSection
        textContent={textContent.ConverterSection}
        converterText={converterText}
        errorContent={errorContent}
        pathname={pathname}
      />

      <FeaturesSection textContent={textContent.FeaturesSection} />

      <CtaSection textContent={textContent.CtaSection} url="https://drive.internxt.com/new" />

      <ToolsSection textContent={toolsContent} lang={lang} />

      <Footer textContent={footerLang} lang={lang} hideNewsletter={false} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const textLang = lang === 'es' ? lang : 'en';
  const pathname = ctx.params.filename;

  const metatagsDescriptions = require(`@/assets/lang/${textLang}/metatags-descriptions.json`);
  const navbarLang = require(`@/assets/lang/${textLang}/navbar.json`);
  const textContent = require(`@/assets/lang/${textLang}/file-converter/${pathname}.json`);
  const converterText = require(`@/assets/lang/${textLang}/file-converter/converter-card.json`);
  const errorContent = require(`@/assets/lang/${textLang}/file-converter/errorState.json`);
  const footerLang = require(`@/assets/lang/${textLang}/footer.json`);
  const toolsContent = require(`@/assets/lang/${textLang}/components/tools/ToolSection.json`);

  return {
    props: {
      metatagsDescriptions,
      navbarLang,
      textContent,
      converterText,
      errorContent,
      footerLang,
      lang,
      toolsContent,
      pathname,
    },
  };
}

export default FileConverter;
