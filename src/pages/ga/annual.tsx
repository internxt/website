import { PPCAnnualPage } from '@/components/templates/ppcAnnualPageTemplate';
import { GetStaticPropsContext } from 'next';
import { PromoCodeName } from '@/lib/types';

const PPCAnnualPageGA = (props) => (
  <PPCAnnualPage {...props} couponCodeName={PromoCodeName.GADS85} />
);

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/specialOfferTemplate.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  return {
    props: {
      lang,
      metatagsDescriptions,
      langJson,
      navbarLang,
      footerLang,
    },
  };
}

export default PPCAnnualPageGA;
