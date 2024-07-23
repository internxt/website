import { getImage } from '@/lib/getImage';
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import { useState } from 'react';

interface WhatCanWeDoProps {
  textContent: any;
}

export const WhatCanWeDo = ({ textContent }: WhatCanWeDoProps): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const features = [
    {
      id: textContent.cards[0].imagePathname,
      image: getImage(`/images/business/features/${textContent.cards[0].imagePathname}.webp`),
      selectorTab: textContent.cards[0].tab,
      description: textContent.cards[0].description,
    },
    {
      id: textContent.cards[1].imagePathname,
      image: getImage(`/images/business/features/${textContent.cards[1].imagePathname}.webp`),
      selectorTab: textContent.cards[1].tab,
      description: textContent.cards[1].description,
    },
    {
      id: textContent.cards[2].imagePathname,
      image: getImage(`/images/business/features/${textContent.cards[2].imagePathname}.webp`),
      selectorTab: textContent.cards[2].tab,
      description: textContent.cards[2].description,
    },
    {
      id: textContent.cards[3].imagePathname,
      image: getImage(`/images/business/features/${textContent.cards[3].imagePathname}.webp`),
      selectorTab: textContent.cards[3].tab,
      description: textContent.cards[3].description,
    },
  ];

  const onTabSelectorButtonClicked = (tabId: number) => {
    if (selectedTab !== tabId) {
      setIsTransitioning(true);
      setTimeout(() => {
        setSelectedTab(tabId);
        setIsTransitioning(false);
      }, 200);
    }
  };

  return (
    <section
      className="overflow-hidden px-5 py-20"
      style={{
        background: 'radial-gradient(50% 50% at 50% 50%, #0058DB 0%, #161616 100%)',
      }}
    >
      <div className="flex flex-col items-center justify-center gap-20">
        <div className="flex max-w-[774px] flex-col gap-4 text-center text-white">
          <h2 className="text-5xl font-semibold">{textContent.title}</h2>
          <h3 className="text-xl">{textContent.description}</h3>
        </div>

        <div className="flex h-max flex-row gap-4 border-b-4 border-b-white">
          {features.map((feat, index) => (
            <button
              className={`flex ${
                selectedTab === index ? 'border-b-4 border-primary' : undefined
              } w-full max-w-[300px] translate-y-1 flex-col items-center justify-center p-5 text-center`}
              onClick={() => {
                onTabSelectorButtonClicked(index);
              }}
            >
              <p className="text-2xl font-medium text-white">{feat.selectorTab}</p>
            </button>
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
          className="flex flex-col gap-20"
        >
          <div className="flex w-full max-w-[890px] flex-col">
            <p className="text-center text-xl text-white">{features[selectedTab].description}</p>
          </div>

          <div className="flex flex-col">
            <Image
              src={features[selectedTab].image}
              alt={features[selectedTab].id}
              width={896}
              height={850}
              draggable={false}
            />
          </div>
        </Transition>
      </div>
    </section>
  );
};
