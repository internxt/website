import { HeroSection } from '@/components/comparison/HeroSection';
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
import FloatingCtaSectionv2 from '@/components/shared/FloatingCtaSectionV2';
import { ComparisonTable } from '@/components/comparison/ComparisonTable';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { GooglDriveAlternativePageText } from '@/assets/types/google-drive-alternative';
import HorizontalScrollableSection from '@/components/shared/HorizontalScrollableSection';
import ThreeCardsSection from '@/components/shared/sections/ThreeCardsSection';
import { formatText } from '@/components/utils/format-text';
import { TablesSection } from '@/components/comparison/TablesSection';
import HorizontalScrollableSectionWithPhotosSection from '@/components/shared/HorizontalScrollableSectionWithPhotos';

interface GoogleDriveComparisonProps {
  lang: GetServerSidePropsContext['locale'];
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  langJson: GooglDriveAlternativePageText;
  footerLang: FooterText;
}
const GoogleDriveComparison = ({
  metatagsDescriptions,
  langJson,
  lang,
  navbarLang,
  footerLang,
}: GoogleDriveComparisonProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'google-drive-alternative');
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
  const locale = lang as string;

  return (
    <Layout
      title={metatags[0].title}
      description={metatags[0].description}
      segmentName="Google Drive Comparison"
      lang={lang}
    >
      <Navbar textContent={navbarLang} lang={locale} cta={['priceTable']} fixed />

      <HeroSection textContent={langJson.HeroSection} percentage={percentageDiscount} competitor={'Drive'} />

      <ComparisonTable textContent={langJson.HeaderSection} competitor="Drive" />

      <PricingSectionWrapper
        textContent={langJson.tableSection}
        decimalDiscount={{
          individuals: decimalDiscount,
          lifetime: decimalDiscount,
        }}
        lifetimeCoupons={lifetimeCoupons}
        lang={locale}
        products={products}
        loadingCards={loadingCards}
        onCheckoutButtonClicked={onCheckoutButtonClicked}
        hideSwitchSelector
        hideBusinessSelector
        sectionDetails="bg-white lg:py-20 py-10"
      />

      <HorizontalScrollableSection
        textContent={langJson.PrivacyViolationsSection}
        bgGradient="linear-gradient(0deg, #F4F8FF 0%, #FFFFFF 100%)"
      />

      <ThreeCardsSection
        textContent={langJson.WhyNeedAlternativeSection}
        bgColor="linear-gradient(180deg, #F4F8FF 0%, #FFCECC 50%, #FFFFFF 100%)"
        cardColor="bg-white"
        bottomSeparationBar={true}
      />

      <TablesSection
        textContent={langJson.VersusSection}
        competitor={'Drive'}
        logo="/images/comparison/competitors/Drive-Letters.webp"
      />

      <HorizontalScrollableSectionWithPhotosSection
        textContent={langJson.WhyBestAlternativeSection}
        bgColor="linear-gradient(180deg, #FFFFFF 0%, #D6F3DD 50%, #FFFFFF 100%)"
      />

      <FloatingCtaSectionv2
        textContent={langJson.CtaSection}
        url={'/pricing'}
        customText={
          <>
            <div className="flex flex-col gap-4 px-10 lg:px-0">
              <p className="text-2xl font-semibold text-gray-95 lg:text-4xl">
                {formatText(langJson.CtaSection.title, { percentage: percentageDiscount?.toString() ?? '70' })}
              </p>
              <p className="text-base font-normal text-gray-55 lg:text-xl">
                {formatText(langJson.CtaSection.description, { percentage: percentageDiscount?.toString() ?? '70' })}
              </p>
            </div>
          </>
        }
        containerDetails="shadow-lg backdrop-blur-[55px] bg-white"
        bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
        bgPadding="px-20 py-10"
      />

      <FAQSection textContent={langJson.FaqSection} percentageDiscount={percentageDiscount?.toString()} />

      <MinimalFooter footerLang={footerLang.FooterSection} lang={locale} bgColor="bg-gray-1" />
    </Layout>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/google-drive-alternative.json`);
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

export default GoogleDriveComparison;
