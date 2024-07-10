import { useState } from 'react';

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
import { PricingSection } from '@/components/shared/pricing/PricingSection';
import { CouponType } from '@/lib/types';
import usePricing from '@/hooks/usePricing';
import { Interval } from '@/components/services/stripe.service';
import { checkout } from '@/lib/auth';
import { SwitchButtonOptions } from '@/components/shared/pricing/components/PlanSwitch';

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

  const { products, loadingCards, currencyValue, coupon } = usePricing({
    couponCode: CouponType.AllPlansCoupon,
  });

  const [activeSwitchPlan, setActiveSwitchPlan] = useState<SwitchButtonOptions>('Individuals');
  const [billingFrequency, setBillingFrequency] = useState<Interval>(Interval.Year);
  const [businessBillingFrequency, setBusinessBillingFrequency] = useState<Interval>(Interval.Year);

  const onPlanTypeChange = (activeSwitchPlan: SwitchButtonOptions, interval?: Interval) => {
    setActiveSwitchPlan(activeSwitchPlan);

    if (interval) {
      setBillingFrequency(interval);
    }
  };

  const onIndividualSwitchToggled = (interval: Interval) => {
    setBillingFrequency(interval);
  };

  const onBusinessSwitchToggled = (interval: Interval) => {
    setBusinessBillingFrequency(interval);
  };

  const onCheckoutButtonClicked = (planId: string, planType: 'individuals' | 'business') => {
    const billingFrequencyForBilling = planType === 'individuals' ? billingFrequency : businessBillingFrequency;

    checkout({
      planId: planId,
      couponCode: coupon,
      currency: currencyValue ?? 'eur',
      mode: billingFrequencyForBilling === Interval.Lifetime ? 'payment' : 'subscription',
    });
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

      <PricingSection
        textContent={textContent.tableSection}
        lang={lang}
        billingFrequency={billingFrequency}
        businessBillingFrequency={businessBillingFrequency}
        decimalDiscountForIndividualPlans={0.2}
        products={products}
        loadingCards={loadingCards}
        activeSwitchPlan={activeSwitchPlan}
        onCheckoutButtonClicked={onCheckoutButtonClicked}
        onPlanTypeChange={onPlanTypeChange}
        onIndividualSwitchToggled={onIndividualSwitchToggled}
        onBusinessSwitchToggled={onBusinessSwitchToggled}
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
