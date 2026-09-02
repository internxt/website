import { GetStaticPropsContext } from 'next';
import { NASPage, NASPageProps } from '@/components/templates/nasPageTemplate';

const SynologyNASPage = (props: Omit<NASPageProps, 'metaTagId' | 'breadcrumbItems'>): JSX.Element => (
  <NASPage
    {...props}
    metaTagId="nas-synology"
    breadcrumbItems={[
      { name: props.textContent.Breadcrumbs.home, url: '/' },
      { name: props.textContent.Breadcrumbs.drive, url: '/drive' },
      { name: props.textContent.Breadcrumbs.nas, url: '/nas' },
      { name: props.textContent.Breadcrumbs.synology, url: '/nas/synology' },
    ]}
    firstCtaTextPadding="px-4"
    firstCtaDescriptionClass="text-base font-normal leading-tight text-gray-55  lg:text-center lg:text-xl"
  />
);

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/nas-synology.json`);
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

export default SynologyNASPage;
