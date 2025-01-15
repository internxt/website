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
  const mobileImage = getImage('/images/privacy_week/internxt_dataprivacyweek_header.webp');
  const blurBgImage = getImage('/images/home/header/bg.svg');
  const componentsFlow = isHomePageV2 ? 'flex-col-reverse' : 'flex-col';
  const titleAndOnePlanText = isHomePageV2 ? textContent.TitleAndOnePlanV2 : textContent.TitleAndOnePlan;
  const handleOnClick = () => {
    router.push('/pricing');
  };
  return (
    <section className="overflow-hidden">
      <div className="relative mx-4 pb-12 pt-24 lg:mx-10 lg:pt-14 xl:mx-32">
        <div
          className="absolute inset-y-0 left-1/2 z-0 hidden w-screen -translate-x-1/2 bg-cover bg-center bg-no-repeat md:flex"
          style={{ backgroundImage: `url('${blurBgImage}')`, filter: 'blur(24px)' }}
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
                  height={450}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="Laptop and phone with Internxt app"
                  onClick={handleOnClick}
                />
              </div>
            ) : undefined}

            <TitleAndOnePlan
              textContent={titleAndOnePlanText}
              header={
                <div className="flex flex-col gap-9">
                  <div className="flex flex-col gap-4">
                    <Header maxWidth="max-w-[500px]" className="text-gray-100">
                      {textContent.title.line1} <span className="text-primary">{textContent.title.blueText}</span>
                      {textContent.title.line2}{' '}
                    </Header>
                  </div>
                  <p className="text-xl font-bold text-gray-100">
                    {textContent.TitleAndOnePlan.description.normal1}
                    <span className="text-primary">{textContent.TitleAndOnePlan.description.blue}</span>
                    {textContent.TitleAndOnePlan.description.normal2}
                  </p>
                  <div className="mx-auto flex flex-col gap-2 lg:mx-0">
                    {titleAndOnePlanText.features.map((feat) => (
                      <div className="flex flex-row gap-2" key={feat}>
                        <Check className="text-primary" weight="bold" size={24} />
                        <p className="text-lg font-semibold text-gray-100">{feat}</p>
                      </div>
                    ))}
                  </div>
                </div>
              }
              footer={
                isHomePageV2 ? (
                  <div className="flex flex-row items-center justify-center gap-2 pt-2 text-gray-100 lg:justify-start">
                    <Star size={24} weight="fill" className="text-[#E40784]" />
                    <div className="flex flex-row items-center gap-1">
                      <p className="whitespace-nowrap font-semibold text-gray-70">{titleAndOnePlanText.guarantee}</p>
                      <Image
                        src={getImage('/logos/featured/techradar-pink.svg')}
                        width={98}
                        height={16}
                        alt="Techradar logo"
                      />
                    </div>
                  </div>
                ) : undefined
              }
            />
          </div>
          <div className=" hidden h-screen max-h-[700px] w-full justify-center lg:flex">
            <Image
              src={getImage('/images/privacy_week/internxt_dataprivacyweek_header.webp')}
              width={619}
              height={576}
              alt="Header Logo"
              className="object-contain"
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
