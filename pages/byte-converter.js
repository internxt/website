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

const CONVERTER_TOOL_METATAG_ID = 'converter-tool';

const ConverterTool = ({ lang, metatagsDescriptions, navbarLang, langJson, footerLang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === CONVERTER_TOOL_METATAG_ID);

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Converter Tool">
      <Navbar lang={'en'} textContent={navbarLang} cta={['default']} fixed />

      <HeroSection textContent={langJson.HeroSection} />

      <ExplanationSection textContent={langJson.ExplanationSection} />

      <CtaSection textContent={langJson.ctaSection1} />

      <InfoSection textContent={langJson.infoSection} />

      <CtaSection textContent={langJson.ctaSection2} />

      <ConversionTableSection textContent={langJson.ConversionTableSection} />

      <FaqSection textContent={langJson.FaqSection} />

      <CtaSection textContent={langJson.ctaSection3} />

      <Footer textContent={footerLang} lang={lang} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/en/converter-tool.json`);
  const navbarLang = require(`../assets/lang/en/navbar.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);

  return {
    props: {
      lang,
      metatagsDescriptions,
      navbarLang,
      langJson,
      footerLang,
    },
  };
}

export default ConverterTool;
