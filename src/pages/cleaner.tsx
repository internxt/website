import { GetServerSidePropsContext } from 'next';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import Footer from '@/components/layout/footers/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import FAQSection from '@/components/shared/sections/FaqSection';
import cookies from '@/lib/cookies';
import HeroSection from '@/components/cleaner/HeroSection';
import { CleanerText } from '@/assets/types/cleaner';
import HowItWorksSection from '@/components/cleaner/HowItWorksSection';
import WhenToUseSection from '@/components/cleaner/WhenToUseSection';
import FloatingCtaSectionv2 from '@/components/shared/FloatingCtaSectionV2';
import HorizontalScrollableSection from '@/components/shared/HorizontalScrollableSection';
import FeatureSection from '@/components/cleaner/FeatureSection';

interface CleanerProps {
  lang: GetServerSidePropsContext['locale'];
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  textContent: CleanerText;
  footerLang: FooterText;
}

const CleanerPage = ({
  metatagsDescriptions,
  textContent,
  lang,
  navbarLang,
  footerLang,
}: CleanerProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'home');
  const locale = lang as string;
  const navbarCta = 'chooseStorage';

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Home" lang={lang}>
      <Navbar textContent={navbarLang} lang={locale} cta={[navbarCta]} fixed />

      <HeroSection textContent={textContent.HeroSection} />

      <FeatureSection textContent={textContent.FeatureSection} />

      <HorizontalScrollableSection textContent={textContent.WhyUseSection} containerDecoration="lg:py-20" />

      <FloatingCtaSectionv2
        textContent={textContent.CtaSection}
        url={'/pricing'}
        customText={
          <div className="flex flex-col gap-4 px-6 text-center">
            <p className="text-2xl font-semibold text-gray-95 lg:text-4xl">{textContent.CtaSection.title}</p>
            <p className="px-10 text-base font-normal text-gray-55 lg:px-0 lg:text-xl">
              {textContent.CtaSection.description}
            </p>
          </div>
        }
        bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
        bgGradientColor="linear-gradient(0deg, #F9F9FC 0%, #FFFFFF 100%)"
        containerDetails="shadow-lg backdrop-blur-[55px]"
      />

      <HowItWorksSection textContent={textContent.HowItWorksSection} />

      <WhenToUseSection textContent={textContent.WhenToUseSection} />

      <FloatingCtaSectionv2
        textContent={textContent.CtaSection2}
        url={'/pricing'}
        customText={
          <div className="flex flex-col gap-4 px-10 text-center lg:px-0">
            <p className="text-2xl font-semibold text-gray-95 lg:text-4xl">{textContent.CtaSection2.title}</p>
            <p className="text-base font-normal text-gray-55 lg:text-xl">{textContent.CtaSection2.description}</p>
          </div>
        }
        bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
        bgGradientColor="linear-gradient(0deg, #E5EEFB 0%, #FFFFFF 100%)"
        containerDetails="shadow-lg backdrop-blur-[55px]"
      />

      <FAQSection textContent={textContent.FaqSection} />

      <Footer textContent={footerLang} lang={locale} />
    </Layout>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/cleaner.json`);
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

export default CleanerPage;
