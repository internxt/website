import { GetServerSidePropsContext } from 'next';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { Resurrection } from '@/assets/types/resurrection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import { MinimalFooter } from '@/components/layout/footers/MinimalFooter';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import { Interval, stripeService } from '@/services/stripe.service';
import CtaSection from '@/components/shared/CtaSection';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import usePricing from '@/hooks/usePricing';
import cookies from '@/lib/cookies';
import { PromoCodeName } from '@/lib/types';
import FeaturesSection from '@/components/comeback/FeatureSection';
import HeroSection from '@/components/comeback/HeroSection';

interface ResurrectionCampaignProps {
  lang: GetServerSidePropsContext['locale'];
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  textContent: Resurrection;
  footerLang: FooterText;
}

const ResurrectionCampaign = ({
  metatagsDescriptions,
  textContent,
  lang,
  navbarLang,
  footerLang,
}: ResurrectionCampaignProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'resurrection-campaign');

  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
    lifetimeCoupons,
  } = usePricing({
    couponCode: PromoCodeName.Resurrection,
  });
  const locale = lang as string;

  const percent = '90%';

  const onCheckoutButtonClicked = (priceId: string, isCheckoutForLifetime: boolean) => {
    const lifetimeSpacePlan = products?.individuals[Interval.Lifetime].find((product) => product.priceId === priceId);

    const couponCodeForB2CPlans =
      lifetimeSpacePlan && lifetimeCoupons
        ? (lifetimeCoupons?.[lifetimeSpacePlan.storage] as any).promoCodeName
        : individualCoupon?.name;

    stripeService.redirectToCheckout(
      priceId,
      currencyValue,
      'individual',
      isCheckoutForLifetime,
      couponCodeForB2CPlans,
    );
  };

  return (
    <Layout
      title={metatags[0].title}
      description={metatags[0].description}
      segmentName="Comeback"
      lang={lang}
      isBannerFixed={false}
    >
      <Navbar textContent={navbarLang} lang={locale} cta={['default']} fixed mode="payment" isLinksHidden />

      <HeroSection lang={locale} textContent={textContent.HeroSection} />

      <PricingSectionWrapper
        textContent={textContent.tableSection}
        decimalDiscount={{
          individuals: individualCoupon?.percentOff && 100 - individualCoupon?.percentOff,
          lifetime: individualCoupon?.percentOff && 100 - individualCoupon.percentOff,
        }}
        lifetimeCoupons={lifetimeCoupons}
        lang={locale}
        products={products}
        loadingCards={loadingCards}
        onCheckoutButtonClicked={onCheckoutButtonClicked}
        hideBusinessSelector
        hideSwitchSelector
        hideFreeCard
        showPromo={false}
      />

      <FeaturesSection textContent={textContent.WhyComebackToInternxt} />

      <TestimonialsSection textContent={textContent.TestimonialsSection} bgColor="bg-white" />

      <CtaSection
        textContent={textContent.CtaSection}
        url="#billingButtons"
        customDescription={<p className="font-regular max-w-[360px] text-xl">{textContent.CtaSection.description}</p>}
      />

      <MinimalFooter footerLang={footerLang.FooterSection} lang={locale} />
    </Layout>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = 'en';

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/comeback.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      metatagsDescriptions,
      navbarLang,
      textContent,
      footerLang,
    },
  };
}

export default ResurrectionCampaign;
