import dynamic from 'next/dynamic';

import cookies from '@/lib/cookies';

import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/home/HeroSection';
import FirstFeaturesSection from '@/components/home/FirstFeaturesSection';
import PriceTable from '@/components/prices/PriceTable';
import { CouponType } from '@/lib/types';

const FileParallaxSection = dynamic(() => import('@/components/home/FileParallaxSection'));
const SecondFeaturesSection = dynamic(() => import('@/components/home/SecondFeaturesSection'));
const FirstWhatWeDoSection = dynamic(() => import('@/components/home/FirstWhatWeDoSection'));
const SecondWhatWeDoSection = dynamic(() => import('@/components/home/SecondWhatWeDoSection'));
const TestimonialsSection = dynamic(() => import('@/components/home/TestimonialsSection'));
const ThirdFeaturesSection = dynamic(() => import('@/components/home/ThirdFeaturesSection'));
const SocialProofSection = dynamic(() => import('@/components/home/SocialProofSection'));
const Footer = dynamic(() => import('@/components/layout/Footer'));

const Home = ({ metatagsDescriptions, langJson, lang, navbarLang, footerLang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'home');

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Home" lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

      <HeroSection textContent={langJson.HeroSection} lang={lang} />

      <FirstFeaturesSection textContent={langJson.FirstFeaturesSection} lang={lang} />

      {/* <InfoSection textContent={langJson.InfoSection} lang={lang} /> */}

      <PriceTable
        setSegmentPageName={() => {}}
        lang={lang}
        textContent={langJson.tableSection}
        isTableInHomePage
        couponCode={CouponType.euro2024Sub}
      />

      <FileParallaxSection />

      <SecondFeaturesSection textContent={langJson.SecondFeaturesSection} />

      <FirstWhatWeDoSection textContent={langJson.FirstWhatWeDoSection} lang={lang} />

      <SecondWhatWeDoSection textContent={langJson.SecondWhatWeDoSection} lang={lang} />

      <TestimonialsSection textContent={langJson.TestimonialsSection} />

      <ThirdFeaturesSection textContent={langJson.ThirdFeaturesSection} />

      <SocialProofSection textContent={langJson.InvestorsSection} lang={lang} />

      <Footer textContent={footerLang} lang={lang} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/home.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      metatagsDescriptions,
      langJson,
      navbarLang,
      footerLang,
    },
  };
}

export default Home;
