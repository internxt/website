import {
  CloudStorageComparisonTemplate,
  CloudStorageComparisonTemplateProps,
} from '@/components/templates/cloudStorageComparisonTemplate';
import { PromoCodeName } from '@/lib/types';
import cookies from '@/lib/cookies';
import { GetServerSidePropsContext } from 'next';

const GaCloudStorageComparison = (props: CloudStorageComparisonTemplateProps): JSX.Element => (
  <CloudStorageComparisonTemplate
    {...props}
    couponCode={PromoCodeName.GADS85}
    couponCodeForLifetime={PromoCodeName.GADS85}
  />
);

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/comparison.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      metatagsDescriptions,
      langJson,
      navbarLang,
      footerLang,
    },
  };
}

export default GaCloudStorageComparison;
