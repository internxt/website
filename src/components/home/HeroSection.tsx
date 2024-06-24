import dynamic from 'next/dynamic';

import { HomePageBannerForMobile } from '../banners/HomePageBannerForMobile';
import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import { TitleAndSignup } from './components/heroSection/TitleAndSignup';
import { TitleAndSurvey } from './components/heroSection/TitleAndSurvey';
const Header = dynamic(() => import('@/components/shared/Header'));
const Animation = dynamic(() => import('./components/Animation'));

interface HeroSectionForHomeProps {
  textContent: any;
  lang: string;
  isHomePageV2?: boolean;
}

export default function HeroSection({ textContent, lang, isHomePageV2 }: HeroSectionForHomeProps) {
  return (
    <section className="overflow-hidden">
      <div className="relative mx-4 pt-24 lg:mx-10 lg:pt-12 xl:mx-32">
        <div
          className="absolute inset-y-0 left-1/2 z-0 hidden w-screen -translate-x-1/2 bg-cover bg-center bg-no-repeat md:flex"
          style={{ backgroundImage: "url('images/home/header/bg.svg')", filter: 'blur(24px)' }}
        />

        <div className="relative mx-auto flex w-full max-w-screen-xl flex-col items-center justify-between lg:flex-row lg:items-stretch lg:py-10">
          <div className="absolute inset-y-0 left-1/2 z-0 hidden w-screen -translate-x-1/2 bg-cover bg-center bg-no-repeat md:flex" />
          <div className="flex w-screen flex-shrink-0 flex-col items-center gap-5 px-5 pt-5 text-center sm:w-auto  sm:px-0 md:ml-2 lg:my-28 lg:ml-0 lg:items-start lg:text-left">
            <div className="flex lg:hidden">
              <Image
                loading="eager"
                src={getImage('/images/home/image_mobile.webp')}
                draggable="false"
                quality={100}
                width={600}
                height={450}
                alt="Laptop and phone with Internxt app"
              />
            </div>
            <HomePageBannerForMobile />

            {isHomePageV2 ? (
              <TitleAndSurvey textContent={textContent.TitleAndSurvey} />
            ) : (
              <TitleAndSignup textContent={textContent} />
            )}
          </div>

          {/* Desktop animation/image */}
          <Animation />
        </div>
      </div>
    </section>
  );
}
