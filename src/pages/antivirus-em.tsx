import { GetServerSidePropsContext } from 'next';
import { AntivirusTemplate, AntivirusTemplateProps } from '@/components/templates/antivirusTemplate';
import cookies from '@/lib/cookies';
import { downloadDriveLinks } from '@/lib/get-download-url';

const AntivirusEmPage = (props: AntivirusTemplateProps) => <AntivirusTemplate {...props} robots="noindex,follow" />;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const download = await downloadDriveLinks();
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/antivirus.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);
  const relationalLinksText = require(`@/assets/lang/${lang}/relational-links.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      metatagsDescriptions,
      langJson,
      navbarLang,
      footerLang,
      download,
      relationalLinksText,
    },
  };
}

export default AntivirusEmPage;
