import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import { Check } from '@phosphor-icons/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Animation = dynamic(() => import('../home/components/Animation'));
import { ReferAFriendText } from '@/assets/types/refer-a-friend';

interface HeroSectionForHomeProps {
  textContent: ReferAFriendText['HeroSection'];
}

export default function HeroSection({ textContent }: Readonly<HeroSectionForHomeProps>): JSX.Element {
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
      className={`mt-20 flex h-min w-full flex-row items-start justify-center overflow-hidden py-10 lg:mt-10 lg:h-[758px] lg:justify-between lg:pl-10 xl:pl-32 3xl:pl-80`}
      style={{ background: 'linear-gradient(180deg, #E5EFFF 0%, #FFFFFF 100%)' }}
    >
      <div className="flex h-min w-[345px] flex-col justify-center gap-8 lg:mt-28 lg:h-min lg:w-[540px] lg:justify-between">
        <div className="flex w-full flex-col justify-center gap-4 lg:gap-8">
          <div className="flex flex-col justify-center gap-4">
            <p className="w-full text-30 font-semibold leading-tight text-gray-100 lg:text-5xl">
              <HighlightText text={textContent.title} />
            </p>
            <p className="font-regular text-lg leading-tight text-gray-55 lg:text-xl">{textContent.subtitle}</p>
          </div>

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

        <div className="flex h-min w-full flex-col justify-center gap-4">
          <div className="flex w-full flex-row items-start gap-4">
            <Link
              href={'#billingButtons'}
              className="no z-10 flex h-[48px] w-1/2 items-center justify-center whitespace-nowrap rounded-sm-6 bg-primary  py-4 text-base font-medium text-white hover:bg-primary-dark lg:w-[177px]"
            >
              {textContent.cta}
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden h-[700px] w-1/2 justify-center lg:flex">
        <Animation />
      </div>
    </section>
  );
}
