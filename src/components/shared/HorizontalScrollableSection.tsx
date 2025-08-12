import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useState, useRef, useEffect } from 'react';

interface HorizontalScrollableSectionProps {
  textContent: any;
  bgGradient?: string;
}

export default function HorizontalScrollableSection({ textContent, bgGradient }: HorizontalScrollableSectionProps) {
  const cardTitles = textContent?.scrollableSection.titles ?? [];
  const cardDescriptions = textContent?.scrollableSection.descriptions;
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const cardWidth = 400;
  const mobileCardWidth = 310;
  const gap = 32;
  const scrollAmount = cardWidth + gap;
  const mobileScrollAmount = mobileCardWidth + gap;

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const getMaxIndex = () => {
    if (isMobile) {
      return Math.max(0, cardTitles.length - 1);
    } else {
      return Math.max(0, cardTitles.length - 2);
    }
  };

  const scrollLeft = () => {
    if (currentIndex > 0 && scrollContainerRef.current) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      const amount = isMobile ? mobileScrollAmount : scrollAmount;
      scrollContainerRef.current.scrollTo({
        left: newIndex * amount,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    const maxIndex = getMaxIndex();
    if (currentIndex < maxIndex && scrollContainerRef.current) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      const amount = isMobile ? mobileScrollAmount : scrollAmount;
      scrollContainerRef.current.scrollTo({
        left: newIndex * amount,
        behavior: 'smooth',
      });
    }
  };

  const maxIndex = getMaxIndex();

  return (
    <section
      className="flex h-[653px] w-full items-center justify-center bg-white lg:px-10 lg:py-9 xl:px-32 3xl:px-80"
      style={{ background: bgGradient }}
    >
      <div className="flex h-[600px] w-[832px] flex-col items-center justify-between lg:h-[509px] ">
        <p className=" w-[350px] text-center text-3xl font-bold leading-tight text-gray-100 lg:w-[832px] lg:text-left lg:text-5xl">
          {textContent.title}
        </p>
        <p className="font-nomral w-[350px] text-center text-base text-gray-55 lg:w-[832px] lg:text-left lg:text-lg">
          {textContent.description}
        </p>

        <div
          ref={scrollContainerRef}
          className="flex w-[310px] flex-row flex-nowrap gap-8 overflow-hidden scroll-smooth lg:w-full"
        >
          {cardTitles.map((title, index) => (
            <div
              key={index}
              className="flex h-[226px] w-[310px] shrink-0 flex-col items-center justify-start rounded-16 bg-white pt-10 lg:w-[400px]"
            >
              <div className="flex h-[24px] w-[336px] flex-row items-center justify-start gap-4">
                <p className="text-left text-xl font-medium text-gray-100">{title}</p>
              </div>
              <div className="w-[336px] bg-white py-4">
                <p className="text-base font-normal leading-tight text-gray-55">{cardDescriptions[index]}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex h-[48px] w-[310px] flex-row items-end justify-end lg:w-[832px] ">
          <div className="flex w-[120px] justify-between">
            <button
              onClick={scrollLeft}
              disabled={currentIndex === 0}
              className={`flex h-[48px] w-[48px] items-center justify-center rounded-100 border border-primary bg-white transition-opacity ${
                currentIndex === 0 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-white-summer'
              }`}
            >
              <CaretLeft className="h-[24px] w-[24px] text-primary" />
            </button>
            <button
              onClick={scrollRight}
              disabled={currentIndex === maxIndex}
              className={`flex h-[48px] w-[48px] items-center justify-center rounded-100 border border-primary bg-white transition-opacity ${
                currentIndex === maxIndex ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-white-summer'
              }`}
            >
              <CaretRight className="h-[24px] w-[24px] text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
