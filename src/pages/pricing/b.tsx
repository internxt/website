import FileParallaxSection from '@/components/home/FileParallaxSection';
import Layout from '@/components/layout/Layout';
import Footer from '@/components/layout/footers/Footer';
import Navbar from '@/components/layout/navbars/Navbar';
import { PriceTableForAlternativePricing } from '@/components/prices/alternative/PriceTableForAlternativePricing';
import { RangeSliderHeroSection } from '@/components/prices/alternative/RangeSliderHeroSection';
import CtaSection from '@/components/shared/CtaSection';
import FAQSection from '@/components/shared/sections/FaqSection';
import { IconsSection } from '@/components/shared/sections/IconsSection';
import InfoSection from '@/components/shared/sections/InfoSection';
import usePricing from '@/hooks/usePricing';
import { CircleWavyCheck, Database, Eye, Fingerprint, Key, LockKey, Recycle, ShieldCheck } from '@phosphor-icons/react';
import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

interface PricingAlternativeProps {
  metaDescriptions: Record<string, any>;
  navbarContent: Record<string, any>;
  textContent: Record<string, any>;
  footerContent: Record<string, any>;
  lang: GetServerSidePropsContext['locale'];
}

const PLAN_RANGE: { [key: string]: string | string[] } = {
  '200GB': ['50GB', '100GB', '200GB'],
  '2TB': ['500GB', '1TB', '2TB'],
  '5TB': '4TB',
  '10TB': ['8TB', '10TB'],
};

const getPlan = (valueLabel: string): string => {
  const entry = Object.entries(PLAN_RANGE).find(([key, value]) => {
    if (Array.isArray(value)) {
      return value.includes(valueLabel);
    }
    return value === valueLabel;
  });
  return entry ? entry[0] : 'Unknown plan';
};

const getCardsContent = (textContent) => {
  const cardsData = [
    {
      icon: ShieldCheck,
      title: textContent.InfoSection.cards[0].title,
      description: textContent.InfoSection.cards[0].description,
    },
    {
      icon: LockKey,
      title: textContent.InfoSection.cards[1].title,
      description: textContent.InfoSection.cards[1].description,
    },
    {
      icon: Eye,
      title: textContent.InfoSection.cards[2].title,
      description: textContent.InfoSection.cards[2].description,
    },
    {
      icon: Fingerprint,
      title: textContent.InfoSection.cards[3].title,
      description: textContent.InfoSection.cards[3].description,
    },
  ];

  const iconsSectionData = [
    {
      icon: Database,
      title: textContent.BestStorageSection.card1.title,
    },
    {
      icon: Key,
      title: textContent.BestStorageSection.card2.title,
    },
    {
      icon: Recycle,
      title: textContent.BestStorageSection.card3.title,
    },
    {
      icon: Eye,
      title: textContent.BestStorageSection.card4.title,
    },
    {
      icon: CircleWavyCheck,
      title: textContent.BestStorageSection.card5.title,
    },
  ];

  return {
    cardsData,
    iconsSectionData,
  };
};

const PricingAlternative = ({
  metaDescriptions,
  navbarContent,
  textContent,
  footerContent,
  lang,
}: PricingAlternativeProps) => {
  const { products, currency, currencyValue } = usePricing();

  const [selectedPlanStorage, setSelectedPlanStorage] = useState<string>();
  const [filteredProducts, setFilteredProducts] = useState<any[]>();
  const [isButtonFixed, setIsButtonFixed] = useState(false);

  const buttonRef = useRef<HTMLDivElement>(null);
  const metatagsDescriptions = metaDescriptions.filter((meta) => meta.id === 'pricing')[0];

  const shouldShowAllComponents = !!selectedPlanStorage;
  const locale = lang as string;

  const { cardsData, iconsSectionData } = getCardsContent(textContent);

  const joinProducts = products?.individuals && Object.values(products?.individuals).flat();

  useEffect(() => {
    const handleScroll = () => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        if (rect.bottom <= window.innerHeight - 96) {
          setIsButtonFixed(true);
        } else if (rect.top >= window.innerHeight - 96) {
          setIsButtonFixed(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (selectedPlanStorage) {
      const interval = setTimeout(() => (window.location.href = '#priceTable'), 200);

      return () => clearInterval(interval);
    }
  }, [selectedPlanStorage]);

  useEffect(() => {
    const productsFilteredByStorage =
      joinProducts &&
      joinProducts.filter((product: { storage: string }) => product.storage === selectedPlanStorage)?.reverse();

    setFilteredProducts(productsFilteredByStorage);
  }, [selectedPlanStorage, products]);

  const handleCalculateStorageButtonClick = (value: string) => {
    const plan = getPlan(value);
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
            currency={currency}
            currencyValue={currencyValue}
            filteredProducts={filteredProducts}
          />

          <InfoSection
            textContent={textContent.InfoSection}
            lang={locale}
            cards={cardsData}
            withoutCta
            hideCtaArrow
            redirect="#priceTable"
            buttonComponent={
              <>
                <div ref={buttonRef} className=""></div>
                <div
                  className={`${
                    isButtonFixed ? 'fixed bottom-0 z-50 w-full bg-white bg-opacity-90 py-5' : 'relative'
                  } flex justify-center`}
                >
                  <div className="flex">
                    <Link
                      href={'#priceTable'}
                      className="flex w-max justify-center rounded-lg bg-primary py-3 px-5 text-xl font-medium text-white hover:bg-primary-dark"
                    >
                      {textContent.InfoSection.cta}
                    </Link>
                  </div>
                </div>
              </>
            }
          />

          <IconsSection iconsAndTitlesData={iconsSectionData} />

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
