import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import { HeroSection } from '@/components/webdav/HeroSection';
import { WebDAVSupportSection } from '@/components/webdav/WebDAVSupportSection';
import { DownloadCLISection } from '@/components/webdav/DownloadCLISection';
import { HowToUseCLISection } from '@/components/webdav/HowToUseCLISection';
import Footer from '@/components/layout/footers/Footer';
import FAQSection from '@/components/shared/sections/FaqSection';
import FloatingCtaSectionv2 from '@/components/shared/FloatingCtaSectionV2';
import Script from 'next/script';
import { sm_breadcrumb_list } from '@/components/utils/schema-markup-generator';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { PromoCodeName } from '@/lib/types';

const BREADCRUMB_ITEMS = [
  { name: 'Encrypted Cloud Storage', url: '/' },
  { name: 'Secure cloud storage', url: '/drive' },
  { name: 'Internxt Rclone, CLI and WebDAV', url: '/webdav-rclone' },
];

export interface WebdavRcloneTemplateProps {
  darkMode?: boolean;
  metatagsDescriptions: MetatagsDescription[];
  langJson: any;
  navbarLang: NavigationBarText;
  footerLang: FooterText;
  lang: string;
  couponCode?: PromoCodeName;
  couponCodeForLifetime?: PromoCodeName;
  hidePriceTable?: boolean;
  robots?: string;
}

export const WebdavRcloneTemplate = ({
  darkMode = false,
  metatagsDescriptions,
  langJson,
  navbarLang,
  footerLang,
  lang,
  couponCode = PromoCodeName.seolp,
  couponCodeForLifetime = PromoCodeName.seolp,
  hidePriceTable = false,
  robots,
}: WebdavRcloneTemplateProps): JSX.Element => {
  const metatags = metatagsDescriptions.find((desc) => desc.id === 'webDAV');
  const ctaUrl = hidePriceTable ? '/pricing' : '#billingButtons';

  return (
    <>
      <Script type="application/ld+json" strategy="beforeInteractive">{sm_breadcrumb_list(BREADCRUMB_ITEMS)}</Script>
      <Layout
        title={metatags?.title ?? ''}
        description={metatags?.description ?? ''}
        segmentName="Lifetime"
        lang={'en'}
        robots={robots}
      >
        <Navbar textContent={navbarLang} lang={'en'} cta={['default']} fixed />
        <HeroSection textContent={langJson.HeroSection} url={ctaUrl} />

        <HowToUseCLISection textContent={langJson.RcloneSupportSection} isRclone />

        <WebDAVSupportSection
          textContent={langJson.WebDAVSupportSection}
          lang={lang}
          hidePriceTable={hidePriceTable}
          couponCode={couponCode}
          couponCodeForLifetime={couponCodeForLifetime}
          darkMode={darkMode}
        />

        <FloatingCtaSectionv2
          textContent={langJson.CtaSection}
          url={ctaUrl}
          customText={
            <div className="flex flex-col items-center gap-4 px-4 text-center lg:px-0">
              <p className="text-2xl font-semibold leading-tight text-gray-95 dark:text-white-95 lg:text-4xl">{langJson.CtaSection.title}</p>
              <p className="text-base font-normal leading-tight text-gray-55 dark:text-green-120 lg:w-[633px] lg:text-center lg:text-xl">{langJson.CtaSection.description}</p>
            </div>
          }
          bgGradientContainerColor="bg-[linear-gradient(115.95deg,rgba(244,248,255,0.75)_10.92%,rgba(255,255,255,0.08)_96.4%)]"
          containerDetails="backdrop-blur-[55px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)]"
          bgPadding=" px-20 py-10"
          bgGradientColor="bg-[linear-gradient(0deg,#FFFFFF_0%,#F4F8FF_100%)] dark:bg-[linear-gradient(0deg,#1C1C1C_0%,#0D0D0D_100%)]"
        />

        <DownloadCLISection textContent={langJson.DownloadCLISection} />

        <HowToUseCLISection textContent={langJson.HowToUseCLISection} />

        <FloatingCtaSectionv2
          textContent={langJson.CtaSection2}
          url={ctaUrl}
          customText={
            <div className="flex flex-col items-center gap-4 px-4 text-center lg:px-0">
              <p className="text-2xl font-semibold leading-tight text-gray-95 dark:text-white-95 lg:text-4xl">{langJson.CtaSection2.title}</p>
              <p className="text-base font-normal leading-tight text-gray-55 dark:text-green-120 lg:w-[633px] lg:text-center lg:text-xl">{langJson.CtaSection2.description}</p>
            </div>
          }
          bgGradientContainerColor="bg-[linear-gradient(115.95deg,rgba(244,248,255,0.75)_10.92%,rgba(255,255,255,0.08)_96.4%)]"
          containerDetails="backdrop-blur-[55px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)]"
          bgPadding=" px-20 py-10"
        />

        <FAQSection textContent={langJson.FaqSection} darkMode={darkMode} />

        <Footer textContent={footerLang} lang={'en'} breadcrumbItems={BREADCRUMB_ITEMS} darkMode={darkMode} />
      </Layout>
    </>
  );
};
