import cookies from '@/lib/cookies';

import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/home/HeroSection';
import SocialProofSection from '@/components/home/SocialProofSection';
import Footer from '@/components/layout/Footer';
import { ChooseStorageSizeSection } from '@/components/home/ChooseStorageSizeSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import { MarqueeComponent } from '@/components/specialoffer/MarqueeComponent';
import FAQSection from '@/components/shared/FaqSection';
import { FeatureSectionV2 } from '@/components/home/FeatureSectionV2';
import CtaSection from '@/components/shared/CtaSection';
import FirstFeaturesSection from '@/components/home/FirstFeaturesSection';
import SecondFeaturesSection from '@/components/home/SecondFeaturesSection';
import PriceTable from '@/components/prices/PriceTable';
import { CouponType } from '@/lib/types';
import FirstWhatWeDoSection from '@/components/home/FirstWhatWeDoSection';
import SecondWhatWeDoSection from '@/components/home/SecondWhatWeDoSection';
import { useRouter } from 'next/router';

const Home = ({ metatagsDescriptions, langJson, lang, navbarLang, footerLang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'home');
  const router = useRouter();

  // TODO: Manage when to show version 2 of the home page
  const isHomePageV2 = false;

  const navbarCta = isHomePageV2 ? 'chooseStorage' : 'default';

  const marqueeBgColor = isHomePageV2 ? 'bg-white' : 'bg-gray-1';
  const faqSectionBgColor = !isHomePageV2 ? 'bg-gray-1' : undefined;
  const faqSectionCardColor = !isHomePageV2 ? 'bg-white' : undefined;

  const onChooseStorageButtonClicked = () => {
    if (isHomePageV2) {
      router.push('/pricing');
    } else {
      window.location.hash = '#priceTable';
    }
  };

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Home" lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={[navbarCta]} fixed />

      <HeroSection textContent={langJson.HeroSection} lang={lang} isHomePageV2={isHomePageV2} />

      <ChooseStorageSizeSection
        textContent={langJson.ChooseStorageSizeSection}
        onButtonClicked={onChooseStorageButtonClicked}
      />

      <TestimonialsSection textContent={langJson.TestimonialsSection} />

      <div className={`${marqueeBgColor} py-10`}>
        <MarqueeComponent bgColor={marqueeBgColor} />
      </div>

      {isHomePageV2 ? (
        <FeatureSectionV2 textContent={langJson.FeatureSectionV2} />
      ) : (
        <>
          <FirstFeaturesSection textContent={langJson.FirstFeaturesSection} lang={lang} />

          <SecondFeaturesSection textContent={langJson.SecondFeaturesSection} lang={lang} />

          <PriceTable
            setSegmentPageName={() => {}}
            lang={lang}
            textContent={langJson.tableSection}
            isTableInHomePage
            couponCode={CouponType.euro2024Sub}
          />

          <FirstWhatWeDoSection textContent={langJson.FirstWhatWeDoSection} lang={lang} backgroundColor="bg-gray-1" />

          <SecondWhatWeDoSection textContent={langJson.SecondWhatWeDoSection} lang={lang} />
        </>
      )}

      <FAQSection textContent={langJson.FaqSection} bgColor={faqSectionBgColor} cardColor={faqSectionCardColor} />

      {isHomePageV2 ? (
        <CtaSection textContent={langJson.CtaSection} url={'/pricing'} />
      ) : (
        <SocialProofSection textContent={langJson.InvestorsSection} lang={lang} />
      )}

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
