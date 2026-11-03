import { ComparisonPage } from '@/components/templates/comparisonPageTemplate';
import { PromoCodeName } from '@/lib/types';
import { GetStaticPropsContext } from 'next';

const GeminiComparison = (props) => (
  <ComparisonPage
    breadcrumbName="Gemini alternative"
    urlSlug="alternative-to-gemini"
    {...props}
    competitor="gemini"
    metaTagId="alternative-to-gemini"
    segmentName="Gemini Comparison"
    logo="/images/comparison/gemini-Letters.webp"
    couponCodeName={PromoCodeName.GEMINI85}
  />
);

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/alternative-to-gemini.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  return {
    props: { lang, metatagsDescriptions, langJson, navbarLang, footerLang },
  };
}

export default GeminiComparison;
