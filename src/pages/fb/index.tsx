import { PPCHomePage } from '@/components/templates/ppcHomePageTemplate';
import { GetStaticPropsContext } from 'next';
import { PromoCodeName } from '@/lib/types';

const PPCHomePageFB = (props) => (
  <PPCHomePage {...props} couponCodeName={PromoCodeName.META85} />
);

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/home.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  return {
    props: {
      lang,
      metatagsDescriptions,
      textContent,
      navbarLang,
      footerLang,
    },
  };
}

export default PPCHomePageFB;
