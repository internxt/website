import HeroSection from '@/components/about/HeroSection';
import WhatWeDoSection from '@/components/about/WhatWeDoSection';
import FeatureSection from '@/components/about/FeatureSection';
import Footer from '@/components/layout/footers/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import cookies from '@/lib/cookies';
import HorizontalScrollableSection from '@/components/about/HorizontalScrollableSection';

const AboutUs = ({ lang, textContent, footerLang, navbarLang, metatagsDescriptions }): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'about');

  return (
    <Layout segmentName="About" title={metatags[0].title} description={metatags[0].description} lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

      <HeroSection textContent={textContent.HeroSection} />

      <WhatWeDoSection textContent={textContent.WhatWeDoSection} />

      <HorizontalScrollableSection textContent={textContent.ScrollableSection} header={false} />

      <FeatureSection textContent={textContent.FeatureSection} />

      <Footer textContent={footerLang} lang={lang} hideNewsletter={false} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const textContent = require(`@/assets/lang/${lang}/about.json`);
  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      metatagsDescriptions,
      footerLang,
      navbarLang,
      textContent,
    },
  };
}

export default AboutUs;
