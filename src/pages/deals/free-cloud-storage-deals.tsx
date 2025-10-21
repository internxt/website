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
      metatagsId: 'free-cloud-storage-deals',
      couponCode: PromoCodeName.BlackFriday,
      couponCodeForLifetime: PromoCodeName.BlackFriday,
      popularPlanSize: '5TB',
      hideBusinessCards: true,
      hideBusinessSelector: true,
    },
    {
      jsonFileName: 'free-cloud-storage',
    },
  );
}

export default DealsPage;
