import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import cookies from '../lib/cookies';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/black-friday/HeroSection';
import SuiteSection from '../components/black-friday/SuiteSection';
import FeatureSection from '../components/black-friday/FeatureSection';
import PlatformSection from '../components/black-friday/PlatformSection';
import TestimonialsSection from '../components/black-friday/TestimonialsSection';
import FaqSection from '../components/black-friday/FAQSection';

// const BLACK_FRIDAY_COUPON_ID = 'pkyYefOz';
// const BLACK_FRIDAY_AFFILIATES_COUPON_ID = 'n7qEeZgb';
const BLACK_FRIDAY_METATAG_ID = 'black-friday';

const BlackFriday = ({ lang, deviceLang, metatagsDescriptions, langJson, navbarLang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === BLACK_FRIDAY_METATAG_ID);
  const [country, setCountry] = React.useState('ES');
  const router = useRouter();
  // const { coupon } = router.query;
  // const isAffiliate = coupon === BLACK_FRIDAY_AFFILIATES_COUPON_ID ? true : false;
  async function getCountryCode() {
    const countryCode = await axios({
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_COUNTRY_API_URL}`,
    });
    return countryCode;
  }

  useEffect(() => {
    getCountryCode().then((res) => {
      setCountry(res.data.country);
    });
  });

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Black Friday">
      <HeroSection lang={lang} textContent={langJson.HeroSection} />

      <SuiteSection lang={lang} textContent={langJson.SuiteSection} />

      <FeatureSection textContent={langJson.FeatureSection} />

      <PlatformSection textContent={langJson.PlatformSection} />

      <TestimonialsSection textContent={langJson.TestimonialSection} lang={lang} />

      <FaqSection textContent={langJson.faq} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const deviceLang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/${lang}/black-friday.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      deviceLang,
      metatagsDescriptions,
      navbarLang,
      langJson,
    },
  };
}

export default BlackFriday;
