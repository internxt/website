import React, { useEffect } from 'react';
import AOS from 'aos';

import HeroSection from '../components/special-offer/HeroSection';
import FeatureSection from '../components/special-offer/FeatureSection';
import GetLifetimeSection from '../components/special-offer/GetLifetimeSection';
import Footer from '../components/layout/Footer';
import Layout from '../components/layout/Layout';
import cookies from '../lib/cookies';

const SpecialOffer = ({
  lang,
  metatagsDescriptions,
  langJson
}) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'drive');

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="bg-black">
        <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Special Offer">

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

        </Layout>
      </div>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const deviceLang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/${'en'}/special-offer.json`);
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
      footerLang
    },
  };
}

export default SpecialOffer;
