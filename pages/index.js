import React, { useEffect, useState } from 'react';
import AOS from 'aos';

import HeroSection from '../components/drive/HeroSection';
import GetStartedSection from '../components/drive/GetStartedSection';
import InvestorsSection from '../components/drive/InvestorsSection';
import FeaturesSection from '../components/drive/FeaturesSection';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import Layout from '../components/layout/Layout';
import cookies from '../lib/cookies';
import { getDriveDownloadUrl } from '../lib/get-download-url';
import setUTM from '../lib/conversions';

const Home = ({
  metatagsDescriptions, langJson, cardDescriptions, navbarLang, footerLang, downloadUrl, deviceLang
}) => {
  const [consentCookie, setConsentCookie] = useState(true);
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'drive');

  const handleAcceptCookies = () => {
    localStorage.setItem('CookieConsent', 'true');
    setConsentCookie(true);
  };

  useEffect(() => {
    AOS.init();
    const cookie = localStorage.getItem('CookieConsent');
    setUTM();

    if (!cookie) setConsentCookie(false);
  }, []);

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="home">
      <div className="heroSectionHome">
        <Navbar textContent={navbarLang} lang={deviceLang}/>
        <HeroSection textContent={langJson["HeroSection"]} download={downloadUrl} lang={deviceLang}/>
      </div>
      <FeaturesSection textContent={langJson["FeaturesSection"]} lang={deviceLang}/>
      <InvestorsSection textContent={langJson["InvestorsSection"]}/>
      <div className="getStartedSection">
        <GetStartedSection textContent={langJson["GetStartedSection"]} lang={deviceLang}/>
      </div>
      <Footer textContent={footerLang} lang={deviceLang}/>
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
  const cardDescriptions = require(`../assets/lang/${lang}/card-descriptions.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      downloadUrl, deviceLang, metatagsDescriptions, langJson, navbarLang, footerLang, cardDescriptions,
    },
  };
}

export default Home;
