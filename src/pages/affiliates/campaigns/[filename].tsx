import { GetStaticPropsContext } from 'next';
import { BlackFridayPpcText } from '@/assets/types/blackFridayPpc';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import BlackFridayCampaignTemplate from '@/components/templates/blackFridayCampaignTemplate';
import { formatText } from '@/components/utils/format-text';
import {
  ALLOWED_PATHS,
  CAMPAIGN_BY_PATH,
  ENFORCED_LOCALE,
  METATAGS_ID_BY_CAMPAIGN,
  useAffiliatesCampaignOfferConfig,
} from '@/hooks/useAffiliatesCampaignOfferConfig';
import { buildLocalizedPaths } from '@/lib/helpers/staticPaths';

interface AffiliatesBlackFridayPageProps {
  lang: string;
  pathname: string;
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  textContent: BlackFridayPpcText;
  footerLang: FooterText;
  hideLanguage: boolean;
}

const AffiliatesBlackFridayPage = ({ pathname, ...props }: AffiliatesBlackFridayPageProps): JSX.Element => {
  const { campaign, couponCode, heroImage, popularPlanSize } = useAffiliatesCampaignOfferConfig(pathname);

  if (!campaign) {
    return <></>;
  }

  return (
    <BlackFridayCampaignTemplate
      {...props}
      config={{
        heroImage,
        metatagsId: METATAGS_ID_BY_CAMPAIGN[campaign],
        couponCode,
        couponCodeForLifetime: couponCode,
        popularPlanSize,
      }}
    />
  );
};

export async function getStaticPaths({ locales }) {
  return {
    paths: buildLocalizedPaths(locales, ALLOWED_PATHS),
    fallback: 'blocking',
  };
}

export function getStaticProps(ctx: GetStaticPropsContext) {
  const pathname = ctx.params?.filename as string;
  const campaign = CAMPAIGN_BY_PATH[pathname];

  if (!campaign) {
    return { notFound: true };
  }

  const enforcedLocale = ENFORCED_LOCALE[pathname];
  const resolvedLang = enforcedLocale ?? ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${resolvedLang}/metatags-descriptions.json`);
  const navbarLang = require(`@/assets/lang/${resolvedLang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${resolvedLang}/footer.json`);
  const langJson = require(`@/assets/lang/${resolvedLang}/affiliates-black-friday.json`);
  const textContent = formatText(langJson, langJson.campaigns[campaign]);

  return {
    props: {
      lang: resolvedLang,
      pathname,
      metatagsDescriptions,
      navbarLang,
      textContent,
      footerLang,
      hideLanguage: !!enforcedLocale,
    },
  };
}

export default AffiliatesBlackFridayPage;
