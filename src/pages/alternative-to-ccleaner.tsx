import { ComparisonPage } from '@/components/templates/comparisonPageTemplate';
import cookies from '@/lib/cookies';
import { PromoCodeName } from '@/lib/types';
import { GetServerSidePropsContext } from 'next';

const ccleanerComparison = (props: any) => (
  <ComparisonPage
    breadcrumbName="Ccleaner alternative"
    urlSlug="alternative-to-ccleaner"
    {...props}
    competitor="ccleaner"
    metaTagId="alternative-to-ccleaner"
    segmentName="Ccleaner Comparison"
    logo="/images/comparison/ccleaner-Letters.webp"
    couponCodeName={PromoCodeName.CCLEANER85}
  />
);

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/alternative-to-ccleaner.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: { lang, metatagsDescriptions, langJson, navbarLang, footerLang },
  };
}

export default ccleanerComparison;
