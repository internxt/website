import Script from 'next/script';
import React from 'react';

import userAgent from 'useragent';
import HeroSection from '@/components/photos/HeroSection';
import FeaturesSection from '@/components/photos/FeaturesSection';
import FeatureSection from '@/components/photos/FeatureSection';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import ProductsNavigation from '@/components/layout/ProductsNavigation';
import Layout from '@/components/layout/Layout';
import cookies from '@/lib/cookies';
import { downloadDriveLinks } from '@/lib/get-download-url';

import { sm_faq, sm_breadcrumb } from '@/components/utils/schema-markup-generator';
import FileParallaxSection from '@/components/home/FileParallaxSection';
import WhatWeDoSection from '@/components/photos/WhatWeDoSection';
import CtaSection from '@/components/drive/CtaSection';

const Photos = ({ metatagsDescriptions, langJson, navbarLang, footerLang, download, device, lang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'photos');

  return (
    <>
      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_faq(langJson.FaqSection.faq)}
      </Script>

      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_breadcrumb('Photos', 'photos')}
      </Script>

      <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Photos" lang={lang}>
        <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

        <ProductsNavigation textContent={navbarLang} lang={lang} selectedItem="photos" />

        <HeroSection textContent={langJson.HeroSection} lang={lang} device={device} download={download} />

        <FeaturesSection textContent={langJson.FeaturesSection} lang={lang} device={device} download={download} />

        <FileParallaxSection />

        <WhatWeDoSection textContent={langJson.FeaturesSection} lang={device} />

        <FeatureSection textContent={langJson.FeatureSection} />

        <CtaSection textContent={langJson.CtaSection} />

        <Footer textContent={footerLang} lang={lang} />
      </Layout>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const download = await downloadDriveLinks();

  const ua = ctx.req.headers['user-agent'];
  const device = userAgent.parse(ua).os.family;

  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/photos.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      download,
      device,
      metatagsDescriptions,
      langJson,
      navbarLang,
      footerLang,
    },
  };
}

export default Photos;
