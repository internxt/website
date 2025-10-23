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
      heroImage: '/images/deals/deals-generic.webp',
      metatagsId: 'deals',
      couponCode: PromoCodeName.BlackFriday,
      couponCodeForLifetime: PromoCodeName.BlackFriday,
      popularPlanSize: '5TB',
      hideBusinessCards: true,
      hideBusinessSelector: true,
      moreDealsUrls: {
        card1: 'deals/cloud-storage-lifetime',
        card2: 'deals/free-cloud-storage-deals',
      },
    },
    {
      jsonFileName: 'deals',
    },
  );
}

export default DealsPage;
