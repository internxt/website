import HeroSection from '@/components/lifetime/HeroSection';
import FeatureSection from '@/components/lifetime/FeatureSection';
import GetLifetimeSection from '@/components/lifetime/GetLifetimeSection';
import Layout from '@/components/layout/Layout';
import cookies from '@/lib/cookies';
import PaymentSection from '@/components/lifetime/PaymentSection';
import Navbar from '@/components/layout/navbars/Navbar';
import CtaSection from '@/components/lifetime/CtaSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import { MinimalFooter } from '@/components/layout/footers/MinimalFooter';
import { GetServerSidePropsContext } from 'next';
import { PromoCodeName } from '@/lib/types';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';

interface Protect82Props {
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  textContent: Record<string, any>;
  testimonialsJson: Record<string, any>;
  footerLang: FooterText;
  lang: GetServerSidePropsContext['locale'];
}

const Security82 = ({
  lang,
  metatagsDescriptions,
  textContent,
  testimonialsJson,
  footerLang,
  navbarLang,
}: Protect82Props): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'lifetime');
  const discount = 0.18;
  const locale = lang as string;

  return (
    <Layout
      title={metatags[0].title}
      description={metatags[0].description}
      segmentName="Security82"
      lang={lang}
      specialOffer={`https://internxt.com/images/previewLink/LifetimePreviewLink.png`}
    >
      <Navbar textContent={navbarLang} lang={locale} cta={['default']} fixed mode="payment" isLinksHidden />

      <HeroSection
        textContent={textContent.HeroSection}
        percent="82"
        previewImg="/images/lifetime/file_item.webp"
        bgImage="/images/lifetime/celebration/normal-bg.png"
      />

      <PaymentSection
        textContent={textContent.PaymentSection}
        discount={discount}
        lang={locale}
        couponCode={PromoCodeName.Protect82Coupon}
        percent={'82%'}
        showPriceBefore
        lifetimeMode="celebration"
      />

      <GetLifetimeSection textContent={textContent.GetLifetimeSection} />

      <FeatureSection textContent={textContent.FeatureSection} />

      <TestimonialsSection textContent={testimonialsJson.TestimonialsSection} bgColor="bg-gray-1" />

      <CtaSection textContent={textContent.CtaSection} />

      <MinimalFooter footerLang={footerLang.FooterSection} lang={locale} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const deviceLang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/lifetime.json`);
  const testimonialsJson = require(`@/assets/lang/${lang}/home.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      deviceLang,
      metatagsDescriptions,
      textContent,
      testimonialsJson,
      navbarLang,
      footerLang,
    },
  };
}

export default Security82;
