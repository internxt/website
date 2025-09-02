import Script from 'next/script';
import FeatureSection, { FeatureCard } from '@/components/shared/FeatureSection';
import Footer from '@/components/layout/footers/Footer';
import Navbar from '@/components/layout/navbars/Navbar';
import Layout from '@/components/layout/Layout';
import cookies from '@/lib/cookies';
import { sm_faq, sm_breadcrumb } from '@/components/utils/schema-markup-generator';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { GetServerSidePropsContext } from 'next';

import { CloudStorageBackupSolutionsText } from '@/assets/types/cloud-storage-backup-solutions';
import { BannersText } from '@/assets/types/components/banners';
import FeaturesSection from '@/components/cloud-storage-backup-solutions/FeaturesSection';
import WhatWeDo from '@/components/shared/WhatWeDo';
import CtaSection from '@/components/shared/CtaSection';
import FAQSection from '@/components/shared/sections/FaqSection';
import AnimatedHeroSection from '@/components/shared/HeroSections/AnimatedHeroSection';
import { Check } from '@phosphor-icons/react';
import Link from 'next/link';

interface PrivacyProps {
  metatagsDescriptions: MetatagsDescription[];
  textContent: CloudStorageBackupSolutionsText;
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
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'internxt-cloud-storage-backup-solutions');
  const CTA_URL = `/pricing`;
  const cardsData: FeatureCard[] = [
    {
      title: textContent.FeatureSection.cards.element1.title,
      description: textContent.FeatureSection.cards.element1.description,
      image: '/images/cloud-storage-backup-solutions/internxt_increased_protection.webp',
    },
    {
      title: textContent.FeatureSection.cards.element3.title,
      description: textContent.FeatureSection.cards.element3.description,
      image: '/images/cloud-storage-backup-solutions/internxt_ease_of_use.webp',
    },
    {
      title: textContent.FeatureSection.cards.element2.title,
      description: textContent.FeatureSection.cards.element2.description,
      image: '/images/cloud-storage-backup-solutions/internxt_recover_your_files.webp',
    },
    {
      title: textContent.FeatureSection.cards.element4.title,
      description: textContent.FeatureSection.cards.element4.description,
      image: '/images/cloud-storage-backup-solutions/internxt_cross_platforms.webp',
    },
  ];
  const products = [
    {
      imageUrl: '/images/cloud-storage-backup-solutions/internxt_drive.webp',
      animationDirection: 'left',
      redirect: '/drive',
      textContent: textContent.WhatWeDo.square1,
    },
    {
      imageUrl: '/images/cloud-storage-backup-solutions/internxt_s3.webp',
      animationDirection: 'left',
      redirect: '/cloud-object-storage',
      textContent: textContent.WhatWeDo.square2,
    },
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

        <AnimatedHeroSection
          textComponent={
            <>
              <div className="flex flex-col px-6 py-10 text-3xl font-medium lg:text-5xl">
                <h1 className=" text-3xl font-semibold leading-tight text-white lg:text-5xl">
                  {textContent.HeroSection.TitleAndOnePlan.title.textBeforeBlueText}
                  <span className="text-primary"> {textContent.HeroSection.TitleAndOnePlan.title.blueText} </span>
                  {textContent.HeroSection.TitleAndOnePlan.title.textAfterBlueText}
                </h1>

                <p className="pt-4 text-xl text-white">
                  <span className=" text-white">{textContent.HeroSection.TitleAndOnePlan.description}</span>
                </p>
              </div>
              <div className="mx-auto flex flex-col lg:mx-0">
                {textContent.HeroSection.TitleAndOnePlan.features.map((feat) => (
                  <div key={feat} className="flex flex-row gap-2">
                    <Check className="pt-2 text-green-1 lg:pt-0" weight="light" size={24} />
                    <p className="text-left text-lg font-semibold text-white ">{feat}</p>
                  </div>
                ))}
              </div>
              <Link
                href={'/pricing'}
                className={`z-10 mb-10 flex w-max justify-center rounded-lg bg-primary px-6 py-3 text-base font-medium text-white hover:bg-primary-dark lg:text-xl`}
              >
                {textContent.HeroSection.TitleAndOnePlan.claimDeal}
              </Link>
            </>
          }
          height="h-min"
        />

        <FeatureSection
          title={textContent.FeatureSection.title}
          subtitle={textContent.FeatureSection.titleLine2}
          description={textContent.FeatureSection.description}
          ctaText={textContent.FeatureSection.cta}
          ctaLink="/signup"
          cards={cardsData}
        />
        <CtaSection
          textContent={textContent.CtaSection1}
          url={CTA_URL}
          customDescription={<p className="w-full text-xl font-normal">{textContent.CtaSection1.description}</p>}
        />

        <FeaturesSection textContent={textContent.FeaturesSection} />

        <CtaSection
          textContent={textContent.CtaSection2}
          url={CTA_URL}
          customDescription={<p className="w-full text-xl font-normal">{textContent.CtaSection2.description}</p>}
        />

        <WhatWeDo textContent={textContent.WhatWeDo} lang={lang} products={products} />

        <FAQSection textContent={textContent.FaqSection} />

        <Footer textContent={footerLang} lang={lang} />
      </Layout>
    </>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/cloud-storage-backup-solutions.json`);
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
