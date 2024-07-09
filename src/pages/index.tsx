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
import { SwitchButtonOptions } from '@/components/prices/PriceTable';
import { CouponType } from '@/lib/types';
import usePricing from '@/hooks/usePricing';
import { Interval } from '@/components/services/stripe.service';
import { checkout } from '@/lib/auth';

const Home = ({ metatagsDescriptions, langJson, lang, navbarLang, footerLang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'home');

  const navbarCta = 'default';
  const marqueeBgColor = 'bg-gray-1';

  const { products, loadingCards, currencyValue, coupon } = usePricing({
    couponCode: CouponType.AllPlansCoupon,
  });

  const [activeSwitchPlan, setActiveSwitchPlan] = useState<SwitchButtonOptions>('Individuals');
  const [billingFrequency, setBillingFrequency] = useState<Interval>(Interval.Year);

  const onPlanTypeChange = (activeSwitchPlan: SwitchButtonOptions, interval?: Interval) => {
    setActiveSwitchPlan(activeSwitchPlan);

    if (interval) {
      setBillingFrequency(interval);
    }
  };

  const onIndividualSwitchToggled = (interval: Interval) => {
    setBillingFrequency(interval);
  };

  const onCheckoutButtonClicked = (planId: string) => {
    checkout({
      planId: planId,
      couponCode: coupon,
      currency: currencyValue ?? 'eur',
      mode: billingFrequency === Interval.Lifetime ? 'payment' : 'subscription',
    });
  };

  const onChooseStorageButtonClicked = () => {
    window.location.hash = '#priceTable';
  };

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Home" lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={[navbarCta]} fixed />

      <HeroSection textContent={langJson.HeroSection} lang={lang} />

      <ChooseStorageSizeSection
        textContent={langJson.ChooseStorageSizeSection}
        onButtonClicked={onChooseStorageButtonClicked}
      />

      <TestimonialsSection textContent={langJson.TestimonialsSection} />

      <div className={`${marqueeBgColor} py-10`}>
        <MarqueeComponent bgColor={marqueeBgColor} />
      </div>

      <FirstFeaturesSection textContent={langJson.FirstFeaturesSection} lang={lang} />

      <SecondFeaturesSection textContent={langJson.SecondFeaturesSection} lang={lang} />

      <PricingSection
        textContent={langJson.tableSection}
        lang={lang}
        billingFrequency={billingFrequency}
        hideFreeCard={false}
        decimalDiscountForPrice={0.2}
        products={products}
        loadingCards={loadingCards}
        activeSwitchPlan={activeSwitchPlan}
        onCheckoutButtonClicked={onCheckoutButtonClicked}
        onPlanTypeChange={onPlanTypeChange}
        onIndividualSwitchToggled={onIndividualSwitchToggled}
      />

      <FirstWhatWeDoSection textContent={langJson.FirstWhatWeDoSection} lang={lang} backgroundColor="bg-gray-1" />

      <SecondWhatWeDoSection textContent={langJson.SecondWhatWeDoSection} lang={lang} />

      <FAQSection textContent={langJson.FaqSection} bgColor="bg-gray-1" cardColor="bg-white" />

      <SocialProofSection textContent={langJson.InvestorsSection} lang={lang} />

      <Footer textContent={footerLang} lang={lang} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/home.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      metatagsDescriptions,
      langJson,
      navbarLang,
      footerLang,
    },
  };
}

export default Home;
