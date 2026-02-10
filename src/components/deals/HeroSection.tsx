import Image from 'next/image';
import { getImage } from '@/lib/getImage';
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
import { HighlightText } from '../components/HighlightText';

interface HeroSectionDealsProps {
  textContent: any;
  percentOff: string;
  darkMode?: boolean;
  image: string;
}

export default function HeroSection({
  textContent,
  percentOff,
  darkMode = true,
  image,
}: Readonly<HeroSectionDealsProps>): JSX.Element {
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

  const parsePercentText = (text: string) => {
    if (!percentOff || percentOff === '0') {
      return <div className="bg-gray-200 h-4 w-16 animate-pulse rounded"></div>;
    }
    return typeof text === 'string'
      ? text.replace(/{{percentage}}/g, percentOff).replace(/{{discount}}/g, percentOff)
      : text;
  };

  return (
    <section
      className={`mt-8 flex h-min w-full flex-col items-center justify-center gap-8 overflow-hidden pb-10 pt-20 lg:mt-16 lg:flex-row lg:justify-between lg:gap-12 lg:pl-10 xl:pl-32 3xl:pl-80`}
      style={{
        background: darkMode
          ? 'linear-gradient(180deg, #082D66 0%, #1C1C1C 100%)'
          : 'linear-gradient(180deg, #E5EFFF 0%, #FFFFFF 100%)',
      }}
    >
      <div className="flex h-min w-[345px] flex-col justify-center gap-6 lg:h-min lg:w-[596px] lg:justify-between">
        <div className="flex w-full flex-wrap items-start justify-start gap-2 lg:flex-nowrap lg:justify-between">
          {products.map((feature, index) => (
            <div
              key={index}
              className={`flex h-6 w-min flex-row items-center justify-center gap-1 rounded px-1 py-0.5 shadow-sm lg:h-8 lg:px-2 lg:py-1 ${
                darkMode ? 'bg-white/10' : 'bg-white/50'
              }`}
            >
              <feature.icon className="h-5 w-5 text-primary lg:h-6 lg:w-6" />
              <p
                className={`whitespace-nowrap text-sm font-medium leading-tight ${
                  darkMode ? 'text-neutral-37' : 'text-gray-80'
                }`}
              >
                {feature.text}
              </p>
            </div>
          ))}
        </div>

        <div className="flex w-full flex-col justify-center gap-4 lg:gap-8">
          <div className="flex flex-col justify-center gap-4">
            <h1
              className={`w-full whitespace-pre-line text-30 font-semibold leading-tight lg:text-3xl ${
                darkMode ? 'text-gray-100' : 'text-gray-100'
              }`}
            >
              <HighlightText text={textContent.title} className={darkMode ? 'text-white-95' : ''} />
            </h1>
            <h2
              className={`font-regular flex whitespace-pre-line text-lg leading-tight lg:w-[600px] lg:text-2xl ${
                darkMode ? 'text-gray-1' : 'text-gray-100'
              }`}
            >
              {parsePercentText(textContent.subtitle)}
            </h2>
          </div>
          {textContent.description && (
            <span
              className={`flex w-full flex-nowrap items-center gap-1 rounded-2 text-base font-semibold leading-tight lg:w-min lg:whitespace-nowrap lg:text-xl ${
                darkMode ? 'text-gray-100' : 'text-gray-100'
              }`}
            >
              <p className={`px-1 py-0.5 ${darkMode ? 'bg-purple-100 text-purple-8' : 'bg-neutral-37 text-primary'}`}>
                {parsePercentText(textContent.description)}
              </p>
            </span>
          )}
          <div className="flex flex-col justify-center gap-1 lg:gap-2">
            {textContent.features.map((feat) => (
              <div key={feat} className="flex h-[24px] flex-row items-center gap-2 ">
                <Check className="hidden text-green-1 xs-md:block" weight="bold" size={24} />
                <Check className="block text-green-1 xs-md:hidden" weight="bold" size={20} />
                <p
                  className={`text-left text-sm font-semibold lg:text-lg ${darkMode ? 'text-gray-1' : 'text-gray-100'}`}
                >
                  {feat}
                </p>
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
          src={getImage(image)}
          alt="DriveWeb DarkMode image desktop"
          height={700}
          width={722}
          quality={100}
          className="flex-shrink-0"
        />
      </div>

      <div className="flex w-max items-center justify-center lg:hidden">
        <Image
          src={getImage(image)}
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
