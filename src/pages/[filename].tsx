/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Layout from '@/components/layout/Layout';
import Footer from '@/components/layout/footers/Footer';
import usePricing from '@/hooks/usePricing';
import Navbar from '@/components/layout/navbars/Navbar';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import HeroSection from '@/components/partnersTemplate/HeroSection';
import ReviewsSection from '@/components/home/ReviewsSection';
import TrustedSection from '@/components/home/TrustedSection';
import HorizontalScrollableSection from '@/components/home/HorizontalScrollableSection';
import FloatingCtaSectionv2 from '@/components/shared/FloatingCtaSectionV2';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import { stripeService } from '@/services/stripe.service';
import { SpecialOfferText } from '@/assets/types/specialOfferTemplate';
import { useOfferConfig, usePathRedirect } from '@/hooks/useSpecialOfferConfig';
import FeaturesSection from '@/components/drive/FeaturesSection';

interface CombinedSpecialOfferProps {
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  langJson: SpecialOfferText;
  footerLang: FooterText;
  pathname: string;
  lang: string;
}

const getThemeClasses = (isDarkMode: boolean) => ({
  title: isDarkMode ? 'text-white' : 'text-gray-95',
  description: isDarkMode ? 'text-white' : 'text-gray-55',
  bgGradientContainer: isDarkMode
    ? 'linear-gradient(115.95deg, rgba(255, 255, 255, 0.3) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)'
    : 'linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)',
  bgGradient: isDarkMode ? undefined : 'linear-gradient(0deg, #F4F8FF 0%, #FFFFFF 100%)',
  sectionBg: isDarkMode ? 'bg-[#1C1C1C]' : 'bg-white',
});

const renderCtaContent = (
  title: string,
  description: string,
  parsePercentText: (text: string) => JSX.Element | string,
  themeClasses: ReturnType<typeof getThemeClasses>,
  descriptionWidth: string,
) => (
  <div className="flex flex-col items-center gap-4 px-10 text-center lg:px-0">
    <p className={`text-2xl font-semibold leading-tight lg:text-4xl ${themeClasses.title}`}>
      {parsePercentText(title)}
    </p>
    <p
      className={`text-base font-normal leading-tight lg:text-center lg:text-xl ${themeClasses.description} ${descriptionWidth}`}
    >
      {parsePercentText(description)}
    </p>
  </div>
);

function CombinedSpecialOffer({
  langJson,
  lang,
  metatagsDescriptions,
  footerLang,
  navbarLang,
  pathname,
}: CombinedSpecialOfferProps): JSX.Element {
  const { selectedPathname, isDarkMode, alternateRecommendedPlan, couponCode, alternativeImages } =
    useOfferConfig(pathname);

  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
    lifetimeCoupon: lifetimeCoupon,
    lifetimeCoupons,
  } = usePricing({
    couponCode: couponCode,
    couponCodeForLifetime: couponCode,
  });

  usePathRedirect(selectedPathname);

  if (!selectedPathname) {
    return <></>;
  }

  const metatags = metatagsDescriptions.find((desc) => desc.id === 'special-offer');
  const decimalDiscount = individualCoupon?.percentOff && 100 - individualCoupon.percentOff;
  const decimalDiscountForLifetime = lifetimeCoupon?.percentOff && 100 - lifetimeCoupon.percentOff;
  const percentOff = individualCoupon?.percentOff !== undefined ? String(individualCoupon.percentOff) : '0';
  const themeClasses = getThemeClasses(isDarkMode);

  const parsePercentText = (text: string) => {
    if (!individualCoupon?.percentOff) {
      return <div className="bg-gray-200 h-4 w-16 animate-pulse rounded"></div>;
    }
    return typeof text === 'string' ? text.replaceAll('{{discount}}', percentOff) : text;
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

  const navbarCta = 'priceTable';

  return (
    <Layout title={metatags!.title} description={metatags!.description} segmentName="Partners" lang={lang}>
      <Navbar lang={lang} textContent={navbarLang} cta={['payment']} isLinksHidden hideCTA />

      <HeroSection
        textContent={langJson.HeroSection}
        percentOff={percentOff}
        darkMode={isDarkMode}
        image={alternativeImages}
      />

      <ReviewsSection textContent={langJson.ReviewSection} darkMode={isDarkMode} />

      <PricingSectionWrapper
        textContent={langJson.tableSection}
        decimalDiscount={{
          individuals: decimalDiscount,
          lifetime: decimalDiscountForLifetime,
        }}
        lifetimeCoupons={lifetimeCoupons}
        lang={lang}
        products={products}
        loadingCards={loadingCards}
        onCheckoutButtonClicked={onCheckoutButtonClicked}
        hideBusinessCards
        hideBusinessSelector
        popularPlanBySize="5TB"
        sectionDetails={`${themeClasses.sectionBg} lg:py-20`}
        hideFreeCard
        darkMode={isDarkMode}
        differentRecommended={alternateRecommendedPlan}
      />

      <FeaturesSection
        textContent={langJson.FeaturesSection}
        lang={lang}
        download={false}
        showLastSection={false}
        darkMode={isDarkMode}
      />

      <FloatingCtaSectionv2
        textContent={langJson.ctaSection}
        url={'/pricing'}
        customText={renderCtaContent(
          langJson.ctaSection.title,
          langJson.ctaSection.description,
          parsePercentText,
          themeClasses,
          'lg:w-[690px]',
        )}
        containerDetails="shadow-lg backdrop-blur-[55px]"
        bgGradientContainerColor={themeClasses.bgGradientContainer}
        bgPadding={isDarkMode ? 'pb-10  lg:pt-10 bg-[#1C1C1C]' : 'pb-10  lg:py-10'}
        bgGradientColor={themeClasses.bgGradient}
      />

      <HorizontalScrollableSection textContent={langJson.NextGenSection} darkMode={isDarkMode} />

      <TrustedSection textContent={langJson.TrustedBySection} bottomBar={false} darkMode={isDarkMode} />

      <FloatingCtaSectionv2
        textContent={langJson.ctaSection2}
        url={'/pricing'}
        customText={renderCtaContent(
          langJson.ctaSection2.title,
          langJson.ctaSection2.description,
          parsePercentText,
          themeClasses,
          'lg:w-[633px]',
        )}
        containerDetails="shadow-lg backdrop-blur-[55px]"
        bgGradientContainerColor={themeClasses.bgGradientContainer}
        bgPadding={isDarkMode ? 'lg:pb-10  bg-[#1C1C1C]' : 'lg:pb-20 pb-10'}
        bgGradientColor={themeClasses.bgGradient}
      />

      <Footer textContent={footerLang} lang={lang} darkMode={isDarkMode} />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const pathname = ctx.params.filename;
  let lang = 'es';

  if (pathname === 'believemy') {
    lang = 'fr';
  }

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const langJson = require(`@/assets/lang/${lang}/specialOfferTemplate.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  return {
    props: {
      lang,
      pathname,
      metatagsDescriptions,
      navbarLang,
      langJson,
      footerLang,
    },
  };
}

export default CombinedSpecialOffer;
