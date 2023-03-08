import React from 'react';
import Layout from '../components/layout/Layout';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/converter-tool/HeroSection';
import ExplanationSection from '../components/converter-tool/ExplanationSection';
import CtaSection from '../components/converter-tool/CtaSection';
import InfoSection from '../components/converter-tool/InfoSection';
import ConversionTableSection from '../components/converter-tool/ConversionTableSection';
import FaqSection from '../components/converter-tool/FaqSection';
import Footer from '../components/layout/Footer';
import TryInternxtBanner from '../components/banners/TryInternxtBanner';

const CONVERTER_TOOL_METATAG_ID = 'converter-tool';

const ConverterTool = ({ lang, metatagsDescriptions, navbarLang, langJson, footerLang, bannerLang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === CONVERTER_TOOL_METATAG_ID);

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Converter Tool">
      <Navbar lang={'en'} textContent={navbarLang} cta={['default']} fixed />

      <TryInternxtBanner
        textContent={bannerLang.tryOutInternxtGeneralBanner}
        url={'https://drive.internxt.com/new?utm_source=website&utm_medium=banner&utm_campaign=internxtbyte'}
      />

      <HeroSection textContent={langJson.HeroSection} />

      <ExplanationSection textContent={langJson.ExplanationSection} lang={lang} />

      <CtaSection textContent={langJson.ctaSection1} />

      <InfoSection textContent={langJson.infoSection} />

      <CtaSection textContent={langJson.ctaSection2} />

      <ConversionTableSection textContent={langJson.ConversionTableSection} lang={lang} />

      <FaqSection textContent={langJson.FaqSection} />

      <CtaSection textContent={langJson.ctaSection3} />

      <Footer textContent={footerLang} lang={lang} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  if (lang === 'fr') {
    return {
      redirect: {
        destination: '/byte-converter',
        permanent: false,
      },
    };
  }

  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/${lang}/converter-tool.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);
  const bannerLang = require(`../assets/lang/en/banners.json`);

  return {
    props: {
      lang,
      metatagsDescriptions,
      navbarLang,
      langJson,
      footerLang,
      bannerLang,
    },
  };
}

export default ConverterTool;
