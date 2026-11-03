import { ComparisonPage } from '@/components/templates/comparisonPageTemplate';
import { PromoCodeName } from '@/lib/types';
import { GetStaticPropsContext } from 'next';

const WherebyComparison = (props: any) => (
  <ComparisonPage
    breadcrumbName="Whereby alternative"
    urlSlug="alternative-to-whereby"
    {...props}
    competitor="Whereby"
    metaTagId="whereby-alternative"
    segmentName="Whereby Comparison"
    logo="/images/comparison/Whereby_Letters.webp"
    couponCodeName={PromoCodeName.whereby}
  />
);

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/whereby-alternative.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  return {
    props: { lang, metatagsDescriptions, langJson, navbarLang, footerLang },
  };
}

export default WherebyComparison;
