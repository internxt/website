import FileParallaxSection from '../components/home/FileParallaxSection';
import Footer from '../components/layout/Footer';
import Layout from '../components/layout/Layout';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/use-cases/HeroSection';
import CybersecurityIsEssential from '../components/use-cases/CybersecurityIsEssential';
import SecuringSuccess from '../components/use-cases/SecuringSuccess';
import CtaSection from '../components/use-cases/CtaSection';

const UseCases = ({ metatagsDescriptions, navbarLang, langJson, footerLang, lang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'use-cases');
  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Use Cases" lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

      <HeroSection textContent={langJson.HeroSection} />

      <FileParallaxSection />

      <CybersecurityIsEssential textContent={langJson.CybersecurityIsEssential} />

      <SecuringSuccess textContent={langJson.SecuringSuccess} />

      <CtaSection textContent={langJson.CtaSection} url={'https://drive.internxt.com/new'} />

      <Footer textContent={footerLang} lang={lang} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/en/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/en/use-cases.json`);
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

export default UseCases;
