import React from 'react';
import userAgent from 'useragent';
import HeroSection from '../components/privacy/HeroSection';
import ManifestoSection from '../components/privacy/ManifestoSection';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import Layout from '../components/layout/Layout';
import cookies from '../lib/cookies';

const Privacy = ({
  metatagsDescriptions,
  langJson,
  navbarLang,
  footerLang,
  deviceLang,
  device
}) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'drive');

  return (

    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Drive">

      <Navbar
        textContent={navbarLang}
        lang={deviceLang}
        cta={['default']}
        fixed={false}
        light
      />

      <HeroSection
        textContent={langJson.HeroSection}
      />

      <ManifestoSection
        textContent={langJson.ManifestoSection}
      />

      <Footer
        textContent={footerLang}
        lang={deviceLang}
        darkMode
      />

    </Layout>

  );
};

export async function getServerSideProps(ctx) {
  const ua = ctx.req.headers['user-agent'];
  const device = userAgent.parse(ua).os.family;

  const lang = ctx.locale;
  const deviceLang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/${lang}/privacy.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang, device, deviceLang, metatagsDescriptions, langJson, navbarLang, footerLang
    },
  };
}

export default Privacy;
