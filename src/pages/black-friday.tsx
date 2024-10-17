import { useState } from 'react';
import cookies from '@/lib/cookies';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import FeatureSection from '@/components/black-friday/FeatureSection';
import PlatformSection from '@/components/black-friday/PlatformSection';
import TestimonialsSection from '@/components/black-friday/TestimonialsSection';
import TestimonialSection from '@/components/home/TestimonialsSection';
import CtaSection from '@/components/black-friday/CtaSection';
import FaqSection from '@/components/black-friday/FAQSection';
import { MinimalFooter } from '@/components/layout/footers/MinimalFooter';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import usePricing from '@/hooks/usePricing';
import { PromoCodeName } from '@/lib/types';
import { Interval, stripeService } from '@/components/services/stripe.service';
import HeroSection from '@/components/black-friday/HeroSection';
import styles from '@/components/black-friday/BF-HeroSection.module.scss';

const BLACK_FRIDAY_METATAG_ID = 'black-friday';

const BlackFriday = ({ lang, metatagsDescriptions, langJson, navbarLang, footerLang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === BLACK_FRIDAY_METATAG_ID);

  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
    businessCoupon,
    lifetimeCoupons,
  } = usePricing({
    couponCode: PromoCodeName.BlackFriday,
    couponCodeForBusiness: PromoCodeName.BlackFriday,
  });

  const [isBusiness, setIsBusiness] = useState<boolean>();

  const onBusinessPlansSelected = (isBusiness: boolean) => {
    setIsBusiness(isBusiness);
  };

  const onCheckoutButtonClicked = (priceId: string, isCheckoutForLifetime: boolean) => {
    const lifetimeSpacePlan = products?.individuals[Interval.Lifetime].find((product) => product.priceId === priceId);

    const couponCodeForB2CPlans =
      lifetimeSpacePlan && lifetimeCoupons
        ? (lifetimeCoupons?.[lifetimeSpacePlan.storage] as any).promoCodeName
        : individualCoupon?.name;

    const couponCodeForCheckout = isBusiness ? businessCoupon?.name : couponCodeForB2CPlans;
    const planType = isBusiness ? 'business' : 'individual';

    stripeService.redirectToCheckout(priceId, currencyValue, planType, isCheckoutForLifetime, couponCodeForCheckout);
  };

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Black Friday" >
      
      <Navbar
        lang={lang}
        darkMode={true}
        isBlackfriday={true}
        textContent={navbarLang}
        cta={['Hide Login']}
        isLinksHidden
      />

      <HeroSection textContent={langJson.blackFriday} lang={lang} />

      <PricingSectionWrapper
        textContent={langJson.blackFriday.tableSection}
        decimalDiscount={{
          individuals: individualCoupon?.percentOff && 100 - individualCoupon?.percentOff,
          business: businessCoupon?.percentOff && 100 - businessCoupon?.percentOff,
          lifetime: individualCoupon?.percentOff && 100 - individualCoupon.percentOff,
        }}
        lifetimeCoupons={lifetimeCoupons}
        lang={lang}
        products={products}
        loadingCards={loadingCards}
        onBusinessPlansSelected={onBusinessPlansSelected}
        onCheckoutButtonClicked={onCheckoutButtonClicked}
        hideFreeCard
        backgroundColorComponent='bg-highlight text-white'
        descriptionColor='text-gray-5'
        planSelectorBgActiveColor='bg-gray-100 text-white'
        planSelectorBgColor='bg-gray-90'
        colorLblEnabledSwitch='text-white'
        colorSwitchNoEnabled='bg-gray-90'
        colorUpCard={styles.linearGradient}
        isBlackFriday
        colorDownCard='bg-gray-100'
      />

      <FeatureSection textContent={langJson.blackFriday} />

      <PlatformSection textContent={langJson.blackFriday} />

      <TestimonialSection textContent={langJson.blackFriday.TestimonialSection} bgColor='bg-highlight' style='text-white'/>
      <CtaSection textContent={langJson.blackFriday.CtaSection} />

      <FaqSection textContent={langJson.blackFriday} />

      <MinimalFooter lang={lang} footerLang={footerLang.FooterSection} bgColor='bg-highlight' />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const language = ctx.locale;

  const allowedLanguages = ['en', 'fr'];

  const lang = allowedLanguages.includes(language) ? language : 'en';

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const langJson = require(`@/assets/lang/${lang}/black-friday.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);
  
  return {
    props: {
      lang,
      metatagsDescriptions,
      navbarLang,
      langJson,
      footerLang,
    },
  };
}

export default BlackFriday;