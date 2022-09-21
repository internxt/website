import React, { useState, useEffect } from 'react';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import PriceTable from '../components/prices/PriceTable';
import Layout from '../components/layout/Layout';
import cookies from '../lib/cookies';


const Pricing = ({
  metatagsDescriptions,
  navbarLang,
  footerLang,
  lang
}) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'pricing');
  const [pageName, setPageName] = useState('Pricing Individuals Annually');
  const [country, setCountry] = useState('US');

  async function getLocation() {
    const url = `${process.env.NEXT_PUBLIC_BRIDGE_URL}/drive/device/geolocation`;
    let credentials = (`${process.env.NEXT_PUBLIC_AUTH_BASIC_USERNAME}:${process.env.NEXT_PUBLIC_AUTH_BASIC_PASSWORD}`);
    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${window.btoa(credentials)}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ip: "136.127.209.48"
      }),
    })
      .then(response => response.json())
      .then(data => {
        return data;
      });
    return resp;
  }

  useEffect(() => {
    getLocation()
      .then(data => {
        console.log(data);
        setCountry(data.country);
      })
  },);



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
