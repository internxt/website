import React from 'react';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import Container1 from '../components/prices/Container1';
import Layout from '../components/layout/Layout';
import cookies from '../lib/cookies';

const Pricing = (props) => {
  const metatags = props.metatagsDescriptions.filter((desc) => desc.id === 'pricing');

  return (
    <Layout segmentName="pricing" title={metatags[0].title} description={metatags[0].description}>
      <Navbar textContent={props.navbarLang} lang={props.deviceLang} cta={['default']} />
      <Container1 id="1" descriptions={props.descriptions} cardDescriptions={props.cardDescriptions} />

      <Footer textContent={props.footerLang} lang={props.deviceLang}/>
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const deviceLang = ctx.locale;
  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const descriptions = require(`../assets/lang/${lang}/prices-descriptions.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);
  const cardDescriptions = require(`../assets/lang/${lang}/card-descriptions.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      metatagsDescriptions, descriptions, footerLang, cardDescriptions, navbarLang, deviceLang
    },
  };
}

export default Pricing;
