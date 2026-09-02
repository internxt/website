import { TablesSection } from '@/components/comparison/TablesSection';
import Layout from '@/components/layout/Layout';
import { GetStaticPropsContext } from 'next';
import { PricingSectionWrapper } from '@/components/ppc/PricingSectionWrapper';
import { PromoCodeName } from '@/lib/types';
import usePricing from '@/hooks/usePricing';
import useCheckout from '@/hooks/useCheckout';
import FAQSection from '@/components/shared/sections/FaqSection';
import HorizontalScrollableSection from '@/components/comparison/HorizontalScrollableSection';
import { ComparisonTable } from '@/components/comparison/ComparisonTable';
import { HeroSection } from '@/components/comparison/HeroSection';
import FloatingCtaSectionv2 from '@/components/shared/FloatingCtaSectionV2';
import HorizontalScrollableSectionWithPhotosSection from '@/components/coupons/HorizontalScrollableSectionWithPhotos';
import ThreeCardsSection from '@/components/shared/sections/ThreeCardsSection';
import { parseDynamicText } from '@/components/utils/parse-dynamic-text';
import { MinimalNavbar } from '@/components/layout/navbars/MinimalNavbar';
import { MinimalFooter } from '@/components/layout/footers/MinimalFooter';

const ProtonComparison = ({ metatagsDescriptions, langJson, lang, navbarLang, footerLang }): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'proton-drive-alternative');

  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
    lifetimeCoupon: lifetimeCoupon,
    lifetimeCoupons,
  } = usePricing({
    couponCode: PromoCodeName.META85,
    couponCodeForLifetime: PromoCodeName.META85,
  });

  const onCheckoutButtonClicked = useCheckout({ individualCoupon, lifetimeCoupon, currencyValue });

  const locale = lang as string;
  const decimalDiscount = lifetimeCoupon?.percentOff && 100 - lifetimeCoupon.percentOff;
  const percentageDiscount = decimalDiscount ? 100 - decimalDiscount : undefined;
  const privacyBgGradient = 'linear-gradient(180deg, #FFFFFF 0%, #FFCECC 50%, #FFFFFF 100%)';
  const alternativeBgColor = 'linear-gradient(180deg, #FFFFFF 0%, #D6F3DD 50%, #FFFFFF 100%)';

  return (
    <>
      <Layout
        title={metatags[0].title}
        description={metatags[0].description}
        segmentName="PPC Proton Comparison"
        lang={lang}
        robots="noindex, follow"
      >
        <MinimalNavbar textContent={navbarLang} lang={locale} />
        <HeroSection textContent={langJson.HeroSection} percentage={percentageDiscount} competitor={'proton-drive'} />

        <ComparisonTable
          textContent={langJson.HeaderSection}
          competitor={'proton-drive'}
          percentage={percentageDiscount}
          needH2
        />

        <TablesSection
          textContent={langJson.VersusSection}
          competitor={'Drive'}
          percentage={percentageDiscount}
          logo={'/images/comparison/competitors/proton-drive-Letters.webp'}
          TableTitleTag={'h3'}
          sectionNeedsH2
          bottomSeparationBar
        />

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
          hideFreeCard
        />

        <HorizontalScrollableSection
          textContent={langJson.PrivacyViolationsSection}
          bgGradient={privacyBgGradient}
          needsH2
          needsH3
        />

        <ThreeCardsSection
          textContent={langJson.WhyNeedAlternativeSection}
          bgColor={privacyBgGradient}
          cardColor="bg-white"
          needsH2={false}
          bottomSeparationBar
        />

        <HorizontalScrollableSectionWithPhotosSection
          textContent={langJson.WhyBestAlternativeSection}
          bgColor={alternativeBgColor}
          TitleCardTag={'h3'}
          TitleTag={'h2'}
        />

        <FloatingCtaSectionv2
          textContent={langJson.CtaSection}
          url={'#billingButtons'}
          customText={
            <div className="flex flex-col gap-4 px-10 lg:px-32">
              <p className="text-2xl font-semibold text-gray-95 lg:text-4xl">
                {parseDynamicText(langJson.CtaSection.title, {
                  percentage: percentageDiscount,
                  discount: percentageDiscount,
                })}
              </p>
              <p className="text-base font-normal text-gray-55 lg:text-xl">
                {parseDynamicText(langJson.CtaSection.description, {
                  percentage: percentageDiscount,
                  discount: percentageDiscount,
                })}
              </p>
            </div>
          }
          containerDetails="shadow-lg backdrop-blur-[55px] bg-white"
          bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
          bgPadding="px-20 py-10"
        />

        <FAQSection
          textContent={langJson.FaqSection}
          percentageDiscount={percentageDiscount?.toString()}
          needsH3={false}
        />

        <MinimalFooter footerLang={footerLang.FooterSection} lang={locale} />
      </Layout>
    </>
  );
};

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/proton-drive-alternative.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  return {
    props: {
      lang,
      metatagsDescriptions,
      langJson,
      navbarLang,
      footerLang,
    },
  };
}

export default ProtonComparison;
