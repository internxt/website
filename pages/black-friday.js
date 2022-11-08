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
import FaqSection from '../components/black-friday/FAQSection';
import FooterSection from '../components/black-friday/FooterSection';
import axios from 'axios';
import { useRouter } from 'next/router';

const BLACK_FRIDAY_COUPON_ID = 'pkyYefOz';
const BLACK_FRIDAY_AFFILIATES_COUPON_ID = 'n7qEeZgb';
const BLACK_FRIDAY_METATAG_ID = 'black-friday';

const BlackFriday = ({ lang, deviceLang, metatagsDescriptions, langJson, navbarLang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === BLACK_FRIDAY_METATAG_ID);
  const [country, setCountry] = React.useState('ES');
  const router = useRouter();
  const { coupon } = router.query;
  const isAffiliate = coupon === BLACK_FRIDAY_AFFILIATES_COUPON_ID ? true : false;

  const couponCode = coupon ? coupon : BLACK_FRIDAY_COUPON_ID;

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
        hideLogin={true}
        cta={['Hide Login']}
        isLinksHidden
        darkMode={true}
      />

      <HeroSection lang={lang} textContent={langJson.blackFriday} country={country} isAffiliate={isAffiliate} />

      <BestStorageSection textContent={langJson.blackFriday} lang={lang} />

      <SuiteSection textContent={langJson.blackFriday} />

      <CtaSection textContent={langJson.cta} country={country} lang={lang} isAffiliates={isAffiliate} />

      <FeatureSection textContent={langJson.blackFriday} />

      <PlatformSection textContent={langJson.blackFriday} />

      <TestimonialsSection textContent={langJson.blackFriday} />

      <CtaSection textContent={langJson.cta} country={country} lang={lang} isAffiliates={isAffiliate} />

      <FaqSection textContent={langJson.blackFriday} />

      <FooterSection textContent={langJson.blackFriday} country={country} lang={lang} sAffiliates={isAffiliate} />
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
