import { ComparisonHeader } from '@/components/comparison/ComparisonHeader';
import { HeroSection } from '@/components/comparison/pCloud-alternative/HeroSection';
import { IsPCloudSafeSection } from '@/components/comparison/pCloud-alternative/IsPCloudSafeSection';
import { TablesSection } from '@/components/comparison/pCloud-alternative/TablesSection';
import { CouponSection } from '@/components/comparison/pCloud-alternative/CouponSection';
import { WhyChooseInxtSection } from '@/components/comparison/pCloud-alternative/WhyChooseInxtSection';
import Layout from '@/components/layout/Layout';
import { MinimalFooter } from '@/components/layout/footers/MinimalFooter';
import Navbar from '@/components/layout/navbars/Navbar';
import CtaSection from '@/components/shared/CtaSection';
import cookies from '@/lib/cookies';
import { GetServerSidePropsContext } from 'next';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import { PromoCodeName } from '@/lib/types';
import usePricing from '@/hooks/usePricing';
import { stripeService } from '@/services/stripe.service';
import { SIGNUP_DRIVE_WEB } from '@/constants';

const PCloudComparison = ({ metatagsDescriptions, langJson, lang, navbarLang, footerLang }): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'pcloud-alternative');
  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
    lifetimeCoupons,
  } = usePricing({
    couponCode: PromoCodeName.PCLOUD87,
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

  const decimalDiscount = individualCoupon?.percentOff && 100 - individualCoupon.percentOff;

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="pCloud Comparison" lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['priceTable']} fixed />

      <ComparisonHeader
        maxWithForTitle={'max-w-[600px]'}
        textContent={langJson.HeaderSection}
        redirectUrl={'#priceTable'}
      />

      <HeroSection textContent={langJson.HeroSection} />

      <PricingSectionWrapper
        textContent={langJson.tableSection}
        decimalDiscount={{
          individuals: decimalDiscount,
          lifetime: decimalDiscount,
        }}
        lifetimeCoupons={lifetimeCoupons}
        lang={lang}
        products={products}
        loadingCards={loadingCards}
        onCheckoutButtonClicked={onCheckoutButtonClicked}
        hideSwitchSelector
        hideBusinessSelector
        hideFreeCard
        CustomDescription={
          <span className="text-regular max-w-[800px] text-xl text-gray-80">
            {langJson.tableSection.planDescription}
          </span>
        }
        backgroundColorComponent="bg-gray-1"
      />

      <TablesSection textContent={langJson.TablesSection} />

      <CouponSection textContent={langJson.UseCodeSection} redirectUrl="#priceTable" />

      <IsPCloudSafeSection textContent={langJson.isPCloudSafeSection} />

      <CtaSection textContent={langJson.CtaSection} url={SIGNUP_DRIVE_WEB} />

      <WhyChooseInxtSection textContent={langJson.WhyChooseInxtSection} />

      <MinimalFooter footerLang={footerLang.FooterSection} lang={lang} bgColor="bg-gray-1" />
    </Layout>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = 'en';

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/pcloud-alternative.json`);
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

export default PCloudComparison;
