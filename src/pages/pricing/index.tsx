import { useState } from 'react';
import Script from 'next/script';
import { GetServerSidePropsContext } from 'next';
import Footer from '@/components/layout/footers/Footer';
import Navbar from '@/components/layout/navbars/Navbar';
import Layout from '@/components/layout/Layout';
import cookies from '@/lib/cookies';
import FAQSection from '@/components/shared/sections/FaqSection';
import { sm_faq, sm_breadcrumb } from '@/components/utils/schema-markup-generator';
import BestStorageSection from '@/components/pricing/NewBestStorageSection';
import FileParallaxSection from '@/components/home/FileParallaxSection';
import usePricing from '@/hooks/usePricing';
import { Interval, stripeService } from '@/services/stripe.service';
import { PricingText } from '@/assets/types/pricing';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { PromoCodeName } from '@/lib/types';
import FloatingCtaSectionv2 from '@/components/shared/FloatingCtaSectionV2';
import HorizontalScrollableSection from '@/components/shared/HorizontalScrollableSection';
import ComparisonTableSection from '@/components/pricing/ComparisonPlansTable';

import { SwitchButtonOptions, SwitchStorageOptions } from '@/components/shared/pricing/components/PlanSelector';
import { SwitchStorageBusinessOptions } from '@/components/shared/pricing/components/Switch';
import { usePlanSelection } from '@/hooks/usePlanSelection';
import { PricingSectionWrapperForPricing } from '@/components/shared/pricing/PricingSectionWrapperForPricing';

interface PricingProps {
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  footerLang: FooterText;
  lang: string;
  textContent: PricingText;
  startIndividualPlansFromInterval?: Interval;
  startBusinessPlansFromInterval?: Interval;
  popularPlanBySize?: string;
  startFromPlan?: SwitchButtonOptions;
  startFromStorage?: SwitchStorageOptions;
  startFromBusinessStorage?: SwitchStorageBusinessOptions;
}

const Pricing = ({
  metatagsDescriptions,
  navbarLang,
  footerLang,
  lang,
  textContent,
  startIndividualPlansFromInterval = Interval.Lifetime,
  startBusinessPlansFromInterval = Interval.Year,
  startFromPlan = 'Lifetime',
  startFromStorage = 'Premium',
  startFromBusinessStorage = 'Pro',
}: PricingProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'pricing');

  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
    lifetimeCoupon: lifetimeCoupon,
    lifetimeCoupons,
  } = usePricing({
    couponCode: PromoCodeName.SoftSales85,
    couponCodeForLifetime: PromoCodeName.SoftSales85,
  });

  const [pageName, setPageName] = useState('Pricing Individuals Annually');
  const [isBusiness, setIsBusiness] = useState<boolean>(false);

  const infoText = isBusiness ? textContent.InfoSectionForBusiness : textContent.InfoSection;
  const faqSection = isBusiness ? textContent.FaqSectionForBusiness : textContent.FaqSection;

  const onBusinessPlansSelected = (isBusiness: boolean) => {
    setIsBusiness(isBusiness);
  };

  const onCheckoutButtonClicked = (priceId: string, isCheckoutForLifetime: boolean) => {
    const couponCodeForCheckout = isCheckoutForLifetime ? lifetimeCoupon : individualCoupon;

    stripeService.redirectToCheckout(
      priceId,
      currencyValue,
      'individual',
      isCheckoutForLifetime,
      couponCodeForCheckout?.name,
    );
  };

  const {
    activeSwitchPlan,
    activeStoragePlan,
    activeBusinessStoragePlan,
    billingFrequency,
    businessBillingFrequency,
    onPlanTypeChange,
    onStorageChange,
    onBusinessStorageChange,
    onIndividualSwitchToggled,
    onBusinessSwitchToggled,
  } = usePlanSelection(
    startFromPlan,
    startFromStorage,
    startFromBusinessStorage,
    startIndividualPlansFromInterval,
    startBusinessPlansFromInterval,
    setPageName,
  );

  const decimalDiscountForLifetime = lifetimeCoupon?.percentOff && 100 - lifetimeCoupon.percentOff;
  const decimalDiscount = individualCoupon?.percentOff && 100 - individualCoupon.percentOff;
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

        <PricingSectionWrapperForPricing
          textContent={textContent.tableSection}
          decimalDiscount={{
            individuals: decimalDiscount,
            lifetime: decimalDiscountForLifetime,
          }}
          lang={lang}
          products={products}
          loadingCards={loadingCards}
          handlePageNameUpdate={setPageName}
          onBusinessPlansSelected={onBusinessPlansSelected}
          onCheckoutButtonClicked={onCheckoutButtonClicked}
          lifetimeCoupons={lifetimeCoupons}
          hideBusinessCards
          hideBusinessSelector
          hideSwitchSelector
          backgroundGradientColor="linear-gradient(360deg, #F4F8FF 0%, #FFFFFF 100%)"
          sectionDetails="pt-20 lg:py-20"
          billingFrequency={billingFrequency}
          activeSwitchPlan={activeSwitchPlan}
          businessBillingFrequency={businessBillingFrequency}
          popularPlanBySize={'3TB'}
          onPlanTypeChange={onPlanTypeChange}
          onIndividualSwitchToggled={onIndividualSwitchToggled}
          onBusinessSwitchToggled={onBusinessSwitchToggled}
          activeBusinessStoragePlan={activeBusinessStoragePlan}
          onBusinessStorageChange={onBusinessStorageChange}
          onStorageChange={onStorageChange}
          activeStoragePlan={activeStoragePlan}
        />

        <HorizontalScrollableSection textContent={infoText} />

        <BestStorageSection textContent={textContent.BestStorageSection} />

        <FileParallaxSection />

        <ComparisonTableSection
          textContent={textContent.ComparisonTable}
          onCheckoutButtonClicked={onCheckoutButtonClicked}
          products={products}
          billingFrequency={billingFrequency}
          decimalDiscount={decimalDiscount}
          currencyValue={currencyValue}
        />

        <FAQSection textContent={faqSection} />

        <FloatingCtaSectionv2
          textContent={textContent.lastCtaSection}
          url={'/pricing'}
          customText={
            <div className="flex flex-col items-center gap-4 px-10 text-center lg:px-0">
              <p className="text-2xl font-semibold leading-tight text-gray-95 lg:text-4xl">
                {textContent.lastCtaSection.title}
              </p>
              <p className="text-base font-normal leading-tight text-gray-55 lg:w-[633px] lg:text-center lg:text-xl">
                {textContent.lastCtaSection.description}
              </p>
            </div>
          }
          bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
          containerDetails="shadow-lg backdrop-blur-[55px]"
          bgPadding="lg:pb-20 pb-20"
        />

        <Footer textContent={footerLang} lang={lang} hideNewsletter={false} />
      </Layout>
    </>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
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
