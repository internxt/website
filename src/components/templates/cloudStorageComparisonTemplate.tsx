import Script from 'next/script';
import { GetServerSidePropsContext } from 'next';
import { Eye, Fingerprint, LockKey, ShieldCheck } from '@phosphor-icons/react';

import TableSection from '@/components/comparison/TableSection';
import FeatureSection from '@/components/comparison/FeatureSection';
import FAQSection from '@/components/shared/sections/FaqSection';
import Footer from '@/components/layout/footers/Footer';
import Navbar from '@/components/layout/navbars/Navbar';
import Layout from '@/components/layout/Layout';

import { sm_faq, sm_breadcrumb } from '@/components/utils/schema-markup-generator';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ThirdFeaturesSection from '@/components/home/ThirdFeaturesSection';
import CtaSection from '@/components/shared/CtaSection';
import { ComparisonHeader } from '@/components/comparison/ComparisonHeader';
import InfoSection from '@/components/shared/sections/InfoSection';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import { stripeService } from '@/services/stripe.service';
import { PromoCodeName } from '@/lib/types';
import usePricing from '@/hooks/usePricing';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { analyticsService } from '@/services/ga.services';
import { checkout } from '@/lib/auth';
import { getTrackingParams } from '@/lib/cookies';

const URL_REDIRECT = '#billingButtons';

export interface CloudStorageComparisonTemplateProps {
  metatagsDescriptions: MetatagsDescription[];
  langJson: any;
  navbarLang: NavigationBarText;
  footerLang: FooterText;
  lang: GetServerSidePropsContext['locale'];
  couponCode?: PromoCodeName;
  couponCodeForLifetime?: PromoCodeName;
}

export const CloudStorageComparisonTemplate = ({
  metatagsDescriptions,
  langJson,
  navbarLang,
  footerLang,
  lang,
  couponCode = PromoCodeName.seolp,
  couponCodeForLifetime = PromoCodeName.seolp,
}: CloudStorageComparisonTemplateProps): JSX.Element => {
  const metatags = metatagsDescriptions.find((desc) => desc.id === 'comparison');
  const locale = lang as string;

  const cardsData = [
    {
      icon: ShieldCheck,
      title: langJson.InfoSection.cards[0].title,
      description: langJson.InfoSection.cards[0].description,
    },
    {
      icon: LockKey,
      title: langJson.InfoSection.cards[1].title,
      description: langJson.InfoSection.cards[1].description,
    },
    {
      icon: Eye,
      title: langJson.InfoSection.cards[2].title,
      description: langJson.InfoSection.cards[2].description,
    },
    {
      icon: Fingerprint,
      title: langJson.InfoSection.cards[3].title,
      description: langJson.InfoSection.cards[3].description,
    },
  ];

  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
    lifetimeCoupon,
    lifetimeCoupons,
  } = usePricing({ couponCode, couponCodeForLifetime });

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

    analyticsService.addToCart({
      planId: priceId,
      planPrice: finalPrice,
      currency: currencyValue,
      planType: 'individual',
      interval,
      storage,
      promoCodeId: couponCodeForCheckout?.name,
    });

    checkout({
      planId: priceId,
      mode: isCheckoutForLifetime ? 'payment' : 'subscription',
      planType: 'individual',
      currency: currencyValue ?? 'eur',
      promoCodeId: couponCodeForCheckout?.name,
      trackingParams: getTrackingParams(),
    });
  };

  return (
    <>
      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_faq(langJson.FaqSection.faq)}
      </Script>

      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_breadcrumb('Cloud storage comparison', 'cloud-storage-comparison')}
      </Script>

      <Layout
        title={metatags?.title ?? ''}
        description={metatags?.description ?? ''}
        segmentName="Cloud Storage Comparison"
        lang={locale}
      >
        <Navbar textContent={navbarLang} lang={locale} cta={['default']} fixed darkMode={false} />

        <ComparisonHeader textContent={langJson.HeroSection} redirectUrl={URL_REDIRECT} />

        <TableSection textContent={langJson.HeroSection} />

        <FeatureSection textContent={langJson.FeatureSection} />

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

        <InfoSection textContent={langJson.InfoSection} lang={locale} redirect="/privacy" cards={cardsData} />

        <ThirdFeaturesSection textContent={langJson.ThirdFeaturesSection} />

        <TestimonialsSection textContent={langJson.TestimonialsSection} />

        <FAQSection textContent={langJson.FaqSection} />

        <CtaSection textContent={langJson.CtaSection} url={URL_REDIRECT} />

        <Footer
          textContent={footerLang}
          lang={locale}
          darkMode={false}
          breadcrumbItems={[
            { name: 'Encrypted Cloud Storage', url: '/' },
            { name: 'Cloud storage comparison', url: '/cloud-storage-comparison' },
          ]}
        />
      </Layout>
    </>
  );
};
