import { getImage } from '@/lib/getImage';

export const HomePageBannerForMobile = () => {
  const bgImage = getImage('/images/campaigns/summer/SummerCampaign.png');

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
