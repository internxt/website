import cookies from '@/lib/cookies';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import HeroSection from '@/components/techradar-discount/HeroSection';
import Footer from '@/components/layout/footers/Footer';
import { GetServerSidePropsContext } from 'next';
import ScrollableSection from '@/components/affiliates/brave/ScrollableSection';
import CtaSection from '@/components/shared/CtaSection';
import FloatingCtaSection from '@/components/affiliates/FloatingCtaSection';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import { PromoCodeName } from '@/lib/types';
import usePricing from '@/hooks/usePricing';
import { stripeService } from '@/services/stripe.service';

const PartnerDiscount = ({ lang, metatagsDescriptions, navbarLang, langJson, footerLang }): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'techradar-discount');
  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
    lifetimeCoupon: lifetimeCoupon,
    lifetimeCoupons,
  } = usePricing({
    couponCode: PromoCodeName.TechRadarDiscount,
    couponCodeForLifetime: PromoCodeName.TechRadarDiscount,
  });

  const onCheckoutButtonClicked = (priceId: string, isCheckoutForLifetime: boolean) => {
    const couponCodeForCheckout = isCheckoutForLifetime ? lifetimeCoupon : individualCoupon;

    stripeService.redirectToCheckout(
      priceId,
      currencyValue,
      'individual',
      isCheckoutForLifetime,
      couponCodeForCheckout?.name,
    );
  };

  const decimalDiscountForLifetime = lifetimeCoupon?.percentOff && 100 - lifetimeCoupon.percentOff;
  const decimalDiscount = individualCoupon?.percentOff && 100 - individualCoupon.percentOff;
  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Partners" lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

      <HeroSection textContent={langJson.HeroSection} />

      <PricingSectionWrapper
        textContent={langJson.tableSection}
        decimalDiscount={{
          individuals: decimalDiscount,
          lifetime: decimalDiscountForLifetime,
        }}
        lifetimeCoupons={lifetimeCoupons}
        lang={'en'}
        products={products}
        loadingCards={loadingCards}
        onCheckoutButtonClicked={onCheckoutButtonClicked}
        hideBusinessCards
        hideBusinessSelector
        popularPlanBySize="5TB"
        showPromo={false}
        backgroundColorComponent="bg-white-1"
        isBrave
      />

      <FloatingCtaSection textContent={langJson.CtaSection} />

      <ScrollableSection textContent={langJson.ScrollableSection} />

      <CtaSection
        textContent={langJson.CtaSection2}
        customDescription={<p className="font-regular text-xl text-white">{langJson.CtaSection2.description}</p>}
        url="#priceTable"
      />

      <Footer textContent={footerLang} lang="en" />
    </Layout>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/en/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/en/techradar-discount.json`);
  const navbarLang = require(`@/assets/lang/en/navbar.json`);
  const footerLang = require(`@/assets/lang/en/footer.json`);

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

export default PartnerDiscount;
