import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useRef, useState, useEffect } from 'react';

interface HorizontalScrollableProps {
  textContent: any;
  darkMode?: boolean;
}

export default function HorizontalScrollableSection({
  textContent,
  darkMode = false,
}: Readonly<HorizontalScrollableProps>): JSX.Element {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const mobileCardWidth = 345;
  const desktopCardWidth = 400;
  const gap = 16; // gap-4 en mobile
  const desktopGap = 24; // gap-6 en desktop

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const getScrollAmount = () => {
    if (isMobile) {
      return mobileCardWidth + gap;
    }
    return desktopCardWidth + desktopGap;
  };

  const getPaddingRight = () => {
    if (isMobile) {
      const containerWidth = 345;
      const visibleWidth = mobileCardWidth;
      return containerWidth - visibleWidth;
    }

    const containerWidth = 850;
    const visibleWidth = 2 * desktopCardWidth + desktopGap;
    return containerWidth - visibleWidth;
  };

  const updateScrollButtons = () => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  const scrollLeft = () => {
    if (!scrollContainerRef.current) return;
    const amount = getScrollAmount();
    scrollContainerRef.current.scrollBy({
      left: -amount,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    if (!scrollContainerRef.current) return;
    const amount = getScrollAmount();
    scrollContainerRef.current.scrollBy({
      left: amount,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    updateScrollButtons();
    scrollContainer.addEventListener('scroll', updateScrollButtons);

    const resizeObserver = new ResizeObserver(updateScrollButtons);
    resizeObserver.observe(scrollContainer);

    return () => {
      scrollContainer.removeEventListener('scroll', updateScrollButtons);
      resizeObserver.disconnect();
    };
  }, [isMobile]);

  return (
    <section
      className={`flex h-min w-full flex-col items-center justify-center gap-8 overflow-hidden ${
        darkMode ? 'bg-[#1C1C1C]' : 'bg-neutral-17'
      } pb-10 lg:h-min lg:gap-16 lg:py-20`}
    >
      <div className="flex h-min w-[345px] flex-col justify-center gap-6 lg:w-[850px]">
        <p className={`text-30 font-bold leading-tight ${darkMode ? 'text-white-95' : 'text-gray-95'} lg:text-3xl`}>
          {textContent.title}
        </p>
        <p className={`${darkMode ? 'text-green-120' : 'text-gray-55'} text-base font-normal leading-tight lg:text-xl`}>
          {textContent.description}
        </p>
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
          className="scrollbar-hide flex w-full flex-row gap-4 overflow-x-auto scroll-smooth lg:gap-6"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            paddingLeft: isMobile ? '20px' : 'calc((100vw - 850px) / 2)',
            paddingRight: isMobile
              ? `calc(20px + ${getPaddingRight()}px)`
              : `calc((100vw - 850px) / 2 + ${getPaddingRight()}px)`,
          }}
        >
          {textContent.cardDescriptions.titles.map((title: string, index: number) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{
                width: isMobile ? `${mobileCardWidth}px` : `${desktopCardWidth}px`,
              }}
            >
              <div className={`flex h-full flex-col gap-4 rounded-16 ${darkMode ? 'bg-gray-105' : 'bg-white'} p-6`}>
                <p className={`text-lg font-medium ${darkMode ? 'text-white-95' : 'text-gray-95'} lg:text-xl`}>
                  {title}
                </p>
                <p
                  className={`${
                    darkMode ? 'text-green-120' : 'text-gray-55'
                  } flex-1 text-sm font-normal leading-tight lg:text-base`}
                >
                  {textContent.cardDescriptions.descriptions[index]}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex h-[48px] w-[310px] flex-row items-end justify-end lg:w-[850px]">
          <div className="flex w-[120px] justify-between">
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={`flex h-[48px] w-[48px] items-center justify-center rounded-100 border border-primary ${
                darkMode ? 'bg-[#1C1C1C]' : 'bg-white'
              } transition-all ${
                !canScrollLeft
                  ? 'cursor-not-allowed opacity-30'
                  : `cursor-pointer ${darkMode ? 'hover:bg-gray-105' : 'hover:bg-white-summer'}`
              }`}
              aria-label="Anterior"
            >
              <CaretLeft className="h-[24px] w-[24px] text-primary" />
            </button>
            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className={`flex h-[48px] w-[48px] items-center justify-center rounded-100 border border-primary ${
                darkMode ? 'bg-[#1C1C1C]' : 'bg-white'
              } transition-all ${
                !canScrollRight
                  ? 'cursor-not-allowed opacity-30'
                  : `cursor-pointer ${darkMode ? 'hover:bg-gray-105' : 'hover:bg-white-summer'}`
              }`}
              aria-label="Siguiente"
            >
              <CaretRight className="h-[24px] w-[24px] text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
