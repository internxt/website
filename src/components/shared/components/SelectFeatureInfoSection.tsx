import React, { useState } from 'react';
import { CaretRight } from '@phosphor-icons/react';
import Link from 'next/link';
import { Transition } from '@headlessui/react';

interface SelectFeatureInfoSectionProps {
  textContent: any;
  lang: string;
  bgColor?: string;
  showCta?: boolean;
  mobileBg?: string;
  cards: any[];
}

const SelectFeatureInfoSection = ({
  textContent,
  lang,
  cards,
  showCta,
  bgColor = 'bg-gray-1',
  mobileBg = 'bg-white',
}: SelectFeatureInfoSectionProps): JSX.Element => {
  const [cardIndex, setCardIndex] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const DescriptionIcon = cards[cardIndex].icon;

  const handleButtonClick = (index) => {
    if (cardIndex !== index) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCardIndex(index);
        setIsTransitioning(false);
      }, 200);
    }
  };

  return (
    <section className={`flex flex-col items-center justify-center gap-20 overflow-hidden ${bgColor} px-5 py-24`}>
      <div className="flex w-full max-w-[840px] flex-col items-center justify-center gap-6">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-semibold leading-tight text-gray-100 lg:text-5xl">{textContent.title}</h2>
          <p className="text-xl text-gray-80">{textContent.description}</p>
        </div>
        {showCta && (
          <div className="flex flex-row items-center gap-1">
            <Link href={'/privacy'} hrefLang={lang} className="text-lg font-semibold text-primary hover:underline">
              {textContent.cta}
            </Link>
            <CaretRight className="text-primary" size={20} />
          </div>
        )}
      </div>
      <div className="hidden h-full flex-row justify-center gap-20 lg:flex">
        <div className={`flex h-full w-full border-r-4 border-gray-10 ${!cards && 'max-w-[288px]'} flex-col gap-10`}>
          {cards.map((info, index) => (
            <div key={info.title} className="flex w-full translate-x-1 flex-col">
              <button
                key={info.title}
                className={`flex ${
                  cardIndex === index ? 'border-primary' : 'border-gray-10'
                } cursor-pointer flex-row items-center gap-3 border-r-4 py-3 pr-8 text-start`}
                onClick={() => {
                  handleButtonClick(index);
                }}
              >
                {cards ? <info.icon size={32} className="text-primary" /> : undefined}
                <p className="text-2xl font-medium text-gray-100  hover:text-primary">{info.title}</p>
              </button>
              <div className="h-8 border-r-4 border-gray-10 pr-8 last:hidden" />
            </div>
          ))}
        </div>
        <Transition
          appear={true}
          show={!isTransitioning}
          enter="transition-opacity duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className={'flex w-full flex-col'}
        >
          <div className="flex h-screen max-h-96 w-full max-w-[384px] flex-col space-y-6">
            <DescriptionIcon className="text-primary" size={64} />
            <p className="text-4xl font-semibold text-gray-100">{cards[cardIndex].title}</p>
            <p className="text-xl font-normal text-gray-80">{cards[cardIndex].description}</p>
          </div>
        </Transition>
      </div>
      {/* Mobile view */}
      <div className="flex flex-col items-center justify-center space-y-10 px-5 lg:hidden">
        {cards.map((info) => (
          <div
            key={info.title}
            className={`flex flex-col items-start justify-start rounded-2xl ${mobileBg} p-8 sm:p-10 md:max-w-[488px]`}
          >
            <info.icon className="mb-6 text-4xl text-primary" size={32} />
            <div className="flex w-full max-w-[400px] flex-col">
              <p className="mb-6 text-2xl font-medium text-gray-100">{info.title}</p>
              <p className="text-base text-cool-gray-80 sm:text-lg">{info.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SelectFeatureInfoSection;
