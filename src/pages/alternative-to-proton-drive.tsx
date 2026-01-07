import { ComparisonPage } from '@/components/templates/comparisonPageTemplate';
import cookies from '@/lib/cookies';
import { PromoCodeName } from '@/lib/types';
import { GetServerSidePropsContext } from 'next';

const ProtonDriveComparison = (props) => (
  <ComparisonPage
    {...props}
    competitor="proton-drive"
    metaTagId="proton-drive-alternative"
    segmentName="Idrive Comparison"
    logo="/images/comparison/proton-drive-Letters.webp"
    couponCodeName={PromoCodeName.PROTONDRIVE}
  />
);

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/proton-drive-alternative.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: { lang, metatagsDescriptions, langJson, navbarLang, footerLang },
  };
}

export default ProtonDriveComparison;
