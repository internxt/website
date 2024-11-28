import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import Layout from '@/components/layout/Layout';
import cookies from '@/lib/cookies';
import { GetServerSidePropsContext } from 'next';
import Navbar from '@/components/layout/navbars/Navbar';
import Footer from '@/components/layout/footers/Footer';
import { SustainabilityText } from '@/assets/types/sustainabilty';
import CtaSection from '@/components/shared/CtaSection';
import HeroSection from '@/components/sustainability/HeroSection';
import FileParallaxSection from '@/components/home/FileParallaxSection';
import { ComponentsInColumnSection } from '@/components/shared/components/ComponentsInColumnSection';
import { CardGroup } from '@/components/shared/CardGroup';
import { Globe, Lightbulb, Recycle, SealPercent } from '@phosphor-icons/react';
import FeatureSection from '@/components/sustainability/FeatureSection';
import FeatureSectionV2 from '@/components/sustainability/FeatureSectionV2';
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
      title: langJson.FeatureSection.cards.reducedEnviromentalImpact.title,
      description: langJson.FeatureSection.cards.reducedEnviromentalImpact.description,
    },
    {
      icon: SealPercent,
      title: langJson.FeatureSection.cards.increasedSavings.title,
      description: langJson.FeatureSection.cards.increasedSavings.description,
    },
    {
      icon: Lightbulb,
      title: langJson.FeatureSection.cards.innovation.title,
      description: langJson.FeatureSection.cards.innovation.description,
    },
    {
      icon: Recycle,
      title: langJson.FeatureSection.cards.focusOnRenewableEnergy.title,
      description: langJson.FeatureSection.cards.focusOnRenewableEnergy.description,
    },
  ];
  return (
    <Layout title={metatags[0].title} description={metatags[0].description} lang={lang}>
      <Navbar textContent={navbarLang} lang={locale} cta={['default']} />

      <HeroSection textContent={langJson.HeroSection} />

      <FileParallaxSection />

      <ComponentsInColumnSection
        FirstComponent={
          <div className="flex w-full flex-col items-center gap-9">
            <div className="flex max-w-[774px] flex-col items-center gap-6 text-center">
              <h2 className="text-5xl font-semibold text-gray-100">{langJson.FeatureSection.title}</h2>
              <p className="font-regular text-xl text-gray-80">{langJson.FeatureSection.description}</p>
            </div>
          </div>
        }
        SecondComponent={
          <div className="flex flex-col items-center">
            <CardGroup cards={cardsForFeatureSection} backgroundColorCard="bg-gray-1" />
          </div>
        }
        backgroundColor="bg-white"
      />

      <CtaSection textContent={langJson.CtaSection} url={'/pricing'} />

      <FeatureSection textContent={langJson.FeatureSectionV2} />

      <CtaSection textContent={langJson.CtaSection2} url={'/pricing'} />

      <FeatureSectionV2 textContent={langJson.FeatureSectionV3} />

      <CtaSection textContent={langJson.CtaSection3} url={'/pricing'} />

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
