import { GetServerSidePropsContext } from 'next';
import { PromoCodeName } from '@/lib/types';
import BlackFridayDealsTemplate from '../../../components/templates/blackFridayDealsTemplate';
import { getDealsProps } from '@/lib/helpers/deals';

const BlackFridayPage = (props) => {
  return <BlackFridayDealsTemplate {...props} />;
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return getDealsProps(
    ctx,
    {
      metatagsId: 'black-friday-cloud-storage',
      couponCode: PromoCodeName.BlackFriday,
      couponCodeForLifetime: PromoCodeName.BlackFriday,
      popularPlanSize: '5TB',
      hideBusinessCards: true,
      hideBusinessSelector: true,
    },
    {
      jsonFileName: 'black-friday-cloud-storage',
    },
  );
}

export default BlackFridayPage;
