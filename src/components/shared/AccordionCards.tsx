import { useState } from 'react';

export default function AccordionCards({ textContent }) {
  const cardTitles = textContent?.titles ?? [];
  const cardDescriptions = textContent?.descriptions;
  const [expandedCard, setExpandedCard] = useState(0);
  const handleCardClick = (index) => {
    setExpandedCard(expandedCard === index ? -1 : index);
  };

  return (
    <div className="flex flex-col gap-8">
      {cardTitles.map((title, index) => (
        <div
          key={title}
          className="w-[323px] overflow-hidden rounded-16 bg-white transition-all duration-200 lg:w-[302px]"
        >
          <button
            onClick={() => handleCardClick(index)}
            className="flex cursor-pointer items-center px-6 py-6 duration-300"
          >
            <div className="flex flex-row items-center justify-center gap-4">
              <p className="text-base font-normal text-primary lg:text-xl">{index + 1}</p>
              <p className="text-base font-medium text-gray-100 lg:text-xl">{title}</p>
            </div>
          </button>

          <div
            className={`transition-all duration-300 ${
              expandedCard === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden`}
          >
            <div className="bg-white px-4 pb-4">
              <p className="text-sm font-normal leading-tight text-gray-55 lg:text-lg">{cardDescriptions[index]}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
