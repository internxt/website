import { WebdavRcloneTemplate, WebdavRcloneTemplateProps } from '@/components/templates/webdavRcloneTemplate';
import { GetStaticPropsContext } from 'next';

const WebDAVLP = (props: WebdavRcloneTemplateProps) => <WebdavRcloneTemplate {...props} />;

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/webdav.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  return {
    props: {
      metatagsDescriptions,
      langJson,
      navbarLang,
      footerLang,
      lang,
    },
  };
}

export default WebDAVLP;
