import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import { CellTower, Check, CloudArrowUp, Envelope, ShieldPlus, Sparkle, VideoConference } from '@phosphor-icons/react';
import Link from 'next/link';
import { HighlightText } from '../components/HighlightText';
import { BlackFridayText } from '@/assets/types/blackFriday';

interface HeroSectionBlackFridayProps {
  textContent: BlackFridayText['HeroSection'];
  percentOff: string;
}

export default function HeroSection({ textContent, percentOff }: Readonly<HeroSectionBlackFridayProps>): JSX.Element {
  const products = [
    {
      icon: CloudArrowUp,
      text: textContent.products.drive,
    },
    {
      icon: ShieldPlus,
      text: textContent.products.antivirus,
    },
    {
      icon: Sparkle,
      text: textContent.products.cleaner,
    },
    {
      icon: CellTower,
      text: textContent.products.vpn,
    },
    {
      icon: VideoConference,
      text: textContent.products.meet,
    },
    {
      icon: Envelope,
      text: textContent.products.mail,
    },
  ];

  const parsePercentText = (text: string) => {
    if (!percentOff || percentOff === '0') {
      return <div className="bg-gray-200 h-4 w-16 animate-pulse rounded"></div>;
    }
    return typeof text === 'string' ? text.replace(/{{discount}}/g, percentOff) : text;
  };

  return (
    <section
      className={`mt-8 flex h-min w-full flex-col items-center justify-center gap-8 overflow-hidden pb-10 pt-20 lg:mt-16 lg:flex-row lg:justify-between lg:gap-12 lg:pl-10 xl:pl-32 3xl:pl-80`}
      style={{ background: 'linear-gradient(180deg, #082D66 0%, #1C1C1C 100%)' }}
    >
      <div className="flex h-min w-[345px] flex-col justify-center gap-6 lg:h-min lg:w-[566px] lg:justify-between">
        <div className="flex w-full flex-wrap items-start justify-start gap-2 lg:flex-nowrap lg:justify-between">
          {products.map((feature, index) => (
            <div
              key={index}
              className="flex h-6 w-min flex-row items-center justify-center gap-1 rounded bg-white/10 px-1 py-0.5 shadow-sm lg:h-8 lg:px-2 lg:py-1"
            >
              <feature.icon className="h-5 w-5 text-primary lg:h-6 lg:w-6" />
              <p className="whitespace-nowrap text-sm font-medium leading-tight text-neutral-37">{feature.text}</p>
            </div>
          ))}
        </div>

        <div className="flex w-full flex-col justify-center gap-4 lg:gap-8">
          <div className="flex flex-col justify-center gap-4">
            <p className="w-full text-30 font-semibold leading-tight text-gray-100 lg:text-3xl">
              <HighlightText text={textContent.title} className="text-white-95" />
            </p>
            <p className="font-regular flex text-lg leading-tight text-gray-1 lg:w-[600px] lg:text-2xl">
              {textContent.subtitle}
            </p>
          </div>
          <span className="flex w-min flex-nowrap items-center gap-1 whitespace-nowrap rounded-2 text-base font-semibold leading-tight text-gray-100 lg:text-xl">
            <p className="bg-purple-100 px-1 py-0.5 text-purple-8 ">{parsePercentText(textContent.description)}</p>
          </span>
          <div className="flex flex-col justify-center gap-1 lg:gap-2">
            {textContent.features.map((feat) => (
              <div key={feat} className="flex h-[24px] flex-row items-center gap-2 ">
                <Check className="hidden text-green-1 xs-md:block" weight="bold" size={24} />
                <Check className="block text-green-1 xs-md:hidden" weight="bold" size={20} />
                <p className="text-left text-sm font-semibold text-gray-1 lg:text-lg ">{feat}</p>
              </div>
            ))}
          </div>
        </div>
        <Link
          href={'#billingButtons'}
          className="z-10 flex items-center justify-center whitespace-nowrap rounded-sm-6 bg-primary  py-4 text-base font-medium text-white hover:bg-primary-dark lg:w-[177px]"
        >
          {textContent.claimDeal}
        </Link>
      </div>

      <div className="hidden w-full justify-end lg:flex">
        <Image
          src={getImage('/images/black-friday/hero.webp')}
          alt="DriveWeb DarkMode image desktop"
          height={700}
          width={722}
          quality={100}
          className="flex-shrink-0"
        />
      </div>

      <div className="flex w-max items-center justify-center lg:hidden">
        <Image
          src={getImage('/images/black-friday/hero.webp')}
          alt="DriveWeb DarkMode image desktop"
          height={400}
          width={400}
          quality={100}
          className="flex-shrink-0 pl-10"
        />
      </div>
    </section>
  );
}
