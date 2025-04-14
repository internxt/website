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
  const mobileImage = getImage('/images/security-day/internxt_security_day.png');
  const componentsFlow = isHomePageV2 ? 'flex-col-reverse' : 'flex-col';
  const titleAndOnePlanText = isHomePageV2 ? textContent.TitleAndOnePlanV2 : textContent.TitleAndOnePlan;
  const handleOnClick = () => {
    router.push('/pricing');
  };
  return (
    <section className="overflow-hidden">
      <div className="relative mx-4 lg:pt-0 xl:mx-32">
        <div
          className={`${styles.linearGradient} absolute inset-y-0 left-1/2 z-0 hidden w-screen -translate-x-1/2 bg-cover bg-center bg-no-repeat lg:block`}
          style={{ backgroundImage: `url('${getImage('/images/campaigns/starwars/bg.webp')}')` }}
        />

        <div className="relative mx-auto flex w-full max-w-screen-xl flex-col-reverse items-center justify-between gap-y-10 lg:flex-row lg:gap-x-12 xl:gap-x-20">
          {/* Mobile Banner or Image */}
          <div
            className={`flex w-full flex-col items-center text-center lg:items-start lg:text-left ${componentsFlow}`}
          >
            {!shouldShowMobileBanner ? (
              <div className="mb-4 flex w-full lg:hidden">
                <Image
                  loading="eager"
                  src={mobileImage}
                  draggable="false"
                  quality={100}
                  width={600}
                  height={1000}
                  className="mx-auto h-auto w-full max-w-[400px] object-contain"
                  alt="HeroSection Mobile Image"
                  onClick={handleOnClick}
                />
              </div>
            ) : (
              <HomePageBannerForMobile />
            )}

            <div className="w-full max-w-[600px] px-4 lg:px-0">
              <TitleAndOnePlan textContent={titleAndOnePlanText} lang={lang} />
            </div>
          </div>

          <div className="hidden w-full max-w-[640px] justify-end pt-12 lg:flex xl:pt-20">
            <Image
              loading="eager"
              src={getImage('/images/campaigns/starwars/internxt_may4th.webp')}
              draggable="false"
              quality={100}
              width={463}
              height={441}
              className="h-auto w-full object-contain"
              alt="HeroSection Image"
              onClick={handleOnClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
