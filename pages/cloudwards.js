import React from 'react';
import HeroSection from '../components/partnerships/cloudwards/HeroSection';
import AdvantagesSection from '../components/partnerships/cloudwards/AdvantagesSection';
import BestStorageSection from '../components/partnerships/cloudwards/BestStorageSection';
import FeaturesSection from '../components/partnerships/cloudwards/FeaturesSection';
import DealSection from '../components/partnerships/cloudwards/DealSection';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import Layout from '../components/layout/Layout';

const CLOUDWARDS_COUPON_ID = '0eu0T11z';

const Cloudwards = ({ metatagsDescriptions, langJson, navbarLang, footerLang, lang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'cloudwards');

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

      <HeroSection textContent={langJson.HeroSection} lang={lang} />

      <AdvantagesSection textContent={langJson.AdvantagesSection} />

      <BestStorageSection textContent={langJson.BestStorageSection} />

      <FeaturesSection textContent={langJson.FeaturesSection} />

      {/* <PartnershipSection textContent={langJson.PartnershipSection} /> */}

      <DealSection textContent={langJson.DealSection} />

      {/* <FaqSection textContent={langJson.FaqSection} /> */}

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

  const metatagsDescriptions = require(`../assets/lang/en/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/en/startpage.json`);
  const navbarLang = require(`../assets/lang/en/navbar.json`);
  const footerLang = require(`../assets/lang/en/footer.json`);

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

export default Cloudwards;
