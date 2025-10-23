import { GetServerSidePropsContext } from 'next';
import { PromoCodeName } from '@/lib/types';
import DealsTemplate from '@/components/templates/dealsTemplate';
import { getDealsProps } from '@/lib/helpers/deals';

const DealsPage = (props) => {
  return <DealsTemplate {...props} />;
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return getDealsProps(
    ctx,
    {
      heroImage: '/images/deals/cloud-storage-lifetime.webp',
      metatagsId: 'free-cloud-storage-lifetime-deals',
      couponCode: PromoCodeName.FreePlanUpsell,
      couponCodeForLifetime: PromoCodeName.FreePlanUpsell,
      popularPlanSize: '5TB',
      hideBusinessCards: true,
      hideBusinessSelector: true,
      moreDealsUrls: {
        card1: '/deals',
        card2: 'free-cloud-storage-deals',
      },
    },
    {
      jsonFileName: 'cloud-storage-lifetime',
    },
  );
}

export default DealsPage;
