import { TablesSection } from '@/components/comparison/TablesSection';
import Layout from '@/components/layout/Layout';
import cookies from '@/lib/cookies';
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

const MegaComparison = ({ metatagsDescriptions, langJson, lang, navbarLang, footerLang }): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'mega-alternative');

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
        segmentName="PPC Mega Comparison"
        lang={lang}
        robots="noindex, follow"
      >
        <MinimalNavbar textContent={navbarLang} lang={lang} />

        <HeroSection textContent={langJson.HeroSection} percentage={percentageDiscount} competitor={'Mega'} />

        <ComparisonTable
          textContent={langJson.HeaderSection}
          competitor="MEGA"
          percentage={percentageDiscount}
          needH2
        />

        <TablesSection
          textContent={langJson.VersusSection}
          competitor={'Mega'}
          percentage={percentageDiscount}
          logo="/images/comparison/competitors/Mega_Letters.webp"
          sectionNeedsH2
        />

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
          hideSwitchSelector
          hideBusinessSelector
          sectionDetails="bg-white lg:py-20 py-10"
          hideFreeCard
        />

        <HorizontalScrollableSection
          textContent={langJson.HorizontalScrollableSectionV2}
          bgGradient="linear-gradient(180deg, #FFFFFF 0%, #D6F3DD 50%, #FFFFFF 100%)"
          needsH2
          needsH3
        />

        <HorizontalScrollableSection
          textContent={langJson.HorizontalScrollableSection}
          bgGradient="linear-gradient(180deg, #FFFFFF 0%, #FFCECC 50%, #FFFFFF 100%)"
          needsH2
        />

        <FloatingCtaSectionv2
          textContent={langJson.CtaSection}
          url="#billingButtons"
          customText={
            <div className="flex flex-col gap-4 px-10 text-center lg:px-32">
              <p className="text-2xl font-semibold text-gray-95 lg:text-4xl">{langJson.CtaSection.title}</p>
              <p className="text-base font-normal text-gray-55 lg:text-xl">{langJson.CtaSection.description}</p>
            </div>
          }
          containerDetails="shadow-lg backdrop-blur-[55px] bg-white"
          bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
        />

        <FAQSection textContent={langJson.FaqSection} needsH3={false} />

        <MinimalFooter footerLang={footerLang.FooterSection} lang={lang} />
      </Layout>
    </>
  );
};

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/mega-alternative.json`);
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

export default MegaComparison;
