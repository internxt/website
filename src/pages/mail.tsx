import { MailTemplate, MailTemplateProps } from '@/components/templates/mailTemplate';
import { GetServerSidePropsContext } from 'next';

const MailLP = (props: MailTemplateProps) => <MailTemplate {...props} />;

export function getServerSideProps(ctx: GetServerSidePropsContext) {
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

export default MailLP;
