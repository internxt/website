import HeroSection from '@/components/lifetime/HeroSection';
import FeatureSection from '@/components/lifetime/FeatureSection';
import GetLifetimeSection from '@/components/lifetime/GetLifetimeSection';
import Layout from '@/components/layout/Layout';
import cookies from '@/lib/cookies';
import PaymentSection from '@/components/lifetime/PaymentSection';
import CtaSection from '@/components/lifetime/CtaSection';
import { PromoCodeName } from '@/lib/types';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import { getImage } from '@/lib/getImage';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Navbar from '@/components/layout/navbars/Navbar';
import { MinimalFooter } from '@/components/layout/footers/MinimalFooter';

const ALLOWED_PATHS = ['canada', 'usa', 'france', 'belgium', 'switzerland', 'singapore', 'brazil', 'mexico'];

const IMAGES_PER_PATH = {
  canada: {
    backgroundImage: '/images/lifetime/celebration/canada/canada-bg.webp',
    previewImage: '/images/lifetime/celebration/canada/canada-file-item.webp',
    mobileImage: '/images/lifetime/celebration/canada/canada-image-mobile.webp',
  },
  usa: {
    backgroundImage: '/images/lifetime/celebration/usa/usa-bg.webp',
    previewImage: '/images/lifetime/celebration/usa/usa-file-item.webp',
    mobileImage: '/images/lifetime/celebration/usa/usa-image-mobile.webp',
  },
  france: {
    backgroundImage: '/images/lifetime/celebration/france/france-bg.webp',
    previewImage: '/images/lifetime/celebration/france/france-file-item.webp',
    mobileImage: '/images/lifetime/celebration/france/france-image-mobile.webp',
  },
  belgium: {
    backgroundImage: '/images/lifetime/celebration/belgium/belgium-bg.webp',
    previewImage: '/images/lifetime/celebration/belgium/belgium-file-item.webp',
    mobileImage: '/images/lifetime/celebration/belgium/belgium-image-mobile.webp',
  },
  switzerland: {
    backgroundImage: '/images/lifetime/celebration/switzerland/swiss-bg.webp',
    previewImage: '/images/lifetime/celebration/switzerland/swiss-file-item.webp',
    mobileImage: '/images/lifetime/celebration/switzerland/swiss-image-mobile.webp',
  },
  singapore: {
    backgroundImage: '/images/lifetime/celebration/singapore/singapore-bg.webp',
    previewImage: '/images/lifetime/celebration/singapore/singapore-file-item.webp',
    mobileImage: '/images/lifetime/celebration/singapore/singapore-image-mobile.webp',
  },
  brazil: {
    backgroundImage: '/images/lifetime/celebration/brazil/bg.webp',
    previewImage: '/images/lifetime/celebration/brazil/file-item.webp',
    mobileImage: '/images/lifetime/celebration/brazil/image-mobile.webp',
  },
  mexico: {
    backgroundImage: '/images/lifetime/celebration/mexico/bg.webp',
    previewImage: '/images/lifetime/celebration/mexico/file-item.webp',
    mobileImage: '/images/lifetime/celebration/mexico/image-mobile.webp',
  },
};

const PATHS_WITH_CURRENCY_SPECIFIED = ['usa', 'singapore', 'mexico'];

const LifetimeCelebrationTemplate = ({
  lang,
  pathname,
  metatagsDescriptions,
  testimonialsJson,
  langJson,
  navbarLang,
  footerLang,
}) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'lifetime');
  const router = useRouter();
  const filename = pathname.split('/').pop();
  const selectedPathName = ALLOWED_PATHS.find((allowedPathname) => allowedPathname === `${filename}`);

  const currencySpecified = PATHS_WITH_CURRENCY_SPECIFIED.includes(filename) ? 'US' : undefined;

  useEffect(() => {
    console.log('FILENAME: ', filename);
    if (!selectedPathName) {
      router.push('/lifetime');
    }
  }, [selectedPathName, router]);

  const discount = {
    canada: 0.2,
    usa: 0.2,
    brazil: 0.2,
    mexico: 0.2,
    france: 0.17,
    belgium: 0.17,
    switzerland: 0.17,
    singapore: 0.17,
  };

  const couponCode = {
    canada: PromoCodeName.IndependenceDayItaly,
    usa: PromoCodeName.IndependenceDayItaly,
    brazil: PromoCodeName.IndependenceDayItaly,
    mexico: PromoCodeName.IndependenceDayItaly,
    france: PromoCodeName.Lifetime83DiscountCoupon,
    belgium: PromoCodeName.Lifetime83DiscountCoupon,
    switzerland: PromoCodeName.Lifetime83DiscountCoupon,
    singapore: PromoCodeName.Lifetime83DiscountCoupon,
  };

  const percent = {
    canada: '80%',
    usa: '80%',
    brazil: '80%',
    mexico: '80%',
    france: '83%',
    belgium: '83%',
    switzerland: '83%',
    singapore: '83%',
  };

  return (
    <Layout
      title={metatags[0].title}
      description={metatags[0].description}
      segmentName="Lifetime"
      lang={lang}
      specialOffer={`https://internxt.com/images/previewLink/LifetimePreviewLink.png`}
    >
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed mode="payment" isLinksHidden hideNavbar />

      <HeroSection
        textContent={langJson.HeroSection.celebration[filename]}
        isCelebrationPage
        previewImg={getImage(IMAGES_PER_PATH[filename].previewImage)}
        imageMobile={getImage(IMAGES_PER_PATH[filename].mobileImage)}
        bgImage={getImage(IMAGES_PER_PATH[filename].backgroundImage)}
      />

      <PaymentSection
        textContent={langJson.PaymentSection}
        discount={discount[pathname]}
        showPriceBefore
        lang={lang}
        percent={percent[pathname]}
        currencySpecified={currencySpecified}
        couponCode={couponCode[pathname]}
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
  let lang = 'en';
  const pathname = ctx.params.filename;

  if (['france', 'belgium'].includes(pathname)) {
    lang = 'fr';
  }

  if (['mexico'].includes(pathname)) {
    lang = 'es';
  }

  if (['switzerland'].includes(pathname)) {
    lang = 'de';
  }

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/lifetime.json`);
  const testimonialsJson = require(`@/assets/lang/${lang}/home.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      pathname,
      metatagsDescriptions,
      langJson,
      testimonialsJson,
      navbarLang,
      footerLang,
    },
  };
}

export default LifetimeCelebrationTemplate;
