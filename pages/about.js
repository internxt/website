import React from 'react';
import HeroSection from '../components/about/HeroSection';
import CompanySection from '../components/about/CompanySection';
import Footer from '../components/layout/Footer';
import Layout from '../components/layout/Layout';
import Navbar from '../components/layout/Navbar';
import cookies from '../lib/cookies';

const AboutUs = ({ lang, textContent, footerLang, navbarLang, metatagsDescriptions }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'about');

  return (
    <Layout segmentName="About" title={metatags[0].title} description={metatags[0].description} lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

      <HeroSection textContent={textContent.HeroSection} lang={lang} />

      <CompanySection textContent={textContent.CompanySection} />

      <Footer textContent={footerLang} lang={lang} hideNewsletter={false} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);
  const textContent = require(`../assets/lang/${lang}/about.json`);
  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      metatagsDescriptions,
      footerLang,
      navbarLang,
      textContent,
    },
  };
}

export default AboutUs;
