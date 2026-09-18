import { GetServerSidePropsContext } from 'next';

import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import Footer from '@/components/layout/footers/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import HeroSection from '@/components/deals/HeroSection';
import { PriceTableSection, PriceTableText } from '@/components/final-challenge/PriceTableSection';
import TitleAndDescriptionSection from '@/components/shared/components/TitleAndDescriptionSection';
import usePricing from '@/hooks/usePricing';
import cookies from '@/lib/cookies';
import { PromoCodeName } from '@/lib/types';
import { stripeService } from '@/services/stripe.service';

const HERO_IMAGE = '/images/black-friday/bf-cloud-storage.webp';

interface FinalChallengeText {
  HeroSection: {
    products: Record<string, string>;
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    claimDeal: string;
  };
  RewardSection: {
    title: string;
    description: string[];
  };
  TableSection: PriceTableText;
}

interface FinalChallengeProps {
  lang: string;
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  textContent: FinalChallengeText;
  footerLang: FooterText;
}

const FinalChallengeEmPage = ({
  metatagsDescriptions,
  textContent,
  lang,
  navbarLang,
  footerLang,
}: Readonly<FinalChallengeProps>): JSX.Element => {
  const metatags = metatagsDescriptions.find((desc) => desc.id === 'final-challenge-em');

  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
    lifetimeCoupon,
  } = usePricing({
    couponCodeForLifetime: PromoCodeName.emch,
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

  const decimalDiscountForLifetime = lifetimeCoupon?.percentOff && 100 - lifetimeCoupon.percentOff;
  const percentOff = lifetimeCoupon?.percentOff !== undefined ? String(lifetimeCoupon.percentOff) : '0';

  return (
    <Layout
      title={metatags?.title ?? ''}
      description={metatags?.description ?? ''}
      segmentName="FinalChallenge"
      lang={lang}
      robots="noindex,follow"
    >
      <Navbar textContent={navbarLang} lang={lang} cta={['chooseStorage']} fixed />

      <HeroSection textContent={textContent.HeroSection} percentOff={percentOff} darkMode image={HERO_IMAGE} />

      <TitleAndDescriptionSection textContent={textContent.RewardSection} darkMode />

      <PriceTableSection
        textContent={textContent.TableSection}
        products={products}
        loadingCards={loadingCards}
        lang={lang}
        decimalDiscountForLifetime={decimalDiscountForLifetime}
        onCheckoutButtonClicked={onCheckoutButtonClicked}
      />

      <Footer textContent={footerLang} lang={lang} darkMode />
    </Layout>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/final-challenge.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      metatagsDescriptions,
      textContent,
      navbarLang,
      footerLang,
    },
  };
}

export default FinalChallengeEmPage;
