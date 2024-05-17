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
import { setup } from '@/lib/csrf';
import { useRouter } from 'next/router';

const TempEmail = () => {
  const dialogAction = useGlobalDialog();
  const { locale: lang } = useRouter() as { locale: string };

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/temporary-email.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const toolsContent = require(`@/assets/lang/${lang}/components/tools/ToolSection.json`);
  const bannerLang = require(`@/assets/lang/${lang}/banners.json`);

  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'temporary-email');

  return (
    <>
      <Head>
        <script data-cfasync="false" type="text/javascript">
          {`window.snigelPubConf = {
              "adengine": {
                  "activeAdUnits": (function() {
                      var adUnits = ["incontent_1", "incontent_2", "incontent_3", "incontent_4", "adhesive", "sidebar_right", "sidebar_left", "top_leaderboard"];
                      if (window.innerWidth <= 768) {
                          adUnits = adUnits.filter(function(unit) {
                              return unit !== "adhesive" && unit !== "incontent_4" && unit !== "sidebar_right" && unit !== "sidebar_right";
                          });
                      }
                      return adUnits;
                  })()
              }
          };`}
        </script>
        <script
          async
          data-cfasync="false"
          src="https://cdn.snigelweb.com/adengine/internxt.com/loader.js"
          type="text/javascript"
        ></script>
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

        <div id="sidebar_right" className="left-0 mt-36 hidden h-screen w-96 border lg:absolute lg:flex"></div>
        <div id="sidebar_left" className="right-0 mt-36 hidden h-full w-96 border lg:absolute lg:flex"></div>

        <HeroSection textContent={textContent.HeroSection} />

        <InfoSection textContent={textContent.InfoSection} bannerText={bannerLang.SignUpTempMailBanner} lang={lang} />

        <ToolsSection textContent={toolsContent} lang={lang} />

        <SignupSection textContent={textContent.SignupSection} />

        <QASection textContent={textContent.QASection} />

        <Footer textContent={footerLang} lang={lang} hideNewsletter={false} />
      </Layout>
    </>
  );
};

export const getServerSideProps = setup(async (req, res) => {
  return { props: {} };
});

export default TempEmail;
