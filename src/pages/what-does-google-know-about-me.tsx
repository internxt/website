import Footer from '@/components/layout/footers/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import HeroSection from '@/components/what-does-google-know-about-me/HeroSection';
import ManageGoogleDataSection from '@/components/what-does-google-know-about-me/ManageGoogleDataSection';
import { ToolsSection } from '@/components/shared/sections/ToolsSection';
import WhatGoogleKnowsSection from '@/components/what-does-google-know-about-me/WhatGoogleKnowsSection';
import { GetServerSidePropsContext } from 'next';
import RevealY from '@/components/components/RevealY';
import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import Link from 'next/link';
import CtaSection from '@/components/affiliates/CtaSection';

const URL_REDIRECT = 'https://internxt.com/pricing';

const WhatDoesGoogleKnowAboutMe = ({
  lang,
  langJson,
  toolsContent,
  metatagsDescriptions,
  navbarLang,
  footerLang,
  bannerLang,
}): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'what-google-knows');

  return (
    <Layout
      title={metatags[0].title}
      description={metatags[0].description}
      segmentName="What Does Google Know About Me"
      lang={lang}
    >
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

      <HeroSection textContent={langJson.HeroSection} bannerText={bannerLang.GoogleLPBanner} lang={lang} />

      <RevealY className="content flex h-full w-full flex-col items-center justify-center px-5">
        <Link href={URL_REDIRECT} passHref target="_blank">
          <Image
            src={getImage('/banners/PlansBanner.webp')}
            alt="Internxt plans banner"
            draggable={false}
            loading="lazy"
            width={1200}
            height={420}
            quality={100}
            className="cursor-pointer"
          />
        </Link>
      </RevealY>

      <WhatGoogleKnowsSection textContent={langJson.WhatGoogleKnowsSection} />

      <CtaSection textContent={langJson.CtaSection1} url={URL_REDIRECT} target="_blank" />

      <ManageGoogleDataSection textContent={langJson.ManageGoogleDataSection} />

      <ToolsSection textContent={toolsContent} lang={lang} />

      <CtaSection textContent={langJson.CtaSection2} url={URL_REDIRECT} target="_blank" />

      <Footer textContent={footerLang} lang={lang} />
    </Layout>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/what-does-google-know-about-me.json`);
  const toolsContent = require(`@/assets/lang/${lang}/components/tools/ToolSection.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);
  const bannerLang = require(`@/assets/lang/${lang}/banners.json`);

  return {
    props: {
      langJson,
      toolsContent,
      metatagsDescriptions,
      navbarLang,
      footerLang,
      lang,
      bannerLang,
    },
  };
}

export default WhatDoesGoogleKnowAboutMe;
