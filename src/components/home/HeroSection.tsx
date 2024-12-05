import dynamic from 'next/dynamic';

import { HomePageBannerForMobile } from '../banners/HomePageBannerForMobile';
import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import { HomeText } from '@/assets/types/home';
import Header from '../shared/Header';
import { Check } from '@phosphor-icons/react';
import TitleAndOnePlan from './components/heroSection/TitleAndOnePlan';
import Link from 'next/link';
import styles from '@/components/black-friday/BF-HeroSection.module.scss';
const Animation = dynamic(() => import('./components/Animation'));

interface HeroSectionForHomeProps {
  textContent: HomeText['HeroSection'];
  lang: string;
  isHomePageV2?: boolean;
}

export default function HeroSection({ textContent, lang, isHomePageV2 }: HeroSectionForHomeProps): JSX.Element {
  const componentsFlow = isHomePageV2 ? 'flex-col-reverse' : 'flex-col';

  const titleAndOnePlanText = isHomePageV2 ? textContent.TitleAndOnePlanV2 : textContent.TitleAndOnePlan;

  return (
    <section className="overflow-hidden">
      <div className="relative mx-4 pb-12 pt-24 lg:mx-10 lg:pt-14 xl:mx-32">
        <div
          className={`absolute inset-y-0 left-1/2 z-0 hidden w-screen -translate-x-1/2 ${styles.radialGradient} bg-cover bg-center bg-no-repeat md:flex`}
        />
        {/* Mobile Version */}
        <div className="lg:hidden">
          <HomePageBannerForMobile />
        </div>

        {/* Desktop version */}
        <div className="relative mx-auto hidden w-full max-w-screen-xl flex-col items-center justify-between lg:flex lg:flex-row lg:items-center lg:py-10">
          <div
            className={`flex w-screen flex-shrink-0 ${componentsFlow} items-center justify-center gap-5 px-5 pt-5 text-center sm:w-auto sm:px-0 md:ml-2 lg:ml-0 lg:items-start lg:text-left`}
          >
            <TitleAndOnePlan
              textContent={titleAndOnePlanText}
              header={
                <div className="flex flex-col gap-9">
                  <div className="flex flex-col gap-4">
                    <Header maxWidth="max-w-[500px]" className="text-white">
                      {textContent.title.line1} <span className="text-primary">{textContent.title.blueText}</span>
                      {textContent.title.line2}{' '}
                    </Header>
                  </div>
                  <p className="text-xl font-bold text-white">
                    {textContent.TitleAndOnePlan.description.normal1}
                    <span className="text-primary">{textContent.TitleAndOnePlan.description.blue}</span>
                    {textContent.TitleAndOnePlan.description.normal2}
                  </p>
                  <div className="mx-auto flex flex-col gap-2 lg:mx-0">
                    {titleAndOnePlanText.features.map((feat) => (
                      <div className="flex flex-row gap-2" key={feat}>
                        <Check className="text-green" weight="bold" size={24} />
                        <p className="text-lg font-semibold text-white">{feat}</p>
                      </div>
                    ))}
                  </div>
                </div>
              }
            />
          </div>

          <div className="relative pt-20">
            <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
              {[...Array(150)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute animate-fall rounded-full bg-white opacity-75`}
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    width: `${Math.random() * 8 + 2}px`,
                    height: `${Math.random() * 8 + 2}px`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${Math.random() * 20 + 10}s`,
                  }}
                ></div>
              ))}
            </div>
            <div className="hidden h-max w-max py-20 lg:flex">
              <Link href="/pricing">
                <div className="relative h-[400px] w-[600px] animate-sleigh-vertical">
                  <Image
                    src={getImage('/images/christmas/internxt_christmas_discount.webp')}
                    alt="Internxt Secure Cloud Storage"
                    draggable={false}
                    quality={100}
                    width={562}
                    height={540}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 rotate-sleigh transform object-cover"
                  />
                  <Image
                    src={getImage('/images/christmas/candy_stick.webp')}
                    alt="Candy Stick"
                    draggable={false}
                    quality={100}
                    width={100}
                    height={119}
                    className="absolute bottom-[0%] left-[50%] animate-[move-candy-stick_2s_ease-in-out_infinite] object-cover"
                  />
                  <Image
                    src={getImage('/images/christmas/christmas_tree.webp')}
                    alt="Christmas Tree"
                    draggable={false}
                    quality={100}
                    width={100}
                    height={100}
                    className="absolute left-[5%] top-[5%] animate-[rotate-tree_3s_linear_infinite] object-cover"
                  />
                  <Image
                    src={getImage('/images/christmas/sock.webp')}
                    alt="Sock"
                    draggable={false}
                    quality={100}
                    width={86}
                    height={153}
                    className="absolute right-[-10%] top-[25%] animate-[float-sock_1.5s_ease-in-out_infinite] object-cover"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
