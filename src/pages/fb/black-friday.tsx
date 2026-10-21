import { GetStaticPropsContext } from 'next';
import BlackFridayPpcTemplate from '@/components/templates/blackFridayPpcTemplate';
import { PromoCodeName } from '@/lib/types';

const BlackFridayPpcPage = (props) => {
  return <BlackFridayPpcTemplate {...props} />;
};

export function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/black-friday-ppc.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  return {
    props: {
      lang,
      metatagsDescriptions,
      textContent,
      navbarLang,
      footerLang,
      config: {
        heroImage: '/images/black-friday/bf-cloud-storage.webp',
        metatagsId: 'black-friday',
        couponCode: PromoCodeName.META85,
        couponCodeForLifetime: PromoCodeName.META85,
        popularPlanSize: '5TB',
      },
    },
  };
}

export default BlackFridayPpcPage;
