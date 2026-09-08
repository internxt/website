'use client';

import fs from 'fs';
import path from 'path';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import Footer from '@/components/layout/footers/Footer';
import { ToolsSection } from '@/components/shared/sections/ToolsSection';
import { ConverterSection } from '@/components/file-compressor/ConverterSection';
import { FeaturesSection } from '@/components/file-compressor/FeaturesSection';
import CtaSection from '@/components/file-compressor/CtaSection';

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
  bannerLang,
}) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === pathname);
  const pathnameForSEO = `/file-compressor/${pathname}`;

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

      <FeaturesSection
        textContent={textContent.FeaturesSection}
        bannerText={bannerLang.SignUpFileCompressorBanner}
        lang={lang}
      />

      <ToolsSection textContent={toolsContent} lang={lang} />

      <Footer textContent={footerLang} lang={lang} hideNewsletter={false} />
    </Layout>
  );
};

// Shared JSON files in the folder that are not compressor pages
const NON_PAGE_JSON = ['converter-card', 'errorState', 'file-compressor'];

export async function getStaticPaths({ locales }) {
  const dir = path.join(process.cwd(), 'src/assets/lang/en/file-compressor');

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
    const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
    const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
    const textContent = require(`@/assets/lang/${lang}/file-compressor/${pathname}.json`);
    const converterText = require(`@/assets/lang/${lang}/file-compressor/converter-card.json`);
    const errorContent = require(`@/assets/lang/${lang}/file-compressor/errorState.json`);
    const footerLang = require(`@/assets/lang/${lang}/footer.json`);
    const toolsContent = require(`@/assets/lang/${lang}/components/tools/ToolSection.json`);
    const bannerLang = require(`@/assets/lang/${lang}/banners.json`);

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
        bannerLang,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
}

export default FileConverter;
