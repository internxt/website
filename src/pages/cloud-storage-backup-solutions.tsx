import Script from 'next/script';

//import HeroSection from '@/components/shared/components/HeroSection';
import { HeroSection } from '@/components/shared/components/HeroSection';

import FAQSection from '@/components/cloud-storage-backup-solutions/FAQSection';
import Footer from '@/components/layout/footers/Footer';
import Navbar from '@/components/layout/navbars/Navbar';
import Layout from '@/components/layout/Layout';
import cookies from '@/lib/cookies';

import { sm_faq, sm_breadcrumb } from '@/components/utils/schema-markup-generator';
import CtaSection from '@/components/cloud-storage-backup-solutions/CtaSection';

import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { GetServerSidePropsContext } from 'next';
import { getImage } from '@/lib/getImage';
import Header from '@/components/shared/Header';
import Link from 'next/link';
import Image from 'next/image';
import { CloudStorageBackupSolutionsText } from '@/assets/types/cloud-storage-backup-solutions';
import { BannersText } from '@/assets/types/components/banners';

import AwardsSection from '@/components/cloud-storage-backup-solutions/AwardsSection';
import InxtAppsSection from '@/components/cloud-storage-backup-solutions/InxtAppsSection';

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
  bannerJson,
  navbarLang,
  footerLang,
  lang,
}: PrivacyProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'internxt-cloud-storage-backup-solutions');
  const langForLink = lang === 'en' ? '' : lang;
  const CTA_URL = `https://internxt.com/${langForLink}/pricing`;

  return (
    <>
      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_faq(textContent.FaqSection.faq)}
      </Script>

      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_breadcrumb('Privacy', 'privacy')}
      </Script>
      <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Cloud Storage Backup Solutions" lang={lang}>
        <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

       
        <HeroSection
          TextComponent={
            <div className="flex w-full flex-col items-center space-y-8 lg:max-w-[524px] lg:items-start">
              <div className="flex flex-col items-center space-y-4 text-center lg:items-start lg:text-start">
                
                <Header>
                  {textContent.HeroSection.title.line1}
                  <span> {textContent.HeroSection.title.line2}</span>
                </Header>
              </div>
              <h3 className="text-center text-xl text-gray-80 lg:text-left">{textContent.HeroSection.description}</h3>

              <Link
                className="flex w-max rounded-lg bg-primary px-5 py-3 text-xl font-medium text-white hover:bg-primary-dark"
                href={'/pricing'}
              >
                {textContent.HeroSection.cta}
              </Link>
            </div>
          }
          ImageComponent={
            <div className="relative flex h-full flex-col items-center justify-center bg-transparent">
              <Image
                src={getImage('/images/privacy/vpn_extension_internxt.webp')}
                alt="VPN Widget"
                className="rounded-lg shadow-2xl"
                width={364}
                draggable={false}
                height={444}
              />
              <div className="hidden xl:flex">
                <Image
                  src={getImage('/images/vpn-extension/vpn-hero.svg')}
                  alt="VPN Hero"
                  className={`left-0 top-10 -translate-x-72 rounded-lg lg:absolute`}
                  width={328}
                  height={385}
                  draggable={false}
                />
              </div>
            </div>
          }
        />

        <CtaSection textContent={textContent.CtaSection} />

        <AwardsSection textContent={textContent.AwardsSection} />

        <InxtAppsSection textContent={textContent.InxtAppsSection} lang={lang} />

        <CtaSection textContent={textContent.CtaSection} />


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
