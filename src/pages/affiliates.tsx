import FaqSection from '@/components/shared/FaqSection';
import FeatureSection from '@/components/affiliates/FeatureSection';
import HeroSection from '@/components/affiliates/HeroSection';
import WhatIsInternxtSection from '@/components/affiliates/WhatIsInternxtSection';
import WhatWeDoSection from '@/components/affiliates/WhatWeDoSection';
import WhyJoinSection from '@/components/affiliates/WhyJoinSection';
import FileParallaxSection from '@/components/home/FileParallaxSection';
import Footer from '@/components/layout/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/Navbar';
import CtaSection from '@/components/shared/CtaSection';

const Affiliates = ({ langJson, lang, metatagsDescriptions, navbarLang, footerLang }) => {
  const metatags = metatagsDescriptions.filter((item) => item.id === 'affiliates');

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Affiliates" lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

      <HeroSection textContent={langJson.HeroSection} />

      <FeatureSection textContent={langJson.FeatureSection} />

      <WhatIsInternxtSection textContent={langJson.WhatIsInternxtSection} />

      <WhyJoinSection textContent={langJson.WhyJoinSection} />

      <FileParallaxSection />

      <WhatWeDoSection textContent={langJson.WhatWeDoSection} />

      <FaqSection textContent={langJson.FaqSection} />

      <CtaSection
        textContent={langJson.CtaSection}
        url={
          'https://app.impact.com/campaign-mediapartner-signup/Internxt.brand?type=dm&io=e2AXxeEh7q3EO8TzTRQ1yfzRimhVUUQ4VIYp7wvigF46G5y9GkCkRC94J2GfuR%2Fa'
        }
      />

      <Footer textContent={footerLang} lang={lang} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/en/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/en/affiliates.json`);
  const navbarLang = require(`@/assets/lang/en/navbar.json`);
  const footerLang = require(`@/assets/lang/en/footer.json`);

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
