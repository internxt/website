import Layout from '../components/layout/Layout';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FAQSection from '../components/shared/FaqSection';
import CtaSection from '../components/cloud-storage-for-education/CtaSection';
import HeroSection from '../components/cloud-storage-for-education/HeroSection';
import AchieveSecurityAndPrivacySection from '../components/cloud-storage-for-education/AchieveSecurityAndPrivacySection';
import BenefitsOfInternxtSection from '../components/cloud-storage-for-education/BenefitsOfInternxtSection';
import WhyChooseInternxtSection from '../components/cloud-storage-for-education/WhyChooseInternxtSection';
import ClaimYourDiscountSection from '../components/cloud-storage-for-education/ClaimYourDiscountSection';

const CloudStorageForEducation = ({ lang, metatagsDescriptions, navbar, textContent, footer }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'cloud-storage-for-education');
  return (
    <Layout title={metatags[0].title} description={metatags[0].description}>
      <Navbar fixed lang={lang} textContent={navbar} cta={['default']} />

      <HeroSection textContent={textContent.HeroSection} />

      <AchieveSecurityAndPrivacySection textContent={textContent.AchieveSecurityAndPrivacySection} />

      <BenefitsOfInternxtSection textContent={textContent.BenefitsOfInternxtSection} />

      <ClaimYourDiscountSection textContent={textContent.ClaimYourDiscountSection} />

      <WhyChooseInternxtSection textContent={textContent.WhyChooseInternxtSection} />

      <CtaSection textContent={textContent.CtaSection} />

      <FAQSection textContent={textContent.FaqSection} />

      <Footer textContent={footer} lang={'en'} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale || ctx.defaultLocale;

  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const navbar = require(`../assets/lang/${lang}/navbar.json`);
  const textContent = require(`../assets/lang/${lang}/cloud-storage-for-education.json`);
  const footer = require(`../assets/lang/${lang}/footer.json`);

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
