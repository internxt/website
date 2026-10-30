import { GetStaticPropsContext } from 'next';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import Footer from '@/components/layout/footers/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import FAQSection from '@/components/shared/sections/FaqSection';
import FloatingCtaSectionv2 from '@/components/shared/FloatingCtaSectionV2';
import { ReviewsTextPage } from '@/assets/types/reviews';
import SupportSection from '@/components/reviews/support-section';
import VideotSection from '@/components/reviews/VideoSection';
import HeroSection from '@/components/reviews/HeroSection';
import HorizontalScrollableSection from '@/components/reviews/HorizontalScrollableSection';
import Script from 'next/script';
import { sm_breadcrumb_list } from '@/components/utils/schema-markup-generator';
import ReviewsSection from '@/components/home/ReviewsSection';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import { stripeService } from '@/services/stripe.service';
import { PromoCodeName } from '@/lib/types';
import usePricing from '@/hooks/usePricing';

interface CleanerProps {
  darkMode?: boolean;
  lang: GetStaticPropsContext['locale'];
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  textContent: ReviewsTextPage;
  footerLang: FooterText;
}

const CleanerPage = ({
  darkMode = false,
  metatagsDescriptions,
  textContent,
  lang,
  navbarLang,
  footerLang,
}: CleanerProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'reviews');
  const locale = lang as string;
  const navbarCta = 'chooseStorage';

  const {
        products,
        loadingCards,
        currencyValue,
        coupon: individualCoupon,
        lifetimeCoupon,
        lifetimeCoupons,
    } = usePricing({ couponCode: PromoCodeName.seolp, couponCodeForLifetime: PromoCodeName.seolp });

    const decimalDiscountForLifetime = lifetimeCoupon?.percentOff && 100 - lifetimeCoupon.percentOff;
    const decimalDiscount = individualCoupon?.percentOff && 100 - individualCoupon.percentOff;

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
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Home" lang={lang}>
      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_breadcrumb_list([{ name: 'Encrypted Cloud Storage', url: '/' }, { name: 'Secure cloud storage', url: '/drive' }, { name: 'Internxt Reviews', url: '/reviews' }])}
      </Script>
      <Navbar textContent={navbarLang} lang={locale} cta={[navbarCta]} fixed />

      <HeroSection textContent={textContent.heroSection} />

      <ReviewsSection textContent={textContent.ReviewSection} darkMode={darkMode} />

      <HorizontalScrollableSection textContent={textContent.ReviewFromIndustrySection} darkMode={darkMode} />

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
                popularPlanBySize="5TB"
                sectionDetails="bg-neutral-17 dark:bg-gray-105 lg:py-20"
                hideFreeCard
                darkMode={darkMode}
        />

      <VideotSection textContent={textContent.videoSection} />

      <SupportSection textContent={textContent.supportSection} darkMode={darkMode} />

      <FloatingCtaSectionv2
        textContent={textContent.ctaSection}
        url={'#billingButtons'}
        customText={
          <div className="flex flex-col gap-4 px-10 text-center lg:px-0">
            <p className="text-2xl font-semibold text-gray-95 dark:text-white-95 lg:text-4xl">
              {textContent.ctaSection.title}
            </p>
            <p className="text-base font-normal text-gray-55 dark:text-green-120 lg:text-xl">
              {textContent.ctaSection.description}
            </p>
          </div>
        }
        bgGradientContainerColor="bg-[linear-gradient(115.95deg,rgba(244,248,255,0.75)_10.92%,rgba(255,255,255,0.08)_96.4%)]"
        bgGradientColor="bg-[linear-gradient(180deg,#F4F8FF_0%,#FFFFFF_100%)] dark:bg-[linear-gradient(180deg,#0D0D0D_0%,#1C1C1C_100%)]"
        containerDetails="shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] backdrop-blur-[55px]"
        bgPadding="pb-20 lg:pb-0 p-8 lg:py-10"
      />

      <FAQSection textContent={textContent.FaqSection} darkMode={darkMode} />

      <Footer textContent={footerLang} lang={locale} breadcrumbItems={[{ name: 'Encrypted Cloud Storage', url: '/' }, { name: 'Secure cloud storage', url: '/drive' }, { name: 'Internxt Reviews', url: '/reviews' }]} darkMode={darkMode} />
    </Layout>
  );
};

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/reviews.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

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

export default CleanerPage;
