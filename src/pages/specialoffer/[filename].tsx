import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Footer from '@/components/layout/footers/Footer';
import Navbar from '@/components/layout/navbars/Navbar';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/affiliates/brave/HeroSection';
import CtaSection from '@/components/shared/CtaSection';
import usePricing from '@/hooks/usePricing';
import { Interval, stripeService } from '@/services/stripe.service';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import MostSecureSection from '@/components/affiliates/brave/MostSecureSection';
import ScrollableSection from '@/components/affiliates/brave/ScrollableSection';
import { SpecialOfferText } from '@/assets/types/specialOffer';
import { PromoCodeName } from '@/lib/types';

interface PartnerDiscountProps {
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  langJson: SpecialOfferText;
  footerLang: FooterText;
  pathname: string;
  lang: string;
}

const ALLOWED_PATHS = ['bevalk', 'hacksviss', 'securiters', 'exclusiveoffer', 'valencia'];

const COUPON_CODES = {
  bevalk: PromoCodeName.Bevalk,
  hacksviss: PromoCodeName.Hacksviss,
  securiters: PromoCodeName.Securiters,
  exclusiveoffer: PromoCodeName.Exclusive85,
  valencia: PromoCodeName.ValenciaCF,
};

const SpecialOfferPage = ({
  metatagsDescriptions,
  langJson,
  navbarLang,
  footerLang,
  pathname,
  lang,
}: PartnerDiscountProps): JSX.Element => {
  const router = useRouter();
  const selectedPathname = ALLOWED_PATHS.find((p) => p === pathname);

  useEffect(() => {
    if (!selectedPathname) {
      router.replace('/specialoffer');
    }
  }, [selectedPathname, router]);

  const couponCode = COUPON_CODES[pathname];

  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'special-offer');

  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
  } = usePricing({
    couponCode,
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

  const percentOff = decimalDiscount === 13 ? '87' : '85';

  const parseText = (text: string) => (typeof text === 'string' ? text.replace(/{{discount}}/g, percentOff) : text);

  return (
    <Layout title={metatags[0]?.title} description={metatags[0]?.description} segmentName="Partners" lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['priceTable']} fixed isLinksHidden />

      <HeroSection
        textContent={{
          ...langJson.HeroSection,
          info: parseText(langJson.HeroSection.info),
          cta: parseText(langJson.HeroSection.cta),
        }}
      />

      <MostSecureSection textContent={langJson.MostSecureSection} />
      <ScrollableSection textContent={langJson.ScrollableSection} />

      <PricingSectionWrapper
        textContent={{
          ...langJson.PaymentSection,
          header: parseText(langJson.PaymentSection.header),
        }}
        decimalDiscount={{
          individuals: decimalDiscount,
          lifetime: decimalDiscount,
        }}
        lang={lang}
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

      <CtaSection
        textContent={{
          ...langJson.CtaSection1,
          description: parseText(langJson.CtaSection1.description),
          cta: parseText(langJson.CtaSection1.cta),
        }}
        url={`#priceTable`}
      />
      <Footer textContent={footerLang} lang={lang} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = 'es';
  const pathname = ctx.params.filename;

  const metatagsDescriptions = require(`@/assets/lang/es/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/es/specialoffer/specialOffer.json`);
  const navbarLang = require(`@/assets/lang/es/navbar.json`);
  const footerLang = require(`@/assets/lang/es/footer.json`);

  return {
    props: {
      metatagsDescriptions,
      langJson,
      navbarLang,
      footerLang,
      lang,
      pathname,
    },
  };
}

export default SpecialOfferPage;
