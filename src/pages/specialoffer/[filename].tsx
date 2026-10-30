/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/layout/Layout';
import Script from 'next/script';
import { PromoCodeName } from '@/lib/types';
import { saveCelloFirstVisit, isCelloExpired } from '@/lib/cookies';
import { buildLocalizedPaths } from '@/lib/helpers/staticPaths';
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
import { stripeService } from '@/services/stripe.service';
import { SpecialOfferText } from '@/assets/types/specialOfferTemplate';

interface CombinedSpecialOfferProps {
  darkMode?: boolean;
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  langJson: SpecialOfferText;
  footerLang: FooterText;
  pathname: string;
  lang: string;
}

const ALLOWED_PATHS = [
  'bevalk',
  'tokinprivacy',
  'reddit',
  'trickyhash',
  'toquederetoque',
  'vipvlc',
  'grabon',
  'pcmag',
  'nextjump',
  'kripesh',
  'rclone',
  'love',
  'nomadz',
  'yrj',
  'moonrover',
  'icw',
  'fb',
  'dgmax',
];

const ALTERNATE_RECOMENDATED_PLAN_PATHS = ['grabon', 'kripesh', 'rclone'];
const DARK_MODE_PATHS = ['baity'];
const VALENTINES_GRADIENT_DARK = 'bg-[linear-gradient(180deg,#1C1C1C_0%,#2A1420_100%)]';
const VALENTINES_GRADIENT_LIGHT =
  'bg-[linear-gradient(180deg,#FFFFFF_0%,#FFF2F8_100%)] dark:bg-[linear-gradient(180deg,#1C1C1C_0%,#2A1420_100%)]';
const ANNUAL_DISCOUNT_PLANS_PATHS = ['grabon', 'pcmag'];

const COUPON_CODES = {
  bevalk: PromoCodeName.Bevalk,
  tokinprivacy: PromoCodeName.TokinPrivacy,
  trickyhash: PromoCodeName.Secure,
  reddit: PromoCodeName.Reddit,
  vipvlc: PromoCodeName.VIPVLC,
  grabon: PromoCodeName.GRABON,
  pcmag: PromoCodeName.PcmagCoupon,
  kripesh: PromoCodeName.FreePlanUpsell,
  rclone: PromoCodeName.Rclone,
  love: PromoCodeName.love,
  nomadz: PromoCodeName.nomadz,
  yrj: PromoCodeName.yrj,
  moonrover: PromoCodeName.moonrover,
  icw: PromoCodeName.icw,
  fb: PromoCodeName.Facebook,
  dgmax: PromoCodeName.dgmax,
};

function CombinedSpecialOffer({
  darkMode = false,
  langJson,
  lang,
  metatagsDescriptions,
  footerLang,
  navbarLang,
  pathname,
}: CombinedSpecialOfferProps): JSX.Element {
  const router = useRouter();
  const [isCelloAttributionExpired, setIsCelloAttributionExpired] = useState(true);
  const selectedPathname = ALLOWED_PATHS.find((p) => p === pathname);
  const isDarkMode = darkMode || (selectedPathname ? DARK_MODE_PATHS.includes(selectedPathname) : false);
  const valentinesGradient = isDarkMode ? VALENTINES_GRADIENT_DARK : VALENTINES_GRADIENT_LIGHT;
  const isValentinesMode = selectedPathname === 'love';
  const isPcMag = selectedPathname === 'pcmag';
  const annualPlans = selectedPathname ? ANNUAL_DISCOUNT_PLANS_PATHS.includes(selectedPathname) : false;

  const alternateRecommendedPlan = selectedPathname
    ? !ALTERNATE_RECOMENDATED_PLAN_PATHS.includes(selectedPathname)
    : false;

  useEffect(() => {
    if (!selectedPathname) {
      router.replace('/specialoffer');
    }
  }, [selectedPathname, router]);

  useEffect(() => {
    saveCelloFirstVisit();
    setIsCelloAttributionExpired(isCelloExpired());
  }, []);

  const couponCode = COUPON_CODES[pathname];
  const metatags = metatagsDescriptions.find((desc) => desc.id === 'special-offer');

  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
    lifetimeCoupon: lifetimeCoupon,
    lifetimeCoupons,
  } = usePricing({
    couponCode: annualPlans ? couponCode : undefined,
    couponCodeForLifetime: couponCode,
  });

  const decimalDiscount = individualCoupon?.percentOff && 100 - individualCoupon.percentOff;
  const decimalDiscountForLifetime = lifetimeCoupon?.percentOff && 100 - lifetimeCoupon.percentOff;

  const percentOff = lifetimeCoupon?.percentOff === undefined ? '0' : String(lifetimeCoupon.percentOff);

  const parsePercentText = (text: string) => {
    if (!individualCoupon?.percentOff) {
      return <div className={`h-4 w-16 animate-pulse rounded ${darkMode ? 'bg-gray-71' : 'bg-gray-10 dark:bg-gray-71'}`}></div>;
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

  if (!selectedPathname) {
    return <></>;
  }

  const HeroImage = isValentinesMode ? 'valentines' : 'internxt-private-cloud';

  return (
    <Layout
      title={metatags!.title}
      description={metatags!.description}
      segmentName="Partners"
      lang={lang}
      robots={pathname === 'fb' ? 'noindex, nofollow' : 'noindex, follow'}
    >
      {!isCelloAttributionExpired && (
        <Script
          src="https://assets.cello.so/attribution/latest/cello-attribution.js"
          type="module"
          strategy="afterInteractive"
        />
      )}
      <Navbar lang={lang} textContent={navbarLang} cta={['payment']} isLinksHidden hideLogoLink hideCTA />

      <HeroSection
        textContent={langJson.HeroSection}
        percentOff={percentOff}
        darkMode={isDarkMode}
        image={HeroImage}
        isValentinesMode={isValentinesMode}
        isPcMag={isPcMag}
        annualPlans={annualPlans}
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
        popularPlanBySize="5TB"
        sectionDetails={`${isDarkMode ? 'bg-gray-95' : 'bg-white dark:bg-gray-95'} lg:py-20`}
        hideFreeCard
        darkMode={isDarkMode}
        differentRecommended={alternateRecommendedPlan}
        showPromo
        backgroundGradientColor={isValentinesMode ? valentinesGradient : undefined}
      />

      <FloatingCtaSectionv2
        textContent={langJson.ctaSection}
        url={'/pricing'}
        customText={
          <div className="flex flex-col items-center gap-4 px-10 text-center lg:px-0">
            <p
              className={`text-2xl font-semibold leading-tight lg:text-4xl ${isDarkMode ? 'text-white' : 'text-gray-95 dark:text-white'}`}
            >
              {parsePercentText(langJson.ctaSection.title)}
            </p>
            <p
              className={`text-base font-normal leading-tight lg:text-center lg:text-xl ${isDarkMode ? 'text-white lg:w-[690px]' : 'text-gray-55 lg:w-[698px] dark:text-white dark:lg:w-[690px]'}`}
            >
              {parsePercentText(langJson.ctaSection.description)}
            </p>
          </div>
        }
        containerDetails="shadow-lg backdrop-blur-[55px]"
        bgGradientContainerColor={isDarkMode ? 'bg-[linear-gradient(115.95deg,rgba(255,255,255,0.3)_10.92%,rgba(255,255,255,0.08)_96.4%)]' : 'bg-[linear-gradient(115.95deg,rgba(244,248,255,0.75)_10.92%,rgba(255,255,255,0.08)_96.4%)]'}
        bgPadding={
          isValentinesMode
            ? 'bg-pink-0 pb-10  lg:py-10'
            : isDarkMode
            ? 'pb-10  lg:pt-10 bg-gray-95'
            : 'pb-10 lg:py-10 dark:pb-10 dark:lg:pt-10 dark:bg-gray-95'
        }
        bgGradientColor={
          isValentinesMode || isDarkMode ? undefined : 'bg-[linear-gradient(0deg,#F4F8FF_0%,#FFFFFF_100%)] dark:bg-none'
        }
      />

      <HorizontalScrollableSection
        textContent={langJson.NextGenSection}
        darkMode={isDarkMode}
        isValentinesMode={isValentinesMode}
      />

      <TrustedSection
        textContent={langJson.TrustedBySection}
        bottomBar={false}
        darkMode={isDarkMode}
        isValentinesMode={isValentinesMode}
      />

      <FloatingCtaSectionv2
        textContent={langJson.ctaSection2}
        url={'/pricing'}
        customText={
          <div className="flex flex-col items-center gap-4 px-10 text-center lg:px-40">
            <p
              className={`text-2xl font-semibold leading-tight lg:text-4xl ${isDarkMode ? 'text-white' : 'text-gray-95 dark:text-white'}`}
            >
              {parsePercentText(langJson.ctaSection2.title)}
            </p>
            <p
              className={`text-base font-normal leading-tight lg:text-center lg:text-xl ${isDarkMode ? 'text-white lg:w-full' : 'text-gray-55 lg:w-full dark:text-white dark:lg:w-full'}`}
            >
              {parsePercentText(langJson.ctaSection2.description)}
            </p>
          </div>
        }
        containerDetails="shadow-lg backdrop-blur-[55px]"
        bgGradientContainerColor={isDarkMode ? 'bg-[linear-gradient(115.95deg,rgba(255,255,255,0.3)_10.92%,rgba(255,255,255,0.08)_96.4%)]' : 'bg-[linear-gradient(115.95deg,rgba(244,248,255,0.75)_10.92%,rgba(255,255,255,0.08)_96.4%)]'}
        bgPadding={isDarkMode ? 'lg:pb-10  bg-gray-95' : 'lg:pb-20 pb-10 dark:lg:pb-10 dark:bg-gray-95'}
        bgGradientColor={isDarkMode ? '' : 'bg-[linear-gradient(0deg,#F4F8FF_0%,#FFFFFF_100%)] dark:bg-none'}
      />

      <Footer textContent={footerLang} lang={lang} darkMode={isDarkMode} />
    </Layout>
  );
}

export async function getStaticPaths({ locales }) {
  return {
    paths: buildLocalizedPaths(locales, ALLOWED_PATHS),
    fallback: 'blocking',
  };
}

export async function getStaticProps(ctx) {
  const lang = ctx.locale;
  const pathname = ctx.params.filename;

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
