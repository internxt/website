import cookies from '@/lib/cookies';

import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import HeroSection from '@/components/home/HeroSection';
import SocialProofSection from '@/components/home/SocialProofSection';
import Footer from '@/components/layout/footers/Footer';
import { ChooseStorageSizeSection } from '@/components/home/ChooseStorageSizeSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import { MarqueeComponent } from '@/components/specialoffer/MarqueeComponent';
import FAQSection from '@/components/shared/sections/FaqSection';
import FirstFeaturesSection from '@/components/home/FirstFeaturesSection';
import SecondFeaturesSection from '@/components/home/SecondFeaturesSection';
import PriceTable from '@/components/prices/PriceTable';
import FirstWhatWeDoSection from '@/components/home/FirstWhatWeDoSection';
import SecondWhatWeDoSection from '@/components/home/SecondWhatWeDoSection';
import { CouponType } from '@/lib/types';

const Home = ({ metatagsDescriptions, langJson, lang, navbarLang, footerLang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'home');

  const navbarCta = 'default';

  const marqueeBgColor = 'bg-gray-1';

  const onChooseStorageButtonClicked = () => {
    window.location.hash = '#priceTable';
  };

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Home" lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={[navbarCta]} fixed />

      <HeroSection textContent={langJson.HeroSection} lang={lang} />

      <ChooseStorageSizeSection
        textContent={langJson.ChooseStorageSizeSection}
        onButtonClicked={onChooseStorageButtonClicked}
      />

      <TestimonialsSection textContent={langJson.TestimonialsSection} />

      <div className={`${marqueeBgColor} py-10`}>
        <MarqueeComponent bgColor={marqueeBgColor} />
      </div>

      <FirstFeaturesSection textContent={langJson.FirstFeaturesSection} lang={lang} />

      <SecondFeaturesSection textContent={langJson.SecondFeaturesSection} lang={lang} />

      <PriceTable
        setSegmentPageName={() => {}}
        lang={lang}
        textContent={langJson.tableSection}
        isTableInHomePage
        discount={0.2}
        couponCode={CouponType.AllPlansCoupon}
        useSameCouponForAllPlans
      />

      <FirstWhatWeDoSection textContent={langJson.FirstWhatWeDoSection} lang={lang} backgroundColor="bg-gray-1" />

      <SecondWhatWeDoSection textContent={langJson.SecondWhatWeDoSection} lang={lang} />

      <FAQSection textContent={langJson.FaqSection} bgColor="bg-gray-1" cardColor="bg-white" />

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
