import HeroSection from '../components/affiliates/HeroSection';
import Footer from '../components/layout/Footer';
import Layout from '../components/layout/Layout';
import Navbar from '../components/layout/Navbar';

const Affiliates = ({ langJson, lang, metatagsDescriptions, navbarLang, footerLang }) => {
  const metatags = metatagsDescriptions.filter((item) => item.id === 'affiliates');

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Home" lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />
      <HeroSection textContent={langJson.HeroSection} />
      <Footer textContent={footerLang} lang={lang} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/en/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/en/affiliates.json`);
  const navbarLang = require(`../assets/lang/en/navbar.json`);
  const footerLang = require(`../assets/lang/en/footer.json`);

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

export default Affiliates;
