import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useRef, useState, useEffect } from 'react';

interface ScrollableSection {
  titles: string[];
  descriptions: string[];
}

interface TextContent {
  title: string;
  description: string;
  cta?: string;
  scrollableSection: ScrollableSection;
}

interface HorizontalScrollableProps {
  textContent: TextContent;
  bgGradient?: string;
  cardsWidth?: string;
  cardsHeight?: string;
  needsDivider?: boolean;
}

export default function HorizontalScrollableSection({
  textContent,
  bgGradient,
  cardsWidth = '400px',
  cardsHeight = 'auto',
  needsDivider = true,
}: Readonly<HorizontalScrollableProps>): JSX.Element {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const mobileCardWidth = 293;
  const mobileGap = 32;
  const desktopGap = 32;

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
      return mobileCardWidth + mobileGap;
    }
    const cardWidthNum = parseInt(cardsWidth);
    return cardWidthNum + desktopGap;
  };

  const getPaddingRight = () => {
    if (isMobile) {
      const containerWidth = 345;
      const visibleWidth = mobileCardWidth;
      const paddingRight = containerWidth - visibleWidth;
      return paddingRight;
    }

    const cardWidthNum = parseInt(cardsWidth);
    const containerWidth = 850;
    const visibleWidth = 2 * cardWidthNum + desktopGap;
    const paddingRight = containerWidth - visibleWidth;
    return paddingRight;
  };

  const updateScrollButtons = () => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  const scrollLeft = () => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = getScrollAmount();
    scrollContainerRef.current.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = getScrollAmount();
    scrollContainerRef.current.scrollBy({
      left: scrollAmount,
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
        bgGradient ? '' : 'bg-neutral-17'
      } py-10 lg:h-min lg:gap-16 lg:py-20`}
      style={{ background: bgGradient }}
    >
      <div className="flex h-min w-[345px] flex-col justify-center gap-6 lg:w-[850px]">
        {needsDivider && (
          <div className="absolute left-8 right-8 top-0 h-[1px] bg-neutral-35 lg:left-32 lg:right-32"></div>
        )}
        <p className="text-30 font-bold leading-tight text-gray-95 lg:w-[780px] lg:text-3xl">{textContent.title}</p>
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
          className="scrollbar-hide flex w-full flex-row gap-8 overflow-x-auto scroll-smooth"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            paddingLeft: isMobile ? '20px' : 'calc((100vw - 850px) / 2)',
            paddingRight: isMobile
              ? `calc(20px + ${getPaddingRight()}px)`
              : `calc((100vw - 850px) / 2 + ${getPaddingRight()}px)`,
          }}
        >
          {textContent.scrollableSection.titles.map((title: string, index: number) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{
                width: isMobile ? `${mobileCardWidth}px` : cardsWidth,
                height: cardsHeight,
              }}
            >
              <div className="flex h-full flex-col rounded-xl bg-white p-6 lg:rounded-16 lg:p-8">
                <p className="pb-[16px] text-lg font-medium text-gray-95 lg:pb-6 lg:text-xl">{title}</p>
                <p className="flex-1 text-sm font-normal leading-tight text-gray-55 lg:text-base">
                  {textContent.scrollableSection.descriptions[index]}
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
              className={`flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full border border-primary bg-transparent transition-all hover:bg-primary/10 ${
                !canScrollLeft ? 'cursor-not-allowed opacity-30' : ''
              }`}
              aria-label="Anterior"
            >
              <CaretLeft className="h-[24px] w-[24px] text-primary" />
            </button>
            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className={`flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full border border-primary bg-transparent transition-all hover:bg-primary/10 ${
                !canScrollRight ? 'cursor-not-allowed opacity-30' : ''
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
