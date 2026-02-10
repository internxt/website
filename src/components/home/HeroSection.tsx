import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import { HomeText } from '@/assets/types/home';
import dynamic from 'next/dynamic';
import {
  Brain,
  CellTower,
  Check,
  CloudArrowUp,
  Envelope,
  ShieldPlus,
  Sparkle,
  VideoConference,
} from '@phosphor-icons/react';
import Link from 'next/link';
import { currencyService } from '@/services/currency.service';
import { useEffect, useState } from 'react';

const Animation = dynamic(() => import('./components/Animation'));

interface HeroSectionForHomeProps {
  textContent: HomeText['HeroSection'];
  percentOff: string;
  minimumPrice: string;
}

export default function HeroSection({
  textContent,
  percentOff,
  minimumPrice,
}: Readonly<HeroSectionForHomeProps>): JSX.Element {
  const [currency, setCurrency] = useState<string>('€');

  useEffect(() => {
    currencyService
      .filterCurrencyByCountry()
      .then((currency) => {
        setCurrency(currency.currency);
      })
      .catch(() => {
        //
      });
  }, []);

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
    {
      icon: Brain,
      text: textContent.products.ai,
    },
  ];

  const parsePriceText = (text: string) => {
    if (!minimumPrice || minimumPrice === '0') {
      return <span className="bg-gray-200 inline-block h-6 w-12 animate-pulse rounded lg:h-8 lg:w-16"></span>;
    }
    return typeof text === 'string' ? text.replace(/{{minimumPrice}}/g, minimumPrice) : text;
  };

  const parsePercentText = (text: string) => {
    if (!percentOff || percentOff === '0') {
      return <span className="bg-gray-200 inline-block h-4 w-16 animate-pulse rounded"></span>;
    }
    return typeof text === 'string' ? text.replace(/{{discount}}/g, percentOff) : text;
  };

  const HighlightText = ({ text, className = '' }) => {
    const parts = text.split(/(\*\*.*?\*\*)/);

    return (
      <span className={className}>
        {parts.map((part, index) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return (
              <span key={index} className="text-primary">
                {part.slice(2, -2)}
              </span>
            );
          }
          return <span key={index}>{part}</span>;
        })}
      </span>
    );
  };

  return (
    <section
      className={`mt-20 flex h-min w-full flex-row items-center justify-center overflow-hidden py-10 lg:mt-16 lg:h-[705px] lg:justify-between lg:pl-10 xl:pl-32 3xl:pl-80`}
      style={{ background: 'linear-gradient(180deg, #E5EFFF 0%, #FFFFFF 100%)' }}
    >
      <div className="flex h-min w-[345px] flex-col justify-center gap-6 lg:h-[564px] lg:w-[566px] lg:justify-between">
        <div className="flex flex-wrap items-start justify-start gap-2 lg:w-[566px] lg:flex-nowrap lg:justify-between">
          {products.map((feature, index) => (
            <div
              key={index}
              className="flex h-6 w-min flex-row items-center justify-center gap-1 rounded bg-white/50 px-1 py-0.5 shadow-sm lg:h-8 lg:px-1.5 lg:py-1"
            >
              <feature.icon className="h-5 w-5 text-primary lg:h-5 lg:w-5" />
              <p className="whitespace-nowrap text-xs font-medium leading-tight text-gray-80">{feature.text}</p>
            </div>
          ))}
        </div>

        <div className="flex w-full flex-col justify-center gap-4 lg:gap-8">
          <div className="flex flex-col justify-center gap-4">
            <p className="w-full text-30 font-semibold leading-tight text-gray-100 lg:text-3xl">
              <HighlightText text={textContent.title} />
            </p>
            <p className="font-regular text-lg leading-tight text-gray-100 lg:text-2xl">{textContent.subtitle}</p>
          </div>
          <span className="flex w-min flex-nowrap items-center gap-1 whitespace-nowrap rounded-2 text-base font-semibold leading-tight text-gray-100 lg:text-xl">
            <p className="bg-neutral-37 px-1 py-0.5 text-primary">{parsePercentText(textContent.description)}</p>

            <p className="bg-transparent">{textContent.descriptionNormal}</p>
          </span>
          <div className="flex flex-col justify-center gap-1 lg:gap-2">
            {textContent.features.map((feat) => (
              <div key={feat} className="flex h-[24px] flex-row items-center gap-2 ">
                <Check className="hidden text-green-1 xs-md:block" weight="bold" size={24} />
                <Check className="block text-green-1 xs-md:hidden" weight="bold" size={20} />
                <p className="text-left text-sm font-semibold text-gray-100 lg:text-lg ">{feat}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex h-[29px] flex-row items-center gap-1 text-xs font-normal text-gray-100 lg:h-[43px] lg:items-end lg:text-base">
          {textContent.startFrom.normal1}
          <span className="flex w-max flex-row gap-1 pb-[8px] text-2xl font-bold lg:pb-0 lg:text-4xl">
            <abbr className="text-xs lg:text-base">{currency}</abbr>
            {parsePriceText(textContent.startFrom.price)}
          </span>
          {textContent.startFrom.normal2}
        </div>

        <div className="flex h-min w-full flex-col justify-center gap-4">
          <div className="flex w-full flex-row items-start gap-4">
            <Link
              href={'#billingButtons'}
              className="no z-10 flex h-[48px] w-1/2 items-center justify-center whitespace-nowrap rounded-sm-6 bg-primary  py-4 text-base font-medium text-white hover:bg-primary-dark lg:w-[177px]"
            >
              {textContent.claimDeal}
            </Link>
          </div>
          <span className="flex flex-row items-center gap-2 text-xs font-normal leading-tight text-gray-100 lg:text-lg">
            <Image
              src={getImage('/images/campaigns/world_environment_day/shield-blue.svg')}
              alt="Internxt Blue Shield check"
              width={24}
              height={24}
            />
            {textContent.guarantee}
          </span>
        </div>
      </div>
      <div className="hidden h-[700px] w-full justify-center lg:flex">
        <Animation />
      </div>
    </section>
  );
}
