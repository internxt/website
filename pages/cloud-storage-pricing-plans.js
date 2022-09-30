import React from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/cloud-storage-pricing-plans/HeroSection';
import PricingSection from '../components/cloud-storage-pricing-plans/PricingSection';
import FeaturesSection from '../components/cloud-storage-pricing-plans/FeaturesSection';
import FaqSection from '../components/cloud-storage-pricing-plans/FaqSection';
import Navbar from '../components/layout/Navbar';

const CloudStoragePricingPlans = ({
  metatagsDescriptions,
  textContent,
  lang,
  navbarLang,
  // lang
}) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'landing');

  return (
    <Layout segmentName="Ads Landing" title={metatags[0].title} description={metatags[0].description} lang={lang}>
      <Navbar textContent={navbarLang} hide={true} lang={lang} cta={['default']} />

      <HeroSection textContent={textContent.HeroSection} />

      <PricingSection textContent={textContent.PricingSection} />

      <FeaturesSection textContent={textContent.FeaturesSection} />

      <FaqSection textContent={textContent.FaqSection} lang={lang} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`../assets/lang/${lang}/cloud-storage-pricing-plans.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);

  return {
    props: {
      metatagsDescriptions,
      textContent,
      lang,
      navbarLang,
    },
  };
}

export default CloudStoragePricingPlans;
