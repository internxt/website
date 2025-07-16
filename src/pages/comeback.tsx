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
import AnimatedHeroSection from '@/components/shared/HeroSections/AnimatedHeroSection';
import { Alarm, Check } from '@phosphor-icons/react';
import Countdown from '@/components/components/Countdown';
import Link from 'next/link';

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
    couponCode: PromoCodeName.Comeback90,
  });
  const locale = lang as string;

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

      <AnimatedHeroSection
        textComponent={
          <>
            <div className="flex w-full flex-row items-center justify-center rounded-lg lg:justify-start">
              <Alarm className="mr-6 h-6 w-6 text-white" />
              <Countdown textFont="font-medium" textHeight="text-2xl text-white" />
            </div>
            <div className="flex flex-col font-medium">
              <h1 className="text-5xl  text-white">{textContent.HeroSection.title}</h1>
              <p className="font-regular pt-4 text-2xl ">
                <span className="text-white">{textContent.HeroSection.subtitle}</span>
              </p>
            </div>
            <div className="mx-auto flex flex-col lg:mx-0">
              {textContent.HeroSection.features.map((feat) => (
                <div key={feat} className="flex flex-row gap-2">
                  <Check className="pt-2 text-green-1 lg:pt-0" weight="bold" size={24} />
                  <p className="text-left text-lg font-semibold text-white ">{feat}</p>
                </div>
              ))}
            </div>
            <Link
              href={'#priceTable'}
              className={`z-10 flex w-max justify-center rounded-lg bg-primary px-6 py-3 text-xl font-medium text-white hover:bg-primary-dark`}
            >
              {textContent.HeroSection.cta1}
            </Link>
          </>
        }
      />

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
