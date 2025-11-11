import Layout from '@/components/layout/Layout';
import { MinimalFooter } from '@/components/layout/footers/MinimalFooter';
import Navbar from '@/components/layout/navbars/Navbar';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import { PromoCodeName } from '@/lib/types';
import usePricing from '@/hooks/usePricing';
import { stripeService } from '@/services/stripe.service';
import FAQSection from '@/components/shared/sections/FaqSection';
import FloatingCtaSectionv2 from '@/components/shared/FloatingCtaSectionV2';
import { ComparisonTable } from '@/components/comparison/ComparisonTable';
import HorizontalScrollableSection from '@/components/shared/HorizontalScrollableSection';
import { TablesSection } from '@/components/comparison/TablesSection';
import { HeroSection } from '@/components/comparison/HeroSection';
import { formatText } from '@/components/utils/format-text';
import HorizontalScrollableSectionWithPhotosSection from '@/components/shared/HorizontalScrollableSectionWithPhotos';
import ThreeCardsSection from '@/components/shared/sections/ThreeCardsSection';
import { AlternativePageText } from '@/assets/types/alternative';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { GetServerSidePropsContext } from 'next';

type CompetitorType = 'pCloud' | 'MEGA' | 'Dropbox' | 'Drive' | 'Koofr' | 'Icedrive' | 'OneDrive';

interface ComparisonPageProps {
  competitor: CompetitorType;
  metaTagId: string;
  segmentName: string;
  logo: string;
  lang: GetServerSidePropsContext['locale'];
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  langJson: AlternativePageText;
  footerLang: FooterText;
  customSections?: {
    showThreeCards?: boolean;
    privacyBgGradient?: string;
    alternativeBgColor?: string;
  };
}

export const ComparisonPage = ({
  competitor,
  metaTagId,
  segmentName,
  logo,
  lang,
  metatagsDescriptions,
  navbarLang,
  langJson,
  footerLang,
  customSections = {},
}: ComparisonPageProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === metaTagId);
  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
    lifetimeCoupons,
  } = usePricing({
    couponCode: PromoCodeName.BlackFriday,
  });

  const onCheckoutButtonClicked = (priceId: string, isCheckoutForLifetime: boolean) => {
    const couponCodeForCheckout = individualCoupon?.name;
    stripeService.redirectToCheckout(
      priceId,
      currencyValue,
      'individual',
      isCheckoutForLifetime,
      couponCodeForCheckout,
    );
  };

  const decimalDiscount = individualCoupon?.percentOff && 100 - individualCoupon.percentOff;
  const percentageDiscount = decimalDiscount ? 100 - decimalDiscount : 0;
  const locale = lang as string;

  const {
    showThreeCards = false,
    privacyBgGradient = 'linear-gradient(180deg, #FFFFFF 0%, #FFCECC 50%, #FFFFFF 100%)',
    alternativeBgColor = 'linear-gradient(180deg, #FFFFFF 0%, #D6F3DD 50%, #FFFFFF 100%)',
  } = customSections;

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName={segmentName} lang={lang}>
      <Navbar textContent={navbarLang} lang={locale} cta={['priceTable']} fixed />

      <HeroSection textContent={langJson.HeroSection} percentage={percentageDiscount} competitor={competitor} />

      <ComparisonTable textContent={langJson.HeaderSection} competitor={competitor} />

      <PricingSectionWrapper
        textContent={langJson.tableSection}
        decimalDiscount={{
          individuals: decimalDiscount,
          lifetime: decimalDiscount,
        }}
        lifetimeCoupons={lifetimeCoupons}
        lang={locale}
        products={products}
        loadingCards={loadingCards}
        onCheckoutButtonClicked={onCheckoutButtonClicked}
        hideSwitchSelector
        hideBusinessSelector
        sectionDetails="bg-white lg:py-20 py-10"
      />

      <HorizontalScrollableSection textContent={langJson.PrivacyViolationsSection} bgGradient={privacyBgGradient} />

      {showThreeCards && langJson.WhyNeedAlternativeSection && (
        <ThreeCardsSection
          textContent={langJson.WhyNeedAlternativeSection}
          bgColor="linear-gradient(180deg, #F4F8FF 0%, #FFCECC 50%, #FFFFFF 100%)"
          cardColor="bg-white"
          bottomSeparationBar={true}
        />
      )}

      <TablesSection textContent={langJson.VersusSection} competitor={'Drive'} logo={logo} />

      <HorizontalScrollableSectionWithPhotosSection
        textContent={langJson.WhyBestAlternativeSection}
        bgColor={alternativeBgColor}
      />

      <FloatingCtaSectionv2
        textContent={langJson.CtaSection}
        url={'/pricing'}
        customText={
          <div className="flex flex-col gap-4 px-10 lg:px-0">
            <p className="text-2xl font-semibold text-gray-95 lg:text-4xl">
              {formatText(langJson.CtaSection.title, { percentage: percentageDiscount?.toString() ?? '70' })}
            </p>
            <p className="text-base font-normal text-gray-55 lg:text-xl">
              {formatText(langJson.CtaSection.description, { percentage: percentageDiscount?.toString() ?? '70' })}
            </p>
          </div>
        }
        containerDetails="shadow-lg backdrop-blur-[55px] bg-white"
        bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
        bgPadding="px-20 py-10"
      />

      <FAQSection textContent={langJson.FaqSection} percentageDiscount={percentageDiscount?.toString()} />

      <MinimalFooter footerLang={footerLang.FooterSection} lang={locale} bgColor="bg-gray-1" />
    </Layout>
  );
};
