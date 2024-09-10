import { GetServerSidePropsContext } from 'next';
import Footer from '@/components/layout/footers/Footer';
import Navbar from '@/components/layout/navbars/Navbar';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/media-area/HeroSection';
import StandForPrivacySection from '@/components/media-area/StandForPrivacySection';
import KitSection from '@/components/media-area/KitSection';
import CtaSection from '@/components/media-area/CtaSection';
import ProductsSection from '@/components/media-area/ProductsSection';
import SocialProofSection from '@/components/home/SocialProofSection';
import ThirdFeaturesSection from '@/components/media-area/FeatureSection';
import InternxtInTheNews from '@/components/media-area/InternxtInTheNews';
import AnalysisSection from '@/components/media-area/AnalysisSection';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { MediaAreaText } from '@/assets/types/media-area';

interface MediaAreaProps {
  metatagsDescriptions: MetatagsDescription[];
  navbarText: NavigationBarText;
  textContent: MediaAreaText;
  footerText: FooterText;
  lang: GetServerSidePropsContext['locale'];
}

const MediaArea = ({
  metatagsDescriptions,
  textContent,
  lang,
  navbarText,
  footerText,
}: MediaAreaProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'media-area');
  const locale = lang as string;

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Media Area" lang={lang}>
      <Navbar textContent={navbarText} lang={locale} cta={['default']} fixed />

      <HeroSection textContent={textContent.HeroSection} />

      <StandForPrivacySection textContent={textContent.StandForPrivacySection} />

      <KitSection textContent={textContent.KitSection} />

      <CtaSection textContent={textContent.CtaSection} />

      <ProductsSection textContent={textContent.ProductsSection} lang={lang} />

      <SocialProofSection textContent={textContent.InvestorsSection} lang={lang} />

      <ThirdFeaturesSection textContent={textContent.FeatureSection} />

      <InternxtInTheNews textContent={textContent.InternxtInTheNewsSection} />

      <AnalysisSection textContent={textContent.AnalysisSection} />

      <CtaSection textContent={textContent.CtaSection} />

      <Footer textContent={footerText} lang={locale} />
    </Layout>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/en/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/en/media-area.json`);
  const navbarLang = require(`@/assets/lang/en/navbar.json`);
  const footerLang = require(`@/assets/lang/en/footer.json`);

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

export default MediaArea;
