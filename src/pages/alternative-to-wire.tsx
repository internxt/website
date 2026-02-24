import { ComparisonPage } from '@/components/templates/comparisonPageTemplate';
import cookies from '@/lib/cookies';
import { PromoCodeName } from '@/lib/types';
import { GetServerSidePropsContext } from 'next';

const WireComparison = (props: any) => (
  <ComparisonPage
    {...props}
    competitor="Wire"
    metaTagId="wire-alternative"
    segmentName="Wire Comparison"
    logo="/images/comparison/wire_Letters.webp"
    couponCodeName={PromoCodeName.WIRE}
  />
);

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/wire-alternative.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: { lang, metatagsDescriptions, langJson, navbarLang, footerLang },
  };
}

export default WireComparison;
