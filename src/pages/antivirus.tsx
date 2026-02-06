/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetServerSidePropsContext } from 'next';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import Footer from '@/components/layout/footers/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import { CardGroup } from '@/components/shared/CardGroup';
import { ComponentsInColumnSection } from '@/components/shared/components/ComponentsInColumnSection';
import CtaSection from '@/components/shared/CtaSection';
import FAQSection from '@/components/shared/sections/FaqSection';
import cookies from '@/lib/cookies';
import { BatteryCharging, Bomb, Broom, Browsers, Devices, ShieldCheck, ThermometerHot } from '@phosphor-icons/react';
import { AntivirusText } from '@/assets/types/antivirus';
import FeatureSectionV2 from '@/components/antivirus/FeatureSectionV2';
import FeatureSection from '@/components/antivirus/FeatureSection';
import HeroSection from '@/components/antivirus/HeroSection';
import { InfoSection } from '@/components/antivirus/InfoSecction';
import { downloadDriveLinks } from '@/lib/get-download-url';

interface AntivirusProps {
  lang: GetServerSidePropsContext['locale'];
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  langJson: AntivirusText;
  footerLang: FooterText;
  download: {
    Windows: any;
    MacOS: any;
    Linux: any;
  };
}

const AntivirusPage = ({
  metatagsDescriptions,
  langJson,
  lang,
  navbarLang,
  footerLang,
  download,
}: AntivirusProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'internxt-antivirus');
  const locale = lang as string;

  const cardsForComponentsIncolumn = [
    {
      icon: BatteryCharging,
      title: langJson.ComponentsInColumn.cards.element1.title,
      description: langJson.ComponentsInColumn.cards.element1.description,
    },
    {
      icon: Bomb,
      title: langJson.ComponentsInColumn.cards.element2.title,
      description: langJson.ComponentsInColumn.cards.element2.description,
    },
    {
      icon: Browsers,
      title: langJson.ComponentsInColumn.cards.element3.title,
      description: langJson.ComponentsInColumn.cards.element3.description,
    },
    {
      icon: ThermometerHot,
      title: langJson.ComponentsInColumn.cards.element4.title,
      description: langJson.ComponentsInColumn.cards.element4.description,
    },
  ];
  const infoSectionData = [
    {
      title: langJson.InfoSection.Percentage,
      description: langJson.InfoSection.PercentageText,
    },
    {
      title: langJson.InfoSection.MalwareRegisteredDaily,
      description: langJson.InfoSection.MalwareRegisteredDailyText,
    },
    {
      title: langJson.InfoSection.MalwareAttacks,
      description: langJson.InfoSection.MalwareAttacksText,
    },
  ];

  const InfoSectionV2 = [
    {
      icon: ShieldCheck,
      title: langJson.InfoSectionV2.AntivirusProtection,
    },
    {
      icon: Broom,
      title: langJson.InfoSectionV2.RemoveMalware,
    },
    {
      icon: Devices,
      title: langJson.InfoSectionV2.DeviceProtection,
    },
  ];

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Home" lang={lang}>
      <Navbar textContent={navbarLang} lang={locale} cta={['default']} fixed />

      <HeroSection textContent={langJson.HeroSection} download={download} />

      <InfoSection
        FirstComponent={
          <div className="flex flex-col items-center justify-center space-y-5 md:flex-row md:space-x-20 md:space-y-0">
            {infoSectionData.map((item, index) => (
              <div key={index} className="flex flex-col items-center justify-center px-5 text-center">
                <p className="pb-5 text-4xl font-semibold text-primary">{item.title}</p>
                <p className="min-h-[80px] max-w-[300px] text-lg font-medium text-gray-80">{item.description}</p>
              </div>
            ))}
          </div>
        }
      />

      <FeatureSection textContent={langJson.FeatureSection} />

      <InfoSection
        FirstComponent={
          <div className="flex flex-col items-center justify-center space-y-5 md:flex-row md:space-x-20 md:space-y-0">
            {InfoSectionV2.map((item, index) => (
              <div key={index} className="flex flex-col items-center justify-center px-5 text-center">
                <item.icon className="text-primary" size={64} />
                <p className="pt-5 text-xl font-medium text-gray-80">{item.title}</p>
              </div>
            ))}
          </div>
        }
      />

      <CtaSection
        textContent={langJson.cta1}
        url={'/pricing'}
        customDescription={<p className="w-full text-xl font-normal">{langJson.cta1.subtitle}</p>}
      />

      <FeatureSectionV2 textContent={langJson.FeatureSectionV2} />

      <ComponentsInColumnSection
        FirstComponent={
          <div className="flex w-full flex-col items-center gap-9 ">
            <div className="flex max-w-[850px] flex-col items-center gap-6 text-center">
              <h2 className="text-3xl font-semibold text-gray-100 lg:text-5xl">{langJson.ComponentsInColumn.title}</h2>
              <p className="font-regular text-xl text-gray-80">{langJson.ComponentsInColumn.description}</p>
            </div>
          </div>
        }
        SecondComponent={
          <div className="flex flex-col items-center">
            <CardGroup cards={cardsForComponentsIncolumn} backgroundColorCard="bg-white" />
          </div>
        }
        backgroundColor="bg-gray-1"
      />
      <CtaSection
        textContent={langJson.cta2}
        url={'/pricing'}
        customDescription={<p className="w-full  text-xl font-normal">{langJson.cta2.subtitle}</p>}
      />

      <FAQSection textContent={langJson.FaqSection} />

      <Footer textContent={footerLang} lang={locale} />
    </Layout>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const download = await downloadDriveLinks();
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/antivirus.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      metatagsDescriptions,
      langJson,
      navbarLang,
      footerLang,
      download,
    },
  };
}

export default AntivirusPage;
