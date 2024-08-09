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
  const { products, loadingCards, currencyValue, coupon, businessCoupon } = usePricing({
    couponCode: PromoCodeName.AllPlansCoupon,
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

  const onCheckoutButtonClicked = (planId: string, isCheckoutForLifetime: boolean) => {
    const couponCodeForCheckout = isBusiness ? businessCoupon : coupon;
    const planType = isBusiness ? 'business' : 'individual';

    stripeService.redirectToCheckout(
      planId,
      currencyValue,
      planType,
      isCheckoutForLifetime,
      couponCodeForCheckout?.name,
    );
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
          individuals: 0.2,
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

export async function getServerSideProps(ctx) {
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
