import FileParallaxSection from '@/components/home/FileParallaxSection';
import Layout from '@/components/layout/Layout';
import Footer from '@/components/layout/footers/Footer';
import Navbar from '@/components/layout/navbars/Navbar';
import { PriceTableForAlternativePricing } from '@/components/prices/alternative/PriceTableForAlternativePricing';
import { RangeSliderHeroSection } from '@/components/prices/alternative/RangeSliderHeroSection';
import CtaSection from '@/components/shared/CtaSection';
import FAQSection from '@/components/shared/FaqSection';
import { GetServerSidePropsContext } from 'next';
import { useState } from 'react';

interface PricingAlternativeProps {
  metaDescriptions: Record<string, any>;
  navbarContent: Record<string, any>;
  textContent: Record<string, any>;
  footerContent: Record<string, any>;
  lang: GetServerSidePropsContext['locale'];
}

const planRange = {
  '200GB': ['50GB', '100GB', '200GB'],
  '2TB': ['500GB', '1TB', '2TB'],
  '5TB': '4TB',
  '10TB': ['8TB', '10TB'],
};

const getPlan = (valueLabel: string): string => {
  if (planRange['200GB'].includes(valueLabel)) {
    return '200GB';
  } else if (planRange['2TB'].includes(valueLabel)) {
    return '2TB';
  } else if (valueLabel === planRange['5TB']) {
    return '5TB';
  } else if (planRange['10TB'].includes(valueLabel)) {
    return '10TB';
  } else {
    return 'Unknown plan';
  }
};

const PricingAlternative = ({
  metaDescriptions,
  navbarContent,
  textContent,
  footerContent,
  lang,
}: PricingAlternativeProps) => {
  const [selectedPlanStorage, setSelectedPlanStorage] = useState<string>();

  const shouldShowAllComponents = !!selectedPlanStorage;

  const metatagsDescriptions = metaDescriptions.filter((meta) => meta.id === 'pricing')[0];
  const locale = lang as string;

  const handleCalculateStorageButtonClick = (value: string) => {
    const plan = getPlan(value);
    console.log(`Selected plan: ${plan}`);
    setSelectedPlanStorage(plan);
  };

  return (
    <Layout title={metatagsDescriptions.title} description={metatagsDescriptions.description}>
      <Navbar lang={locale} textContent={navbarContent} fixed cta={['default']} />

      <RangeSliderHeroSection
        textContent={textContent.HeroSectionAlternative}
        onButtonClick={handleCalculateStorageButtonClick}
      />

      {shouldShowAllComponents ? (
        <>
          <PriceTableForAlternativePricing
            textContent={textContent.PriceTableForAlternativePricing}
            selectedPlanStorage={selectedPlanStorage}
            lang={locale}
          />

          <FileParallaxSection />

          <FAQSection textContent={textContent.FaqSection} />

          <CtaSection textContent={textContent.lastCtaSection} url="#priceTable" />
        </>
      ) : undefined}

      <Footer textContent={footerContent} lang={locale} />
    </Layout>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const lang = context.locale;

  const metaDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const navbarContent = require(`@/assets/lang/${lang}/navbar.json`);
  const textContent = require(`@/assets/lang/${lang}/pricing.json`);
  const footerContent = require(`@/assets/lang/${lang}/footer.json`);

  return {
    props: {
      metaDescriptions,
      navbarContent,
      textContent,
      footerContent,
      lang,
    },
  };
}

export default PricingAlternative;
