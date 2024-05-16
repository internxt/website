import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/newsletter/HeroSection';
import Footer from '@/components/layout/Footer';
import FileParallaxSection from '@/components/home/FileParallaxSection';
import MakePrivacySection from '@/components/newsletter/MakePrivacySection';
import WhatGetSection from '@/components/newsletter/WhatGetSection';
import CtaSection from '@/components/shared/CtaSection';
import { SIGNUP_DRIVE_WEB_URL } from '@/constants';

const Newsletter = ({ lang, metatagsDescriptions, textContent, navbar, footer }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'newsletter-subscribe');
  return (
    <Layout title={metatags[0].title} description={metatags[0].description}>
      <Navbar fixed lang="en" textContent={navbar} cta={['default']} />

      <HeroSection textContent={textContent.HeroSection} />

      <FileParallaxSection />

      <MakePrivacySection textContent={textContent.MakePrivacySection} />

      <WhatGetSection textContent={textContent.WhatGetSection} />

      <CtaSection url={SIGNUP_DRIVE_WEB_URL} textContent={textContent.CtaSection} />

      <Footer textContent={footer} lang={'en'} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/en/metatags-descriptions.json`);
  const navbar = require(`@/assets/lang/en/navbar.json`);
  const textContent = require(`@/assets/lang/en/newsletter.json`);
  const footer = require(`@/assets/lang/en/footer.json`);

  return {
    props: {
      lang,
      metatagsDescriptions,
      navbar,
      textContent,
      footer,
    },
  };
}

export default Newsletter;
