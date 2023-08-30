import React from 'react';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/media-area/HeroSection';
import StandForPrivacySection from '../components/media-area/StandForPrivacySection';

const MediaArea = ({ metatagsDescriptions, langJson, lang, navbarLang, footerLang, downloadURL }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'media-area');

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Media Area" lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

      <HeroSection textContent={langJson.HeroSection} />

      <StandForPrivacySection textContent={langJson.StandForPrivacySection} />

      <Footer textContent={footerLang} lang={lang} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/en/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/en/media-area.json`);
  const navbarLang = require(`../assets/lang/en/navbar.json`);
  const footerLang = require(`../assets/lang/en/footer.json`);

  return {
    props: {
      lang,
      metatagsDescriptions,
      langJson,
      navbarLang,
      footerLang,
    },
  };
}

export default MediaArea;
