'use client';

import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import { HeroSection } from '@/components/file-converter/main-state/HeroSection';
import { ToolsSection } from '@/components/shared/sections/ToolsSection';
import { FeaturesSection } from '@/components/file-converter/main-state/FeaturesSection';
import CtaSection from '@/components/shared/CtaSection';
import QASection from '@/components/shared/sections/FaqSection';
import Footer from '@/components/layout/footers/Footer';

const FileConverter = ({
  metatagsDescriptions,
  navbarLang,
  textContent,
  footerLang,
  lang,
  toolsContent,
  bannerLang,
}) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'file-converter');

  return (
    <Layout segmentName="File Converter" title={metatags[0].title} description={metatags[0].description} lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

      <HeroSection textContent={textContent.HeroSection} />

      <FeaturesSection
        textContent={textContent.FeaturesSection}
        bannerText={bannerLang.SignUpFileConverterBanner}
        lang={lang}
      />

      <CtaSection
        textContent={textContent.CtaSection}
        url={'http://internxt.com/drive'}
        customDescription={
          <p className="text-base font-normal leading-tight text-white lg:w-[633px] lg:text-center lg:text-xl">
            {textContent.CtaSection.description}
          </p>
        }
      />

      <ToolsSection textContent={toolsContent} lang={lang} />

      <CtaSection textContent={textContent.CtaSection2} url="https://drive.internxt.com/new" />

      <QASection textContent={textContent.QASection} />

      <Footer textContent={footerLang} lang={lang} hideNewsletter={false} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const textLang = lang === 'es' ? lang : 'en';

  const metatagsDescriptions = require(`@/assets/lang/${textLang}/metatags-descriptions.json`);
  const navbarLang = require(`@/assets/lang/${textLang}/navbar.json`);
  const textContent = require(`@/assets/lang/${textLang}/file-converter/file-converter.json`);
  const footerLang = require(`@/assets/lang/${textLang}/footer.json`);
  const toolsContent = require(`@/assets/lang/${textLang}/components/tools/ToolSection.json`);
  const bannerLang = require(`@/assets/lang/${textLang}/banners.json`);

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
