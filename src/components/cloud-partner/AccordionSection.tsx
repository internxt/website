import { useState } from 'react';
import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import { CloudPartnerText } from '@/assets/types/cloud-partner';

interface AccordionSectionProps {
  textContent: CloudPartnerText['AccordionSection'];
}

export default function AccordionSection({ textContent }: AccordionSectionProps): JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const cardTitles = textContent?.accordionSection.titles ?? [];
  const cardDescriptions = textContent?.accordionSection.descriptions ?? [];

  const images = ['/images/cloud-partners/Console.webp', '/images/meet/meet2.webp', '/images/meet/meet3.webp'];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const currentImage = openIndex !== null ? images[openIndex] : images[0];
  const currentImageAlt = openIndex !== null ? `${cardTitles[openIndex]}` : 'Default images';

  return (
    <section className="flex h-min w-full flex-col items-center justify-center gap-8 bg-neutral-17 py-10 lg:h-min lg:gap-16 lg:py-20">
      <div className={`absolute left-8 right-8 top-0 h-[1px] bg-neutral-35 lg:bottom-0 lg:left-32 lg:right-32`}></div>

      <div className="flex h-min flex-col justify-center gap-6">
        <p className="text-center text-30 font-bold leading-tight text-gray-95 lg:text-3xl">{textContent.title}</p>
        <p className="whitespace-pre-line text-base font-normal leading-tight text-gray-55 lg:text-xl">
          {textContent.description}
        </p>
      </div>

      <div className="flex w-full flex-row lg:w-full lg:pl-10 xl:pl-32 3xl:pl-80">
        <div className="space-y-4">
          {cardTitles.map((title, index) => (
            <div key={index} className="w-[544px] overflow-hidden rounded-2xl bg-white">
              <button
                onClick={() => toggleAccordion(index)}
                className={`flex w-full items-center px-8 text-left transition-all duration-700 ${
                  openIndex === index ? 'pt-4' : 'h-[93px] py-4'
                }`}
              >
                <span className="flex items-center justify-center gap-4 py-4 text-2xl text-primary">
                  {index + 1}
                  <p className="text-lg font-medium text-gray-95 lg:text-xl">{title}</p>
                </span>
              </button>

              <div
                className={`transition-all duration-700 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-8 pb-8">
                  <p className="text-base leading-tight text-gray-55 lg:text-base">{cardDescriptions[index]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative ml-16 overflow-hidden rounded-lg">
          <Image
            key={`accordion-img-${openIndex}`}
            src={getImage(currentImage)}
            alt={currentImageAlt}
            width={628}
            height={430}
            quality={100}
            className="transform transition-all duration-700 ease-in-out hover:scale-105"
            priority={openIndex === 0}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-transparent opacity-0 transition-opacity duration-700 hover:opacity-10" />
        </div>
      </div>
    </section>
  );
}
