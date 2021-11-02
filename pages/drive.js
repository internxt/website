import React from 'react';

import HeroSection from '../components/drive/HeroSection';
import FeaturesSection from '../components/drive/FeaturesSection';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import Layout from '../components/layout/Layout';
import cookies from '../lib/cookies';
import { getDriveDownloadUrl } from '../lib/get-download-url';

const Home = ({
  metatagsDescriptions,
  langJson,
  navbarLang,
  footerLang,
  downloadUrl,
  deviceLang
}) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'drive');

  return (

    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Drive">

      <Navbar
        textContent={navbarLang}
        lang={deviceLang}
        cta={['default']}
        fixed
      />

      <HeroSection
        textContent={langJson.HeroSection}
        download={downloadUrl}
        lang={deviceLang}
      />

      <FeaturesSection
        textContent={langJson.FeaturesSection}
        download={downloadUrl}
        lang={deviceLang}
      />

      {/*
        <Footer
        textContent={footerLang}
        lang={deviceLang}
        hideNewsletter={false}
      />
      */}

    </Layout>

  );
};

export async function getServerSideProps(ctx) {
  const downloadUrl = await getDriveDownloadUrl(ctx);

  const lang = ctx.locale;
  const deviceLang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/${lang}/home.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang, downloadUrl, deviceLang, metatagsDescriptions, langJson, navbarLang, footerLang
    },
  };
}

export default Home;
