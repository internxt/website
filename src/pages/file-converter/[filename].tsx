'use client';

import path from 'path';
import { buildLocalizedPaths, getLangFolderSlugs } from '@/lib/helpers/staticPaths';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import Footer from '@/components/layout/footers/Footer';
import { ToolsSection } from '@/components/shared/sections/ToolsSection';
import { ConverterSection } from '@/components/file-converter/ConverterSection';
import { FeaturesSection } from '@/components/file-converter/FeaturesSection';
import CtaSection from '@/components/shared/CtaSection';

const FileConverter = ({
  darkMode = false,
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
        darkMode={darkMode}
      />

      <FeaturesSection textContent={textContent.FeaturesSection} lang={lang} darkMode={darkMode} />

      <CtaSection textContent={textContent.CtaSection} url="https://drive.internxt.com/new" darkMode={darkMode} />

      <ToolsSection textContent={toolsContent} lang={lang} darkMode={darkMode} />

      <Footer textContent={footerLang} lang={lang} hideNewsletter={false} darkMode={darkMode} />
    </Layout>
  );
};

export async function getStaticPaths({ locales }) {
  return {
    paths: buildLocalizedPaths(
      locales,
      getLangFolderSlugs('file-converter', ['converter-card', 'errorState', 'file-converter']),
    ),
    fallback: 'blocking',
  };
}

export async function getStaticProps(ctx) {
  const lang = ctx.locale;
  const textLang = lang === 'es' ? lang : 'en';
  const rawFilename = ctx.params.filename;

  if (typeof rawFilename !== 'string') {
    return {
      notFound: true,
    };
  }

  const pathname = path.basename(rawFilename);

  if (!/^[a-z0-9-]+$/.test(pathname)) {
    return {
      notFound: true,
    };
  }

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
