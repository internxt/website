import React from 'react';
import TopBar from '../components/layout/TopBar';
import Footer from '../components/layout/Footer';
import Container1 from '../components/core/Container1';
import Container2 from '../components/core/Container2';
import Container3 from '../components/core/Container3';
import Container4 from '../components/core/Container4';
import Container5 from '../components/core/Container5';
import Container6 from '../components/core/Container6';
import Container7 from '../components/core/Container7';
import Layout from '../components/layout/Layout';
import cookies from '../lib/cookies';
import { getCoreDownloadUrl } from '../lib/get-download-url';

const Core = ({
  metatagsDescriptions,
  descriptions, downloadUrl, cardDescriptions, footerDescriptions,
}) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'core');

  return (
    <Layout segmentName="core" title={metatags[0].title} description={metatags[0].description}>
      <TopBar />
      <Container1 id="1" {...{ downloadUrl, descriptions }} />
      <Container2 id="2" descriptions={descriptions} />
      <Container3 id="3" descriptions={descriptions} />
      <Container4 id="4" descriptions={descriptions} />
      <Container5 id="5" descriptions={descriptions} />
      <Container6 id="6" {...{ downloadUrl, descriptions }} />
      <Container7 id="7" descriptions={descriptions} />
      <Footer descriptions={footerDescriptions} cardDescriptions={cardDescriptions} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const downloadUrl = await getCoreDownloadUrl(ctx);

  const lang = ctx.locale;
  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const descriptions = require(`../assets/lang/${lang}/core-descriptions.json`);
  const footerDescriptions = require(`../assets/lang/${lang}/footer-descriptions.json`);
  const cardDescriptions = require(`../assets/lang/${lang}/card-descriptions.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      downloadUrl, metatagsDescriptions, descriptions, footerDescriptions, cardDescriptions,
    },
  };
}

export default Core;
