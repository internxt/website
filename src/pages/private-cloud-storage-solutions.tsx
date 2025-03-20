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
import WhatWeDo from '@/components/private-cloud-storage-solutions/WhatWeDo';
import { Detective, Gavel, LockKey, ShieldPlus } from '@phosphor-icons/react';
import CtaSection from '@/components/shared/CtaSection';
import FAQSection from '@/components/shared/sections/FaqSection';
import FeatureSection from '@/components/private-cloud-storage-solutions/FeatureSection';


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
  bannerJson,
  navbarLang,
  footerLang,
  lang,
}: PrivacyProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'internxt-private-cloud-storage-solutions');
  const locale = lang as string;
  const CTA_URL = `/pricing`;

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


        <FeatureSection textContent={textContent.FeatureSection} />

        {/* <FeatureSectionReversed textContent={textContent.FeatureSection3} IconComponent={Gavel} />

        <FeatureSection textContent={textContent.FeatureSection4} IconComponent={ShieldPlus} />

        <FeatureSectionReversed textContent={textContent.FeatureSection2} IconComponent={Detective} /> */}

        <CtaSection textContent={textContent.CtaSection1} url={CTA_URL} customDescription={<p className="w-full text-xl font-normal">{textContent.CtaSection1.description}</p>} />

        <FeaturesSection textContent={textContent.FeaturesSection} />

        <CtaSection textContent={textContent.CtaSection2} url={CTA_URL} customDescription={<p className="w-full text-xl font-normal">{textContent.CtaSection2.description}</p>} />

        <WhatWeDo textContent={textContent.WhatWeDo} lang={lang} />

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
