import React from 'react';
import TableSection from '../components/comparison/TableSection';
import FeatureSection from '../components/comparison/FeatureSection';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import Layout from '../components/layout/Layout';
import cookies from '../lib/cookies';

const CloudStorageComparison = ({
  metatagsDescriptions,
  langJson,
  navbarLang,
  footerLang,
  lang
}) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'comparison');

  return (

    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Cloud Storage Comparison" lang={lang}>

      <Navbar
        textContent={navbarLang}
        lang={lang}
        cta={['default']}
        fixed
        darkMode={false}
      />

      <TableSection
        textContent={langJson.HeroSection}
        lang={lang}
      />

      <FeatureSection
        textContent={langJson.FeatureSection}
      />

      <Footer
        textContent={footerLang}
        lang={lang}
        darkMode={false}
      />

    </Layout>

  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/${lang}/comparison.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      metatagsDescriptions,
      langJson,
      navbarLang,
      footerLang
    },
  };
}

export default CloudStorageComparison;
