import { BusinessText } from '@/assets/types/business';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { EncryptedCloudSolution } from '@/components/business/EncryptedCloudSolution';
import { BusinessHeroSection } from '@/components/business/HeroSection';
import { InternxtProtectsYourBusiness } from '@/components/business/InternxtProtectsYourBusiness';
import { SecureYourCompany } from '@/components/business/SecureYourCompany';
import { TestimonialsSectionForBusiness } from '@/components/business/TestimonialsSectionForBusiness';
import { WhatCanWeDo } from '@/components/business/WhatCanWeDo';
import { WhyChooseInternxtForBusiness } from '@/components/business/WhyChooseInternxt';
import Footer from '@/components/layout/footers/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import { stripeService } from '@/components/services/stripe.service';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import FAQSection from '@/components/shared/sections/FaqSection';
import usePricing from '@/hooks/usePricing';
import { GetServerSidePropsContext } from 'next';

interface BusinessProps {
  metatagsDescriptions: MetatagsDescription[];
  navbarText: NavigationBarText;
  textContent: BusinessText;
  footerText: FooterText;
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
  const { products, loadingCards, currencyValue } = usePricing();

  const locale = lang as string;

  const onCheckoutButtonClicked = (planId: string, isCheckoutForLifetime: boolean) => {
    stripeService.redirectToCheckout(planId, currencyValue, isCheckoutForLifetime);
  };

  return (
    <Layout title={metatags.title} description={metatags.description}>
      <Navbar cta={['default']} lang={locale} textContent={navbarText} fixed />

      <BusinessHeroSection textContent={textContent.HeroSection} />

      <SecureYourCompany textContent={textContent.SecureYourCompany} />

      <InternxtProtectsYourBusiness textContent={textContent.InternxtProtectsYourBusiness} />

      <WhatCanWeDo textContent={textContent.WhatCanWeDo} />

      <PricingSectionWrapper
        loadingCards={loadingCards}
        lang={locale}
        products={products}
        hideFreeCard
        startFromPlan="Business"
        hidePlanSelectorComponent={true}
        textContent={textContent.PriceTable}
        onCheckoutButtonClicked={onCheckoutButtonClicked}
      />

      <WhyChooseInternxtForBusiness textContent={textContent.WhyChooseInternxt} />

      <EncryptedCloudSolution textContent={textContent.EncryptedCloudSolution} />

      <TestimonialsSectionForBusiness textContent={textContent.TestimonialsSection} />

      <FAQSection textContent={textContent.FaqSection} />

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
