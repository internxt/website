import { getImage } from '@/lib/getImage';
import { useRouter } from 'next/router';

export const HomePageBannerForMobile = () => {
  const router = useRouter();
  const lang = router.locale;

  const bgImage = getImage('/images/campaigns/summer/SummerCampaign.png');
  const handleOnClick = () => {
    router.push('#priceTable');
  };
  return (
    <div
      className={'relative  flex w-screen flex-col items-center justify-center pb-80 md:pb-[900px] lg:hidden'}
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundPosition: '100% 95%',
        backgroundSize: '200%',
      }}
    ></div>
  );
};
