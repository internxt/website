import { ComparisonPage } from '@/components/templates/comparisonPageTemplate';
import { PromoCodeName } from '@/lib/types';
import { GetStaticPropsContext } from 'next';

const zoomComparison = (props) => (
  <ComparisonPage
    breadcrumbName="Zoom alternative"
    urlSlug="alternative-to-zoom"
    {...props}
    competitor="zoom"
    metaTagId="zoom-alternative"
    segmentName="zoom Comparison"
    logo="/images/comparison/zoom-Letters.webp"
    couponCodeName={PromoCodeName.ZOOM85}
  />
);

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/zoom-alternative.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  return {
    props: { lang, metatagsDescriptions, langJson, navbarLang, footerLang },
  };
}

export default zoomComparison;
