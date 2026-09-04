import { LifetimePage, LifetimeSpecialProps } from '@/components/templates/lifetimePageTemplate';
import { PromoCodeName } from '@/lib/types';

const LifetimeSpecialEmail = (props: Omit<LifetimeSpecialProps, 'couponCodeForLifetime' | 'robots'>): JSX.Element => (
  <LifetimePage {...props} couponCodeForLifetime={PromoCodeName.lftem} robots="noindex,follow" />
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

export default LifetimeSpecialEmail;
