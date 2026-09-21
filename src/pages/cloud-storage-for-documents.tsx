import {
  CloudStorageForDocumentsTemplate,
  CloudStorageForDocumentsTemplateProps,
} from '@/components/templates/cloudStorageForDocumentsTemplate';
import { GetServerSidePropsContext } from 'next';

const CloudStorageForDocumentsLP = (props: CloudStorageForDocumentsTemplateProps) => <CloudStorageForDocumentsTemplate {...props} />;

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

export default CloudStorageForDocumentsLP;
