import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import FAQSection from '@/components/shared/sections/FaqSection';
import BestStorageSection from '@/components/pricing/NewBestStorageSection';
import FileParallaxSection from '@/components/home/FileParallaxSection';
import usePricing from '@/hooks/usePricing';
import useCheckout from '@/hooks/useCheckout';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import { PricingText } from '@/assets/types/pricing';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { PromoCodeName } from '@/lib/types';
import FloatingCtaSectionv2 from '@/components/shared/FloatingCtaSectionV2';
import HorizontalScrollableSection from '@/components/shared/HorizontalScrollableSection';
import RelationalLinks from '@/components/shared/sections/RelationalLinks';
import ComparisonTableSection from '@/components/pricing/ComparisonTable';
import { usePlanSelection } from '@/hooks/usePlanSelection';
import { Interval } from '@/services/stripe.service';
import { MinimalFooter } from '@/components/layout/footers/MinimalFooter';
import { MinimalNavbar } from '@/components/layout/navbars/MinimalNavbar';
import { GetStaticPropsContext } from 'next';

interface PricingProps {
  couponCodeName: PromoCodeName;
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  footerLang: FooterText;
  lang: string;
  textContent: PricingText;
  relationalLinksText: any;
}

export const PPCPricingPage = ({
  couponCodeName,
  metatagsDescriptions,
  navbarLang,
  footerLang,
  lang,
  textContent,
  relationalLinksText,
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
    couponCode: couponCodeName,
    couponCodeForLifetime: couponCodeName,
  });

  const [pageName, setPageName] = useState('PPCPricingPage Individuals Annually');
  const [isBusiness, setIsBusiness] = useState<boolean>(false);

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
  } = usePlanSelection('Lifetime', 'Premium', 'Pro', Interval.Lifetime, Interval.Year, setPageName);

  const infoText = isBusiness ? textContent.InfoSectionForBusiness : textContent.InfoSection;
  const faqSection = isBusiness ? textContent.FaqSectionForBusiness : textContent.FaqSection;

  const onBusinessPlansSelected = (isBusiness: boolean) => {
    setIsBusiness(isBusiness);
  };

  const onCheckoutButtonClicked = useCheckout({ individualCoupon, lifetimeCoupon, currencyValue });

  const decimalDiscountForLifetime = lifetimeCoupon?.percentOff && 100 - lifetimeCoupon.percentOff;
  const decimalDiscount = lifetimeCoupon?.percentOff && 100 - lifetimeCoupon.percentOff;

  return (
    <>
      <Layout
        segmentName={`PPC ${pageName}`}
        title={metatags[0].title}
        description={metatags[0].description}
        lang={lang}
        robots="noindex, follow"
      >
        <MinimalNavbar textContent={navbarLang} lang={lang} />

        <PricingSectionWrapper
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
          popularPlanBySize="3TB"
          backgroundGradientColor="linear-gradient(360deg, #F4F8FF 0%, #FFFFFF 100%)"
          sectionDetails="py-10 lg:py-20 lg:pt-32"
          overrideBillingFrequency={billingFrequency}
          overrideBusinessBillingFrequency={businessBillingFrequency}
          overrideActiveSwitchPlan={activeSwitchPlan}
          overrideActiveStoragePlan={activeStoragePlan}
          overrideActiveBusinessStoragePlan={activeBusinessStoragePlan}
          overrideOnPlanTypeChange={onPlanTypeChange}
          overrideOnStorageChange={onStorageChange}
          overrideOnBusinessStorageChange={onBusinessStorageChange}
          overrideOnIndividualSwitchToggled={onIndividualSwitchToggled}
          overrideOnBusinessSwitchToggled={onBusinessSwitchToggled}
          SectionTag={'h1'}
          hideFreeCard
        />

        <HorizontalScrollableSection textContent={infoText} needsH2 needsH3 />

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

        <FAQSection textContent={faqSection} needsH3={false} />

        <RelationalLinks textContent={relationalLinksText} sectionPadding="py-20" openLinksInNewTab />

        <FloatingCtaSectionv2
          textContent={textContent.lastCtaSection}
          url={'#billingButtons'}
          customText={
            <div className="flex flex-col items-center gap-4 px-10 text-center lg:px-0">
              <h2 className="text-2xl font-semibold leading-tight text-gray-95 lg:text-4xl">
                {textContent.lastCtaSection.title}
              </h2>
              <p className="text-base font-normal leading-tight text-gray-55 lg:w-[633px] lg:text-center lg:text-xl">
                {textContent.lastCtaSection.description}
              </p>
            </div>
          }
          bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
          containerDetails="shadow-lg backdrop-blur-[55px]"
          bgPadding="lg:pb-20 pb-20"
        />

        <MinimalFooter footerLang={footerLang.FooterSection} lang={lang} />
      </Layout>
    </>
  );
};

