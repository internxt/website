import { CloudObjectStorageText } from '@/assets/types/cloud-object-storage';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { HeroSection } from '@/components/cloud-object-storage/HeroSection';
import { HowMuchYouNeedSection } from '@/components/cloud-object-storage/HowMuchYouNeedSection';
import { PredictablePricingSection } from '@/components/cloud-object-storage/PredictablePricingSection';
import { CloudObjectStoragePriceCardSection } from '@/components/cloud-object-storage/PriceCardSection';
import Footer from '@/components/layout/footers/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import FloatingCtaSectionv2 from '@/components/shared/FloatingCtaSectionV2';
import HorizontalScrollableSection from '@/components/shared/HorizontalScrollableSection';
import FAQSection from '@/components/shared/sections/FaqSection';
import { GetServerSidePropsContext } from 'next';

interface FreeCloudObjectStorageProps {
  metatagsDescription: MetatagsDescription[];
  navbarText: NavigationBarText;
  textContent: CloudObjectStorageText;
  footerText: FooterText;
  locale: GetServerSidePropsContext['locale'];
}

const FreeCloudObjectStorage = ({
  metatagsDescription,
  navbarText,
  textContent,
  footerText,
  locale,
}: FreeCloudObjectStorageProps): JSX.Element => {
  const metatags = metatagsDescription.filter((metatag) => metatag.id === 'cloud-object-storage')[0];

  const lang = locale as string;

  const scrollToTop = () => {
    document.querySelector('#contactSales')?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };
  return (
    <Layout title={metatags.title} description={metatags.description}>
      <Navbar cta={['default']} lang={lang} textContent={navbarText} fixed />

      <HeroSection textContent={textContent.HeroSection} />

      <CloudObjectStoragePriceCardSection textContent={textContent.PriceCardSection} />

      <PredictablePricingSection textContent={textContent.PredictablePricingSection} />

      <HowMuchYouNeedSection textContent={textContent.HowMuchYouNeedSection} />

      <FloatingCtaSectionv2
        textContent={textContent.CtaSection}
        url={'#storageSection'}
        customText={
          <div className="flex flex-col items-center gap-4 px-4 text-center lg:px-0">
            <h2 className="text-2xl font-semibold leading-tight text-gray-95 lg:text-4xl">
              {textContent.CtaSection.title}
            </h2>
            <h2 className="text-base font-normal leading-tight text-gray-55 lg:w-[673px] lg:text-center lg:text-xl">
              {textContent.CtaSection.description}
            </h2>
          </div>
        }
        bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
        containerDetails="backdrop-blur-[55px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)]"
        bgPadding="bg-neutral-17 px-10"
      />

      <HorizontalScrollableSection
        textContent={textContent.WhyChooseInternxtSection}
        bgGradient="linear-gradient(180deg, #F4F8FF 0%, #FFFFFF 100%)"
        needsH2
        needsH3
        needsDivider={false}
      />

      <FloatingCtaSectionv2
        textContent={textContent.CtaSectionV2}
        url={'#storageSection'}
        customText={
          <div className="flex flex-col items-center gap-4 px-4 text-center lg:px-0">
            <h2 className="text-2xl font-semibold leading-tight text-gray-95 lg:text-4xl">
              {textContent.CtaSectionV2.title}
            </h2>
            <p className="text-base font-normal leading-tight text-gray-55 lg:w-[663px] lg:text-center lg:text-xl">
              {textContent.CtaSectionV2.description}
            </p>
          </div>
        }
        bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
        containerDetails="backdrop-blur-[55px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)]"
        bgPadding="px-10"
      />

      <FAQSection textContent={textContent.FaqSection} needsH3={false} />

      <Footer textContent={footerText} lang={lang} />
    </Layout>
  );
};

export function getServerSideProps(ctx: GetServerSidePropsContext) {
  const locale = ctx.locale as string;

  const metatagsDescription = require(`@/assets/lang/${locale}/metatags-descriptions.json`);
  const navbarText = require(`@/assets/lang/${locale}/navbar.json`);
  const textContent = require(`@/assets/lang/${locale}/free-cloud-object-storage.json`);
  const footerText = require(`@/assets/lang/${locale}/footer.json`);

  return {
    props: {
      metatagsDescription,
      navbarText,
      textContent,
      footerText,
      locale,
    },
  };
}

export default FreeCloudObjectStorage;
