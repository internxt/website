import { BusinessHeroSection } from '@/components/business/HeroSection';
import { InternxtProtectsYourBusiness } from '@/components/business/InternxtProtectsYourBusiness';
import { SecureYourCompany } from '@/components/business/SecureYourCompany';
import Footer from '@/components/layout/footers/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import usePricing from '@/hooks/usePricing';
import { GetServerSidePropsContext } from 'next';

interface BusinessProps {
  metatagsDescriptions: Record<string, string>[];
  navbarText: Record<string, any>;
  textContent: Record<string, any>;
  footerText: Record<string, any>;
  lang: GetServerSidePropsContext['locale'];
}

export const BusinessPage = ({
  footerText,
  metatagsDescriptions,
  navbarText,
  textContent,
  lang,
}: BusinessProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((metatag) => metatag.id === 'business')[0];
  const { products, loadingCards } = usePricing();

  const locale = lang as string;

  return (
    <Layout title={metatags.title} description={metatags.description}>
      <Navbar cta={['default']} lang={locale} textContent={navbarText} />

      <BusinessHeroSection textContent={textContent.HeroSection} />

      <SecureYourCompany textContent={textContent.SecureYourCompany} />

      <InternxtProtectsYourBusiness textContent={textContent.InternxtProtectsYourBusiness} />

      <PricingSectionWrapper
        loadingCards={loadingCards}
        lang={locale}
        products={products}
        hideFreeCard
        startFromPlan="Business"
        hidePlanSelectorComponent={true}
        textContent={textContent.PriceTable}
        onCheckoutButtonClicked={() => {}}
      />

      <Footer textContent={footerText} lang={locale} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/business.json`);
  const navbarText = require(`@/assets/lang/${lang}/navbar.json`);
  const footerText = require(`@/assets/lang/${lang}/footer.json`);

  return {
    props: {
      lang,
      metatagsDescriptions,
      textContent,
      navbarText,
      footerText,
    },
  };
}

export default BusinessPage;
