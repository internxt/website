import { GetStaticPropsContext } from 'next';
import { getDealsProps } from '@/lib/helpers/deals';
import { PromoCodeName } from '@/lib/types';
import { Campaign } from '@/lib/helpers/campaigns';
import BlackFridayDealsTemplate from '@/components/templates/blackFridayDealsTemplate';

const GaCyberWeekCloudStorageDeals = (props) => {
  return <BlackFridayDealsTemplate {...props} hideNavbarLinks hideNavbarCTA />;
};

export async function getStaticProps(ctx: GetStaticPropsContext) {
  return getDealsProps(
    ctx,
    {
      heroImage: '/images/black-friday/bf-cloud-storage.webp',
      metatagsId: 'cyber-week-cloud-storage',
      couponCode: PromoCodeName.GADS85CW90,
      couponCodeForLifetime: PromoCodeName.GADS85CW90,
      popularPlanSize: '5TB',
      moreDealsUrls: {
        card1: 'cyber-week-deals',
        card2: 'cw-personal-cloud-storage-deals',
      },
    },
    {
      jsonFileName: 'black-friday-cloud-storage',
      campaign: Campaign.CyberWeek,
    },
  );
}

export default GaCyberWeekCloudStorageDeals;
