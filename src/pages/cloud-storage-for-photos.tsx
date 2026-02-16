import Script from 'next/script';

import HeroSection from '@/components/cloud-storage-for-photos/HeroSection';
import FeatureSection, { FeatureCard } from '@/components/shared/FeatureSection';
import Footer from '@/components/layout/footers/Footer';
import Navbar from '@/components/layout/navbars/Navbar';
import Layout from '@/components/layout/Layout';
import cookies from '@/lib/cookies';
import { sm_faq, sm_breadcrumb } from '@/components/utils/schema-markup-generator';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { GetServerSidePropsContext } from 'next';
import { CloudStorageForPhotosText } from '@/assets/types/cloud-storage-for-photos';
import { BannersText } from '@/assets/types/components/banners';
import FeaturesSlider from '@/components/shared/FeaturesSlider';
import CtaSection from '@/components/shared/CtaSection';
import FAQSection from '@/components/shared/sections/FaqSection';
import ExplanationSection from '@/components/cloud-storage-for-photos/ExplanationSection';
import { ClockClockwise, CloudArrowUp, Eye, Images, Key, ShieldPlus } from '@phosphor-icons/react';

interface PrivacyProps {
  metatagsDescriptions: MetatagsDescription[];
  textContent: CloudStorageForPhotosText;
  navbarLang: NavigationBarText;
  footerLang: FooterText;
  lang: string;
  bannerJson: BannersText;
}

const CloudStorageBackupSolutions = ({
  metatagsDescriptions,
  textContent,
  navbarLang,
  footerLang,
  lang,
}: PrivacyProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'internxt-cloud-storage-for-photos');
  const locale = lang as string;
  const CTA_URL = `/pricing`;
  const cardsData: FeatureCard[] = [
    {
      title: textContent.FeatureSection.cards.element2.title,
      description: textContent.FeatureSection.cards.element2.description,
      image: '/images/cloud-storage-for-photos/password_protection.webp',
    },
    {
      title: textContent.FeatureSection.cards.element1.title,
      description: textContent.FeatureSection.cards.element1.description,
      image: '/images/cloud-storage-for-photos/shared_links.webp',
    },
    {
      title: textContent.FeatureSection.cards.element3.title,
      description: textContent.FeatureSection.cards.element3.description,
      image: '/images/cloud-storage-for-photos/share_folders.webp',
    },
  ];
  const cardInfo = [
    { icon: CloudArrowUp, ...textContent.FeaturesSection.info[0] },
    { icon: Images, ...textContent.FeaturesSection.info[1] },
    { icon: ClockClockwise, ...textContent.FeaturesSection.info[2] },
    { icon: Key, ...textContent.FeaturesSection.info[3] },
    { icon: ShieldPlus, ...textContent.FeaturesSection.info[4] },
    { icon: Eye, ...textContent.FeaturesSection.info[5] },
  ];

  return (
    <>
      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_faq(textContent.FaqSection.faq)}
      </Script>

      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_breadcrumb('Cloud Storage Backup Solutions', 'privacy')}
      </Script>
      <Layout
        title={metatags[0].title}
        description={metatags[0].description}
        segmentName="Cloud Storage Backup Solutions"
        lang={lang}
      >
        <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

        <HeroSection textContent={textContent.HeroSection} lang={locale} />

        <FeatureSection
          title={textContent.FeatureSection.title}
          subtitle={textContent.FeatureSection.titleLine2}
          description={textContent.FeatureSection.description}
          ctaText={textContent.FeatureSection.cta}
          ctaLink="/pricing"
          cards={cardsData}
        />
        <CtaSection
          textContent={textContent.CtaSection1}
          url={CTA_URL}
          customDescription={<p className="w-full text-xl font-normal">{textContent.CtaSection1.description}</p>}
        />

        <ExplanationSection
          textContent={textContent.ExplanationSection}
          ctaText={textContent.ExplanationSection.cta}
          ctaLink={CTA_URL}
        ></ExplanationSection>

        <FeaturesSlider
          textContent={textContent.FeaturesSection}
          cardInfo={cardInfo}
          backgroundClass="bg-white lg:bg-gray-1"
        />

        <FAQSection textContent={textContent.FaqSection} needsH3={false} />

        <Footer textContent={footerLang} lang={lang} />
      </Layout>
    </>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/cloud-storage-for-photos.json`);
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

export default CloudStorageBackupSolutions;
