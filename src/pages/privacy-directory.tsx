import Script from 'next/script';

import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import HeroSection from '@/components/privacy-directory/HeroSection';
import WikiSection from '@/components/privacy-directory/WikiSection';
import SupportNGOsSection from '@/components/privacy-directory/SupportNGOsSection';
import Footer from '@/components/layout/footers/Footer';
import FAQSection from '@/components/shared/sections/FaqSection';

import { sm_faq, sm_breadcrumb } from '@/components/utils/schema-markup-generator';
import HeroSection2 from '@/components/privacy-directory/HeroSection2';
import CtaSection from '@/components/shared/CtaSection';
import { SIGNUP_DRIVE_WEB } from '@/constants';
import { GetServerSidePropsContext } from 'next';

const PrivacyDirectory = ({
  metatagsDescriptions,
  textContent,
  navbarLang,
  footerLang,
  lang,
  bannerText,
}): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'privacy-directory');

  return (
    <>
      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_faq(textContent.FaqSection.faq)}
      </Script>

      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_breadcrumb('Privacy Directory', 'privacy-directory')}
      </Script>

      {lang === 'en' && (
        <Script src="https://analytics.ahrefs.com/analytics.js" data-key="AJfAg8JhxYbS3NkIKdlang" defer />
      )}

      <Layout
        segmentName="Privacy Directory"
        title={metatags[0].title}
        description={metatags[0].description}
        lang={lang}
      >
        {!['en', 'de', 'zh-tw'].includes(lang) ? (
          <>
            <Navbar textContent={navbarLang} lang={lang} cta={['default']} darkMode />
            <HeroSection
              textContent={textContent.HeroSection}
              lang={lang}
              bannerText={bannerText.privacyDirectoryBanner}
            />

            <WikiSection textContent={textContent.WikiSection} />

            <SupportNGOsSection textContent={textContent.SupportNGOsSection} />

            <FAQSection textContent={textContent.FaqSection} />
          </>
        ) : (
          <>
            <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />
            <HeroSection2
              textContent={textContent.HeroSection}
              lang={lang}
              bannerText={bannerText.privacyDirectoryBanner}
            />

            <WikiSection textContent={textContent.WikiSection} />

            <SupportNGOsSection textContent={textContent.SupportNGOsSection} />

            <CtaSection textContent={textContent.CtaSection} url={SIGNUP_DRIVE_WEB} />
          </>
        )}

        <Footer textContent={footerLang} lang={lang} />
      </Layout>
    </>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const textContent = require(`@/assets/lang/${lang}/privacy-directory.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);
  const bannerText = require(`@/assets/lang/${lang}/banners.json`);

  return {
    props: {
      metatagsDescriptions,
      textContent,
      navbarLang,
      footerLang,
      lang,
      bannerText,
    },
  };
}

export default PrivacyDirectory;
