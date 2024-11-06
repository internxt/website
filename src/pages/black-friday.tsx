import { useState } from 'react';
import cookies from '@/lib/cookies';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import HeroSection from '@/components/black-friday/HeroSection';
import CtaSection from '@/components/black-friday/CtaSection';
import PlatformSection from '@/components/shared/components/PlatformSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FaqSection from '@/components/black-friday/FAQSection';
import { MinimalFooter } from '@/components/layout/footers/MinimalFooter';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import { PromoCodeName } from '@/lib/types';
import { Interval, stripeService } from '@/components/services/stripe.service';
import usePricing from '@/hooks/usePricing';
import { Eye, Fingerprint, LockKey, ShieldCheck } from '@phosphor-icons/react';
import { TextAndCardsGroupColumnSection } from '@/components/shared/components/TextAndCardsGroupColumnSection';

const BLACK_FRIDAY_METATAG_ID = 'black-friday';

const BlackFriday = ({ lang, metatagsDescriptions, langJson, navbarLang, footerLang, pricingLang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === BLACK_FRIDAY_METATAG_ID);
  const [isBusiness, setIsBusiness] = useState(false);

  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
    businessCoupon,
    lifetimeCoupons,
  } = usePricing({
    couponCode: PromoCodeName.BlackFriday,
  });

  const groupCards = [
    {
      icon: ShieldCheck,
      title: langJson.blackFriday.FeatureSection.feature1.title,
      description: langJson.blackFriday.FeatureSection.feature1.subtitle1,
    },
    {
      icon: LockKey,
      title: langJson.blackFriday.FeatureSection.feature2.title,
      description: langJson.blackFriday.FeatureSection.feature2.subtitle1,
    },
    {
      icon: Eye,
      title: langJson.blackFriday.FeatureSection.feature3.title,
      description: langJson.blackFriday.FeatureSection.feature3.subtitle1,
    },
    {
      icon: Fingerprint,
      title: langJson.blackFriday.FeatureSection.feature4.title,
      description: langJson.blackFriday.FeatureSection.feature4.subtitle1,
    },
  ];

  const onBusinessPlansSelected = (isBusiness) => {
    setIsBusiness(isBusiness);
  };

  const onCheckoutButtonClicked = (priceId, isCheckoutForLifetime) => {
    const lifetimeSpacePlan = products?.individuals[Interval.Lifetime].find((product) => product.priceId === priceId);

    const couponCodeForCheckout = individualCoupon?.name;

    const planType = isBusiness ? 'business' : 'individual';
    stripeService.redirectToCheckout(priceId, currencyValue, planType, isCheckoutForLifetime, couponCodeForCheckout);
  };

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Black Friday">
      <Navbar
        lang={lang}
        darkMode={true}
        textContent={navbarLang}
        cta={['Hide Login']}
        isLinksHidden
        hideNavbar
        fixed
        isBlackfriday
      />

      <HeroSection lang={lang} textContent={langJson.blackFriday} />

      <PricingSectionWrapper
        textContent={pricingLang.tableSection}
        lang={lang}
        products={products}
        loadingCards={loadingCards}
        onBusinessPlansSelected={onBusinessPlansSelected}
        onCheckoutButtonClicked={onCheckoutButtonClicked}
        lifetimeCoupons={lifetimeCoupons}
        hideFreeCard
        darkMode
        backgroundColorComponent="bg-highlight"
        hideTitle
        decimalDiscount={{
          individuals: individualCoupon?.percentOff && 100 - individualCoupon?.percentOff,
          business: individualCoupon?.percentOff && 100 - individualCoupon?.percentOff,
          lifetime: individualCoupon?.percentOff && 100 - individualCoupon?.percentOff,
        }}
        CustomDescription={
          <div className="w-full max-w-4xl">
            <span className="text-5xl font-semibold text-white">
              {pricingLang.tableSection.planTitles.blackFriday.title}
            </span>
            <br />
            <br />
            <span className="font-regular text-xl text-gray-5">
              {pricingLang.tableSection.planTitles.blackFriday.description}
            </span>
          </div>
        }
      />

      <TextAndCardsGroupColumnSection
        TextComponent={
          <div className="flex max-w-[930px] flex-col space-y-6 text-center">
            <p className="text-5xl font-semibold text-white">{langJson.blackFriday.FeatureSection.title}</p>
            <p className="font-regular text-xl text-gray-5">{langJson.blackFriday.FeatureSection.subtitle}</p>
          </div>
        }
        cards={groupCards}
        background="bg-highlight"
        backgroundColorForCard="bg-gray-100"
        textCardColor="text-white"
      />
      <PlatformSection textContent={langJson.blackFriday} />

      <TestimonialsSection
        textContent={langJson.blackFriday.TestimonialsSection}
        bgColor="bg-highlight"
        textColor="text-white"
      />

      <CtaSection textContent={langJson.cta2} lang={lang} />

      <FaqSection textContent={langJson.blackFriday} />

      <MinimalFooter
        footerLang={footerLang.FooterSection}
        lang={lang}
        bgColor="bg-highlight"
        textColor="text-gray-50"
        logoColor="white"
      />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const langJson = require(`@/assets/lang/${lang}/black-friday.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);
  const pricingLang = require(`@/assets/lang/${lang}/pricing.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      metatagsDescriptions,
      navbarLang,
      langJson,
      footerLang,
      pricingLang,
    },
  };
}

export default BlackFriday;
