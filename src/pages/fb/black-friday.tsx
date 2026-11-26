import { GetStaticPropsContext } from 'next';
import BlackFridayCampaignTemplate from '@/components/templates/blackFridayCampaignTemplate';
import { PromoCodeName } from '@/lib/types';
import { Campaign } from '@/lib/helpers/campaigns';
import { formatText } from '@/components/utils/format-text';

const BlackFridayPpcPage = (props) => {
  return <BlackFridayCampaignTemplate {...props} hideNavbarLinks hideNavbarCTA />;
};

export function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/black-friday-ppc.json`);
  const textContent = formatText(langJson, langJson.campaigns[Campaign.BlackFriday]);
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
        couponCode: PromoCodeName.META85BF90,
        couponCodeForLifetime: PromoCodeName.META85BF90,
        popularPlanSize: '5TB',
      },
    },
  };
}

export default BlackFridayPpcPage;
