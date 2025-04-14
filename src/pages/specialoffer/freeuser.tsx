import { useState } from 'react';

import Layout from '@/components/layout/Layout';
import { MinimalFooter } from '@/components/layout/footers/MinimalFooter';
import Navbar from '@/components/layout/navbars/Navbar';
import { stripeService } from '@/services/stripe.service';
import CtaSection from '@/components/shared/CtaSection';
import FAQSection from '@/components/shared/sections/FaqSection';
import { FeatureSectionForSpecialOffer } from '@/components/specialoffer/FeatureSection';
import { HeroSectionForSpecialOffer } from '@/components/specialoffer/HeroSection';
import { InxtFeaturesSection } from '@/components/specialoffer/InxtFeaturesSection';
import { WhatWeDoSectionForSpecialOffer } from '@/components/specialoffer/WhatWeDoSection';
import usePricing from '@/hooks/usePricing';
import { PromoCodeName } from '@/lib/types';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { GetServerSidePropsContext } from 'next';
import { FreeUserText } from '@/assets/types/freeuser';

interface FreeUserPageProps {
  lang: GetServerSidePropsContext['locale'];
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  textContent: FreeUserText;
  footerLang: FooterText;
}

const FreeUserPage = ({
  metatagsDescriptions,
  footerLang,
  navbarLang,
  lang,
  textContent,
}: FreeUserPageProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'free-user')[0];

  const locale = lang as string;

  const { products, loadingCards, currencyValue, coupon, businessCoupon } = usePricing({
    couponCode: PromoCodeName.Special80Coupon,
  });

  const [isBusiness, setIsBusiness] = useState<boolean>();

  const onBusinessPlansSelected = (isBusiness: boolean) => {
    setIsBusiness(isBusiness);
  };

  const onCheckoutButtonClicked = (planId: string, isCheckoutForLifetime: boolean) => {
    const couponCodeForCheckout = coupon;
    const planType = isBusiness ? 'business' : 'individual';

    stripeService.redirectToCheckout(
      planId,
      currencyValue,
      planType,
      isCheckoutForLifetime,
      couponCodeForCheckout?.name,
    );
  };

  const handleOnButtonClick = () => {
    window.location.hash = '#priceTable';
  };

  return (
    <Layout title={metatags.title} description={metatags.description} segmentName={'Free User'}>
      <Navbar textContent={navbarLang} cta={['default']} lang={locale} fixed isLinksHidden />

      <HeroSectionForSpecialOffer textContent={textContent.HeroSection} />

      <PricingSectionWrapper
        textContent={textContent.tableSection}
        decimalDiscount={{
          individuals: 20,
          lifetime: 20,
        }}
        lang={locale}
        products={products}
        loadingCards={loadingCards}
        onBusinessPlansSelected={onBusinessPlansSelected}
        onCheckoutButtonClicked={onCheckoutButtonClicked}
        hideBusinessCards
        hideBusinessSelector
        showPromo={false}
      />

      <FeatureSectionForSpecialOffer textContent={textContent.FeatureSection} />

      <InxtFeaturesSection textContent={textContent.InxtFeaturesSection} />

      <CtaSection textContent={textContent.CtaSection} url={'/specialoffer/freeuser#priceTable'} target="_self" />

      <WhatWeDoSectionForSpecialOffer
        textContent={textContent.WhatWeDoSection}
        handleOnButtonClick={handleOnButtonClick}
      />

      <FAQSection textContent={textContent.FaqSection} />

      <MinimalFooter lang={locale} footerLang={footerLang.FooterSection} bgColor="bg-gray-1" />
    </Layout>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/specialoffer/free-user.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const homeComponentsLang = require(`@/assets/lang/${lang}/home.json`);

  return {
    props: {
      metatagsDescriptions,
      footerLang,
      navbarLang,
      lang,
      textContent,
      homeComponentsLang,
    },
  };
}

export default FreeUserPage;
