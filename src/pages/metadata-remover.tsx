import Script from 'next/script';
import { CloudArrowUp, Images, ClockClockwise, Key, ShieldPlus, Eye } from '@phosphor-icons/react';

import Footer from '@/components/layout/footers/Footer';
import Navbar from '@/components/layout/navbars/Navbar';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/metadata-remover/HeroSection';
import FeaturesSection from '@/components/metadata-remover/FeaturesSection';
import CtaSection from '@/components/metadata-remover/CtaSection';
import FAQSection from '@/components/shared/sections/FaqSection';
import { ToolsSection } from '@/components/shared/sections/ToolsSection';
import TryInternxtBanner from '@/components/banners/TryInternxtBanner';

import { sm_faq, sm_breadcrumb } from '@/components/utils/schema-markup-generator';
import FeaturesSliderImg from '@/components/metadata-remover/FeaturesSliderImg';
import FeaturesSlider from '@/components/shared/FeaturesSlider';
import { getImage } from '@/lib/getImage';

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
    { icon: CloudArrowUp, ...langJson.FeaturesSlider.info[0] },
    { icon: Images, ...langJson.FeaturesSlider.info[1] },
    { icon: ClockClockwise, ...langJson.FeaturesSlider.info[2] },
    { icon: Key, ...langJson.FeaturesSlider.info[3] },
    { icon: ShieldPlus, ...langJson.FeaturesSlider.info[4] },
    { icon: Eye, ...langJson.FeaturesSlider.info[5] },
  ];
  const cardInfoImg = [
    {
      icon: CloudArrowUp,
      ...langJson.FeaturesSlider.info[0],
      image: getImage('/images/metadata-remover/protected_data.webp'),
    },
    {
      icon: Images,
      ...langJson.FeaturesSlider.info[1],
      image: getImage('/images/metadata-remover/protected_data.webp'),
    },
    {
      icon: ClockClockwise,
      ...langJson.FeaturesSlider.info[2],
      image: getImage('/images/metadata-remover/protected_data.webp'),
    },
    { icon: Key, ...langJson.FeaturesSlider.info[3], image: getImage('/images/metadata-remover/protected_data.webp') },
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
          bannerText={bannerLang.SignUpMetadataRemoverBanner}
          lang={lang}
        />
        <CtaSection textContent={langJson.CtaSection} />

        <FeaturesSlider textContent={langJson.FeaturesSection} cardInfo={cardInfo} />

        <FeaturesSliderImg textContent={langJson.FeaturesSection} cardInfo={cardInfoImg} />

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
