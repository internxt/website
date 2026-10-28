import { GetStaticPropsContext } from 'next';
import { AffiliatesBlackFridayText } from '@/assets/types/affiliatesBlackFriday';
import { BlackFridayPpcText } from '@/assets/types/blackFridayPpc';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import BlackFridayPpcTemplate from '@/components/templates/blackFridayPpcTemplate';
import {
  ALLOWED_PATHS,
  CAMPAIGN_BY_PATH,
  ENFORCED_LOCALE,
  useAffiliatesBlackFridayConfig,
} from '@/hooks/useAffiliatesBlackFridayConfig';
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
  const { campaign, couponCode, heroImage, popularPlanSize } = useAffiliatesBlackFridayConfig(pathname);

  if (!campaign) {
    return <></>;
  }

  return (
    <BlackFridayPpcTemplate
      {...props}
      config={{
        heroImage,
        metatagsId: campaign,
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

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const pathname = ctx.params?.filename as string;
  const campaign = CAMPAIGN_BY_PATH[pathname];

  if (!campaign) {
    return { notFound: true };
  }

  const enforcedLocale = ENFORCED_LOCALE[pathname];
  const resolvedLang = enforcedLocale ?? ctx.locale;

  const navbarLang = require(`@/assets/lang/${resolvedLang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${resolvedLang}/footer.json`);
  const langJson: AffiliatesBlackFridayText = require(`@/assets/lang/${resolvedLang}/affiliates-black-friday.json`);

  const campaignText = langJson.campaigns[campaign];

  const textContent: BlackFridayPpcText = {
    HeroSection: { ...langJson.shared.HeroSection, ...campaignText.HeroSection },
    TableSection: langJson.shared.TableSection,
    ReviewSection: langJson.shared.ReviewSection,
    WhyChooseSection: campaignText.WhyChooseSection,
    CoreFeatures: langJson.shared.CoreFeatures,
    CtaSection: campaignText.CtaSection,
    FaqSection: campaignText.FaqSection,
  };

  // Each campaign carries its own title and meta description, so the template looks them up
  // by campaign id instead of reading the site-wide metatags file.
  const metatagsDescriptions: MetatagsDescription[] = [{ id: campaign, ...campaignText.metatags }];

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
