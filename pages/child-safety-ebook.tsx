import Layout from '../components/layout/Layout';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/inxt-library/shared/HeroSection';
import WhatWeDo from '../components/inxt-library/shared/WhatWeDo';
import WhatYouWillLearn from '../components/inxt-library/shared/WhatYouWillLearn';
import CtaSection from '../components/shared/CtaSection';
import FeatureSection from '../components/inxt-library/shared/FeatureSection';
import RelatedResourcesSection from '../components/inxt-library/shared/RelatedResourcesSection';
import RelatedBannerCard from '../components/inxt-library/components/RelatedbannerCard';

const ChildSafetyEbook = ({ lang, metatagsDescriptions, navbar, textContent, footer }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'child-safety-ebook');

  return (
    <Layout title={metatags[0].title} description={metatags[0].description}>
      <Navbar fixed lang="en" textContent={navbar} cta={['default']} />

      <HeroSection
        textContent={textContent.HeroSection}
        imageUrl={'/images/inxt-library/kids_online_safety_ebook.webp'}
        altImage={'Internxt eBook download'}
      />

      <WhatWeDo textContent={textContent.WhatWeDo} />

      <WhatYouWillLearn
        textContent={textContent.WhatYouWillLearn}
        stepsAltImage={'Online privacy eBook steps'}
        stepsImage={'/images/inxt-library/parents_guide_ebook.webp'}
      />

      <CtaSection textContent={textContent.CtaSection} url="https://drive.internxt.com/new" maxWidth="max-w-[550px]" />

      <FeatureSection
        textContent={textContent.FeatureSection}
        urlImage={'/images/inxt-library/kids_online_safety_ebook_banner.webp'}
        altImage={'Internxt eBook download banner'}
      />

      <RelatedResourcesSection textContent={textContent.RelatedResourcesSection}>
        <RelatedBannerCard
          textContent={textContent.RelatedResourcesSection.card}
          learnMoreLink={'/online-privacy-ebook'}
          imageUrl={'/images/inxt-library/Internxt_ebook_banner.webp'}
          altUrl={'Internxt eBook download banner'}
        />
      </RelatedResourcesSection>

      <CtaSection textContent={textContent.CtaSection2} url="https://drive.internxt.com/new" maxWidth="max-w-[550px]" />

      <Footer textContent={footer} lang={'en'} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/en/metatags-descriptions.json`);
  const navbar = require(`../assets/lang/en/navbar.json`);
  const textContent = require(`../assets/lang/en/child-safety-ebook.json`);
  const footer = require(`../assets/lang/en/footer.json`);

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

export default ChildSafetyEbook;
