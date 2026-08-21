import Image from 'next/image';
import { getImage } from '@/lib/getImage';

import {
  Brain,
  CellTower,
  CloudArrowUp,
  Envelope,
  ShieldPlus,
  Sparkle,
  VideoConference,
} from '@phosphor-icons/react';
import Link from 'next/link';
import { HighlightText } from '../components/HighlightText';

interface HeroSectionForPartnerProps {
  textContent: any;
  percentOff: string;
  darkMode?: boolean;
}

export default function HeroSection({
  textContent,
  percentOff,
  darkMode = false,
}: Readonly<HeroSectionForPartnerProps>): JSX.Element {

  const products = [
    { icon: CloudArrowUp, text: textContent.products.drive },
    { icon: ShieldPlus, text: textContent.products.antivirus },
    { icon: Sparkle, text: textContent.products.cleaner },
    { icon: CellTower, text: textContent.products.vpn },
    { icon: VideoConference, text: textContent.products.meet },
    { icon: Envelope, text: textContent.products.mail },
    { icon: Brain, text: textContent.products.ai },
  ];

  const parsePercentText = (text: string) => {
    return typeof text === 'string' ? text.replace(/{{discount}}/g, percentOff) : text;
  };

  return (
    <section
      className={`mt-20 flex h-min w-full flex-row items-center justify-center gap-12 overflow-hidden py-10 lg:mt-16 lg:h-[700px] lg:justify-between lg:gap-16 lg:pl-10 lg:pr-4 xl:pl-32 xl:pr-16 3xl:pl-80 3xl:pr-40`}
      style={{
        background: darkMode
          ? 'linear-gradient(180deg, #082D66 0%, #1C1C1C 100%)'
          : 'linear-gradient(180deg, #E5EFFF 0%, #FFFFFF 100%)',
      }}
    >
      <div className="flex h-min w-[345px] flex-col justify-center gap-6 lg:h-[392px] lg:w-[800px] lg:justify-between">
        <div className="flex w-full flex-wrap items-start justify-start gap-2 lg:flex-nowrap lg:justify-between">
          {products.map((feature, index) => (
            <div
              key={index}
              className={`flex h-6 w-min flex-row items-center justify-center gap-1 rounded ${darkMode ? 'bg-white/10' : 'bg-white/50'
                }  px-1 py-0.5 shadow-sm lg:h-8 lg:px-2 lg:py-1`}
            >
              <feature.icon className="h-5 w-5 text-primary lg:h-6 lg:w-6" />
              <p
                className={`whitespace-nowrap text-sm font-medium leading-tight lg:pt-[2px] ${darkMode ? 'text-neutral-37' : 'text-gray-80'
                  }`}
              >
                {feature.text}
              </p>
            </div>
          ))}
        </div>
        <h1
          className={`text-[34px] font-semibold leading-tight ${darkMode ? 'text-white-95' : 'text-gray-100'
            } lg:text-[38px] xl:text-[40px] 2xl:text-[42px] 3xl:text[44px]`}
        >
          <HighlightText text={textContent.title} />
        </h1>
        <div className="flex w-full flex-col justify-center gap-4 lg:gap-8">
          <div className="flex flex-col justify-center gap-4">
            {percentOff !== '0' && (
              <span
                className={`flex w-min flex-row items-center gap-1 whitespace-nowrap rounded-2 px-1 py-0.5 text-base font-semibold leading-tight lg:text-xl ${darkMode ? 'bg-purple-100 text-purple-8' : 'bg-neutral-37 text-primary'
                  }`}
              >
                <span>{parsePercentText(textContent.subtitle)}</span>
              </span>
            )}
            <p
              className={`font-regular ${darkMode ? 'text-white-95' : 'text-gray-100'
                } text-lg leading-tight lg:text-xl`}
            >
              {parsePercentText(textContent.description)}
            </p>
          </div>
        </div>

        <div className="flex h-min w-full flex-col justify-center gap-4">
          <div className="flex w-full flex-row items-start gap-4">
            <Link
              href={'#billingButtons'}
              className="z-10 flex items-center justify-center whitespace-nowrap rounded-sm-6 bg-primary px-7 py-3 text-base font-medium text-white hover:bg-primary-dark"
            >
              {textContent.claimDeal}
            </Link>
          </div>
        </div>
      </div>

      <div className={'hidden justify-center lg:flex'}>
        <Image
          src={getImage(`/images/home-assistant/hero2.webp`)}
          alt="Internxt Partners HeroSection Image"
          width={1200}
          height={960}
          quality={100}
          loading='eager'
          className="h-auto rounded object-cover"
        />
      </div>
    </section>
  );
}
