import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { CloudStorageForDocumentsText } from '@/assets/types/cloud-storage-for-documents';
import { GetServerSidePropsContext } from 'next';
import Footer from '@/components/layout/footers/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import FAQSection from '@/components/shared/sections/FaqSection';
import FloatingCtaSectionv2 from '@/components/shared/FloatingCtaSectionV2';
import HorizontalScrollableSection from '@/components/shared/HorizontalScrollableSection';
import FeatureSection from '@/components/cloud-storage-for-documents/FeatureSection';
import AnimatedHeroSection from '@/components/shared/HeroSections/AnimatedHeroSection';
import Link from 'next/link';
import { Check } from '@phosphor-icons/react';
import SecureAndManageSection from '@/components/cloud-storage-for-documents/SecureAndManageSection';
import CoreFeaturesSection from '@/components/cloud-storage-for-documents/CoreFeaturesSection';




interface CloudStorageForDocumentsProps {
  metatagsDescription: MetatagsDescription[];
  navbarText: NavigationBarText;
  textContent: CloudStorageForDocumentsText;
  footerText: FooterText;
  locale: GetServerSidePropsContext['locale'];
}


const CloudStorageForDocuments = ({
  metatagsDescription,
  navbarText,
  textContent,
  footerText,
  locale,
}: CloudStorageForDocumentsProps): JSX.Element => {
  const metatags = metatagsDescription.filter((metatag) => metatag.id === 'cloud-storage-for-documents')[0];

  const lang = locale as string;

  return (
      <Layout title={metatags.title} description={metatags.description}>
      <Navbar cta={['default']} lang={lang} textContent={navbarText} fixed />
      <AnimatedHeroSection
              textComponent={
                <>
                  <div className="flex flex-col items-center gap-8 px-6 lg:items-start">
                    <h1 className="w-[323px] text-30 font-semibold text-white lg:w-full lg:text-5xl">
                      {textContent.HeroSection.title}
                    </h1>
                    <div className="flex w-[326px] flex-col gap-2 lg:mx-0 lg:w-full">
                      {textContent.HeroSection.features?.map((feat) => (
                        <div key={feat} className="flex flex-row gap-2">
                          <Check className="hidden pt-2 text-green-1 lg:flex lg:pt-0" weight="bold" size={24} />
                          <Check className="flex text-green-1 lg:hidden lg:pt-0" weight="bold" size={20} />
                          <p className="text-left text-sm font-medium text-white lg:text-lg lg:font-semibold ">{feat}</p>
                        </div>
                      ))}
                    </div>
                    <p className="w-[326px] text-base font-normal text-white lg:w-full lg:text-xl">
                      {textContent.HeroSection.subtitle}{' '}
                    </p>
                    <Link
                      href={'/pricing'}
                      className={`z-10 flex w-max justify-center rounded-lg bg-primary px-6 py-3 text-xl font-medium text-white hover:bg-primary-dark`}
                    >
                      {textContent.HeroSection.cta}
                    </Link>
                  </div>
                </>
              }
              width="w-[580px] "
              bgGradient="bg-gradient-to-t from-[#001D6C] to-[#121923]"
            /> 

     <FeatureSection textContent={textContent.FeaturesSection} />

      <FloatingCtaSectionv2
        textContent={textContent.CtaSection}
        customText={
          <div className="w-[302px] items-center justify-center  text-center lg:w-full flex flex-col gap-4">
            <h2 className="text-xl font-semibold leading-tight xl:text-4xl">{textContent.CtaSection.title}</h2>
            <p className="text-base font-normal text-gray-55 lg:text-xl">{textContent.CtaSection.description}</p>
          </div>
        }
        url="/pricing"
        bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
        containerDetails="shadow-lg backdrop-blur-[55px]"
        bgPadding="lg:py-20"
      />

      <CoreFeaturesSection textContent={textContent.CoreFeatures} />
      
      <SecureAndManageSection textContent={textContent.SecureAndManage} />

      <HorizontalScrollableSection
        textContent={textContent.FeaturesInternxtSection}
        bgGradient="linear-gradient(180deg, #F4F8FF 0%, #FFFFFF 100%)"
        needsH2
        needsH3
        needsDivider={false}
      />

      <FloatingCtaSectionv2
        textContent={textContent.CtaSectionV2}
        customText={
          <div className="w-[302px] items-center justify-center  text-center lg:w-full gap-4 fle flex-col">
            <h2 className="text-xl font-semibold leading-tight xl:text-4xl">{textContent.CtaSectionV2.title}</h2>
            <p className="text-base font-normal text-gray-55 lg:text-xl">{textContent.CtaSectionV2.description}</p>
          </div>
        }
        url="/pricing"
        bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
        containerDetails="shadow-lg backdrop-blur-[55px]"
        bgPadding="lg:py-20"
      />
     
      <FAQSection
        textContent={{
          title: textContent.SemanticAccordion.title,
          faq: textContent.SemanticAccordion.items,
        }}
        needsH3={false}
        needsSpecialH3
        needsH2
      />


      <Footer textContent={footerText} lang={lang}/>
    </Layout>
  );
}

export function getServerSideProps(ctx: GetServerSidePropsContext) {
  const locale = ctx.locale as string;

  const metatagsDescription = require(`@/assets/lang/${locale}/metatags-descriptions.json`);
  const navbarText = require(`@/assets/lang/${locale}/navbar.json`);
  const textContent = require(`@/assets/lang/${locale}/cloud-storage-for-documents.json`);
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

export default CloudStorageForDocuments;