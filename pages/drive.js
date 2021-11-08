import React from 'react';
import userAgent from 'useragent';
import HeroSection from '../components/drive/HeroSection';
import FeaturesSection from '../components/drive/FeaturesSection';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import ProductsNavigation from '../components/layout/ProductsNavigation';
import Layout from '../components/layout/Layout';
import cookies from '../lib/cookies';
import { downloadDriveByPlatform } from '../lib/get-download-url';

const Drive = ({
  metatagsDescriptions,
  download,
  langJson,
  navbarLang,
  footerLang,
  deviceLang,
  device
}) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'drive');

  return (

    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Drive">

      <Navbar
        textContent={navbarLang}
        lang={deviceLang}
        cta={['default']}
        fixed
      />

      <ProductsNavigation
        textContent={navbarLang}
        lang={deviceLang}
        selectedItem="drive"
      />

      <HeroSection
        textContent={langJson.HeroSection}
        lang={deviceLang}
        device={device}
        download={download}
      />

      <FeaturesSection
        textContent={langJson.FeaturesSection}
        lang={deviceLang}
        device={device}
        download={download}
      />

      <Footer
        textContent={footerLang}
        lang={deviceLang}
      />

    </Layout>

  );
};

export async function getServerSideProps(ctx) {
  const download = await downloadDriveByPlatform(ctx);

  const ua = ctx.req.headers['user-agent'];
  const device = userAgent.parse(ua).os.family;

  const lang = ctx.locale;
  const deviceLang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/${lang}/drive.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang, download, device, deviceLang, metatagsDescriptions, langJson, navbarLang, footerLang
    },
  };
}

export default Drive;
