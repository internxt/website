import { HomePageBannerForMobile } from '../banners/HomePageBannerForMobile';
import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import { HomeText } from '@/assets/types/home';
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
  const mobileImage = getImage('/images/home/image_mobile.webp');
  const blurBgImage = getImage('/images/home/header/bg.svg');
  const bgImage = getImage('/images/campaigns/summer/SummerCampaign.png');
  const componentsFlow = isHomePageV2 ? 'flex-col-reverse' : 'flex-col';
  const titleAndOnePlanText = isHomePageV2 ? textContent.TitleAndOnePlanV2 : textContent.TitleAndOnePlan;
  const handleOnClick = () => {
    router.push('/pricing');
  };
  return (
    <section className="overflow-hidden ">
      <div className="relative">
        <div
          style={{
            backgroundImage: `url('${bgImage}')`,
            backgroundPosition: '100% 90%',
          }}
          className="absolute inset-y-0 left-1/2 z-0 w-screen -translate-x-1/2 bg-cover bg-center bg-no-repeat lg:block"
        />
        <div className="relative mx-auto flex w-full max-w-screen-xl flex-col items-center justify-between lg:flex-row lg:items-center ">
          <div className="absolute inset-y-0 left-1/2 z-0 hidden w-screen -translate-x-1/2 bg-cover bg-center bg-no-repeat md:flex" />
          <div className={`flex w-screen flex-shrink-0 ${componentsFlow} px-5 pb-9  pt-24 xl:pl-28 2xl:pl-0`}>
            {!shouldShowMobileBanner ? (
              <div className="hidden">
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
        </div>
      </div>
    </section>
  );
}
