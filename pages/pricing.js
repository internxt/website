import React, { useState, useEffect } from 'react';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import PriceTable from '../components/prices/PriceTable';
import Layout from '../components/layout/Layout';
import cookies from '../lib/cookies';
import axios from 'axios';

const Pricing = ({ metatagsDescriptions, navbarLang, footerLang, lang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'pricing');

  const [pageName, setPageName] = useState('Pricing Individuals Annually');
  const [country, setCountry] = useState('ES');

  async function getCountryCode() {
    const options = {
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_COUNTRY_API_URL}`,
    };
    const countryCode = await axios(options);
    return countryCode;
  }

  useEffect(() => {
    getCountryCode()
      .then((res) => {
        setCountry(res.data.country);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  return (
    <Layout segmentName={pageName} title={metatags[0].title} description={metatags[0].description} lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

      <PriceTable setSegmentPageName={setPageName} lang={lang} country={country} />

      <Footer textContent={footerLang} lang={lang} hideNewsletter={false} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      metatagsDescriptions,
      footerLang,
      navbarLang,
      lang,
    },
  };
}

export default Pricing;
