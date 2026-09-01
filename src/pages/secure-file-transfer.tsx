import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { SecureFileTransferText } from '@/assets/types/secure-file-transfer';
import { GetStaticPropsContext } from 'next';
import Footer from '@/components/layout/footers/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import FAQSection from '@/components/shared/sections/FaqSection';
import FloatingCtaSectionv2 from '@/components/shared/FloatingCtaSectionV2';
import HorizontalScrollableSection from '@/components/secure-file-transfer/HorizontalScrollableSection';
import SecureAndManageSection from '@/components/secure-file-transfer/SecureAndManageSection';
import HowToChooseSection from '@/components/secure-file-transfer/HowToChooseSection';
import FeatureSection from '@/components/secure-file-transfer/FeatureSection';
import AnimatedHeroSection from '@/components/secure-file-transfer/AnimatedHeroSection';
import Link from 'next/link';
import { Check } from '@phosphor-icons/react';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import { stripeService } from '@/services/stripe.service';
import { PromoCodeName } from '@/lib/types';
import usePricing from '@/hooks/usePricing';

interface SecureFileTransferProps {
  metatagsDescription: MetatagsDescription[];
  navbarText: NavigationBarText;
  textContent: SecureFileTransferText;
  footerText: FooterText;
  locale: GetStaticPropsContext['locale'];
}

const SecureFileTransfer = ({
  metatagsDescription,
  navbarText,
  textContent,
  footerText,
  locale,
}: SecureFileTransferProps): JSX.Element => {
  const metatags = metatagsDescription.find((metatag) => metatag.id === 'secure-file-transfer');
  const lang = locale as string;

  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
    lifetimeCoupon,
    lifetimeCoupons,
  } = usePricing({ couponCode: PromoCodeName.seolp, couponCodeForLifetime: PromoCodeName.seolp });

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
    <Layout title={metatags?.title ?? ''} description={metatags?.description ?? ''}>
      <Navbar cta={['default']} lang={lang} textContent={navbarText} fixed />

      <AnimatedHeroSection
        textComponent={
          <div className="flex flex-col items-center gap-8 px-2 sm:px-4 lg:items-start lg:px-0">
            <h1 className="w-full max-w-[300px] text-[30px] font-semibold leading-tight text-white sm:max-w-[440px] md:max-w-[520px] lg:max-w-[700px] lg:text-5xl">
              {textContent.HeroSection.title}
            </h1>
            <div className="flex w-[326px] flex-col gap-2 lg:mx-0 lg:w-full">
              {textContent.HeroSection.features?.map((feat) => (
                <div key={feat} className="flex flex-row gap-2">
                  <Check className="hidden pt-2 text-green-1 lg:flex lg:pt-0" weight="bold" size={24} />
                  <Check className="flex text-green-1 lg:hidden lg:pt-0" weight="bold" size={20} />
                  <p className="text-left text-sm font-medium text-white lg:text-lg lg:font-semibold ">{feat}</p>
                </div>
              ))}
            </div>
            <Link
              href={'#billingButtons'}
              className={`z-10 mt-6 flex w-max justify-center rounded-lg bg-primary px-6 py-3 text-xl font-medium text-white hover:bg-primary-dark lg:mt-2`}
            >
              {textContent.HeroSection.cta}
            </Link>
          </div>
        }
      />

      <FeatureSection textContent={textContent.FeaturesSection} />

      <PricingSectionWrapper
        textContent={textContent.tableSection}
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
        sectionDetails="bg-white lg:py-20"
        hideFreeCard
      />

      <FloatingCtaSectionv2
        textContent={textContent.CtaSection}
        customText={
          <div className="flex w-[302px] flex-col  items-center justify-center gap-4 text-center lg:w-full">
            <h2 className="text-2xl font-semibold leading-tight xl:text-4xl">{textContent.CtaSection.title}</h2>
            <p className="text-base font-normal text-gray-55 lg:text-xl">{textContent.CtaSection.description}</p>
          </div>
        }
        url="#billingButtons"
        bgGradientColor="linear-gradient(180deg, #FFFFFF 0%, #F4F8FF 100%)"
        bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
        containerDetails="shadow-lg backdrop-blur-[55px]"
        bgPadding="lg:py-20"
      />

      <HowToChooseSection textContent={textContent.HowToChooseSection} />

      <SecureAndManageSection textContent={textContent.SecureAndManage} />

      <HorizontalScrollableSection textContent={textContent.SecureFeaturesSection} />

      <FloatingCtaSectionv2
        textContent={textContent.CtaSectionV2}
        customText={
          <div className="flex w-[302px] flex-col items-center justify-center gap-4 text-center lg:w-full">
            <h2 className="text-2xl font-semibold leading-tight xl:text-4xl">{textContent.CtaSectionV2.title}</h2>
            <p className="text-base font-normal text-gray-55 lg:text-xl">{textContent.CtaSectionV2.description}</p>
          </div>
        }
        url="#billingButtons"
        bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
        containerDetails="shadow-lg backdrop-blur-[55px]"
        bgPadding="lg:py-20"
      />

      <FAQSection
        textContent={{
          title: textContent.SemanticAccordion.title,
          faq: textContent.SemanticAccordion.items,
        }}
        needsH3={false}
        needsSpecialH3
        needsH2
      />

      <Footer textContent={footerText} lang={lang} />
    </Layout>
  );
};

export function getStaticProps(ctx: GetStaticPropsContext) {
  const locale = ctx.locale as string;

  const metatagsDescription = require(`@/assets/lang/${locale}/metatags-descriptions.json`);
  const navbarText = require(`@/assets/lang/${locale}/navbar.json`);
  const textContent = require(`@/assets/lang/${locale}/secure-file-transfer.json`);
  const footerText = require(`@/assets/lang/${locale}/footer.json`);

  return {
    props: {
      metatagsDescription,
      navbarText,
      textContent,
      footerText,
      locale,
    },
  };
}

export default SecureFileTransfer;
