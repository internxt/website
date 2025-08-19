import { useState } from 'react';

export default function AccordionCards({ textContent }) {
  const cardTitles = textContent?.titles ?? [];
  const cardDescriptions = textContent?.descriptions;
  const [expandedCard, setExpandedCard] = useState(0);
  const handleCardClick = (index) => {
    setExpandedCard(expandedCard === index ? -1 : index);
  };

  return (
    <div className="flex flex-col gap-8 ">
      {cardTitles.map((title, index) => (
        <div key={index} className="w-[302px] overflow-hidden rounded-16 bg-white transition-all duration-200">
          <div
            onClick={() => handleCardClick(index)}
            className="flex cursor-pointer items-center px-4 pb-4 pt-4 duration-300"
          >
            <div className="flex flex-row items-center justify-center gap-4">
              <p className="text-xl font-normal text-primary">{index + 1}</p>
              <p className="text-xl font-medium text-gray-100">{title}</p>
            </div>
          </div>

          <div
            className={`transition-all duration-300 ${
              expandedCard === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden`}
          >
            <div className="bg-white px-4 pb-4">
              <p className="text-lg font-normal text-gray-55">{cardDescriptions[index]}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
