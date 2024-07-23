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
      <div className="flex flex-col items-center justify-center gap-10 xl:gap-20">
        <div className="flex max-w-[774px] flex-col gap-4 text-center text-white">
          <h2 className="text-5xl font-semibold">{textContent.title}</h2>
          <h3 className="text-xl">{textContent.description}</h3>
        </div>

        <div className="hidden h-max flex-row gap-4 border-b-4 border-b-white xl:flex">
          {textContent.cards.map((feat, index) => (
            <button
              className={`flex ${
                selectedTab === index ? 'border-b-4 border-primary' : undefined
              } h-full max-h-32 w-full max-w-[300px] translate-y-1 flex-col items-center justify-center p-5 text-center`}
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
          className="hidden flex-col gap-20 xl:flex"
        >
          <div className="flex w-full max-w-[890px] flex-col">
            <p className="text-center text-xl text-white">{textContent.cards[selectedTab].description}</p>
          </div>

          <div className="flex flex-col">
            <Image
              src={getImage(`/images/business/features/${textContent.cards[selectedTab].imagePathname}.webp`)}
              alt={textContent.cards[selectedTab].imagePathname}
              width={896}
              height={850}
              draggable={false}
            />
          </div>
        </Transition>

        {/*Mobile/Tablet View*/}
        <div className="flex w-full snap-x snap-mandatory flex-row justify-start gap-6 overflow-scroll xl:hidden">
          {textContent.cards.map((testimonial) => (
            <div className="mx-auto flex w-full shrink-0 snap-center flex-col justify-start rounded-3xl p-8">
              <div
                className="flex h-full max-w-[375px] flex-col items-center justify-between gap-5"
                key={testimonial.review}
              >
                <p className="text-center text-3xl font-medium text-white">{testimonial.selectorTab}</p>
                <div className="flex w-full max-w-[890px] flex-col">
                  <p className="text-center text-xl text-white">{testimonial.description}</p>
                </div>

                <div className="flex flex-col">
                  <Image
                    src={getImage(`/images/business/features/${testimonial.imagePathname}.webp`)}
                    alt={testimonial.imagePathname}
                    width={896}
                    height={850}
                    draggable={false}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
