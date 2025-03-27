import Script from 'next/script';

import HeroSection from '@/components/private-cloud-storage-solutions/HeroSection';

import Footer from '@/components/layout/footers/Footer';
import Navbar from '@/components/layout/navbars/Navbar';
import Layout from '@/components/layout/Layout';
import cookies from '@/lib/cookies';
import { sm_faq, sm_breadcrumb } from '@/components/utils/schema-markup-generator';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { GetServerSidePropsContext } from 'next';

import { PrivateCloudStorageSolutionsText } from '@/assets/types/private-cloud-storage-solutions';
import { BannersText } from '@/assets/types/components/banners';
import FeaturesSection from '@/components/private-cloud-storage-solutions/FeaturesSection';
import WhatWeDo from '@/components/shared/WhatWeDo';
import CtaSection from '@/components/shared/CtaSection';
import FAQSection from '@/components/shared/sections/FaqSection';
import FeatureSection, { FeatureCard } from '@/components/shared/FeatureSection';

interface PrivacyProps {
  metatagsDescriptions: MetatagsDescription[];
  textContent: PrivateCloudStorageSolutionsText;
  navbarLang: NavigationBarText;
  footerLang: FooterText;
  lang: string;
  bannerJson: BannersText;
}

const PrivateCloudStorageSolutions = ({
  metatagsDescriptions,
  textContent,
  navbarLang,
  footerLang,
  lang,
}: PrivacyProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'internxt-private-cloud-storage-solutions');
  const locale = lang as string;
  const CTA_URL = `/pricing`;
  const products = [
    {
      imageUrl: '/images/privacy-cloud-storage-solutions/internxt_drive.webp',
      animationDirection: 'left',
      redirect: '/drive',
      textContent: textContent.WhatWeDo.square1,
    },
    {
      imageUrl: '/images/privacy-cloud-storage-solutions/internxt_for_business-1.webp',
      animationDirection: 'right',
      redirect: '/business',
      textContent: textContent.WhatWeDo.square2,
      imagePosition: 'right'
    },
    {
      imageUrl: '/images/privacy-cloud-storage-solutions/internxt_s3.webp',
      animationDirection: 'left',
      redirect: '/cloud-object-storage',
      textContent: textContent.WhatWeDo.square3,
    },
  ];
  const cardsData: FeatureCard[] = [
    {
      title: textContent.FeatureSection.cards.element1.title,
      description: textContent.FeatureSection.cards.element1.description,
      image: '/images/privacy-cloud-storage-solutions/internxt_increased_privacy_for_data.webp',
    },
    {
      title: textContent.FeatureSection.cards.element2.title,
      description: textContent.FeatureSection.cards.element2.description,
      image: '/images/privacy-cloud-storage-solutions/internxt_corporate_spying.webp',
    },
    {
      title: textContent.FeatureSection.cards.element4.title,
      description: textContent.FeatureSection.cards.element4.description,
      image: '/images/privacy-cloud-storage-solutions/internxt_security_control.webp',
    },
    {
      title: textContent.FeatureSection.cards.element3.title,
      description: textContent.FeatureSection.cards.element3.description,
      image: '/images/privacy-cloud-storage-solutions/internxt_european_laws.webp',
    },
  ];
  return (
    <>
      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_faq(textContent.FaqSection.faq)}
      </Script>

      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_breadcrumb('Private Cloud Storage Solutions', 'privacy')}
      </Script>
      <Layout
        title={metatags[0].title}
        description={metatags[0].description}
        segmentName="Private Cloud Storage Solutions"
        lang={lang}
      >
        <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

        <HeroSection textContent={textContent.HeroSection} lang={locale} />

        <FeatureSection
          title= {textContent.FeatureSection.title} 
          subtitle={textContent.FeatureSection.titleLine2}
          description={textContent.FeatureSection.description}
          ctaText={textContent.FeatureSection.cta}
          ctaLink={CTA_URL}
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

        <WhatWeDo textContent={textContent.WhatWeDo} lang={lang} products={products}  />

        <FAQSection textContent={textContent.FaqSection} />

        <Footer textContent={footerLang} lang={lang} />
      </Layout>
    </>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/private-cloud-storage-solutions.json`);
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

export default PrivateCloudStorageSolutions;
