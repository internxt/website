import React, { useEffect } from 'react';
import AOS from 'aos';

import HeroSection from '../components/home/HeroSection';
import GetStartedSection from '../components/home/GetStartedSection';
import InvestorsSection from '../components/home/InvestorsSection';
import FeaturesSection from '../components/home/FeaturesSection';
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
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'home');

  useEffect(() => {
    AOS.init();
  }, []);

  return (

    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Home">

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
        lang={deviceLang}
      />

      <InvestorsSection
        textContent={langJson.InvestorsSection}
      />

      <div className="getStartedSection">
        <GetStartedSection
          textContent={langJson.GetStartedSection}
          lang={deviceLang}
        />
      </div>

      <Footer
        textContent={footerLang}
        lang={deviceLang}
      />

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
