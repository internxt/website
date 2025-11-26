import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import Footer from '@/components/layout/footers/Footer';
import { PromoCodeName } from '@/lib/types';
import usePricing from '@/hooks/usePricing';
import { Interval, stripeService } from '@/services/stripe.service';
import FAQSection from '@/components/shared/sections/FaqSection';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { BraveText } from '@/assets/types/brave-page';
import CtaSection from '@/components/shared/CtaSection';
import MostSecureSection from '@/components/affiliates/brave/MostSecureSection';
import ScrollableSection from '@/components/affiliates/brave/ScrollableSection';
import AnimatedHeroSection from '@/components/shared/HeroSections/AnimatedHeroSection';
import { Percent } from '@phosphor-icons/react';
import Button from '@/components/shared/Button';

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

  const { products, loadingCards, currencyValue, coupon: individualCoupon, lifetimeCoupons } = usePricing({});

  const onCheckoutButtonClicked = (
    priceId: string,
    isCheckoutForLifetime: boolean,
    interval: string,
    storage: string,
  ) => {
    const couponCodeForCheckout = isCheckoutForLifetime ? lifetimeCoupons : individualCoupon;
    stripeService.redirectToCheckout(
      priceId,
      currencyValue,
      'individual',
      isCheckoutForLifetime,
      interval,
      storage,
      couponCodeForCheckout?.name,
    );
  };
  function redirectToPricingTable() {
    window.location.href = '#priceTable';
  }

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['priceTable']} fixed />

      <AnimatedHeroSection
        textComponent={
          <>
            <div className="flex flex-col lg:space-y-4">
              <h1 className="text-4xl font-bold text-white xl:text-5xl">{textContent.HeroSection.title}</h1>
              <h2 className="text-2xl font-semibold text-primary xl:text-3xl">{textContent.HeroSection.subtitle}</h2>
            </div>

            <div className="flex max-w-[400px] flex-row items-center space-x-2.5 rounded-lg bg-primary/25 p-2 xl:items-center">
              <Percent className="h-16 w-16 text-primary xl:h-24 xl:w-24" />
              <p
                className="text-md font-regular text-white"
                dangerouslySetInnerHTML={{ __html: textContent.HeroSection.info }}
              />
            </div>

            <Button onClick={redirectToPricingTable} text={textContent.HeroSection.cta} className="z-10" />
          </>
        }
      />

      <MostSecureSection textContent={textContent.MostSecureSection} />

      <ScrollableSection textContent={textContent.ScrollableSection} />

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
        startFromPlan="Lifetime"
        startIndividualPlansFromInterval={Interval.Lifetime}
        hideFreeCard
        sectionDetails="bg-gray-1"
      />

      <CtaSection
        textContent={textContent.CtaSection2}
        customDescription={<p className="text-regular text-xl">{textContent.CtaSection2.description}</p>}
        url="#priceTable"
      />

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
