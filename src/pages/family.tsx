import { FamilyText } from '@/assets/types/family';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { TestimonialsSectionForBusiness } from '@/components/business/TestimonialsSectionForBusiness';
import { WhyChooseInternxtForBusiness } from '@/components/business/WhyChooseInternxt';
import { MaxSecurity } from '@/components/family/MaxSecurity';
import Footer from '@/components/layout/footers/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import CtaSection from '@/components/shared/CtaSection';
import FAQSection from '@/components/shared/sections/FaqSection';

interface FamilyProps {
  metatagsDescriptions: MetatagsDescription[];
  navbarText: NavigationBarText;
  textContent: FamilyText;
  footerText: FooterText;
}

export const FamilyLP = ({ metatagsDescriptions, navbarText, textContent, footerText }: FamilyProps): JSX.Element => {
  const metatag = metatagsDescriptions.filter((metatag) => metatag.id === 'family')[0];
  return (
    <Layout title={metatag.title} description={metatag.description}>
      <Navbar fixed cta={['default']} lang="en" textContent={navbarText} />

      <CtaSection textContent={textContent.CtaSection} url={''} maxWidth="max-w-[500px]" />

      <WhyChooseInternxtForBusiness withoutBanner textContent={textContent.WhyChooseInternxt} />

      <MaxSecurity textContent={textContent.MaximumSecuritySection} />

      <TestimonialsSectionForBusiness textContent={textContent.TestimonialsSection} />

      <FAQSection textContent={textContent.FaqSection} />
      <Footer lang="en" textContent={footerText} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/family.json`);
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

export default FamilyLP;
