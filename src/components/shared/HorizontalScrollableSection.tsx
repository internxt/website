import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useState, useRef, useEffect } from 'react';

interface HorizontalScrollableSectionProps {
  textContent: any;
  bgGradient?: string;
  competitor?: string;
}

export default function HorizontalScrollableSection({
  textContent,
  bgGradient,
  competitor,
}: HorizontalScrollableSectionProps) {
  const competitorPath =
    competitor === 'pCloud'
      ? textContent.HorizontalpCloudScrollableSection
      : competitor === 'MEGA'
      ? textContent.HorizontalMegaScrollableSection
      : textContent.HorizontalDropboxScrollableSection;

  const cardTitles = competitorPath.scrollableSection.titles ?? [];
  const cardDescriptions = competitorPath.scrollableSection.descriptions;
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const cardWidth = 400;
  const mobileCardWidth = 330;
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

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const amount = isMobile ? mobileScrollAmount : scrollAmount;
      const newIndex = Math.round(scrollLeft / amount);
      setCurrentIndex(Math.min(newIndex, getMaxIndex()));
    }
  };

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
      const element = scrollContainerRef.current;
      if (element && 'scrollTo' in element) {
        element.scrollTo({
          left: newIndex * amount,
          behavior: 'smooth',
        });
      }
    }
  };

  const scrollRight = () => {
    const maxIndex = getMaxIndex();
    if (currentIndex < maxIndex && scrollContainerRef.current) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      const amount = isMobile ? mobileScrollAmount : scrollAmount;
      const element = scrollContainerRef.current;
      if (element && 'scrollTo' in element) {
        element.scrollTo({
          left: newIndex * amount,
          behavior: 'smooth',
        });
      }
    }
  };

  const maxIndex = getMaxIndex();

  return (
    <section
      className="flex h-auto w-full items-center justify-around  lg:justify-center lg:px-10 lg:py-9 xl:px-32 3xl:px-80"
      style={{ background: bgGradient }}
    >
      <div className="flex h-auto w-[832px] flex-col items-center justify-between gap-4 py-4 lg:h-[509px]">
        <p className=" w-[360px] text-left text-30 font-bold  leading-tight text-gray-100 lg:w-[832px] lg:text-3xl">
          {competitorPath.title}
        </p>
        <p className="w-[360px] text-left text-base font-normal text-gray-55 lg:w-[832px] lg:text-lg">
          {competitorPath.description}
        </p>

        <div
          ref={scrollContainerRef}
          className="flex w-[360px] flex-row flex-nowrap gap-8 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] lg:w-full [&::-webkit-scrollbar]:hidden"
          onScroll={handleScroll}
        >
          {cardTitles.map((title, index) => (
            <div
              key={index}
              className="flex h-[226px] w-[360px] shrink-0 flex-col items-start justify-start rounded-16 bg-white p-8 lg:w-[400px]"
            >
              <div className="flex h-[24px]  flex-row items-center justify-start gap-4 ">
                <p className="text-left text-xl font-medium text-gray-100">{title}</p>
              </div>
              <div className=" py-4">
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
