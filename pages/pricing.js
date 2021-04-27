import React from 'react';
import Footer from '../components/layout/Footer';
import TopBar from '../components/layout/TopBar';
import Container1 from '../components/prices/Container1';
import Container2 from '../components/prices/Container2';
import Layout from '../components/layout/Layout';
import cookies from '../lib/cookies';

const Pricing = (props) => {
  const metatags = props.metatagsDescriptions.filter((desc) => desc.id === 'pricing');

  return (
    <Layout segmentName="pricing" title={metatags[0].title} description={metatags[0].description}>
      <TopBar />
      <Container1 id="1" descriptions={props.descriptions} cardDescriptions={props.cardDescriptions} />
      <Container2 />
      <Footer descriptions={props.footerDescriptions} cardDescriptions={props.cardDescriptions} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const descriptions = require(`../assets/lang/${lang}/prices-descriptions.json`);
  const footerDescriptions = require(`../assets/lang/${lang}/footer-descriptions.json`);
  const cardDescriptions = require(`../assets/lang/${lang}/card-descriptions.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      metatagsDescriptions, descriptions, footerDescriptions, cardDescriptions,
    },
  };
}

export default Pricing;
