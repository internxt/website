import { CloudObjectStorageText } from '@/assets/types/cloud-object-storage';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { CloudObjectStorageHeroSection } from '@/components/cloud-object-storage/HeroSection';
import { HowMuchYouNeedSection } from '@/components/cloud-object-storage/HowMuchYouNeedSection';
import { PredictablePricingSection } from '@/components/cloud-object-storage/PredictablePricingSection';
import { CloudObjectStoragePriceCardSection } from '@/components/cloud-object-storage/PriceCardSection';
import { CloudObjectStorageWhyChooseInternxtSection } from '@/components/cloud-object-storage/WhyChooseInternxtSection';
import Footer from '@/components/layout/footers/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import FAQSection from '@/components/shared/sections/FaqSection';
import { GetServerSidePropsContext } from 'next';

interface CloudObjectStorageProps {
  metatagsDescription: MetatagsDescription[];
  navbarText: NavigationBarText;
  textContent: CloudObjectStorageText;
  footerText: FooterText;
  locale: GetServerSidePropsContext['locale'];
}

const CloudObjectStorage = ({
  metatagsDescription,
  navbarText,
  textContent,
  footerText,
  locale,
}: CloudObjectStorageProps): JSX.Element => {
  const metatags = metatagsDescription.filter((metatag) => metatag.id === 'cloud-object-storage')[0];

  const lang = locale as string;

  return (
    <Layout title={metatags.title} description={metatags.description}>
      <Navbar cta={['default']} lang={lang} textContent={navbarText} fixed />

      <CloudObjectStorageHeroSection textContent={textContent.HeroSection} />

      <PredictablePricingSection textContent={textContent.PredictablePricingSection} />

      <CloudObjectStoragePriceCardSection textContent={textContent.PriceCardSection} />

      <HowMuchYouNeedSection textContent={textContent.HowMuchYouNeedSection} />

      <CloudObjectStorageWhyChooseInternxtSection textContent={textContent.WhyChooseInternxtSection} />

      <FAQSection textContent={textContent.FaqSection} />

      <Footer textContent={footerText} lang={lang} />
    </Layout>
  );
};

export function getServerSideProps(ctx: GetServerSidePropsContext) {
  const locale = ctx.locale as string;

  const metatagsDescription = require(`@/assets/lang/en/metatags-descriptions.json`);
  const navbarText = require(`@/assets/lang/en/navbar.json`);
  const textContent = require(`@/assets/lang/en/cloud-object-storage.json`);
  const footerText = require(`@/assets/lang/en/footer.json`);

  return {
    props: {
      metatagsDescription,
      navbarText,
      textContent,
      footerText,
      locale,
    },
  };
}

export default CloudObjectStorage;
