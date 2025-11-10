import { ComparisonPage } from '@/components/templates/comparisonPageTemplate';
import cookies from '@/lib/cookies';
import { GetServerSidePropsContext } from 'next';

const KoofrComparison = (props) => (
  <ComparisonPage
    {...props}
    competitor="Koofr"
    metaTagId="koofr-alternative"
    segmentName="Koofr Comparison"
    logo="/images/comparison/Koofr-Letters.webp"
  />
);

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/koofr-alternative.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: { lang, metatagsDescriptions, langJson, navbarLang, footerLang },
  };
}

export default KoofrComparison;
