import { LifetimePage } from '@/components/templates/lifetimePageTemplate';
import { PromoCodeName } from '@/lib/types';

const PPCLifetimePageGA = (props) => (
  <LifetimePage
    {...props}
    couponCode={PromoCodeName.GADS85}
    couponCodeForLifetime={PromoCodeName.GADS85}
    minimalLayout
    segmentName="PPC Lifetime"
    ctaBgGradientColor="linear-gradient(180deg, #F4F8FF 0%, #FFFFFF 100%)"
  />
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

export default PPCLifetimePageGA;
