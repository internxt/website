import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface HorizontalScrollableSectionProps {
  textContent: Record<string, any>;
  bgColor?: string;
}
export default function HorizontalScrollableSection({
  textContent,
  bgColor = 'bg-white',
}: HorizontalScrollableSectionProps) {
  const cardTitles = textContent?.scrollableSection.titles ?? [];
  const cardDescriptions = textContent?.scrollableSection.descriptions;
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const cardWidth = 400;
  const mobileCardWidth = 320;
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
      className={`flex h-min w-full items-center justify-center bg-neutral-17 lg:h-[580px] lg:px-10  lg:py-9 xl:px-32 3xl:px-80`}
    >
      <div className="mx-8 flex h-min w-[832px] flex-col items-center justify-center gap-8 border-t-[1px] border-neutral-25 lg:h-[620px] lg:justify-between lg:gap-0 lg:py-5">
        <p className="w-[320px] pt-10 text-left text-30 font-bold leading-tight text-gray-100 lg:w-[832px] lg:pt-0 lg:text-left lg:text-5xl">
          {textContent.title}
        </p>
        <p className="w-[320px] text-left text-base font-normal leading-tight text-gray-55 lg:w-[832px] lg:text-left lg:text-lg">
          {textContent.description}
        </p>
        <Link
          href="/privacy"
          className="flex w-full cursor-pointer flex-row items-start justify-start gap-1  text-base font-medium text-primary  hover:underline"
        >
          {textContent.cta}
          <CaretRight className="h-[24px] w-[24px] text-primary" />
        </Link>
        <div
          ref={scrollContainerRef}
          className="flex h-min w-[320px] flex-row items-center justify-start gap-8 overflow-hidden scroll-smooth  lg:h-[207px] lg:w-full "
        >
          {cardTitles.map((title, index) => (
            <div
              key={title}
              className="flex h-min w-[320px] shrink-0 flex-col items-start justify-center gap-6 rounded-16 bg-white p-6 lg:w-[400px]"
            >
              <div className="flex flex-row gap-4">
                <p className="text-left text-xl font-medium text-gray-100">{title}</p>
              </div>
              <p className="text-base font-normal leading-tight text-gray-55">{cardDescriptions[index]}</p>
            </div>
          ))}
        </div>

        <div className="flex h-[48px] w-[310px] flex-row items-end justify-end lg:w-[832px]">
          <div className="flex w-[120px] justify-between">
            <button
              onClick={scrollLeft}
              disabled={currentIndex === 0}
              className={`flex h-[48px] w-[48px] items-center justify-center rounded-100 border border-primary ${bgColor} transition-opacity ${
                currentIndex === 0 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-white-summer'
              }`}
            >
              <CaretLeft className="h-[24px] w-[24px] text-primary" />
            </button>
            <button
              onClick={scrollRight}
              disabled={currentIndex === maxIndex}
              className={`flex h-[48px] w-[48px] items-center justify-center rounded-100 border border-primary ${bgColor} transition-opacity ${
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
