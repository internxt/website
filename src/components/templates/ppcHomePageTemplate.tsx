import { GetStaticPropsContext } from 'next';
import { HomeText } from '@/assets/types/home';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import HeroSection from '@/components/home/HeroSection';
import Layout from '@/components/layout/Layout';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import FAQSection from '@/components/shared/sections/FaqSection';
import usePricing from '@/hooks/usePricing';
import useCheckout from '@/hooks/useCheckout';
import { PromoCodeName } from '@/lib/types';
import TrustedSection from '@/components/home/TrustedSection';
import HorizontalScrollableSection from '@/components/home/HorizontalScrollableSection';
import AwardWinningSection from '@/components/home/AwardWinningPrivacySection';
import OfficialCloudProviderSection from '@/components/home/OfficilaCloudProviderSection';
import ReviewsSection from '@/components/home/ReviewsSection';
import { getMinimumPrice } from '@/utils/priceHelper';
import { MinimalNavbar } from '@/components/layout/navbars/MinimalNavbar';
import { MinimalFooter } from '@/components/layout/footers/MinimalFooter';

interface HomeProps {
  couponCodeName: PromoCodeName;
  lang: GetStaticPropsContext['locale'];
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  textContent: HomeText;
  footerLang: FooterText;
}

export const PPCHomePage = ({
  couponCodeName, metatagsDescriptions, textContent, lang, navbarLang, footerLang }: HomeProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'home');

  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
    lifetimeCoupon: lifetimeCoupon,
    lifetimeCoupons,
  } = usePricing({
    couponCode: couponCodeName,
    couponCodeForLifetime: couponCodeName,
  });
  const locale = lang as string;

  const onCheckoutButtonClicked = useCheckout({ individualCoupon, lifetimeCoupon, currencyValue });

  const decimalDiscountForLifetime = lifetimeCoupon?.percentOff && 100 - lifetimeCoupon.percentOff;
  const decimalDiscount = individualCoupon?.percentOff && 100 - individualCoupon.percentOff;
  const percentOff = lifetimeCoupon?.percentOff !== undefined ? String(lifetimeCoupon.percentOff) : '0';
  const minimumPrice = getMinimumPrice(products, decimalDiscount);

  return (
    <Layout
      title={metatags[0].title}
      description={metatags[0].description}
      segmentName="PPC Home"
      lang={lang}
      robots="noindex, follow"
    >
      <MinimalNavbar textContent={navbarLang} lang={locale} />

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
        sectionDetails="bg-white lg:py-20 xl:py-32"
        freePlanNeedsH2
        hideFreeCard
      />

      <TrustedSection textContent={textContent.TrustedBySection} />

      <AwardWinningSection textContent={textContent.AwardWinningSection} />

      <OfficialCloudProviderSection
        textContent={textContent.OfficalCloudProvider}
        lang={locale}
        partner="levante"
        bgColor="bg-neutral-17"
      />

      <HorizontalScrollableSection textContent={textContent.NextGenSection} />

      <FAQSection
        textContent={textContent.EncryptedStorageSeoSection}
        needsH2
        needsH3
        bgGradient="linear-gradient(360deg, #FFFFFF 0%, #F4F8FF 100%)"
      />

      <MinimalFooter footerLang={footerLang.FooterSection} lang={locale} />
    </Layout>
  );
};

