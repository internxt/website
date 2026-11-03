import { ComparisonPage } from '@/components/templates/comparisonPageTemplate';
import { PromoCodeName } from '@/lib/types';
import { GetStaticPropsContext } from 'next';

const copilotComparison = (props) => (
  <ComparisonPage
    breadcrumbName="Copilot alternative"
    urlSlug="alternative-to-copilot"
    {...props}
    competitor="Copilot"
    metaTagId="alternative-to-copilot"
    segmentName="Copilot Comparison"
    logo="/images/comparison/copilot-Letters.webp"
    couponCodeName={PromoCodeName.COPILOT85}
  />
);

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/alternative-to-copilot.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  return {
    props: { lang, metatagsDescriptions, langJson, navbarLang, footerLang },
  };
}

export default copilotComparison;
