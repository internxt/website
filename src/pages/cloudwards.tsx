import React from 'react';
import HeroSection from '../components/partnerships/cloudwards/HeroSection';
import AdvantagesSection from '../components/partnerships/cloudwards/AdvantagesSection';
import BestStorageSection from '../components/partnerships/cloudwards/BestStorageSection';
import FeaturesSection from '../components/partnerships/cloudwards/FeaturesSection';
import DealSection from '../components/partnerships/cloudwards/DealSection';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import Layout from '../components/layout/Layout';

const Cloudwards = ({ metatagsDescriptions, langJson, navbarLang, footerLang, lang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'cloudwards');

  return (
    <Layout
      title={metatags[0].title}
      description={metatags[0].description}
      segmentName="StartPage Partnership"
      lang={lang}
    >
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed darkMode={false} />

      <HeroSection textContent={langJson.HeroSection} lang={lang} />

      <AdvantagesSection textContent={langJson.AdvantagesSection} />

      <BestStorageSection textContent={langJson.BestStorageSection} />

      <FeaturesSection textContent={langJson.FeaturesSection} />

      <DealSection textContent={langJson.DealSection} />

      <Footer textContent={footerLang} lang={lang} darkMode={false} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  if (lang !== 'en') {
    return {
      redirect: {
        destination: '/cloudwards',
        permanent: false,
      },
    };
  }

  const metatagsDescriptions = require(`../assets/lang/en/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/en/cloudwards.json`);
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

export default Cloudwards;
