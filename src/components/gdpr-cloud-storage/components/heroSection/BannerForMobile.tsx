import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';
import { getImage } from '@/lib/getImage';
import { CheckCircle } from '@phosphor-icons/react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const BannerForMobile = () => {
  const router = useRouter();
  const lang = router.locale;
  const textContent = require(`../../../../assets/lang/${lang}/gdpr-cloud-storage.json`);
  const handleOnClick = () => {
    router.push('/pricing');
  };
  return (
    <div className="flex flex-col items-center justify-center lg:hidden">
      <div className="flex flex-col items-center justify-center gap-4">
        <p className=" text-center text-4xl font-bold text-gray-100">
          {textContent.HeroSection.TitleAndOnePlanV2.title}
        </p>
        <button
          onClick={handleOnClick}
          className="flex w-max items-center rounded-lg bg-primary px-5 py-3 text-lg font-medium text-white"
        >
          {textContent.HeroSection.TitleAndOnePlanV2.cta}
        </button>
        <div className="flex flex-row items-center space-x-3 pt-2 ">
          <CheckCircle size={24} className="text-green-1" weight="fill" />
          <p className="whitespace-nowrap font-medium text-gray-80 lg:text-lg">
            {textContent.HeroSection.TitleAndOnePlanV2.guarantee}
          </p>
        </div>
        <Image
          src={getImage('/images/campaigns/spring/image_mobile.webp')}
          width={380}
          height={300}
          quality={100}
          alt="Valentines Mobile"
        />
      </div>
    </div>
  );
};
