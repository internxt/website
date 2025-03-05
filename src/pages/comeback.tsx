import { useState } from 'react';
import { GetServerSidePropsContext } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { Resurrection } from '@/assets/types/resurrection';
import HeroSection from '@/components/lifetime/HeroSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import { MinimalFooter } from '@/components/layout/footers/MinimalFooter';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import { Interval, stripeService } from '@/components/services/stripe.service';
import { TextAndCardsGroupColumnSection } from '@/components/shared/components/TextAndCardsGroupColumnSection';
import CtaSection from '@/components/shared/CtaSection';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import usePricing from '@/hooks/usePricing';
import cookies from '@/lib/cookies';
import { getImage } from '@/lib/getImage';
import { PromoCodeName } from '@/lib/types';
import { ClockClockwise, CloudCheck, Devices, ShieldCheck } from '@phosphor-icons/react';

interface ResurrectionCampaignProps {
  lang: GetServerSidePropsContext['locale'];
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  textContent: Resurrection;
  footerLang: FooterText;
}

const ResurrectionCampaign = ({
  metatagsDescriptions,
  textContent,
  lang,
  navbarLang,
  footerLang,
}: ResurrectionCampaignProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'resurrection-campaign');
  const router = useRouter();
  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
    lifetimeCoupons,
  } = usePricing({
    couponCode: PromoCodeName.Resurrection,
  });
  const locale = lang as string;

  const percent = '90%';

  const onCheckoutButtonClicked = (priceId: string, isCheckoutForLifetime: boolean) => {
    const lifetimeSpacePlan = products?.individuals[Interval.Lifetime].find((product) => product.priceId === priceId);

    const couponCodeForB2CPlans =
      lifetimeSpacePlan && lifetimeCoupons
        ? (lifetimeCoupons?.[lifetimeSpacePlan.storage] as any).promoCodeName
        : individualCoupon?.name;

    stripeService.redirectToCheckout(
      priceId,
      currencyValue,
      'individual',
      isCheckoutForLifetime,
      couponCodeForB2CPlans,
    );
  };

  const groupCards = [
    {
      icon: Devices,
      title: textContent.WhyComebackToInternxt.features[0].title,
      description: textContent.WhyComebackToInternxt.features[0].description,
    },
    {
      icon: ClockClockwise,
      title: textContent.WhyComebackToInternxt.features[1].title,
      description: textContent.WhyComebackToInternxt.features[1].description,
    },
    {
      icon: CloudCheck,
      title: textContent.WhyComebackToInternxt.features[2].title,
      description: textContent.WhyComebackToInternxt.features[2].description,
    },
    {
      icon: ShieldCheck,
      title: textContent.WhyComebackToInternxt.features[3].title,
      description: textContent.WhyComebackToInternxt.features[3].description,
    },
  ];

  return (
    <Layout
      title={metatags[0].title}
      description={metatags[0].description}
      segmentName="Comeback"
      lang={lang}
      isBannerFixed={false}
    >
      <Navbar textContent={navbarLang} lang={locale} cta={['default']} fixed mode="payment" isLinksHidden />
      <HeroSection textContent={textContent.HeroSection} isCelebrationPage percent={percent} />

      <PricingSectionWrapper
        textContent={textContent.tableSection}
        decimalDiscount={{
          individuals: individualCoupon?.percentOff && 100 - individualCoupon?.percentOff,
          lifetime: individualCoupon?.percentOff && 100 - individualCoupon.percentOff,
        }}
        lifetimeCoupons={lifetimeCoupons}
        lang={locale}
        products={products}
        loadingCards={loadingCards}
        onCheckoutButtonClicked={onCheckoutButtonClicked}
        hideBusinessSelector
        hideSwitchSelector
        hideFreeCard
      />

      <TextAndCardsGroupColumnSection
        TextComponent={
          <div className="flex max-w-[930px] flex-col space-y-6 text-center">
            <p className="text-5xl font-semibold text-gray-100">{textContent.WhyComebackToInternxt.title}</p>
            <p className="text-5xl font-semibold text-gray-100">{textContent.WhyComebackToInternxt.title2}</p>
            <p className="max-w-[796px] text-xl text-gray-80">{textContent.WhyComebackToInternxt.description}</p>
            <Image
              src={getImage('/images/home/internxt_secure_cloud_storage.webp')}
              width={774}
              height={411}
              alt={'Cloud Storage'}
            />
          </div>
        }
        cards={groupCards}
        background="bg-gray-1"
        backgroundColorForCard="bg-white"
      />
      <TestimonialsSection textContent={textContent.TestimonialsSection} bgColor="bg-white" />
      <CtaSection
        textContent={textContent.CtaSection}
        bgImage="/images/lifetime/celebration/normal-bg.png"
        url="#billingButtons"
      />
      <MinimalFooter footerLang={footerLang.FooterSection} lang={locale} />
    </Layout>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = 'en';

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/comeback.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      metatagsDescriptions,
      navbarLang,
      textContent,
      footerLang,
    },
  };
}

export default ResurrectionCampaign;
