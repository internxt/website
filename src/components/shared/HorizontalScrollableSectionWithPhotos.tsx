import { getImage } from '@/lib/getImage';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

interface HorizontalScrollableSectionWithPhotosProps {
  textContent: any;
  bgColor?: string;
}

export default function HorizontalScrollableSectionWithPhotosSection({
  textContent,
  bgColor,
}: HorizontalScrollableSectionWithPhotosProps): JSX.Element {
  const cardTitles = textContent?.scrollableSection.titles ?? [];
  const cardDescriptions = textContent?.scrollableSection.descriptions ?? [];
  const images = ['Drive', 'antivirus', 'vpn', 'cleaner', 'meet', 'Terminal'];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const cardWidth = 350;
  const mobileCardWidth = 320;
  const gap = 24;
  const mobileGap = 32;

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const getScrollAmount = () => {
    return isMobile ? mobileCardWidth + mobileGap : cardWidth + gap;
  };

  const getPaddingRight = () => {
    if (isMobile) {
      const containerWidth = 345;
      const visibleWidth = mobileCardWidth;
      const paddingRight = containerWidth - visibleWidth;
      return Math.max(0, paddingRight);
    }

    const containerWidth = 850;
    const visibleWidth = 2 * cardWidth + gap;
    const paddingRight = containerWidth - visibleWidth;
    return Math.max(0, paddingRight);
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
      className="flex h-min w-full flex-col items-center justify-center gap-8 py-10 lg:h-min lg:gap-16 lg:py-20"
      style={{
        background: bgColor || 'linear-gradient(180deg, #E5EFFF 0%, #FFFFFF 100%)',
      }}
    >
      <div className="flex h-min w-[345px] flex-col justify-center gap-6 lg:w-[850px]">
        <h2 className="text-30 font-bold leading-tight text-gray-95 lg:text-3xl">{textContent.title}</h2>
        <p className="text-base font-normal leading-tight text-gray-55 lg:text-xl">{textContent.description}</p>
      </div>

      <div className="flex h-min w-full flex-col items-center gap-4 lg:gap-8">
        <div
          ref={scrollContainerRef}
          className="scrollbar-hide flex w-full flex-row overflow-x-auto scroll-smooth"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            gap: isMobile ? `${mobileGap}px` : `${gap}px`,
            paddingLeft: isMobile ? '20px' : 'calc((100vw - 850px) / 2)',
            paddingRight: isMobile
              ? `calc(20px + ${getPaddingRight()}px)`
              : `calc((100vw - 850px) / 2 + ${getPaddingRight()}px)`,
          }}
        >
          {cardTitles.map((title: string, index: number) => (
            <div
              key={title}
              className="flex-shrink-0"
              style={{ width: isMobile ? `${mobileCardWidth}px` : `${cardWidth}px` }}
            >
              <div className="flex h-full flex-col items-center justify-between">
                <div className="flex h-min w-full flex-col px-6 pb-2 pt-6 lg:px-0 lg:pb-8">
                  <h3 className="pb-6 text-xl font-medium text-gray-95">{title}</h3>
                  <p className="flex flex-1 whitespace-pre-line text-base font-normal leading-tight text-gray-55">
                    {cardDescriptions[index]}
                  </p>
                </div>
                <Image
                  src={getImage(`/images/coupons/${images[index]}.webp`)}
                  alt={`${title} Solution`}
                  height={index === 2 ? 300 : 352}
                  width={index === 2 ? 300 : 400}
                  quality={100}
                  style={{ objectFit: 'contain', objectPosition: 'center' }}
                  className="rounded-t-16"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex h-[48px] w-[310px] flex-row items-end justify-end lg:w-[850px]">
          <div className="flex w-[120px] justify-between">
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={`flex h-[48px] w-[48px] items-center justify-center rounded-full border border-primary bg-white transition-all ${
                !canScrollLeft ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-white-summer'
              }`}
              aria-label="Anterior"
            >
              <CaretLeft className="h-[24px] w-[24px] text-primary" />
            </button>
            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className={`flex h-[48px] w-[48px] items-center justify-center rounded-full border border-primary bg-white transition-all ${
                !canScrollRight ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-white-summer'
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
