import { Eye, Fingerprint, LockKey, ShieldCheck } from '@phosphor-icons/react';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import HeroSection from '@/components/annual-plans-for-affiliates/HeroSection';
import FeatureSection from '@/components/annual/FeatureSection';
import Footer from '@/components/layout/footers/Footer';
import { checkout } from '@/lib/auth';
import { PromoCodeName } from '@/lib/types';
import usePricing from '@/hooks/usePricing';
import InfoSection from '@/components/shared/sections/InfoSection';
import { Interval, stripeService } from '@/components/services/stripe.service';
import FAQSection from '@/components/shared/sections/FaqSection';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import CtaSection from '@/components/affiliates/CtaSection';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { BraveText } from '@/lib/brave';

interface BravePageProps {
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  textContent: BraveText;
  footerLang: FooterText;
}

export default function BravePage({
  metatagsDescriptions,
  navbarLang,
  footerLang,
  textContent,
}: BravePageProps): JSX.Element {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'pricing');

  const lang = 'en';

  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
    lifetimeCoupons,
  } = usePricing({
    couponCode: PromoCodeName.Brave,
  });

  function handlePriceCardButton(planId, coupon) {
    checkout({
      planId: planId,
      planType: 'individual',
      mode: 'payment',
      currency: currencyValue,
      promoCodeId: coupon.promoCodeName ?? undefined,
    });
  }

  // Split the info from the textContent object in STARTPAGE
  const heroSectionText = textContent.HeroSection;

  const InfoTextComponent = (
    <p className="text-xl text-gray-80">
      {heroSectionText.info.split('your')[0]}
      <span className="font-bold text-primary">{heroSectionText.infoHighlight}</span>
      {heroSectionText.info.split('your')[1]}
    </p>
  );

  const cardsData = [
    {
      icon: ShieldCheck,
      title: textContent.SecureCloudSection.cards[0].title,
      description: textContent.SecureCloudSection.cards[0].description,
    },
    {
      icon: LockKey,
      title: textContent.SecureCloudSection.cards[1].title,
      description: textContent.SecureCloudSection.cards[1].description,
    },
    {
      icon: Eye,
      title: textContent.SecureCloudSection.cards[2].title,
      description: textContent.SecureCloudSection.cards[2].description,
    },
    {
      icon: Fingerprint,
      title: textContent.SecureCloudSection.cards[3].title,
      description: textContent.SecureCloudSection.cards[3].description,
    },
  ];

  const onCheckoutButtonClicked = (priceId: string, isCheckoutForLifetime: boolean) => {
    const couponCodeForCheckout = individualCoupon?.name;

    stripeService.redirectToCheckout(
      priceId,
      currencyValue,
      'individual',
      isCheckoutForLifetime,
      couponCodeForCheckout,
    );
  };

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

      <HeroSection textContent={textContent.HeroSection} InfoTextComponent={InfoTextComponent} redirect="#priceTable" />

      <FeatureSection textContent={textContent.FeatureSection} />

      <CtaSection textContent={textContent.CtaSection} url="#priceTable" isBrave />

      <InfoSection
        textContent={textContent.SecureCloudSection}
        lang="en"
        withoutCta
        backgroundColor="bg-gray-1"
        cards={cardsData}
      />

      <PricingSectionWrapper
        textContent={textContent.tableSection}
        decimalDiscount={{
          individuals: individualCoupon?.percentOff && 100 - individualCoupon.percentOff,
          lifetime: individualCoupon?.percentOff && 100 - individualCoupon.percentOff,
        }}
        lifetimeCoupons={lifetimeCoupons}
        lang={lang}
        products={products}
        loadingCards={loadingCards}
        onCheckoutButtonClicked={onCheckoutButtonClicked}
        hideBusinessSelector
        hideSwitchSelector
        isBrave
        startFromPlan="Individuals"
        startIndividualPlansFromInterval={Interval.Year}
      />

      <CtaSection textContent={textContent.CtaSection2} url="#priceTable" isBrave />

      <FAQSection textContent={textContent.FaqSection} />

      <Footer textContent={footerLang} lang={lang} hideNewsletter={false} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const metatagsDescriptions = require(`@/assets/lang/en/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/en/brave.json`);
  const footerLang = require(`@/assets/lang/en/footer.json`);
  const navbarLang = require(`@/assets/lang/en/navbar.json`);

  return {
    props: {
      metatagsDescriptions,
      footerLang,
      navbarLang,
      textContent,
    },
  };
}
