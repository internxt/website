/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Layout from '@/components/layout/Layout';
import Footer from '@/components/layout/footers/Footer';
import usePricing from '@/hooks/usePricing';
import Navbar from '@/components/layout/navbars/Navbar';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import HeroSection from '@/components/partnersTemplate/HeroSection';
import TrustedSection from '@/components/home/TrustedSection';
import HorizontalScrollableSection from '@/components/shared/HorizontalScrollableSection';
import ReviewsSection from '@/components/home/ReviewsSection';
import FloatingCtaSectionv2 from '@/components/shared/FloatingCtaSectionV2';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import { stripeService } from '@/services/stripe.service';
import { SpecialOfferText } from '@/assets/types/specialOfferTemplate';
import FeaturesSection from '@/components/drive/FeaturesSection';
import { PromoCodeName } from '@/lib/types';

interface PrivacyTutorProps {
  darkMode?: boolean;
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  langJson: SpecialOfferText;
  footerLang: FooterText;
  lang: string;
  hideLanguage?: boolean;
}

function PrivacyTutor({
  darkMode = false,
  langJson,
  lang,
  metatagsDescriptions,
  footerLang,
  navbarLang,
  hideLanguage,
}: Readonly<PrivacyTutorProps>): JSX.Element {

  const {
    products,
    currencyValue,
    coupon: individualCoupon,
    lifetimeCoupon,
    lifetimeCoupons,
  } = usePricing({
    couponCode: PromoCodeName.privacyTutor,
    couponCodeForLifetime: PromoCodeName.privacyTutor,
  });

  const metatags = metatagsDescriptions.find((desc) => desc.id === 'special-offer');
  const decimalDiscountForLifetime = lifetimeCoupon?.percentOff && 100 - lifetimeCoupon.percentOff;
  const decimalDiscount = individualCoupon?.percentOff && 100 - individualCoupon.percentOff;
  const percentOff = lifetimeCoupon?.percentOff === undefined ? '0' : String(lifetimeCoupon.percentOff);

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

  const parsePercentText = (text: string) => {
    if (!percentOff || percentOff === '0') {
      return <div className={`h-4 w-16 animate-pulse rounded ${darkMode ? 'bg-gray-71' : 'bg-gray-10'}`}></div>;
    }
    return typeof text === 'string' ? text.replace(/{{discount}}/g, percentOff) : text;
  };

  return (
    <Layout
      title={metatags!.title}
      description={metatags!.description}
      segmentName="Partners"
      lang={lang}
    >
      <Navbar
        lang={lang}
        textContent={navbarLang}
        cta={['payment']}
        isLinksHidden
        hideCTA
        hideLogoLink
        hideLanguage={hideLanguage}
      />

      <HeroSection
        textContent={langJson.HeroSection}
        percentOff={percentOff}
        isPrivacyTutor
        image={'alohomora'}
        darkMode={darkMode}
      />

      <ReviewsSection textContent={langJson.ReviewSection} darkMode={darkMode} />

      <TrustedSection textContent={langJson.TrustedBySection} bottomBar={false} darkMode={darkMode} />

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
        popularPlanBySize="5TB"
        sectionDetails={`lg:py-20 ${darkMode ? 'bg-[#1C1C1C]' : ''}`}
        hideFreeCard
        backgroundGradientColor={
          darkMode
            ? 'linear-gradient(180deg, #0D0D0D 0%, #1C1C1C 100%)'
            : 'linear-gradient(180deg, #F4F8FF 0%, #FFFFFF 100%)'
        }
        darkMode={darkMode}
      />

      <FeaturesSection
        textContent={langJson.FeaturesSection}
        lang={lang}
        download={false}
        showLastSection={false}
        darkMode={darkMode}
      />

      <FloatingCtaSectionv2
          textContent={langJson.ctaSection}
          customText={
          <div className="flex flex-col items-center gap-4 px-10 text-center lg:px-20">
            <p
              className={`text-2xl font-semibold leading-tight ${
                darkMode ? 'text-white-95' : 'text-gray-95'
              } lg:text-4xl`}
            >
              {parsePercentText(langJson.ctaSection.title)}
            </p>
            <p
              className={`text-base font-normal leading-tight ${
                darkMode ? 'text-green-120' : 'text-gray-55'
              }  lg:text-center lg:text-xl`}
            >
              {parsePercentText(langJson.ctaSection.description)}
            </p>
          </div>
        }
          url="#billingButtons"
          bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
        bgGradientColor={
          darkMode
            ? 'linear-gradient(180deg, #1C1C1C 0%, #0D0D0D 100%)'
            : 'linear-gradient(180deg, #FFFFFF 0%, #F4F8FF 100%)'
        }
          containerDetails="shadow-lg backdrop-blur-[55px]"
          bgPadding="lg:py-20"
          darkMode={darkMode}
        />

      <HorizontalScrollableSection 
        textContent={langJson.NextGenSection}
        bgGradient={
          darkMode
            ? 'linear-gradient(180deg, #0D0D0D 80%, #1C1C1C 100%)'
            : 'linear-gradient(180deg, #F4F8FF 80%, #FFFFFF 100%)'
        }
        darkMode={darkMode}
      />

      <Footer textContent={footerLang} lang={lang} darkMode={darkMode} />
    </Layout>
  );
}

export async function getStaticProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const langJson = require(`@/assets/lang/${lang}/alohomora-youtube.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  return {
    props: {
      lang,
      metatagsDescriptions,
      navbarLang,
      langJson,
      footerLang,
    },
  };
}

export default PrivacyTutor;
