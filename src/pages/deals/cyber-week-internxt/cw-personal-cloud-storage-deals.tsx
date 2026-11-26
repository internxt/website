import { GetStaticPropsContext } from 'next';
import { getDealsProps } from '@/lib/helpers/deals';
import { PromoCodeName } from '@/lib/types';
import { Campaign } from '@/lib/helpers/campaigns';
import BlackFridayDealsTemplate from '../../../components/templates/blackFridayDealsTemplate';

const CyberWeekPage = (props) => {
  return <BlackFridayDealsTemplate {...props} />;
};

export async function getStaticProps(ctx: GetStaticPropsContext) {
  return getDealsProps(
    ctx,
    {
      heroImage: '/images/black-friday/bf-personal-cloud-storage.webp',
      metatagsId: 'cyber-week-personal-cloud-storage',
      couponCode: PromoCodeName.seolp,
      couponCodeForLifetime: PromoCodeName.seolp,
      popularPlanSize: '5TB',

      moreDealsUrls: {
        card1: '/deals/cyber-week-internxt',
        card2: 'cw-cloud-storage-deals',
      },
    },
    {
      jsonFileName: 'black-friday-personal-cloud-storage',
      campaign: Campaign.CyberWeek,
    },
  );
}

export default CyberWeekPage;
