import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import Footer from '@/components/layout/footers/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import { stripeService } from '@/services/stripe.service';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import FAQSection from '@/components/shared/sections/FaqSection';
import usePricing from '@/hooks/usePricing';
import { PromoCodeName } from '@/lib/types';
import { BlackFridayText } from '@/assets/types/blackFriday';
import FloatingCtaSectionv2 from '@/components/shared/FloatingCtaSectionV2';
import ThreeCardsSection from '@/components/shared/sections/ThreeCardsSection';
import TitleAndDescriptionSection from '@/components/shared/components/TitleAndDescriptionSection';
import HeroSection from '@/components/deals/HeroSection';
import HorizontalScrollableSection from '@/components/black-friday/HorziontalScrollableSection';

interface BlackFridayDealConfig {
  heroImage: string;
  metatagsId: string;
  couponCode: PromoCodeName;
  couponCodeForLifetime: PromoCodeName;
  popularPlanSize?: string;
  hideBusinessCards?: boolean;
  hideBusinessSelector?: boolean;
}

interface BlackFridayDealsTemplateProps {
  lang: string;
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  textContent: BlackFridayText;
  footerLang: FooterText;
  config: BlackFridayDealConfig;
}

const BlackFridayDealsTemplate = ({
  metatagsDescriptions,
  textContent,
  lang,
  navbarLang,
  footerLang,
  config,
}: BlackFridayDealsTemplateProps): JSX.Element => {
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

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="BlackFridayDeals" lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={[navbarCta]} fixed />

      <HeroSection textContent={textContent.HeroSection} percentOff={percentOff} image={config.heroImage} />

      <TitleAndDescriptionSection textContent={textContent.DontMissSection} darkMode />

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
        hideBusinessCards={config.hideBusinessCards ?? true}
        hideBusinessSelector={config.hideBusinessSelector ?? true}
        popularPlanBySize={config.popularPlanSize || '5TB'}
        sectionDetails="bg-[#1C1C1C] lg:py-20"
        darkMode
      />

      <ThreeCardsSection textContent={textContent.WhyChooseSection} darkMode />

      <FloatingCtaSectionv2
        textContent={textContent.CtaSection}
        url={'#billingButtons'}
        customText={
          <div className="flex flex-col items-center gap-4 px-10 text-center lg:px-0">
            <p className="text-2xl font-semibold leading-tight text-white lg:text-4xl">
              {textContent.CtaSection.title}
            </p>
            <p className="text-base font-normal leading-tight text-white lg:w-[633px] lg:text-center lg:text-xl">
              {textContent.CtaSection.description}
            </p>
          </div>
        }
        containerDetails="shadow-lg backdrop-blur-[55px]"
        bgGradientContainerColor="linear-gradient(115.95deg, rgba(255, 255, 255, 0.3) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
        bgPadding="lg:py-10 pb-10 bg-[#1C1C1C]"
      />

      <HorizontalScrollableSection textContent={textContent.HorizontalScrollableSection} />

      <FloatingCtaSectionv2
        textContent={textContent.CtaSectionV2}
        url={'#billingButtons'}
        customText={
          <div className="flex flex-col items-center gap-4 px-10 text-center lg:px-0">
            <p className="text-2xl font-semibold leading-tight text-white lg:text-4xl">
              {textContent.CtaSectionV2.title}
            </p>
            <p className="text-base font-normal leading-tight text-white lg:w-[633px] lg:text-center lg:text-xl">
              {textContent.CtaSectionV2.description}
            </p>
          </div>
        }
        containerDetails="shadow-lg backdrop-blur-[55px]"
        bgGradientContainerColor="linear-gradient(115.95deg, rgba(255, 255, 255, 0.3) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
        bgPadding="lg:py-10 pb-10 bg-[#1C1C1C]"
      />

      <FAQSection
        textContent={textContent.FaqSection}
        bgColor="bg-[#1C1C1C] text-white"
        cardColor="bg-[#1C1C1C]"
        textColor="text-white"
      />

      <Footer textContent={footerLang} lang={lang} darkMode />
    </Layout>
  );
};

export default BlackFridayDealsTemplate;
