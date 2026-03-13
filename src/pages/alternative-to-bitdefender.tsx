import { ComparisonPage } from '@/components/templates/comparisonPageTemplate';
import cookies from '@/lib/cookies';
import { PromoCodeName } from '@/lib/types';
import { GetServerSidePropsContext } from 'next';

const bitdefenderComparison = (props: any) => (
  <ComparisonPage
    breadcrumbName="Bitdefender alternative"
    urlSlug="alternative-to-bitdefender"
    {...props}
    competitor="bitdefender"
    metaTagId="alternative-to-bitdefender"
    segmentName="Bitdefender Comparison"
    logo="/images/comparison/bitdefender-Letters.webp"
    couponCodeName={PromoCodeName.BITDEFENDER87}
  />
);

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/alternative-to-bitdefender.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: { lang, metatagsDescriptions, langJson, navbarLang, footerLang },
  };
}

export default bitdefenderComparison;
