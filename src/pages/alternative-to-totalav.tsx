import { ComparisonPage } from '@/components/templates/comparisonPageTemplate';
import cookies from '@/lib/cookies';
import { PromoCodeName } from '@/lib/types';
import { GetServerSidePropsContext } from 'next';

const totalavComparison = (props: any) => (
  <ComparisonPage
    breadcrumbName="TotalAV alternative"
    urlSlug="alternative-to-totalav"
    {...props}
    competitor="totalav"
    metaTagId="alternative-to-totalav"
    segmentName="TotalAV Comparison"
    logo="/images/comparison/totalav-Letters.webp"
    couponCodeName={PromoCodeName.TOTALAV85}
  />
);

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/alternative-to-totalav.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: { lang, metatagsDescriptions, langJson, navbarLang, footerLang },
  };
}

export default totalavComparison;
