import {
  CloudStorageForDocumentsTemplate,
  CloudStorageForDocumentsTemplateProps,
} from '@/components/templates/cloudStorageForDocumentsTemplate';
import { GetServerSidePropsContext } from 'next';
import { PromoCodeName } from '@/lib/types';

const CloudStorageForDocumentsEmLP = (props: CloudStorageForDocumentsTemplateProps) => (
  <CloudStorageForDocumentsTemplate
    {...props}
    couponCode={PromoCodeName.seolp}
    couponCodeForLifetime={PromoCodeName.seolp}
    hidePriceTable
    robots="noindex,follow"
  />
);

export function getServerSideProps(ctx: GetServerSidePropsContext) {
  const locale = ctx.locale as string;

  const metatagsDescription = require(`@/assets/lang/${locale}/metatags-descriptions.json`);
  const navbarText = require(`@/assets/lang/${locale}/navbar.json`);
  const textContent = require(`@/assets/lang/${locale}/cloud-storage-for-documents.json`);
  const footerText = require(`@/assets/lang/${locale}/footer.json`);

  return {
    props: {
      metatagsDescription,
      navbarText,
      textContent,
      footerText,
      locale,
    },
  };
}

export default CloudStorageForDocumentsEmLP;
