import Footer from '@/components/layout/footers/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import HeroSection from '@/components/what-does-google-know-about-me/HeroSection';
import ManageGoogleDataSection from '@/components/what-does-google-know-about-me/ManageGoogleDataSection';
import { ToolsSection } from '@/components/shared/sections/ToolsSection';
import WhatGoogleKnowsSection from '@/components/what-does-google-know-about-me/WhatGoogleKnowsSection';
import { GetServerSidePropsContext } from 'next';
import RevealY from '@/components/components/RevealY';
import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import Link from 'next/link';
import CtaSection from '@/components/affiliates/CtaSection';
import { sm_breadcrumb } from '@/components/utils/schema-markup-generator';
import Script from 'next/script';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import usePricing from '@/hooks/usePricing';
import { stripeService } from '@/services/stripe.service';
import { PromoCodeName } from '@/lib/types';

const URL_REDIRECT = '/pricing';

const WhatDoesGoogleKnowAboutMe = ({
  lang,
  langJson,
  toolsContent,
  metatagsDescriptions,
  navbarLang,
  footerLang,
  bannerLang,
}): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'what-google-knows');

  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
    lifetimeCoupon,
    lifetimeCoupons,
  } = usePricing({
    couponCode: PromoCodeName.WGKAM,
    couponCodeForLifetime: PromoCodeName.WGKAM,
  });

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

  const decimalDiscountForLifetime = lifetimeCoupon?.percentOff && 100 - lifetimeCoupon.percentOff;
  const decimalDiscount = individualCoupon?.percentOff && 100 - individualCoupon.percentOff;

  return (
    <>
      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_breadcrumb('What does Google know about me', 'what-does-google-know-about-me')}
      </Script>
      <Layout
        title={metatags[0].title}
        description={metatags[0].description}
        segmentName="What Does Google Know About Me"
        lang={lang}
      >
        <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />
        <HeroSection textContent={langJson.HeroSection} bannerText={bannerLang.GoogleLPBanner} lang={lang} />

        <PricingSectionWrapper
          textContent={langJson.tableSection}
          decimalDiscount={{
            individuals: decimalDiscount,
            lifetime: decimalDiscountForLifetime,
          }}
          lifetimeCoupons={lifetimeCoupons}
          lang={lang as string}
          products={products}
          loadingCards={loadingCards}
          onCheckoutButtonClicked={onCheckoutButtonClicked}
          hideBusinessCards
          hideBusinessSelector
          popularPlanBySize="3TB"
          sectionDetails="bg-white lg:py-20 xl:py-32"
          freePlanNeedsH2
        />

        <WhatGoogleKnowsSection textContent={langJson.WhatGoogleKnowsSection} />

        <CtaSection textContent={langJson.CtaSection1} url={URL_REDIRECT} />

        <ManageGoogleDataSection textContent={langJson.ManageGoogleDataSection} />

        <ToolsSection textContent={toolsContent} lang={lang} />

        <CtaSection textContent={langJson.CtaSection2} url={URL_REDIRECT} />

        <Footer
          textContent={footerLang}
          lang={lang}
          breadcrumbItems={[
            { name: 'Encrypted Cloud Storage', url: '/' },
            { name: 'What does Google know about me', url: '/what-does-google-know-about-me' },
          ]}
        />
      </Layout>
    </>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/what-does-google-know-about-me.json`);
  const toolsContent = require(`@/assets/lang/${lang}/components/tools/ToolSection.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);
  const bannerLang = require(`@/assets/lang/${lang}/banners.json`);

  return {
    props: {
      langJson,
      toolsContent,
      metatagsDescriptions,
      navbarLang,
      footerLang,
      lang,
      bannerLang,
    },
  };
}

export default WhatDoesGoogleKnowAboutMe;
