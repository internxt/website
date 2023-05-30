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
import { toast } from 'react-toastify';
import ShowSnackbar from '../components/ShowSnackbar';

const Pricing = ({ metatagsDescriptions, navbarLang, footerLang, lang, textContent, homeComponentsLang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'pricing');

  const [pageName, setPageName] = useState('Pricing Individuals Annually');
  const [country, setCountry] = useState('ES');
  const [isLifetime, setIsLifetime] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState<'success' | 'error'>();
  const success = () => toast.success('Successfully submitted');
  const sendEmailError = () => toast.error('Something went wrong!');
  const open = showSnackbar === 'success' ? success : sendEmailError;

  async function getCountryCode() {
    const countryCode = await axios.get(`${process.env.NEXT_PUBLIC_COUNTRY_API_URL}`);
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
  }, []);

  useEffect(() => {
    if (showSnackbar) {
      open();
      setShowSnackbar(undefined);
    }
  }, [showSnackbar]);

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
          setShowSnackbar={setShowSnackbar}
        />

        <CtaSection textContent={textContent.CtaSection} freePlan />

        <InfoSection textContent={homeComponentsLang.InfoSection} lang={lang} />

        <FirstWhatWeDoSection
          textContent={textContent.FirstWhatWeDoSection}
          lang={lang}
          backgroundColor={'bg-gray-1'}
        />

        <BestStorageSection textContent={textContent.BestStorageSection} />

        <FileParallaxSection />

        <FAQSection textContent={textContent.FaqSection} />

        <CtaSection textContent={textContent.lastCtaSection} />

        <ShowSnackbar />

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
