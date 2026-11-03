import { ComparisonPage } from '@/components/templates/comparisonPageTemplate';
import { PromoCodeName } from '@/lib/types';
import { GetStaticPropsContext } from 'next';

const chatgptComparison = (props) => (
  <ComparisonPage
    breadcrumbName="Alternative to chatgpt"
    urlSlug="alternative-to-chatGPT"
    {...props}
    competitor="ChatGPT"
    metaTagId="alternative-to-chatgpt"
    segmentName="ChatGPT Comparison"
    logo="/images/comparison/ChatGPT-Letters.webp"
    couponCodeName={PromoCodeName.CHATGPT85}
  />
);

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/alternative-to-chatgpt.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  return {
    props: { lang, metatagsDescriptions, langJson, navbarLang, footerLang },
  };
}

export default chatgptComparison;
