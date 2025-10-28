import { HeroSection } from '@/components/comparison/pCloud-alternative/HeroSection';
import { TablesSection } from '@/components/comparison/pCloud-alternative/TablesSection';
import Layout from '@/components/layout/Layout';
import { MinimalFooter } from '@/components/layout/footers/MinimalFooter';
import Navbar from '@/components/layout/navbars/Navbar';
import cookies from '@/lib/cookies';
import { GetServerSidePropsContext } from 'next';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import { PromoCodeName } from '@/lib/types';
import usePricing from '@/hooks/usePricing';
import { stripeService } from '@/services/stripe.service';
import FAQSection from '@/components/shared/sections/FaqSection';
import HorizontalScrollableSection from '@/components/comparison/HorizontalScrollableSection';
import FloatingCtaSectionv2 from '@/components/shared/FloatingCtaSectionV2';
import { ComparisonTable } from '@/components/comparison/ComparisonTable';

const DropboxComparison = ({ metatagsDescriptions, langJson, lang, navbarLang, footerLang }): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'dropbox-alternative');
  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
    lifetimeCoupons,
  } = usePricing({
    couponCode: PromoCodeName.BlackFriday,
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
  const percentageDiscount = decimalDiscount ? 100 - decimalDiscount : 0;

  return (
    <Layout
      title={metatags[0].title}
      description={metatags[0].description}
      segmentName="dropbox Comparison"
      lang={lang}
    >
      <Navbar textContent={navbarLang} lang={lang} cta={['priceTable']} fixed />

      <HeroSection
        textContent={langJson.HeroSection}
        redirectUrl={'/pricing'}
        percentage={percentageDiscount}
        competitor={'Dropbox'}
      />

      <ComparisonTable textContent={langJson.HeaderSection} competitor="Dropbox" />

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
        sectionDetails="bg-white lg:py-20 py-10"
      />

      <HorizontalScrollableSection
        textContent={langJson.HorizontalScrollableSection}
        bgGradient="linear-gradient(180deg, #FFFFFF 0%, #FFCECC 50%, #FFFFFF 100%)"
      />

      <FloatingCtaSectionv2
        textContent={langJson.CtaSection}
        url={'/pricing'}
        customText={
          <>
            <div className="flex flex-col gap-4 px-10 lg:px-0">
              <p className="text-2xl font-semibold text-gray-95 lg:text-4xl">{langJson.CtaSection.title}</p>
              <p className="text-base font-normal text-gray-55 lg:text-xl">{langJson.CtaSection.description}</p>
            </div>
          </>
        }
        containerDetails="shadow-lg backdrop-blur-[55px] bg-white"
        bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
      />

      <TablesSection
        textContent={langJson.VersusSection}
        competitor={'Dropbox'}
        logo="/images/comparison/competitors/Dropbox_Letters.webp"
      />

      <FloatingCtaSectionv2
        textContent={langJson.CtaSection}
        url={'/pricing'}
        customText={
          <>
            <div className="flex flex-col gap-4 px-10 text-center lg:px-0">
              <p className="text-2xl font-semibold text-gray-95 lg:text-4xl">{langJson.CtaSection2.title}</p>
              <p className="text-base font-normal text-gray-55 lg:text-xl">{langJson.CtaSection2.description}</p>
            </div>
          </>
        }
        containerDetails="shadow-lg backdrop-blur-[55px] bg-white"
        bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
      />

      <HorizontalScrollableSection
        textContent={langJson.HorizontalScrollableSectionV2}
        bgGradient="linear-gradient(180deg, #FFFFFF 0%, #D6F3DD 50%, #FFFFFF 100%)"
      />

      <FAQSection textContent={langJson.FaqSection} />

      <MinimalFooter footerLang={footerLang.FooterSection} lang={lang} bgColor="bg-gray-1" />
    </Layout>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/dropbox-alternative.json`);
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

export default DropboxComparison;
