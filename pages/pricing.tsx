import Script from 'next/script';
import { useEffect, useState } from 'react';

import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import PriceTable from '../components/prices/PriceTable';
import Layout from '../components/layout/Layout';
import cookies from '../lib/cookies';
import FAQSection from '../components/shared/FaqSection';
import CtaSection from '../components/pricing/CtaSection';
import HeroSection from '../components/pricing/HeroSection';

import { sm_faq, sm_breadcrumb } from '../components/utils/schema-markup-generator';
import InfoSection from '../components/home/InfoSection';
import { stripeService } from '../components/services/stripeService';
import { currencyService } from '../components/services/currencyService';

const Pricing = ({ metatagsDescriptions, navbarLang, footerLang, lang, textContent, homeComponentsLang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'pricing');
  const [pageName, setPageName] = useState('Pricing Individuals Annually');
  const [isLifetime, setIsLifetime] = useState(false);
  const [products, setProducts] = useState(null);
  const [currency, setCurrency] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { products, currency } = await getData();
        setProducts(products);
        setCurrency(currency);
      } catch (error) {
        console.log(error);
      }
    }

    // Si los datos aún no se han cargado, llama a fetchData
    if (!products || !currency) {
      fetchData();
    }
  }, []); //

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
          setIsLifetime={setIsLifetime}
          textContent={textContent.tableSection}
          products={products}
          currency={currency}
        />

        <InfoSection textContent={homeComponentsLang.InfoSection} lang={lang} />

        {/* <CtaSection textContent={textContent.CtaSection} freePlan />


        <FirstWhatWeDoSection
          textContent={textContent.FirstWhatWeDoSection}
          lang={lang}
          backgroundColor={'bg-gray-1'}
        />

        <BestStorageSection textContent={textContent.BestStorageSection} />

        <FileParallaxSection /> */}

        <FAQSection textContent={textContent.FaqSection} />

        <CtaSection textContent={textContent.CtaSection} />

        <Footer textContent={footerLang} lang={lang} hideNewsletter={false} />
      </Layout>
    </>
  );
};

async function getData() {
  const [prices, currencies] = await Promise.all([
    stripeService.getAllPrices(),
    currencyService.filterCurrencyByCountry(),
  ]);

  return {
    products: prices,
    currency: currencies,
  };
}

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
