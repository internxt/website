import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import { MinimalFooter } from '@/components/layout/footers/MinimalFooter';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { GetServerSidePropsContext } from 'next';

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
  lang: GetServerSidePropsContext['locale'];
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  langJson: ThankyouText;
  footerLang: FooterText;
}

const Thankyou = ({ lang, metatagsDescriptions, navbarLang, langJson, footerLang }: ThankyouProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'thankyou');
  const locale = lang as string;

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Thankyou" lang={lang}>
      <Navbar lang={locale} textContent={navbarLang} cta={['default']} isLinksHidden hideCTA />

      <section className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-24 text-center">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-5xl font-semibold text-gray-100">{langJson.HeroSection.title}</h1>
          <p className="text-xl font-medium text-gray-80">{langJson.HeroSection.subtitle}</p>
          <p className="text-lg text-gray-60">{langJson.HeroSection.description}</p>
          <p className="text-lg text-gray-60">{langJson.HeroSection.emailNote}</p>
          <p className="text-base font-medium text-primary">{langJson.HeroSection.cta}</p>
        </div>
      </section>

      <MinimalFooter footerLang={footerLang.FooterSection} lang={locale} />
    </Layout>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
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
