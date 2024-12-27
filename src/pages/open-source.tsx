import FileParallaxSection from '@/components/home/FileParallaxSection';
import Footer from '@/components/layout/footers/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import DifferencesBetweenOpenAndCloseSS from '@/components/open-source/DifferencesBetweenOpenAndCloseSS';
import ExploreOurOSS from '@/components/open-source/ExploreOurOSS';
import HeroSection from '@/components/open-source/HeroSection';
import LearningWithOSCommunity from '@/components/open-source/LearningWithOSCommunity';
import WhatAreTheBenefits from '@/components/open-source/WhatAreTheBenefits';
import WhatIsOSS from '@/components/open-source/WhatIsOSS';
import CtaSection from '@/components/shared/CtaSection';
import { downloadDriveLinks } from '@/lib/get-download-url';
import Script from 'next/script';

const CTA_SIGNUP_URL = `https://drive.internxt.com/new`;

const GITHUB_URL = 'https://github.com/internxt';

const OpenSource = ({ lang, metatagsDescriptions, langJson, navbarLang, footerLang, download }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'open-source');
  return (
    <>
      {lang === 'en' && (
        <Script src="https://analytics.ahrefs.com/analytics.js" data-key="AJfAg8JhxYbS3NkIKdlang" defer />
      )}
      <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Open Source" lang={lang}>
        <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

        <HeroSection textContent={langJson.HeroSection} />

        <FileParallaxSection />

        <WhatIsOSS textContent={langJson.WhatIsOSS} />

        <WhatAreTheBenefits textContent={langJson.WhatAreTheBenefits} />

        <CtaSection textContent={langJson.CtaSection1} url={CTA_SIGNUP_URL} />

        <LearningWithOSCommunity textContent={langJson.LearningWithOSCommunity} />

        <DifferencesBetweenOpenAndCloseSS textContent={langJson.DifferencesBetweenOpenAndCloseSS} />

        <CtaSection textContent={langJson.CtaSection2} url={CTA_SIGNUP_URL} />

        <ExploreOurOSS textContent={langJson.ExploreOurOSS} download={download} />

        <CtaSection textContent={langJson.CtaSection3} url={GITHUB_URL} target="nofollow" />

        <Footer textContent={footerLang} lang={lang} />
      </Layout>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const download = await downloadDriveLinks();

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/open-source.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  return {
    props: {
      lang,
      metatagsDescriptions,
      langJson,
      navbarLang,
      footerLang,
      download,
    },
  };
}

export default OpenSource;
