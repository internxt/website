import { PPCPrivateCloudPage } from '@/components/templates/ppcPrivateCloudPageTemplate';
import { GetStaticPropsContext } from 'next';

const PPCPrivateCloudPageFB = (props) => (
  <PPCPrivateCloudPage {...props} />
);

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/private-cloud-storage-solutions.json`);
  const bannerJson = require(`@/assets/lang/${lang}/banners.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);
  const relationalLinksText = require(`@/assets/lang/${lang}/relational-links.json`);

  return {
    props: {
      lang,
      metatagsDescriptions,
      textContent,
      bannerJson,
      navbarLang,
      footerLang,
      relationalLinksText,
    },
  };
}

export default PPCPrivateCloudPageFB;
