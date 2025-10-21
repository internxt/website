import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import Footer from '@/components/layout/footers/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import { stripeService } from '@/services/stripe.service';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import FAQSection from '@/components/shared/sections/FaqSection';
import usePricing from '@/hooks/usePricing';
import { PromoCodeName } from '@/lib/types';
import { FreeCloudPageText } from '@/assets/types/freeCloudStorage';
import FloatingCtaSectionv2 from '../shared/FloatingCtaSectionV2';
import HeroSection from '../black-friday/HeroSection';
import ReviewsSection from '../home/ReviewsSection';
import HorizontalScrollableSectionWithPhotosSection from '../coupons/HorizontalScrollableSectionWithPhotos';
import HorizontalScrollableSection from '../shared/HorizontalScrollableSection';

interface DealsConfig {
  metatagsId: string;
  couponCode: PromoCodeName;
  couponCodeForLifetime: PromoCodeName;
  popularPlanSize?: string;
  hideBusinessCards?: boolean;
  hideBusinessSelector?: boolean;
}

interface DealsTemplateProps {
  lang: string;
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  textContent: FreeCloudPageText;
  footerLang: FooterText;
  config: DealsConfig;
}

const DealsTemplate = ({
  metatagsDescriptions,
  textContent,
  lang,
  navbarLang,
  footerLang,
  config,
}: DealsTemplateProps): JSX.Element => {
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

  const navbarCta = 'chooseStorage';

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

  const decimalDiscountForLifetime = lifetimeCoupon?.percentOff && 100 - lifetimeCoupon.percentOff;
  const decimalDiscount = individualCoupon?.percentOff && 100 - individualCoupon.percentOff;
  const percentOff = lifetimeCoupon?.percentOff !== undefined ? String(lifetimeCoupon.percentOff) : '0';

  const parsePercentText = (text: string) => {
    if (!percentOff || percentOff === '0') {
      return <div className="bg-gray-200 h-4 w-16 animate-pulse rounded"></div>;
    }
    return typeof text === 'string' ? text.replace(/{{percentage}}/g, percentOff) : text;
  };
  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="BlackFridayDeals" lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={[navbarCta]} fixed />

      <HeroSection percentOff={percentOff} textContent={textContent.HeroSection} darkMode={false} />

      <ReviewsSection textContent={textContent.ReviewSection} />

      <PricingSectionWrapper
        textContent={textContent.tableSection}
        decimalDiscount={{
          individuals: decimalDiscount,
          lifetime: decimalDiscountForLifetime,
        }}
        lifetimeCoupons={lifetimeCoupons}
        lang={lang}
        products={products}
        loadingCards={loadingCards}
        onCheckoutButtonClicked={onCheckoutButtonClicked}
        hideBusinessCards={config.hideBusinessCards ?? true}
        hideBusinessSelector={config.hideBusinessSelector ?? true}
        popularPlanBySize={config.popularPlanSize || '5TB'}
        sectionDetails="lg:py-20"
        backgroundGradientColor="linear-gradient(180deg, #FFFFFF 0%, #F4F8FF 100%)"
      />

      <FloatingCtaSectionv2
        textContent={textContent.CtaSection}
        url={'#billingButtons'}
        customText={
          <div className="flex flex-col items-center gap-4 px-10 text-center lg:px-0">
            <p className="text-2xl font-semibold leading-tight text-gray-95 lg:text-4xl">
              {textContent.CtaSection.title}
            </p>
            <p className="text-base font-normal leading-tight text-gray-55 lg:w-[633px] lg:text-center lg:text-xl">
              {parsePercentText(textContent.CtaSection.description)}
            </p>
          </div>
        }
        bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
        containerDetails="shadow-lg backdrop-blur-[55px]"
        bgGradientColor="linear-gradient(180deg, #F4F8FF 0%, #FFFFFF 100%)"
        bgPadding="py-8 lg:py-14"
      />

      <HorizontalScrollableSectionWithPhotosSection textContent={textContent.WhatsIncludedSection} bgColor="bg-white" />

      <HorizontalScrollableSection
        textContent={textContent.WhyChooseInternxtSection}
        bgGradient="linear-gradient(180deg, #FFFFFF 0%, #F4F8FF 100%)"
      />

      <FloatingCtaSectionv2
        textContent={textContent.CtaSectionV2}
        url={'#billingButtons'}
        customText={
          <div className="flex flex-col items-center gap-4 px-10 text-center lg:px-0">
            <p className="text-2xl font-semibold leading-tight text-gray-95 lg:text-4xl">
              {textContent.CtaSectionV2.title}
            </p>
            <p className="text-base font-normal leading-tight text-gray-55 lg:w-[633px] lg:text-center lg:text-xl">
              {textContent.CtaSectionV2.description}
            </p>
          </div>
        }
        bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
        containerDetails="shadow-lg backdrop-blur-[55px]"
        bgGradientColor="linear-gradient(180deg, #F4F8FF 0%, #FFFFFF 100%)"
        bgPadding="py-14"
      />

      <FAQSection textContent={textContent.FaqSection} />

      <Footer textContent={footerLang} lang={lang} />
    </Layout>
  );
};

export default DealsTemplate;
