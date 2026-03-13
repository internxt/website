'use client';

import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import { HeroSection } from '@/components/file-compressor/main-state/HeroSection';
import { ToolsSection } from '@/components/shared/sections/ToolsSection';
import { FeaturesSection } from '@/components/file-compressor/main-state/FeaturesSection';
import QASection from '@/components/shared/sections/FaqSection';
import Footer from '@/components/layout/footers/Footer';
import CtaSection from '@/components/shared/CtaSection';
import { sm_breadcrumb } from '@/components/utils/schema-markup-generator';
import Script from 'next/script';


const FileConverter = ({
  metatagsDescriptions,
  navbarLang,
  textContent,
  footerLang,
  lang,
  toolsContent,
  bannerLang,
}) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'file-compressor');

  return (
    <>

      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_breadcrumb('File compressor', 'file-compressor')}
      </Script>
<Layout segmentName="File Converter" title={metatags[0].title} description={metatags[0].description} lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />
      <HeroSection textContent={textContent.HeroSection} />

      <FeaturesSection
        textContent={textContent.FeaturesSection}
        bannerText={bannerLang.SignUpFileCompressorBanner}
        lang={lang}
      />

      <CtaSection
        textContent={textContent.CtaSection}
        url={'https://internxt.com/drive'}
        customDescription={<p className="w-full text-xl font-normal">{textContent.CtaSection.description}</p>}
      />

      <ToolsSection textContent={toolsContent} lang={lang} />

      <QASection textContent={textContent.QASection} />

      <Footer textContent={footerLang} lang={lang} hideNewsletter={false} breadcrumbItems={[{ name: 'Encrypted Cloud Storage', url: '/' }, { name: 'File compressor', url: '/file-compressor' }]} />
    </Layout>
  </>);
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const textContent = require(`@/assets/lang/${lang}/file-compressor/file-compressor.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);
  const toolsContent = require(`@/assets/lang/${lang}/components/tools/ToolSection.json`);
  const bannerLang = require(`@/assets/lang/${lang}/banners.json`);

  return {
    props: {
      metatagsDescriptions,
      navbarLang,
      textContent,
      footerLang,
      lang,
      toolsContent,
      bannerLang,
    },
  };
}

export default FileConverter;
