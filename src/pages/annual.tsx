import Footer from '@/components/layout/footers/Footer';
import Navbar from '@/components/layout/navbars/Navbar';
import Layout from '@/components/layout/Layout';
import { PromoCodeName } from '@/lib/types';
import FeatureSection from '@/components/annual/FeatureSection';
import CtaSection from '@/components/annual/CtaSection';
import FeaturesSection from '@/components/annual/FeaturesSection';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import usePricing from '@/hooks/usePricing';
import { Interval, stripeService } from '@/services/stripe.service';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { AnnualText } from '@/assets/types/annual';
import { getImage } from '@/lib/getImage';
import { HeroSection } from '@/components/shared/components/HeroSection';
import Button from '@/components/shared/Button';
import { Percent } from '@phosphor-icons/react';

interface AnnualProps {
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  langJson: AnnualText;
  footerLang: FooterText;
  lang: string;
}

const Annual = ({ metatagsDescriptions, langJson, navbarLang, footerLang, lang }: AnnualProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'internxt-annual');
  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
    lifetimeCoupons,
  } = usePricing({
    couponCode: PromoCodeName.Affiliates85,
  });
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
  const locale = lang as string;
  const wordsToBold = ['85%'];
  const formattedHero = langJson.HeroSection.header
    .split(/(85%)/g)
    .map((word, index) => (wordsToBold.includes(word) ? <b key={`${word}-${index}`}>{word}</b> : word));

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Lifetime" lang={lang}>
      <Navbar textContent={navbarLang} isLinksHidden={true} lang={locale} cta={['default']} fixed />

      <HeroSection
        TextComponent={
          <div className="flex flex-col gap-10 ">
            <div className="flex max-w-[550px] flex-col items-center justify-center space-y-10 lg:items-start">
              <div className="flex flex-col">
                <h1 className="text-3xl font-semibold text-gray-100 lg:text-5xl">
                  <p className="pt-4 text-4xl font-bold xl:text-5xl ">
                    <span>{langJson.HeroSection.title.normalText}</span>
                  </p>
                  <p className="pt-4 text-2xl xl:text-3xl">
                    <span className="text-primary">{langJson.HeroSection.title.blueText}</span>
                  </p>
                </h1>
              </div>
            </div>
            <div className="flex max-w-[400px] flex-row items-center space-x-2.5 rounded-lg bg-gray-5 p-2">
              <Percent className="h-16 w-16 text-primary xl:h-24 xl:w-24" />
              <p className="font-regular text-xl text-gray-80 ">{formattedHero}</p>
            </div>
            <div className="flex flex-col items-center justify-center space-x-8 space-y-5 lg:flex-row lg:justify-start lg:space-y-0">
              <Button
                className="mb-6 flex w-max items-center justify-center rounded-lg bg-primary px-5 py-3 font-semibold text-white hover:bg-primary-dark"
                text={langJson.HeroSection.cta}
                onClick={() => (window.location.hash = '#priceTable')}
              />
            </div>
          </div>
        }
        imageProperties={{
          src: getImage('/images/yearly/internxt_yearly_plans.webp'),
          alt: 'Internxt Partners Discount',
          width: 671,
          height: 563,
        }}
      />

      <FeaturesSection textContent={langJson.FeaturesSection} />

      <PricingSectionWrapper
        textContent={langJson.tableSection}
        decimalDiscount={{
          individuals: individualCoupon?.percentOff && 100 - individualCoupon.percentOff,
          lifetime: individualCoupon?.percentOff && 100 - individualCoupon.percentOff,
        }}
        lifetimeCoupons={lifetimeCoupons}
        lang={locale}
        products={products}
        loadingCards={loadingCards}
        onCheckoutButtonClicked={onCheckoutButtonClicked}
        hidePlanSelectorComponent={true}
        hideBusinessSelector
        hideSwitchSelector
        isAnnual
        startFromPlan="Individuals"
        startIndividualPlansFromInterval={Interval.Year}
        hideFreeCard
        showPromo={false}
        backgroundColorComponent="bg-white"
      />

      <FeatureSection textContent={langJson.FeatureSection} />

      <CtaSection textContent={langJson.CtaSection} />

      <Footer textContent={footerLang} lang={locale} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/annual.json`);
  const infoSectionLang = require(`@/assets/lang/${lang}/home.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  return {
    props: {
      lang,
      metatagsDescriptions,
      langJson,
      navbarLang,
      footerLang,
      infoSectionLang,
    },
  };
}

export default Annual;
