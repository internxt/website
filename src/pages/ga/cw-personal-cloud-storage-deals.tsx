import { GetStaticPropsContext } from 'next';
import { getDealsProps } from '@/lib/helpers/deals';
import { PromoCodeName } from '@/lib/types';
import { Campaign } from '@/lib/helpers/campaigns';
import BlackFridayDealsTemplate from '@/components/templates/blackFridayDealsTemplate';

const GaCyberWeekPersonalCloudStorageDeals = (props) => {
  return <BlackFridayDealsTemplate {...props} hideNavbarLinks hideNavbarCTA />;
};

export async function getStaticProps(ctx: GetStaticPropsContext) {
  return getDealsProps(
    ctx,
    {
      heroImage: '/images/black-friday/bf-personal-cloud-storage.webp',
      metatagsId: 'cyber-week-personal-cloud-storage',
      couponCode: PromoCodeName.GADS85CW90,
      couponCodeForLifetime: PromoCodeName.GADS85CW90,
      popularPlanSize: '5TB',
      moreDealsUrls: {
        card1: 'cyber-week-deals',
        card2: 'cw-cloud-storage-deals',
      },
    },
    {
      jsonFileName: 'black-friday-personal-cloud-storage',
      campaign: Campaign.CyberWeek,
    },
  );
}

export default GaCyberWeekPersonalCloudStorageDeals;
