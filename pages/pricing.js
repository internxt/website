import React, { useEffect } from 'react';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import PriceTable from '../components/prices/PriceTable';
import Layout from '../components/layout/Layout';
import cookies from '../lib/cookies';
import setUTM from '../lib/conversions';

const Pricing = (props) => {
  const metatags = props.metatagsDescriptions.filter((desc) => desc.id === 'pricing');

  useEffect(() => {
    setUTM()
  }, []);

  return (
    <Layout segmentName="pricing" title={metatags[0].title} description={metatags[0].description}>
      <Navbar textContent={props.navbarLang} lang={props.lang} cta={['default']} />
      <PriceTable lang={props.lang} />
      <Footer textContent={props.footerLang} lang={props.lang}/>
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
      metatagsDescriptions, footerLang, navbarLang, lang
    },
  };
}

export default Pricing;
