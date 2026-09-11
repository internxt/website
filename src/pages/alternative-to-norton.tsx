import { ComparisonPage } from '@/components/templates/comparisonPageTemplate';
import { PromoCodeName } from '@/lib/types';
import { GetStaticPropsContext } from 'next';

const nortonComparison = (props: any) => (
  <ComparisonPage
    breadcrumbName="Norton alternative"
    urlSlug="alternative-to-norton"
    {...props}
    competitor="norton"
    metaTagId="alternative-to-norton"
    segmentName="Norton Comparison"
    logo="/images/comparison/norton-Letters.webp"
    couponCodeName={PromoCodeName.NORTON85}
  />
);

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/alternative-to-norton.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  return {
    props: { lang, metatagsDescriptions, langJson, navbarLang, footerLang },
  };
}

export default nortonComparison;
