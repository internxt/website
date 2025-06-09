import React, { Fragment, useState } from 'react';
import { CaretRight, ClockCounterClockwise, ListChecks, MagicWand, ShieldStar } from '@phosphor-icons/react';
import Link from 'next/link';
import { Transition } from '@headlessui/react';

interface SecondFeaturesSectionProps {
  textContent: any;
  lang: string;
  bgColor?: string;
  mobileBg?: string;
  cards?: any[];
}

const SecondFeaturesSection = ({
  textContent,
  lang,
  cards,
  bgColor = 'bg-gray-1',
  mobileBg = 'bg-white',
}: SecondFeaturesSectionProps) => {
  const [cardIndex, setCardIndex] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const cardInfo = [
    {
      icon: ListChecks,
      title: textContent.info[0].title,
      description: textContent.info[0].description,
    },
    {
      icon: MagicWand,
      title: textContent.info[1].title,
      description: textContent.info[1].description,
    },
    {
      icon: ClockCounterClockwise,
      title: textContent.info[2].title,
      description: textContent.info[2].description,
    },
    {
      icon: ShieldStar,
      title: textContent.info[3].title,
      description: textContent.info[3].description,
    },
  ];

  const cardsToRender = cards ?? cardInfo;

  const DescriptionIcon = cardsToRender[cardIndex].icon;

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
      <div className="flex w-full max-w-[1040px] flex-col items-center justify-center gap-6">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-semibold leading-tight text-gray-100 lg:text-5xl">{textContent.title}</h2>
          <p className="text-xl text-gray-80">{textContent.description}</p>
        </div>
        {!cards && (
          <div className="flex flex-row items-center gap-1">
            <Link href={'/privacy'} hrefLang={lang} className="text-lg font-semibold text-primary hover:underline">
              {textContent.cta}
            </Link>
            <CaretRight className="text-primary" size={20} />
          </div>
        )}
      </div>
      <div className="hidden flex-row justify-center gap-20 lg:flex">
        <div className={`flex w-full ${!cards && 'max-w-[288px]'} flex-col`}>
          {cardsToRender.map((info, index) => (
            <Fragment key={info.title}>
              <button
                key={info.title}
                className={`flex ${
                  cardIndex === index ? 'border-primary' : 'border-gray-10'
                } cursor-pointer flex-row items-center gap-3 border-r-4 p-2 pr-8 text-start`}
                onClick={() => {
                  handleButtonClick(index);
                }}
              >
                {cards ? <info.icon size={32} className="text-primary" /> : undefined}
                <p className="text-2xl font-medium text-gray-100  hover:text-primary">{info.title}</p>
              </button>
              <div className="h-8 border-r-4 border-gray-10 pr-8 last:hidden" />
            </Fragment>
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
          className="flex w-full max-w-[384px] flex-col justify-center space-y-6"
        >
          <DescriptionIcon className="text-primary" size={64} />
          <p className="text-4xl font-semibold text-gray-100">{cardsToRender[cardIndex].title}</p>
          <p className="text-xl font-normal text-gray-80">{cardsToRender[cardIndex].description}</p>
        </Transition>
      </div>
      {/* Mobile view */}
      <div className="flex flex-col items-center justify-center space-y-10 px-5 lg:hidden">
        {cardsToRender.map((info) => (
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

export default SecondFeaturesSection;
