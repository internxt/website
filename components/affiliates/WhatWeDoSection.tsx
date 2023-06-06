import { ClockCountdown, Devices, FolderLock, ShareNetwork } from '@phosphor-icons/react';
import Image from 'next/image';
import RevealY from '../components/RevealY';

const WhatWeDoSection = ({ textContent }) => {
  const cards = [
    {
      icon: Devices,
      title: textContent.cards[0].title,
      description: textContent.cards[0].description,
    },
    {
      icon: FolderLock,
      title: textContent.cards[1].title,
      description: textContent.cards[1].description,
    },
    {
      icon: ShareNetwork,
      title: textContent.cards[2].title,
      description: textContent.cards[2].description,
    },
    {
      icon: ClockCountdown,
      title: textContent.cards[3].title,
      description: textContent.cards[3].description,
    },
  ];
  return (
    <section className="flex flex-col bg-gray-1 py-20">
      <div className="flex flex-col items-center justify-center space-y-16 px-5">
        {/* Title and description */}
        <div className="flex max-w-[796px] flex-col space-y-6 text-center">
          <p className="text-5xl font-semibold text-gray-100">{textContent.title}</p>
          <p className="text-xl text-gray-80">{textContent.description}</p>
        </div>
        {/* Cards */}
        <RevealY className="grid grid-cols-1 flex-row flex-wrap justify-center gap-8 sm:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`flex flex-col items-start justify-start rounded-2xl bg-white p-8 sm:p-10 md:max-w-[488px]`}
            >
              <card.icon className="mb-6 text-4xl text-primary" size={32} />
              <div className="flex w-full max-w-[400px] flex-col">
                <p className="mb-6 text-2xl font-medium text-gray-100">{card.title}</p>
                <p className="text-base text-cool-gray-80 sm:text-lg">{card.description}</p>
              </div>
            </div>
          ))}
        </RevealY>
        {/* Recognized */}
        <p className="text-center text-4xl font-semibold text-gray-100">{textContent.recognized}</p>
        <div className="flex flex-col space-y-5 lg:flex-row lg:space-x-20 lg:space-y-0">
          <div className="flex flex-auto flex-shrink-0 pb-12 sm:p-0 sm:px-12">
            <div className="flex flex-shrink-0 flex-col items-center space-y-3">
              <Image
                src="/images/about/logos/forbes.webp"
                width={125}
                height={32}
                loading={'lazy'}
                alt="Forbes Logo"
                draggable={false}
              />
            </div>
          </div>
          <div className="flex flex-auto flex-shrink-0 flex-col pb-12 sm:p-0 sm:px-12">
            <div className="flex flex-shrink-0 flex-col items-center space-y-3">
              <Image
                src="/images/about/logos/southsummit.webp"
                width={70}
                height={32}
                loading={'lazy'}
                alt="South Summit Logo"
                draggable={false}
              />
            </div>
          </div>
          <div className="flex flex-auto flex-shrink-0 flex-col pb-12 sm:p-0 sm:px-12">
            <div className="flex flex-shrink-0 flex-col items-center space-y-3">
              <Image
                src="/images/about/logos/tnw.webp"
                alt="TNW Logo"
                draggable={false}
                width={112}
                height={32}
                loading={'lazy'}
              />
            </div>
          </div>
          <div className="flex flex-auto flex-shrink-0 flex-col pb-12 sm:p-0 sm:px-12">
            <div className="flex flex-shrink-0 flex-col items-center space-y-3">
              <Image
                src="/images/about/logos/startupvalencia.webp"
                alt="Startup Valencia Logo"
                width={90}
                height={32}
                loading={'lazy'}
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
