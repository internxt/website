import React, { useEffect } from 'react';
import cookies from '../lib/cookies';
import Layout from '../components/layout/Layout';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/black-friday/HeroSection';
import BestStorageSection from '../components/black-friday/BestStorageSection';
import SuiteSection from '../components/black-friday/SuiteSection';
import CtaSection from '../components/black-friday/CtaSection';
import FeatureSection from '../components/black-friday/FeatureSection';
import PlatformSection from '../components/black-friday/PlatformSection';
import TestimonialsSection from '../components/black-friday/TestimonialsSection';
import FaqSection from '../components/black-friday/FaqSection';
import FooterSection from '../components/black-friday/FooterSection';
import axios from 'axios';
import { useRouter } from 'next/router';

const BlackFriday = ({ lang, deviceLang, metatagsDescriptions, langJson, navbarLang, footerLang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'black-friday');
  const [country, setCountry] = React.useState('ES');
  const router = useRouter();
  const { coupon } = router.query;

  const couponCode = coupon ? coupon : 'BLACKFRIDAY';

  async function getCountryCode() {
    const options = {
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_COUNTRY_API_URL}`,
    };
    const countryCode = await axios(options);
    return countryCode;
  }

  useEffect(() => {
    getCountryCode().then((res) => {
      setCountry(res.data.country);
    });
  });

  return (
    <Layout
      title={metatags[0].title}
      description={metatags[0].description}
      segmentName="Black Friday"
      isSendSnackbar={false}
    >
      <Navbar
        lang={deviceLang}
        textContent={navbarLang}
        coupon={couponCode}
        cta={['checkout', 'TB212']}
        hideLogin={true}
      />

      <HeroSection lang={lang} textContent={langJson.blackFriday} country={country} />

      <BestStorageSection textContent={langJson.blackFriday} lang={lang} />

      <SuiteSection textContent={langJson.blackFriday} />

      <CtaSection textContent={langJson.cta1} lang={lang} />

      <FeatureSection textContent={langJson.blackFriday} />

      <PlatformSection textContent={langJson.blackFriday} />

      <TestimonialsSection textContent={langJson.blackFriday} />

      <FaqSection textContent={langJson.blackFriday} />

      <CtaSection textContent={langJson.cta2} lang={lang} />

      <FooterSection textContent={footerLang} lang={lang} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const deviceLang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/${lang}/black-friday.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      deviceLang,
      metatagsDescriptions,
      navbarLang,
      footerLang,
      langJson,
    },
  };
}

export default BlackFriday;
