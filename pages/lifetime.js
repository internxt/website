import React, { useEffect } from 'react';

import HeroSection from '../components/lifetime/HeroSection';
import FeatureSection from '../components/lifetime/FeatureSection';
import GetLifetimeSection from '../components/lifetime/GetLifetimeSection';
import Footer from '../components/layout/Footer';
import Layout from '../components/layout/Layout';
import cookies from '../lib/cookies';
import PaymentSection from '../components/lifetime/PaymentSection';
import Navbar from '../components/layout/Navbar';
import CtaSection from '../components/lifetime/CtaSection';

import axios from 'axios';

const Lifetime = ({ lang, metatagsDescriptions, langJson, footerLang, deviceLang, navbarLang, countryCode }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'lifetime');
  const [country, setCountry] = React.useState('ES');

  useEffect(() => {
    setCountry(countryCode);
  });

  return (
    <Layout
      title={metatags[0].title}
      description={metatags[0].description}
      segmentName="Lifetime"
      lang={lang}
      specialOffer={`https://internxt.com/images/previewLink/LifetimePreviewLink.png`}
      cta={['Default']}
    >
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed mode="payment" />

      <HeroSection lang={lang} textContent={langJson.HeroSection} />

      <PaymentSection textContent={langJson.PaymentSection} lang={lang} country={country} />

      <GetLifetimeSection lang={lang} textContent={langJson.GetLifetimeSection} />

      <FeatureSection lang={lang} textContent={langJson.FeatureSection} />

      <CtaSection textContent={langJson.CtaSection} />

      <Footer textContent={footerLang} lang={deviceLang} hideNewsletter />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const deviceLang = ctx.locale;
  const pushObjects = {};

  const options = {
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_COUNTRY_API_URL}`,
  };
  const countryCode = await axios(options);

  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/${lang}/lifetime.json`);
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
      countryCode: countryCode.data.country,
    },
  };
}

export default Lifetime;
