import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import { MinimalFooter } from '@/components/layout/footers/MinimalFooter';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { GetStaticPropsContext } from 'next';

interface ThankyouText {
  HeroSection: {
    title: string;
    subtitle: string;
    description: string;
    emailNote: string;
    cta: string;
  };
}

interface ThankyouProps {
  darkMode?: boolean;
  lang: GetStaticPropsContext['locale'];
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  langJson: ThankyouText;
  footerLang: FooterText;
}

const Thankyou = ({
  darkMode = false,
  lang,
  metatagsDescriptions,
  navbarLang,
  langJson,
  footerLang,
}: ThankyouProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'thankyou');
  const locale = lang as string;

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Thankyou" lang={lang} robots="noindex">
      <Navbar lang={locale} textContent={navbarLang} cta={['default']} isLinksHidden hideCTA />

      <section
        className={`flex min-h-screen flex-col items-center justify-center ${
          darkMode ? 'bg-[#1C1C1C]' : 'bg-white'
        } px-6 py-24 text-center`}
      >
        <div className="flex flex-col items-center gap-6">
          <h1 className={`text-5xl font-semibold ${darkMode ? 'text-white-95' : 'text-gray-100'}`}>
            {langJson.HeroSection.title}
          </h1>
          <p className={`text-xl font-medium ${darkMode ? 'text-cool-gray-30' : 'text-gray-80'}`}>
            {langJson.HeroSection.subtitle}
          </p>
          <p className={`text-lg ${darkMode ? 'text-green-120' : 'text-gray-60'}`}>
            {langJson.HeroSection.description}
          </p>
          <p className={`text-lg ${darkMode ? 'text-green-120' : 'text-gray-60'}`}>{langJson.HeroSection.emailNote}</p>
          <p className="text-base font-medium text-primary">{langJson.HeroSection.cta}</p>
        </div>
      </section>

      <MinimalFooter footerLang={footerLang.FooterSection} lang={locale} darkMode={darkMode} />
    </Layout>
  );
};

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/thankyou.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  return {
    props: {
      lang,
      metatagsDescriptions,
      langJson,
      navbarLang,
      footerLang,
    },
  };
}

export default Thankyou;
