import React from 'react';
import { GetServerSidePropsContext } from 'next';
import RedeemContainer from '../components/partners/giveawayoftheday/RedeemContainer';
import Container2 from '../components/drive/Container2';
import Container3 from '../components/drive/Container3';
import Container4 from '../components/drive/Container4';
import Container5 from '../components/drive/Container5';
import Container6 from '../components/drive/Container6';
import Container7 from '../components/drive/Container7';
import Container8 from '../components/drive/Container8';
import Layout from '../components/layout/Layout';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import cookies from '../lib/cookies';
import { getDriveDownloadUrl } from '../lib/get-download-url';

const Shareware = ({
  metatagsDescriptions, descriptions, footerDescriptions, cardDescriptions, id, downloadUrl,
}) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'drive');

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="home">
      <Navbar />
      <RedeemContainer id="1" descriptions={descriptions} />
      <Container2 id="2" descriptions={descriptions} cardDescriptions={cardDescriptions} />
      <Container3 id="3" descriptions={descriptions} />
      <Container4 id="4" descriptions={descriptions} />
      <Container5 id="5" {...{ downloadUrl, descriptions }} />
      <Container6 id="6" descriptions={descriptions} />
      <Container7 id="7" descriptions={descriptions} />
      <Container8 id="8" descriptions={descriptions} />
      <Footer descriptions={footerDescriptions} cardDescriptions={cardDescriptions} />
    </Layout>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const downloadUrl = await getDriveDownloadUrl(ctx);

  const lang = 'en';
  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const descriptions = require(`../assets/lang/${lang}/drive.json`);
  const footerDescriptions = require(`../assets/lang/${lang}/footer-descriptions.json`);
  const cardDescriptions = require(`../assets/lang/${lang}/card-descriptions.json`);

  cookies.setPublicCookie(ctx, 'REFERRAL', 'giveawayoftheday');

  return {
    props: {
      downloadUrl,
      metatagsDescriptions,
      descriptions, footerDescriptions, cardDescriptions,
    },
  };
}

export default Shareware;
