import { ComparisonPage } from '@/components/templates/comparisonPageTemplate';
import { GetStaticPropsContext } from 'next';

const AwsComparison = (props: any) => (
  <ComparisonPage
    {...props}
    competitor="aws"
    metaTagId="aws-alternative"
    segmentName="AWS Comparison"
    logo="/images/comparison/aws-Letters.webp"
    isS3Alternative
  />
);

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/aws-alternative.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  return {
    props: { lang, metatagsDescriptions, langJson, navbarLang, footerLang },
  };
}

export default AwsComparison;
