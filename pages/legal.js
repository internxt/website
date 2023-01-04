import React from 'react';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import Layout from '../components/layout/Layout';
import cookies from '../lib/cookies';
import TermsAndConditionsOverview from '../components/legal/TermsAndConditionsOverview';
import WhenWhyHowSection from '../components/legal/WhenWhyHowSection';
import CookiesSection from '../components/legal/CookiesSection';

const Legal = ({ lang, metatagsDescriptions, textContent, navbarLang, footerLang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'legal');

  return (
    <Layout segmentName="Legal" title={metatags[0].title} description={metatags[0].description} lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center break-words py-20 px-6 pt-32 md:pt-64 xl:px-0">
        <TermsAndConditionsOverview textContent={textContent} />

        <WhenWhyHowSection textContent={textContent} />

        <CookiesSection textContent={textContent} />
      </div>

      <Footer textContent={footerLang} hideNewsletter={false} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`../assets/lang/${lang}/terms-and-conditions.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      metatagsDescriptions,
      textContent,
      navbarLang,
      footerLang,
    },
  };
}

export default Legal;
