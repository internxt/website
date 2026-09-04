import { GetStaticPropsContext } from 'next';
import { NASPage, NASPageProps } from '@/components/templates/nasPageTemplate';

const NASLandingPage = (props: Omit<NASPageProps, 'metaTagId' | 'breadcrumbItems'>): JSX.Element => (
  <NASPage
    {...props}
    metaTagId="nas"
    breadcrumbItems={[
      { name: 'Encrypted Cloud Storage', url: '/' },
      { name: 'Secure cloud storage', url: '/drive' },
      { name: 'NAS Cloud Backup', url: '/nas' },
    ]}
    includeFaqSchema
  />
);

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/nas.json`);
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

export default NASLandingPage;
