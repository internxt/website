import Footer from '../components/layout/Footer';
import Layout from '../components/layout/Layout';
import Navbar from '../components/layout/Navbar';
import CtaSection from '../components/shared/CtaSection';
import HeroSection from '../components/success-stories/HeroSection';
import WhatWeDo from '../components/success-stories/WhatWeDo';

const InternxtForDigitalNomads = ({ metatagsDescriptions, navbarLang, bannerLang, langJson, footerLang, lang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'internxt-for-digital-nomads');
  return (
    <Layout
      title={metatags[0].title}
      description={metatags[0].description}
      segmentName="Internxt For Journalists"
      lang={lang}
    >
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

      <HeroSection textContent={langJson.HeroSection} />

      <WhatWeDo textContent={langJson.WhatWeDo} bannerLang={bannerLang.SignUpSuccessStoriesBanner} />

      <CtaSection textContent={langJson.CtaSection} url={`${process.env.NEXT_PUBLIC_DRIVE_WEB}/new`} />

      <Footer textContent={footerLang} lang={lang} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/en/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/en/internxt-for-digital-nomads.json`);
  const navbarLang = require(`../assets/lang/en/navbar.json`);
  const footerLang = require(`../assets/lang/en/footer.json`);
  const bannerLang = require(`../assets/lang/en/banners.json`);

  return {
    props: {
      lang,
      metatagsDescriptions,
      langJson,
      navbarLang,
      footerLang,
      bannerLang,
    },
  };
}

export default InternxtForDigitalNomads;
