import Footer from '@/components/layout/footers/Footer';
import Navbar from '@/components/layout/navbars/Navbar';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/annual/HeroSection';
import { PromoCodeName } from '@/lib/types';
import FeatureSection from '@/components/annual/FeatureSection';
import CtaSection from '@/components/annual/CtaSection';
import FeaturesSection from '@/components/annual/FeaturesSection';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import usePricing from '@/hooks/usePricing';
import { Interval, stripeService } from '@/services/stripe.service';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { AnnualText } from '@/assets/types/annual';

interface AnnualProps {
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  langJson: AnnualText;
  footerLang: FooterText;
  lang: string;
}

const Annual = ({ metatagsDescriptions, langJson, navbarLang, footerLang, lang }: AnnualProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'internxt-annual');
  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
    lifetimeCoupons,
  } = usePricing({
    couponCode: PromoCodeName.Affiliates85,
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
  const locale = lang as string;

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Lifetime" lang={lang}>
      <Navbar textContent={navbarLang} isLinksHidden={true} lang={locale} cta={['default']} fixed />

      <HeroSection textContent={langJson.HeroSection} />

      <FeaturesSection textContent={langJson.FeaturesSection} />

      <PricingSectionWrapper
        textContent={langJson.tableSection}
        decimalDiscount={{
          individuals: individualCoupon?.percentOff && 100 - individualCoupon.percentOff,
          lifetime: individualCoupon?.percentOff && 100 - individualCoupon.percentOff,
        }}
        lifetimeCoupons={lifetimeCoupons}
        lang={locale}
        products={products}
        loadingCards={loadingCards}
        onCheckoutButtonClicked={onCheckoutButtonClicked}
        hidePlanSelectorComponent={true}
        hideBusinessSelector
        hideSwitchSelector
        isAnnual
        startFromPlan="Individuals"
        startIndividualPlansFromInterval={Interval.Year}
        hideFreeCard
        showPromo={false}
        backgroundColorComponent="bg-white"
      />

      <FeatureSection textContent={langJson.FeatureSection} />

      <CtaSection textContent={langJson.CtaSection} />

      <Footer textContent={footerLang} lang={locale} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/annual.json`);
  const infoSectionLang = require(`@/assets/lang/${lang}/home.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  return {
    props: {
      lang,
      metatagsDescriptions,
      langJson,
      navbarLang,
      footerLang,
      infoSectionLang,
    },
  };
}

export default Annual;
