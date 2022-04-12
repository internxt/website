import React from 'react';
import Layout from '../components/layout/Layout';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/privacy-directory/HeroSection';
import WikiSection from '../components/privacy-directory/WikiSection';
import SupportNGOsSection from '../components/privacy-directory/SupportNGOsSection';
import Footer from '../components/layout/Footer';

const PrivacyDirectory = ({
  metatagsDescriptions,
  textContent,
  navbarLang,
  footerLang,
  lang
  // lang
}) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'privacy-directory');

  return (

    <Layout segmentName="Privacy Directory" title={metatags[0].title} description={metatags[0].description}>

      <Navbar
        textContent={navbarLang}
        lang={lang}
        cta={['default']}
        fixed
      />

      <HeroSection
        textContent={textContent.HeroSection}
        lang={lang}
      />

      <WikiSection
        textContent={textContent.WikiSection}
      />

      <SupportNGOsSection
        textContent={textContent.SupportNGOsSection}
      />

      <Footer
        textContent={footerLang}
        lang={lang}
      />

    </Layout>

  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);
  const textContent = require(`../assets/lang/${lang}/privacy-directory.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);

  return {
    props: {
      metatagsDescriptions,
      textContent,
      navbarLang,
      footerLang,
      lang
    },
  };
}

export default PrivacyDirectory;
