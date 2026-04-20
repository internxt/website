import { GetServerSidePropsContext } from 'next';
import { ReferAFriendText } from '@/assets/types/refer-a-friend';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import Footer from '@/components/layout/footers/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import { stripeService } from '@/services/stripe.service';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import FAQSection from '@/components/shared/sections/FaqSection';
import usePricing from '@/hooks/usePricing';
import cookies from '@/lib/cookies';
import { PromoCodeName } from '@/lib/types';
import HeroSection from '@/components/refer-a-friend/HeroSection';
import RewardSection from '@/components/refer-a-friend/RewardSection';
import HowItWorksSection from '@/components/refer-a-friend/HowItWorksSection';

interface ReferAFriendProps {
  lang: GetServerSidePropsContext['locale'];
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  textContent: ReferAFriendText;
  footerLang: FooterText;
}

const ReferAFriendPage = ({
  metatagsDescriptions,
  textContent,
  lang,
  navbarLang,
  footerLang,
}: ReferAFriendProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'home');

  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
    lifetimeCoupon: lifetimeCoupon,
    lifetimeCoupons,
  } = usePricing({
    couponCode: PromoCodeName.SUBSCRIPTION,
    couponCodeForLifetime: PromoCodeName.LIFETIME,
  });
  const locale = lang as string;
  const navbarCta = 'chooseStorage';

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
  const decimalDiscount = individualCoupon?.percentOff && 100 - individualCoupon.percentOff;

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Home" lang={lang}>
      <Navbar textContent={navbarLang} lang={locale} cta={[navbarCta]} fixed />

      <HeroSection textContent={textContent.HeroSection} />

      <RewardSection textContent={textContent.RewardsSection} />

      <HowItWorksSection textContent={textContent.HowItWorks} />

      <PricingSectionWrapper
        textContent={textContent.tableSection}
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
        backgroundGradientColor="linear-gradient(360deg, #FFFFFF 0%, #F4F8FF 100%)"
      />

      <FAQSection textContent={textContent.FaqSection} needsH3={false} />

      <Footer textContent={footerLang} lang={locale} />
    </Layout>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/refer-a-friend.json`);
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

export default ReferAFriendPage;
