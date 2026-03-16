import { ComparisonPage } from '@/components/templates/comparisonPageTemplate';
import cookies from '@/lib/cookies';
import { PromoCodeName } from '@/lib/types';
import { GetServerSidePropsContext } from 'next';

const cleanmymacComparison = (props: any) => (
  <ComparisonPage
    breadcrumbName="CleanMyMac alternative"
    urlSlug="alternative-to-clean-my-mac"
    {...props}
    competitor="clean-my-mac"
    metaTagId="alternative-to-clean-my-mac"
    segmentName="CleanMyMac Comparison"
    logo="/images/comparison/clean-my-mac-Letters.webp"
    couponCodeName={PromoCodeName.CLEANMYMAC85}
  />
);

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/alternative-to-clean-my-mac.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: { lang, metatagsDescriptions, langJson, navbarLang, footerLang },
  };
}

export default cleanmymacComparison;
