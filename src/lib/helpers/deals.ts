import { GetServerSidePropsContext } from 'next';
import { PromoCodeName } from '@/lib/types';
import cookies from '@/lib/cookies';

interface DealConfig {
  metatagsId: string;
  couponCode: PromoCodeName;
  couponCodeForLifetime: PromoCodeName;
  popularPlanSize?: string;
  hideBusinessCards?: boolean;
  hideBusinessSelector?: boolean;
}

interface DealContent {
  jsonFileName: string;
}

export const getDealsProps = async (ctx: GetServerSidePropsContext, config: DealConfig, content: DealContent) => {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/${content.jsonFileName}.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      metatagsDescriptions,
      textContent,
      navbarLang,
      footerLang,
      config,
    },
  };
};
