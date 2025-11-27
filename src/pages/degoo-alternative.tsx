import { ComparisonPage } from '@/components/templates/comparisonPageTemplate';
import cookies from '@/lib/cookies';
import { GetServerSidePropsContext } from 'next';

const DegooComparison = (props) => (
  <ComparisonPage
    {...props}
    competitor="Degoo"
    metaTagId="degoo-alternative"
    segmentName="Degoo Comparison"
    logo="/images/comparison/Degoo_Letters.webp"
  />
);

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/degoo-alternative.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: { lang, metatagsDescriptions, langJson, navbarLang, footerLang },
  };
}

export default DegooComparison;
