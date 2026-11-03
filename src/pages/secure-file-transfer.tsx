import {
  SecureFileTransferTemplate,
  SecureFileTransferTemplateProps,
} from '@/components/templates/secureFileTransferTemplate';
import { GetStaticPropsContext } from 'next';

const SecureFileTransferLP = (props: SecureFileTransferTemplateProps) => <SecureFileTransferTemplate {...props} />;

export function getStaticProps(ctx: GetStaticPropsContext) {
  const locale = ctx.locale as string;

  const metatagsDescription = require(`@/assets/lang/${locale}/metatags-descriptions.json`);
  const navbarText = require(`@/assets/lang/${locale}/navbar.json`);
  const textContent = require(`@/assets/lang/${locale}/secure-file-transfer.json`);
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

export default SecureFileTransferLP;
