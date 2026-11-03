import { MailTemplate, MailTemplateProps } from '@/components/templates/mailTemplate';
import { GetStaticPropsContext } from 'next';

const MailEmLP = (props: MailTemplateProps) => <MailTemplate {...props} robots="noindex,follow" />;

export function getStaticProps(ctx: GetStaticPropsContext) {
  const locale = ctx.locale as string;

  const metatagsDescription = require(`@/assets/lang/${locale}/metatags-descriptions.json`);
  const navbarText = require(`@/assets/lang/${locale}/navbar.json`);
  const textContent = require(`@/assets/lang/${locale}/mail.json`);
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

export default MailEmLP;
