import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useRef, useState, useEffect } from 'react';

interface HorizontalScrollableProps {
  textContent: any;
  bgGradient?: string;
  cardsWidth?: string;
  cardsHeight?: string;
}

export default function HorizontalScrollableSection({
  textContent,
  bgGradient,
  cardsWidth = '345px',
  cardsHeight = 'auto',
}: Readonly<HorizontalScrollableProps>): JSX.Element {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [cardWidth, setCardWidth] = useState(361);
  const [maxCardHeight, setMaxCardHeight] = useState<number | null>(null);

  const maxIndex = isMobile
    ? textContent.scrollableSection.titles.length - 2
    : textContent.scrollableSection.titles.length - 1;

  useEffect(() => {
    const updateScreenSize = () => {
      const isDesktop = window.innerWidth >= 1024;
      setIsMobile(isDesktop);

      if (cardsWidth && cardsWidth !== '345px' && cardsWidth !== '400px') {
        const widthNumber = parseInt(cardsWidth.replace(/[^\d]/g, ''));
        setCardWidth(widthNumber + 16);
      } else {
        setCardWidth(isDesktop ? 424 : 361);
      }
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, [cardsWidth]);

  useEffect(() => {
    if (cardsHeight === 'auto' && cardRefs.current.length > 0) {
      const heights = cardRefs.current.filter((ref) => ref !== null).map((ref) => ref!.offsetHeight);

      if (heights.length > 0) {
        const max = Math.max(...heights);
        setMaxCardHeight(max);
      }
    }
  }, [textContent, cardsHeight]);

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

  const getCardWidth = () => {
    if (cardsWidth) {
      return cardsWidth;
    }
    return window.innerWidth >= 1024 ? '400px' : '345px';
  };

  const getCardHeight = () => {
    if (cardsHeight !== 'auto') {
      return cardsHeight;
    }
    return maxCardHeight ? `${maxCardHeight}px` : 'auto';
  };

  return (
    <section
      className={`flex h-min w-full flex-col items-center justify-center gap-8 overflow-hidden ${
        bgGradient ? '' : 'bg-neutral-17'
      } py-10 lg:h-min lg:gap-16 lg:py-20`}
      style={{ background: bgGradient }}
    >
      <div className="flex h-min w-[345px] flex-col justify-center gap-6 lg:w-[850px]">
        <div className="absolute left-8 right-8 top-0 h-[1px] bg-neutral-35 lg:left-32 lg:right-32"></div>

        <p className="text-30 font-bold leading-tight text-gray-95 lg:w-[700px] lg:text-3xl">{textContent.title}</p>
        <p className="text-base font-normal leading-tight text-gray-55 lg:text-xl">{textContent.description}</p>
        {textContent.cta && (
          <span
            onClick={() => window.open('https://internxt.com/privacy/', '_blank', 'noopener,noreferrer')}
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
            className=" flex gap-4 lg:gap-6 lg:pl-32 lg:pr-72 1.5xl:pl-48 1.5xl:pr-64 2xl:pl-64 2xl:pr-[288px]"
            style={{
              width: 'max-content',
              alignItems: 'stretch',
            }}
          >
            {textContent.scrollableSection.titles.map((title: string, index: number) => (
              <div key={index} className="flex-shrink-0">
                <div
                  ref={(el) => (cardRefs.current[index] = el)}
                  className="flex flex-col rounded-16 bg-white p-8"
                  style={{
                    width: getCardWidth(),
                    height: getCardHeight(),
                    minHeight: cardsHeight === 'auto' ? 'auto' : cardsHeight,
                  }}
                >
                  <p className="pb-6 text-xl font-medium text-gray-95">{title}</p>
                  <p className="flex-1 text-base font-normal leading-tight text-gray-55">
                    {textContent.scrollableSection.descriptions[index]}
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
