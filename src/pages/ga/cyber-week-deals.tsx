import { GetStaticPropsContext } from 'next';
import { getDealsProps } from '@/lib/helpers/deals';
import { PromoCodeName } from '@/lib/types';
import { Campaign } from '@/lib/helpers/campaigns';
import BlackFridayDealsTemplate from '@/components/templates/blackFridayDealsTemplate';

const GaCyberWeekDeals = (props) => {
  return <BlackFridayDealsTemplate {...props} hideNavbarLinks hideNavbarCTA />;
};

export async function getStaticProps(ctx: GetStaticPropsContext) {
  return getDealsProps(
    ctx,
    {
      heroImage: '/images/black-friday/bf-general.webp',
      metatagsId: 'cyber-week',
      couponCode: PromoCodeName.GADS85CW90,
      couponCodeForLifetime: PromoCodeName.GADS85CW90,
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

export default GaCyberWeekDeals;
