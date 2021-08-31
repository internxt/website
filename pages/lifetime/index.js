import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import Footer from '../../components/layout/Footer';
import Navbar from '../../components/layout/Navbar';
import setUTM from '../../lib/conversions';
import { redirectToCheckoutAction } from '../../components/CheckoutForm';

const Lifetime = ( props ) => {
  const [stripeObject, setStripeObject] = useState({});
  const metatags = props.metatagsDescriptions.filter((desc) => desc.id === 'drive');

  useEffect(() => {
    const stripeObj = { product: 'lifetime2TB' };
    setStripeObject(stripeObj);
    setUTM();
  }, []);

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="lifetime">
      <Navbar textContent={props.navbarLang} lang={props.deviceLang}/>
      <Footer textContent={props.footerLang} lang={props.deviceLang}/>
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const deviceLang = ctx.locale;

  const metatagsDescriptions = require(`../../assets/lang/${lang}/metatags-descriptions.json`);
  const footerLang = require(`../../assets/lang/${lang}/footer.json`);
  const navbarLang = require(`../../assets/lang/${lang}/navbar.json`);
  const cardDescriptions = require(`../../assets/lang/${lang}/card-descriptions.json`);

  return {
    props: {
      lang, metatagsDescriptions, footerLang, navbarLang, cardDescriptions, deviceLang
    },
  };
};

export default Lifetime;
