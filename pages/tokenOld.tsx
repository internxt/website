import React, { useEffect } from 'react';
import AOS from 'aos';

import HeroSection from '../components/token/HeroSection';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import Layout from '../components/layout/Layout';
import cookies from '../lib/cookies';

const Token = ({
  metatagsDescriptions,
  langJson,
  navbarLang,
  footerLang,
  deviceLang
}) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'token');

  useEffect(() => {
    AOS.init();
  }, []);

  return (

    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Token">

      <div>

        <Navbar
          textContent={navbarLang}
          lang={deviceLang}
          cta={['default']}
          fixed
          darkMode={false}
        />

        <HeroSection
          textContent={langJson.HeroSection}
        />

      </div>

      <div className="bg-neutral-10">
        <Footer
          textContent={footerLang}
          lang={deviceLang}
          hideNewsletter={false}
          darkMode={false}
        />
      </div>

    </Layout>

  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const deviceLang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/${lang}/token.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang, deviceLang, metatagsDescriptions, langJson, navbarLang, footerLang
    },
  };
}

export default Token;
