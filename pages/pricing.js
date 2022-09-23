import React, { useState, useEffect } from 'react';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import PriceTable from '../components/prices/PriceTable';
import Layout from '../components/layout/Layout';
import cookies from '../lib/cookies';
import axios from 'axios';

const Pricing = ({
  metatagsDescriptions,
  navbarLang,
  footerLang,
  lang
}) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'pricing');

  const [pageName, setPageName] = useState('Pricing Individuals Annually');
  const [country, setCountry] = useState('es');

  function getXMLValue(tagName, xmlStr) {
    let tagValue = xmlStr.substring(
      xmlStr.lastIndexOf(tagName) + tagName.length,
      xmlStr.lastIndexOf(tagName.replace("<", "</"))
    );
    console.log(tagValue);
    return tagValue;
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const options = {
        method: 'POST',
        url: `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}`,
      };
      axios(options)
        .then(function (response) {
          let xml = response.data;
          setCountry(getXMLValue('<country_code>', xml));
        }).catch(function (error) {
          console.error(error);
        });
    })
  });


  return (

    <Layout
      segmentName={pageName}
      title={metatags[0].title}
      description={metatags[0].description}
      lang={lang}
    >

      <Navbar
        textContent={navbarLang}
        lang={lang}
        cta={['default']}
        fixed
      />

      <PriceTable
        setSegmentPageName={setPageName}
        lang={lang}
        country={country}
      />

      <Footer
        textContent={footerLang}
        lang={lang}
        hideNewsletter={false}
      />

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
      lang
    },
  };
}

export default Pricing;
