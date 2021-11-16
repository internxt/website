import React, { useEffect } from 'react';
import AOS from 'aos';

import HeroSection from '../components/lifetime/HeroSection';
import FeatureSection from '../components/lifetime/FeatureSection';
import GetLifetimeSection from '../components/lifetime/GetLifetimeSection';
import Footer from '../components/layout/Footer';
import Layout from '../components/layout/Layout';
import cookies from '../lib/cookies';
import { getDriveDownloadUrl } from '../lib/get-download-url';

const Lifetime = ({
  lang,
  metatagsDescriptions,
  langJson,
  footerLang,
  deviceLang
}) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'lifetime');

  useEffect(() => {
    AOS.init();
  }, []);

  return (

    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Lifetime Landing Page">

      <HeroSection
        lang={lang}
        textContent={langJson.HeroSection}
      />

      <FeatureSection
        lang={lang}
        textContent={langJson.FeatureSection}
      />

      <GetLifetimeSection
        lang={lang}
        textContent={langJson.GetLifetimeSection}
      />

      <Footer
        textContent={footerLang}
        lang={deviceLang}
        hideNewsletter
      />

    </Layout>

  );
};

export async function getServerSideProps(ctx) {
  const downloadUrl = await getDriveDownloadUrl(ctx);

  const lang = ctx.locale;
  const deviceLang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/${lang}/lifetime.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      downloadUrl,
      deviceLang,
      metatagsDescriptions,
      langJson,
      navbarLang,
      footerLang
    },
  };
}

export default Lifetime;
