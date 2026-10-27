import { GetServerSidePropsContext } from 'next';
import Script from 'next/script';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import Footer from '@/components/layout/footers/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import HeroSection from '@/components/what-does-google-know-about-me/HeroSection';
import ManageGoogleDataSection from '@/components/what-does-google-know-about-me/ManageGoogleDataSection';
import WhatGoogleKnowsSection from '@/components/what-does-google-know-about-me/WhatGoogleKnowsSection';
import { ToolsSection } from '@/components/shared/sections/ToolsSection';
import CtaSection from '@/components/affiliates/CtaSection';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import { sm_breadcrumb } from '@/components/utils/schema-markup-generator';
import usePricing from '@/hooks/usePricing';
import { stripeService } from '@/services/stripe.service';
import { PromoCodeName } from '@/lib/types';

const URL_REDIRECT = '/pricing';

const BREADCRUMB_ITEMS = [
  { name: 'Encrypted Cloud Storage', url: '/' },
  { name: 'What does Google know about me', url: '/what-does-google-know-about-me' },
];

export interface WhatDoesGoogleKnowAboutMeTemplateProps {
  metatagsDescription: MetatagsDescription[];
  navbarText: NavigationBarText;
  textContent: any;
  toolsContent: any;
  bannerText: any;
  footerText: FooterText;
  locale: GetServerSidePropsContext['locale'];
  couponCode?: PromoCodeName;
  couponCodeForLifetime?: PromoCodeName;
  hidePriceTable?: boolean;
  robots?: string;
}

export const WhatDoesGoogleKnowAboutMeTemplate = ({
  metatagsDescription,
  navbarText,
  textContent,
  toolsContent,
  bannerText,
  footerText,
  locale,
  couponCode = PromoCodeName.seolp,
  couponCodeForLifetime = PromoCodeName.seolp,
  robots,
}: WhatDoesGoogleKnowAboutMeTemplateProps): JSX.Element => {
  const metatags = metatagsDescription.find((desc) => desc.id === 'what-google-knows');
  const lang = locale as string;

  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
    lifetimeCoupon,
    lifetimeCoupons,
  } = usePricing({ couponCode, couponCodeForLifetime });

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
    <>
      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_breadcrumb('What does Google know about me', 'what-does-google-know-about-me')}
      </Script>
      <Layout
        title={metatags?.title ?? ''}
        description={metatags?.description ?? ''}
        segmentName="What Does Google Know About Me"
        lang={lang}
        robots={robots}
      >
        <Navbar textContent={navbarText} lang={lang} cta={['default']} fixed />

        <HeroSection textContent={textContent.HeroSection} bannerText={bannerText.GoogleLPBanner} lang={lang} />

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
          popularPlanBySize="2TB"
          sectionDetails="bg-white lg:py-20 xl:py-32"
          freePlanNeedsH2
        />

        <WhatGoogleKnowsSection textContent={textContent.WhatGoogleKnowsSection} />

        <CtaSection textContent={textContent.CtaSection1} url={URL_REDIRECT} />

        <ManageGoogleDataSection textContent={textContent.ManageGoogleDataSection} />

        <ToolsSection textContent={toolsContent} lang={lang} />

        <CtaSection textContent={textContent.CtaSection2} url={URL_REDIRECT} />

        <Footer textContent={footerText} lang={lang} breadcrumbItems={BREADCRUMB_ITEMS} />
      </Layout>
    </>
  );
};
