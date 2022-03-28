import React from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/landing/HeroSection';
import FeaturesSection from '../components/landing/FeaturesSection';
import FaqSection from '../components/landing/FaqSection';

const Landing = ({
  metatagsDescriptions,
  langJson,
  // lang
}) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'landing');

  return (

    <Layout segmentName="Ads Landing" title={metatags[0].title} description={metatags[0].description}>

      <HeroSection
        textContent={langJson.HeroSection}
      />

      <FeaturesSection
        textContent={langJson.FeaturesSection}
      />

      <FaqSection
        textContent={langJson.FaqSection}
      />

    </Layout>

  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/${lang}/landing.json`);

  return {
    props: {
      metatagsDescriptions,
      langJson,
      lang
    },
  };
}

export default Landing;
