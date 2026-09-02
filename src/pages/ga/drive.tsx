import { PPCDrivePage } from '@/components/templates/ppcDrivePageTemplate';
import { downloadDriveLinks } from '@/lib/get-download-url';
import { PromoCodeName } from '@/lib/types';

const PPCDrivePageGA = (props) => (
  <PPCDrivePage {...props} couponCodeName={PromoCodeName.GADS85} />
);

export async function getStaticProps(ctx) {
  const download = await downloadDriveLinks();
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/drive.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);
  const relationalLinksText = require(`@/assets/lang/${lang}/relational-links.json`);

  return {
    props: {
      lang,
      download,
      metatagsDescriptions,
      textContent,
      navbarLang,
      footerLang,
      relationalLinksText,
    },
  };
}

export default PPCDrivePageGA;
