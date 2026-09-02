import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import { sm_breadcrumb } from '@/components/utils/schema-markup-generator';
import Script from 'next/script';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import { CloudObjectStoragePriceCardSection } from '@/components/cloud-object-storage/PriceCardSection';
import { PromoCodeName } from '@/lib/types';
import usePricing from '@/hooks/usePricing';
import { stripeService } from '@/services/stripe.service';
import FAQSection from '@/components/shared/sections/FaqSection';
import FloatingCtaSectionv2 from '@/components/shared/FloatingCtaSectionV2';
import { ComparisonTable } from '@/components/comparison/ComparisonTable';
import HorizontalScrollableSection from '@/components/shared/HorizontalScrollableSection';
import ComparisonScrollableSection from '@/components/comparison/HorizontalScrollableSection';
import { TablesSection } from '@/components/comparison/TablesSection';
import { HeroSection } from '@/components/comparison/HeroSection';
import { parseDynamicText } from '@/components/utils/parse-dynamic-text';
import HorizontalScrollableSectionWithPhotosSection from '@/components/shared/HorizontalScrollableSectionWithPhotos';
import CouponsScrollableWithPhotosSection from '@/components/coupons/HorizontalScrollableSectionWithPhotos';
import ThreeCardsSection from '@/components/shared/sections/ThreeCardsSection';
import { AlternativePageText } from '@/assets/types/alternative';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { GetServerSidePropsContext } from 'next';
import { Fragment } from 'react';
import Footer from '../layout/footers/Footer';

type CompetitorType =
  | 'pCloud'
  | 'MEGA'
  | 'Dropbox'
  | 'Drive'
  | 'Koofr'
  | 'Icedrive'
  | 'OneDrive'
  | 'Degoo'
  | 'Elephantdrive'
  | 'FileJump'
  | 'Drime'
  | 'GoogleMeet'
  | 'Terabox'
  | 'Filen'
  | 'idrive'
  | 'TeraBox'
  | 'sync'
  | 'proton-drive'
  | 'zoom'
  | 'Teams'
  | 'ChatGPT'
  | 'Copilot'
  | 'deepseek'
  | 'gemini'
  | 'Wire'
  | 'Whereby'
  | 'grok'
  | 'aws'
  | 'azure'
  | 'backblaze'
  | 'idriveE2'
  | 'googleCloud'
  | 'avast'
  | 'avg'
  | 'avira'
  | 'bitdefender'
  | 'ccleaner'
  | 'clean-my-mac'
  | 'malwarebytes'
  | 'mcafee'
  | 'norton'
  | 'totalav';

type SectionName = 'pricing' | 'scrollable' | 'threeCards' | 'tables' | 'withPhotos';

const DEFAULT_SECTIONS_ORDER: SectionName[] = ['pricing', 'scrollable', 'threeCards', 'tables', 'withPhotos'];

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
  couponCodeName?: PromoCodeName;
  isS3Alternative?: boolean;
  breadcrumbName?: string;
  urlSlug?: string;
  headings?: {
    comparisonTableH2?: boolean;
    tablesSectionH2?: boolean;
    tableTitleTag?: React.ElementType;
    tableNameTag?: React.ElementType;
    scrollableH2?: boolean;
    scrollableH3?: boolean;
    threeCardsH2?: boolean;
    threeCardsTitleTag?: React.ElementType;
    faqH3?: boolean;
    withPhotosTitleTag?: React.ElementType;
    withPhotosTitleCardTag?: React.ElementType;
    footerH2?: boolean;
  };
  sectionsOrder?: SectionName[];
  threeCardsBgColor?: string;
  threeCardsTopSeparationBar?: boolean;
  threeCardsBottomSeparationBar?: boolean;
  useComparisonScrollable?: boolean;
  useCouponsWithPhotos?: boolean;
  scrollableSections?: {
    key: keyof AlternativePageText;
    bgGradient?: string;
    needsH2?: boolean;
    needsH3?: boolean;
  }[];
  ctaUrl?: string;
  ctaCustomTextPadding?: string;
  ctaTextKey?: 'CtaSection' | 'CtaSection2';
  ctaTitleTag?: React.ElementType;
  ctaTitleClass?: string;
  ctaDescriptionClass?: string;
  ctaContainerDetails?: string;
  ctaBgPadding?: string;
  ctaSkipDynamicText?: boolean;
  tablesBottomSeparationBar?: boolean;
  tablesCompetitor?: string;
  heroCompetitor?: string;
  faqSkipPercentage?: boolean;
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
  couponCodeName,
  isS3Alternative = false,
  breadcrumbName,
  urlSlug,
  headings = {},
  sectionsOrder = DEFAULT_SECTIONS_ORDER,
  useComparisonScrollable = false,
  useCouponsWithPhotos = false,
  scrollableSections,
  ctaUrl = '/pricing',
  ctaCustomTextPadding = 'px-10 lg:px-0',
  ctaTextKey = 'CtaSection',
  ctaTitleTag: CtaTitleTag = 'p',
  ctaTitleClass = 'text-2xl font-semibold text-gray-95 lg:text-4xl',
  ctaDescriptionClass = 'text-base font-normal text-gray-55 lg:text-xl',
  ctaContainerDetails = 'shadow-lg backdrop-blur-[55px] bg-white',
  ctaBgPadding = 'px-20 py-10',
  ctaSkipDynamicText = false,
  tablesBottomSeparationBar = false,
  tablesCompetitor = 'Drive',
  heroCompetitor,
  faqSkipPercentage = false,
  threeCardsBgColor = 'linear-gradient(180deg, #F4F8FF 0%, #FFCECC 50%, #FFFFFF 100%)',
  threeCardsTopSeparationBar,
  threeCardsBottomSeparationBar = true,
}: ComparisonPageProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === metaTagId);
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

  const decimalDiscount = individualCoupon?.percentOff && 100 - individualCoupon.percentOff;
  const percentageDiscount = decimalDiscount ? 100 - decimalDiscount : undefined;
  const locale = lang as string;

  const {
    showThreeCards = false,
    privacyBgGradient = 'linear-gradient(180deg, #FFFFFF 0%, #FFCECC 50%, #FFFFFF 100%)',
    alternativeBgColor = 'linear-gradient(180deg, #FFFFFF 0%, #D6F3DD 50%, #FFFFFF 100%)',
  } = customSections;

  const ScrollableSection = useComparisonScrollable ? ComparisonScrollableSection : HorizontalScrollableSection;
  const ctaText = langJson[ctaTextKey] ?? langJson.CtaSection;

  const carousels = scrollableSections ?? [
    { key: 'PrivacyViolationsSection' as keyof AlternativePageText, bgGradient: privacyBgGradient },
  ];

  const sections: Record<SectionName, JSX.Element | null> = {
    pricing:
      isS3Alternative && langJson.PriceCardSection ? (
        <CloudObjectStoragePriceCardSection textContent={langJson.PriceCardSection} />
      ) : (
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
      ),

    scrollable: (
      <>
        {carousels.map((carousel) => (
          <ScrollableSection
            key={carousel.key as string}
            textContent={langJson[carousel.key]}
            bgGradient={carousel.bgGradient ?? privacyBgGradient}
            needsH2={carousel.needsH2 ?? headings.scrollableH2}
            needsH3={carousel.needsH3 ?? headings.scrollableH3}
          />
        ))}
      </>
    ),

    threeCards:
      showThreeCards && langJson.WhyNeedAlternativeSection ? (
        <ThreeCardsSection
          textContent={langJson.WhyNeedAlternativeSection}
          bgColor={threeCardsBgColor}
          cardColor="bg-white"
          topSeparationBar={threeCardsTopSeparationBar}
          bottomSeparationBar={threeCardsBottomSeparationBar}
          needsH2={headings.threeCardsH2}
          TitleTag={headings.threeCardsTitleTag}
        />
      ) : null,

    tables: (
      <TablesSection
        textContent={langJson.VersusSection}
        competitor={tablesCompetitor}
        percentage={percentageDiscount}
        logo={logo}
        sectionNeedsH2={headings.tablesSectionH2}
        TableTitleTag={headings.tableTitleTag}
        TableNameTag={headings.tableNameTag}
        bottomSeparationBar={tablesBottomSeparationBar}
      />
    ),

    withPhotos: useCouponsWithPhotos ? (
      <CouponsScrollableWithPhotosSection
        textContent={langJson.WhyBestAlternativeSection}
        bgColor={alternativeBgColor}
        TitleTag={headings.withPhotosTitleTag}
        TitleCardTag={headings.withPhotosTitleCardTag}
      />
    ) : (
      <HorizontalScrollableSectionWithPhotosSection
        textContent={langJson.WhyBestAlternativeSection}
        bgColor={alternativeBgColor}
      />
    ),
  };

  return (
    <>
      {breadcrumbName && urlSlug && (
        <Script type="application/ld+json" strategy="beforeInteractive">
          {sm_breadcrumb(breadcrumbName, urlSlug)}
        </Script>
      )}
      <Layout title={metatags[0].title} description={metatags[0].description} segmentName={segmentName} lang={lang}>
        <Navbar textContent={navbarLang} lang={locale} cta={['priceTable']} fixed />

        <HeroSection
          textContent={langJson.HeroSection}
          percentage={percentageDiscount}
          competitor={heroCompetitor ?? competitor}
        />

        <ComparisonTable
          textContent={langJson.HeaderSection}
          competitor={competitor}
          percentage={percentageDiscount}
          needH2={headings.comparisonTableH2}
        />

        {sectionsOrder.map((name) => (
          <Fragment key={name}>{sections[name]}</Fragment>
        ))}

        <FloatingCtaSectionv2
          textContent={ctaText}
          url={ctaUrl}
          customText={
            <div className={`flex flex-col gap-4 ${ctaCustomTextPadding}`}>
              <CtaTitleTag className={ctaTitleClass}>
                {ctaSkipDynamicText
                  ? ctaText.title
                  : parseDynamicText(ctaText.title, {
                      percentage: percentageDiscount,
                      discount: percentageDiscount,
                    })}
              </CtaTitleTag>
              <p className={ctaDescriptionClass}>
                {ctaSkipDynamicText
                  ? ctaText.description
                  : parseDynamicText(ctaText.description, {
                      percentage: percentageDiscount,
                      discount: percentageDiscount,
                    })}
              </p>
            </div>
          }
          containerDetails={ctaContainerDetails}
          bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
          bgPadding={ctaBgPadding}
        />

        <FAQSection
          textContent={langJson.FaqSection}
          percentageDiscount={faqSkipPercentage ? undefined : percentageDiscount?.toString()}
          needsH3={headings.faqH3}
        />

        <Footer
          textContent={footerLang}
          lang={locale}
          needsH2={headings.footerH2}
          breadcrumbItems={
            breadcrumbName && urlSlug
              ? [
                  { name: 'Encrypted Cloud Storage', url: '/' },
                  { name: breadcrumbName, url: `/${urlSlug}` },
                ]
              : undefined
          }
        />
      </Layout>
    </>
  );
};
