import Layout from '@/components/layout/Layout';
import Footer from '@/components/layout/footers/Footer';
import Navbar from '@/components/layout/navbars/Navbar';
import { RangeSliderHeroSection } from '@/components/prices/RangeSliderHeroSection';
import { GetServerSidePropsContext } from 'next';

interface PricingAlternativeProps {
  metaDescriptions: Record<string, any>;
  navbarContent: Record<string, any>;
  textContent: Record<string, any>;
  footerContent: Record<string, any>;
  lang: GetServerSidePropsContext['locale'];
}

const PricingAlternative = ({
  metaDescriptions,
  navbarContent,
  textContent,
  footerContent,
  lang,
}: PricingAlternativeProps) => {
  const metatagsDescriptions = metaDescriptions.filter((meta) => meta.id === 'pricing')[0];
  const locale = lang as string;

  return (
    <Layout title={metatagsDescriptions.title} description={metatagsDescriptions.description}>
      <Navbar lang={locale} textContent={navbarContent} fixed cta={['default']} />

      <RangeSliderHeroSection textContent={textContent.HeroSectionAlternative} />

      <Footer textContent={footerContent} lang={locale} />
    </Layout>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const lang = context.locale;

  const metaDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const navbarContent = require(`@/assets/lang/${lang}/navbar.json`);
  const textContent = require(`@/assets/lang/${lang}/pricing.json`);
  const footerContent = require(`@/assets/lang/${lang}/footer.json`);

  return {
    props: {
      metaDescriptions,
      navbarContent,
      textContent,
      footerContent,
      lang,
    },
  };
}

export default PricingAlternative;
