import Script from 'next/script';
import React from 'react';

import HeroSection from '../components/about/HeroSection';
import WhatWeDoSection from '../components/about/WhatWeDoSection';
import FeatureSection from '../components/about/FeatureSection';
import Footer from '../components/layout/Footer';
import Layout from '../components/layout/Layout';
import Navbar from '../components/layout/Navbar';
import cookies from '../lib/cookies';

import { sm_breadcrumb } from '../components/utils/schema-markup-generator';
import CtaSection from '../components/shared/CtaSection';
import CompanySection from '../components/about/CompanySection';
import HeroSection2 from '../components/about/HeroSection2';

const CTA_URL = 'https://internxt.com/pricing';

const AboutUs = ({ lang, textContent, footerLang, navbarLang, metatagsDescriptions }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'about');

  return (
    <>
      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_breadcrumb('About', 'about')}
      </Script>

      <Layout segmentName="About" title={metatags[0].title} description={metatags[0].description} lang={lang}>
        <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />
        {lang === 'en' ? (
          <>
            <HeroSection textContent={textContent.HeroSection} />

            <WhatWeDoSection textContent={textContent.WhatWeDoSection} />

            <FeatureSection textContent={textContent.FeatureSection} />

            <CtaSection textContent={textContent.CtaSection} url={CTA_URL} />
          </>
        ) : (
          <>
            <HeroSection2 textContent={textContent.HeroSection} lang={lang} />

            <CompanySection textContent={textContent.CompanySection} />
          </>
        )}

        <Footer textContent={footerLang} lang={lang} hideNewsletter={false} />
      </Layout>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);
  const textContent = require(`../assets/lang/${lang}/about.json`);
  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      metatagsDescriptions,
      footerLang,
      navbarLang,
      textContent,
    },
  };
}

export default AboutUs;
