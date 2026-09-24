import { ComparisonPage } from '@/components/templates/comparisonPageTemplate';
import { PromoCodeName } from '@/lib/types';
import { GetStaticPropsContext } from 'next';

const mcafeeComparison = (props: any) => (
  <ComparisonPage
    breadcrumbName="Mcafee alternative"
    urlSlug="alternative-to-mcafee"
    {...props}
    competitor="mcafee"
    metaTagId="alternative-to-mcafee"
    segmentName="Mcafee Comparison"
    logo="/images/comparison/mcafee-Letters.webp"
    couponCodeName={PromoCodeName.MCAFEE85}
  />
);

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/alternative-to-mcafee.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  return {
    props: { lang, metatagsDescriptions, langJson, navbarLang, footerLang },
  };
}

export default mcafeeComparison;
