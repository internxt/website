import { GetServerSidePropsContext } from 'next';
import { getDealsProps } from '@/lib/helpers/deals';
import { PromoCodeName } from '@/lib/types';
import BlackFridayDealsTemplate from '../../../components/templates/blackFridayDealsTemplate';

const BlackFridayPage = (props) => {
  return <BlackFridayDealsTemplate {...props} />;
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return getDealsProps(
    ctx,
    {
      heroImage: '/images/black-friday/bf-general.webp',
      metatagsId: 'black-friday',
      couponCode: PromoCodeName.FreePlanUpsell,
      couponCodeForLifetime: PromoCodeName.FreePlanUpsell,
      popularPlanSize: '5TB',
      hideBusinessCards: true,
      hideBusinessSelector: true,
      moreDealsUrls: {
        card1: 'black-friday-internxt/bf-cloud-storage-deals',
        card2: 'black-friday-internxt/bf-personal-cloud-storage-deals',
      },
    },
    {
      jsonFileName: 'black-friday',
    },
  );
}

export default BlackFridayPage;
