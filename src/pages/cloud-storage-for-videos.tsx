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
import FutureCtaSection from '@/components/shared/FutureCtaSection';
import FAQSection from '@/components/shared/sections/FaqSection';
import FeatureSectionV2 from '@/components/private-cloud-storage-for-videos/FeatureSectionV2';

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
            <div className="flex flex-col gap-8  px-6">
              <h1 className="text-5xl font-semibold text-white">{textContent.HeroSection.title}</h1>
              <div className="mx-auto flex flex-col gap-2 lg:mx-0">
                {textContent.HeroSection.features?.map((feat) => (
                  <div key={feat} className="flex flex-row gap-2">
                    <Check className="pt-2 text-green-1 lg:pt-0" weight="bold" size={24} />
                    <p className="text-left text-lg font-semibold text-white ">{feat}</p>
                  </div>
                ))}
              </div>
              <p className="text-xl font-normal text-white">{textContent.HeroSection.subtitle} </p>
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

      <FutureCtaSection
        textContent={textContent.cta}
        customDescription={
          <>
            <p className="text-3xl font-semibold xl:text-4xl">{textContent.cta.title}</p>
            <p className="text-xl font-normal text-gray-55">{textContent.cta.subtitle}</p>
          </>
        }
        url="/pricing"
      />

      <FeatureSectionV2 textContent={textContent.FeaturesSectionV2} />

      <FutureCtaSection
        textContent={textContent.cta}
        customDescription={
          <>
            <p className="text-3xl font-semibold xl:text-4xl">{textContent.cta2.title}</p>
            <p className="text-xl font-normal text-gray-55">{textContent.cta2.subtitle}</p>
          </>
        }
        url="/pricing"
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
