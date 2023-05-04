import Script from 'next/script';
import React from 'react';

import Layout from '../components/layout/Layout';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/temp-email/HeroSection';
import InfoSection from '../components/temp-email/InfoSection';
import ToolsSection from '../components/temp-email/ToolsSection';
import QASection from '../components/temp-email/QASection';
import SignupSection from '../components/temp-email/SignupSection';

import { sm_faq, sm_breadcrumb } from '../components/utils/schema-markup-generator';

const TempEmail = ({ metatagsDescriptions, textContent, footerLang, navbarLang, lang, bannerLang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'temporary-email');

  return (
    <>
      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_faq(textContent.SchemaMarkupQuestions.faq)}
      </Script>

      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_breadcrumb('Temporary Email', 'temporary-email')}
      </Script>

      <Layout segmentName="Temporary email" title={metatags[0].title} description={metatags[0].description} lang={lang}>
        <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

        {/* <TryInternxtBanner
          textContent={bannerLang.tryOutInternxtGeneralBanner}
          url={'https://drive.internxt.com/new?utm_source=website&utm_medium=popupbanner&utm_campaign=tempmail'}
        /> */}

        <HeroSection textContent={textContent.HeroSection} />

        <InfoSection textContent={textContent.InfoSection} bannerText={bannerLang.SignUpTempMailBanner} lang={lang} />

        <ToolsSection textContent={textContent.ToolsSection} lang={lang} />

        <QASection textContent={textContent.QASection} />

        <SignupSection textContent={textContent.SignupSection} />

        <Footer textContent={footerLang} lang={lang} hideNewsletter={false} />
      </Layout>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`../assets/lang/${lang}/temporary-email.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);
  const bannerLang = require(`../assets/lang/${lang}/banners.json`);

  return {
    props: {
      metatagsDescriptions,
      textContent,
      footerLang,
      navbarLang,
      lang,
      bannerLang,
    },
  };
}

export default TempEmail;
