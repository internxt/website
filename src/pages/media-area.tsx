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

const MediaArea = ({ metatagsDescriptions, langJson, lang, navbarLang, footerLang, downloadURL }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'media-area');

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Media Area" lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

      <HeroSection textContent={langJson.HeroSection} />

      <StandForPrivacySection textContent={langJson.StandForPrivacySection} />

      <KitSection textContent={langJson.KitSection} />

      <CtaSection textContent={langJson.CtaSection} />

      <ProductsSection textContent={langJson.ProductsSection} lang={lang} />

      <SocialProofSection textContent={langJson.InvestorsSection} lang={lang} />

      <ThirdFeaturesSection textContent={langJson.FeatureSection} />

      <InternxtInTheNews textContent={langJson.InternxtInTheNewsSection} />

      <AnalysisSection textContent={langJson.AnalysisSection} />

      <CtaSection textContent={langJson.CtaSection} />

      <Footer textContent={footerLang} lang={lang} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
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
