import FileParallaxSection from '../components/home/FileParallaxSection';
import Footer from '../components/layout/Footer';
import Layout from '../components/layout/Layout';
import Navbar from '../components/layout/Navbar';
import DifferencesBetweenOpenAndCloseSS from '../components/open-source/DifferencesBetweenOpenAndCloseSS';
import HeroSection from '../components/open-source/HeroSection';
import LearningWithOSCommunity from '../components/open-source/LearningWithOSCommunity';
import WhatAreTheBenefits from '../components/open-source/WhatAreTheBenefits';
import WhatIsOSS from '../components/open-source/WhatIsOSS';
import CtaSection from '../components/shared/CtaSection';

const CTA_SIGNUP_URL = `${process.env.NEXT_DRIVE_WEB}/new`;

const OpenSource = ({ lang, metatagsDescriptions, langJson, navbarLang, footerLang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'open-source');
  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Open Source" lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

      <HeroSection textContent={langJson.HeroSection} />

      <FileParallaxSection />

      <WhatIsOSS textContent={langJson.WhatIsOSS} />

      <WhatAreTheBenefits textContent={langJson.WhatAreTheBenefits} />

      <CtaSection textContent={langJson.CtaSection1} url={CTA_SIGNUP_URL} />

      <LearningWithOSCommunity textContent={langJson.LearningWithOSCommunity} />

      <DifferencesBetweenOpenAndCloseSS textContent={langJson.DifferencesBetweenOpenAndCloseSS} />

      <CtaSection textContent={langJson.CtaSection2} url={CTA_SIGNUP_URL} />

      <Footer textContent={footerLang} lang={lang} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/en/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/en/open-source.json`);
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

export default OpenSource;
