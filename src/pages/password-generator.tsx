import cookies from '../lib/cookies';
import { downloadDriveLinks } from '@/lib/get-download-url';
import Navbar from '@/components/layout/navbars/Navbar';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/password-generator/HeroSection';
import Footer from '@/components/layout/footers/Footer';
import InfoSection from '@/components/password-generator/InfoSection';
import CtaSection from '@/components/shared/CtaSection';
import { ToolsSection } from '@/components/shared/sections/ToolsSection';
import FAQSection from '@/components/shared/sections/FaqSection';
import { sm_breadcrumb, sm_faq } from '@/components/utils/schema-markup-generator';
import Script from 'next/script';

const DRIVE_URL = 'https://drive.internxt.com/new';

const PasswordGenerator = ({
  metatagsDescriptions,
  toolsContent,
  langJson,
  lang,
  navbarLang,
  footerLang,
  bannerText,
}) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'password-generator');

  return (
    <>
      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_faq(langJson.SchemaMarkupQuestions.faq)}
      </Script>

      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_breadcrumb('Password Generator', 'password-generator')}
      </Script>

      <div id="sidebar_right" className="left-0 z-10 mt-36 hidden w-80 justify-end 3xl:fixed 3xl:flex"></div>
      <div id="sidebar_left" className="right-0 z-10 mt-36 hidden w-80 3xl:fixed 3xl:flex"></div>
      <Layout
        title={metatags[0].title}
        description={metatags[0].description}
        segmentName="Password Generator"
        lang={lang}
      >
        <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

        <HeroSection textContent={langJson.HeroSection} />

        <InfoSection textContent={langJson.InfoSection} bannerText={bannerText.SignUpPasswordGenerator} />

        <ToolsSection textContent={toolsContent} lang={lang} />

        <CtaSection textContent={langJson.CtaSection} url={DRIVE_URL} />

        <FAQSection textContent={langJson.FaqSection} />

        <Footer textContent={footerLang} lang={lang} />
      </Layout>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const downloadURL = await downloadDriveLinks();

  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/password-generator.json`);
  const toolsContent = require(`@/assets/lang/${lang}/components/tools/ToolSection.json`);
  const bannerText = require(`@/assets/lang/${lang}/banners.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      downloadURL,
      metatagsDescriptions,
      langJson,
      toolsContent,
      navbarLang,
      footerLang,
      bannerText,
    },
  };
}

export default PasswordGenerator;
