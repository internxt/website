'use client';

import fs from 'fs';
import path from 'path';
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

// Shared JSON files in the folder that are not converter pages
const NON_PAGE_JSON = ['converter-card', 'errorState', 'file-converter'];

export async function getStaticPaths({ locales }) {
  const dir = path.join(process.cwd(), 'src/assets/lang/en/file-converter');

  const filenames = fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.json'))
    .map((file) => file.replace(/\.json$/, ''))
    .filter((slug) => !NON_PAGE_JSON.includes(slug));

  return {
    paths: locales.flatMap((locale) => filenames.map((filename) => ({ params: { filename }, locale }))),
    fallback: false,
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
