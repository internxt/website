import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { getImage } from '@/lib/getImage';
import Image from 'next/image';

interface HorizontalScrollableSectionProps {
  textContent: Record<string, any>;
  bgColor?: string;
  redirection?: boolean;
  containerDecoration?: string;
  cardDecoration?: boolean;
  bgGardient?: string;
  bgColorCard?: string;
}

export default function HorizontalScrollableSectionWithImages({
  textContent,
  bgColor = 'bg-white',
  redirection = false,
  containerDecoration,
  cardDecoration = false,
  bgGardient,
  bgColorCard,
}: HorizontalScrollableSectionProps) {
  const cardTitles = textContent?.scrollableSection.titles ?? [];
  const cardDescriptions = textContent?.scrollableSection.descriptions;
  const cardImages = textContent?.scrollableSection?.imagesPathname || [];
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const cardWidth = 400;
  const mobileCardWidth = 320;
  const gap = 32;
  const hasImages = Array.isArray(cardImages) && cardImages.length > 0;

  const sectionHeight = hasImages ? 'lg:h-[1080px]' : 'lg:h-[580px]';
  const innerHeight = hasImages ? 'lg:h-[900px]' : 'lg:h-[620px]';

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const getScrollAmount = () => {
    return isMobile ? mobileCardWidth + gap : cardWidth + gap;
  };

  const getPaddingRight = () => {
    if (isMobile) {
      const containerWidth = 345;
      const visibleWidth = mobileCardWidth;
      return containerWidth - visibleWidth;
    }

    const containerWidth = 850;
    const visibleWidth = 2 * cardWidth + gap;
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
      className={`flex h-min w-full items-center justify-center ${bgColor} ${sectionHeight} py-10 lg:py-20`}
      style={{ background: bgGardient }}
    >
      <div className="absolute left-8 right-8 top-0 h-[1px] bg-neutral-35 lg:left-32 lg:right-32"></div>
      <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-neutral-35 lg:left-32 lg:right-32"></div>

      <div
        className={`${containerDecoration} flex h-min w-full flex-col items-center justify-center gap-10 ${innerHeight} lg:justify-center lg:gap-20`}
      >
        <div className="flex h-min w-[345px] flex-col justify-center gap-6 lg:w-[850px]">
          <p className="text-30 font-bold leading-tight text-gray-100 lg:text-3xl">{textContent.title}</p>

          <p className="text-base font-normal leading-tight text-gray-55 lg:text-lg">{textContent.description}</p>

          {redirection && (
            <Link
              href={'/privacy'}
              className="flex w-full cursor-pointer flex-row items-start justify-start gap-1 text-base font-medium text-primary hover:underline"
            >
              {textContent.cta}
              <CaretRight className="h-[24px] w-[24px] text-primary" />
            </Link>
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
            {cardTitles.map((title, index) => (
              <div
                key={title}
                className="flex-shrink-0"
                style={{
                  width: isMobile ? `${mobileCardWidth}px` : `${cardWidth}px`,
                }}
              >
                <div
                  className={
                    cardDecoration
                      ? `${bgColorCard} flex h-full flex-col rounded-16 p-6 lg:p-8`
                      : 'flex h-full flex-col justify-start'
                  }
                >
                  <div className="flex flex-col gap-6">
                    {cardImages && cardImages[index] && (
                      <div className="relative hidden h-[290px] w-full items-end overflow-hidden lg:flex">
                        <Image
                          src={getImage(`/images/business/features/${cardImages[index]}.webp`)}
                          alt="Internxt B2B Business Solution"
                          fill
                          quality={100}
                          style={{ objectFit: 'contain', objectPosition: 'bottom' }}
                        />
                      </div>
                    )}

                    <div className="flex flex-row gap-4">
                      <p className="text-left text-xl font-medium text-gray-100">{title}</p>
                    </div>

                    <p className="text-base font-normal leading-tight text-gray-55">{cardDescriptions[index]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex h-[48px] w-[345px] flex-row items-end justify-end lg:w-[850px]">
            <div className="flex w-[120px] justify-between">
              <button
                onClick={scrollLeft}
                disabled={!canScrollLeft}
                className={`flex h-[48px] w-[48px] items-center justify-center rounded-100 border border-primary bg-transparent transition-all hover:bg-primary/10 ${
                  !canScrollLeft ? 'cursor-not-allowed opacity-30' : 'cursor-pointer'
                }`}
                aria-label="Anterior"
              >
                <CaretLeft className="h-[24px] w-[24px] text-primary" />
              </button>
              <button
                onClick={scrollRight}
                disabled={!canScrollRight}
                className={`flex h-[48px] w-[48px] items-center justify-center rounded-100 border border-primary bg-transparent transition-all hover:bg-primary/10 ${
                  !canScrollRight ? 'cursor-not-allowed opacity-30' : 'cursor-pointer'
                }`}
                aria-label="Siguiente"
              >
                <CaretRight className="h-[24px] w-[24px] text-primary" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
