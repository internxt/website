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
        {/* <HeroSection
          TextComponent={
            
            <div className="relative mx-auto flex w-full max-w-screen-xl flex-col items-center justify-between lg:flex-row lg:items-center ">
              <div className="flex w-full flex-col items-center space-y-8 lg:max-w-[524px] lg:items-start">
                <div className="flex flex-col items-center space-y-4 text-center lg:items-start lg:text-start">
                  <Header>
                    {textContent.HeroSection.title.line1}
                    <span> {textContent.HeroSection.title.line2}</span>
                  </Header>
                </div>
                <h3 className="text-center text-xl text-gray-80 lg:text-left">{textContent.HeroSection.description}</h3>
                <div className="flex flex-row justify-center pb-4  pt-6 lg:justify-start">
                  <p className="flex flex-row items-end text-gray-100">
                    {textContent.HeroSection.startFrom.normal1}{' '}
                    <span className="flex w-max flex-row items-start justify-start text-4xl font-bold text-gray-100">
                      <abbr className="mt-0.5 text-base ">{currency}</abbr>
                      {textContent.HeroSection.startFrom.price}
                    </span>
                    {textContent.HeroSection.startFrom.normal2}
                  </p>
                </div>
                <Link
                  className="flex w-max rounded-lg bg-primary px-5 py-3 text-xl font-medium text-white hover:bg-primary-dark"
                  href={'/pricing'}
                >
                  {textContent.HeroSection.cta}
                </Link>
                <div className="flex flex-row items-center justify-center space-x-3 pt-10 text-gray-100 lg:justify-start">
                  <ShieldCheck size={24} weight="fill" className="text-primary" />
                  <p className="whitespace-nowrap text-gray-100 lg:text-lg">{textContent.HeroSection.guarantee}</p>
                </div>
              </div>
              <div className=" hidden min-h-[700px] w-full justify-center pt-24 lg:flex">
                <Animation />
              </div>
            </div>
          }
        /> */}

        <WhySwitchSection textContent={textContent.WhySwitchSection} bannerText={bannerJson.SignUpVPNBanner} />

        {/* <FeatureSection textContent={textContent.FeatureSection} />

        <FeatureSectionReversed textContent={textContent.FeatureSection} />

        <FeatureSection textContent={textContent.FeatureSection} />

        <FeatureSectionReversed textContent={textContent.FeatureSection} /> */}

        <FeatureSection textContent={textContent.FeatureSection1} IconComponent={LockKey} />

        <FeatureSectionReversed textContent={textContent.FeatureSection2} IconComponent={Detective} />

        <FeatureSection textContent={textContent.FeatureSection3} IconComponent={Gavel} />

        <FeatureSectionReversed textContent={textContent.FeatureSection4} IconComponent={ShieldPlus} />

        <CtaSection textContent={textContent.CtaSection} />

        <FeaturesSection textContent={textContent.FeaturesSection} />

        <CtaSection textContent={textContent.CtaSection} />

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
