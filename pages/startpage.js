import React from 'react';
import HeroSection from '../components/partnerships/start-page/HeroSection';
import FeatureSection from '../components/partnerships/start-page/FeatureSection';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import Layout from '../components/layout/Layout';
import cookies from '../lib/cookies';

const CLOUDWARDS_COUPON_ID = 'zJz11IA6';

const SpecialOffer = ({ metatagsDescriptions, langJson, navbarLang, footerLang, lang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'startpage');

  return (
    <Layout
      title={metatags[0].title}
      description={metatags[0].description}
      segmentName="StartPage Partnership"
      lang={lang}
    >
      <Navbar
        textContent={navbarLang}
        lang={lang}
        cta={['default']}
        fixed
        darkMode={false}
        coupon={CLOUDWARDS_COUPON_ID}
      />

      <HeroSection textContent={langJson.template.HeroSection} lang={lang} />

      <FeatureSection textContent={langJson.template.FeatureSection} />

      <Footer textContent={footerLang} lang={lang} darkMode={false} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  if (lang !== 'en') {
    return {
      redirect: {
        destination: '/startpage',
        permanent: false,
      },
    };
  }

  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/${lang}/partnerships.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);

  return {
    props: {
      lang,
      metatagsDescriptions,
      langJson,
      navbarLang,
      footerLang,
    },
  };
}

export default SpecialOffer;
