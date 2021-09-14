import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AOS from 'aos';

import HeroSection from '../components/products/HeroSection';
import CardsSection from '../components/products/CardsSection';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import Layout from '../components/layout/Layout';
import cookies from '../lib/cookies';
import { getDriveDownloadUrl, getPlatform } from '../lib/get-download-url';
import setUTM from '../lib/conversions';

const Products = ({
  lang, metatagsDescriptions, langJson, navbarLang, footerLang, downloadUrl, devicePlatform, deviceLang
}) => {
  const router = useRouter();
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'drive');

  useEffect(() => {
    AOS.init();
    setUTM();
  }, []);

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="products">
      <div className="heroSection">
        <Navbar textContent={navbarLang} lang={deviceLang} cta={['default']}/>
        <HeroSection textContent={langJson["HeroSection"]} download={downloadUrl} lang={lang} platform={devicePlatform}/>
        <CardsSection textContent={langJson["CardsSection"]} download={downloadUrl} lang={deviceLang} platform={devicePlatform}/>
      </div>
      <Footer textContent={footerLang} lang={deviceLang} hideNewsletter={false}/>
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const downloadUrl = await getDriveDownloadUrl(ctx);
  const devicePlatform = await getPlatform(ctx);

  const lang = ctx.locale;
  const deviceLang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/${lang}/products.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang, downloadUrl, metatagsDescriptions, langJson, navbarLang, footerLang, devicePlatform, deviceLang,
    },
  };
}

export default Products;
