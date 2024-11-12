import Script from 'next/script';

import HeroSection from '@/components/drive/HeroSection';
import FeaturesSection from '@/components/drive/FeaturesSection';
import FeatureSection from '@/components/drive/FeatureSection';
import FAQSection from '@/components/shared/sections/FaqSection';
import Footer from '@/components/layout/footers/Footer';
import Navbar from '@/components/layout/navbars/Navbar';

import FileParallaxSection from '@/components/home/FileParallaxSection';
import CtaSection from '@/components/drive/CtaSection';
import Layout from '@/components/layout/Layout';
import cookies from '@/lib/cookies';
import { downloadDriveLinks } from '@/lib/get-download-url';

import { sm_faq, sm_breadcrumb } from '@/components/utils/schema-markup-generator';
import { CliCard } from '@/components/drive/CliCard';
import { DriveText } from '@/assets/types/drive';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { TextAndCardsGroupColumnSection } from '@/components/shared/components/TextAndCardsGroupColumnSection';
import { CaretRight, Key, LockKey, Password, ShieldCheck } from '@phosphor-icons/react';
import Link from 'next/link';
import ProductsNavigation from '@/components/shared/components/ProductsNavigation';

interface DriveProps {
  textContent: DriveText;
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  footerLang: FooterText;
  lang: string;
  download: {
    Android: string;
    iPad: string;
    iPhone: string;
    Windows: any;
    MacOS: any;
    UNIX: any;
    Linux: any;
    all: string;
  };
}

const Drive = ({
  metatagsDescriptions,
  download,
  textContent,
  navbarLang,
  footerLang,
  lang,
}: DriveProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'drive');

  const Cards = [
    {
      icon: Password,
      title: textContent.FeaturesSection.section7.card1.title,
      description: textContent.FeaturesSection.section7.card1.subtitle,
    },
    {
      icon: Key,
      title: textContent.FeaturesSection.section7.card2.title,
      description: textContent.FeaturesSection.section7.card2.subtitle,
    },
    {
      icon: ShieldCheck,
      title: textContent.FeaturesSection.section7.card3.title,
      description: textContent.FeaturesSection.section7.card3.subtitle,
    },
    {
      icon: LockKey,
      title: textContent.FeaturesSection.section7.card4.title,
      description: textContent.FeaturesSection.section7.card4.subtitle,
    },
  ];

  return (
    <>
      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_faq(textContent.FaqSection.faq)}
      </Script>

      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_breadcrumb('Drive', 'drive')}
      </Script>

      <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Drive" lang={lang}>
        <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

        <HeroSection textContent={textContent.HeroSection} lang={lang} download={download} />

        <div className="flex items-center justify-center px-2 pb-20">
          <CliCard textContent={textContent.CliCard} />
        </div>

        <FeaturesSection textContent={textContent.FeaturesSection} lang={lang} download={download} />

        <FileParallaxSection />

        <TextAndCardsGroupColumnSection
          TextComponent={
            <div className="flex max-w-3xl flex-col items-center justify-center space-y-6 text-center text-black">
              <h3 className="text-center text-3xl font-semibold text-gray-100 lg:text-5xl">
                {textContent.FeaturesSection.section7.title.line1}
                <br />
                {textContent.FeaturesSection.section7.title.line2}
              </h3>

              <p className="mb-6 text-xl text-gray-80">
                {textContent.FeaturesSection.section7.subtitle.line1} <br className="hidden sm:flex" />
                {textContent.FeaturesSection.section7.subtitle.line2} <br className="hidden sm:flex" />
              </p>

              <Link
                href={'/privacy'}
                target="_blank"
                className="flex cursor-pointer flex-row items-center justify-center space-x-1 text-lg font-semibold text-primary hover:underline"
              >
                <span>{textContent.FeaturesSection.section7.cta}</span>
                <CaretRight size={16} weight="bold" />
              </Link>
            </div>
          }
          cards={Cards}
        />

        <FeatureSection textContent={textContent.FeatureSection} />

        <FAQSection textContent={textContent.FaqSection} />

        <CtaSection textContent={textContent.CtaSection} />

        <Footer textContent={footerLang} lang={lang} />
      </Layout>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const download = await downloadDriveLinks();
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/drive.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      download,
      metatagsDescriptions,
      textContent,
      navbarLang,
      footerLang,
    },
  };
}

export default Drive;
