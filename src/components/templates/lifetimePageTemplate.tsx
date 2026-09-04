import Layout from '@/components/layout/Layout';
import Footer from '@/components/layout/footers/Footer';
import usePricing from '@/hooks/usePricing';
import useCheckout from '@/hooks/useCheckout';
import Navbar from '@/components/layout/navbars/Navbar';
import { MinimalNavbar } from '@/components/layout/navbars/MinimalNavbar';
import { MinimalFooter } from '@/components/layout/footers/MinimalFooter';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import HeroSection from '@/components/partnersTemplate/HeroSection';
import TrustedSection from '@/components/home/TrustedSection';
import HorizontalScrollableSection from '@/components/home/HorizontalScrollableSection';
import ReviewsSection from '@/components/home/ReviewsSection';
import FloatingCtaSectionv2 from '@/components/shared/FloatingCtaSectionV2';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import { SpecialOfferText } from '@/assets/types/specialOfferTemplate';
import { PromoCodeName } from '@/lib/types';
import Script from 'next/script';
import { sm_breadcrumb_list } from '@/components/utils/schema-markup-generator';

export interface LifetimeSpecialProps {
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  langJson: SpecialOfferText;
  footerLang: FooterText;
  lang: string;
  testimonialsJson: any;
  /** Each variant runs its own lifetime promo code. */
  couponCodeForLifetime?: PromoCodeName;
  /** The campaign variants keep themselves out of the index. */
  robots?: string;
  /** PPC landings also apply the promo to the individual plans. */
  couponCode?: PromoCodeName;
  /** PPC landings use the stripped-down navbar/footer and drop the breadcrumbs. */
  minimalLayout?: boolean;
  segmentName?: string;
  ctaBgGradientColor?: string;
}

export function LifetimePage({
  langJson,
  lang,
  metatagsDescriptions,
  footerLang,
  navbarLang,
  testimonialsJson,
  couponCodeForLifetime = PromoCodeName.lifetime,
  robots,
  couponCode,
  minimalLayout = false,
  segmentName = 'Lifetime',
  ctaBgGradientColor = 'linear-gradient(0deg, #F4F8FF 0%, #FFFFFF 100%)',
}: Readonly<LifetimeSpecialProps>): JSX.Element {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'lifetime');

  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
    lifetimeCoupon: lifetimeCoupon,
    lifetimeCoupons,
  } = usePricing({
    couponCode,
    couponCodeForLifetime,
  });

  const percentOff = lifetimeCoupon?.percentOff === undefined ? '0' : String(lifetimeCoupon.percentOff);
  const parsePercentText = (text: string) => {
    if (!percentOff || percentOff === '0') {
      return <div className="bg-gray-200 h-4 w-16 animate-pulse rounded"></div>;
    }
    return typeof text === 'string' ? text.replace(/{{discount}}/g, percentOff) : text;
  };
  const decimalDiscountForLifetime = lifetimeCoupon?.percentOff && 100 - lifetimeCoupon.percentOff;
  const decimalDiscount = individualCoupon?.percentOff && 100 - individualCoupon.percentOff;

  const onCheckoutButtonClicked = useCheckout({ individualCoupon, lifetimeCoupon, currencyValue });

  const ctaText =
    percentOff === '0' ? langJson.ctaSection.titleWithoutDiscount : parsePercentText(langJson.ctaSection.title);
  const ctaText2 =
    percentOff === '0'
      ? langJson.ctaSection2.descriptionWithoutDisocunt
      : parsePercentText(langJson.ctaSection2.description);
  const navbarCta = 'chooseStorage';

  return (
    <>
      {!minimalLayout && (
        <Script type="application/ld+json" strategy="beforeInteractive">
          {sm_breadcrumb_list([
            { name: 'Encrypted Cloud Storage', url: '/' },
            { name: 'Secure cloud storage', url: '/drive' },
            { name: 'Lifetime cloud storage', url: '/lifetime' },
          ])}
        </Script>
      )}
      <Layout
        title={metatags[0].title}
        description={metatags[0].description}
        segmentName={segmentName}
        lang={lang}
        specialOffer={`https://internxt.com/images/previewLink/LifetimePreviewLink.png`}
        robots={robots}
      >
        {minimalLayout ? (
          <MinimalNavbar textContent={navbarLang} lang={lang} />
        ) : (
          <Navbar textContent={navbarLang} lang={lang} cta={[navbarCta]} fixed />
        )}
        <HeroSection textContent={langJson.HeroSection} percentOff={percentOff} />

        <ReviewsSection textContent={testimonialsJson.ReviewSection} />

        <PricingSectionWrapper
          textContent={langJson.tableSection}
          decimalDiscount={{
            lifetime: decimalDiscountForLifetime,
          }}
          lifetimeCoupons={lifetimeCoupons}
          lang={lang}
          products={products}
          loadingCards={loadingCards}
          onCheckoutButtonClicked={onCheckoutButtonClicked}
          hideBusinessCards
          hideBusinessSelector
          hidePlanSelectorComponent={true}
          popularPlanBySize="3TB"
          sectionDetails="bg-white lg:py-20"
          hideFreeCard
          SectionTag={'h2'}
        />

        <HorizontalScrollableSection textContent={langJson.NextGenSection} />

        <FloatingCtaSectionv2
          textContent={langJson.ctaSection}
          url={'#billingButtons'}
          customText={
            <div className="flex flex-col items-center gap-4 px-10 text-center lg:px-0">
              <h2 className="text-2xl font-semibold leading-tight text-gray-95 lg:text-4xl">{ctaText}</h2>
              <p className="text-base font-normal leading-tight text-gray-55 lg:w-[698px] lg:text-center lg:text-xl">
                {langJson.ctaSection.description}
              </p>
            </div>
          }
          bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
          containerDetails="shadow-lg backdrop-blur-[55px]"
          bgPadding="lg:py-20 pb-20"
          bgGradientColor={ctaBgGradientColor}
        />

        <TrustedSection textContent={langJson.TrustedBySection} bottomBar={false} />

        <FloatingCtaSectionv2
          textContent={langJson.ctaSection2}
          url={'#billingButtons'}
          customText={
            <div className="flex flex-col items-center gap-4 px-10 text-center lg:px-0">
              <h2 className="text-2xl font-semibold leading-tight text-gray-95 lg:px-40 lg:text-4xl">
                {langJson.ctaSection2.title}
              </h2>
              <p className="text-base font-normal leading-tight text-gray-55 lg:w-[698px] lg:text-center lg:text-xl">
                {ctaText2}
              </p>
            </div>
          }
          bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
          containerDetails="shadow-lg backdrop-blur-[55px]"
          bgPadding="lg:pb-20 pb-10"
          bgGradientColor={ctaBgGradientColor}
        />

        {minimalLayout ? (
          <MinimalFooter footerLang={footerLang.FooterSection} lang={lang} />
        ) : (
          <Footer
            textContent={footerLang}
            lang={lang}
            breadcrumbItems={[
              { name: 'Encrypted Cloud Storage', url: '/' },
              { name: 'Secure cloud storage', url: '/drive' },
              { name: 'Lifetime cloud storage', url: '/lifetime' },
            ]}
          />
        )}
      </Layout>
    </>
  );
}

