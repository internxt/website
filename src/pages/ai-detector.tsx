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
  LockKey,
  Student,
  Briefcase,
  MicrophoneStage,
  Pen,
  FileMagnifyingGlass,
} from '@phosphor-icons/react';
import { getImage } from '@/lib/getImage';
import { ShieldStar } from '@phosphor-icons/react';
import FeaturesSliderImg from '@/components/ai-detector/FeatureSliderImg';
import FeaturesSlider from '@/components/shared/FeaturesSlider';

const AIDetector = ({
  metatagsDescriptions,
  langJson,
  toolsContent,
  navbarLang,
  footerLang,
  lang,
  bannerLang,
}): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'zerogpt-ai-checker');
  const CTA_URL = `/pricing`;
  const cardInfo = [
    {
      icon: FileMagnifyingGlass,
      title: langJson.FeaturesSlider.info[0].title,
      description: langJson.FeaturesSlider.info[0].description,
    },
    {
      icon: LockKey,
      title: langJson.FeaturesSlider.info[1].title,
      description: langJson.FeaturesSlider.info[1].description,
    },
    {
      icon: ShieldStar,
      title: langJson.FeaturesSlider.info[2].title,
      description: langJson.FeaturesSlider.info[2].description,
    },
    {
      icon: Files,
      title: langJson.FeaturesSlider.info[3].title,
      description: langJson.FeaturesSlider.info[3].description,
    },
    {
      icon: Fingerprint,
      title: langJson.FeaturesSlider.info[4].title,
      description: langJson.FeaturesSlider.info[4].description,
    },
    {
      icon: FileLock,
      title: langJson.FeaturesSlider.info[5].title,
      description: langJson.FeaturesSlider.info[5].description,
    },
  ];
  const cardInfoImg = [
    {
      icon: Student,
      ...langJson.FeaturesSliderImg.info[0],
      image: getImage('/images/AI_detector/students.webp'),
    },
    {
      icon: Briefcase,
      ...langJson.FeaturesSliderImg.info[1],
      image: getImage('/images/AI_detector/educators.webp'),
    },
    {
      icon: MicrophoneStage,
      ...langJson.FeaturesSliderImg.info[2],
      image: getImage('/images/AI_detector/journalists.webp'),
    },
    {
      icon: Pen,
      ...langJson.FeaturesSliderImg.info[3],
      image: getImage('/images/AI_detector/bloggers.webp'),
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

        <FeaturesSection textContent={langJson.FeaturesSection} bannerText={bannerLang.SignUpAiDetector} lang={lang} />

        <CtaSection
          textContent={langJson.CtaSection}
          url={CTA_URL}
          customDescription={<p className="w-full text-xl font-normal">{langJson.CtaSection.description}</p>}
        />

        <FeaturesSlider textContent={langJson.FeaturesSlider} cardInfo={cardInfo} />

        <FeaturesSliderImg textContent={langJson.FeaturesSliderImg} cardInfo={cardInfoImg} />

        <ToolsSection textContent={toolsContent} lang={lang} />

        <CtaSection
          textContent={langJson.CtaSection2}
          url={CTA_URL}
          customDescription={<p className="w-full text-xl font-normal">{langJson.CtaSection2.description}</p>}
        />

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

export default AIDetector;
