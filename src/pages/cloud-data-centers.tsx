import { GetServerSidePropsContext } from 'next';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import Footer from '@/components/layout/footers/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import FAQSection from '@/components/shared/sections/FaqSection';
import cookies from '@/lib/cookies';
import { CloudDataCentersPageText } from '@/assets/types/cloud-data-centers';
import FloatingCtaSectionv2 from '@/components/shared/FloatingCtaSectionV2';
import { HeroSection } from '@/components/data-centers/HeroSection';
import { WhatIsSection } from '@/components/shared/WhatIsSection';
import HorizontalScrollableSection from '@/components/data-centers/HorizontalScrollableSection';
import CompilanceAndCertificationsSection from '@/components/data-centers/CompilanceAndCertificationsSection';
import { ContentBlockSection } from '@/components/shared/ContentBlock';

interface CloudDataCentersPageProps {
  lang: GetServerSidePropsContext['locale'];
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  textContent: CloudDataCentersPageText;
  footerLang: FooterText;
}

const CloudDataCentersPage = ({
  metatagsDescriptions,
  textContent,
  lang,
  navbarLang,
  footerLang,
}: CloudDataCentersPageProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'cloud-data-centers');
  const locale = lang as string;
  const navbarCta = 'chooseStorage';

  return (
    <Layout
      title={metatags[0].title}
      description={metatags[0].description}
      segmentName="cloud-data-centers"
      lang={lang}
    >
      <Navbar textContent={navbarLang} lang={locale} cta={[navbarCta]} fixed />

      <HeroSection textContent={textContent.HeroSection} />

      <WhatIsSection textContent={textContent.WhatIsDataCenterSection} />

      <HorizontalScrollableSection textContent={textContent.HorizontalScrllableSection} />

      <FloatingCtaSectionv2
        textContent={textContent.CtaSection}
        url={'/pricing'}
        customText={
          <div className="flex flex-col items-center gap-4 px-10 text-center lg:px-0">
            <p className="text-2xl font-semibold leading-tight text-gray-95 lg:text-4xl">
              {textContent.CtaSection.title}
            </p>
            <p className="text-base font-normal leading-tight text-gray-55 lg:w-[633px] lg:text-center lg:text-xl">
              {textContent.CtaSection.description}
            </p>
          </div>
        }
        bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
        containerDetails="shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] backdrop-blur-[55px]"
        bgPadding="py-10 bg-neutral-17"
      />

      <CompilanceAndCertificationsSection textContent={textContent.CompilanceAndCertificationsSection} />

      <ContentBlockSection textContent={textContent.SecureCloudStorgaeSection} />

      <FloatingCtaSectionv2
        textContent={textContent.CtaSection2}
        url={'/pricing'}
        customText={
          <div className="flex flex-col items-center gap-4 px-10 text-center lg:px-0">
            <p className="text-2xl font-semibold leading-tight text-gray-95 lg:text-4xl">
              {textContent.CtaSection2.title}
            </p>
            <p className="text-base font-normal leading-tight text-gray-55 lg:w-[633px] lg:text-center lg:text-xl">
              {textContent.CtaSection2.description}
            </p>
          </div>
        }
        bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
        bgGradientColor="linear-gradient(180deg, #F4F8FF 0%, #FFFFFF 100%)"
        containerDetails="shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] backdrop-blur-[55px]"
        bgPadding="py-10"
      />

      <FAQSection textContent={textContent.FaqSection} />

      <Footer textContent={footerLang} lang={locale} />
    </Layout>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/cloud-data-centers.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      metatagsDescriptions,
      textContent,
      navbarLang,
      footerLang,
    },
  };
}

export default CloudDataCentersPage;
