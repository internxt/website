import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AOS from 'aos';

import HeroSection from '../components/token/HeroSection';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import Layout from '../components/layout/Layout';
import cookies from '../lib/cookies';
import { getDriveDownloadUrl } from '../lib/get-download-url';

const Token = ({
  lang, metatagsDescriptions, langJson, navbarLang, footerLang, downloadUrl, deviceLang
}) => {
  const router = useRouter();
  const [consentCookie, setConsentCookie] = useState(true);
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'token');

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="token">
      <div>
        <Navbar textContent={navbarLang} lang={deviceLang} cta={['default']} />
        <HeroSection textContent={langJson["HeroSection"]} download={downloadUrl} lang={deviceLang}/>
      </div>
      <div className="bg-neutral-10">
        <Footer textContent={footerLang} lang={deviceLang} hideNewsletter={false}/>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const downloadUrl = await getDriveDownloadUrl(ctx);

  const lang = ctx.locale;
  const deviceLang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/${lang}/token.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang, downloadUrl, deviceLang, metatagsDescriptions, langJson, navbarLang, footerLang
    },
  };
}

export default Token;