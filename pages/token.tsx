import React from 'react';

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
  lang
}) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'token');

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Token" lang={lang}>

      <div>

        <Navbar
          textContent={navbarLang}
          lang={lang}
          cta={['default']}
          fixed
          darkMode={false}
        />

        <HeroSection
          textContent={langJson.HeroSection}
        />

      </div>

      <Footer
        textContent={footerLang}
        lang={lang}
        hideNewsletter={false}
        darkMode={false}
      />

    </Layout>

  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/${lang}/token.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang, metatagsDescriptions, langJson, navbarLang, footerLang
    },
  };
}

export default Token;
