import { HomeText } from '@/assets/types/home';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { ChooseStorageSizeSection } from '@/components/home/ChooseStorageSizeSection';
import { FeatureSectionV2 } from '@/components/home/FeatureSectionV2';
import HeroSection from '@/components/home/HeroSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import Footer from '@/components/layout/footers/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import { stripeService } from '@/components/services/stripe.service';
import CtaSection from '@/components/shared/CtaSection';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import FAQSection from '@/components/shared/sections/FaqSection';
import { MarqueeComponent } from '@/components/specialoffer/MarqueeComponent';
import usePricing from '@/hooks/usePricing';
import cookies from '@/lib/cookies';
import { PromoCodeName } from '@/lib/types';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface HomeProps {
  lang: GetServerSidePropsContext['locale'];
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  textContent: HomeText;
  footerLang: FooterText;
}

const HomePage = ({ metatagsDescriptions, textContent, lang, navbarLang, footerLang }: HomeProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'home');
  const router = useRouter();
  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
    lifetimeCoupon,
    businessCoupon,
  } = usePricing({
    couponCode: PromoCodeName.Subscriptions75OFF,
    couponCodeForLifetime: PromoCodeName.Lifetime78OFF,
  });
  const [isBusiness, setIsBusiness] = useState<boolean>();
  const locale = lang as string;
  const navbarCta = 'chooseStorage';
  const marqueeBgColor = 'bg-white';

  const onChooseStorageButtonClicked = () => {
    router.push('/pricing');
  };

  const onBusinessPlansSelected = (isBusiness: boolean) => {
    setIsBusiness(isBusiness);
  };

  const onCheckoutButtonClicked = (priceId: string, isCheckoutForLifetime: boolean) => {
    const b2cCoupon = isCheckoutForLifetime ? lifetimeCoupon?.name : individualCoupon?.name;
    const couponCodeForCheckout = isBusiness ? businessCoupon?.name : b2cCoupon;
    const planType = isBusiness ? 'business' : 'individual';

    stripeService.redirectToCheckout(priceId, currencyValue, planType, isCheckoutForLifetime, couponCodeForCheckout);
  };

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Home" lang={lang}>
      <Navbar textContent={navbarLang} lang={locale} cta={[navbarCta]} fixed />

      <HeroSection textContent={textContent.HeroSection} lang={locale} />

      <ChooseStorageSizeSection
        textContent={textContent.ChooseStorageSizeSection}
        onButtonClicked={onChooseStorageButtonClicked}
      />

      <TestimonialsSection textContent={textContent.TestimonialsSection} />

      <PricingSectionWrapper
        textContent={textContent.tableSection}
        decimalDiscount={{
          individuals: individualCoupon?.percentOff && 100 - individualCoupon?.percentOff,
          lifetime: lifetimeCoupon?.percentOff && 100 - lifetimeCoupon.percentOff,
        }}
        lang={locale}
        products={products}
        loadingCards={loadingCards}
        onBusinessPlansSelected={onBusinessPlansSelected}
        onCheckoutButtonClicked={onCheckoutButtonClicked}
      />

      <div className={`${marqueeBgColor} py-10`}>
        <MarqueeComponent bgColor={marqueeBgColor} />
      </div>

      <FeatureSectionV2 textContent={textContent.FeatureSectionV2} />

      <FAQSection textContent={textContent.FaqSection} />

      <CtaSection textContent={textContent.CtaSection} url={'/pricing'} />

      <Footer textContent={footerLang} lang={locale} />
    </Layout>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/home.json`);
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

export default HomePage;
