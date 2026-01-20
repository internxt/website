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
  const [scrollState, setScrollState] = useState({
    canGoLeft: false,
    canGoRight: true,
  });
  const [isMobile, setIsMobile] = useState(false);

  const mobileCardWidth = 345;
  const desktopCardWidth = 400;
  const gap = 16;
  const desktopGap = 24;

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
    if (scrollContainerRef.current === null) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;

    const hasScrolledFromStart = scrollLeft > 0;
    const hasReachedEnd = scrollLeft >= scrollWidth - clientWidth - 1;

    setScrollState({
      canGoLeft: hasScrolledFromStart,
      canGoRight: hasReachedEnd === false,
    });
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current === null) return;
    const amount = getScrollAmount();
    scrollContainerRef.current.scrollBy({
      left: -amount,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    if (scrollContainerRef.current === null) return;
    const amount = getScrollAmount();
    scrollContainerRef.current.scrollBy({
      left: amount,
      behavior: 'smooth',
    });
  };

  const getButtonClasses = (isDisabled: boolean) => {
    const baseClasses = `flex h-[48px] w-[48px] items-center justify-center rounded-100 border border-primary ${
      darkMode ? 'bg-[#1C1C1C]' : 'bg-white'
    } transition-all`;

    if (isDisabled) {
      return `${baseClasses} cursor-not-allowed opacity-30`;
    }

    const hoverClasses = darkMode ? 'hover:bg-gray-105' : 'hover:bg-white-summer';
    return `${baseClasses} cursor-pointer ${hoverClasses}`;
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer === null) return;

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
        <h2 className={`text-30 font-bold leading-tight ${darkMode ? 'text-white-95' : 'text-gray-95'} lg:text-3xl`}>
          {textContent.title}
        </h2>
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
          {textContent.cardDescriptions.titles.map((title: string, index: number) => {
            const uniqueKey = `${title.toLowerCase().replace(/\s+/g, '-')}-${index}`;

            return (
              <div
                key={uniqueKey}
                className="flex-shrink-0"
                style={{
                  width: isMobile ? `${mobileCardWidth}px` : `${desktopCardWidth}px`,
                }}
              >
                <div className={`flex h-full flex-col gap-4 rounded-16 ${darkMode ? 'bg-gray-105' : 'bg-white'} p-6`}>
                  <p className={`text-lg font-medium ${darkMode ? 'text-white-95' : 'text-gray-95'} lg:text-xl`}>
                    {title}
                  </p>
                  <h3
                    className={`${
                      darkMode ? 'text-green-120' : 'text-gray-55'
                    } flex-1 text-sm font-normal leading-tight lg:text-base`}
                  >
                    {textContent.cardDescriptions.descriptions[index]}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex h-[48px] w-[310px] flex-row items-end justify-end lg:w-[850px]">
          <div className="flex w-[120px] justify-between">
            <button
              onClick={scrollLeft}
              disabled={scrollState.canGoLeft === false}
              className={getButtonClasses(scrollState.canGoLeft === false)}
              aria-label="Anterior"
            >
              <CaretLeft className="h-[24px] w-[24px] text-primary" />
            </button>
            <button
              onClick={scrollRight}
              disabled={scrollState.canGoRight === false}
              className={getButtonClasses(scrollState.canGoRight === false)}
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
