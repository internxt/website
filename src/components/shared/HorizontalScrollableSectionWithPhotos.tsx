import { getImage } from '@/lib/getImage';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function HorizontalScrollableSectionWithPhotos({ textContent }) {
  const cardTitles = textContent?.scrollableSection.titles ?? [];
  const cardDescriptions = textContent?.scrollableSection.descriptions;
  const cardImages = textContent?.scrollableSection?.imagesPathname || [];
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

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const amount = isMobile ? mobileScrollAmount : scrollAmount;
      const newIndex = Math.round(scrollLeft / amount);
      setCurrentIndex(Math.min(newIndex, getMaxIndex()));
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
      className="flex h-[860px] w-full flex-col items-center justify-center gap-12 bg-red py-20 lg:h-min"
      style={{ background: 'linear-gradient(180deg, #F4F8FF 0%, #FFFFFF 100%)' }}
    >
      <div className="flex h-min w-[832px] flex-col items-center gap-8 lg:gap-12">
        <p className="w-[320px] text-left text-30 font-bold leading-tight text-gray-100 lg:w-[832px] lg:text-left lg:text-5xl">
          {textContent.title}
        </p>
        <p className="w-[320px] text-left text-base font-normal leading-tight text-gray-55 lg:w-[832px] lg:text-left lg:text-lg">
          {textContent.description}
        </p>
      </div>

      <div className="flex flex-col">
        {/* Contenedor con scroll habilitado */}
        <div
          ref={scrollContainerRef}
          className="scrollbar-hide flex w-[320px] snap-x snap-mandatory flex-row items-start justify-start gap-8 overflow-x-auto scroll-smooth lg:w-[832px]"
          onScroll={handleScroll}
        >
          {cardTitles.map((title, index) => (
            <div key={title} className="flex snap-start snap-always flex-col">
              <Image
                src={getImage(`/images${cardImages[index]}.webp`)}
                alt="Internxt B2B Business Solution"
                height={500}
                width={400}
                quality={100}
                style={{ objectFit: 'contain', objectPosition: 'bottom' }}
              />
              <div className="h-full w-[320px] shrink-0 lg:w-[400px]">
                <div className="flex flex-row items-center justify-start gap-4 pt-8">
                  <p className="text-left text-xl font-medium text-gray-100">{title}</p>
                </div>
                <div className="py-4">
                  <p className="text-base font-normal leading-tight text-gray-55 lg:text-lg">
                    {cardDescriptions[index]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex h-[48px] w-[310px] flex-row items-end justify-end lg:w-[832px]">
          <div className="flex w-[120px] justify-between">
            <button
              onClick={scrollLeft}
              disabled={currentIndex === 0}
              className={`flex h-[48px] w-[48px] items-center justify-center rounded-100 border border-primary bg-white transition-opacity ${
                currentIndex === 0 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-white-summer'
              }`}
            >
              <CaretLeft className="h-[24px] w-[24px] text-primary" />
            </button>
            <button
              onClick={scrollRight}
              disabled={currentIndex === maxIndex}
              className={`flex h-[48px] w-[48px] items-center justify-center rounded-100 border border-primary bg-white transition-opacity ${
                currentIndex === maxIndex ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-white-summer'
              }`}
            >
              <CaretRight className="h-[24px] w-[24px] text-primary" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}</style>
    </section>
  );
}
