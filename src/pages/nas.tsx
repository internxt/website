import { GetServerSidePropsContext } from 'next';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import Footer from '@/components/layout/footers/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import FAQSection from '@/components/shared/sections/FaqSection';
import cookies from '@/lib/cookies';
import { NASPageText } from '@/assets/types/nas';
import FloatingCtaSectionv2 from '@/components/shared/FloatingCtaSectionV2';
import ThreeCardsSection from '@/components/shared/sections/ThreeCardsSection';
import HorizontalScrollableSection from '@/components/shared/HorizontalScrollableSection';
import SynologyQNAPSection from '@/components/nas/SynologyQNAPSection';
import WhatIsNASSection from '@/components/shared/components/TitleAndDescriptionSection';
import HeroSection from '@/components/nas/HeroSection';

interface NASPageProps {
  lang: GetServerSidePropsContext['locale'];
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  textContent: NASPageText;
  footerLang: FooterText;
}

const NASPage = ({ metatagsDescriptions, textContent, lang, navbarLang, footerLang }: NASPageProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'nas');
  const locale = lang as string;
  const navbarCta = 'chooseStorage';

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Home" lang={lang}>
      <Navbar textContent={navbarLang} lang={locale} cta={[navbarCta]} fixed />

      <HeroSection textContent={textContent.HeroSection} />

      <WhatIsNASSection textContent={textContent.WhatIsNASSection} />

      <SynologyQNAPSection textContent={textContent.InternxtNASIntegrations} />

      <FloatingCtaSectionv2
        textContent={textContent.ctaSection}
        url={'/pricing'}
        customText={
          <div className="flex flex-col items-center gap-4 px-4 text-center lg:px-0">
            <p className="text-2xl font-semibold leading-tight text-gray-95 lg:text-4xl">
              {textContent.ctaSection.title}
            </p>
            <p className="text-base font-normal leading-tight text-gray-55 lg:w-[633px] lg:text-center lg:text-xl">
              {textContent.ctaSection.description}
            </p>
          </div>
        }
        bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
        containerDetails="backdrop-blur-[55px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)]"
        bgPadding="bg-neutral-17 px-10"
      />

      <HorizontalScrollableSection
        textContent={textContent.horizontalScrollableSection}
        needsDivider={false}
        cardsHeight="330px"
      />

      <ThreeCardsSection textContent={textContent.whatInternxtOffersSection} />

      <ThreeCardsSection textContent={textContent.howSetupSection} />

      <FloatingCtaSectionv2
        textContent={textContent.ctaSectionV2}
        url={'/pricing'}
        customText={
          <div className="flex flex-col items-center gap-4 px-10 text-center lg:px-0">
            <p className="text-2xl font-semibold leading-tight text-gray-95 lg:text-4xl">
              {textContent.ctaSectionV2.title}
            </p>
            <p className="text-base font-normal leading-tight text-gray-55 lg:w-[633px] lg:text-center lg:text-xl">
              {textContent.ctaSectionV2.description}
            </p>
          </div>
        }
        bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
        bgGradientColor="linear-gradient(0deg, #FFFFFF 0%, #F4F8FF 100%)"
        containerDetails="shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] backdrop-blur-[55px]"
        bgPadding="lg:pb-20"
      />

      <FAQSection textContent={textContent.FaqSection} />

      <Footer textContent={footerLang} lang={locale} />
    </Layout>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/nas.json`);
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

export default NASPage;
