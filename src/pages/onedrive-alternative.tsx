import { TablesSection } from '@/components/comparison/TablesSection';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import cookies from '@/lib/cookies';
import { GetServerSidePropsContext } from 'next';
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
import { formatText } from '@/components/utils/format-text';

const OneDriveComparison = ({ metatagsDescriptions, langJson, lang, navbarLang, footerLang }): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'onedrive-alternative');
  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
    lifetimeCoupon: lifetimeCoupon,
    lifetimeCoupons,
  } = usePricing({
    couponCode: PromoCodeName.ONEDRIVE,
    couponCodeForLifetime: PromoCodeName.ONEDRIVE,
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
  const decimalDiscount = individualCoupon?.percentOff && 100 - individualCoupon.percentOff;
  const percentageDiscount = decimalDiscount ? 100 - decimalDiscount : 0;
  const privacyBgGradient = 'linear-gradient(180deg, #FFFFFF 0%, #FFCECC 50%, #FFFFFF 100%)';
  const alternativeBgColor = 'linear-gradient(180deg, #FFFFFF 0%, #D6F3DD 50%, #FFFFFF 100%)';

  return (
    <Layout
      title={metatags[0].title}
      description={metatags[0].description}
      segmentName={'OneDrive Comparison'}
      lang={lang}
    >
      <Navbar textContent={navbarLang} lang={locale} cta={['priceTable']} fixed />

      <HeroSection textContent={langJson.HeroSection} percentage={percentageDiscount} competitor={'OneDrive'} />

      <ComparisonTable textContent={langJson.HeaderSection} competitor={'OneDrive'} needH2 />

      <TablesSection
        textContent={langJson.VersusSection}
        competitor={'Drive'}
        logo={'/images/comparison/OneDrive-Letters.webp'}
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
      />

      <HorizontalScrollableSection textContent={langJson.PrivacyViolationsSection} bgGradient={privacyBgGradient} />

      <FloatingCtaSectionv2
        textContent={langJson.CtaSection}
        url={'#pricingTable'}
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

      <HorizontalScrollableSectionWithPhotosSection
        textContent={langJson.WhyBestAlternativeSection}
        bgColor={alternativeBgColor}
        TitleCardTag={'h3'}
      />

      <ThreeCardsSection
        textContent={langJson.WhyNeedAlternativeSection}
        bgColor={privacyBgGradient}
        cardColor="bg-white"
        topSeparationBar={false}
      />

      <FloatingCtaSectionv2
        textContent={langJson.CtaSection2}
        url={'#pricingTable'}
        customText={
          <div className="flex flex-col gap-4 px-10 lg:px-32">
            <p className="text-2xl font-semibold text-gray-95 lg:text-4xl">
              {formatText(langJson.CtaSection2.title, { percentage: percentageDiscount?.toString() ?? '70' })}
            </p>
            <p className="text-base font-normal text-gray-55 lg:text-xl">
              {formatText(langJson.CtaSection2.description, { percentage: percentageDiscount?.toString() ?? '70' })}
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

      <Footer textContent={footerLang} lang={locale} needsH2={false} />
    </Layout>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/onedrive-alternative.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

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

export default OneDriveComparison;
