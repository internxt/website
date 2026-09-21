import {
  CloudStorageBackupSolutionsTemplate,
  CloudStorageBackupSolutionsTemplateProps,
} from '@/components/templates/cloudStorageBackupSolutionsTemplate';
import { GetServerSidePropsContext } from 'next';
import cookies from '@/lib/cookies';
import { PromoCodeName } from '@/lib/types';

const CloudStorageBackupSolutionsEmLP = (props: CloudStorageBackupSolutionsTemplateProps) => (
  <CloudStorageBackupSolutionsTemplate
    {...props}
    couponCode={PromoCodeName.seolp}
    couponCodeForLifetime={PromoCodeName.seolp}
    hidePriceTable
    robots="noindex,follow"
  />
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

export default CloudStorageBackupSolutionsEmLP;
