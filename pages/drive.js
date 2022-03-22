import React from 'react';
import HeroSection from '../components/drive/HeroSection';
import FeaturesSection from '../components/drive/FeaturesSection';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import ProductsNavigation from '../components/layout/ProductsNavigation';
import Layout from '../components/layout/Layout';
import cookies from '../lib/cookies';
import { downloadDriveLinks } from '../lib/get-download-url';

const Drive = ({
  metatagsDescriptions,
  download,
  langJson,
  navbarLang,
  footerLang,
  lang
}) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'drive');

  return (

    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Drive">

      <Navbar
        textContent={navbarLang}
        lang={lang}
        cta={['default']}
        fixed
      />

      <ProductsNavigation
        textContent={navbarLang}
        lang={lang}
        selectedItem="drive"
      />

      <HeroSection
        textContent={langJson.HeroSection}
        lang={lang}
        download={download}
      />

      <FeaturesSection
        textContent={langJson.FeaturesSection}
        lang={lang}
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
  const download = await downloadDriveLinks(ctx);
  const lang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/${lang}/drive.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang, download, metatagsDescriptions, langJson, navbarLang, footerLang
    },
  };
}

export default Drive;
