import { ComparisonPage } from '@/components/templates/comparisonPageTemplate';
import cookies from '@/lib/cookies';
import { GetServerSidePropsContext } from 'next';

const AzureComparison = (props: any) => (
  <ComparisonPage
    {...props}
    competitor="azure"
    metaTagId="azure-alternative"
    segmentName="Azure Comparison"
    logo="/images/comparison/azure-Letters.webp"
    isS3Alternative
  />
);

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/azure-alternative.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: { lang, metatagsDescriptions, langJson, navbarLang, footerLang },
  };
}

export default AzureComparison;
