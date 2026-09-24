import { DriveTemplate, DriveTemplateProps } from '@/components/templates/driveTemplate';
import { downloadDriveLinks } from '@/lib/get-download-url';
import { GetStaticPropsContext } from 'next';
import { PromoCodeName } from '@/lib/types';

const DriveEmLP = (props: DriveTemplateProps) => (
  <DriveTemplate
    {...props}
    couponCode={PromoCodeName.OFFSUB}
    couponCodeForLifetime={PromoCodeName.OFFLFT}
    hidePriceTable
    robots="noindex,follow"
  />
);

export async function getStaticProps(ctx: GetStaticPropsContext) {
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

export default DriveEmLP;
