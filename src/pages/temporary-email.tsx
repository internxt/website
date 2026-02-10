import Script from 'next/script';

import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import { HeroSection } from '@/components/temp-email/HeroSection';
import { SignupSection } from '@/components/temp-email/SignupSection';
import { InfoSection } from '@/components/temp-email/InfoSection';
import { ToolsSection } from '@/components/shared/sections/ToolsSection';
import QASection from '@/components/shared/sections/FaqSection';
import Footer from '@/components/layout/footers/Footer';

import { sm_faq, sm_breadcrumb } from '@/components/utils/schema-markup-generator';
import { ActionBanner } from '@/components/temp-email/components/ActionBanner';
import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';
import { setup } from '@/lib/csrf';

const TempEmail = ({ lang, metatags, textContent, footerLang, navbarLang, toolsContent, bannerLang }: any) => {
  const dialogAction = useGlobalDialog();

  return (
    <>
      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_faq(textContent.SchemaMarkupQuestions.faq)}
      </Script>

      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_breadcrumb('Temporary Email', 'temporary-email')}
      </Script>

      <div id="sidebar_right" className="left-0 z-10 mt-36 hidden w-80 justify-end 3xl:fixed 3xl:flex"></div>
      <div id="sidebar_left" className="right-0 z-10 mt-36 hidden w-80 3xl:fixed 3xl:flex"></div>
      <Layout segmentName="Temporary email" title={metatags[0].title} description={metatags[0].description} lang={lang}>
        <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

        <HeroSection textContent={textContent.HeroSection} lang={lang} />

        <InfoSection textContent={textContent.InfoSection} bannerText={bannerLang.SignUpTempMailBanner} lang={lang} />

        <ToolsSection textContent={toolsContent} lang={lang} />

        {dialogAction.dialogIsOpen(GlobalDialog.TempMailAction) && <ActionBanner />}

        <SignupSection textContent={textContent.SignupSection} />

        <QASection textContent={textContent.QASection} />

        <Footer textContent={footerLang} lang={lang} hideNewsletter={false} />
      </Layout>
    </>
  );
};

export const getServerSideProps = setup(async (ctx: any) => {
  const lang = ctx.locale || 'en';

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/temporary-email.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const toolsContent = require(`@/assets/lang/${lang}/components/tools/ToolSection.json`);
  const bannerLang = require(`@/assets/lang/${lang}/banners.json`);

  const metatags = metatagsDescriptions.filter((desc: any) => desc.id === 'temporary-email');

  return {
    props: {
      lang,
      metatags,
      textContent,
      footerLang,
      navbarLang,
      toolsContent,
      bannerLang,
    },
  };
});

export default TempEmail;
