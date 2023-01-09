import React from 'react';
import HeroSection from '../components/partnerships/cloudwards/HeroSection';
import FeatureSection from '../components/partnerships/cloudwards/FeatureSection';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import Layout from '../components/layout/Layout';
import cookies from '../lib/cookies';

const CLOUDWARDS_COUPON_ID = '0eu0T11z';

const SpecialOffer = ({ metatagsDescriptions, langJson, navbarLang, footerLang, lang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'cloudwards');

  return (
    <Layout
      title={metatags[0].title}
      description={metatags[0].description}
      segmentName="Cloudwards Partnership"
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

  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/${lang}/partnerships.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

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
