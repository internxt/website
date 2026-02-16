import { PrivateCloudStorageForVideoText } from '@/assets/types/private-cloud-storage-for-videos';
import { useState } from 'react';

interface AccordionCardsProps {
  textContent: PrivateCloudStorageForVideoText['HowToChooseSection']['cardDescriptions'];
  cardWidth?: string;
}

export default function AccordionCards({ textContent, cardWidth }: AccordionCardsProps) {
  const cardTitles = textContent?.titles ?? [];
  const cardDescriptions = textContent?.descriptions ?? [];
  const [expandedCard, setExpandedCard] = useState(0);

  const handleCardClick = (index: number) => {
    setExpandedCard(expandedCard === index ? -1 : index);
  };

  return (
    <>
      <div className="hidden flex-col gap-8 lg:flex">
        {cardTitles.map((title, index) => (
          <div
            key={`${title}-${index}`}
            className={`${
              cardWidth ? cardWidth : 'w-[323px] lg:w-[302px]'
            } mx-2 overflow-hidden rounded-16 bg-white transition-all duration-300`}
          >
            <button
              onClick={() => handleCardClick(index)}
              className="flex w-full cursor-pointer items-center px-6 py-6 duration-300"
            >
              <div className="flex w-full flex-row items-start gap-4">
                <p className="text-base font-normal text-primary lg:text-xl">{index + 1}</p>
                <h3 className="text-base font-medium text-gray-100 lg:text-xl">{title}</h3>
              </div>
            </button>

            <div
              className={`transition-all duration-200 ease-linear ${
                expandedCard === index ? 'h-[260px] opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <div className="bg-white px-6 pb-4">
                <p className="whitespace-pre-line text-sm font-normal leading-tight text-gray-55 lg:text-lg">
                  {cardDescriptions[index]}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-8 lg:hidden">
        {cardTitles.map((title, index) => (
          <div
            key={`${title}-${index}`}
            className={`${
              cardWidth ? cardWidth : 'w-[323px] lg:w-[302px]'
            } mx-2 overflow-hidden rounded-16 bg-white transition-all duration-300`}
          >
            <button
              onClick={() => handleCardClick(index)}
              className="flex w-full cursor-pointer items-center px-6 py-6 duration-300"
            >
              <div className="flex w-full flex-row items-start gap-4">
                <p className="text-base font-normal text-primary lg:text-xl">{index + 1}</p>
                <p className="text-base font-medium text-gray-100 lg:text-xl">{title}</p>
              </div>
            </button>

            <div
              className={`transition-all duration-200 ease-linear ${
                expandedCard === index ? 'h-[260px] opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <div className="bg-white px-6 pb-4">
                <p className="whitespace-pre-line text-sm font-normal leading-tight text-gray-55 lg:text-lg">
                  {cardDescriptions[index]}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
