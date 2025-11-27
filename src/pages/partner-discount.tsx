import Navbar from '@/components/layout/navbars/Navbar';
import Layout from '@/components/layout/Layout';

import usePricing from '@/hooks/usePricing';
import { PromoCodeName } from '@/lib/types';
import { stripeService } from '@/services/stripe.service';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';

import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';

import { GetServerSidePropsContext } from 'next';
import { MinimalFooter } from '@/components/layout/footers/MinimalFooter';
import HeroSection from '@/components/partnersTemplate/HeroSection';
import ReviewsSection from '@/components/home/ReviewsSection';
import TrustedSection from '@/components/home/TrustedSection';
import HorizontalScrollableSection from '@/components/home/HorizontalScrollableSection';
import FloatingCtaSectionv2 from '@/components/shared/FloatingCtaSectionV2';
import { SpecialOfferText } from '@/assets/types/specialOfferTemplate';

interface PartnerDiscountProps {
  lang: GetServerSidePropsContext['locale'];
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  langJson: SpecialOfferText;
  footerLang: FooterText;
}

const PartnerDiscount = ({
  metatagsDescriptions,
  langJson,
  navbarLang,
  footerLang,
  lang,
}: PartnerDiscountProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'partner-discount');

  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
    lifetimeCoupon: lifetimeCoupon,
    lifetimeCoupons,
  } = usePricing({
    couponCode: PromoCodeName.BlackFriday,
    couponCodeForLifetime: PromoCodeName.BlackFriday,
  });

  const percentOff = individualCoupon?.percentOff !== undefined ? String(individualCoupon.percentOff) : '0';
  const parsePercentText = (text: string) => {
    if (!percentOff || percentOff === '0') {
      return <div className="bg-gray-200 h-4 w-16 animate-pulse rounded"></div>;
    }
    return typeof text === 'string' ? text.replace(/{{discount}}/g, percentOff) : text;
  };

  const locale = lang as string;
  const decimalDiscountForLifetime = lifetimeCoupon?.percentOff && 100 - lifetimeCoupon.percentOff;
  const decimalDiscount = individualCoupon?.percentOff && 100 - individualCoupon.percentOff;
  const onCheckoutButtonClicked = async (
    priceId: string,
    isCheckoutForLifetime: boolean,
    interval: string,
    storage: string,
  ) => {
    const couponCodeForCheckout = isCheckoutForLifetime ? lifetimeCoupon : individualCoupon;

    const finalPrice = await stripeService.calculateFinalPrice(
      priceId,
      interval,
      currencyValue,
      'individuals',
      couponCodeForCheckout,
    );

    stripeService.redirectToCheckout(
      priceId,
      finalPrice,
      currencyValue,
      'individual',
      isCheckoutForLifetime,
      interval,
      storage,
      couponCodeForCheckout?.name,
    );
  };

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Partners" lang={lang}>
      <Navbar lang={locale} textContent={navbarLang} cta={['payment']} isLinksHidden hideLogoLink hideCTA />

      <HeroSection textContent={langJson.HeroSection} percentOff={percentOff} />

      <ReviewsSection textContent={langJson.ReviewSection} />

      <PricingSectionWrapper
        textContent={langJson.tableSection}
        decimalDiscount={{
          individuals: decimalDiscount,
          lifetime: decimalDiscountForLifetime,
        }}
        lifetimeCoupons={lifetimeCoupons}
        lang={locale}
        products={products}
        loadingCards={loadingCards}
        onCheckoutButtonClicked={onCheckoutButtonClicked}
        hideBusinessCards
        hideBusinessSelector
        popularPlanBySize="5TB"
        sectionDetails="bg-white lg:py-20"
        hideFreeCard
      />

      <FloatingCtaSectionv2
        textContent={langJson.ctaSection}
        url={'#billingButtons'}
        customText={
          <div className="flex flex-col items-center gap-4 px-10 text-center lg:px-0">
            <p className="text-2xl font-semibold leading-tight text-gray-95 lg:text-4xl">
              {parsePercentText(langJson.ctaSection.title)}
            </p>
            <p className="text-base font-normal leading-tight text-gray-55 lg:w-[698px] lg:text-center lg:text-xl">
              {parsePercentText(langJson.ctaSection.description)}
            </p>
          </div>
        }
        bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
        containerDetails="shadow-lg backdrop-blur-[55px]"
        bgPadding="lg:pY-20 pb-20"
        bgGradientColor="linear-gradient(0deg, #F4F8FF 0%, #FFFFFF 100%)"
      />

      <HorizontalScrollableSection textContent={langJson.NextGenSection} />

      <TrustedSection textContent={langJson.TrustedBySection} bottomBar={false} />

      <FloatingCtaSectionv2
        textContent={langJson.ctaSection2}
        url={'#billingButtons'}
        customText={
          <div className="flex flex-col items-center gap-4 px-10 text-center lg:px-0">
            <p className="text-2xl font-semibold leading-tight text-gray-95 lg:text-4xl">
              {parsePercentText(langJson.ctaSection2.title)}
            </p>
            <p className="text-base font-normal leading-tight text-gray-55 lg:w-[698px] lg:text-center lg:text-xl">
              {parsePercentText(langJson.ctaSection2.description)}
            </p>
          </div>
        }
        bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
        containerDetails="shadow-lg backdrop-blur-[55px]"
        bgPadding="lg:pb-20 pb-10"
        bgGradientColor="linear-gradient(0deg, #F4F8FF 0%, #FFFFFF 100%)"
      />

      <MinimalFooter footerLang={footerLang.FooterSection} lang={locale} />
    </Layout>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/specialOfferTemplate.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

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

export default PartnerDiscount;
