import { GetStaticPropsContext } from 'next';

import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import { MinimalFooter } from '@/components/layout/footers/MinimalFooter';
import ReviewsSection from '@/components/home/ReviewsSection';
import TrustedSection from '@/components/home/TrustedSection';
import FAQSection from '@/components/shared/sections/FaqSection';
import CardsGridSection from '@/components/shared/sections/CardsGridSection';
import FloatingCtaSectionv2 from '@/components/shared/FloatingCtaSectionV2';
import HeroSection from '@/components/test-ppc-leads/HeroSection';
import ChoosePlanSection from '@/components/test-ppc-leads/ChoosePlanSection';
import usePricing from '@/hooks/usePricing';
import { getMinimumPrice } from '@/utils/priceHelper';
import { PromoCodeName } from '@/lib/types';
import { TestPpcLeadsText } from '@/assets/types/test-ppc-leads';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';

interface TestPpcLeadsProps {
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  textContent: TestPpcLeadsText;
  footerLang: FooterText;
  lang: GetStaticPropsContext['locale'];
}

const TestPpcLeads = ({
  metatagsDescriptions,
  navbarLang,
  textContent,
  footerLang,
  lang,
}: TestPpcLeadsProps): JSX.Element => {
  const metatags = metatagsDescriptions.find((desc) => desc.id === 'test-ppc-leads');
  const locale = lang as string;

  const {
    products,
    loadingCards,
    currency,
    coupon: individualCoupon,
  } = usePricing({
    couponCode: PromoCodeName.META85,
  });

  const decimalDiscount = individualCoupon?.percentOff && 100 - individualCoupon.percentOff;
  const minimumPrice = getMinimumPrice(products, decimalDiscount);

  return (
    <Layout
      title={metatags?.title ?? ''}
      description={metatags?.description ?? ''}
      segmentName="Test PPC Leads"
      lang={locale}
      robots="noindex, follow"
    >
      <Navbar textContent={navbarLang} lang={locale} cta={['default']} fixed />

      <HeroSection textContent={textContent.HeroSection} lang={locale} />

      <ReviewsSection textContent={textContent.ReviewSection} />

      <TrustedSection textContent={textContent.TrustedSection} bottomBar={false} />

      <CardsGridSection textContent={textContent.FeaturesSection} bgColor="bg-neutral-17" />

      <ChoosePlanSection
        textContent={textContent.ChoosePlanSection}
        currency={currency}
        minimumPrice={minimumPrice}
        loadingCards={loadingCards}
        sectionDetails="bg-neutral-17 py-10 lg:py-20"
      />

      <FAQSection
        textContent={textContent.FaqSection}
        needsH2
        needsH3
        bgGradient="linear-gradient(360deg, #FFFFFF 0%, #F4F8FF 100%)"
      />

      <FloatingCtaSectionv2
        textContent={textContent.CtaSection}
        url="#heroSection"
        customText={
          <div className="flex flex-col gap-2 lg:w-auto">
            <h2 className="text-2xl font-semibold leading-tight text-white lg:text-4xl">
              {textContent.CtaSection.title}
            </h2>
            <p className="text-base font-normal leading-tight text-blue-20 lg:text-xl">
              {textContent.CtaSection.description}
            </p>
          </div>
        }
        bgGradientContainerColor="linear-gradient(279.29deg, #0c4499 3.25%, #041733 78.35%)"
        containerDetails="px-6 lg:flex-row lg:justify-between lg:px-10 lg:text-left"
        bgPadding="py-10 lg:py-20"
      />

      <MinimalFooter footerLang={footerLang.FooterSection} lang={locale} bgColor="bg-white" />
    </Layout>
  );
};

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/test-ppc-leads.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  return {
    props: {
      lang,
      metatagsDescriptions,
      textContent,
      navbarLang,
      footerLang,
    },
  };
}

export default TestPpcLeads;
