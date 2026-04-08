import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useRef, useState, useEffect } from 'react';
import { ReferAFriendText } from '@/assets/types/refer-a-friend';

interface HowItWorksSectionProps {
  textContent: ReferAFriendText['HowItWorks'];
}

export default function HowItWorksSection({ textContent }: Readonly<HowItWorksSectionProps>): JSX.Element {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

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
      return 293 + 32; // mobileCardWidth + gap
    }
    return 400 + 32; // estimate
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
    scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  const scrollRight = () => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = getScrollAmount();
    scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
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
      className={`flex h-min w-full flex-col items-center justify-center gap-6 overflow-hidden py-10 lg:gap-14 lg:px-20 lg:py-20 xl:px-32 3xl:px-80`}
      style={{ background: 'linear-gradient(0deg, #F4F8FF 0%, #FFFFFF 100%)' }}
    >
      <div className="flex flex-col items-center gap-2 px-4">
        <p className="text-4xl font-bold text-gray-100">{textContent.title}</p>
        <p className="text-2xl font-medium text-gray-55">{textContent.subtitle}</p>
      </div>
      <div className="flex h-min w-full flex-col items-center gap-4 lg:gap-8">
        <div
          ref={scrollContainerRef}
          className="scrollbar-hide flex w-full flex-row gap-8 overflow-x-auto scroll-smooth px-8 lg:px-0"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {textContent.cards.map((card: any, index: number) => (
            <div
              key={index}
              className="flex flex-1 shrink-0 flex-col gap-6 rounded-16 bg-white p-8"
              style={{
                width: isMobile ? '293px' : 'auto',
              }}
            >
              <span className="flex flex-row items-center gap-2">
                <p className="text-2xl font-medium text-primary">{index + 1}</p>
                <p className="text-center text-xl font-medium text-gray-100">{card.title}</p>
              </span>
              <p className="text-start text-base font-normal leading-tight text-gray-55">{card.description}</p>
            </div>
          ))}
        </div>

        {isMobile && (
          <div className="flex h-[48px] w-full flex-row items-end justify-end px-8">
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
        )}
      </div>
    </section>
  );
}
