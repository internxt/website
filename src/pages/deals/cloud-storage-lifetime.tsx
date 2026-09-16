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
      couponCodeForLifetime: PromoCodeName.FreePlanUpsell,
      popularPlanSize: '5TB',
      hideBusinessCards: true,
      hideBusinessSelector: true,
      moreDealsUrls: {
        card1: '/deals/black-friday-internxt',
        card2: '/deals/black-friday-internxt/bf-personal-cloud-storage-deals',
      },
    },
    {
      jsonFileName: 'cloud-storage-lifetime',
    },
  );
}

export default DealsPage;
