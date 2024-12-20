import { getImage } from '@/lib/getImage';
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import { Fragment, useState } from 'react';
import RevealX from '../components/RevealX';
import ReactMarkdown from 'react-markdown';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

interface WhatCanWeDoProps {
  textContent: any;
}

export const WhatCanWeDo = ({ textContent }: WhatCanWeDoProps): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const onRightArrowClick = () => {
    const newIndex = selectedTab === textContent.cards.length - 1 ? 0 : selectedTab + 1;
    onTabSelectorButtonClicked(newIndex);
  };

  const onLeftArrowClick = () => {
    const newIndex = selectedTab === 0 ? textContent.cards.length - 1 : selectedTab - 1;
    onTabSelectorButtonClicked(newIndex);
  };

  const onTabSelectorButtonClicked = (tabId: number) => {
    if (selectedTab !== tabId) {
      setIsTransitioning(true);
      setTimeout(() => {
        setSelectedTab(tabId);
        setIsTransitioning(false);
      }, 200);
    }
  };
  const isLastTab = selectedTab === textContent.cards.length - 1;

  return (
    <section
      className="overflow-hidden px-5 py-20"
      style={{
        background: 'radial-gradient(50% 50% at 50% 50%, #0058DB 0%, #161616 100%)',
      }}
    >
      <div className="flex flex-col items-center justify-center gap-10 xl:gap-20">
        <div className="flex max-w-[774px] flex-col gap-4 text-center text-white">
          <h2 className="text-3xl font-semibold lg:text-5xl">{textContent.title}</h2>
          <h3 className="text-xl">{textContent.description}</h3>
        </div>
        <div className="hidden max-w-[1330px] flex-row items-start py-20 lg:flex">
          <div className="flex flex-col">
            {textContent.cards.map((info, index) => (
              <Fragment key={info.title}>
                <button
                  className={`flex ${
                    selectedTab === index ? 'border-primary' : 'border-gray-10'
                  } cursor-pointer flex-row items-center border-r-4 p-2 pr-8`}
                  onClick={() => {
                    onTabSelectorButtonClicked(index);
                  }}
                >
                  <p className="text-start text-2xl font-medium text-white  hover:text-primary">{info.selectorTab}</p>
                </button>
                <div className="h-8 border-r-4 border-gray-10 pr-8 last:hidden" />
              </Fragment>
            ))}
          </div>
          <RevealX direction="left" className="flex flex-col justify-start">
            <div className="flex w-auto justify-center px-6">
              <div className="flex flex-col rounded-3xl pl-6">
                <div className="flex  w-full max-w-[710px] flex-col space-y-6">
                  <p className="text-4xl font-semibold text-white">{textContent.cards[selectedTab].selectorTab}</p>
                  <ReactMarkdown className="font-regular text-xl text-white">
                    {textContent.cards[selectedTab].description}
                  </ReactMarkdown>
                  <div className="flex flex-col">
                    <Image
                      src={getImage(`/images/business/features/${textContent.cards[selectedTab].imagePathname}.webp`)}
                      alt={textContent.cards[selectedTab].imagePathname}
                      width={896}
                      height={850}
                      draggable={false}
                    />
                  </div>
                </div>
              </div>
            </div>
          </RevealX>
        </div>

        {/*Mobile/Tablet View*/}
        <div className="relative w-full snap-x snap-mandatory flex-row justify-start gap-6 lg:hidden">
          <div className="flex w-full snap-x snap-mandatory space-y-5">
            {textContent.cards.map((testimonial) => (
              <div
                key={testimonial.selectorTab}
                className="rounded- flex w-full shrink-0 snap-center flex-col justify-end px-5"
              >
                <div className="flex h-full flex-col">
                  <div className="flex min-h-[110px] w-full max-w-[890px] flex-col items-end justify-end">
                    <p className="py-5 text-center text-3xl font-medium text-white">
                      {textContent.cards[selectedTab].selectorTab}
                    </p>
                  </div>

                  <div className="flex flex-row items-center justify-center space-x-2 py-4">
                    {selectedTab !== 0 && (
                      <button onClick={onLeftArrowClick} className="flex items-center text-white">
                        <CaretLeft size={24} />
                        <span className="ml-2">{textContent.betweenDots}</span>
                      </button>
                    )}

                    <button
                      onClick={onRightArrowClick}
                      disabled={isLastTab}
                      className={`${isLastTab ? 'text-gray-400 cursor-not-allowed' : 'hover:text-gray-300 text-white'}`}
                    >
                      <CaretRight size={24} />
                    </button>
                  </div>

                  <div className="flex w-full max-w-[890px] flex-col">
                    <p className="text-center text-xl text-white">{textContent.cards[selectedTab].description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
