import { useEffect, useState } from 'react';

import HeroSection from '@/components/dealfuel/HeroSection';
import FeatureSection from '@/components/dealfuel/FeatureSection';
import GetLifetimeSection from '@/components/dealfuel/GetLifetimeSection';
import Footer from '@/components/layout/Footer';
import Layout from '@/components/layout/Layout';
import cookies from '@/lib/cookies';
import PaymentSection from '@/components/dealfuel/PaymentSection';
import Navbar from '@/components/layout/Navbar';
import CtaSection from '@/components/dealfuel/CtaSection';

import axios from 'axios';
import SignUp from '@/components/auth/SignUp';
import { X } from '@phosphor-icons/react';

const DealMirror = ({ lang, metatagsDescriptions, langJson, footerLang, deviceLang, navbarLang }) => {
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
    const TB2Button = document.getElementById('2TB');
    const TB5Button = document.getElementById('5TB');
    const TB10Buton = document.getElementById('10TB');
    [TB2Button, TB5Button, TB10Buton].forEach((button) =>
      button?.addEventListener('click', () => {
        setOpenDialog(true);
      }),
    );
  }, []);

  return (
    <Layout
      title={metatags[0].title}
      description={metatags[0].description}
      segmentName="StackCommerce"
      lang={lang}
      specialOffer={`https://internxt.com/images/previewLink/LifetimePreviewLink.png`}
    >
      {openDialog ? (
        <div className={`fixed top-0 left-0 right-0 bottom-0 z-40 h-screen bg-black bg-opacity-50 px-5 lg:px-0`}>
          <div
            className={`absolute top-1/2 left-1/2
        z-20 flex w-max -translate-y-1/2 -translate-x-1/2 transform flex-col rounded-2xl bg-white p-7 text-neutral-900`}
          >
            <X className={`absolute top-5 right-5 cursor-pointer`} size={24} onClick={() => setOpenDialog(false)} />
            <SignUp textContent={langJson.Auth} provider="DEALMIRROR" />
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

export default DealMirror;
