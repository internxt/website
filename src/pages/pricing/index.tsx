import { useState } from 'react';
import Script from 'next/script';

import Footer from '@/components/layout/footers/Footer';
import Navbar from '@/components/layout/navbars/Navbar';
import Layout from '@/components/layout/Layout';
import cookies from '@/lib/cookies';
import FAQSection from '@/components/shared/sections/FaqSection';
import CtaSection from '@/components/pricing/CtaSection';

import { sm_faq, sm_breadcrumb } from '@/components/utils/schema-markup-generator';
import BestStorageSection from '@/components/pricing/BestStorageSection';
import FileParallaxSection from '@/components/home/FileParallaxSection';
import {
  ClockCounterClockwise,
  Eye,
  Fingerprint,
  FolderSimpleLock,
  LockKey,
  ShieldCheck,
  Sliders,
  UsersThree,
} from '@phosphor-icons/react';
import InfoSection from '@/components/shared/sections/InfoSection';
import usePricing from '@/hooks/usePricing';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import { stripeService } from '@/components/services/stripe.service';
import { PricingText } from '@/assets/types/pricing';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { PromoCodeName } from '@/lib/types';

interface PricingProps {
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  footerLang: FooterText;
  lang: string;
  textContent: PricingText;
}

const Pricing = ({ metatagsDescriptions, navbarLang, footerLang, lang, textContent }: PricingProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'pricing');

  const { products, loadingCards, currencyValue, coupon, businessCoupon } = usePricing({
    couponCode: PromoCodeName.AllPlansCoupon,
  });

  const [pageName, setPageName] = useState('Pricing Individuals Annually');
  const [isBusiness, setIsBusiness] = useState<boolean>();

  const individualCardsData = [
    {
      icon: ShieldCheck,
      title: textContent.InfoSection.cards?.[0].title,
      description: textContent.InfoSection.cards?.[0].description,
    },
    {
      icon: LockKey,
      title: textContent.InfoSection.cards?.[1].title,
      description: textContent.InfoSection.cards?.[1].description,
    },
    {
      icon: Eye,
      title: textContent.InfoSection.cards?.[2].title,
      description: textContent.InfoSection.cards?.[2].description,
    },
    {
      icon: Fingerprint,
      title: textContent.InfoSection.cards?.[3].title,
      description: textContent.InfoSection.cards?.[3].description,
    },
  ];

  const businessCardsData = [
    {
      icon: Sliders,
      title: textContent.InfoSectionForBusiness.cards?.[0].title,
      description: textContent.InfoSectionForBusiness.cards?.[0].description,
    },
    {
      icon: FolderSimpleLock,
      title: textContent.InfoSectionForBusiness.cards?.[1].title,
      description: textContent.InfoSectionForBusiness.cards?.[1].description,
    },
    {
      icon: ClockCounterClockwise,
      title: textContent.InfoSectionForBusiness.cards?.[2].title,
      description: textContent.InfoSectionForBusiness.cards?.[2].description,
    },
    {
      icon: UsersThree,
      title: textContent.InfoSectionForBusiness.cards?.[3].title,
      description: textContent.InfoSectionForBusiness.cards?.[3].description,
    },
  ];

  const onBusinessPlansSelected = (isBusiness: boolean) => {
    setIsBusiness(isBusiness);
  };

  const infoText = isBusiness ? textContent.InfoSectionForBusiness : textContent.InfoSection;
  const faqSection = isBusiness ? textContent.FaqSectionForBusiness : textContent.FaqSection;
  const infoCards = isBusiness ? businessCardsData : individualCardsData;

  const onCheckoutButtonClicked = (planId: string, isCheckoutForLifetime: boolean) => {
    const couponCodeForCheckout = isBusiness ? businessCoupon : coupon;
    stripeService.redirectToCheckout(planId, currencyValue, isCheckoutForLifetime, couponCodeForCheckout?.name);
  };

  return (
    <>
      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_faq(textContent.SchemaMarkupQuestions.faq)}
      </Script>

      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_breadcrumb('Pricing', 'pricing')}
      </Script>

      <Layout segmentName={pageName} title={metatags[0].title} description={metatags[0].description} lang={lang}>
        <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

        <PricingSectionWrapper
          textContent={textContent.tableSection}
          decimalDiscount={{
            individuals: 0.2,
          }}
          lang={lang}
          products={products}
          loadingCards={loadingCards}
          handlePageNameUpdate={setPageName}
          onBusinessPlansSelected={onBusinessPlansSelected}
          onCheckoutButtonClicked={onCheckoutButtonClicked}
        />

        {isBusiness ? <div className="flex w-screen border border-gray-10" /> : undefined}

        <InfoSection textContent={infoText} withoutCta={isBusiness} lang={lang} cards={infoCards} />

        <BestStorageSection hideTitleAndDescription textContent={textContent.BestStorageSection} />

        <FileParallaxSection />

        <FAQSection textContent={faqSection} />

        {!isBusiness ? <CtaSection textContent={textContent.lastCtaSection} /> : undefined}

        <Footer textContent={footerLang} lang={lang} hideNewsletter={false} />
      </Layout>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/pricing.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      metatagsDescriptions,
      footerLang,
      navbarLang,
      lang,
      textContent,
    },
  };
}

export default Pricing;
