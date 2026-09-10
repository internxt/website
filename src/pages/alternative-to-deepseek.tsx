import { ComparisonPage } from '@/components/templates/comparisonPageTemplate';
import { PromoCodeName } from '@/lib/types';
import { GetStaticPropsContext } from 'next';

const DeepSeekComparison = (props) => (
  <ComparisonPage
    breadcrumbName="Deepseek alternative"
    urlSlug="alternative-to-deepseek"
    {...props}
    competitor="deepseek"
    metaTagId="alternative-to-deepseek"
    segmentName="DeepSeek Comparison"
    logo="/images/comparison/deepseek-Letters.webp"
    couponCodeName={PromoCodeName.DEEPSEEK85}
  />
);

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/alternative-to-deepseek.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  return {
    props: { lang, metatagsDescriptions, langJson, navbarLang, footerLang },
  };
}

export default DeepSeekComparison;
