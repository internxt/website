import {
  CloudStorageBackupSolutionsTemplate,
  CloudStorageBackupSolutionsTemplateProps,
} from '@/components/templates/cloudStorageBackupSolutionsTemplate';
import { GetServerSidePropsContext } from 'next';
import cookies from '@/lib/cookies';

const CloudStorageBackupSolutionsLP = (props: CloudStorageBackupSolutionsTemplateProps) => (
  <CloudStorageBackupSolutionsTemplate {...props} />
);

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/cloud-storage-backup-solutions.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);
  const relationalLinksText = require(`@/assets/lang/${lang}/relational-links.json`);

  cookies.setReferralCookie(ctx);

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
