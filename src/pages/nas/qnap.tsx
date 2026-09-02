import { GetStaticPropsContext } from 'next';
import { NASPage, NASPageProps } from '@/components/templates/nasPageTemplate';

const QNAPNASPage = (props: Omit<NASPageProps, 'metaTagId' | 'breadcrumbItems'>): JSX.Element => (
  <NASPage
    {...props}
    metaTagId="nas-qnap"
    breadcrumbItems={[
      { name: props.textContent.Breadcrumbs.home, url: '/' },
      { name: props.textContent.Breadcrumbs.drive, url: '/drive' },
      { name: props.textContent.Breadcrumbs.nas, url: '/nas' },
      { name: props.textContent.Breadcrumbs.qnap, url: '/nas/qnap' },
    ]}
  />
);

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/nas-qnap.json`);
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

export default QNAPNASPage;
