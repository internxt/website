import Footer from '@/components/layout/footers/Footer';
import Navbar from '@/components/layout/navbars/Navbar';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/partner-discount/HeroSection';
import PaymentSection from '@/components/partner-discount/PaymentSection';
import FeatureSection from '@/components/annual/FeatureSection';
import CtaSection from '@/components/pricing/CtaSection';
import { Eye, Fingerprint, LockKey, ShieldCheck } from '@phosphor-icons/react';
import InfoSection from '@/components/shared/sections/InfoSection';

const Annual = ({ metatagsDescriptions, langJson, navbarLang, footerLang, infoSectionLang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'pricing');

  const lang = 'en';

  const cardsData = [
    {
      icon: ShieldCheck,
      title: infoSectionLang.InfoSection.cards[0].title,
      description: infoSectionLang.InfoSection.cards[0].description,
    },
    {
      icon: LockKey,
      title: infoSectionLang.InfoSection.cards[1].title,
      description: infoSectionLang.InfoSection.cards[1].description,
    },
    {
      icon: Eye,
      title: infoSectionLang.InfoSection.cards[2].title,
      description: infoSectionLang.InfoSection.cards[2].description,
    },
    {
      icon: Fingerprint,
      title: infoSectionLang.InfoSection.cards[3].title,
      description: infoSectionLang.InfoSection.cards[3].description,
    },
  ];

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Partners" lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

      <HeroSection textContent={langJson.HeroSection} />

      <PaymentSection textContent={langJson.PaymentSection} lang={lang} />

      <FeatureSection textContent={langJson.FeatureSection} />

      <InfoSection
        textContent={infoSectionLang.InfoSection}
        lang={lang}
        withoutCta
        backgroundColor="bg-gray-1"
        cards={cardsData}
      />

      <CtaSection textContent={langJson.CtaSection} />

      <Footer textContent={footerLang} lang={lang} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const metatagsDescriptions = require(`@/assets/lang/en/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/en/partner-discount.json`);
  const infoSectionLang = require(`@/assets/lang/en/home.json`);
  const navbarLang = require(`@/assets/lang/en/navbar.json`);
  const footerLang = require(`@/assets/lang/en/footer.json`);

  return {
    props: {
      metatagsDescriptions,
      langJson,
      navbarLang,
      footerLang,
      infoSectionLang,
    },
  };
}

export default Annual;
