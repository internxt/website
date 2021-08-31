import React, { useEffect, useState } from 'react';
import AOS from 'aos';

import HeroSection from '../../components/lifetime/HeroSection';
import Footer from '../../components/layout/Footer';
import Navbar from '../../components/layout/Navbar';
import Layout from '../../components/layout/Layout';
import cookies from '../../lib/cookies';
import { getDriveDownloadUrl } from '../../lib/get-download-url';
import { redirectToCheckoutAction } from '../../components/CheckoutForm';
import setUTM from '../../lib/conversions';

const Lifetime = ({
  lang, metatagsDescriptions, langJson, cardDescriptions, navbarLang, footerLang, downloadUrl, deviceLang
}) => {
  const [consentCookie, setConsentCookie] = useState(true);
  const [stripeObject, setStripeObject] = useState({});
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'drive');

  useEffect(() => {
    AOS.init();
    const cookie = localStorage.getItem('CookieConsent');

    if (!cookie) setConsentCookie(false);

    const urlParams = new URLSearchParams(window.location.search);
    const gclid = urlParams.get('gclid');
    localStorage.setItem('gclid', gclid);

    const stripeObj = { product: 'lifetime2TB' };
    setStripeObject(stripeObj);

    setUTM();
  }, []);

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="drive">
      <div>
        <Navbar textContent={navbarLang} lang={deviceLang} cta={['checkout',() => redirectToCheckoutAction(stripeObject)]}/>
        <HeroSection textContent={langJson["lifetime2TB"]} download={downloadUrl} lang={deviceLang} checkout={() => redirectToCheckoutAction(stripeObject)}/>
      </div>
      <div className="bg-neutral-10">
        <Footer textContent={footerLang} lang={deviceLang}/>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const downloadUrl = await getDriveDownloadUrl(ctx);

  const lang = ctx.locale;
  const deviceLang = ctx.locale;

  const metatagsDescriptions = require(`../../assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`../../assets/lang/${lang}/lifetime.json`);
  const navbarLang = require(`../../assets/lang/${lang}/navbar.json`);
  const footerLang = require(`../../assets/lang/${lang}/footer.json`);
  const cardDescriptions = require(`../../assets/lang/${lang}/card-descriptions.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang, downloadUrl, deviceLang, metatagsDescriptions, langJson, navbarLang, footerLang, cardDescriptions,
    },
  };
}

export default Lifetime;