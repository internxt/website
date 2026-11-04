import { GetStaticPropsContext } from 'next';
import { getDealsProps } from '@/lib/helpers/deals';
import { PromoCodeName } from '@/lib/types';
import BlackFridayDealsTemplate from '@/components/templates/blackFridayDealsTemplate';

const FbBlackFridayDeals = (props) => {
  return <BlackFridayDealsTemplate {...props} hideNavbarLinks hideNavbarCTA />;
};

export async function getStaticProps(ctx: GetStaticPropsContext) {
  return getDealsProps(
    ctx,
    {
      heroImage: '/images/black-friday/bf-general.webp',
      metatagsId: 'black-friday',
      couponCode: PromoCodeName.META85,
      couponCodeForLifetime: PromoCodeName.META85,
      popularPlanSize: '5TB',
      moreDealsUrls: {
        card1: 'bf-cloud-storage-deals',
        card2: 'bf-personal-cloud-storage-deals',
      },
    },
    {
      jsonFileName: 'black-friday',
    },
  );
}

export default FbBlackFridayDeals;
