import HeroSection from '@/components/lifetime/HeroSection';
import FeatureSection from '@/components/lifetime/FeatureSection';
import GetLifetimeSection from '@/components/lifetime/GetLifetimeSection';
import Layout from '@/components/layout/Layout';
import cookies from '@/lib/cookies';
import PaymentSection from '@/components/lifetime/PaymentSection';
import Navbar from '@/components/layout/navbars/Navbar';
import CtaSection from '@/components/lifetime/CtaSection';
import { CouponType } from '@/lib/types';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import moment from 'moment';
import { MinimalFooter } from '@/components/layout/footers/MinimalFooter';

const LifetimeCelebration = ({ lang, metatagsDescriptions, testimonialsJson, langJson, navbarLang, footerLang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'lifetime');
  const discount = 0.2;
  const year = moment().format('YYYY');

  return (
    <Layout
      title={metatags[0].title}
      description={metatags[0].description}
      segmentName="Lifetime"
      lang={lang}
      specialOffer={`https://internxt.com/images/previewLink/LifetimePreviewLink.png`}
    >
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed mode="payment" isLinksHidden />

      <HeroSection
        textContent={langJson.HeroSection.celebration}
        isCelebrationPage
        previewImg="/images/lifetime/celebration/file_item.webp"
        bgImage="/images/lifetime/celebration/swiggles_italy.png"
      />

      <PaymentSection
        textContent={langJson.PaymentSection}
        discount={discount}
        lang={lang}
        percent={'80%'}
        couponCode={CouponType.IndependenceDayItaly}
        lifetimeMode="celebration"
      />

      <GetLifetimeSection textContent={langJson.GetLifetimeSection} isCelebrationPage />

      <FeatureSection textContent={langJson.FeatureSection} />

      <TestimonialsSection textContent={testimonialsJson.TestimonialsSection} bgColor="bg-gray-1" />

      <CtaSection textContent={langJson.CtaSection} />

      <MinimalFooter footerLang={footerLang.FooterSection} lang={lang} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = 'it';

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/lifetime.json`);
  const testimonialsJson = require(`@/assets/lang/${lang}/home.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      metatagsDescriptions,
      langJson,
      testimonialsJson,
      navbarLang,
      footerLang,
    },
  };
}

export default LifetimeCelebration;
