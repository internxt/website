import Button from '../shared/Button';
import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import { CheckCircle } from '@phosphor-icons/react';
import { DARK_MODE_ENABLED } from '@/theme.config';

interface WhatWeDoSectionForSpecialOfferProps {
  darkMode?: boolean;
  textContent: any;
  handleOnButtonClick: () => void;
  bgColor?: string;
  bgColorCard?: string;
}

export const WhatWeDoSectionForSpecialOffer = ({
  darkMode = DARK_MODE_ENABLED,
  textContent,
  handleOnButtonClick,
  bgColor = `${darkMode ? 'bg-gray-105' : 'bg-gray-1'}`,
  bgColorCard = `${darkMode ? 'bg-[#1C1C1C]' : 'bg-white'}`,
}: WhatWeDoSectionForSpecialOfferProps) => {
  return (
    <section className={`overflow-hidden ${bgColor} py-20 px-5`}>
      <div className="flex flex-col items-center gap-16">
        <div className="flex max-w-[940px] flex-col gap-6 text-center">
          <h2 className={`text-5xl font-semibold ${darkMode ? 'text-white-95' : 'text-gray-100'}`}>
            {textContent.title}
          </h2>
          <p className={`text-xl ${darkMode ? 'text-cool-gray-30' : 'text-gray-80'}`}>{textContent.description}</p>
        </div>
        <div
          className={`flex max-w-5xl flex-col items-center overflow-hidden rounded-2xl ${bgColorCard} lg:w-screen lg:flex-row lg:justify-between lg:gap-0`}
        >
          <div className="flex h-full flex-col items-center justify-center gap-8 p-7 text-center lg:items-start lg:pl-14 lg:text-start">
            <div
              className={`flex max-w-[500px] flex-col gap-6 text-lg ${
                darkMode ? 'text-white-95' : 'text-black'
              } lg:text-xl`}
            >
              {textContent.card.features.map((feature) => (
                <div className="flex flex-row gap-2">
                  <CheckCircle className="mt-0.5 h-6 w-6 text-primary lg:mt-0 lg:h-8 lg:w-8" size={32} />
                  <p className={`text-left font-semibold ${darkMode ? 'text-cool-gray-30' : 'text-gray-80'}`}>
                    {feature}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex justify-start">
              <Button text={textContent.card.cta} onClick={handleOnButtonClick} />
            </div>
          </div>
          <div className="flex">
            <Image
              src={getImage('/images/freeuser/Internxt_storage.webp')}
              loading="lazy"
              width={480}
              height={480}
              alt="Internxt Drive"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
