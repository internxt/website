import { ComparisonHeader } from '@/components/comparison/ComparisonHeader';
import { HeroSection } from '@/components/comparison/pCloud-alternative/HeroSection';
import { IsPCloudSafeSection } from '@/components/comparison/pCloud-alternative/IsPCloudSafeSection';
import { TablesSection } from '@/components/comparison/pCloud-alternative/TablesSection';
import { CouponSection } from '@/components/comparison/pCloud-alternative/CouponSection';
import { WhyChooseInxtSection } from '@/components/comparison/pCloud-alternative/WhyChooseInxtSection';
import Layout from '@/components/layout/Layout';
import { MinimalFooter } from '@/components/layout/footers/MinimalFooter';
import Navbar from '@/components/layout/navbars/Navbar';
import CtaSection from '@/components/shared/CtaSection';
import { SIGNUP_DRIVE_WEB } from '@/constants';
import cookies from '@/lib/cookies';
import { GetServerSidePropsContext } from 'next';

const pCloudComparison = ({ metatagsDescriptions, langJson, lang, navbarLang, footerLang }): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'pcloud-alternative');

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="pCloud Comparison" lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

      <ComparisonHeader
        maxWithForTitle={'max-w-[600px]'}
        textContent={langJson.HeaderSection}
        redirectUrl={'/pricing'}
      />

      <HeroSection textContent={langJson.HeroSection} />

      <TablesSection textContent={langJson.TablesSection} />

      <CouponSection textContent={langJson.UseCodeSection} redirectUrl="/pricing" />

      <IsPCloudSafeSection textContent={langJson.isPCloudSafeSection} />

      <CtaSection textContent={langJson.CtaSection} url={SIGNUP_DRIVE_WEB} />

      <WhyChooseInxtSection textContent={langJson.WhyChooseInxtSection} />

      <MinimalFooter footerLang={footerLang.FooterSection} lang={lang} bgColor="bg-gray-1" />
    </Layout>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = 'en';

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/pcloud-alternative.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

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

export default pCloudComparison;
