import React from 'react';
import HeroSection from '../components/partnerships/freemonth/HeroSection';
import FeatureSection from '../components/partnerships/freemonth/FeatureSection';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import Layout from '../components/layout/Layout';
import cookies from '../lib/cookies';

const IVACY_COUPON_ID = 'WFij5xw4';

const Ivacy = ({ metatagsDescriptions, langJson, navbarLang, footerLang, deviceLang, lang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'freemonth');
  const couponCode = IVACY_COUPON_ID;

  return (
    <Layout
      title={metatags[0].title}
      description={metatags[0].description}
      segmentName="Freemonth Partnership"
      lang={lang}
    >
      <Navbar textContent={navbarLang} coupon={couponCode} lang={deviceLang} cta={['default']} fixed darkMode={false} />

      <HeroSection textContent={langJson.template.HeroSection} lang={lang} />

      <FeatureSection textContent={langJson.template.FeatureSection} />

      <Footer textContent={footerLang} lang={deviceLang} darkMode={false} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const deviceLang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/${lang}/ivacy.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      deviceLang,
      metatagsDescriptions,
      langJson,
      navbarLang,
      footerLang,
    },
  };
}

export default Ivacy;
