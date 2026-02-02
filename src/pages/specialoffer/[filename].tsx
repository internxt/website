/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/layout/Layout';
import { PromoCodeName } from '@/lib/types';
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

interface CombinedSpecialOfferProps {
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
];

const ALTERNATE_RECOMENDATED_PLAN_PATHS = ['grabon', 'kripesh'];
const DARK_MODE_PATHS = ['baity'];

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
};

function CombinedSpecialOffer({
  langJson,
  lang,
  metatagsDescriptions,
  footerLang,
  navbarLang,
  pathname,
}: CombinedSpecialOfferProps): JSX.Element {
  const router = useRouter();
  const selectedPathname = ALLOWED_PATHS.find((p) => p === pathname);
  const isDarkMode = selectedPathname ? DARK_MODE_PATHS.includes(selectedPathname) : false;

  const alternateRecommendedPlan = selectedPathname
    ? !ALTERNATE_RECOMENDATED_PLAN_PATHS.includes(selectedPathname)
    : false;

  useEffect(() => {
    if (!selectedPathname) {
      router.replace('/specialoffer');
    }
  }, [selectedPathname, router]);

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
    couponCode: couponCode,
    couponCodeForLifetime: couponCode,
  });

  const decimalDiscount = individualCoupon?.percentOff && 100 - individualCoupon.percentOff;
  const decimalDiscountForLifetime = lifetimeCoupon?.percentOff && 100 - lifetimeCoupon.percentOff;

  const percentOff = individualCoupon?.percentOff !== undefined ? String(individualCoupon.percentOff) : '0';

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

  if (!selectedPathname) {
    return <></>;
  }

  return (
    <Layout title={metatags!.title} description={metatags!.description} segmentName="Partners" lang={lang}>
      <Navbar lang={lang} textContent={navbarLang} cta={['payment']} isLinksHidden hideLogoLink hideCTA />

      <HeroSection
        textContent={langJson.HeroSection}
        percentOff={percentOff}
        darkMode={isDarkMode}
        image={'internxt-private-cloud'}
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
        popularPlanBySize="3TB"
        sectionDetails={`${isDarkMode ? 'bg-[#1C1C1C]' : 'bg-white'} lg:py-20`}
        hideFreeCard
        darkMode={isDarkMode}
        differentRecommended={alternateRecommendedPlan}
        showPromo
      />

      <FloatingCtaSectionv2
        textContent={langJson.ctaSection}
        url={'/pricing'}
        customText={
          <div className="flex flex-col items-center gap-4 px-10 text-center lg:px-0">
            <p
              className={`text-2xl font-semibold leading-tight lg:text-4xl ${
                isDarkMode ? 'text-white' : 'text-gray-95'
              }`}
            >
              {parsePercentText(langJson.ctaSection.title)}
            </p>
            <p
              className={`text-base font-normal leading-tight lg:text-center lg:text-xl ${
                isDarkMode ? 'text-white lg:w-[690px]' : 'text-gray-55 lg:w-[698px]'
              }`}
            >
              {parsePercentText(langJson.ctaSection.description)}
            </p>
          </div>
        }
        containerDetails="shadow-lg backdrop-blur-[55px]"
        bgGradientContainerColor={
          isDarkMode
            ? 'linear-gradient(115.95deg, rgba(255, 255, 255, 0.3) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)'
            : 'linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)'
        }
        bgPadding={isDarkMode ? 'pb-10  lg:pt-10 bg-[#1C1C1C]' : 'pb-10  lg:py-10'}
        bgGradientColor={isDarkMode ? undefined : 'linear-gradient(0deg, #F4F8FF 0%, #FFFFFF 100%)'}
      />

      <HorizontalScrollableSection textContent={langJson.NextGenSection} darkMode={isDarkMode} />

      <TrustedSection textContent={langJson.TrustedBySection} bottomBar={false} darkMode={isDarkMode} />

      <FloatingCtaSectionv2
        textContent={langJson.ctaSection2}
        url={'/pricing'}
        customText={
          <div className="flex flex-col items-center gap-4 px-10 text-center lg:px-0">
            <p
              className={`text-2xl font-semibold leading-tight lg:text-4xl ${
                isDarkMode ? 'text-white' : 'text-gray-95'
              }`}
            >
              {parsePercentText(langJson.ctaSection2.title)}
            </p>
            <p
              className={`text-base font-normal leading-tight lg:text-center lg:text-xl ${
                isDarkMode ? 'text-white lg:w-[633px]' : 'text-gray-55 lg:w-[698px]'
              }`}
            >
              {parsePercentText(langJson.ctaSection2.description)}
            </p>
          </div>
        }
        containerDetails="shadow-lg backdrop-blur-[55px]"
        bgGradientContainerColor={
          isDarkMode
            ? 'linear-gradient(115.95deg, rgba(255, 255, 255, 0.3) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)'
            : 'linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)'
        }
        bgPadding={isDarkMode ? 'lg:pb-10  bg-[#1C1C1C]' : 'lg:pb-20 pb-10'}
        bgGradientColor={isDarkMode ? undefined : 'linear-gradient(0deg, #F4F8FF 0%, #FFFFFF 100%)'}
      />

      <Footer textContent={footerLang} lang={lang} darkMode={isDarkMode} />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
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
