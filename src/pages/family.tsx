import { FamilyText } from '@/assets/types/family';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { TestimonialsSectionForBusiness } from '@/components/business/TestimonialsSectionForBusiness';
import { WhyChooseInternxtForBusiness } from '@/components/business/WhyChooseInternxt';
import { MaxSecurity } from '@/components/family/MaxSecurity';
import Footer from '@/components/layout/footers/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import { stripeService } from '@/components/services/stripe.service';
import Button from '@/components/shared/Button';
import { TextAndImageColumnSection } from '@/components/shared/components/TextAndImageColumnSection';
import CtaSection from '@/components/shared/CtaSection';
import Header from '@/components/shared/Header';
import { HeroSection } from '@/components/shared/components/HeroSection';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import FAQSection from '@/components/shared/sections/FaqSection';
import usePricing from '@/hooks/usePricing';
import { getImage } from '@/lib/getImage';
import SelectFeatureInfoSection from '@/components/shared/components/SelectFeatureInfoSection';
import { ChartLineUp, Database, ShareNetwork, UserGear } from '@phosphor-icons/react';

interface FamilyProps {
  metatagsDescriptions: MetatagsDescription[];
  navbarText: NavigationBarText;
  textContent: FamilyText;
  footerText: FooterText;
}

export const FamilyLP = ({ metatagsDescriptions, navbarText, textContent, footerText }: FamilyProps): JSX.Element => {
  const { products, loadingCards, currencyValue } = usePricing();

  const metatag = metatagsDescriptions.filter((metatag) => metatag.id === 'family')[0];
  const heroSectionText = textContent.HeroSection;
  const featureSection = textContent.ProtectYourFamilySection;
  const cardText = textContent.WhatMakesInternxtPerfectSection.features;

  const cards = [
    {
      icon: UserGear,
      title: cardText[0].title,
      description: cardText[0].description,
    },
    {
      icon: ShareNetwork,
      title: cardText[1].title,
      description: cardText[1].description,
    },
    {
      icon: ChartLineUp,
      title: cardText[2].title,
      description: cardText[2].description,
    },
    {
      icon: Database,
      title: cardText[3].title,
      description: cardText[3].description,
    },
  ];

  const onCheckoutButtonClicked = (planId: string, isCheckoutForLifetime: boolean) => {
    stripeService.redirectToCheckout(planId, currencyValue, 'business', isCheckoutForLifetime);
  };

  return (
    <Layout title={metatag.title} description={metatag.description}>
      <Navbar fixed cta={['default']} lang="en" textContent={navbarText} />

      <HeroSection
        TextComponent={
          <div className="flex flex-col gap-8">
            <Header>{heroSectionText.title}</Header>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold text-gray-80">{heroSectionText.subtitle}</h3>
              <p className="text-xl text-gray-80">{heroSectionText.description}</p>
            </div>
            <Button text={heroSectionText.cta} onClick={() => {}} />
          </div>
        }
        imageProperties={{
          src: getImage('/images/family/internxt_family_storage_plans.webp'),
          alt: 'Internxt Family Storage Plans',
          width: 896,
          height: 778,
        }}
      />

      <TextAndImageColumnSection
        TextComponent={
          <div className="flex max-w-[925px] flex-col gap-12">
            <h2 className="text-5xl font-semibold text-gray-100">{featureSection.title}</h2>
            <p className="text-xl text-gray-80">{featureSection.description}</p>
          </div>
        }
        imageProperties={{
          src: getImage('/images/family/internxt_family_plans_storage.webp'),
          alt: 'Internxt Family Storage Plans',
          width: 896,
          height: 778,
        }}
        background="bg-gray-1"
      />

      <PricingSectionWrapper
        loadingCards={loadingCards}
        lang={'en'}
        products={products}
        isFamilyPage={true}
        hideFreeCard
        startFromPlan="Business"
        hidePlanSelectorComponent={true}
        textContent={textContent.PriceTable}
        onCheckoutButtonClicked={onCheckoutButtonClicked}
      />

      <SelectFeatureInfoSection textContent={textContent.WhatMakesInternxtPerfectSection} cards={cards} lang="en" />

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
