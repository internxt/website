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
import cookies from '@/lib/cookies';
import { SpecialOfferText } from '@/assets/types/specialOfferTemplate';

interface LifetimeSpecialProps {
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  langJson: SpecialOfferText;
  footerLang: FooterText;
  lang: string;
  testimonialsJson: any;
}

function LifetimeSpecial({
  langJson,
  lang,
  metatagsDescriptions,
  footerLang,
  navbarLang,
  testimonialsJson,
}: LifetimeSpecialProps): JSX.Element {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'lifetime');

  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
    lifetimeCoupon: lifetimeCoupon,
    lifetimeCoupons,
  } = usePricing({});

  const percentOff = individualCoupon?.percentOff !== undefined ? String(individualCoupon.percentOff) : '0';
  const parsePercentText = (text: string) => {
    if (!percentOff || percentOff === '0') {
      return <div className="bg-gray-200 h-4 w-16 animate-pulse rounded"></div>;
    }
    return typeof text === 'string' ? text.replace(/{{discount}}/g, percentOff) : text;
  };
  const decimalDiscountForLifetime = lifetimeCoupon?.percentOff && 100 - lifetimeCoupon.percentOff;
  const decimalDiscount = individualCoupon?.percentOff && 100 - individualCoupon.percentOff;

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

  console.log(percentOff);
  const ctaText =
    percentOff === '0' ? langJson.ctaSection.titleWithoutDiscount : parsePercentText(langJson.ctaSection.title);
  const ctaText2 =
    percentOff === '0'
      ? langJson.ctaSection2.descriptionWithoutDisocunt
      : parsePercentText(langJson.ctaSection2.description);

  return (
    <Layout
      title={metatags[0].title}
      description={metatags[0].description}
      segmentName="Lifetime"
      lang={lang}
      specialOffer={`https://internxt.com/images/previewLink/LifetimePreviewLink.png`}
    >
      <Navbar lang={lang} textContent={navbarLang} cta={['payment']} isLinksHidden hideLogoLink hideCTA />

      <HeroSection textContent={langJson.HeroSection} percentOff={percentOff} />

      <ReviewsSection textContent={langJson.ReviewSection || testimonialsJson.TestimonialsSection} />

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
        sectionDetails="bg-white lg:py-20"
        hideFreeCard
      />

      <FloatingCtaSectionv2
        textContent={langJson.ctaSection}
        url={'#billingButtons'}
        customText={
          <div className="flex flex-col items-center gap-4 px-10 text-center lg:px-0">
            <p className="text-2xl font-semibold leading-tight text-gray-95 lg:text-4xl">{ctaText}</p>
            <p className="text-base font-normal leading-tight text-gray-55 lg:w-[698px] lg:text-center lg:text-xl">
              {langJson.ctaSection.description}
            </p>
          </div>
        }
        bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
        containerDetails="shadow-lg backdrop-blur-[55px]"
        bgPadding="lg:py-20 pb-20"
        bgGradientColor="linear-gradient(0deg, #F4F8FF 0%, #FFFFFF 100%)"
      />

      <HorizontalScrollableSection textContent={langJson.NextGenSection} />

      <TrustedSection textContent={langJson.TrustedBySection} bottomBar={false} />

      <FloatingCtaSectionv2
        textContent={langJson.ctaSection2}
        url={'#billingButtons'}
        customText={
          <div className="flex flex-col items-center gap-4 px-10 text-center lg:px-0">
            <p className="text-2xl font-semibold leading-tight text-gray-95 lg:text-4xl">
              {langJson.ctaSection2.title}
            </p>
            <p className="text-base font-normal leading-tight text-gray-55 lg:w-[698px] lg:text-center lg:text-xl">
              {ctaText2}
            </p>
          </div>
        }
        bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
        containerDetails="shadow-lg backdrop-blur-[55px]"
        bgPadding="lg:pb-20 pb-10"
        bgGradientColor="linear-gradient(0deg, #F4F8FF 0%, #FFFFFF 100%)"
      />

      <Footer textContent={footerLang} lang={lang} />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const langJson = require(`@/assets/lang/${lang}/specialOfferTemplate.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);
  const testimonialsJson = require(`@/assets/lang/${lang}/home.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      metatagsDescriptions,
      navbarLang,
      langJson,
      footerLang,
      testimonialsJson,
    },
  };
}

export default LifetimeSpecial;
