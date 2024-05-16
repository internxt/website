import { useState } from 'react';

import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/inxt-library/shared/HeroSection';
import WhatWeDo from '@/components/inxt-library/shared/WhatWeDo';
import WhatYouWillLearn from '@/components/inxt-library/shared/WhatYouWillLearn';
import CtaSection from '@/components/shared/CtaSection';
import FeatureSection from '@/components/inxt-library/shared/FeatureSection';
import RelatedResourcesSection from '@/components/inxt-library/shared/RelatedResourcesSection';
import RelatedBannerCard from '@/components/inxt-library/components/RelatedbannerCard';
import DownloadedEbookBanner from '@/components/banners/DownloadedEbookBanner';

const OnlinePrivacyEbook = ({ lang, metatagsDescriptions, navbar, textContent, footer }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'online-privacy-ebook');
  const [bannerVisible, setIsBannerVisible] = useState(false);

  const onCloseBanner = () => {
    setIsBannerVisible(false);
  };

  return (
    <Layout title={metatags[0].title} description={metatags[0].description}>
      <Navbar fixed lang="en" textContent={navbar} cta={['default']} />

      <HeroSection
        textContent={textContent.HeroSection}
        imageUrl={'/images/inxt-library/Internxt_ebook_download.webp'}
        altImage={'Internxt eBook download'}
        eBook={`/inxt-library/Guide_to_Online_Privacy.pdf`}
        setBannerVisible={setIsBannerVisible}
      />

      <DownloadedEbookBanner
        bannerVisible={bannerVisible}
        onClose={onCloseBanner}
        textContent={textContent.DownloadedBanner}
      />

      <WhatWeDo textContent={textContent.WhatWeDo} />

      <WhatYouWillLearn
        textContent={textContent.WhatYouWillLearn}
        stepsAltImage={'Online privacy eBook steps'}
        stepsImage={'/images/inxt-library/online_privacy_ebook.webp'}
      />

      <CtaSection textContent={textContent.CtaSection} url="https://drive.internxt.com/new" maxWidth="max-w-[550px]" />

      <FeatureSection
        textContent={textContent.FeatureSection}
        urlImage={'/images/inxt-library/internxt_ebook_download_banner.webp'}
        altImage={'Internxt eBook download banner'}
      />

      <RelatedResourcesSection textContent={textContent.RelatedResourcesSection}>
        <RelatedBannerCard
          textContent={textContent.RelatedResourcesSection.card}
          learnMoreLink={'/child-safety-ebook'}
          imageUrl={'/images/inxt-library/Internxt_ebook_banner.webp'}
          altUrl={'Internxt Child Safety eBook banner'}
        />
      </RelatedResourcesSection>

      <CtaSection textContent={textContent.CtaSection2} url="https://drive.internxt.com/new" maxWidth="max-w-[550px]" />

      <Footer textContent={footer} lang={'en'} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/en/metatags-descriptions.json`);
  const navbar = require(`@/assets/lang/en/navbar.json`);
  const textContent = require(`@/assets/lang/en/online-privacy-ebook.json`);
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

export default OnlinePrivacyEbook;
