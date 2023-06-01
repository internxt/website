import { useEffect, useState } from 'react';

import HeroSection from '../components/techcult/HeroSection';
import FeatureSection from '../components/techcult/FeatureSection';
import GetLifetimeSection from '../components/techcult/GetLifetimeSection';
import Footer from '../components/layout/Footer';
import Layout from '../components/layout/Layout';
import cookies from '../lib/cookies';
import PaymentSection from '../components/techcult/PaymentSection';
import Navbar from '../components/layout/Navbar';
import CtaSection from '../components/techcult/CtaSection';

import axios from 'axios';
import { login } from '../lib/auth';
import LogIn from '../components/auth/LogIn';

const Techcult = ({ lang, metatagsDescriptions, langJson, footerLang, deviceLang, navbarLang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'lifetime');
  const [country, setCountry] = useState('ES');
  const [openDialog, setOpenDialog] = useState(false);

  async function getCountryCode() {
    const countryCode = await axios.get(`${process.env.NEXT_PUBLIC_COUNTRY_API_URL}`);
    return countryCode;
  }

  useEffect(() => {
    getCountryCode().then((res) => {
      setCountry(res.data.country);
    });
  }, []);

  useEffect(() => {
    //Get the onclick event from the button and open the dialog. The button id is "redeemCode"
    const redeemCodeButton = document.getElementById('redeemCode');
    redeemCodeButton.addEventListener('click', () => {
      console.log('button clicked');
      setOpenDialog(true);
    });
  }, []);

  return (
    <Layout
      title={metatags[0].title}
      description={metatags[0].description}
      segmentName="Techcult"
      lang={lang}
      specialOffer={`https://internxt.com/images/previewLink/LifetimePreviewLink.png`}
    >
      {openDialog ? (
        <div
          className={`fixed top-0 left-0 right-0 bottom-0 z-50 h-screen bg-black bg-opacity-50 px-5 lg:px-0`}
          onClick={() => {
            setOpenDialog(false);
          }}
        >
          <div
            className={`absolute top-1/2 left-1/2
        flex -translate-y-1/2 -translate-x-1/2 transform flex-col rounded-2xl bg-white p-7 text-neutral-900`}
          >
            <LogIn openDialog={openDialog} textContent={langJson.Auth} />
          </div>
        </div>
      ) : null}

      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed mode="payment" />

      <HeroSection hideTimer={true} lang={lang} textContent={langJson.HeroSection} />

      <PaymentSection textContent={langJson.PaymentSection} lang={lang} country={country} />

      <GetLifetimeSection textContent={langJson.GetLifetimeSection} />

      <FeatureSection textContent={langJson.FeatureSection} />

      <CtaSection textContent={langJson.CtaSection} />

      <Footer textContent={footerLang} lang={deviceLang} hideNewsletter />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const deviceLang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/en/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/en/techcult.json`);
  const navbarLang = require(`../assets/lang/en/navbar.json`);
  const footerLang = require(`../assets/lang/en/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      deviceLang,
      metatagsDescriptions,
      langJson,
      navbarLang,
      footerLang,
    },
  };
}

export default Techcult;
