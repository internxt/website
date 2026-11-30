import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { getDealsProps } from '@/lib/helpers/deals';
import { PromoCodeName } from '@/lib/types';
import { Campaign } from '@/lib/helpers/campaigns';
import BlackFridayDealsTemplate from '@/components/templates/blackFridayDealsTemplate';
import { COUPON_CODES } from '@/hooks/useAffiliatesCampaignOfferConfig';

const AffiliatesCyberWeekDeals = ({ config, ...props }: any) => {
  const router = useRouter();
  const coupon = COUPON_CODES[router.query.coupon as string] ? (router.query.coupon as string) : '';
  const couponCode = COUPON_CODES[coupon] ?? config.couponCode;
  const moreDealsUrls = coupon
    ? { card1: `${config.moreDealsUrls.card1}?coupon=${coupon}`, card2: `${config.moreDealsUrls.card2}?coupon=${coupon}` }
    : config.moreDealsUrls;

  return (
    <BlackFridayDealsTemplate
      {...props}
      config={{ ...config, couponCode, couponCodeForLifetime: couponCode, moreDealsUrls }}
      hideNavbarLinks
      hideNavbarCTA
    />
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return getDealsProps(
    ctx,
    {
      heroImage: '/images/black-friday/bf-general.webp',
      metatagsId: 'cyber-week',
      couponCode: PromoCodeName.cyberweek90,
      couponCodeForLifetime: PromoCodeName.cyberweek90,
      popularPlanSize: '5TB',
      moreDealsUrls: {
        card1: 'cw-cloud-storage-deals',
        card2: 'cw-personal-cloud-storage-deals',
      },
    },
    {
      jsonFileName: 'black-friday',
      campaign: Campaign.CyberWeek,
    },
  );
}

export default AffiliatesCyberWeekDeals;
