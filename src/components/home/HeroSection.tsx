import dynamic from 'next/dynamic';

import { HomePageBannerForMobile } from '../banners/HomePageBannerForMobile';
import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import { TitleAndSignup } from './components/heroSection/TitleAndSignup';
import { TitleAndOnePlan } from './components/heroSection/TitleAndOnePlan';
const Animation = dynamic(() => import('./components/Animation'));

interface HeroSectionForHomeProps {
  textContent: any;
  lang: string;
  isHomePageV2?: boolean;
}

export default function HeroSection({ textContent, isHomePageV2 }: HeroSectionForHomeProps): JSX.Element {
  const mobileImage = getImage('/images/home/image_mobile.webp');

  const blurBgImage = getImage('/images/home/header/bg.svg');

  return (
    <section className="overflow-hidden">
      <div className="relative mx-4 pt-24 pb-12 lg:mx-10 lg:pt-12 xl:mx-32">
        <div
          className="absolute inset-y-0 left-1/2 z-0 hidden w-screen -translate-x-1/2 bg-cover bg-center bg-no-repeat md:flex"
          style={{ backgroundImage: `url('${blurBgImage}')`, filter: 'blur(24px)' }}
        />

        <div className="relative mx-auto flex w-full max-w-screen-xl flex-col items-center justify-between lg:flex-row lg:items-stretch lg:py-10">
          <div className="absolute inset-y-0 left-1/2 z-0 hidden w-screen -translate-x-1/2 bg-cover bg-center bg-no-repeat md:flex" />
          <div className="flex w-screen flex-shrink-0 flex-col items-center justify-center gap-5 px-5 pt-5 text-center sm:w-auto  sm:px-0 md:ml-2 lg:ml-0 lg:items-start lg:text-left">
            <div className="flex lg:hidden">
              <Image
                loading="eager"
                src={mobileImage}
                draggable="false"
                quality={100}
                width={600}
                height={450}
                alt="Laptop and phone with Internxt app"
              />
            </div>
            <HomePageBannerForMobile />

            {isHomePageV2 ? (
              <TitleAndOnePlan textContent={textContent.TitleAndOnePlan} />
            ) : (
              <TitleAndSignup textContent={textContent} />
            )}
          </div>

          {/* Desktop animation/image */}
          <div className=" hidden h-screen max-h-[600px] w-full justify-center lg:flex">
            <Animation />
          </div>
        </div>
        {/* {isHomePageV2 ? (
          <div className="flex flex-row justify-center gap-2 pt-10 lg:pt-0">
            <ArrowCircleDown size={32} className="animate-bounce text-primary" />
            <p className="z-50 font-medium text-gray-80">{textContent.youKnow}</p>
          </div>
        ) : undefined} */}
      </div>
    </section>
  );
}
