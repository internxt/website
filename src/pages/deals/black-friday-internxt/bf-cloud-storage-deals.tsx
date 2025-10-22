import { GetServerSidePropsContext } from 'next';

import { getBlackFridayDealProps } from '@/lib/blackFridayDeals.helper';
import { PromoCodeName } from '@/lib/types';
import BlackFridayDealsTemplate from '../../../components/templates/blackFridayDealsTemplate';

const BlackFridayPage = (props) => {
  return <BlackFridayDealsTemplate {...props} />;
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return getBlackFridayDealProps(
    ctx,
    {
      metatagsId: 'black-friday-cloud-storage',
      couponCode: PromoCodeName.BlackFriday,
      couponCodeForLifetime: PromoCodeName.BlackFriday,
      popularPlanSize: '5TB',
      hideBusinessCards: true,
      hideBusinessSelector: true,
      moreDealsUrls: {
        card1: '/deals/black-friday-internxt',
        card2: 'black-friday-internxt/bf-personal-cloud-storage-deals',
      },
    },
    {
      jsonFileName: 'black-friday-cloud-storage',
    },
  );
}

export default BlackFridayPage;
