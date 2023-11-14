import React from 'react';

import cookies from '../lib/cookies';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/black-friday/HeroSection';
import SuiteSection from '../components/black-friday/SuiteSection';
import FeatureSection from '../components/black-friday/FeatureSection';
import PlatformSection from '../components/black-friday/PlatformSection';
import TestimonialsSection from '../components/black-friday/TestimonialsSection';
import FaqSection from '../components/black-friday/FAQSection';
import Footer from '../components/layout/Footer';
import PaymentSection from '../components/black-friday/payment/PaymentSection';
import LoginBFBanner from '../components/banners/LoginBFBanner';
import Head from 'next/head';

const BLACK_FRIDAY_METATAG_ID = 'black-friday';

const BlackFriday = ({ lang, deviceLang, metatagsDescriptions, langJson, footerLang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === BLACK_FRIDAY_METATAG_ID);

  return (
    <>
      <Head>
        <meta
          property="og:image"
          content={'https://internxt.com/images/black-friday/black-friday-search-results.png'}
        />
      </Head>
      <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Black Friday">
        <HeroSection lang={lang} textContent={langJson.HeroSection} />

        <PaymentSection textContent={langJson.PaymentSection} />

        <SuiteSection lang={lang} textContent={langJson.SuiteSection} />

        <FeatureSection textContent={langJson.FeatureSection} />

        <PlatformSection textContent={langJson.PlatformSection} />

        <TestimonialsSection textContent={langJson.TestimonialSection} lang={lang} />

        <FaqSection textContent={langJson.faq} />

        <Footer lang={lang} textContent={footerLang} darkMode />
      </Layout>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const deviceLang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/en/metatags-descriptions.json`);
  const navbarLang = require(`../assets/lang/en/navbar.json`);
  const langJson = require(`../assets/lang/en/black-friday.json`);
  const footerLang = require(`../assets/lang/en/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      deviceLang,
      metatagsDescriptions,
      navbarLang,
      langJson,
      footerLang,
    },
  };
}

export default BlackFriday;
