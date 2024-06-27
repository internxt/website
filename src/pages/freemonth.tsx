import HeroSection from '@/components/partnerships/freemonth/HeroSection';
import FeatureSection from '@/components/partnerships/freemonth/FeatureSection';
import Footer from '@/components/layout/footers/Footer';
import Navbar from '@/components/layout/navbars/Navbar';
import Layout from '@/components/layout/Layout';
import cookies from '@/lib/cookies';

const SpecialOffer = ({ metatagsDescriptions, langJson, navbarLang, footerLang, deviceLang, lang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'freemonth');

  return (
    <Layout
      title={metatags[0].title}
      description={metatags[0].description}
      segmentName="Freemonth Partnership"
      lang={lang}
    >
      <Navbar textContent={navbarLang} lang={deviceLang} cta={['default']} fixed darkMode={false} />

      <HeroSection textContent={langJson.template.HeroSection} lang={lang} />

      <FeatureSection textContent={langJson.template.FeatureSection} />

      <Footer textContent={footerLang} lang={deviceLang} darkMode={false} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const deviceLang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/partnerships.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      deviceLang,
      metatagsDescriptions,
      langJson,
      navbarLang,
      footerLang,
    },
  };
}

export default SpecialOffer;
