import { HomePageBannerForMobile } from '../banners/HomePageBannerForMobile';
import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import { HomeText } from '@/assets/types/home';
import Header from '../shared/Header';
import { Check, Star } from '@phosphor-icons/react';
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
  const mobileImage = getImage('/images/campaigns/superbowl/internxt_superbowl2025_mobile.webp');
  const blurBgImage = getImage('/images/campaigns/euro/grass.webp');
  const componentsFlow = isHomePageV2 ? 'flex-col-reverse' : 'flex-col';
  const titleAndOnePlanText = isHomePageV2 ? textContent.TitleAndOnePlanV2 : textContent.TitleAndOnePlan;
  const handleOnClick = () => {
    router.push('/pricing');
  };
  return (
    <section className="overflow-hidden">
      <div className="relative mx-4 pb-12 pt-24 lg:mx-10 lg:pt-2 xl:mx-32">
        <div
          className="absolute inset-y-0 left-1/2 z-0 hidden w-screen -translate-x-1/2 bg-cover bg-center bg-no-repeat lg:block "
          style={{ backgroundImage: `url('${blurBgImage}')` }}
        />
        <div className="relative mx-auto flex w-full max-w-screen-xl flex-col items-center justify-between lg:flex-row lg:items-center lg:py-10">
          <div className="absolute inset-y-0 left-1/2 z-0 hidden w-screen -translate-x-1/2 bg-cover bg-center bg-no-repeat md:flex" />
          <div
            className={`flex w-screen flex-shrink-0 ${componentsFlow} items-center justify-center gap-5 px-5 pt-5 text-center sm:w-auto sm:px-0 md:ml-2 lg:ml-0 lg:items-start lg:text-left`}
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
                  alt="Superbowl Mobile Image"
                  onClick={handleOnClick}
                />
              </div>
            ) : (
              <HomePageBannerForMobile />
            )}

            <TitleAndOnePlan textContent={titleAndOnePlanText} />
          </div>
          <div className="relative ml-32  hidden h-screen max-h-[900px] w-full justify-center lg:flex">
            <Image
              src={getImage('/images/campaigns/superbowl/dust.png')}
              width={920}
              height={900}
              alt="Dust Hero Section"
              className="absolute -left-14 top-40 z-0"
            />
            <Image
              src={getImage('/images/campaigns/superbowl/internxt_superbowl2025.webp')}
              width={586}
              height={385}
              alt="SuperBowl Scorer"
              className="absolute left-0 top-40 z-10 object-contain"
            />
          </div>

          {/* Desktop animation/image
         
          {!shouldShowMobileBanner ? (
            <div className=" hidden h-screen max-h-[600px] w-full justify-center lg:flex">
              <Animation />
            </div>
          ) : undefined}
          */}
        </div>
      </div>
    </section>
  );
}
