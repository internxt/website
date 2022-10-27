import React from 'react';
import cookies from '../lib/cookies';
import Layout from '../components/layout/Layout';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/partner-discount/HeroSection';
import PaymentsSection from '../components/partner-discount/PaymentsSection';

const PartnerDiscount = ({ lang, metatagsDescriptions, navbarLang, langJson }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'partner-discount');

  return (
    <Layout
      title={metatags[0].title}
      description={metatags[0].description}
      isSendSnackbar={false}
      segmentName="Partners"
      lang={lang}
    >
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

      <HeroSection textContent={langJson.HeroSection} />

      <PaymentsSection textContent={langJson.PaymentSection} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/${lang}/partner-discount.json`);
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

export default PartnerDiscount;
