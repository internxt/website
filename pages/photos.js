import React from 'react';
import userAgent from 'useragent';
import HeroSection from '../components/photos/HeroSection';
import FeaturesSection from '../components/photos/FeaturesSection';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import ProductsNavigation from '../components/layout/ProductsNavigation';
import Layout from '../components/layout/Layout';
import cookies from '../lib/cookies';
import { downloadDriveByPlatform } from '../lib/get-download-url';

const Photos = ({
  metatagsDescriptions,
  langJson,
  navbarLang,
  footerLang,
  download,
  device,
  lang
}) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'photos');

  return (

    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Photos" lang={lang}>

      <Navbar
        textContent={navbarLang}
        lang={lang}
        cta={['default']}
        fixed
      />

      <ProductsNavigation
        textContent={navbarLang}
        lang={lang}
        selectedItem="photos"
      />

      <HeroSection
        textContent={langJson.HeroSection}
        lang={lang}
        device={device}
        download={download}
      />

      <FeaturesSection
        textContent={langJson.FeaturesSection}
        lang={lang}
        device={device}
        download={download}
      />

      <Footer
        textContent={footerLang}
        lang={lang}
      />

    </Layout>

  );
};

export async function getServerSideProps(ctx) {
  const download = await downloadDriveByPlatform(ctx);

  const ua = ctx.req.headers['user-agent'];
  const device = userAgent.parse(ua).os.family;

  const lang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/${lang}/photos.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang, download, device, metatagsDescriptions, langJson, navbarLang, footerLang
    },
  };
}

export default Photos;
