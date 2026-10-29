import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { GetServerSidePropsContext } from 'next';
import Footer from '@/components/layout/footers/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import HorizontalScrollableSection from '@/components/mail/HorizontalScrollableSection';
import HorizontalScrollableSectionWithPhotosSection from '@/components/mail/HorizontalSrollableSection';
import { HeroSection } from '@/components/mail/HeroSection';
import MailSection from '@/components/mail/MailSection';
import FAQSection from '@/components/shared/sections/FaqSection';
import FloatingCtaSectionv2 from '@/components/shared/FloatingCtaSectionV2';
import CoreFeaturesSection from '@/components/mail/CoreFeaturesSection';
import { MailText } from '@/assets/types/mail';

export interface MailTemplateProps {
  darkMode?: boolean;
  metatagsDescription: MetatagsDescription[];
  navbarText: NavigationBarText;
  textContent: MailText;
  footerText: FooterText;
  locale: GetServerSidePropsContext['locale'];
  robots?: string;
}

export const MailTemplate = ({
  darkMode = false,
  metatagsDescription,
  navbarText,
  footerText,
  textContent,
  locale,
  robots,
}: MailTemplateProps): JSX.Element => {
  const metatags = metatagsDescription.find((metatag) => metatag.id === 'mail');
  const lang = locale as string;

  return (
    <Layout title={metatags?.title ?? ''} description={metatags?.description ?? ''} robots={robots}>
      <Navbar cta={['default']} lang={lang} textContent={navbarText} fixed />

      <HeroSection textContent={textContent.HeroSection} darkMode={darkMode} />

      <MailSection textContent={textContent.DriveSection} darkMode={darkMode} />

      <HorizontalScrollableSection
        textContent={textContent.MailFeatureSection}
        bgGradient={
          darkMode
            ? 'linear-gradient(180deg, #1C1C1C 0%, #0D0D0D 100%)'
            : 'linear-gradient(180deg, #FFFFFF 0%, #F4F8FF 100%)'
        }
        needsH2
        needsH3
        darkMode={darkMode}
      />

      <FloatingCtaSectionv2
        textContent={textContent.CtaSection}
        customText={
          <div className="flex w-[302px] flex-col items-center justify-center gap-4 text-center lg:w-full">
            <h2 className="text-2xl font-semibold leading-tight lg:text-4xl">{textContent.CtaSection.title}</h2>
            <p className={`text-base font-normal ${darkMode ? 'text-green-120' : 'text-gray-55'} lg:text-xl`}>
              {textContent.CtaSection.description}
            </p>
          </div>
        }
        url="/pricing"
        bgGradientColor={
          darkMode
            ? 'linear-gradient(0deg, #1C1C1C 0%, #0D0D0D 100%)'
            : 'linear-gradient(0deg, #FFFFFF 0%, #F4F8FF 100%)'
        }
        bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
        containerDetails="shadow-[0_4px_20px_0_rgba(0,0,0,0.1)] backdrop-blur-[55px]"
        bgPadding="lg:py-20"
        darkMode={darkMode}
      />

      <CoreFeaturesSection textContent={textContent.CoreFeatures} darkMode={darkMode} />

      <FloatingCtaSectionv2
        textContent={textContent.CtaSectionV2}
        customText={
          <div className="flex w-[302px] flex-col items-center justify-center gap-4 text-center lg:w-full">
            <h2 className="text-2xl font-semibold leading-tight lg:text-4xl">{textContent.CtaSectionV2.title}</h2>
            <p className={`text-base font-normal ${darkMode ? 'text-green-120' : 'text-gray-55'} lg:text-xl`}>
              {textContent.CtaSectionV2.description}
            </p>
          </div>
        }
        url="/pricing"
        bgGradientColor={
          darkMode
            ? 'linear-gradient(0deg, #1C1C1C 0%, #0D0D0D 100%)'
            : 'linear-gradient(0deg, #FFFFFF 0%, #F4F8FF 100%)'
        }
        bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
        containerDetails="shadow-[0_4px_20px_0_rgba(0,0,0,0.1)] backdrop-blur-[55px]"
        bgPadding="lg:py-20"
        darkMode={darkMode}
      />

      <HorizontalScrollableSectionWithPhotosSection textContent={textContent.DesignedSection} darkMode={darkMode} />

      <FAQSection
        textContent={{
          title: textContent.SemanticAccordion.title,
          faq: textContent.SemanticAccordion.items,
        }}
        needsH3={false}
        needsSpecialH3
        needsH2
        darkMode={darkMode}
      />

      <Footer textContent={footerText} lang={lang} darkMode={darkMode} />
    </Layout>
  );
};
