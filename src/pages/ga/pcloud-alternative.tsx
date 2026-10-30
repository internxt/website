import { TablesSection } from '@/components/comparison/TablesSection';
import Layout from '@/components/layout/Layout';
import { GetStaticPropsContext } from 'next';
import { PricingSectionWrapper } from '@/components/ppc/PricingSectionWrapper';
import { PromoCodeName } from '@/lib/types';
import usePricing from '@/hooks/usePricing';
import { stripeService } from '@/services/stripe.service';
import FAQSection from '@/components/shared/sections/FaqSection';
import HorizontalScrollableSection from '@/components/comparison/HorizontalScrollableSection';
import FloatingCtaSectionv2 from '@/components/shared/FloatingCtaSectionV2';
import { ComparisonTable } from '@/components/comparison/ComparisonTable';
import { HeroSection } from '@/components/comparison/HeroSection';
import { MinimalNavbar } from '@/components/layout/navbars/MinimalNavbar';
import { MinimalFooter } from '@/components/layout/footers/MinimalFooter';

const PCloudComparison = ({
  darkMode = false,
  metatagsDescriptions,
  langJson,
  lang,
  navbarLang,
  footerLang,
}): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'pcloud-alternative');

  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
    lifetimeCoupon: lifetimeCoupon,
    lifetimeCoupons,
  } = usePricing({
    couponCode: PromoCodeName.GADS85,
    couponCodeForLifetime: PromoCodeName.GADS85,
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

  const decimalDiscount = lifetimeCoupon?.percentOff && 100 - lifetimeCoupon.percentOff;
  const percentageDiscount = decimalDiscount ? 100 - decimalDiscount : undefined;

  return (
    <>
      <Layout
        title={metatags[0].title}
        description={metatags[0].description}
        segmentName="PPC pCloud Comparison"
        lang={lang}
      >
        <MinimalNavbar textContent={navbarLang} lang={lang} />

        <HeroSection textContent={langJson.HeroSection} percentage={percentageDiscount} competitor={'pCloud'} darkMode={darkMode} />

        <ComparisonTable textContent={langJson.HeaderSection} competitor="pCloud" percentage={percentageDiscount} needH2 darkMode={darkMode} />

        <PricingSectionWrapper
          textContent={langJson.tableSection}
          decimalDiscount={{
            individuals: decimalDiscount,
            lifetime: decimalDiscount,
          }}
          lifetimeCoupons={lifetimeCoupons}
          lang={lang}
          products={products}
          loadingCards={loadingCards}
          onCheckoutButtonClicked={onCheckoutButtonClicked}
          sectionDetails="bg-white dark:bg-gray-95 lg:py-20 py-10"
          hideFreeCard
          darkMode={darkMode}
        />

        <TablesSection
          textContent={langJson.VersusSection}
          competitor={'pCloud'}
          percentage={percentageDiscount}
          logo="/images/comparison/competitors/pCloud.webp"
          sectionNeedsH2
          darkMode={darkMode}
        />

        <HorizontalScrollableSection
          textContent={langJson.HorizontalScrollableSection}
          bgGradient="bg-[linear-gradient(180deg,#FFFFFF_0%,#FFCECC_50%,#FFFFFF_100%)] dark:bg-[linear-gradient(180deg,#1C1C1C_0%,#3A1412_50%,#1C1C1C_100%)]"
        />

        <HorizontalScrollableSection
          textContent={langJson.HorizontalScrollableSectionV2}
          bgGradient="bg-[linear-gradient(180deg,#FFFFFF_0%,#D6F3DD_50%,#FFFFFF_100%)] dark:bg-[linear-gradient(180deg,#1C1C1C_0%,#0E2A16_50%,#1C1C1C_100%)]"
          needsH2
          needsH3
        />

        <FloatingCtaSectionv2
          textContent={langJson.CtaSection2}
          url={'#billingButtons'}
          customText={
            <>
              <div className="flex flex-col gap-4 px-10 text-center lg:px-0">
                <h2 className="text-2xl font-semibold text-gray-95 dark:text-white-95 lg:text-4xl">
                  {langJson.CtaSection2.title}
                </h2>
                <p className="text-base font-normal text-gray-55 dark:text-green-120 lg:text-xl">
                  {langJson.CtaSection2.description}
                </p>
              </div>
            </>
          }
          containerDetails="shadow-lg backdrop-blur-[55px] bg-white dark:bg-gray-95"
          bgGradientContainerColor="bg-[linear-gradient(115.95deg,rgba(244,248,255,0.75)_10.92%,rgba(255,255,255,0.08)_96.4%)]"
        />

        <FAQSection textContent={langJson.FaqSection} needsH3={false} darkMode={darkMode} />

        <MinimalFooter footerLang={footerLang.FooterSection} lang={lang} />
      </Layout>
    </>
  );
};

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/pcloud-alternative.json`);
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

export default PCloudComparison;
