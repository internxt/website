import Script from 'next/script';
import React, { useState, useEffect } from 'react';

import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import PriceTable from '../components/prices/PriceTable';
import Layout from '../components/layout/Layout';
import cookies from '../lib/cookies';
import axios from 'axios';
import FAQSection from '../components/pricing/FAQSection';
import CtaSection from '../components/pricing/CtaSection';
import FileParallaxSection from '../components/home/FileParallaxSection';
import InfoSection from '../components/home/InfoSection';
import FirstWhatWeDoSection from '../components/home/FirstWhatWeDoSection';
import BestStorageSection from '../components/pricing/BestStorageSection';
import HeroSection from '../components/pricing/HeroSection';

import { sm_faq, sm_breadcrumb } from '../components/utils/schema-markup-generator';

const Pricing = ({ metatagsDescriptions, navbarLang, footerLang, lang, textContent, homeComponentsLang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'pricing');

  const [pageName, setPageName] = useState('Pricing Individuals Annually');
  const [country, setCountry] = useState('ES');
  const [isLifetime, setIsLifetime] = useState(false);

  async function getCountryCode() {
    const options = {
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_COUNTRY_API_URL}`,
    };
    const countryCode = await axios(options);
    return countryCode;
  }

  useEffect(() => {
    getCountryCode()
      .then((res) => {
        setCountry(res.data.country);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  return (
    <>
      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_faq(textContent.SchemaMarkupQuestions.faq)}
      </Script>

      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_breadcrumb('Pricing', 'pricing')}
      </Script>

      <Layout segmentName={pageName} title={metatags[0].title} description={metatags[0].description} lang={lang}>
        <Navbar
          textContent={navbarLang}
          lang={lang}
          cta={['default']}
          fixed
          mode={isLifetime ? 'payment' : 'subscription'}
        />

        <HeroSection textContent={textContent.HeroSection} />

        <PriceTable
          setSegmentPageName={setPageName}
          lang={lang}
          country={country}
          setIsLifetime={setIsLifetime}
          textContent={textContent.tableSection}
        />

        {/* <CtaSection textContent={textContent.CtaSection} freePlan /> */}

        <InfoSection textContent={homeComponentsLang.InfoSection} isPricingPage />

        {/* <FirstWhatWeDoSection
          textContent={textContent.FirstWhatWeDoSection}
          lang={lang}
          backgroundColor={'bg-gray-1'}
        />

        <BestStorageSection textContent={textContent.BestStorageSection} /> */}

        {/* <FileParallaxSection /> */}

        <FAQSection textContent={textContent.FaqSection} />

        <CtaSection textContent={textContent.lastCtaSection} />

        <Footer textContent={footerLang} lang={lang} hideNewsletter={false} />
      </Layout>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`../assets/lang/${lang}/pricing.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);
  const homeComponentsLang = require(`../assets/lang/${lang}/home.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      metatagsDescriptions,
      footerLang,
      navbarLang,
      lang,
      textContent,
      homeComponentsLang,
    },
  };
}

export default Pricing;
