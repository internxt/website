import Script from 'next/script';
import React from 'react';

import HeroSection from '../components/privacy/HeroSection';
import ManifestoSection from '../components/privacy/ManifestoSection';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import Layout from '../components/layout/Layout';
import cookies from '../lib/cookies';

import { sm_faq, sm_breadcrumb } from '../components/utils/schema-markup-generator';

const Privacy = ({ metatagsDescriptions, langJson, navbarLang, footerLang, lang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'privacy');

  return (
    <>
      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_faq(langJson.ManifestoSection.FaqSection.faq)}
      </Script>

      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_breadcrumb('Privacy', 'privacy')}
      </Script>

      <Layout
        title={metatags[0].title}
        isBannerFixed
        description={metatags[0].description}
        segmentName="Privacy"
        lang={lang}
      >
        <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed={false} darkMode />

        <HeroSection textContent={langJson.HeroSection} />

        <ManifestoSection textContent={langJson.ManifestoSection} />

        <Footer textContent={footerLang} lang={lang} darkMode />
      </Layout>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/${lang}/privacy.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      metatagsDescriptions,
      langJson,
      navbarLang,
      footerLang,
    },
  };
}

export default Privacy;
