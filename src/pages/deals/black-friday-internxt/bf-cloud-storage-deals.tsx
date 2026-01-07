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
      heroImage: '/images/black-friday/bf-cloud-storage.webp',
      metatagsId: 'black-friday-cloud-storage',
      couponCode: PromoCodeName.FreePlanUpsell,
      couponCodeForLifetime: PromoCodeName.FreePlanUpsell,
      popularPlanSize: '5TB',
      hideBusinessCards: true,
      hideBusinessSelector: true,

      moreDealsUrls: {
        card1: '/deals/black-friday-internxt',
        card2: 'bf-personal-cloud-storage-deals',
      },
    },
    {
      jsonFileName: 'black-friday-cloud-storage',
    },
  );
}

export default BlackFridayPage;
