/* eslint-disable @typescript-eslint/no-explicit-any */
import HeroSection from '@/components/drive/HeroSection';
import FAQSection from '@/components/shared/sections/FaqSection';
import Footer from '@/components/layout/footers/Footer';
import Navbar from '@/components/layout/navbars/Navbar';
import Layout from '@/components/layout/Layout';
import cookies from '@/lib/cookies';
import { downloadDriveLinks } from '@/lib/get-download-url';
import { DriveText } from '@/assets/types/drive';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import ReviewsSection from '@/components/home/ReviewsSection';
import FileParallaxSection from '@/components/home/FileParallaxSection';
import DownloadComponent from '@/components/shared/DownloadComponent';
import FloatingCtaSectionv2 from '@/components/shared/FloatingCtaSectionV2';
import OfficialCloudProviderSection from '@/components/home/OfficilaCloudProviderSection';
import AdvancedToolsSection from '@/components/drive/AdvancedToolsSection';
import HorizontalScrollableSection from '@/components/shared/HorizontalScrollableSection';
import DriveSection from '@/components/drive/Drivesection';
import ThreeCardsSection from '@/components/shared/sections/ThreeCardsWithImagesSection';
import CoreFeaturesSection from '@/components/drive/CoreFeaturesSection';
import { JSX } from 'react';

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
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'free-cloud-storage');

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="FreeCloudStorage" lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

      <HeroSection textContent={textContent.HeroSection} download={download} ChecksTag="h2" />

      <DriveSection textContent={textContent.DriveSection} />

      <HorizontalScrollableSection
        textContent={textContent.EncryptedCloudStorageSection}
        bgGradient="linear-gradient(360deg, #F4F8FF 0%, #FFFFFF 100%)"
        needsH2
        needsH3
      />

      <FileParallaxSection />

      <CoreFeaturesSection textContent={textContent.CoreFeatures} />

      <HorizontalScrollableSection textContent={textContent.AllInOnePrivacySection} needsH2 />

      <ThreeCardsSection
        textContent={textContent.MadeInEuropeSection}
        bgColor="linear-gradient(180deg, #F4F8FF 0%, #FFFFFF 100%)"
      />

      <OfficialCloudProviderSection textContent={textContent.OfficalCloudProvider} lang={lang} partner="levante" />

      <FloatingCtaSectionv2
        textContent={textContent.CtaSection}
        url={'/drive'}
        customText={
          <div className="flex flex-col items-center gap-4 px-10 text-center lg:px-0">
            <h2 className="text-2xl font-semibold leading-tight text-gray-95 lg:text-4xl">
              {textContent.CtaSection.title}
            </h2>
            <p className="text-base font-normal leading-tight text-gray-55 lg:w-[633px] lg:text-center lg:text-xl">
              {textContent.CtaSection.description}
            </p>
          </div>
        }
        bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
        containerDetails="shadow-lg backdrop-blur-[55px]"
        bgPadding="lg:py-20"
      />

      <DownloadComponent textContent={textContent.DownloadSection} lang={lang} download={download} />

      <AdvancedToolsSection textContent={textContent.AdvancedToolsSection} />

      <ReviewsSection
        textContent={textContent.ReviewSection}
        bgColor="linear-gradient(180deg, #FFFFFF 0%, #F4F8FF 100%)"
      />

      <FAQSection textContent={textContent.FaqSection} needsH3={false} />

      <Footer textContent={footerLang} lang={lang} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const download = await downloadDriveLinks();
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/drive-free-cloud-storage.json`);
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
