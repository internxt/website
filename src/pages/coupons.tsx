import { GetServerSidePropsContext } from 'next';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import Footer from '@/components/layout/footers/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import { stripeService } from '@/services/stripe.service';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import FAQSection from '@/components/shared/sections/FaqSection';
import usePricing from '@/hooks/usePricing';
import cookies from '@/lib/cookies';
import { PromoCodeName } from '@/lib/types';
import ReviewsSection from '@/components/home/ReviewsSection';
import { CouponPageText } from '@/assets/types/couponsPage';
import HeroSection from '@/components/coupons/HeroSection';
import HorizontalScrollableSection from '@/components/shared/HorizontalScrollableSection';
import FloatingCtaSectionv2 from '@/components/shared/FloatingCtaSectionV2';
import HorizontalScrollableSectionWithPhotosSection from '@/components/coupons/HorizontalScrollableSectionWithPhotos';
import RedeemCouponsSection from '@/components/coupons/ReedeemCouponSection';

interface HomeProps {
  lang: GetServerSidePropsContext['locale'];
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  textContent: CouponPageText;
  footerLang: FooterText;
}

const HomePage = ({ metatagsDescriptions, textContent, lang, navbarLang, footerLang }: HomeProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'coupons');

  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
    lifetimeCoupon: lifetimeCoupon,
    lifetimeCoupons,
  } = usePricing({
    couponCode: PromoCodeName.FreePlanUpsell,
    couponCodeForLifetime: PromoCodeName.FreePlanUpsell,
  });
  const locale = lang as string;
  const navbarCta = 'chooseStorage';

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

  const decimalDiscountForLifetime = lifetimeCoupon?.percentOff && 100 - lifetimeCoupon.percentOff;
  const decimalDiscount = individualCoupon?.percentOff && 100 - individualCoupon.percentOff;
  const percentOff = lifetimeCoupon?.percentOff !== undefined ? String(lifetimeCoupon.percentOff) : '0';
  const minimumPrice = decimalDiscount !== undefined ? (10 * (decimalDiscount / 100)).toFixed(2) : '9.99';

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Home" lang={lang}>
      <Navbar textContent={navbarLang} lang={locale} cta={[navbarCta]} fixed />

      <HeroSection textContent={textContent.HeroSection} percentOff={percentOff} minimumPrice={minimumPrice} />

      <ReviewsSection textContent={textContent.ReviewSection} />

      <PricingSectionWrapper
        textContent={textContent.tableSection}
        decimalDiscount={{
          individuals: decimalDiscount,
          lifetime: decimalDiscountForLifetime,
        }}
        lifetimeCoupons={lifetimeCoupons}
        lang={locale}
        products={products}
        loadingCards={loadingCards}
        onCheckoutButtonClicked={onCheckoutButtonClicked}
        hideBusinessCards
        hideBusinessSelector
        popularPlanBySize="3TB"
        sectionDetails="lg:py-20"
        couponCodeName={individualCoupon?.name}
        backgroundGradientColor="linear-gradient(180deg, #FFFFFF 0%, #F4F8FF 100%)"
      />

      <RedeemCouponsSection textContent={textContent.howToRedeemSection} />

      <HorizontalScrollableSection
        textContent={textContent.NextGenSection}
        bgGradient="linear-gradient(180deg, #F4F8FF 0%, #FFFFFF 100%)"
      />

      <FloatingCtaSectionv2
        textContent={textContent.ctaSection}
        url={'/pricing'}
        customText={
          <div className="flex flex-col items-center gap-4 px-10 text-center lg:px-0">
            <p className="text-2xl font-semibold leading-tight text-gray-95 lg:text-4xl">
              {textContent.ctaSection.title}
            </p>
            <p className="text-base font-normal leading-tight text-gray-55 lg:w-[633px] lg:text-center lg:text-xl">
              {textContent.ctaSection.description}
            </p>
          </div>
        }
        bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
        containerDetails="shadow-lg backdrop-blur-[55px]"
        bgPadding="lg:pb-20 pb-20 p-10"
        bgGradientColor="linear-gradient(0deg, #E5EFFF 0%, #FFFFFF 100%)"
      />

      <HorizontalScrollableSectionWithPhotosSection textContent={textContent.WhatsIncludedSection} />

      <FloatingCtaSectionv2
        textContent={textContent.ctaSectionV2}
        url={'/pricing'}
        customText={
          <div className="flex flex-col items-center gap-4 px-10 text-center lg:px-0">
            <p className="text-2xl font-semibold leading-tight text-gray-95 lg:text-4xl">
              {textContent.ctaSectionV2.title}
            </p>
            <p className="text-base font-normal leading-tight text-gray-55 lg:w-[633px] lg:text-center lg:text-xl">
              {textContent.ctaSectionV2.description}
            </p>
          </div>
        }
        bgGradientContainerColor="background: linear-gradient(180deg, #F4F8FF 0%, #FFFFFF 100%)"
        containerDetails="shadow-lg backdrop-blur-[55px]"
        bgPadding="lg:pb-20 pb-20 p-10"
      />

      <FAQSection textContent={textContent.FaqSection} />

      <Footer textContent={footerLang} lang={locale} />
    </Layout>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/coupons.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      metatagsDescriptions,
      textContent,
      navbarLang,
      footerLang,
    },
  };
}

export default HomePage;
