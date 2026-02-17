import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import Footer from '@/components/layout/footers/Footer';
import { ToolsSection } from '@/components/shared/sections/ToolsSection';
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
  const pathnameForSEO = `/file-converter/${pathname}`;

  return (
    <Layout
      segmentName="File Converter"
      title={metatags[0].title}
      description={metatags[0].description}
      lang={lang}
      pathnameForSEO={pathnameForSEO}
    >
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

      <ConverterSection
        textContent={textContent.ConverterSection}
        converterText={converterText}
        errorContent={errorContent}
        pathname={pathname}
      />

      <FeaturesSection textContent={textContent.FeaturesSection} lang={lang} />

      <CtaSection textContent={textContent.CtaSection} url="https://drive.internxt.com/new" />

      <ToolsSection textContent={toolsContent} lang={lang} />

      <Footer textContent={footerLang} lang={lang} hideNewsletter={false} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const textLang = lang === 'es' ? lang : 'en';
  const rawFilename = ctx.params.filename;

  if (typeof rawFilename !== 'string' || !/^[a-z0-9-]+$/.test(rawFilename)) {
    return {
      notFound: true,
    };
  }

  const pathname = rawFilename.replace(/[^a-z0-9-]/g, '');

  try {
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
  } catch {
    return {
      notFound: true,
    };
  }
}

export default FileConverter;
