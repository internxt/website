import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useRef, useState, useEffect } from 'react';

interface HorizontalScrollableProps {
  textContent: any;
}

export default function HorizontalScrollableSection({ textContent }: Readonly<HorizontalScrollableProps>): JSX.Element {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [cardWidth, setCardWidth] = useState(361);

  const maxIndex = isMobile
    ? textContent.cardDescriptions.titles.length - 2
    : textContent.cardDescriptions.titles.length - 1;

  useEffect(() => {
    const updateScreenSize = () => {
      const isDesktop = window.innerWidth >= 1024;
      setIsMobile(isDesktop);
      setCardWidth(isDesktop ? 424 : 361);
    };

    updateScreenSize();

    window.addEventListener('resize', updateScreenSize);

    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current && currentIndex > 0) {
      const newIndex = currentIndex - 1;
      scrollContainerRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth',
      });
      setCurrentIndex(newIndex);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current && currentIndex < maxIndex) {
      const newIndex = currentIndex + 1;
      scrollContainerRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth',
      });
      setCurrentIndex(newIndex);
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(newIndex);
    }
  };

  return (
    <section className="flex h-min w-full flex-col items-center justify-center gap-8 overflow-hidden bg-neutral-17 py-10 lg:h-min lg:gap-16 lg:py-20 xl:py-32 ">
      <div className="absolute left-8 right-8 top-0 h-[1px] bg-neutral-35 lg:bottom-0 lg:left-32 lg:right-32"></div>
      <div className="flex h-min w-[345px] flex-col justify-center gap-6 lg:w-[850px]">
        <p className="text-30 font-bold leading-tight text-gray-95 lg:text-3xl">{textContent.title}</p>
        <p className="text-base font-normal leading-tight text-gray-55 lg:text-xl">{textContent.description}</p>
        {textContent.cta !== undefined && (
          <span
            onClick={() => window.open('https://internxt.com/about/', '_blank', 'noopener,noreferrer')}
            className="flex w-max cursor-pointer flex-row items-center gap-1 text-base font-normal leading-tight text-primary hover:text-primary-dark hover:underline"
          >
            {textContent.cta}
            <CaretRight className="pt-[2px] text-primary" size={24} />
          </span>
        )}
      </div>

      <div className="flex h-min w-full flex-col items-center gap-4 lg:gap-8">
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="w-full overflow-x-auto px-5 lg:px-20 [&::-webkit-scrollbar]:hidden"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <div
            className="3xl:pl-84 flex gap-4 lg:gap-6 lg:pl-32 lg:pr-48 1.5xl:pl-48 1.5xl:pr-64 2xl:pl-60 2xl:pr-72"
            style={{
              width: 'max-content',
              alignItems: 'stretch',
            }}
          >
            {textContent.cardDescriptions.titles.map((title: string, index: number) => (
              <div key={index} className="flex-shrink-0">
                <div className="flex h-full w-[345px] flex-col rounded-16 bg-white p-8 lg:w-[400px]">
                  <p className="pb-6 text-xl font-medium text-gray-95">{title}</p>
                  <p className="flex-1 text-base font-normal leading-tight text-gray-55">
                    {textContent.cardDescriptions.descriptions[index]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex h-[48px] w-[310px] flex-row items-end justify-end lg:w-[850px]">
          <div className="flex w-[120px] justify-between">
            <button
              onClick={scrollLeft}
              disabled={currentIndex === 0}
              className={`flex h-[48px] w-[48px] items-center justify-center rounded-100 border border-primary bg-transparent transition-opacity ${
                currentIndex === 0 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-white-summer'
              }`}
            >
              <CaretLeft className="h-[24px] w-[24px] text-primary" />
            </button>
            <button
              onClick={scrollRight}
              disabled={currentIndex === maxIndex}
              className={`flex h-[48px] w-[48px] items-center justify-center rounded-100 border border-primary bg-transparent transition-opacity ${
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
