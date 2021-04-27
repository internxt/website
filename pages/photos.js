import React from 'react';
import TopBar from '../components/layout/TopBar';
import Footer from '../components/layout/Footer';
import Container1 from '../components/photos/Container1';
import Container2 from '../components/photos/Container2';
import Container3 from '../components/photos/Container3';
import Container4 from '../components/photos/Container4';
import Container5 from '../components/photos/Container5';
import Layout from '../components/layout/Layout';
import cookies from '../lib/cookies';

const Photos = (props) => {
  const metatags = props.metatagsDescriptions.filter((desc) => desc.id === 'photos');

  return (
    <Layout segmentName="photos" title={metatags[0].title} description={metatags[0].description}>
      <TopBar />
      <Container1 id="1" descriptions={props.descriptions} cardDescriptions={props.cardDescriptions} />
      <Container2 id="2" descriptions={props.descriptions} cardDescriptions={props.cardDescriptions} />
      <Container3 id="3" descriptions={props.descriptions} />
      <Container4 id="4" descriptions={props.descriptions} />
      <Container5 id="5" descriptions={props.descriptions} />
      <Footer descriptions={props.footerDescriptions} cardDescriptions={props.cardDescriptions} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const descriptions = require(`../assets/lang/${lang}/photos-descriptions.json`);
  const footerDescriptions = require(`../assets/lang/${lang}/footer-descriptions.json`);
  const cardDescriptions = require(`../assets/lang/${lang}/card-descriptions.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      metatagsDescriptions, descriptions, footerDescriptions, cardDescriptions,
    },
  };
}

export default Photos;
