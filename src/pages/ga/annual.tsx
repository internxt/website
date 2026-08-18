/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetStaticPropsContext } from 'next';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import Layout from '@/components/layout/Layout';
import cookies from '@/lib/cookies';
import { PromoCodeName } from '@/lib/types';
import { MinimalFooter } from '@/components/layout/footers/MinimalFooter';
import usePricing from '@/hooks/usePricing';
import Navbar from '@/components/layout/navbars/Navbar';
import HeroSection from '@/components/partnersTemplate/HeroSection';
import FeaturesSection from '@/components/drive/FeaturesSection';
import HorizontalScrollableSection from '@/components/home/HorizontalScrollableSection';
import TrustedSection from '@/components/home/TrustedSection';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import { stripeService, Interval } from '@/services/stripe.service';
import { SpecialOfferText } from '@/assets/types/specialOfferTemplate';

interface AnnualProps {
  lang: GetStaticPropsContext['locale'];
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  langJson: SpecialOfferText;
  footerLang: FooterText;
}

const AnnualPage = ({ metatagsDescriptions, langJson, lang, footerLang, navbarLang }: AnnualProps): JSX.Element => {
  const metatags = metatagsDescriptions.find((desc) => desc.id === 'special-offer');
  const locale = lang as string;

  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
    lifetimeCoupon,
    lifetimeCoupons,
  } = usePricing({ couponCode: PromoCodeName.GADS85, couponCodeForLifetime: PromoCodeName.GADS85 });

  const percentOff = lifetimeCoupon?.percentOff === undefined ? '0' : String(lifetimeCoupon.percentOff);
  const decimalDiscountForLifetime = lifetimeCoupon?.percentOff && 100 - lifetimeCoupon.percentOff;
  const decimalDiscount = individualCoupon?.percentOff && 100 - individualCoupon.percentOff;

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

  return (
    <Layout title={metatags?.title ?? ''} description={metatags?.description ?? ''} segmentName="Home" lang={lang}>
      <Navbar lang={locale} textContent={navbarLang} cta={['payment']} isLinksHidden hideCTA hideLogoLink />

      <HeroSection textContent={langJson.HeroSection} percentOff={percentOff} showSubtitle={false} />

      <PricingSectionWrapper
        textContent={langJson.tableSection}
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
        startFromPlan="Individuals"
        startIndividualPlansFromInterval={Interval.Year}
        popularPlanBySize="3TB"
        sectionDetails="bg-white lg:py-20"
        hideFreeCard
      />

      <FeaturesSection textContent={langJson.FeaturesSection} lang={lang} download={false} showLastSection={false} />

      <TrustedSection textContent={langJson.TrustedBySection} bottomBar={false} />

      <HorizontalScrollableSection textContent={langJson.NextGenSection} />

      <MinimalFooter footerLang={footerLang.FooterSection} lang={locale} />
    </Layout>
  );
};

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/specialOfferTemplate.json`);
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

export default AnnualPage;
