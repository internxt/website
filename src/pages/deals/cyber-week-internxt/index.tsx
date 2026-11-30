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
      heroImage: '/images/black-friday/bf-general.webp',
      metatagsId: 'cyber-week',
      couponCode: PromoCodeName.seolp,
      couponCodeForLifetime: PromoCodeName.seolp,
      popularPlanSize: '5TB',
      moreDealsUrls: {
        card1: 'cyber-week-internxt/cw-cloud-storage-deals',
        card2: 'cyber-week-internxt/cw-personal-cloud-storage-deals',
      },
    },
    {
      jsonFileName: 'black-friday',
      campaign: Campaign.CyberWeek,
    },
  );
}

export default CyberWeekPage;
