import { ComparisonPage } from '@/components/templates/comparisonPageTemplate';
import { PromoCodeName } from '@/lib/types';
import { GetStaticPropsContext } from 'next';

const grokComparison = (props) => (
  <ComparisonPage
    breadcrumbName="Grok alternative"
    urlSlug="alternative-to-grok"
    {...props}
    competitor="grok"
    metaTagId="alternative-to-grok"
    segmentName="Grok Comparison"
    logo="/images/comparison/grok-Letters.webp"
    couponCodeName={PromoCodeName.GROK85}
  />
);

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/alternative-to-grok.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  return {
    props: { lang, metatagsDescriptions, langJson, navbarLang, footerLang },
  };
}

export default grokComparison;
