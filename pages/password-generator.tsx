import React from 'react';
import cookies from '../lib/cookies';
import { downloadDriveLinks } from '../lib/get-download-url';
import Navbar from '../components/layout/Navbar';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/password-generator/HeroSection';
import Footer from '../components/layout/Footer';
import InfoSection from '../components/password-generator/InfoSection';
import CtaSection from '../components/shared/CtaSection';
import ToolsSection from '../components/shared/ToolsSection';
import FAQSection from '../components/shared/FaqSection';

const DRIVE_URL = 'https://drive.internxt.com/new';

const PasswordGenerator = ({ metatagsDescriptions, langJson, lang, navbarLang, footerLang, bannerText }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'password-generator');

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Home" lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

      <HeroSection textContent={langJson.HeroSection} />

      <InfoSection textContent={langJson.InfoSection} bannerText={bannerText.SignUpPasswordGenerator} />

      <CtaSection textContent={langJson.CtaSection} url={DRIVE_URL} />

      <ToolsSection textContent={langJson.ToolsSection} lang={lang} maxWidth="max-w-2xl" />

      <FAQSection textContent={langJson.FaqSection} />

      <Footer textContent={footerLang} lang={lang} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const downloadURL = await downloadDriveLinks();

  const lang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/${lang}/password-generator.json`);
  const bannerText = require(`../assets/lang/${lang}/banners.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      downloadURL,
      metatagsDescriptions,
      langJson,
      navbarLang,
      footerLang,
      bannerText,
    },
  };
}

export default PasswordGenerator;
