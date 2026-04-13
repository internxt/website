/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Layout from '@/components/layout/Layout';
import Footer from '@/components/layout/footers/Footer';
import usePricing from '@/hooks/usePricing';
import Navbar from '@/components/layout/navbars/Navbar';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import HeroSection from '@/components/partnersTemplate/HeroSection';
import TrustedSection from '@/components/home/TrustedSection';
import HorizontalScrollableSection from '@/components/home/HorizontalScrollableSection';
import ReviewsSection from '@/components/home/ReviewsSection';
import FloatingCtaSectionv2 from '@/components/shared/FloatingCtaSectionV2';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import { Interval, stripeService } from '@/services/stripe.service';
import { SpecialOfferText } from '@/assets/types/specialOfferTemplate';
import { useOfferConfig, usePathRedirect } from '@/hooks/useSpecialOfferConfig';
import FeaturesSection from '@/components/drive/FeaturesSection';
import { HorizontalPriceCard } from '@/components/shared/pricing/PriceCard/HorizontalPriceCard';

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
  <div className="flex flex-col items-center gap-4 px-10 text-center">
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

const LANG_MAP = {
  believemy: 'fr',
  madroz: 'fr',
  justin: 'fr',
  benjamin: 'fr',
  qinhui: 'fr',
  payette: 'en',
  ghareeb: 'en',
  christian: 'en',
  foci: 'en',
  apfelcast: 'de',
  ct3003: 'de',
  ition: 'de',
  neumanndigital: 'de',
  bluewin: 'de',
  tatiana: 'en',
  simon42: 'de',
  heisect: 'de',
  devopstoolbox: 'en',
  bjoern: 'de',
  lefiltre: 'fr',
  annual: 'en',
  ultimate: 'en',
  bunker: 'es',
  speciale: 'it',
  xataka: 'es',
  techradar: 'en',
  shannon: 'en',
  overfl0w: 'fr',
  lefiltreitalia: 'it',
  letosa: 'es',
  genius: 'es',
  cninternxtl: 'en',
  cooltechzone: 'en',
  lifetime: 'en',
  clubic: 'fr',
  morrolinux: 'it',
  tukaram: 'es',
  f4mi: 'en',
  heise: 'de',
  macho: 'en',
  gentiluomodigitale: 'it',
  spencer: 'en',
  nate: 'es',
  shortcircuit: 'en',
  techlinked: 'en',
  techquickie: 'en',
  'last-chance': 'en',
  'earth-day': 'en',
};

function CombinedSpecialOffer({
  langJson,
  lang,
  metatagsDescriptions,
  footerLang,
  navbarLang,
  pathname,
}: CombinedSpecialOfferProps): JSX.Element {
  const {
    selectedPathname,
    isDarkMode,
    alternateRecommendedPlan,
    couponCode,
    alternativeImages,
    onlyUltimatePlan,
    ultimateAndPremiumPlans,
    annualPlans,
    lifetimePlans,
    isClubic,
  } = useOfferConfig(pathname);

  const {
    products,
    currency,
    currencyValue,
    coupon: individualCoupon,
    lifetimeCoupon: lifetimeCoupon,
    lifetimeCoupons,
  } = usePricing({
    couponCode: couponCode,
    couponCodeForLifetime: couponCode,
  });

  const ultimatePlan = products?.individuals?.[Interval.Year]?.find((plan: any) => plan.storage === '5TB');

  usePathRedirect(selectedPathname);

  if (!selectedPathname) {
    return <></>;
  }

  const metatags = metatagsDescriptions.find((desc) => desc.id === 'special-offer');
  const decimalDiscount = individualCoupon?.percentOff && 100 - individualCoupon.percentOff;
  const decimalDiscountForLifetime = lifetimeCoupon?.percentOff && 100 - lifetimeCoupon.percentOff;
  const percentOff = individualCoupon?.percentOff !== undefined ? String(individualCoupon.percentOff) : '0';
  const themeClasses = getThemeClasses(isDarkMode);
  const openerInterval = annualPlans ? Interval.Year : Interval.Lifetime;
  const parsePercentText = (text: string) => {
    if (!individualCoupon?.percentOff) {
      return <div className="bg-gray-200 h-4 w-16 animate-pulse rounded"></div>;
    }
    return typeof text === 'string' ? text.replaceAll('{{discount}}', percentOff) : text;
  };

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
      title={metatags!.title}
      description={metatags!.description}
      segmentName="Partners"
      lang={lang}
      robots={pathname === 'world-backup-day' || pathname === 'earth-day' ? 'noindex,follow' : undefined}
    >
      <Navbar lang={lang} textContent={navbarLang} cta={['payment']} isLinksHidden hideCTA hideLogoLink />

      <HeroSection
        textContent={langJson.HeroSection}
        percentOff={percentOff}
        darkMode={isDarkMode}
        image={alternativeImages}
        isClubic={isClubic}
        isUltimatePlan={onlyUltimatePlan}
      />

      <ReviewsSection textContent={langJson.ReviewSection} darkMode={isDarkMode} />

      {onlyUltimatePlan ? (
        <div className="flex w-full justify-center px-6 py-12 lg:px-0 lg:py-24">
          {ultimatePlan && (
            <HorizontalPriceCard
              decimalDiscountValue={decimalDiscountForLifetime || undefined}
              storage={ultimatePlan.storage}
              popular={false}
              currency={currency}
              priceBefore={ultimatePlan.price.toString().split('.')[0]}
              price={Number(ultimatePlan.price)}
              planId={ultimatePlan.priceId}
              currencyValue={currencyValue}
              coupon={lifetimeCoupon}
            />
          )}
        </div>
      ) : (
        <PricingSectionWrapper
          textContent={langJson.tableSection}
          decimalDiscount={{
            individuals: decimalDiscount,
            lifetime: decimalDiscountForLifetime,
          }}
          lifetimeCoupons={lifetimeCoupons}
          lang={lang}
          products={products}
          loadingCards={false}
          onCheckoutButtonClicked={onCheckoutButtonClicked}
          hideBusinessCards
          hideBusinessSelector
          popularPlanBySize="5TB"
          sectionDetails={`${themeClasses.sectionBg} lg:py-20`}
          hideFreeCard
          darkMode={isDarkMode}
          differentRecommended={alternateRecommendedPlan}
          onlyUltimatePlan={onlyUltimatePlan}
          premiumAndUltimatePlan={ultimateAndPremiumPlans}
          startIndividualPlansFromInterval={openerInterval}
          hidePlanSelectorComponent={annualPlans || lifetimePlans}
        />
      )}

      <FeaturesSection
        textContent={langJson.FeaturesSection}
        lang={lang}
        download={false}
        showLastSection={false}
        darkMode={isDarkMode}
      />

      {!onlyUltimatePlan && (
        <FloatingCtaSectionv2
          textContent={langJson.ctaSection}
          url={'#billingButtons'}
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
        />
      )}

      <TrustedSection textContent={langJson.TrustedBySection} bottomBar={false} darkMode={isDarkMode} />

      <HorizontalScrollableSection textContent={langJson.NextGenSection} darkMode={isDarkMode} />

      <Footer textContent={footerLang} lang={lang} darkMode={isDarkMode} />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const pathname = ctx.params.filename;
  const lang = pathname === 'world-backup-day' && ctx.locale ? ctx.locale : LANG_MAP[pathname] || 'es';

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
