import { TablesSection } from '@/components/comparison/TablesSection';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import { GetStaticPropsContext } from 'next';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import { PromoCodeName } from '@/lib/types';
import usePricing from '@/hooks/usePricing';
import { stripeService } from '@/services/stripe.service';
import FAQSection from '@/components/shared/sections/FaqSection';
import HorizontalScrollableSection from '@/components/comparison/HorizontalScrollableSection';
import { ComparisonTable } from '@/components/comparison/ComparisonTable';
import { HeroSection } from '@/components/comparison/HeroSection';
import Footer from '@/components/layout/footers/Footer';
import FloatingCtaSectionv2 from '@/components/shared/FloatingCtaSectionV2';
import HorizontalScrollableSectionWithPhotosSection from '@/components/coupons/HorizontalScrollableSectionWithPhotos';
import ThreeCardsSection from '@/components/shared/sections/ThreeCardsSection';
import { parseDynamicText } from '@/components/utils/parse-dynamic-text';
import { sm_breadcrumb } from '@/components/utils/schema-markup-generator';
import Script from 'next/script';

const SyncComparison = ({
  darkMode = false,
  metatagsDescriptions,
  langJson,
  lang,
  navbarLang,
  footerLang,
}): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'sync-alternative');
  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
    lifetimeCoupon: lifetimeCoupon,
    lifetimeCoupons,
  } = usePricing({
    couponCode: PromoCodeName.SYNC,
    couponCodeForLifetime: PromoCodeName.SYNC,
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

  const locale = lang as string;
  const decimalDiscount = lifetimeCoupon?.percentOff && 100 - lifetimeCoupon.percentOff;
  const percentageDiscount = decimalDiscount ? 100 - decimalDiscount : undefined;
  const privacyBgGradient = 'bg-[linear-gradient(180deg,#FFFFFF_0%,#FFCECC_50%,#FFFFFF_100%)] dark:bg-[linear-gradient(180deg,#1C1C1C_0%,#3A1412_50%,#1C1C1C_100%)]';
  const alternativeBgColor = 'bg-[linear-gradient(180deg,#FFFFFF_0%,#D6F3DD_50%,#FFFFFF_100%)] dark:bg-[linear-gradient(180deg,#1C1C1C_0%,#0E2A16_50%,#1C1C1C_100%)]';
  const alternativeBgColorLight = 'bg-[linear-gradient(180deg,#FFFFFF_0%,#D6F3DD_50%,#FFFFFF_100%)]';

  return (
    <>
      <Script type="application/ld+json" strategy="beforeInteractive">{sm_breadcrumb('Alternative to sync', 'sync-alternative')}</Script>
      <Layout
        title={metatags[0].title}
        description={metatags[0].description}
        segmentName={'Drive Comparison'}
        lang={lang}
      >
        <Navbar textContent={navbarLang} lang={locale} cta={['priceTable']} fixed />
        <HeroSection textContent={langJson.HeroSection} percentage={percentageDiscount} competitor={'sync'} darkMode={darkMode} />

        <ComparisonTable textContent={langJson.HeaderSection} competitor={'sync'} percentage={percentageDiscount} needH2 darkMode={darkMode} />

        <TablesSection
          textContent={langJson.VersusSection}
          competitor={'Drive'}
          percentage={percentageDiscount}
          logo={'/images/comparison/sync-Letters.webp'}
          sectionNeedsH2
          bottomSeparationBar
          TableTitleTag={'h3'}
          darkMode={darkMode}
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
          sectionDetails="bg-white dark:bg-gray-95 lg:py-20 py-10"
          darkMode={darkMode}
        />
        <HorizontalScrollableSection
          textContent={langJson.PrivacyViolationsSection}
          bgGradient={privacyBgGradient}
          needsH2
          needsH3
        />

        {langJson.WhyNeedAlternativeSection && (
          <ThreeCardsSection
            textContent={langJson.WhyNeedAlternativeSection}
            bgColor={alternativeBgColor}
            cardColor="bg-white dark:bg-gray-95"
            bottomSeparationBar={true}
            needsH2={false}
            darkMode={darkMode}
          />
        )}

        <HorizontalScrollableSectionWithPhotosSection
          textContent={langJson.WhyBestAlternativeSection}
          bgColor={alternativeBgColorLight}
          TitleTag={'h2'}
        />

        <FloatingCtaSectionv2
          textContent={langJson.CtaSection}
          url={'/drive'}
          customText={
            <div className="flex flex-col gap-4 px-10 lg:px-40">
              <p className="text-2xl font-semibold text-gray-95 dark:text-white-95 lg:text-4xl">
                {parseDynamicText(langJson.CtaSection.title, { percentage: percentageDiscount, discount: percentageDiscount }, darkMode)}
              </p>
              <p className="text-base font-normal text-gray-55 dark:text-green-120 lg:text-xl">
                {parseDynamicText(langJson.CtaSection.description, { percentage: percentageDiscount, discount: percentageDiscount }, darkMode)}
              </p>
            </div>
          }
          containerDetails="shadow-lg backdrop-blur-[55px] bg-white dark:bg-gray-95"
          bgGradientContainerColor="bg-[linear-gradient(115.95deg,rgba(244,248,255,0.75)_10.92%,rgba(255,255,255,0.08)_96.4%)]"
          bgPadding="px-20 py-10"
        />

        <FAQSection
          textContent={langJson.FaqSection}
          percentageDiscount={percentageDiscount?.toString()}
          needsH3={false}
          darkMode={darkMode}
        />

        <Footer
          textContent={footerLang}
          lang={locale}
          needsH2={false}
          breadcrumbItems={[
            { name: 'Encrypted Cloud Storage', url: '/' },
            { name: 'Alternative to sync', url: '/sync-alternative' },
          ]}
          darkMode={darkMode}
        />
      </Layout>
    </>
  );
};

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/sync-alternative.json`);
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

export default SyncComparison;
