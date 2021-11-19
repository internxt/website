import React from 'react';
import HeroSection from '../components/special-offer/HeroSection';
// import FeatureSection from '../components/special-offer/FeatureSection';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import Layout from '../components/layout/Layout';
import cookies from '../lib/cookies';

const SpecialOffer = ({
  metatagsDescriptions,
  langJson,
  navbarLang,
  footerLang,
  deviceLang
}) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'black-friday');

  return (

    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Special Offer">

      <Navbar
        textContent={navbarLang}
        lang={deviceLang}
        cta={['default']}
        fixed={false}
        darkMode
      />

      <HeroSection
        textContent={langJson.HeroSection}
      />

      {/*
      <FeatureSection
        textContent={langJson.ManifestoSection}
      />
      */}

      <Footer
        textContent={footerLang}
        lang={deviceLang}
        darkMode
      />

    </Layout>

  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const deviceLang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/${lang}/special-offer.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang, deviceLang, metatagsDescriptions, langJson, navbarLang, footerLang
    },
  };
}

export default SpecialOffer;
