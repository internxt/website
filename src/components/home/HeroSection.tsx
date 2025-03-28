import { HomePageBannerForMobile } from '../banners/HomePageBannerForMobile';
import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import { HomeText } from '@/assets/types/home';
import styles from '@/components/black-friday/BF-HeroSection.module.scss';
import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';
import TitleAndOnePlan from './components/heroSection/TitleAndOnePlan';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const Animation = dynamic(() => import('./components/Animation'));

interface HeroSectionForHomeProps {
  textContent: HomeText['HeroSection'];
  lang: string;
  isHomePageV2?: boolean;
}

export default function HeroSection({ textContent, lang, isHomePageV2 }: HeroSectionForHomeProps): JSX.Element {
  const router = useRouter();
  const { dialogIsOpen } = useGlobalDialog();
  const shouldShowMobileBanner = dialogIsOpen(GlobalDialog.MobileBannerForHome);
  const mobileImage = getImage("/images/security-day/internxt_security_day.png");
  const componentsFlow = isHomePageV2 ? 'flex-col-reverse' : 'flex-col';
  const titleAndOnePlanText = isHomePageV2 ? textContent.TitleAndOnePlanV2 : textContent.TitleAndOnePlan;
  const handleOnClick = () => {
    router.push('/pricing');
  };
  return (
    <section className="overflow-hidden">
      <div className="relative mx-4 pt-24 lg:pt-0 xl:mx-32">
        <div
          className={`${styles.linearGradient} absolute inset-y-0 left-1/2 z-0 hidden w-screen -translate-x-1/2 bg-cover bg-center bg-no-repeat lg:block `}
        />
        <div className="relative mx-auto flex w-full max-w-screen-xl flex-col items-center justify-between lg:flex-row lg:items-center ">
          <div className="absolute inset-y-0 left-1/2 z-0 hidden w-screen -translate-x-1/2 bg-cover bg-center bg-no-repeat md:flex" />
          <div
            className={`flex w-screen flex-shrink-0 ${componentsFlow} items-center justify-center  text-center sm:w-auto sm:px-0 md:ml-0 lg:ml-0 lg:items-start lg:text-left`}
          >
            {!shouldShowMobileBanner ? (
              <div className="flex lg:hidden">
                <Image
                  loading="eager"
                  src={mobileImage}
                  draggable="false"
                  quality={100}
                  width={600}
                  height={1000}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="HeroSection Mobile Image"
                  onClick={handleOnClick}
                />
              </div>
            ) : (
              <HomePageBannerForMobile />
            )}
            <TitleAndOnePlan textContent={titleAndOnePlanText} lang={lang} />
          </div>

          <div className=" hidden w-full justify-end pt-24 lg:flex pb-20 px-20">
            <Image
              loading="eager"
              src={getImage("/images/security-day/internxt_security_day.png")}
              draggable="false"
              quality={100}
              width={475}
              height={437}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="HeroSection Image"
              onClick={handleOnClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
