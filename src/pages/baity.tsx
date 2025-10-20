/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Layout from '@/components/layout/Layout';
import { PromoCodeName } from '@/lib/types';
import Footer from '@/components/layout/footers/Footer';
import usePricing from '@/hooks/usePricing';
import Navbar from '@/components/layout/navbars/Navbar';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import HeroSection from '@/components/partnersTemplate/HeroSection';
import ReviewsSection from '@/components/home/ReviewsSection';
import TrustedSection from '@/components/home/TrustedSection';
import HorizontalScrollableSection from '@/components/home/HorizontalScrollableSection';
import FloatingCtaSectionv2 from '@/components/shared/FloatingCtaSectionV2';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import { stripeService } from '@/services/stripe.service';
import { SpecialOfferText } from '@/assets/types/specialOfferTemplate';
import FeaturesSection from '@/components/drive/FeaturesSection';

interface CombinedSpecialOfferProps {
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  langJson: SpecialOfferText;
  footerLang: FooterText;
  lang: string;
}

function CombinedSpecialOffer({
  langJson,
  lang,
  metatagsDescriptions,
  footerLang,
  navbarLang,
}: CombinedSpecialOfferProps): JSX.Element {
  const metatags = metatagsDescriptions.find((desc) => desc.id === 'special-offer');

  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
    lifetimeCoupon: lifetimeCoupon,
    lifetimeCoupons,
  } = usePricing({
    couponCode: PromoCodeName.BaityBait,
    couponCodeForLifetime: PromoCodeName.BaityBait,
  });

  const decimalDiscount = individualCoupon?.percentOff && 100 - individualCoupon.percentOff;
  const decimalDiscountForLifetime = lifetimeCoupon?.percentOff && 100 - lifetimeCoupon.percentOff;

  const percentOff = individualCoupon?.percentOff !== undefined ? String(individualCoupon.percentOff) : '0';

  const parsePercentText = (text: string) => {
    if (!individualCoupon?.percentOff) {
      return <div className="bg-gray-200 h-4 w-16 animate-pulse rounded"></div>;
    }
    return typeof text === 'string' ? text.replaceAll('{{discount}}', percentOff) : text;
  };

  const onCheckoutButtonClicked = (priceId: string, isCheckoutForLifetime: boolean) => {
    const couponCodeForCheckout = isCheckoutForLifetime ? lifetimeCoupon : individualCoupon;

    stripeService.redirectToCheckout(
      priceId,
      currencyValue,
      'individual',
      isCheckoutForLifetime,
      couponCodeForCheckout?.name,
    );
  };
  const navbarCta = 'priceTable';

  return (
    <Layout title={metatags!.title} description={metatags!.description} segmentName="Partners" lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={[navbarCta]} fixed />

      <HeroSection textContent={langJson.HeroSection} percentOff={percentOff} darkMode image={'baity'} />

      <ReviewsSection textContent={langJson.ReviewSection} darkMode />

      <PricingSectionWrapper
        textContent={langJson.tableSection}
        decimalDiscount={{
          individuals: decimalDiscount,
          lifetime: decimalDiscountForLifetime,
        }}
        lifetimeCoupons={lifetimeCoupons}
        lang={lang}
        products={products}
        loadingCards={loadingCards}
        onCheckoutButtonClicked={onCheckoutButtonClicked}
        hideBusinessCards
        hideBusinessSelector
        popularPlanBySize="5TB"
        sectionDetails="bg-[#1C1C1C] lg:py-20"
        hideFreeCard
        darkMode
      />

      <FeaturesSection
        textContent={langJson.FeaturesSection}
        lang={lang}
        download={false}
        showLastSection={false}
        darkMode
      />

      <FloatingCtaSectionv2
        textContent={langJson.ctaSection}
        url={'/pricing'}
        customText={
          <div className="flex flex-col items-center gap-4 px-10 text-center lg:px-0">
            <p className={`text-2xl font-semibold leading-tight lg:text-4xl ${'text-white'}`}>
              {parsePercentText(langJson.ctaSection.title)}
            </p>
            <p className={`text-base font-normal leading-tight lg:text-center lg:text-xl ${'text-white lg:w-[690px]'}`}>
              {parsePercentText(langJson.ctaSection.description)}
            </p>
          </div>
        }
        containerDetails="shadow-lg backdrop-blur-[55px]"
        bgGradientContainerColor={
          'linear-gradient(115.95deg, rgba(255, 255, 255, 0.3) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)'
        }
        bgPadding={'pb-10  lg:pt-10 bg-[#1C1C1C]'}
        bgGradientColor={undefined}
      />

      <HorizontalScrollableSection textContent={langJson.NextGenSection} darkMode />

      <TrustedSection textContent={langJson.TrustedBySection} bottomBar={false} darkMode />

      <FloatingCtaSectionv2
        textContent={langJson.ctaSection2}
        url={'/pricing'}
        customText={
          <div className="flex flex-col items-center gap-4 px-10 text-center lg:px-0">
            <p className={`text-2xl font-semibold leading-tight lg:text-4xl ${'text-white'}`}>
              {parsePercentText(langJson.ctaSection2.title)}
            </p>
            <p className={`text-base font-normal leading-tight lg:text-center lg:text-xl ${'text-white lg:w-[633px]'}`}>
              {parsePercentText(langJson.ctaSection2.description)}
            </p>
          </div>
        }
        containerDetails="shadow-lg backdrop-blur-[55px]"
        bgGradientContainerColor={
          'linear-gradient(115.95deg, rgba(255, 255, 255, 0.3) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)'
        }
        bgPadding={'lg:pb-10  bg-[#1C1C1C]'}
        bgGradientColor={undefined}
      />

      <Footer textContent={footerLang} lang={lang} darkMode />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const langJson = require(`@/assets/lang/${lang}/specialOfferTemplate.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  return {
    props: {
      lang,
      metatagsDescriptions,
      navbarLang,
      langJson,
      footerLang,
    },
  };
}

export default CombinedSpecialOffer;
