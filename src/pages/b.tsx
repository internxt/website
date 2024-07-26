import cookies from '@/lib/cookies';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import HeroSection from '@/components/home/HeroSection';
import SocialProofSection from '@/components/home/SocialProofSection';
import Footer from '@/components/layout/footers/Footer';
import { ChooseStorageSizeSection } from '@/components/home/ChooseStorageSizeSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import { MarqueeComponent } from '@/components/specialoffer/MarqueeComponent';
import FAQSection from '@/components/shared/sections/FaqSection';
import FirstFeaturesSection from '@/components/home/FirstFeaturesSection';
import SecondFeaturesSection from '@/components/home/SecondFeaturesSection';
import FirstWhatWeDoSection from '@/components/home/FirstWhatWeDoSection';
import SecondWhatWeDoSection from '@/components/home/SecondWhatWeDoSection';
import { CouponType } from '@/lib/types';
import usePricing from '@/hooks/usePricing';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import { stripeService } from '@/components/services/stripe.service';
import { useState } from 'react';

interface HomeProps {
  lang: string;
  metatagsDescriptions: Record<string, any>;
  navbarLang: Record<string, any>;
  textContent: Record<string, any>;
  footerLang: Record<string, any>;
}

const Home = ({ metatagsDescriptions, textContent, lang, navbarLang, footerLang }: HomeProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'home');

  const navbarCta = 'default';
  const marqueeBgColor = 'bg-gray-1';

  const { products, loadingCards, currencyValue, coupon, businessCoupon } = usePricing({
    couponCode: CouponType.AllPlansCoupon,
  });
  const [isBusiness, setIsBusiness] = useState<boolean>();

  const onCheckoutButtonClicked = (planId: string, isCheckoutForLifetime: boolean) => {
    const couponCodeForCheckout = isBusiness ? businessCoupon : coupon;
    stripeService.onCheckoutButtonClicked(planId, currencyValue, isCheckoutForLifetime, couponCodeForCheckout);
  };

  const onBusinessPlansTabSelected = (isBusiness: boolean) => {
    setIsBusiness(isBusiness);
  };

  const onChooseStorageButtonClicked = () => {
    window.location.hash = '#priceTable';
  };

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Home" lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={[navbarCta]} fixed />

      <HeroSection textContent={textContent.HeroSection} lang={lang} />

      <ChooseStorageSizeSection
        textContent={textContent.ChooseStorageSizeSection}
        onButtonClicked={onChooseStorageButtonClicked}
      />

      <TestimonialsSection textContent={textContent.TestimonialsSection} />

      <div className={`${marqueeBgColor} py-10`}>
        <MarqueeComponent bgColor={marqueeBgColor} />
      </div>

      <FirstFeaturesSection textContent={textContent.FirstFeaturesSection} lang={lang} />

      <SecondFeaturesSection textContent={textContent.SecondFeaturesSection} lang={lang} />

      <PricingSectionWrapper
        textContent={textContent.tableSection}
        decimalDiscount={{
          individuals: 0.2,
        }}
        lang={lang}
        hideBusinessCards={true}
        products={products}
        loadingCards={loadingCards}
        onBusinessPlansSelected={onBusinessPlansTabSelected}
        onCheckoutButtonClicked={onCheckoutButtonClicked}
      />

      <FirstWhatWeDoSection textContent={textContent.FirstWhatWeDoSection} lang={lang} backgroundColor="bg-gray-1" />

      <SecondWhatWeDoSection textContent={textContent.SecondWhatWeDoSection} lang={lang} />

      <FAQSection textContent={textContent.FaqSection} bgColor="bg-gray-1" cardColor="bg-white" />

      <SocialProofSection textContent={textContent.InvestorsSection} lang={lang} />

      <Footer textContent={footerLang} lang={lang} />
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

export default Home;
