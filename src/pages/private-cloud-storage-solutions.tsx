import Script from 'next/script';

//import HeroSection from '@/components/shared/components/HeroSection';
import HeroSection from '@/components/private-cloud-storage-solutions/HeroSection';

import FAQSection from '@/components/private-cloud-storage-solutions/FAQSection';
import Footer from '@/components/layout/footers/Footer';
import Navbar from '@/components/layout/navbars/Navbar';
import Layout from '@/components/layout/Layout';
import cookies from '@/lib/cookies';
import { currencyService } from '@/components/services/currency.service';
import { sm_faq, sm_breadcrumb } from '@/components/utils/schema-markup-generator';
import CtaSection from '@/components/private-cloud-storage-solutions/CtaSection';
import FeatureSection from '@/components/private-cloud-storage-solutions/FeatureSection';
import FeatureSectionReversed from '@/components/private-cloud-storage-solutions/FeatureSectionReversed';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { GetServerSidePropsContext } from 'next';
import { getImage } from '@/lib/getImage';
import Header from '@/components/shared/Header';
import Link from 'next/link';
import Image from 'next/image';
import { PrivateCloudStorageSolutionsText } from '@/assets/types/private-cloud-storage-solutions';
import { BannersText } from '@/assets/types/components/banners';
import { WhySwitchSection } from '@/components/private-cloud-storage-solutions/WhySwitchSection';
import FeaturesSection from '@/components/private-cloud-storage-solutions/FeaturesSection';
import WhatWeDo from '@/components/private-cloud-storage-solutions/WhatWeDo';
import { Detective, Gavel, LockKey, ShieldCheck, ShieldPlus, Trophy } from '@phosphor-icons/react';
import { Lock } from '@phosphor-icons/react/dist/ssr';
import { useEffect, useState } from 'react';
import Animation from '@/components/private-cloud-storage-solutions/components/Animation';

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
  const langForLink = lang === 'en' ? '' : lang;
  const locale = lang as string;
  const CTA_URL = `https://internxt.com/${langForLink}/pricing`;
  const [currency, setCurrency] = useState<string>('€');
  useEffect(() => {
    currencyService
      .filterCurrencyByCountry()
      .then((currency) => {
        setCurrency(currency.currency);
      })
      .catch(() => {
        // NO OP
      });
  }, []);
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

        <WhySwitchSection textContent={textContent.WhySwitchSection} bannerText={bannerJson.SignUpVPNBanner} />

        <FeatureSection textContent={textContent.FeatureSection1} IconComponent={LockKey} />

        <FeatureSectionReversed textContent={textContent.FeatureSection2} IconComponent={Detective} />

        <FeatureSection textContent={textContent.FeatureSection3} IconComponent={Gavel} />

        <FeatureSectionReversed textContent={textContent.FeatureSection4} IconComponent={ShieldPlus} />

        <CtaSection textContent={textContent.CtaSection1} />
        {/* <WhySwitchSection textContent={textContent.FeaturesSection} bannerText={bannerJson.SignUpVPNBanner} /> */}

        <FeaturesSection textContent={textContent.FeaturesSection} />

        <CtaSection textContent={textContent.CtaSection2} />

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
