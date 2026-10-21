import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { BlackFridayPpcText } from '@/assets/types/blackFridayPpc';
import { MinimalFooter } from '@/components/layout/footers/MinimalFooter';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import HeroSection from '@/components/deals/HeroSection';
import CoreFeaturesSection from '@/components/drive/CoreFeaturesSection';
import ReviewsSection from '@/components/home/ReviewsSection';
import FloatingCtaSectionv2 from '@/components/shared/FloatingCtaSectionV2';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import FAQSection from '@/components/shared/sections/FaqSection';
import ThreeCardsSection from '@/components/shared/sections/ThreeCardsSection';
import usePricing from '@/hooks/usePricing';
import { ReactNode } from 'react';
import { PromoCodeName } from '@/lib/types';
import { stripeService } from '@/services/stripe.service';

const CTA_ANCHOR = '#billingButtons';
const PERCENT_PLACEHOLDER = /\{\{(?:percentage|discount)\}\}/;
const PERCENT_PLACEHOLDER_GLOBAL = /\{\{(?:percentage|discount)\}\}/g;

const renderWithDiscount = (text: string, discount: string | null): ReactNode => {
  if (typeof text !== 'string' || !PERCENT_PLACEHOLDER.test(text)) {
    return text;
  }

  if (discount !== null) {
    return text.replace(PERCENT_PLACEHOLDER_GLOBAL, discount);
  }

  const [beforePercent, afterPercent] = text.split(PERCENT_PLACEHOLDER_GLOBAL);

  return (
    <>
      {beforePercent}
      <span className="mx-1 inline-block h-4 w-10 animate-pulse rounded bg-white/20 align-middle" />
      {afterPercent}
    </>
  );
};

interface BlackFridayPpcConfig {
  heroImage: string;
  metatagsId: string;
  couponCode?: PromoCodeName;
  couponCodeForLifetime?: PromoCodeName;
  popularPlanSize?: string;
}

interface BlackFridayPpcTemplateProps {
  lang: string;
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  textContent: BlackFridayPpcText;
  footerLang: FooterText;
  config: BlackFridayPpcConfig;
}

const BlackFridayPpcTemplate = ({
  lang,
  metatagsDescriptions,
  navbarLang,
  textContent,
  footerLang,
  config,
}: BlackFridayPpcTemplateProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === config.metatagsId);

  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
    lifetimeCoupon,
    lifetimeCoupons,
  } = usePricing({
    couponCode: config.couponCode,
    couponCodeForLifetime: config.couponCodeForLifetime,
  });

  const decimalDiscount = individualCoupon?.percentOff && 100 - individualCoupon.percentOff;
  const decimalDiscountForLifetime = lifetimeCoupon?.percentOff && 100 - lifetimeCoupon.percentOff;
  const percentOff = lifetimeCoupon?.percentOff === undefined ? '0' : String(lifetimeCoupon.percentOff);
  const discount = percentOff === '0' ? null : percentOff;

  const onCheckoutButtonClicked = async (
    priceId: string,
    isCheckoutForLifetime: boolean,
    interval: string,
    storage: string,
  ) => {
    const couponCodeForCheckout = isCheckoutForLifetime ? lifetimeCoupon : individualCoupon;

    const finalPrice = await stripeService.calculateFinalPrice(
      priceId,
      interval,
      currencyValue,
      'individuals',
      couponCodeForCheckout,
    );

    stripeService.redirectToCheckout(
      priceId,
      finalPrice,
      currencyValue,
      'individual',
      isCheckoutForLifetime,
      interval,
      storage,
      couponCodeForCheckout?.name,
    );
  };

  return (
    <Layout
      title={metatags[0].title}
      description={metatags[0].description}
      segmentName="PPC Black Friday"
      lang={lang}
      robots="noindex, follow"
    >
      <Navbar textContent={navbarLang} lang={lang} cta={['chooseStorage']} fixed />

      <HeroSection textContent={textContent.HeroSection} percentOff={percentOff} darkMode image={config.heroImage} />

      <PricingSectionWrapper
        textContent={textContent.TableSection}
        decimalDiscount={{
          individuals: decimalDiscount,
          lifetime: decimalDiscountForLifetime,
        }}
        lifetimeCoupons={lifetimeCoupons}
        lang={lang}
        products={products}
        loadingCards={loadingCards}
        onCheckoutButtonClicked={onCheckoutButtonClicked}
        popularPlanBySize={config.popularPlanSize ?? '5TB'}
        sectionDetails="bg-[#1C1C1C] lg:py-20"
        darkMode
        hideFreeCard
      />

      <ReviewsSection textContent={textContent.ReviewSection} darkMode />

      <ThreeCardsSection textContent={textContent.WhyChooseSection} darkMode topSeparationBar={false} />

      <CoreFeaturesSection textContent={textContent.CoreFeatures} darkMode needsDivider />

      <FloatingCtaSectionv2
        textContent={textContent.CtaSection}
        url={CTA_ANCHOR}
        customText={
          <div className="flex flex-col items-center gap-4 px-10 text-center lg:px-0">
            <h2 className="text-2xl font-semibold leading-tight text-white lg:text-4xl">
              {renderWithDiscount(textContent.CtaSection.title, discount)}
            </h2>
            <p className="text-base font-normal leading-tight text-white lg:w-[633px] lg:text-center lg:text-xl">
              {textContent.CtaSection.guarantee}
            </p>
          </div>
        }
        containerDetails="shadow-lg backdrop-blur-[55px]"
        bgGradientContainerColor="linear-gradient(115.95deg, rgba(255, 255, 255, 0.3) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
        bgPadding="py-10 lg:py-20 bg-[#1C1C1C]"
      />

      <FAQSection
        textContent={textContent.FaqSection}
        bgColor="bg-[#1C1C1C] text-white"
        cardColor="bg-[#1C1C1C]"
        textColor="text-white"
        percentageDiscount={percentOff}
        needsH2
      />

      <MinimalFooter
        footerLang={footerLang.FooterSection}
        lang={lang}
        bgColor="bg-[#1C1C1C]"
        logoColor="white"
        textColor="text-gray-50"
      />
    </Layout>
  );
};

export default BlackFridayPpcTemplate;
