import React, { useState, useEffect } from 'react';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import PriceTable from '../components/prices/PriceTable';
import Layout from '../components/layout/Layout';
import cookies from '../lib/cookies';
import axios from 'axios';
import FAQSection from '../components/pricing/FAQSection';
import HeroSection from '../components/pricing/HeroSection';
import CtaSection from '../components/pricing/CtaSection';
import { stripeProducts } from './api/stripe/stripeProducts';
import bytes from 'bytes';

const Pricing = ({ metatagsDescriptions, navbarLang, footerLang, lang, textContent, products }) => {
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

      <HeroSection textContent={textContent.HeroSection} />

      <PriceTable
        setSegmentPageName={setPageName}
        lang={lang}
        country={country}
        textContent={textContent.tableSection}
        products={JSON.parse(products)}
      />

      <FAQSection textContent={textContent.FaqSection} />

      <CtaSection textContent={textContent.CtaSection} />

      <Footer textContent={footerLang} lang={lang} hideNewsletter={false} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`../assets/lang/${lang}/pricing.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);

  cookies.setReferralCookie(ctx);

  const pushObjects = {};

  await stripeProducts()
    .products()
    .then((res) => {
      return res.map((product) => {
        const id = product.interval + bytes(product.bytes);

        pushObjects[id] = {
          storage: bytes(product.bytes),
          price: product.amount / 100,
          popular: (id === 'lifetime2TB') | 'month2TB' | 'year2TB' ? true : false,
        };
      });
    });

  return {
    props: {
      metatagsDescriptions,
      footerLang,
      navbarLang,
      lang,
      textContent,
      products: JSON.stringify(pushObjects),
    },
  };
}

export default Pricing;
