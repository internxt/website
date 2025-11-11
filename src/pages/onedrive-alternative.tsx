import { ComparisonPage } from '@/components/templates/comparisonPageTemplate';
import cookies from '@/lib/cookies';
import { GetServerSidePropsContext } from 'next';

const OnedriveComparison = (props) => (
  <ComparisonPage
    {...props}
    competitor="OneDrive"
    metaTagId="onedrive-alternative"
    segmentName="Onedrive Comparison"
    logo="/images/comparison/Internxt-OneDrive.webp"
  />
);

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/onedrive-alternative.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: { lang, metatagsDescriptions, langJson, navbarLang, footerLang },
  };
}

export default OnedriveComparison;
