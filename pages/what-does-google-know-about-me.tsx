import Layout from '../components/layout/Layout';
import Navbar from '../components/layout/Navbar';

const WhatDoesGoogleKnowAboutMe = ({ lang, langJson, metatagsDescriptions, navbarLang, footerLang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'photos');

  return (
    <Layout
      title={metatags[0].title}
      description={metatags[0].description}
      segmentName="What Does Google Know About Me"
      lang={lang}
    >
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />
    </Layout>
  );
};

export async function getServerSideProps(ctx: any) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/${lang}/what-does-google-know-about-me.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);

  return {
    props: {
      langJson,
      metatagsDescriptions,
      navbarLang,
      footerLang,
      lang,
    },
  };
}

export default WhatDoesGoogleKnowAboutMe;
