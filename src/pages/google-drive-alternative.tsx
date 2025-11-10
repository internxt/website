import { ComparisonPage } from '@/components/templates/comparisonPageTemplate';
import cookies from '@/lib/cookies';
import { GetServerSidePropsContext } from 'next';

const GoogleDriveComparison = (props) => (
  <ComparisonPage
    {...props}
    competitor="Drive"
    metaTagId="google-drive-alternative"
    segmentName="Google Drive Comparison"
    logo="/images/comparison/competitors/Drive-Letters.webp"
    customSections={{
      showThreeCards: true,
      privacyBgGradient: 'linear-gradient(0deg, #F4F8FF 0%, #FFFFFF 100%)',
    }}
  />
);

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/google-drive-alternative.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: { lang, metatagsDescriptions, langJson, navbarLang, footerLang },
  };
}

export default GoogleDriveComparison;
