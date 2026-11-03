import { ComparisonPage } from '@/components/templates/comparisonPageTemplate';
import { GetStaticPropsContext } from 'next';

const IdriveComparison = (props: any) => (
  <ComparisonPage
    {...props}
    competitor="idriveE2"
    metaTagId="idrivee2-alternative"
    segmentName="IDrive e2 Comparison"
    logo="/images/comparison/idrive-Letters.webp"
    isS3Alternative
  />
);

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/idrivee2-alternative.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  return {
    props: { lang, metatagsDescriptions, langJson, navbarLang, footerLang },
  };
}

export default IdriveComparison;
