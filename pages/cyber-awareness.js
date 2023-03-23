import React from 'react';
import cookies from '../lib/cookies';
import Navbar from '../components/layout/Navbar';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/cyber-awareness/HeroSection';
import InfoSection from '../components/cyber-awareness/InfoSection';
import SuiteSection from '../components/cyber-awareness/SuiteSection';
import VideoSection from '../components/cyber-awareness/VideoSection';
import Footer from '../components/layout/Footer';

const CyberAwareness = ({ metatagsDescriptions, textContent, footerLang, navbarLang, lang, bannerText }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'cyber-awareness');

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName={'Cyber Awareness'}>
      <Navbar textContent={navbarLang} cta={['default']} lang={lang} />

      <HeroSection textContent={textContent.HeroSection} bannerText={bannerText.SignUpCyberAwareness} />

      <InfoSection textContent={textContent.InfoSection} />

      <SuiteSection textContent={textContent.SuiteSection} />

      <VideoSection textContent={textContent.VideoSection} />

      <Footer textContent={footerLang} lang={lang} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  if (lang !== 'en') {
    return {
      redirect: {
        destination: '/cyber-awareness',
        permanent: false,
      },
    };
  }

  const metatagsDescriptions = require(`../assets/lang/en/metatags-descriptions.json`);
  const textContent = require(`../assets/lang/en/cyber-awareness.json`);
  const footerLang = require(`../assets/lang/en/footer.json`);
  const navbarLang = require(`../assets/lang/en/navbar.json`);
  const bannerText = require(`../assets/lang/en/banners.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      metatagsDescriptions,
      textContent,
      footerLang,
      navbarLang,
      lang,
      bannerText,
    },
  };
}

export default CyberAwareness;
