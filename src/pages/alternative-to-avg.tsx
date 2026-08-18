import { ComparisonPage } from '@/components/templates/comparisonPageTemplate';
import { PromoCodeName } from '@/lib/types';
import { GetStaticPropsContext } from 'next';

const avgComparison = (props: any) => (
  <ComparisonPage
    breadcrumbName="Avg alternative"
    urlSlug="alternative-to-avg"
    {...props}
    competitor="avg"
    metaTagId="alternative-to-avg"
    segmentName="Avg Comparison"
    logo="/images/comparison/avg-Letters.webp"
    couponCodeName={PromoCodeName.AVG85}
  />
);

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/alternative-to-avg.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  return {
    props: { lang, metatagsDescriptions, langJson, navbarLang, footerLang },
  };
}

export default avgComparison;
