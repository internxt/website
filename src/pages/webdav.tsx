import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/Navbar';
import { HeroSection } from '@/components/webdav/HeroSection';
import Footer from '@/components/layout/Footer';
import { WebDAVSupportSection } from '@/components/webdav/WebDAVSupportSection';
import { DownloadCLISection } from '@/components/webdav/DownloadCLISection';

const WebDAV = ({ metatagsDescriptions, langJson, navbarLang, footerLang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'pricing');

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Lifetime" lang={'en'}>
      <Navbar textContent={navbarLang} lang={'en'} cta={['default']} fixed />

      <HeroSection textContent={langJson.HeroSection} />

      <WebDAVSupportSection textContent={langJson.WebDAVSupportSection} />

      <DownloadCLISection textContent={langJson.DownloadCLISection} />

      <Footer textContent={footerLang} lang={'en'} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
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
