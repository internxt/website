import Script from 'next/script';

import Footer from '@/components/layout/footers/Footer';
import Navbar from '@/components/layout/navbars/Navbar';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/password-checker/HeroSection';
import FeaturesSection from '@/components/password-checker/FeaturesSection';
import FAQSection from '@/components/shared/sections/FaqSection';
import TryInternxtBanner from '@/components/banners/TryInternxtBanner';

import { sm_faq, sm_breadcrumb } from '@/components/utils/schema-markup-generator';
import { ToolsSection } from '@/components/shared/sections/ToolsSection';
import CtaSection from '@/components/shared/CtaSection';
import InfoSection from '@/components/password-generator/InfoSection';

const PasswordChecker = ({
  metatagsDescriptions,
  toolsContent,
  langJson,
  navbarLang,
  footerLang,
  lang,
  bannerLang,
}) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'password-checker');

  return (
    <>
      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_faq(langJson.SchemaMarkupQuestions.faq)}
      </Script>

      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_breadcrumb('Password Checker', 'password-checker')}
      </Script>

      <div id="sidebar_right" className="left-0 z-10 mt-36 hidden w-80 justify-end 3xl:fixed 3xl:flex"></div>
      <div id="sidebar_left" className="right-0 z-10 mt-36 hidden w-80 3xl:fixed 3xl:flex"></div>
      <Layout
        segmentName="Password Checker"
        title={metatags[0].title}
        description={metatags[0].description}
        lang={lang}
      >
        <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

        <TryInternxtBanner
          textContent={
            lang === 'en' ? bannerLang.tryOutInternxtPasswordCheckerBanner : bannerLang.tryOutInternxtGeneralBanner
          }
          url={'https://drive.internxt.com/new?utm_source=website&utm_medium=banner&utm_campaign=internxtpw'}
        />

        <HeroSection textContent={langJson.HeroSection} lang={lang} />

        <InfoSection
          textContent={langJson.InfoSection}
          bannerText={bannerLang.SignUpPasswordGenerator}
          hideLast2Sections
          lang={lang}
        />

        <CtaSection
          textContent={langJson.CtaSection}
          url={'https://internxt.com/drive'}
          maxWidth="max-w-lg"
          customDescription={
            <p className="text-base font-normal leading-tight text-white lg:w-[633px] lg:text-center lg:text-xl">
              {langJson.CtaSection.description}
            </p>
          }
        />

        <FeaturesSection
          textContent={langJson.FeaturesSection}
          bannerText={bannerLang.SignUpPwdCheckerBanner}
          lang={lang}
        />

        <ToolsSection textContent={toolsContent} lang={lang} />

        <CtaSection textContent={langJson.CtaSection1} url="https://drive.internxt.com/new" maxWidth="max-w-[511px]" />

        <FAQSection textContent={langJson.FaqSection} />

        <Footer textContent={footerLang} lang={lang} hideNewsletter={false} />
      </Layout>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/password-checker.json`);
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

export default PasswordChecker;
