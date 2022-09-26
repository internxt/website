import React from 'react';
import cookies from '../lib/cookies';
import Layout from '../components/layout/Layout';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/black-friday/HeroSection';
import BestStorageSection from '../components/black-friday/BestStorageSection';
import SuiteSection from '../components/black-friday/SuiteSection';
import CtaSection from '../components/black-friday/CtaSection';
import FeatureSection from '../components/black-friday/FeatureSection';
import PlatformSection from '../components/black-friday/PlatformSection';
import TestimonialsSection from '../components/black-friday/TestimonialsSection';
import FAQSection from '../components/black-friday/FAQSection';

const BlackFriday = ({ lang, deviceLang, metatagsDescriptions, langJson, navbarLang, footerLang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'black-friday');
  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Black Friday">
      <Navbar lang={deviceLang} textContent={navbarLang} cta={['checkout']} hideLogin={true} />

      <HeroSection lang={lang} textContent={langJson.blackFriday} />

      <BestStorageSection textContent={langJson.blackFriday} />

      <SuiteSection textContent={langJson.blackFriday} />

      <CtaSection textContent={langJson.cta1} />

      <FeatureSection textContent={langJson.blackFriday} />

      <PlatformSection textContent={langJson.blackFriday} />

      <TestimonialsSection textContent={langJson.blackFriday} />

      <FAQSection textContent={langJson.blackFriday} />

      <CtaSection textContent={langJson.cta2} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const deviceLang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/${lang}/black-friday.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      deviceLang,
      metatagsDescriptions,
      navbarLang,
      footerLang,
      langJson,
    },
  };
}

export default BlackFriday;
