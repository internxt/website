import React from 'react';
import TopBar from '../components/layout/TopBar';
import Footer from '../components/layout/Footer';
import Container1 from '../components/token/Container1';
import Container2 from '../components/token/Container2';
import Container3 from '../components/token/Container3';
import Container5 from '../components/token/Container5';
import Container6 from '../components/token/Container6';
import Container7 from '../components/token/Container7';
import Container8 from '../components/token/Container8';
import LoyaltyProgram from '../components/token/LoyaltyProgram';
import DataBoostUtility from '../components/token/DataBoostUtility';
import Layout from '../components/layout/Layout';
import cookies from '../lib/cookies';
import cmc from '../lib/cmc';

const Token = ({ metatagsDescriptions, descriptions, data, footerDescriptions, cardDescriptions }: any): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'token');

  return (
    <Layout segmentName="token" title={metatags[0].title} description={metatags[0].description}>
      <TopBar />
      <Container1 id="1" descriptions={descriptions} />
      <Container2 id="2" descriptions={descriptions} />
      <LoyaltyProgram id="9" descriptions={descriptions} cardDescriptions={cardDescriptions} />
      <Container3 id="3" descriptions={descriptions} />
      <DataBoostUtility id="10" descriptions={descriptions} />
      <Container5 id="5" descriptions={descriptions} />
      <Container6 id="6" descriptions={descriptions} data={data} />
      <Container7 id="7" descriptions={descriptions} data={data} />
      <Container8 id="8" descriptions={descriptions} />
      <Footer descriptions={footerDescriptions} cardDescriptions={cardDescriptions} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const descriptions = require(`../assets/lang/${lang}/token-descriptions.json`);
  const footerDescriptions = require(`../assets/lang/${lang}/footer-descriptions.json`);
  const cardDescriptions = require(`../assets/lang/${lang}/card-descriptions.json`);

  cookies.setReferralCookie(ctx);

  const data = await cmc();

  return {
    props: {
      data, metatagsDescriptions, descriptions, footerDescriptions, cardDescriptions,
    },
  };
}

export default Token;
