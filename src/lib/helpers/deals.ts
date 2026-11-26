import { GetStaticPropsContext } from 'next';
import { PromoCodeName } from '@/lib/types';
import { Campaign } from '@/lib/helpers/campaigns';
import { formatText } from '@/components/utils/format-text';

interface DealConfig {
  heroImage: string;
  metatagsId: string;
  couponCode?: PromoCodeName;
  couponCodeForLifetime?: PromoCodeName;
  popularPlanSize?: string;
  moreDealsUrls: {
    card1: string;
    card2: string;
  };
}

interface DealContent {
  jsonFileName: string;
  campaign?: Campaign;
}

export const getDealsProps = async (ctx: GetStaticPropsContext, config: DealConfig, content: DealContent) => {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/${content.jsonFileName}.json`);
  const textContent = content.campaign ? formatText(langJson, langJson.campaigns[content.campaign]) : langJson;
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
        ...config,
        moreDealsUrls: {
          ...config.moreDealsUrls,
        },
      },
    },
  };
};
