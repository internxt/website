import { GetStaticPropsContext } from 'next';
import { PromoCodeName } from '@/lib/types';
import { Campaign } from '@/lib/helpers/campaigns';
import BlackFridayDealsTemplate from '../../../components/templates/blackFridayDealsTemplate';
import { getDealsProps } from '@/lib/helpers/deals';

const CyberWeekPage = (props) => {
  return <BlackFridayDealsTemplate {...props} />;
};

export async function getStaticProps(ctx: GetStaticPropsContext) {
  return getDealsProps(
    ctx,
    {
      heroImage: '/images/black-friday/bf-cloud-storage.webp',
      metatagsId: 'cyber-week-cloud-storage',
      couponCode: PromoCodeName.seolp,
      couponCodeForLifetime: PromoCodeName.seolp,
      popularPlanSize: '5TB',

      moreDealsUrls: {
        card1: '/deals/cyber-week-internxt',
        card2: 'cw-personal-cloud-storage-deals',
      },
    },
    {
      jsonFileName: 'black-friday-cloud-storage',
      campaign: Campaign.CyberWeek,
    },
  );
}

export default CyberWeekPage;
