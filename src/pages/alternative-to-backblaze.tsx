import { ComparisonPage } from '@/components/templates/comparisonPageTemplate';
import { GetStaticPropsContext } from 'next';

const BackblazeComparison = (props: any) => (
  <ComparisonPage
    {...props}
    competitor="backblaze"
    metaTagId="backblaze-alternative"
    segmentName="Backblaze Comparison"
    logo="/images/comparison/backblaze-Letters.webp"
    isS3Alternative
  />
);

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/backblaze-alternative.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  return {
    props: { lang, metatagsDescriptions, langJson, navbarLang, footerLang },
  };
}

export default BackblazeComparison;
