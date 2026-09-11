import { ComparisonPage } from '@/components/templates/comparisonPageTemplate';
import { PromoCodeName } from '@/lib/types';
import { GetStaticPropsContext } from 'next';

const WireComparison = (props: any) => (
  <ComparisonPage
    breadcrumbName="Alternative to wire"
    urlSlug="alternative-to-wire"
    {...props}
    competitor="Wire"
    metaTagId="wire-alternative"
    segmentName="Wire Comparison"
    logo="/images/comparison/wire_Letters.webp"
    couponCodeName={PromoCodeName.WIRE}
  />
);

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/wire-alternative.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  return {
    props: { lang, metatagsDescriptions, langJson, navbarLang, footerLang },
  };
}

export default WireComparison;
