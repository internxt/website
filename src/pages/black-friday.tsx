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
import { GetServerSidePropsContext } from 'next';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { BlackFridayText } from '@/assets/types/blackFriday';
import { PricingText } from '@/assets/types/pricing';
import SuiteSection from '@/components/black-friday/SuiteSection';
import BestStorageSection from '@/components/black-friday/BestStorageSection';
import FeaturesSection from '@/components/black-friday/FeaturesSection';

const BLACK_FRIDAY_METATAG_ID = 'black-friday';
interface BlackFridayProps {
  lang: GetServerSidePropsContext['locale'];
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  langJson: BlackFridayText;
  footerLang: FooterText;
  pricingLang: PricingText;
}

const BlackFriday = ({
  lang,
  metatagsDescriptions,
  langJson,
  navbarLang,
  footerLang,
  pricingLang,
}: BlackFridayProps) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === BLACK_FRIDAY_METATAG_ID);
  const [isBusiness, setIsBusiness] = useState(false);
  const locale = lang as string;

  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
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
  const onCheckoutButtonClicked = (priceId: string, isCheckoutForLifetime: boolean) => {
    const couponCodeForCheckout = individualCoupon?.name;
    const planType = isBusiness ? 'business' : 'individual';

    stripeService.redirectToCheckout(priceId, currencyValue, planType, isCheckoutForLifetime, couponCodeForCheckout);
  };

  const decimalDiscount = individualCoupon?.percentOff && 100 - individualCoupon?.percentOff;
  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Black Friday">
      <Navbar
        lang={locale}
        darkMode={true}
        textContent={navbarLang}
        cta={['Hide Login']}
        isLinksHidden
        hideNavbar
        fixed
        isBlackfriday
      />

      <HeroSection lang={locale} textContent={langJson.blackFriday} />

      <FeaturesSection textContent={langJson.blackFriday} />

      <BestStorageSection textContent={langJson.blackFriday} lang={locale} />

      <SuiteSection textContent={langJson.blackFriday} lang={locale} />

      <CtaSection textContent={langJson.cta} lang={locale} />

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

      <CtaSection textContent={langJson.cta2} lang={locale} />

      <FaqSection textContent={langJson.blackFriday} />

      <MinimalFooter
        footerLang={footerLang.FooterSection}
        lang={locale}
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
