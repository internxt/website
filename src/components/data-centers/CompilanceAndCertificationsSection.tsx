import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useRef, useState, useEffect } from 'react';
import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import { ImageAndCards } from '../shared/ImageAndCards';

interface ComplianceAndCertificationsProps {
  textContent: any;
  darkMode?: boolean;
}

export default function ComplianceAndCertificationsSection({
  textContent,
  darkMode = false,
}: Readonly<ComplianceAndCertificationsProps>): JSX.Element {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  const CARD_WIDTH_MOBILE = 361;
  const CARD_WIDTH_DESKTOP = 376;
  const cardWidth = isDesktop ? CARD_WIDTH_DESKTOP : CARD_WIDTH_MOBILE;
  const maxIndex = isDesktop ? textContent.cards.titles.length - 1 : textContent.cards.titles.length - 2;

  useEffect(() => {
    const updateScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  const scrollToIndex = (newIndex: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth',
      });
      setCurrentIndex(newIndex);
    }
  };

  const scrollLeft = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  const scrollRight = () => {
    if (currentIndex < maxIndex) {
      scrollToIndex(currentIndex + 1);
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(newIndex);
    }
  };

  const textColorClass = darkMode ? 'text-white-95' : 'text-gray-95';
  const descriptionColorClass = darkMode ? 'text-green-120' : 'text-gray-55';
  const bgColorClass = darkMode ? 'bg-gray-105' : 'bg-white';
  const buttonBgClass = darkMode ? 'bg-[#1C1C1C]' : 'bg-white';
  const buttonHoverClass = darkMode ? 'hover:bg-gray-105' : 'hover:bg-white-summer';

  return (
    <section className="flex h-min w-full flex-col items-center justify-center gap-8 overflow-hidden bg-neutral-17 pb-10 lg:h-min lg:gap-16 lg:py-20">
      <div className={`absolute bottom-0 left-8 right-8 h-[1px] bg-neutral-35 lg:bottom-0 lg:left-32 lg:right-32`} />

      <ImageAndCards textContent={textContent} image="/images/datacenters-and-certifications/image.webp" />

      <div className="flex h-min w-full flex-col items-center gap-4 lg:gap-16">
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="w-full overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <div
            className="3xl:pl-84 flex gap-4 lg:gap-6 lg:pl-32 lg:pr-48 1.5xl:pl-48 1.5xl:pr-64 2xl:pl-60 2xl:pr-72"
            style={{
              width: 'max-content',
              alignItems: 'stretch',
            }}
          >
            {textContent.cards.titles.map((title: string, index: number) => (
              <div key={index} className="flex-shrink-0">
                <div className={`flex h-full w-[345px] flex-col gap-4 rounded-16 ${bgColorClass} p-6 lg:w-[352px]`}>
                  <div className="flex flex-row items-center gap-4">
                    <Image
                      loading="lazy"
                      src={getImage(`/images/datacenters-and-certifications/${textContent.cards.images[index]}.webp`)}
                      draggable="false"
                      alt={`${title} certification`}
                      width={64}
                      height={64}
                      quality={100}
                    />
                    <h3 className={`text-lg font-medium ${textColorClass} lg:text-xl`}>{title}</h3>
                  </div>
                  <p className={`${descriptionColorClass} flex-1 text-sm font-normal leading-tight lg:text-base`}>
                    {textContent.cards.description[index]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex h-[48px] w-[310px] flex-row items-end justify-end lg:w-full lg:px-10 xl:px-32 3xl:px-80">
          <div className="flex w-[120px] justify-between">
            <button
              onClick={scrollLeft}
              disabled={currentIndex === 0}
              aria-label="Scroll left"
              className={`flex h-[48px] w-[48px] items-center justify-center rounded-100 border border-primary ${buttonBgClass} transition-opacity ${
                currentIndex === 0 ? 'cursor-not-allowed opacity-50' : `cursor-pointer ${buttonHoverClass}`
              }`}
            >
              <CaretLeft className="h-[24px] w-[24px] text-primary" />
            </button>
            <button
              onClick={scrollRight}
              disabled={currentIndex === maxIndex}
              aria-label="Scroll right"
              className={`flex h-[48px] w-[48px] items-center justify-center rounded-100 border border-primary ${buttonBgClass} transition-opacity ${
                currentIndex === maxIndex ? 'cursor-not-allowed opacity-50' : `cursor-pointer ${buttonHoverClass}`
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
