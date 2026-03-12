import { ComparisonPage } from '@/components/templates/comparisonPageTemplate';
import cookies from '@/lib/cookies';
import { PromoCodeName } from '@/lib/types';
import { GetServerSidePropsContext } from 'next';

const avastComparison = (props: any) => (
  <ComparisonPage
    breadcrumbName="Avast alternative"
    urlSlug="alternative-to-avast"
    {...props}
    competitor="avast"
    metaTagId="alternative-to-avast"
    segmentName="Avast Comparison"
    logo="/images/comparison/avast-Letters.webp"
    couponCodeName={PromoCodeName.AVAST87}
  />
);

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/alternative-to-avast.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: { lang, metatagsDescriptions, langJson, navbarLang, footerLang },
  };
}

export default avastComparison;
