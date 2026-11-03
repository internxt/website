import {
  CloudStorageBackupSolutionsTemplate,
  CloudStorageBackupSolutionsTemplateProps,
} from '@/components/templates/cloudStorageBackupSolutionsTemplate';
import { GetStaticPropsContext } from 'next';

const CloudStorageBackupSolutionsLP = (props: CloudStorageBackupSolutionsTemplateProps) => (
  <CloudStorageBackupSolutionsTemplate {...props} />
);

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/cloud-storage-backup-solutions.json`);
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

export default CloudStorageBackupSolutionsLP;
