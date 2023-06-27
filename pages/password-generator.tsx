import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import { isMobile } from 'react-device-detect';
import cookies from '../lib/cookies';
import { downloadDriveLinks } from '../lib/get-download-url';
import Navbar from '../components/layout/Navbar';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/password-generator/HeroSection';

const PasswordGenerator = ({ metatagsDescriptions, langJson, lang, navbarLang, footerLang, downloadURL }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'home');

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Home" lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

      <HeroSection />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const downloadURL = await downloadDriveLinks();

  const lang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/${lang}/home.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      downloadURL,
      metatagsDescriptions,
      langJson,
      navbarLang,
      footerLang,
    },
  };
}

export default PasswordGenerator;
