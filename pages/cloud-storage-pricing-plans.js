import React from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/cloud-storage-pricing-plans/HeroSection';
import PricingSection from '../components/cloud-storage-pricing-plans/PricingSection';
import FeaturesSection from '../components/cloud-storage-pricing-plans/FeaturesSection';
import FaqSection from '../components/cloud-storage-pricing-plans/FaqSection';

const CloudStoragePricingPlans = ({
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

      <PricingSection
        textContent={langJson.PricingSection}
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
  const langJson = require(`../assets/lang/${lang}/cloud-storage-pricing-plans.json`);

  return {
    props: {
      metatagsDescriptions,
      langJson,
      lang
    },
  };
}

export default CloudStoragePricingPlans;
