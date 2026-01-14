import dynamic from 'next/dynamic';
import Script from 'next/script';
import Head from 'next/head';
import Footer from '@/components/layout/footers/Footer';
import Navbar from '@/components/layout/navbars/Navbar';
import Layout from '@/components/layout/Layout';
import FeaturesSection from '@/components/metadata-remover/FeaturesSection';
import CtaSection from '@/components/shared/CtaSection';
import TryInternxtBanner from '@/components/banners/TryInternxtBanner';
import {
  Infinity as InfinityIcon,
  LockKey,
  ShieldStar,
  Files,
  Fingerprint,
  FileLock,
  Detective,
  ShareNetwork,
  ImagesSquare,
} from '@phosphor-icons/react';
import FAQSection from '@/components/shared/sections/FaqSection';
import { ToolsSection } from '@/components/shared/sections/ToolsSection';
import FeaturesSliderImg from '@/components/metadata-remover/FeaturesSliderImg';
import FeaturesSlider from '@/components/shared/FeaturesSlider';
import { getImage } from '@/lib/getImage';
const HeroSection = dynamic(() => import('@/components/metadata-remover/HeroSection'), { ssr: false });

const CTA_URL = `/pricing`;

const Scan = ({ metatagsDescriptions, langJson, toolsContent, footerLang, navbarLang, lang, bannerLang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'internxt-metadata-remover');
  const cardInfo = [
    {
      icon: InfinityIcon,
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
      icon: ImagesSquare,
      ...langJson.FeaturesSliderImg.info[0],
      image: getImage('/images/metadata-remover/protected_data.webp'),
    },
    {
      icon: ShieldStar,
      ...langJson.FeaturesSliderImg.info[1],
      image: getImage('/images/metadata-remover/data_leaks.webp'),
    },
    {
      icon: Detective,
      ...langJson.FeaturesSliderImg.info[2],
      image: getImage('/images/metadata-remover/anonymous_submissions.webp'),
    },
    {
      icon: ShareNetwork,
      ...langJson.FeaturesSliderImg.info[3],
      image: getImage('/images/metadata-remover/file_sharing.webp'),
    },
  ];
  return (
    <Layout segmentName="Metadata Remover" title={metatags[0].title} description={metatags[0].description} lang={lang}>
      <Head>
        <title>{metatags[0].title}</title>
        <meta name="description" content={metatags[0].description} />
      </Head>

      <Script id="schema" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Internxt Metadata Remover',
          description: metatags[0].description,
          url: 'https://internxt.com/metadata-remover',
          applicationCategory: 'UtilityApplication',
          operatingSystem: 'Web',
        })}
      </Script>

      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

      <HeroSection textContent={langJson.HeroSection} lang={lang} />

      <TryInternxtBanner
        textContent={bannerLang.tryOutInternxtGeneralBanner}
        url={'https://drive.internxt.com/new?utm_source=website&utm_medium=banner&utm_campaign=internxt'}
      />

      <FeaturesSection
        textContent={langJson.FeaturesSection}
        bannerText={bannerLang.SignUpMetadataRemoverBanner}
        lang={lang}
      />

      <CtaSection
        textContent={langJson.CtaSection1}
        url={'https://internxt.com/drive'}
        customDescription={<p className="w-full text-xl font-normal">{langJson.CtaSection1.description}</p>}
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
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/metadata-remover.json`);
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
