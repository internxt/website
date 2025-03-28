import { getImage } from '@/lib/getImage';
import { CheckCircle } from '@phosphor-icons/react';
import Image from 'next/legacy/image';
import { useRouter } from 'next/router';
import styles from '@/components/black-friday/BF-HeroSection.module.scss';

export const HomePageBannerForMobile = () => {
  const router = useRouter();
  const lang = router.locale;
  const textContent = require(`../../assets/lang/${lang}/home.json`);
  const handleOnClick = () => {
    router.push('#priceTable');
  };
  return (
    <div className={`${styles.linearGradient} flex w-screen flex-col items-center justify-center lg:hidden pb-20`}>
      <div className="flex flex-col items-center justify-center gap-4 pt-5">
        <p className="flex w-max rounded-md border-green-dark bg-green-1 px-2 py-1 text-sm font-medium text-white">
          {textContent.HeroSection.TitleAndOnePlanV2.saveLabel}
        </p>
        <p className="text-center text-4xl font-bold text-white px-5">
          {textContent.HeroSection.TitleAndOnePlanV2.title}
        </p>
        <p className="text-center text-2xl text-white">
          {textContent.HeroSection.TitleAndOnePlanV2.subtitle}
        </p>
        <button
          onClick={handleOnClick}
          className="flex w-max items-center rounded-lg bg-primary px-5 py-3 text-lg font-medium text-white"
        >
          {textContent.HeroSection.TitleAndOnePlanV2.cta}
        </button>
        <div className="flex flex-row items-center space-x-3 pt-2 ">
          <CheckCircle size={24} className="text-green-1" weight="fill" />
          <p className="whitespace-nowrap font-medium text-white lg:text-lg">
            {textContent.HeroSection.TitleAndOnePlanV2.guarantee}
          </p>
        </div>
        <Image
          src={getImage('/images/security-day/internxt_security_day.png')}
          width={350}
          height={300}
          quality={100}
          alt="World Secure Day"
          objectFit="contain"
        />
      </div>
    </div>
  );
};
