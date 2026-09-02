import { PPCLifetimePage } from '@/components/templates/ppcLifetimePageTemplate';
import { PromoCodeName } from '@/lib/types';

const PPCLifetimePageFB = (props) => (
  <PPCLifetimePage {...props} couponCodeName={PromoCodeName.META85} />
);

export async function getStaticProps(ctx) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const langJson = require(`@/assets/lang/${lang}/lifetime.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);
  const testimonialsJson = require(`@/assets/lang/${lang}/home.json`);

  return {
    props: {
      lang,
      metatagsDescriptions,
      navbarLang,
      langJson,
      footerLang,
      testimonialsJson,
    },
  };
}

export default PPCLifetimePageFB;
