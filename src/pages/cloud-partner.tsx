import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import Footer from '@/components/layout/footers/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import { GetStaticPropsContext } from 'next';
import { ContactSalesForm } from '@/components/shared/ContactSalesForm';
import { TrustedObjectStorageSection } from '@/components/cloud-partner/TrustedObjectStorageSection';
import { CloudPartnerText } from '@/assets/types/cloud-partner';
import HeroSection from '@/components/cloud-partner/HeroSection';
import FeatureSection from '@/components/cloud-partner/FeatureSection';
import ThreeCardsIconsSection from '@/components/shared/sections/ThreeCardsIconsSection';
import AccordionSection from '@/components/cloud-partner/AccordionSection';

interface CloudPartnerProps {
  darkMode?: boolean;
  metatagsDescription: MetatagsDescription[];
  navbarText: NavigationBarText;
  textContent: CloudPartnerText;
  footerText: FooterText;
  locale: GetStaticPropsContext['locale'];
  relationalLinksText: any;
}

const CloudPartner = ({
  darkMode = false,
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

      <HeroSection textContent={textContent.HeroSection} darkMode={darkMode} />

      <FeatureSection textContent={textContent.FeatureSection} darkMode={darkMode} />

      <AccordionSection textContent={textContent.AccordionSection} darkMode={darkMode} />

      <ThreeCardsIconsSection
        textContent={textContent.ThreeCardsSection}
        cardColor={`${darkMode ? 'bg-[#1C1C1C]' : 'bg-white'}`}
        bottomSeparationBar
        topSeparationBar
        darkMode={darkMode}
      />

      <TrustedObjectStorageSection textContent={textContent.TrustedSection} darkMode={darkMode} />

      <ContactSalesForm
        textContent={textContent.ContactSales}
        locale={locale}
        needsBottomDivider={false}
        isReseller={true}
        darkMode={darkMode}
      />

      <Footer textContent={footerText} lang={lang} darkMode={darkMode} />
    </Layout>
  );
};

export function getStaticProps(ctx: GetStaticPropsContext) {
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
