import React from 'react';
import HeroSection from '../components/converter-tool/HeroSection';
import Layout from '../components/layout/Layout';
import Navbar from '../components/layout/Navbar';

const CONVERTER_TOOL_METATAG_ID = 'converter-tool';

const ConverterTool = ({ lang, metatagsDescriptions, navbarLang, langJson }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === CONVERTER_TOOL_METATAG_ID);

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Converter Tool">
      <Navbar lang={lang} textContent={navbarLang} cta={['default']} fixed />

      <HeroSection textContent={langJson.HeroSection} />
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
