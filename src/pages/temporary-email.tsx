import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/Navbar';
import { HeroSection } from '@/components/temp-email/HeroSection';
import { SignupSection } from '@/components/temp-email/SignupSection';
import { InfoSection } from '@/components/temp-email/InfoSection';
import { ToolsSection } from '@/components/shared/ToolsSection';
import QASection from '@/components/shared/FaqSection';
import Footer from '@/components/layout/Footer';

import { sm_faq, sm_breadcrumb } from '@/components/utils/schema-markup-generator';
import { ActionBanner } from '@/components/temp-email/components/ActionBanner';
import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';

const TempEmail = ({
  metatagsDescriptions,
  toolsContent,
  textContent,
  footerLang,
  navbarLang,
  lang,
  bannerLang,
  csrfToken,
}) => {
  const dialogAction = useGlobalDialog();

  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'temporary-email');

  return (
    <>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6684818764777307"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_faq(textContent.SchemaMarkupQuestions.faq)}
      </Script>

      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_breadcrumb('Temporary Email', 'temporary-email')}
      </Script>

      <Layout segmentName="Temporary email" title={metatags[0].title} description={metatags[0].description} lang={lang}>
        <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

        {dialogAction.dialogIsOpen(GlobalDialog.TempMailAction) && <ActionBanner />}

        <HeroSection textContent={textContent.HeroSection} csrfToken={csrfToken} />

        <InfoSection textContent={textContent.InfoSection} bannerText={bannerLang.SignUpTempMailBanner} lang={lang} />

        <ToolsSection textContent={toolsContent} lang={lang} />

        <SignupSection textContent={textContent.SignupSection} />

        <QASection textContent={textContent.QASection} />

        <Footer textContent={footerLang} lang={lang} hideNewsletter={false} />
      </Layout>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const csrfToken = process.env.TEMP_MAIL_API_KEY;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/temporary-email.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const toolsContent = require(`@/assets/lang/${lang}/components/tools/ToolSection.json`);
  const bannerLang = require(`@/assets/lang/${lang}/banners.json`);

  return {
    props: {
      metatagsDescriptions,
      textContent,
      footerLang,
      navbarLang,
      lang,
      bannerLang,
      toolsContent,
      csrfToken,
    },
  };
}

export default TempEmail;
