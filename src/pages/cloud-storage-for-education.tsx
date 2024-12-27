import { useState } from 'react';

import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import Footer from '@/components/layout/footers/Footer';
import FAQSection from '@/components/shared/sections/FaqSection';
import CtaSection from '@/components/cloud-storage-for-education/CtaSection';
import HeroSection from '@/components/cloud-storage-for-education/HeroSection';
import AchieveSecurityAndPrivacySection from '@/components/cloud-storage-for-education/AchieveSecurityAndPrivacySection';
import BenefitsOfInternxtSection from '@/components/cloud-storage-for-education/BenefitsOfInternxtSection';
import WhyChooseInternxtSection from '@/components/cloud-storage-for-education/WhyChooseInternxtSection';
import ClaimYourDiscountSection from '@/components/cloud-storage-for-education/ClaimYourDiscountSection';
import IntercomTicketCreatedBanner from '@/components/banners/IntercomTicketCreatedBanner';
import Script from 'next/script';

const CloudStorageForEducation = ({ lang, metatagsDescriptions, navbar, textContent, footer }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'cloud-storage-for-education');
  const [bannerVisible, setBannerVisible] = useState(false);

  const onBannerClose = () => {
    setBannerVisible(false);
  };

  const onOpenBanner = () => {
    setBannerVisible(true);
  };

  return (
    <>
      {lang === 'en' && (
        <Script src="https://analytics.ahrefs.com/analytics.js" data-key="AJfAg8JhxYbS3NkIKdlang" defer />
      )}
      <Layout title={metatags[0].title} description={metatags[0].description}>
        <Navbar fixed lang={lang} textContent={navbar} cta={['default']} />

        <HeroSection textContent={textContent.HeroSection} />

        <IntercomTicketCreatedBanner
          textContent={textContent.banner}
          bannerVisible={bannerVisible}
          onClose={onBannerClose}
        />

        <AchieveSecurityAndPrivacySection textContent={textContent.AchieveSecurityAndPrivacySection} />

        <BenefitsOfInternxtSection textContent={textContent.BenefitsOfInternxtSection} />

        <ClaimYourDiscountSection textContent={textContent.ClaimYourDiscountSection} openBanner={onOpenBanner} />

        <WhyChooseInternxtSection textContent={textContent.WhyChooseInternxtSection} />

        <CtaSection textContent={textContent.CtaSection} />

        <FAQSection textContent={textContent.FaqSection} />

        <Footer textContent={footer} lang={lang} />
      </Layout>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale || ctx.defaultLocale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const navbar = require(`@/assets/lang/${lang}/navbar.json`);
  const textContent = require(`@/assets/lang/${lang}/cloud-storage-for-education.json`);
  const footer = require(`@/assets/lang/${lang}/footer.json`);

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

export default CloudStorageForEducation;
