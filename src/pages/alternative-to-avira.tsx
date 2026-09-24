import { ComparisonPage } from '@/components/templates/comparisonPageTemplate';
import { PromoCodeName } from '@/lib/types';
import { GetStaticPropsContext } from 'next';

const aviraComparison = (props: any) => (
  <ComparisonPage
    breadcrumbName="Avira alternative"
    urlSlug="alternative-to-avira"
    {...props}
    competitor="avira"
    metaTagId="alternative-to-avira"
    segmentName="Avira Comparison"
    logo="/images/comparison/avira-Letters.webp"
    couponCodeName={PromoCodeName.AVIRA85}
  />
);

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/alternative-to-avira.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  return {
    props: { lang, metatagsDescriptions, langJson, navbarLang, footerLang },
  };
}

export default aviraComparison;
