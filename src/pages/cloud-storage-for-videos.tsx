import Footer from '@/components/layout/footers/Footer';
import Navbar from '@/components/layout/navbars/Navbar';
import Layout from '@/components/layout/Layout';
import cookies from '@/lib/cookies';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { GetServerSidePropsContext } from 'next';
import { BannersText } from '@/assets/types/components/banners';
import AnimatedHeroSection from '@/components/shared/HeroSections/AnimatedHeroSection';
import Link from 'next/link';
import { Check } from '@phosphor-icons/react';
import { PrivateCloudStorageForVideoText } from '@/assets/types/private-cloud-storage-for-videos';
import FeatureSection from '@/components/private-cloud-storage-for-videos/FeatureSection';
import FAQSection from '@/components/shared/sections/FaqSection';
import FloatingCtaSectionv2 from '@/components/shared/FloatingCtaSectionV2';
import HowItWorksSection from '@/components/private-cloud-storage-for-videos/HowItWorksSection';
import SecureAndManageSection from '@/components/private-cloud-storage-for-videos/Secure&Manage';
import HorizontalScrollableSection from '@/components/shared/HorizontalScrollableSection';
import HorizontalScrollableSectionWithPhotos from '@/components/shared/HorizontalScrollableSectionWithPhotos';

interface CloudStorageForVideosProps {
  metatagsDescriptions: MetatagsDescription[];
  textContent: PrivateCloudStorageForVideoText;
  navbarLang: NavigationBarText;
  footerLang: FooterText;
  lang: string;
  bannerJson: BannersText;
}

const CloudStorageForVideos = ({
  metatagsDescriptions,
  textContent,
  navbarLang,
  footerLang,
  lang,
}: CloudStorageForVideosProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'internxt-private-cloud-storage-solutions');

  return (
    <Layout
      title={metatags[0].title}
      description={metatags[0].description}
      segmentName="Private Cloud Storage Solutions"
      lang={lang}
    >
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

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
              <p className="w-[326px] text-base font-normal text-white lg:text-xl">
                {textContent.HeroSection.subtitle}{' '}
              </p>
              <Link
                href={'#priceTable'}
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
        textContent={textContent.cta}
        customText={
          <div className="w-[302px] items-center justify-center  text-center lg:w-[832px]">
            <p className="text-2xl font-semibold leading-tight xl:text-4xl">{textContent.cta.title}</p>
            <p className="text-base font-normal text-gray-55 lg:text-xl">{textContent.cta.subtitle}</p>
          </div>
        }
        url="/pricing"
        bgGradientColor="linear-gradient(180deg, #FFFFFF 0%, #F4F8FF 100%)"
        bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
        containerDetails="shadow-lg backdrop-blur-[55px]"
      />

      <HowItWorksSection textContent={textContent.HowToChooseSection} />

      <SecureAndManageSection textContent={textContent.SecureAndManage} />

      <HorizontalScrollableSectionWithPhotos textContent={textContent.FeaturesSectionV2} />

      <FloatingCtaSectionv2
        textContent={textContent.cta}
        customText={
          <div className="w-[302px] items-center justify-center  text-center lg:w-[832px]">
            <p className="text-2xl font-semibold leading-tight xl:text-4xl">{textContent.cta2.title}</p>
            <p className="text-base font-normal text-gray-55 lg:text-xl">{textContent.cta2.subtitle}</p>
          </div>
        }
        url="/pricing"
        bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
        containerDetails="shadow-lg backdrop-blur-[55px]"
      />

      <FAQSection textContent={textContent.FaqSection} />

      <Footer textContent={footerLang} lang={lang} />
    </Layout>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/en/private-cloud-storage-for-videos.json`);
  const bannerJson = require(`@/assets/lang/${lang}/banners.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      metatagsDescriptions,
      textContent,
      bannerJson,
      navbarLang,
      footerLang,
    },
  };
}

export default CloudStorageForVideos;
