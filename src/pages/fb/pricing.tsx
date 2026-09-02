import { PPCPricingPage } from '@/components/templates/ppcPricingPageTemplate';
import { GetStaticPropsContext } from 'next';
import { PromoCodeName } from '@/lib/types';

const PPCPricingPageFB = (props) => (
  <PPCPricingPage {...props} couponCodeName={PromoCodeName.META85} />
);

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/pricing.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const relationalLinksText = require(`@/assets/lang/${lang}/relational-links.json`);

  return {
    props: {
      metatagsDescriptions,
      footerLang,
      navbarLang,
      lang,
      textContent,
      relationalLinksText,
    },
  };
}

export default PPCPricingPageFB;
