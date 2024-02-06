import HeroSection from '@/components/inxt-library/main/HeroSection';
import WhatWeDo from '@/components/inxt-library/main/WhatWeDo';
import Footer from '@/components/layout/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/Navbar';
import CtaSection from '@/components/shared/CtaSection';

const InternxtLibrary = ({ lang, metatagsDescriptions, navbar, inxtLibrary, footer }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'internxt-library');

  return (
    <Layout title={metatags[0].title} description={metatags[0].description}>
      <Navbar fixed lang="en" textContent={navbar} cta={['default']} />

      <HeroSection textContent={inxtLibrary.HeroSection} />

      <WhatWeDo textContent={inxtLibrary.WhatWeDo1} />

      <CtaSection textContent={inxtLibrary.firstCta} url="https://drive.internxt.com/new" maxWidth="max-w-[550px]" />

      <Footer textContent={footer} lang={'en'} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/en/metatags-descriptions.json`);
  const navbar = require(`@/assets/lang/en/navbar.json`);
  const inxtLibrary = require(`@/assets/lang/en/internxt-library.json`);
  const footer = require(`@/assets/lang/en/footer.json`);

  return {
    props: {
      lang,
      metatagsDescriptions,
      navbar,
      inxtLibrary,
      footer,
    },
  };
}

export default InternxtLibrary;
