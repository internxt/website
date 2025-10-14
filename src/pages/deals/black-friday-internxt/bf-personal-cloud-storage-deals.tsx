import { GetServerSidePropsContext } from 'next';

import { getBlackFridayDealProps } from '@/lib/blackFridayDeals.helper';
import { PromoCodeName } from '@/lib/types';
import BlackFridayDealsTemplate from './blackFridayDealsTemplate';

const BlackFridayPage = (props) => {
  return <BlackFridayDealsTemplate {...props} />;
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return getBlackFridayDealProps(
    ctx,
    {
      metatagsId: 'black-friday-personal-cloud-storage',
      couponCode: PromoCodeName.SoftSales85,
      couponCodeForLifetime: PromoCodeName.SoftSales85,
      popularPlanSize: '5TB',
      hideBusinessCards: true,
      hideBusinessSelector: true,
    },
    {
      jsonFileName: 'black-friday-personal-cloud-storage',
    },
  );
}

export default BlackFridayPage;
