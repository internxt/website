import Layout from '@/components/layout/Layout';
import cookies from '@/lib/cookies';
import Navbar from '@/components/layout/navbars/Navbar';
import Footer from '@/components/layout/footers/Footer';
import CtaSection from '@/components/shared/CtaSection';
import { ToolsSection } from '@/components/shared/sections/ToolsSection';
import FeatureSection from '@/components/monitor/FeatureSection';
import { ComponentsInColumnSection } from '@/components/shared/components/ComponentsInColumnSection';
import { CardGroup } from '@/components/shared/CardGroup';
import { CheckSquare, Detective, FacebookLogo, Globe, Info } from '@phosphor-icons/react';
import SignUpBanner from '@/components/banners/SignUpBanner';
import { HeroSection } from '@/components/monitor/HeroSection';
import { InfoSection } from '@/components/monitor/InfoSection';
import { HaveIbeenPwnedText } from '@/assets/types/have-i-been-pawned';
import { GetServerSidePropsContext } from 'next';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { ToolsSectionText } from '@/assets/types/components/toolsSection';
import { BannersText } from '@/assets/types/components/banners';

interface MonitorProps {
  lang: GetServerSidePropsContext['locale'];
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  langJson: HaveIbeenPwnedText;
  footerLang: FooterText;
  toolsContent: ToolsSectionText;
  bannerLang: BannersText;
}
const Monitor = ({
  lang,
  metatagsDescriptions,
  navbarLang,
  footerLang,
  langJson,
  toolsContent,
  bannerLang,
}: MonitorProps) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'internxt-monitor');
  const locale = lang as string;
  const cardsForFeatureSection = [
    {
      icon: Globe,
      title: langJson.FeatureSectionV2.cards![0].title,
      description: langJson.FeatureSectionV2.cards![0].description,
    },
    {
      icon: FacebookLogo,
      title: langJson.FeatureSectionV2.cards![1].title,
      description: langJson.FeatureSectionV2.cards![1].description,
    },
    {
      icon: CheckSquare,
      title: langJson.FeatureSectionV2.cards![2].title,
      description: langJson.FeatureSectionV2.cards![2].description,
    },
    {
      icon: Detective,
      title: langJson.FeatureSectionV2.cards![3].title,
      description: langJson.FeatureSectionV2.cards![3].description,
    },
  ];
  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Monitor" lang={locale}>
      <Navbar textContent={navbarLang} cta={['default']} fixed lang={locale} />

      <HeroSection textContent={langJson.HeroSection} />

      <InfoSection textContent={langJson.InfoSection} />

      <FeatureSection textContent={langJson.FeatureSection} />

      <CtaSection
        textContent={langJson.CtaSection}
        customDescription={<p className="font-regular text-xl">{langJson.CtaSection.description}</p>}
        url={''}
      />

      <ComponentsInColumnSection
        FirstComponent={
          <div className="flex w-full flex-col items-center gap-9">
            <div className="flex max-w-[774px] flex-col items-center gap-6 text-center">
              <h2 className="text-5xl font-semibold text-gray-100">{langJson.FeatureSectionV2.title}</h2>
              <p className="font-regular text-xl text-gray-80">{langJson.FeatureSectionV2.description}</p>
            </div>
          </div>
        }
        SecondComponent={
          <div className="flex flex-col items-center space-y-12">
            <CardGroup cards={cardsForFeatureSection} backgroundColorCard="bg-white" />
            <SignUpBanner textContent={bannerLang.SignUpPCloudAlternativeBanner} lang={locale} />
          </div>
        }
        backgroundColor="bg-gray-1"
      />

      <CtaSection
        textContent={langJson.CtaSection2}
        customDescription={<p className="font-regular text-xl">{langJson.CtaSection2.description}</p>}
        url={''}
      />

      <ToolsSection textContent={toolsContent} lang={locale} />

      <Footer textContent={footerLang} lang={locale} hideNewsletter={false} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/i-have-been-pawned.json`);
  const testimonialsJson = require(`@/assets/lang/${lang}/home.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);
  const toolsContent = require(`@/assets/lang/${lang}/components/tools/ToolSection.json`);
  const bannerLang = require(`@/assets/lang/${lang}/banners.json`);
  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      metatagsDescriptions,
      langJson,
      testimonialsJson,
      navbarLang,
      footerLang,
      toolsContent,
      bannerLang,
    },
  };
}

export default Monitor;
