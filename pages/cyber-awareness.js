import React from 'react';
import cookies from '../lib/cookies';
import Navbar from '../components/layout/Navbar';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/cyber-awareness/HeroSection';
import Footer from '../components/layout/Footer';
import InfoSection from '../components/cyber-awareness/InfoSection';

const CyberAwareness = ({ metatagsDescriptions, textContent, footerLang, navbarLang, lang }) => {
  return (
    <Layout segmentName={'Cyber Awareness'} isSendSnackbar={false}>
      <Navbar textContent={navbarLang} cta={['default']} lang={lang} />

      <HeroSection textContent={textContent.HeroSection} />

      <InfoSection textContent={textContent.InfoSection} />

      <Footer textContent={footerLang} lang={lang} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`../assets/lang/${lang}/cyber-awareness.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      metatagsDescriptions,
      textContent,
      footerLang,
      navbarLang,
      lang,
    },
  };
}

export default CyberAwareness;
