import React from 'react';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/password-checker/HeroSection';
import FeaturesSection from '../components/password-checker/FeaturesSection.js';

const PasswordChecker = ({
  metatagsDescriptions,
  langJson,
  navbarLang,
  footerLang,
  lang
}) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'password-checker');

  return (

    <Layout segmentName="Virus Scanner" title={metatags[0].title} description={metatags[0].description}>

      <Navbar
        textContent={navbarLang}
        lang={lang}
        cta={['default']}
        fixed
      />

      <HeroSection
        textContent={langJson.HeroSection}
      />

      <FeaturesSection
        textContent={langJson.FeaturesSection}
        lang={lang}
      />

      <Footer
        textContent={footerLang}
        lang={lang}
        hideNewsletter={false}
      />

    </Layout>

  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/${lang}/password-checker.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);

  return {
    props: {
      metatagsDescriptions,
      langJson,
      footerLang,
      navbarLang,
      lang
    },
  };
}

export default PasswordChecker;
