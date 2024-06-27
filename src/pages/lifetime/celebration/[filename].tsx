import HeroSection from '@/components/lifetime/HeroSection';
import FeatureSection from '@/components/lifetime/FeatureSection';
import GetLifetimeSection from '@/components/lifetime/GetLifetimeSection';
import Layout from '@/components/layout/Layout';
import cookies from '@/lib/cookies';
import PaymentSection from '@/components/lifetime/PaymentSection';
import Navbar from '@/components/layout/Navbar';
import CtaSection from '@/components/lifetime/CtaSection';
import { CouponType } from '@/lib/types';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import { MinimalFooter } from '@/components/layout/MinimalFooter';
import { getImage } from '@/lib/getImage';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ALLOWED_PATHS = ['canada', 'usa', 'france', 'belgium'];

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
};

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

  useEffect(() => {
    if (!selectedPathName) {
      router.push('/lifetime');
    }
  }, [selectedPathName, router]);

  const discount = 0.2;

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
        textContent={langJson.HeroSection.celebration[filename]}
        isCelebrationPage
        previewImg={getImage(IMAGES_PER_PATH[filename].previewImage)}
        imageMobile={getImage(IMAGES_PER_PATH[filename].mobileImage)}
        bgImage={getImage(IMAGES_PER_PATH[filename].backgroundImage)}
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
  let lang = 'en';
  const pathname = ctx.params.filename;

  if (['france', 'belgium'].includes(pathname)) {
    lang = 'fr';
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
