import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import { HeroSection } from '@/components/webdav/HeroSection';
import { WebDAVSupportSection } from '@/components/webdav/WebDAVSupportSection';
import { DownloadCLISection } from '@/components/webdav/DownloadCLISection';
import CtaSection from '@/components/shared/CtaSection';
import { HowToUseCLISection } from '@/components/webdav/HowToUseCLISection';
import Footer from '@/components/layout/footers/Footer';
import { SIGNUP_DRIVE_WEB } from '../constants';
import FAQSection from '@/components/shared/sections/FaqSection';
import Script from 'next/script';

const WebDAV = ({ metatagsDescriptions, langJson, navbarLang, footerLang }): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'webDAV');

  return (
    <>
      <Script src="https://analytics.ahrefs.com/analytics.js" data-key="AJfAg8JhxYbS3NkIKdlang" defer />

      <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Lifetime" lang={'en'}>
        <Navbar textContent={navbarLang} lang={'en'} cta={['default']} fixed />

        <HeroSection textContent={langJson.HeroSection} />

        <WebDAVSupportSection textContent={langJson.WebDAVSupportSection} />

        <DownloadCLISection textContent={langJson.DownloadCLISection} />

        <CtaSection textContent={langJson.CtaSection} url={SIGNUP_DRIVE_WEB} />

        <HowToUseCLISection textContent={langJson.HowToUseCLISection} />

        <CtaSection textContent={langJson.CtaSection2} url={SIGNUP_DRIVE_WEB} />

        <FAQSection textContent={langJson.FaqSection} />

        <Footer textContent={footerLang} lang={'en'} />
      </Layout>
    </>
  );
};

export async function getServerSideProps() {
  const lang = 'en';

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/webdav.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  return {
    props: {
      metatagsDescriptions,
      langJson,
      navbarLang,
      footerLang,
    },
  };
}

export default WebDAV;
