import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { PricingText } from '@/assets/types/pricing';
import FileParallaxSection from '@/components/home/FileParallaxSection';
import FirstWhatWeDoSection from '@/components/home/FirstWhatWeDoSection';
import Layout from '@/components/layout/Layout';
import Footer from '@/components/layout/footers/Footer';
import Navbar from '@/components/layout/navbars/Navbar';
import { PriceTableForAlternativePricing } from '@/components/prices/alternative/PriceTableForAlternativePricing';
import BestStorageSection from '@/components/pricing/BestStorageSection';
import { Interval } from '@/components/services/stripe.service';
import CtaSection from '@/components/shared/CtaSection';
import FAQSection from '@/components/shared/sections/FaqSection';
import InfoSection from '@/components/shared/sections/InfoSection';
import { SIGNUP_DRIVE_WEB } from '@/constants';
import usePricing from '@/hooks/usePricing';
import { CouponType } from '@/lib/types';
import { CircleWavyCheck, Database, Eye, Fingerprint, Key, LockKey, Recycle, ShieldCheck } from '@phosphor-icons/react';
import { GetServerSidePropsContext } from 'next';
import { useEffect, useState } from 'react';

interface PricingAlternativeProps {
  metaDescriptions: MetatagsDescription[];
  navbarContent: NavigationBarText;
  textContent: PricingText;
  homeTextContent: Record<string, any>;
  footerContent: FooterText;
  lang: GetServerSidePropsContext['locale'];
}

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
  homeTextContent,
  footerContent,
  lang,
}: PricingAlternativeProps) => {
  const { products, coupon, currency, currencyValue } = usePricing({
    couponCode: CouponType.AllPlansCoupon,
  });

  const [selectedPlanStorage, setSelectedPlanStorage] = useState<string>('2TB');
  const [filteredProducts, setFilteredProducts] = useState<any[]>();

  const metatagsDescriptions = metaDescriptions.filter((meta) => meta.id === 'pricing')[0];

  const locale = lang as string;

  const { cardsData } = getCardsContent(textContent);

  const concatenatedProducts = products?.individuals && Object.values(products?.individuals).flat();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (buttonRef.current) {
  //       const rect = buttonRef.current.getBoundingClientRect();
  //       if (rect.bottom <= window.innerHeight - 96) {
  //         setIsButtonFixed(true);
  //       } else if (rect.top >= window.innerHeight - 96) {
  //         setIsButtonFixed(false);
  //       }
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    const productsFilteredByStorage =
      concatenatedProducts &&
      concatenatedProducts.filter((product: { storage: string }) => product.storage === selectedPlanStorage)?.reverse();

    setFilteredProducts(productsFilteredByStorage);
  }, [selectedPlanStorage, products]);

  const handleOnPlanButtonClicked = (value: string) => {
    setSelectedPlanStorage(value);
  };

  const availableStorage = products?.individuals[Interval.Month].filter((plan) => plan.storage);

  return (
    <Layout title={metatagsDescriptions.title} description={metatagsDescriptions.description}>
      <Navbar lang={locale} textContent={navbarContent} fixed cta={['default']} />

      <div className="pt-10">
        <PriceTableForAlternativePricing
          textContent={textContent.PriceTableForAlternativePricing}
          selectedPlanStorage={selectedPlanStorage}
          coupons={{
            subscription: coupon,
          }}
          lang={locale}
          availableStorage={availableStorage}
          handleOnPlanButtonClicked={handleOnPlanButtonClicked}
          discount={0.2}
          currency={currency}
          currencyValue={currencyValue}
          filteredProducts={filteredProducts}
          showFreeCard
        />
      </div>

      <CtaSection textContent={textContent.CtaSection} url={SIGNUP_DRIVE_WEB} />

      <InfoSection
        textContent={textContent.InfoSection}
        lang={locale}
        cards={cardsData}
        // buttonComponent={
        //   <>
        //     <div ref={buttonRef} className=""></div>
        //     <div
        //       className={`${
        //         isButtonFixed ? 'fixed bottom-0 z-50 w-full bg-white bg-opacity-90 py-5' : 'relative'
        //       } flex justify-center`}
        //     >
        //       <div className="flex">
        //         <Link
        //           href={'#priceTable'}
        //           className="flex w-max justify-center rounded-lg bg-primary py-3 px-5 text-xl font-medium text-white hover:bg-primary-dark"
        //         >
        //           {textContent.InfoSection.cta}
        //         </Link>
        //       </div>
        //     </div>
        //   </>
        // }
      />

      {/* <IconsSection iconsAndTitlesData={iconsSectionData} /> */}

      <FirstWhatWeDoSection
        textContent={homeTextContent.FirstWhatWeDoSection}
        lang={lang as string}
        backgroundColor="bg-gray-1"
      />

      <div className="flex justify-center pt-20">
        <BestStorageSection textContent={textContent.BestStorageSection} />
      </div>

      <FileParallaxSection />

      <FAQSection textContent={textContent.FaqSection} />

      <CtaSection textContent={textContent.lastCtaSection} url="#priceTable" />

      <Footer textContent={footerContent} lang={locale} />
    </Layout>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const lang = context.locale;

  const metaDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const navbarContent = require(`@/assets/lang/${lang}/navbar.json`);
  const textContent = require(`@/assets/lang/${lang}/pricing.json`);
  const homeTextContent = require(`@/assets/lang/${lang}/home.json`);
  const footerContent = require(`@/assets/lang/${lang}/footer.json`);

  return {
    props: {
      metaDescriptions,
      navbarContent,
      homeTextContent,
      textContent,
      footerContent,
      lang,
    },
  };
}

export default PricingAlternative;
