import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import Footer from '@/components/layout/footers/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import { GetServerSidePropsContext } from 'next';
import { ContactSalesForm } from '@/components/shared/ContactSalesForm';
import { TrustedObjectStorageSection } from '@/components/cloud-partner/TrustedObjectStorageSection';
import { CloudPartnerText } from '@/assets/types/cloud-partner';
import HeroSection from '@/components/cloud-partner/HeroSection';
import FeatureSection from '@/components/cloud-partner/FeatureSection';
import ThreeCardsIconsSection from '@/components/shared/sections/ThreeCardsIconsSection';
import AccordionSection from '@/components/cloud-partner/AccordionSection';

interface CloudPartnerProps {
  metatagsDescription: MetatagsDescription[];
  navbarText: NavigationBarText;
  textContent: CloudPartnerText;
  footerText: FooterText;
  locale: GetServerSidePropsContext['locale'];
  relationalLinksText: any;
}

const CloudPartner = ({
  metatagsDescription,
  navbarText,
  textContent,
  footerText,
  locale,
  relationalLinksText,
}: CloudPartnerProps): JSX.Element => {
  const metatags = metatagsDescription.filter((metatag) => metatag.id === 'cloud-object-storage')[0];

  const lang = locale as string;

  return (
    <Layout title={metatags.title} description={metatags.description}>
      <Navbar cta={['default']} lang={lang} textContent={navbarText} fixed />

      <HeroSection textContent={textContent.HeroSection} />

      <FeatureSection textContent={textContent.FeatureSection} />

      <AccordionSection textContent={textContent.AccordionSection} />

      <ThreeCardsIconsSection
        textContent={textContent.ThreeCardsSection}
        cardColor="bg-white"
        bottomSeparationBar
        topSeparationBar
      />

      <TrustedObjectStorageSection textContent={textContent.TrustedSection} />

      <ContactSalesForm
        textContent={textContent.ContactSales}
        locale={locale}
        needsBottomDivider={false}
        isReseller={true}
      />

      <Footer textContent={footerText} lang={lang} />
    </Layout>
  );
};

export function getServerSideProps(ctx: GetServerSidePropsContext) {
  const locale = ctx.locale as string;

  const metatagsDescription = require(`@/assets/lang/${locale}/metatags-descriptions.json`);
  const navbarText = require(`@/assets/lang/${locale}/navbar.json`);
  const textContent = require(`@/assets/lang/${locale}/cloud-partner.json`);
  const footerText = require(`@/assets/lang/${locale}/footer.json`);

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

export default CloudPartner;
