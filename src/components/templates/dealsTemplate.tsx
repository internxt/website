import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import Footer from '@/components/layout/footers/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import { stripeService } from '@/services/stripe.service';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import FAQSection from '@/components/shared/sections/FaqSection';
import usePricing from '@/hooks/usePricing';
import { PromoCodeName } from '@/lib/types';
import { parseDynamicText } from '@/components/utils/parse-dynamic-text';
import { DealsPageText } from '@/assets/types/freeCloudStorage';
import FloatingCtaSectionv2 from '../shared/FloatingCtaSectionV2';
import HeroSection from '../deals/HeroSection';
import HorizontalScrollableSection from '../shared/HorizontalScrollableSection';
import MoreDealsSection from '../black-friday/MoreDealsSection';

interface DealsConfig {
  heroImage: string;
  metatagsId: string;
  couponCode: PromoCodeName;
  couponCodeForLifetime: PromoCodeName;
  popularPlanSize?: string;
  moreDealsUrls: {
    card1: string;
    card2: string;
  };
}

interface DealsTemplateProps {
  darkMode?: boolean;
  lang: string;
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  textContent: DealsPageText;
  footerLang: FooterText;
  config: DealsConfig;
}

const DealsTemplate = ({
  darkMode = false,
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
    couponCodeForLifetime: PromoCodeName.seolp,
  });

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

  const parsePercentText = (text: string) => {
    if (!percentOff || percentOff === '0') {
      return <div className={`h-4 w-16 animate-pulse rounded ${darkMode ? 'bg-gray-71' : 'bg-gray-10 dark:bg-gray-71'}`}></div>;
    }
    return typeof text === 'string'
      ? text.replace(/{{percentage}}/g, percentOff).replace(/{{discount}}/g, percentOff)
      : text;
  };
  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="BlackFridayDeals" lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={[navbarCta]} fixed />

      <HeroSection
        percentOff={percentOff}
        textContent={textContent.HeroSection}
        image={config.heroImage}
        darkMode={darkMode}
      />

      {/*<ReviewsSection textContent={textContent.ReviewSection} />+/+*/}

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
        popularPlanBySize={config.popularPlanSize || '2TB'}
        sectionDetails={`lg:py-20 ${darkMode ? 'bg-gray-95' : 'dark:bg-gray-95'}`}
        backgroundGradientColor={darkMode ? 'bg-[linear-gradient(180deg,#1C1C1C_0%,#0D0D0D_100%)]' : 'bg-[linear-gradient(180deg,#FFFFFF_0%,#F4F8FF_100%)] dark:bg-[linear-gradient(180deg,#1C1C1C_0%,#0D0D0D_100%)]'}
        darkMode={darkMode}
      />

      <MoreDealsSection
        textContent={textContent.MoreDealsSection}
        urls={config.moreDealsUrls}
        bgColor={darkMode ? 'bg-gray-105' : 'dark:bg-gray-105'}
        percentOff={percentOff}
        darkMode={darkMode}
      />

      <FloatingCtaSectionv2
        textContent={textContent.CtaSection}
        url={'#billingButtons'}
        customText={
          <div className="flex flex-col items-center gap-4 px-10 text-center lg:px-0">
            <p className={`text-2xl font-semibold leading-tight ${darkMode ? 'text-white-95' : 'text-gray-95 dark:text-white-95'} lg:text-4xl`}>
              {parseDynamicText(textContent.CtaSection.title, { percentage: percentOff, discount: percentOff })}
            </p>
            <p className={`text-base font-normal leading-tight ${darkMode ? 'text-green-120' : 'text-gray-55 dark:text-green-120'} lg:w-[633px] lg:text-center lg:text-xl`}>
              {parseDynamicText(textContent.CtaSection.description, { percentage: percentOff, discount: percentOff })}
            </p>
          </div>
        }
        bgGradientContainerColor="bg-[linear-gradient(115.95deg,rgba(244,248,255,0.75)_10.92%,rgba(255,255,255,0.08)_96.4%)]"
        bgGradientColor={darkMode ? 'bg-[linear-gradient(180deg,#0D0D0D_0%,#1C1C1C_100%)]' : 'bg-[linear-gradient(180deg,#F4F8FF_0%,#FFFFFF_100%)] dark:bg-[linear-gradient(180deg,#0D0D0D_0%,#1C1C1C_100%)]'}
        containerDetails="shadow-lg backdrop-blur-[55px]"
        bgPadding="pb-8 lg:py-14"
      />

      <HorizontalScrollableSection
        textContent={textContent.WhyChooseInternxtSection}
        percentOff={percentOff}
        bgGradient={darkMode ? 'bg-[linear-gradient(180deg,#1C1C1C_0%,#0D0D0D_100%)]' : 'bg-[linear-gradient(180deg,#FFFFFF_0%,#F4F8FF_100%)] dark:bg-[linear-gradient(180deg,#1C1C1C_0%,#0D0D0D_100%)]'}
        needsDivider={false}
      />

      <FloatingCtaSectionv2
        textContent={textContent.CtaSectionV2}
        url={'#billingButtons'}
        customText={
          <div className="flex flex-col items-center gap-4 px-10 text-center lg:px-0">
            <p className={`text-2xl font-semibold leading-tight ${darkMode ? 'text-white-95' : 'text-gray-95 dark:text-white-95'} lg:text-4xl`}>
              {parseDynamicText(textContent.CtaSectionV2.title, { percentage: percentOff, discount: percentOff })}
            </p>
            <p className={`text-base font-normal leading-tight ${darkMode ? 'text-green-120' : 'text-gray-55 dark:text-green-120'} lg:w-[633px] lg:text-center lg:text-xl`}>
              {parseDynamicText(textContent.CtaSectionV2.description, { percentage: percentOff, discount: percentOff })}
            </p>
          </div>
        }
        bgGradientContainerColor="bg-[linear-gradient(115.95deg,rgba(244,248,255,0.75)_10.92%,rgba(255,255,255,0.08)_96.4%)]"
        containerDetails="shadow-lg backdrop-blur-[55px]"
        bgGradientColor={darkMode ? 'bg-[linear-gradient(180deg,#0D0D0D_0%,#1C1C1C_100%)]' : 'bg-[linear-gradient(180deg,#F4F8FF_0%,#FFFFFF_100%)] dark:bg-[linear-gradient(180deg,#0D0D0D_0%,#1C1C1C_100%)]'}
        bgPadding="pb-8 lg:py-14"
      />

      <FAQSection textContent={textContent.FaqSection} darkMode={darkMode} percentageDiscount={percentOff} />

      <Footer textContent={footerLang} lang={lang} darkMode={darkMode} />
    </Layout>
  );
};

export default DealsTemplate;
