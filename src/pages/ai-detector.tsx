import Script from 'next/script';

import Footer from '@/components/layout/footers/Footer';
import Navbar from '@/components/layout/navbars/Navbar';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/ai-detector/HeroSection';
import FeaturesSection from '@/components/ai-detector/FeaturesSection';
import CtaSection from '@/components/shared/CtaSection';
import FAQSection from '@/components/shared/sections/FaqSection';
import { ToolsSection } from '@/components/shared/sections/ToolsSection';
import TryInternxtBanner from '@/components/banners/TryInternxtBanner';

import { sm_faq, sm_breadcrumb } from '@/components/utils/schema-markup-generator';
import {
  Files,
  Fingerprint,
  FileLock,
  ImageSquare,
  ShareNetwork,
  Infinity as InfinityIcon,
  LockKey,
} from '@phosphor-icons/react';
import { Detective } from '@phosphor-icons/react';
import { getImage } from '@/lib/getImage';
import { ShieldStar } from '@phosphor-icons/react';
import FeaturesSliderImg from '@/components/ai-detector/FeatureSliderImg';
import FeaturesSlider from '@/components/shared/FeaturesSlider';

const Scan = ({
  metatagsDescriptions,
  langJson,
  toolsContent,
  navbarLang,
  footerLang,
  lang,
  bannerLang,
}): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'virus-scanner');
  const cardInfo = [
    { icon: InfinityIcon, ...langJson.FeaturesSliderImg.info[0] },
    { icon: LockKey, ...langJson.FeaturesSliderImg.info[1] },
    { icon: ShieldStar, ...langJson.FeaturesSliderImg.info[2] },
    { icon: Files, ...langJson.FeaturesSliderImg.info[3] },
    { icon: Fingerprint, ...langJson.FeaturesSliderImg.info[4] },
    { icon: FileLock, ...langJson.FeaturesSliderImg.info[5] },
  ];
  const cardInfoImg = [
    {
      icon: ImageSquare,
      ...langJson.FeaturesSlider.info[0],
      image: getImage('/images/metadata-remover/protected_data.webp'),
    },
    {
      icon: ShieldStar,
      ...langJson.FeaturesSlider.info[1],
      image: getImage('/images/metadata-remover/data_leaks.webp'),
    },
    {
      icon: Detective,
      ...langJson.FeaturesSlider.info[2],
      image: getImage('/images/metadata-remover/anonymous_submissions.webp'),
    },
    {
      icon: ShareNetwork,
      ...langJson.FeaturesSlider.info[3],
      image: getImage('/images/metadata-remover/file_sharing.webp'),
    },
  ];
  return (
    <>
      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_faq(langJson.FaqSection.faq)}
      </Script>

      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_breadcrumb('Virus Scanner', 'virus-scanner')}
      </Script>

      <Layout segmentName="Virus Scanner" title={metatags[0].title} description={metatags[0].description} lang={lang}>
        <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

        <HeroSection textContent={langJson.HeroSection} lang={lang} />

        <TryInternxtBanner
          textContent={bannerLang.tryOutInternxtGeneralBanner}
          url={'https://drive.internxt.com/new?utm_source=website&utm_medium=banner&utm_campaign=internxt'}
        />

        <FeaturesSection
          textContent={langJson.FeaturesSection}
          bannerText={bannerLang.SignUpVirusScannerBanner}
          lang={lang}
        />

        <CtaSection textContent={langJson.CtaSection} />

        <FeaturesSlider textContent={langJson.FeaturesSlider} cardInfo={cardInfo} />

        <FeaturesSliderImg textContent={langJson.FeaturesSlider} cardInfo={cardInfoImg} />

        <ToolsSection textContent={toolsContent} lang={lang} />

        <CtaSection textContent={langJson.CtaSection} />

        <FAQSection textContent={langJson.FaqSection} />

        <Footer textContent={footerLang} lang={lang} hideNewsletter={false} />
      </Layout>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/ai-detector.json`);
  const toolsContent = require(`@/assets/lang/${lang}/components/tools/ToolSection.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const bannerLang = require(`@/assets/lang/${lang}/banners.json`);

  return {
    props: {
      metatagsDescriptions,
      langJson,
      toolsContent,
      footerLang,
      navbarLang,
      lang,
      bannerLang,
    },
  };
}

export default Scan;
