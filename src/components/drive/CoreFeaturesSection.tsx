import { DriveText } from '@/assets/types/drive';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

interface CoreFeaturesSectionProps {
  textContent: DriveText['CoreFeatures'];
}

const CoreFeaturesSection = ({ textContent }: CoreFeaturesSectionProps): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const mobileCardWidth = 293;
  const mobileGap = 32;

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const updateScrollButtons = () => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  const scrollLeft = () => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = mobileCardWidth + mobileGap;
    scrollContainerRef.current.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = mobileCardWidth + mobileGap;
    scrollContainerRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer || !isMobile) return;

    updateScrollButtons();
    scrollContainer.addEventListener('scroll', updateScrollButtons);
    const resizeObserver = new ResizeObserver(updateScrollButtons);
    resizeObserver.observe(scrollContainer);

    return () => {
      scrollContainer.removeEventListener('scroll', updateScrollButtons);
      resizeObserver.disconnect();
    };
  }, [isMobile]);

  const handleAccordionClick = (index: number) => {
    setActiveIndex(index);
  };

  const getPaddingRight = () => {
    const containerWidth = 345;
    const visibleWidth = mobileCardWidth;
    const paddingRight = containerWidth - visibleWidth;
    return paddingRight;
  };

  return (
    <section className="flex w-full flex-col items-start justify-center gap-6 bg-neutral-17 px-5 py-20 lg:py-20 lg:pl-10 xl:pl-32 3xl:pl-80">
      <h2 className="text-4xl font-bold text-gray-100">{textContent.title}</h2>
      <p className="text-lg font-normal text-gray-55">{textContent.description}</p>

      <div className="flex w-full flex-row gap-8">
        <div className="flex w-full flex-col gap-6 lg:w-1/2">
          <div className="flex flex-row items-center justify-between lg:hidden">
            <Image
              src={getImage(`/images/drive/mockup1.webp`)}
              alt={textContent.accordionCards.titles[activeIndex]}
              height={188}
              width={95}
              className="rounded-16 object-cover"
            />
            <Image
              src={getImage(`/images/drive/mockup2.webp`)}
              alt={textContent.accordionCards.titles[activeIndex]}
              height={188}
              width={95}
              className="rounded-16 object-cover"
            />
            <Image
              src={getImage(`/images/drive/mockup3.webp`)}
              alt={textContent.accordionCards.titles[activeIndex]}
              height={188}
              width={95}
              className="rounded-16 object-cover"
            />
          </div>
          {textContent.accordionCards.titles.map((title: string, index: number) => (
            <button
              key={index}
              onClick={() => handleAccordionClick(index)}
              className={`flex flex-col rounded-16 bg-white text-left transition-all duration-300 ${
                activeIndex === index ? 'gap-6 p-8' : 'gap-0 px-8 py-4'
              }`}
              aria-expanded={activeIndex === index}
            >
              <span className="flex flex-row items-center gap-4 text-2xl font-medium text-primary">
                {index + 1}
                <p className="text-xl font-medium text-gray-100">{title}</p>
              </span>
              <div
                className={`grid transition-all duration-300 ${
                  activeIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-base font-normal leading-tight text-gray-55">
                    {textContent.accordionCards.descriptions[index]}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
        <div className="hidden flex-row items-end gap-8 lg:flex">
          <Image
            src={getImage(`/images/drive/mockup${activeIndex + 1}.webp`)}
            alt={textContent.accordionCards.titles[activeIndex]}
            height={360}
            width={180}
            className="rounded-16 object-cover"
          />

          <Image
            src={getImage(`/images/drive/mockup${activeIndex + 1 + 3}.webp`)}
            alt={textContent.accordionCards.titles[activeIndex]}
            height={426}
            width={500}
            className="rounded-16 object-cover"
          />
        </div>
      </div>

      <div className="flex w-full flex-col gap-4 lg:gap-0">
        <div
          ref={scrollContainerRef}
          className="scrollbar-hide flex w-full flex-row gap-8 overflow-x-auto scroll-smooth lg:pr-10 xl:pr-32 3xl:pr-80"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            paddingRight: isMobile ? `calc(20px + ${getPaddingRight()}px)` : undefined,
          }}
        >
          {textContent.cards.titles.map((title: string, index: number) => (
            <div
              key={index}
              className="flex-shrink-0 lg:w-1/3 lg:flex-shrink"
              style={{
                width: isMobile ? `${mobileCardWidth}px` : undefined,
              }}
            >
              <div className="flex flex-col gap-2 px-4 pt-8">
                <p className="text-xl font-medium text-gray-100">{title}</p>
                <p className="text-base font-normal leading-tight text-gray-55">
                  {textContent.cards.descriptions[index]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {isMobile && (
          <div className="flex h-[48px] w-full flex-row items-end justify-end">
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
};

export default CoreFeaturesSection;
