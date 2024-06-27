import cookies from '@/lib/cookies';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import HeroSection from '@/components/black-friday/HeroSection';

import SuiteSection from '@/components/black-friday/SuiteSection';
import CtaSection from '@/components/black-friday/CtaSection';
import FeatureSection from '@/components/black-friday/FeatureSection';
import PlatformSection from '@/components/black-friday/PlatformSection';
import TestimonialsSection from '@/components/black-friday/TestimonialsSection';
import FaqSection from '@/components/black-friday/FAQSection';
import BestStorageSection from '@/components/black-friday/BestStorageSection';
import LoginBFBanner from '@/components/banners/LoginBFBanner';
import FooterSection from '@/components/black-friday/FooterSection';

const BLACK_FRIDAY_METATAG_ID = 'black-friday';

const BlackFriday = ({ lang, metatagsDescriptions, langJson, navbarLang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === BLACK_FRIDAY_METATAG_ID);

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Black Friday">
      <Navbar
        lang={lang}
        darkMode={true}
        isBlackfriday={true}
        textContent={navbarLang}
        cta={['Hide Login']}
        isLinksHidden
      />
      <LoginBFBanner />

      <HeroSection lang={lang} textContent={langJson.blackFriday} />

      <BestStorageSection textContent={langJson.blackFriday} lang={lang} />

      <SuiteSection lang={lang} textContent={langJson.blackFriday} />

      <CtaSection textContent={langJson.cta} lang={lang} />

      <FeatureSection textContent={langJson.blackFriday} />

      <PlatformSection textContent={langJson.blackFriday} />

      <TestimonialsSection textContent={langJson.blackFriday} lang={lang} />

      <CtaSection textContent={langJson.cta2} lang={lang} />

      <FaqSection textContent={langJson.blackFriday} />

      <FooterSection textContent={langJson.blackFriday} lang={lang} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const language = ctx.locale;

  const allowedLanguages = ['en', 'fr'];

  const lang = allowedLanguages.includes(language) ? language : 'en';

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const langJson = require(`@/assets/lang/${lang}/black-friday.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      metatagsDescriptions,
      navbarLang,
      langJson,
      footerLang,
    },
  };
}

export default BlackFriday;
