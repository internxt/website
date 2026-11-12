import { GetStaticPropsContext } from 'next';
import { getDealsProps } from '@/lib/helpers/deals';
import { PromoCodeName } from '@/lib/types';
import BlackFridayDealsTemplate from '@/components/templates/blackFridayDealsTemplate';

const BlackFridayPersonalCloudStorageDeals = (props) => {
  return <BlackFridayDealsTemplate {...props} />;
};

export async function getStaticProps(ctx: GetStaticPropsContext) {
  return getDealsProps(
    ctx,
    {
      heroImage: '/images/black-friday/bf-personal-cloud-storage.webp',
      metatagsId: 'black-friday-personal-cloud-storage',
      couponCode: PromoCodeName.OFFSUB,
      couponCodeForLifetime: PromoCodeName.OFFLFT,
      popularPlanSize: '5TB',
      moreDealsUrls: {
        card1: 'black-friday',
        card2: 'bf-cloud-storage-deals',
      },
    },
    {
      jsonFileName: 'black-friday-personal-cloud-storage',
    },
  );
}

export default BlackFridayPersonalCloudStorageDeals;
