import { GetStaticPropsContext } from 'next';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import Footer from '@/components/layout/footers/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import FAQSection from '@/components/shared/sections/FaqSection';
import RelationalLinks from '@/components/shared/sections/RelationalLinks';
import HeroSection from '@/components/cleaner/HeroSection';
import { CleanerText } from '@/assets/types/cleaner';
import HowItWorksSection from '@/components/cleaner/HowItWorksSection';
import WhenToUseSection from '@/components/cleaner/WhenToUseSection';
import FloatingCtaSectionv2 from '@/components/shared/FloatingCtaSectionV2';
import HorizontalScrollableSection from '@/components/shared/HorizontalScrollableSection';
import FeatureSection from '@/components/cleaner/FeatureSection';
import Script from 'next/script';
import { sm_breadcrumb_list } from '@/components/utils/schema-markup-generator';

interface CleanerProps {
  darkMode?: boolean;
  lang: GetStaticPropsContext['locale'];
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  textContent: CleanerText;
  footerLang: FooterText;
  relationalLinksText: any;
}

const CleanerPage = ({
  darkMode = false,
  metatagsDescriptions,
  textContent,
  lang,
  navbarLang,
  footerLang,
  relationalLinksText,
}: CleanerProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'internxt-cleaner');
  const locale = lang as string;
  const navbarCta = 'chooseStorage';

  return (
    <>
      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_breadcrumb_list([{ name: 'Encrypted Cloud Storage', url: '/' }, { name: 'Secure cloud storage', url: '/drive' }, { name: 'Internxt Cleaner', url: '/cleaner' }])}
      </Script>
      <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Home" lang={lang}>
      <Navbar textContent={navbarLang} lang={locale} cta={[navbarCta]} fixed />
      <HeroSection textContent={textContent.HeroSection} />

      <FeatureSection textContent={textContent.FeatureSection} />

      <div className="lg:py-18">
        <HorizontalScrollableSection textContent={textContent.WhyUseSection} />
      </div>

      <FloatingCtaSectionv2
        textContent={textContent.CtaSection}
        url={'/pricing'}
        customText={
          <div className="flex flex-col gap-4 px-6 text-center">
              <p className="text-2xl font-semibold text-gray-95 dark:text-white-95 lg:text-4xl">
                {textContent.CtaSection.title}
              </p>
              <p
                className="px-10 text-base font-normal text-gray-55 dark:text-green-120 lg:px-0 lg:text-xl"
              >
              {textContent.CtaSection.description}
            </p>
          </div>
        }
        bgGradientContainerColor="bg-[linear-gradient(115.95deg,rgba(244,248,255,0.75)_10.92%,rgba(255,255,255,0.08)_96.4%)]"
          bgGradientColor="bg-[linear-gradient(0deg,#F9F9FC_0%,#FFFFFF_100%)] dark:bg-[linear-gradient(0deg,#0D0D0D_0%,#1C1C1C_100%)]"
        containerDetails="shadow-lg backdrop-blur-[55px]"
        bgPadding="py-10"
      />

      <HowItWorksSection textContent={textContent.HowItWorksSection} />

      <WhenToUseSection textContent={textContent.WhenToUseSection} />

      <FloatingCtaSectionv2
        textContent={textContent.CtaSection2}
        url={'/pricing'}
        customText={
          <div className="flex flex-col gap-4 px-10 text-center lg:px-0">
              <p className="text-2xl font-semibold text-gray-95 dark:text-white-95 lg:text-4xl">
                {textContent.CtaSection2.title}
              </p>
              <p className="text-base font-normal text-gray-55 dark:text-green-120 lg:text-xl">
                {textContent.CtaSection2.description}
              </p>
          </div>
        }
        bgGradientContainerColor="bg-[linear-gradient(115.95deg,rgba(244,248,255,0.75)_10.92%,rgba(255,255,255,0.08)_96.4%)]"
          bgGradientColor="bg-[linear-gradient(0deg,#E5EEFB_0%,#FFFFFF_100%)] dark:bg-[linear-gradient(0deg,#082D66_0%,#1C1C1C_100%)]"
        containerDetails="shadow-lg backdrop-blur-[55px]"
        bgPadding="py-10"
      />

      <FAQSection textContent={textContent.FaqSection} darkMode={darkMode} />

      <RelationalLinks textContent={relationalLinksText} />

        <Footer
          textContent={footerLang}
          lang={locale}
          breadcrumbItems={[
            { name: 'Encrypted Cloud Storage', url: '/' },
            { name: 'Secure cloud storage', url: '/drive' },
            { name: 'Internxt Cleaner', url: '/cleaner' },
          ]}
          darkMode={darkMode}
        />
    </Layout>
    </>
  );
};

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/cleaner.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);
  const relationalLinksText = require(`@/assets/lang/${lang}/relational-links.json`);

  return {
    props: {
      lang,
      metatagsDescriptions,
      textContent,
      navbarLang,
      footerLang,
      relationalLinksText,
    },
  };
}

export default CleanerPage;
