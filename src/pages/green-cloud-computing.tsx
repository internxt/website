import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import Layout from '@/components/layout/Layout';
import cookies from '@/lib/cookies';
import { GetServerSidePropsContext } from 'next';
import Navbar from '@/components/layout/navbars/Navbar';
import Footer from '@/components/layout/footers/Footer';
import { SustainabilityText } from '@/assets/types/sustainability';

import { ComponentsInColumnSection } from '@/components/shared/components/ComponentsInColumnSection';
import { CardGroup } from '@/components/shared/CardGroup';
import { Globe, Lightbulb, Recycle, SealPercent } from '@phosphor-icons/react';

import CtaSection from '@/components/sustainability/CtaSection';
import FeatureSectionV3 from '@/components/sustainability/FeatureSectionv3';
import FeatureSection from '@/components/sustainability/FeatureSection';
import HeroSection from '@/components/sustainability/HeroSection';

interface SustainabilityProps {
  metatagsDescriptions: MetatagsDescription[];
  lang: GetServerSidePropsContext['locale'];
  navbarLang: NavigationBarText;
  langJson: SustainabilityText;
  footerLang: FooterText;
}

const Sustainability = ({
  metatagsDescriptions,
  lang,
  navbarLang,
  langJson,
  footerLang,
}: SustainabilityProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'green-cloud-computing');
  const locale = lang as string;
  const cardsForFeatureSection = [
    {
      icon: Globe,
      title: langJson.FeatureSectionV2.cards.element1.title,
      description: langJson.FeatureSectionV2.cards.element1.description,
    },
    {
      icon: SealPercent,
      title: langJson.FeatureSectionV2.cards.element2.title,
      description: langJson.FeatureSectionV2.cards.element2.description,
    },
    {
      icon: Lightbulb,
      title: langJson.FeatureSectionV2.cards.element3.title,
      description: langJson.FeatureSectionV2.cards.element3.description,
    },
    {
      icon: Recycle,
      title: langJson.FeatureSectionV2.cards.element4.title,
      description: langJson.FeatureSectionV2.cards.element4.description,
    },
  ];
  return (
    <Layout title={metatags[0].title} description={metatags[0].description} lang={lang}>
      <Navbar textContent={navbarLang} lang={locale} cta={['default']} />

      <HeroSection textContent={langJson.HeroSection} />

      <FeatureSection textContent={langJson.FeatureSection} />

      <CtaSection textContent={langJson.CtaSection} url={'/pricing'} />
      <ComponentsInColumnSection
        FirstComponent={
          <div className="flex w-full flex-col items-center gap-9">
            <div className="flex max-w-[850px] flex-col items-center gap-6 text-center">
              <h2 className="text-5xl font-semibold text-gray-100">{langJson.FeatureSection.title}</h2>
              <p className="font-regular text-xl text-gray-80">{langJson.FeatureSection.description}</p>
            </div>
          </div>
        }
        SecondComponent={
          <div className="flex flex-col items-center">
            <CardGroup cards={cardsForFeatureSection} backgroundColorCard="bg-gray-1" iconColor="text-green" />
          </div>
        }
        backgroundColor="bg-white"
      />
      <FeatureSectionV3 textContent={langJson.FeatureSectionV3} />

      <CtaSection textContent={langJson.CtaSection2} url={'/pricing'} />

      <Footer textContent={footerLang} lang={locale} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/sustainability.json`);
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
    },
  };
}

export default Sustainability;
