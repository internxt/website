import { GetStaticPropsContext } from 'next';
import { getDealsProps } from '@/lib/helpers/deals';
import { PromoCodeName } from '@/lib/types';
import BlackFridayDealsTemplate from '@/components/templates/blackFridayDealsTemplate';

const BlackFridayPage = (props) => {
  return <BlackFridayDealsTemplate {...props} />;
};

export async function getStaticProps(ctx: GetStaticPropsContext) {
  return getDealsProps(
    ctx,
    {
      heroImage: '/images/black-friday/bf-general.webp',
      metatagsId: 'black-friday',
      couponCode: PromoCodeName.OFFSUB,
      couponCodeForLifetime: PromoCodeName.OFFLFT,
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

export default BlackFridayPage;
