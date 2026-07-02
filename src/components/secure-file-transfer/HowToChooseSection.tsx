import { SecureFileTransferText } from '@/assets/types/secure-file-transfer';
import { useState } from 'react';
import Image from 'next/image';
import { getImage } from '@/lib/getImage';

interface HowToChooseSectionProps {
  textContent: SecureFileTransferText['HowToChooseSection'];
}

const HowToChooseSection = ({ textContent }: HowToChooseSectionProps): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleAccordionClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="flex w-full flex-col items-start justify-center gap-6 bg-neutral-17 px-5 py-20 lg:py-20 lg:pl-10 xl:pl-32 3xl:pl-80">
      <h2 className="flex text-[30px] lg:text-[48px] pb-4 font-bold leading-tight text-gray-100">{textContent.title}</h2>

      <div className="flex w-full flex-row gap-4">
        <div className="flex w-full flex-col gap-6 lg:w-1/2">
          <div className="flex flex-row items-center justify-between lg:hidden">
            <Image
              src={getImage(`/images/secure-file-transfer/mockupM1.webp`)}
              alt={textContent.accordionCards.titles[activeIndex]}
              height={173}
              width={85}
              className="rounded-16 object-cover"
            />
            <Image
              src={getImage(`/images/secure-file-transfer/mockupM2.webp`)}
              alt={textContent.accordionCards.titles[activeIndex]}
              height={173}
              width={85}
              className="rounded-16 object-cover"
            />
            <Image
              src={getImage(`/images/secure-file-transfer/mockupM3.webp`)}
              alt={textContent.accordionCards.titles[activeIndex]}
              height={173}
              width={85}
              className="rounded-16 object-cover"
            />
          </div>
          {textContent.accordionCards.titles.map((title: string, index: number) => (
            <button
              key={title}
              onClick={() => handleAccordionClick(index)}
              className={`flex flex-col rounded-16 bg-white text-left lg:w-[80%] transition-all duration-300 ${
                activeIndex === index ? 'gap-6 p-8' : 'gap-0 px-8 py-4'
              }`}
              aria-expanded={activeIndex === index}
            >
              <span className="flex flex-row items-center gap-4 text-[24px] font-medium text-primary">
                {index + 1}
                <h3 className="text-[18px] lg:text-[20px] font-medium text-gray-100">{title}</h3>
              </span>
              <div
                className={`grid transition-all duration-300 ${
                  activeIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-[14px] lg:text-[16px] font-normal leading-tight text-gray-55">
                    {textContent.accordionCards.descriptions[index]}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
        <div className="hidden flex-row w-full items-end gap-8 lg:flex">
          <Image
            src={getImage(`/images/secure-file-transfer/mockupM${activeIndex + 1}.webp`)}
            alt={textContent.accordionCards.titles[activeIndex]}
            height={439}
            width={217}
            className="rounded-16 object-cover"
          />

          <Image
            src={getImage(`/images/secure-file-transfer/mockupC${activeIndex + 1}.webp`)}
            alt={textContent.accordionCards.titles[activeIndex]}
            height={540}
            width={550}
            className="rounded-16 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HowToChooseSection;
