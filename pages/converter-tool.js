import React from 'react';
import Layout from '../components/layout/Layout';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/converter-tool/HeroSection';
import ExplanationSection from '../components/converter-tool/ExplanationSection';
import CtaSection from '../components/converter-tool/CtaSection';
import InfoSection from '../components/converter-tool/InfoSection';

const CONVERTER_TOOL_METATAG_ID = 'converter-tool';

const ConverterTool = ({ lang, metatagsDescriptions, navbarLang, langJson }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === CONVERTER_TOOL_METATAG_ID);

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Converter Tool">
      <Navbar lang={lang} textContent={navbarLang} cta={['default']} fixed />

      <HeroSection textContent={langJson.HeroSection} />

      <ExplanationSection textContent={langJson.ExplanationSection} />

      <CtaSection textContent={langJson.ctaSection1} />

      <InfoSection textContent={langJson.infoSection} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/en/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/en/converter-tool.json`);
  const navbarLang = require(`../assets/lang/en/navbar.json`);

  return {
    props: {
      lang,
      metatagsDescriptions,
      navbarLang,
      langJson,
    },
  };
}

export default ConverterTool;
