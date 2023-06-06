import Script from 'next/script';
import React from 'react';

import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/password-checker/HeroSection';
import FeaturesSection from '../components/password-checker/FeaturesSection.js';
import FAQSection from '../components/password-checker/FAQSection';
import TryInternxtBanner from '../components/banners/TryInternxtBanner';

import { sm_faq, sm_breadcrumb } from '../components/utils/schema-markup-generator';
import ToolsSection from '../components/shared/ToolsSection';

const PasswordChecker = ({ metatagsDescriptions, langJson, navbarLang, footerLang, lang, bannerLang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'password-checker');

  return (
    <>
      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_faq(langJson.SchemaMarkupQuestions.faq)}
      </Script>

      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_breadcrumb('Password Checker', 'password-checker')}
      </Script>

      <Layout
        segmentName="Password Checker"
        title={metatags[0].title}
        description={metatags[0].description}
        lang={lang}
      >
        <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

        {/* <TryInternxtBanner
          textContent={
            lang === 'en' ? bannerLang.tryOutInternxtPasswordCheckerBanner : bannerLang.tryOutInternxtGeneralBanner
          }
          url={'https://drive.internxt.com/new?utm_source=website&utm_medium=banner&utm_campaign=internxtpw'}
        /> */}

        <HeroSection textContent={langJson.HeroSection} />

        <FeaturesSection
          textContent={langJson.FeaturesSection}
          bannerText={bannerLang.SignUpPwdCheckerBanner}
          lang={lang}
        />

        <ToolsSection textContent={langJson.ToolsSection} lang={lang} />

        <FAQSection textContent={langJson.FaqSection} />

        <Footer textContent={footerLang} lang={lang} hideNewsletter={false} />
      </Layout>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/${lang}/password-checker.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);
  const bannerLang = require(`../assets/lang/${lang}/banners.json`);

  return {
    props: {
      metatagsDescriptions,
      langJson,
      footerLang,
      navbarLang,
      lang,
      bannerLang,
    },
  };
}

export default PasswordChecker;
