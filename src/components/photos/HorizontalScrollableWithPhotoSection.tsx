import { getImage } from '@/lib/getImage';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { PhotoText } from '@/assets/types/photos';

interface HorizontalScrollableSectionWithPhotosProps {
  textContent: PhotoText['DesignedSection'];
}

export default function HorizontalScrollableSectionWithPhotosSection({
  textContent,
}: Readonly<HorizontalScrollableSectionWithPhotosProps>): JSX.Element {
  const cardTitles = textContent?.scrollableSection.titles ?? [];
  const cardDescriptions = textContent?.scrollableSection.descriptions ?? [];
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const cardWidth = 350;
  const mobileCardWidth = 300;
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
      className="flex h-min w-full flex-col items-center justify-center gap-2 py-5 pt-14 lg:h-min lg:gap-14 lg:pt-20"
      style={{ background: '#FFFFFF 100%' }}
    >
      <div className="w-full max-w-[1200px] px-5 lg:px-8">
        <div className="flex h-min w-full max-w-[850px] flex-col justify-center gap-6 lg:ml-20 lg:pl-14">
          <h2 className="text-[30px] font-bold leading-tight text-gray-95 lg:text-5xl">{textContent.title}</h2>
        </div>
      </div>

      <div className="flex h-min w-full flex-col items-center gap-4 pb-4 lg:gap-8">
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            paddingLeft: isMobile ? '20px' : 'calc((100vw - 850px) / 2)',
            paddingRight: isMobile
              ? '20px'
              : 'calc((100vw - 850px) / 2)',
          }}
        >
          <div
            className="flex gap-4 lg:gap-6"
            style={{
              width: 'max-content',
              alignItems: 'stretch',
            }}
          >
            {cardTitles.map((title: string, index: number) => (
              <div key={title} className="flex-shrink-0 items-center">
                <div className="flex h-min w-[300px] flex-col rounded-b-16 pb-8 pt-6 lg:w-[350px]">
                  <h3 className="pb-6 text-[18px] font-medium text-gray-95 lg:text-[20px]">{title}</h3>
                  <p className="flex-1 text-xs lg:text-base font-normal leading-tight text-gray-55">{cardDescriptions[index]}</p>
                </div>
                <Image
                  src={getImage(`/images/photos/${textContent.scrollableSection.images[index]}.webp`)}
                  alt="Internxt Mail"
                  height={150}
                  width={350}
                  quality={100}
                  className="hidden rounded-16 lg:block lg:-ml-4"
                  />
                <Image
                  src={getImage(`/images/photos/${textContent.scrollableSection.images[index]}.webp`)}
                  alt="Internxt Mail"
                  height={320}
                  width={300}
                  quality={100}
                  style={{ objectFit: 'contain', objectPosition: 'center' }}
                  className="block w-full rounded-16 lg:hidden -ml-4"
                  />
              </div>
            ))}
          </div>
        </div>
        <div className="flex h-[48px] w-[310px] flex-row items-end justify-end lg:w-[850px]">
          <div className="flex w-[120px] justify-between">
            <button
              type="button"
              onClick={scrollLeft}
              disabled={currentIndex === 0}
              className={`flex h-[48px] w-[48px] items-center justify-center rounded-100 border border-primary bg-white transition-opacity ${
                currentIndex === 0 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-white-summer'
              }`}
            >
              <CaretLeft className="h-[24px] w-[24px] text-primary" />
            </button>
            <button
              type="button"
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
