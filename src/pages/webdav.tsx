import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import { HeroSection } from '@/components/webdav/HeroSection';
import { WebDAVSupportSection } from '@/components/webdav/WebDAVSupportSection';
import { DownloadCLISection } from '@/components/webdav/DownloadCLISection';
import { HowToUseCLISection } from '@/components/webdav/HowToUseCLISection';
import Footer from '@/components/layout/footers/Footer';
import FAQSection from '@/components/shared/sections/FaqSection';
import FloatingCtaSectionv2 from '@/components/shared/FloatingCtaSectionV2';

const WebDAV = ({ metatagsDescriptions, langJson, navbarLang, footerLang }): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'webDAV');

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Lifetime" lang={'en'}>
      <Navbar textContent={navbarLang} lang={'en'} cta={['default']} fixed />

      <HeroSection textContent={langJson.HeroSection} />

      <HowToUseCLISection textContent={langJson.RcloneSupportSection} isRclone />

      <WebDAVSupportSection textContent={langJson.WebDAVSupportSection} />

      <FloatingCtaSectionv2
        textContent={langJson.CtaSection}
        url={'/pricing'}
        customText={
          <div className="flex flex-col items-center gap-4 px-4 text-center lg:px-0">
            <p className="text-2xl font-semibold leading-tight text-gray-95 lg:text-4xl">{langJson.CtaSection.title}</p>
            <p className="text-base font-normal leading-tight text-gray-55 lg:w-[633px] lg:text-center lg:text-xl">
              {langJson.CtaSection.description}
            </p>
          </div>
        }
        bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
        containerDetails="backdrop-blur-[55px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)]"
        bgPadding=" px-20 py-10"
        bgGradientColor="linear-gradient(0deg, #FFFFFF 0%, #F4F8FF 100%)"
      />

      <DownloadCLISection textContent={langJson.DownloadCLISection} />

      <HowToUseCLISection textContent={langJson.HowToUseCLISection} />

      <FloatingCtaSectionv2
        textContent={langJson.CtaSection2}
        url={'/pricing'}
        customText={
          <div className="flex flex-col items-center gap-4 px-4 text-center lg:px-0">
            <p className="text-2xl font-semibold leading-tight text-gray-95 lg:text-4xl">
              {langJson.CtaSection2.title}
            </p>
            <p className="text-base font-normal leading-tight text-gray-55 lg:w-[633px] lg:text-center lg:text-xl">
              {langJson.CtaSection2.description}
            </p>
          </div>
        }
        bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
        containerDetails="backdrop-blur-[55px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)]"
        bgPadding=" px-20 py-10"
      />

      <FAQSection textContent={langJson.FaqSection} />

      <Footer textContent={footerLang} lang={'en'} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

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
