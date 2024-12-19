import {
  ChartLineUp,
  Database,
  Eye,
  Fingerprint,
  NumberCircleZero,
  ShareNetwork,
  UserGear,
} from '@phosphor-icons/react';
import { FamilyText } from '@/assets/types/family';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { TestimonialsSectionForBusiness } from '@/components/business/TestimonialsSectionForBusiness';
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
import { TextAndCardsGroupColumnSection } from '@/components/shared/components/TextAndCardsGroupColumnSection';
import { PromoCodeName } from '@/lib/types';

interface FamilyProps {
  metatagsDescriptions: MetatagsDescription[];
  navbarText: NavigationBarText;
  textContent: FamilyText;
  footerText: FooterText;
}

export const FamilyLP = ({ metatagsDescriptions, navbarText, textContent, footerText }: FamilyProps): JSX.Element => {
  const { products, loadingCards, currencyValue, businessCoupon } = usePricing({
    couponCodeForBusiness: PromoCodeName.Christmas,
  });

  const metatag = metatagsDescriptions.filter((metatag) => metatag.id === 'family')[0];
  const heroSectionText = textContent.HeroSection;
  const featureSection = textContent.ProtectYourFamilySection;
  const maxSecuritySection = textContent.MaximumSecuritySection;
  const selectInfoCard = textContent.WhatMakesInternxtPerfectSection.features;
  const cardsForGroupCardText = textContent.WhyChooseInternxt;

  const selectInfoCards = [
    {
      icon: UserGear,
      title: selectInfoCard[0].title,
      description: selectInfoCard[0].description,
    },
    {
      icon: ShareNetwork,
      title: selectInfoCard[1].title,
      description: selectInfoCard[1].description,
    },
    {
      icon: ChartLineUp,
      title: selectInfoCard[2].title,
      description: selectInfoCard[2].description,
    },
    {
      icon: Database,
      title: selectInfoCard[3].title,
      description: selectInfoCard[3].description,
    },
  ];

  const cardsForGroupCards = [
    {
      icon: Fingerprint,
      title: cardsForGroupCardText.cards[0].title,
      description: cardsForGroupCardText.cards[0].description,
    },
    {
      icon: NumberCircleZero,
      title: cardsForGroupCardText.cards[1].title,
      description: cardsForGroupCardText.cards[1].description,
    },
    {
      icon: UserGear,
      title: cardsForGroupCardText.cards[2].title,
      description: cardsForGroupCardText.cards[2].description,
    },
    {
      icon: Eye,
      title: cardsForGroupCardText.cards[3].title,
      description: cardsForGroupCardText.cards[3].description,
    },
  ];

  const onCheckoutButtonClicked = (planId: string, isCheckoutForLifetime: boolean) => {
    stripeService.redirectToCheckout(planId, currencyValue, 'business', isCheckoutForLifetime, businessCoupon?.name);
  };

  return (
    <Layout title={metatag.title} description={metatag.description}>
      <Navbar fixed cta={['default']} lang="en" textContent={navbarText} />

      <HeroSection
        TextComponent={
          <div className="flex flex-col items-center gap-8 text-center lg:items-start lg:text-start">
            <Header>{heroSectionText.title}</Header>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold text-gray-80">{heroSectionText.subtitle}</h3>
              <p className="text-xl text-gray-80">{heroSectionText.description}</p>
            </div>
            <Button
              text={heroSectionText.cta}
              onClick={() => {
                window.location.href = '#priceTable';
              }}
            />
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
          className: 'shadow-lg rounded-xl',
        }}
        background="bg-gray-1"
      />

      <PricingSectionWrapper
        loadingCards={loadingCards}
        lang={'en'}
        products={products}
        decimalDiscount={{
          business: businessCoupon?.percentOff && 100 - businessCoupon?.percentOff,
        }}
        isFamilyPage={true}
        hideFreeCard
        startFromPlan="Business"
        hidePlanSelectorComponent={true}
        textContent={textContent.PriceTable}
        onCheckoutButtonClicked={onCheckoutButtonClicked}
        hideSwitchSelector
      />

      <SelectFeatureInfoSection
        textContent={textContent.WhatMakesInternxtPerfectSection}
        cards={selectInfoCards}
        lang="en"
      />

      <CtaSection textContent={textContent.CtaSection} url={'#priceTable'} maxWidth="max-w-[500px]" />

      <TextAndCardsGroupColumnSection
        TextComponent={
          <div className="flex w-full max-w-[774px] flex-col items-center justify-center gap-6 text-center">
            <h2 className="text-5xl font-semibold text-gray-100">{textContent.WhyChooseInternxt.title}</h2>
            <h3 className="text-xl text-gray-80">{textContent.WhyChooseInternxt.description}</h3>
          </div>
        }
        cards={cardsForGroupCards}
        background="bg-gray-1"
        backgroundColorForCard="bg-white"
      />

      <TextAndImageColumnSection
        TextComponent={
          <div className="flex max-w-[772px] flex-col items-center gap-8 text-center">
            <div className="flex flex-col gap-6">
              <h2 className="text-5xl font-semibold text-gray-100">{maxSecuritySection.title}</h2>
              <h3 className="text-xl text-gray-80">{maxSecuritySection.description}</h3>
            </div>
            <Button text={maxSecuritySection.cta} onClick={() => (window.location.href = '#priceTable')} />
          </div>
        }
        imageProperties={{
          src: getImage('/images/family/Internxt_family_plans.webp'),
          alt: 'Internxt Family Plans',
          width: 925,
          height: 41,
        }}
      />

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
