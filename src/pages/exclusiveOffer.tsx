import Footer from '@/components/layout/footers/Footer';
import Navbar from '@/components/layout/navbars/Navbar';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/affiliates/brave/HeroSection';
import CtaSection from '@/components/shared/CtaSection';
import usePricing from '@/hooks/usePricing';
import { PromoCodeName } from '@/lib/types';
import { Interval, stripeService } from '@/services/stripe.service';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import MostSecureSection from '@/components/affiliates/brave/MostSecureSection';
import ScrollableSection from '@/components/affiliates/brave/ScrollableSection';
import { SpecialOfferText } from '@/assets/types/specialOffer';
import { GetServerSidePropsContext } from 'next';

interface PartnerDiscountProps {
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  langJson: SpecialOfferText;
  footerLang: FooterText;
  lang: GetServerSidePropsContext['locale'];
}

const PartnerDiscount = ({
  metatagsDescriptions,
  langJson,
  navbarLang,
  footerLang,
  lang,
}: PartnerDiscountProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'special-offer');
  const locale = lang as string;
  console.log(locale);
  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
  } = usePricing({
    couponCode: PromoCodeName.Exclusive85,
  });

  const onCheckoutButtonClicked = (priceId: string, isCheckoutForLifetime: boolean) => {
    stripeService.redirectToCheckout(
      priceId,
      currencyValue,
      'individual',
      isCheckoutForLifetime,
      individualCoupon?.name,
    );
  };

  const decimalDiscount = individualCoupon?.percentOff && 100 - individualCoupon.percentOff;

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Partners" lang={lang}>
      <Navbar textContent={navbarLang} lang={locale} cta={['priceTable']} fixed isLinksHidden />

      <HeroSection textContent={langJson.HeroSection} />

      <MostSecureSection textContent={langJson.MostSecureSection} />

      <ScrollableSection textContent={langJson.ScrollableSection} />

      <PricingSectionWrapper
        textContent={langJson.PaymentSection}
        decimalDiscount={{
          individuals: decimalDiscount,
          lifetime: decimalDiscount,
        }}
        lang={locale}
        products={products}
        popularPlanBySize={'5TB'}
        loadingCards={loadingCards}
        startIndividualPlansFromInterval={Interval.Lifetime}
        isBrave
        hideFreeCard
        onCheckoutButtonClicked={onCheckoutButtonClicked}
        hideSwitchSelector
        hideBusinessSelector
        showPromo={false}
        backgroundColorComponent="bg-gray-1"
      />

      <CtaSection textContent={langJson.CtaSection1} url={`#priceTable`} />

      <Footer textContent={footerLang} lang={locale} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/en/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/specialoffer/specialOffer.json`);
  const navbarLang = require(`@/assets/lang/en/navbar.json`);
  const footerLang = require(`@/assets/lang/en/footer.json`);

  return {
    props: {
      metatagsDescriptions,
      langJson,
      navbarLang,
      footerLang,
      lang,
    },
  };
}

export default PartnerDiscount;
