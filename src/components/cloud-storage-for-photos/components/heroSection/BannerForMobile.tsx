import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';
import { getImage } from '@/lib/getImage';
import { CheckCircle } from '@phosphor-icons/react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const BannerForMobile = () => {
  const router = useRouter();
  const lang = router.locale;
  const textContent = require(`../../../../assets/lang/${lang}/cloud-storage-for-photos.json`);
  const handleOnClick = () => {
    router.push('/pricing');
  };
  return (
    <div className="flex flex-col items-center justify-center lg:hidden">
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-center text-5xl font-bold text-gray-100">
          {textContent.HeroSection.TitleAndOnePlanV2.title}
        </p>
        <p className="pt-4 text-center text-xl">
          <span className="text-gray-100">{textContent.HeroSection.TitleAndOnePlanV2.description}</span>
        </p>
        <button
          onClick={handleOnClick}
          className="flex w-max items-center rounded-lg bg-primary px-5 py-3 text-lg font-medium text-white"
        >
          {textContent.HeroSection.TitleAndOnePlanV2.cta}
        </button>

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
