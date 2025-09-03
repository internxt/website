import Footer from '@/components/layout/footers/Footer';
import Navbar from '@/components/layout/navbars/Navbar';
import Layout from '@/components/layout/Layout';
import CtaSection from '@/components/shared/CtaSection';
import usePricing from '@/hooks/usePricing';
import { PromoCodeName } from '@/lib/types';
import { Interval, stripeService } from '@/services/stripe.service';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import MostSecureSection from '@/components/affiliates/brave/MostSecureSection';
import ScrollableSection from '@/components/affiliates/brave/ScrollableSection';
import { SpecialOfferText } from '@/assets/types/specialOffer';
import { GetServerSidePropsContext } from 'next';
import AnimatedHeroSection from '@/components/shared/HeroSections/AnimatedHeroSection';
import { Percent } from '@phosphor-icons/react';
import Button from '@/components/shared/Button';

interface PartnerDiscountProps {
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  langJson: SpecialOfferText;
  footerLang: FooterText;
  lang: GetServerSidePropsContext['locale'];
}

const PartnerDiscount = ({
  metatagsDescriptions,
  langJson,
  navbarLang,
  footerLang,
  lang,
}: PartnerDiscountProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'special-offer');
  const locale = lang as string;
  console.log(locale);
  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
  } = usePricing({
    couponCode: PromoCodeName.FreePlanUpsell,
  });

  const onCheckoutButtonClicked = (priceId: string, isCheckoutForLifetime: boolean) => {
    stripeService.redirectToCheckout(
      priceId,
      currencyValue,
      'individual',
      isCheckoutForLifetime,
      individualCoupon?.name,
    );
  };

  const decimalDiscount = individualCoupon?.percentOff && 100 - individualCoupon.percentOff;

  function redirectToPricingTable() {
    window.location.href = '#priceTable';
  }
  const percentOff = decimalDiscount === 13 ? '87' : '85';
  const parseText = (text: string) => (typeof text === 'string' ? text.replace(/{{discount}}/g, percentOff) : text);
  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Partners" lang={lang}>
      <Navbar textContent={navbarLang} lang={locale} cta={['priceTable']} fixed isLinksHidden />

      <AnimatedHeroSection
        textComponent={
          <>
            <div className="flex flex-col lg:space-y-4">
              <h1 className="text-4xl font-bold text-white xl:text-5xl">{langJson.HeroSection.title}</h1>
              <h2 className="text-2xl font-semibold text-primary xl:text-3xl">{langJson.HeroSection.subtitle}</h2>
            </div>

            <div className="flex max-w-[400px] flex-row items-center space-x-2.5 rounded-lg bg-primary/25 p-2 xl:items-center">
              <Percent className="h-16 w-16 text-primary xl:h-24 xl:w-24" />
              <p
                className="text-md font-regular text-white"
                dangerouslySetInnerHTML={{ __html: parseText(langJson.HeroSection.info) }}
              />
            </div>

            <Button onClick={redirectToPricingTable} text={parseText(langJson.HeroSection.cta)} className="z-10 " />
          </>
        }
      />

      <MostSecureSection textContent={langJson.MostSecureSection} />

      <ScrollableSection textContent={langJson.ScrollableSection} />

      <PricingSectionWrapper
        textContent={{
          ...langJson.PaymentSection,
          header: parseText(langJson.PaymentSection.header),
        }}
        decimalDiscount={{
          individuals: decimalDiscount,
          lifetime: decimalDiscount,
        }}
        lang={locale}
        products={products}
        popularPlanBySize={'5TB'}
        loadingCards={loadingCards}
        startIndividualPlansFromInterval={Interval.Lifetime}
        isBrave
        hideFreeCard
        onCheckoutButtonClicked={onCheckoutButtonClicked}
        hideSwitchSelector
        hideBusinessSelector
        showPromo={false}
        sectionDetails="bg-gray-1"
      />

      <CtaSection textContent={langJson.CtaSection1} url={`#priceTable`} />

      <Footer textContent={footerLang} lang={locale} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/en/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/specialoffer/specialOffer.json`);
  const navbarLang = require(`@/assets/lang/en/navbar.json`);
  const footerLang = require(`@/assets/lang/en/footer.json`);

  return {
    props: {
      metatagsDescriptions,
      langJson,
      navbarLang,
      footerLang,
      lang,
    },
  };
}

export default PartnerDiscount;
