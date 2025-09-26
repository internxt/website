import { getImage } from '@/lib/getImage';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { MeetPageText } from '@/assets/meet';

interface HorizontalScrollableSectionWithPhotosProps {
  textContent: MeetPageText['desginedSection'];
}

export default function HorizontalScrollableSectionWithPhotosSection({
  textContent,
}: HorizontalScrollableSectionWithPhotosProps): JSX.Element {
  const cardTitles = textContent?.scrollableSection.titles ?? [];
  const cardDescriptions = textContent?.scrollableSection.descriptions ?? [];
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const cardWidth = 350;
  const mobileCardWidth = 345;
  const gap = 24;
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
      className="flex h-min w-full flex-col items-center justify-center gap-8 py-10 lg:h-min lg:gap-16 lg:py-20"
      style={{ background: 'linear-gradient(180deg, #F4F8FF 0%, #FFFFFF 100%)' }}
    >
      <div className="absolute left-8 right-8 top-0 h-[1px] bg-neutral-35 lg:bottom-0 lg:left-32 lg:right-32"></div>
      <div className="flex h-min w-[345px] flex-col justify-center gap-6 lg:w-[850px]">
        <p className="text-30 font-bold leading-tight text-gray-95 lg:text-3xl">{textContent.title}</p>
        <p className="text-base font-normal leading-tight text-gray-55 lg:text-xl">{textContent.description}</p>
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
            className="flex gap-4 lg:gap-6 lg:pl-32 lg:pr-64 1.5xl:pl-48 1.5xl:pr-64 2xl:pl-60 2xl:pr-72"
            style={{
              width: 'max-content',
              alignItems: 'stretch',
            }}
          >
            {cardTitles.map((title: string, index: number) => (
              <div key={title} className="flex-shrink-0">
                <Image
                  src={getImage(`/images/meet/${textContent.scrollableSection.images[index]}.webp`)}
                  alt="Internxt Meet Solution"
                  height={320}
                  width={352}
                  quality={100}
                  style={{ objectFit: 'contain', objectPosition: 'center' }}
                  className="rounded-t-16"
                />
                <div className="flex h-min w-[345px] flex-col rounded-b-16 bg-white pb-8 pt-6 lg:w-[350px]">
                  <p className="pb-6 text-xl font-medium text-gray-95">{title}</p>
                  <p className="flex-1 text-base font-normal leading-tight text-gray-55">{cardDescriptions[index]}</p>
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
    </section>
  );
}
