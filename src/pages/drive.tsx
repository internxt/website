import Script from 'next/script';

import HeroSection from '@/components/drive/HeroSection';
import FeaturesSection from '@/components/drive/FeaturesSection';
import FeatureSection from '@/components/drive/FeatureSection';
import FAQSection from '@/components/shared/sections/FaqSection';
import Footer from '@/components/layout/footers/Footer';
import Navbar from '@/components/layout/navbars/Navbar';
import ProductsNavigation from '@/components/layout/ProductsNavigation';
import FileParallaxSection from '@/components/home/FileParallaxSection';
import WhatWeDoSection from '@/components/drive/WhatWeDoSection';
import CtaSection from '@/components/drive/CtaSection';
import Layout from '@/components/layout/Layout';
import cookies from '@/lib/cookies';
import { downloadDriveLinks } from '@/lib/get-download-url';

import { sm_faq, sm_breadcrumb } from '@/components/utils/schema-markup-generator';
import { CliCard } from '@/components/drive/CliCard';
import { DriveText } from '@/assets/types/drive';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';

interface DriveProps {
  textContent: DriveText;
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  footerLang: FooterText;
  lang: string;
  download: {
    Android: string;
    iPad: string;
    iPhone: string;
    Windows: any;
    MacOS: any;
    UNIX: any;
    Linux: any;
    all: string;
  };
}

const Drive = ({
  metatagsDescriptions,
  download,
  textContent,
  navbarLang,
  footerLang,
  lang,
}: DriveProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'drive');

  return (
    <>
      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_faq(textContent.FaqSection.faq)}
      </Script>

      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_breadcrumb('Drive', 'drive')}
      </Script>

      <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Drive" lang={lang}>
        <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

        <ProductsNavigation textContent={navbarLang} lang={lang} selectedItem="drive" />

        <HeroSection textContent={textContent.HeroSection} lang={lang} download={download} />

        <div className="flex items-center justify-center px-2 pb-20">
          <CliCard textContent={textContent.CliCard} />
        </div>

        <FeaturesSection textContent={textContent.FeaturesSection} lang={lang} download={download} />

        <FileParallaxSection />

        <WhatWeDoSection textContent={textContent.FeaturesSection} lang={lang} />

        <FeatureSection textContent={textContent.FeatureSection} />

        <FAQSection textContent={textContent.FaqSection} />

        <CtaSection textContent={textContent.CtaSection} />

        <Footer textContent={footerLang} lang={lang} />
      </Layout>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const download = await downloadDriveLinks();
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/drive.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      download,
      metatagsDescriptions,
      textContent,
      navbarLang,
      footerLang,
    },
  };
}

export default Drive;
