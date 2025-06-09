import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import Footer from '@/components/layout/footers/Footer';
import { PromoCodeName } from '@/lib/types';
import usePricing from '@/hooks/usePricing';
import { Interval, stripeService } from '@/services/stripe.service';
import FAQSection from '@/components/shared/sections/FaqSection';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { BraveText } from '@/assets/types/brave-page';
import CtaSection from '@/components/shared/CtaSection';
import MostSecureSection from '@/components/affiliates/brave/MostSecureSection';
import ScrollableSection from '@/components/affiliates/brave/ScrollableSection';
import HeroSection from '@/components/affiliates/brave/HeroSection';

interface BravePageProps {
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  textContent: BraveText;
  footerLang: FooterText;
}

export default function BravePage({
  metatagsDescriptions,
  navbarLang,
  footerLang,
  textContent,
}: BravePageProps): JSX.Element {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'pricing');

  const lang = 'en';

  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
    lifetimeCoupons,
  } = usePricing({
    couponCode: PromoCodeName.Brave,
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

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['priceTable']} fixed />

      <HeroSection textContent={textContent.HeroSection} />

      <MostSecureSection textContent={textContent.MostSecureSection} />

      <ScrollableSection textContent={textContent.ScrollableSection} />

      <PricingSectionWrapper
        textContent={textContent.tableSection}
        decimalDiscount={{
          individuals: individualCoupon?.percentOff && 100 - individualCoupon.percentOff,
          lifetime: individualCoupon?.percentOff && 100 - individualCoupon.percentOff,
        }}
        lifetimeCoupons={lifetimeCoupons}
        lang={lang}
        products={products}
        loadingCards={loadingCards}
        onCheckoutButtonClicked={onCheckoutButtonClicked}
        hideBusinessSelector
        hideSwitchSelector
        isBrave
        startFromPlan="Lifetime"
        startIndividualPlansFromInterval={Interval.Lifetime}
        hideFreeCard
        showPromo={false}
        backgroundColorComponent="bg-gray-1"
      />

      <CtaSection
        textContent={textContent.CtaSection2}
        customDescription={<p className="text-regular text-xl">{textContent.CtaSection2.description}</p>}
        url="#priceTable"
      />

      <FAQSection textContent={textContent.FaqSection} />

      <Footer textContent={footerLang} lang={lang} hideNewsletter={false} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const metatagsDescriptions = require(`@/assets/lang/en/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/en/brave.json`);
  const footerLang = require(`@/assets/lang/en/footer.json`);
  const navbarLang = require(`@/assets/lang/en/navbar.json`);

  return {
    props: {
      metatagsDescriptions,
      footerLang,
      navbarLang,
      textContent,
    },
  };
}
